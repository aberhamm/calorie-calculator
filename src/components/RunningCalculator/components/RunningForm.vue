<template>
    <div>
        <v-form @submit.prevent="onSubmit">
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <v-text-field
                            hide-details="auto"
                            v-model="formData.age"
                            label="Age"
                            type="number"
                            outlined
                            clearable />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-text-field
                            hide-details="auto"
                            v-model="formData.weight"
                            label="Weight"
                            type="number"
                            outlined
                            clearable />
                    </v-col>

                    <v-col cols="6">
                        <v-select
                            slot="append"
                            v-model="formData.weightUnit"
                            :items="dropdownOptions.weight"
                            hide-details="auto"
                            outlined />
                    </v-col>
                </v-row>

                <v-row>
                    <v-divider></v-divider>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-text-field
                            hide-details="auto"
                            v-model="formData.time"
                            :disabled="!!(calculatedData.time)"
                            :placeholder="calculatedData.time"
                            :persistent-placeholder="!!(calculatedData.time)"
                            label="Time (min)"
                            type="number"
                            outlined
                            clearable />
                    </v-col>
                </v-row>

                <v-row align="center">
                    <v-col cols="12" sm="6">
                        <v-text-field
                            hide-details="auto"
                            v-model="formData.degree"
                            label="Degree incline (%)"
                            type="number"
                            outlined
                            clearable>
                            <template v-slot:append>
                                <v-btn
                                    color="primary"
                                    small
                                    text
                                    @click.stop="modals.inclineCalculator = true">
                                    Calculate
                                </v-btn>
                            </template>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-text-field
                            hide-details="auto"
                            v-model="formData.distance"
                            :disabled="!!(calculatedData.distance)"
                            :placeholder="calculatedData.distance"
                            :persistent-placeholder="!!(calculatedData.distance)"
                            label="Distance"
                            type="number"
                            outlined
                            clearable />
                    </v-col>

                    <v-col cols="6">
                        <v-select
                            v-model="formData.distanceUnit"
                            :items="dropdownOptions.distance"
                            hide-details="auto"
                            outlined />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-text-field
                            hide-details="auto"
                            v-model="formData.speed"
                            :disabled="Boolean(calculatedData.speed)"
                            :placeholder="calculatedData.speed"
                            :persistent-placeholder="Boolean(calculatedData.speed)"
                            label="Speed"
                            type="number"
                            outlined
                            clearable />
                    </v-col>

                    <v-col cols="6">
                        <v-select
                            v-model="formData.speedUnit"
                            :items="dropdownOptions.speed"
                            hide-details="auto"
                            outlined />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-checkbox
                            v-model="formData.saveMeasurements"
                            label="Save measurements and configuration for next time." />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-btn type="submit">Submit</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        <incline-calculator-modal
            :dropdown-options="dropdownOptions"
            :open="modals.inclineCalculator"
            @save="onInclineCalculatorSave" />
        <results-modal
            :open.sync="modals.results"
            @close="modals.results = false" />
    </div>
</template>

<script>
import convert from 'convert-units';
import { mapActions, mapState } from 'vuex';

import InclineCalculatorModal from './InclineCalculatorModal.vue';
import ResultsModal from './ResultsModal.vue';

import {
    FORM_CACHE_KEY,
    MINUTES_IN_ONE_HOUR,
    UNIT_KEY,
} from '../../../utils/constants';

import { getDropdownOptions } from '../../../utils/helpers';

export default {
    name: 'RunningForm',
    components: {
        InclineCalculatorModal,
        ResultsModal,
    },
    data() {
        return {
            dropdownOptions: {
                distance: getDropdownOptions('length', [UNIT_KEY.MILE, UNIT_KEY.KILOMETER]),
                elevation: getDropdownOptions('length', [UNIT_KEY.METER, UNIT_KEY.FOOT]),
                speed: getDropdownOptions('speed', [UNIT_KEY.MILES_PER_HOUR, UNIT_KEY.KILOMETERS_PER_HOUR]),
                weight: getDropdownOptions('mass', [UNIT_KEY.KILOGRAM, UNIT_KEY.POUND]),
            },
            formData: {
                age: '',
                degree: '',
                distance: '',
                distanceUnit: UNIT_KEY.KILOMETER,
                elevation: '',
                elevationUnit: UNIT_KEY.METER,
                saveMeasurements: true,
                speed: '',
                speedUnit: UNIT_KEY.KILOMETERS_PER_HOUR,
                time: '',
                weight: '',
                weightUnit: UNIT_KEY.KILOGRAM,
            },
            modals: {
                inclineCalculator: false,
                results: false,
            },
        };
    },
    watch: {
        cacheData: function () {
            this.cacheForm();
        },
    },
    computed: {
        ...mapState('running', ['calories']),
        cacheData() {
            let {
                age,
                distanceUnit,
                elevationUnit,
                saveMeasurements,
                speedUnit,
                weight,
                weightUnit,
            } = this.formData;

            return `${age}|${distanceUnit}|${elevationUnit}|${saveMeasurements}|${speedUnit}|${weight}|${weightUnit}`;
        },
        calculatedData() {
            let {
                degree,
                distance,
                distanceUnit,
                elevation,
                elevationUnit,
                speed,
                speedUnit,
                time
            } = this.formData;
            const data = {};

            // Normalize input to numeric metric values
            let nDistance = distance ? convert(distance).from(distanceUnit).to(UNIT_KEY.KILOMETER) : 0;
            let nElevation = elevation ? convert(elevation).from(elevationUnit).to(UNIT_KEY.METER) : 0;
            let nSpeed = speed ? convert(speed).from(speedUnit).to(UNIT_KEY.KILOMETERS_PER_HOUR) : 0;
            let nTime = Number(time);
            let nDegree = Number(degree);

            if (!nDistance && nSpeed && nTime) {
                // Solve for distance using the product of speed and time
                nDistance = nSpeed * nTime / MINUTES_IN_ONE_HOUR;
                data.distance = convert(nDistance)
                    .from(UNIT_KEY.KILOMETER)
                    .to(distanceUnit)
                    .toFixed(2);
            } else if (!nSpeed && nDistance && nTime) {
                // Solve for speed using distance over time
                nSpeed = nDistance / nTime * MINUTES_IN_ONE_HOUR;
                data.speed = convert(nSpeed)
                    .from(UNIT_KEY.KILOMETERS_PER_HOUR)
                    .to(speedUnit)
                    .toFixed(2);
            } else if (!nTime && nDistance && nSpeed) {
                // Solve for time using distance and speed
                nTime = (nDistance / nSpeed * MINUTES_IN_ONE_HOUR)
                data.time = nTime.toFixed(2);
            }

            if (!nElevation && nDegree && nDistance) {
                nElevation = (degree / 100) * nDistance
                data.elevation = convert(nElevation)
                    .from(UNIT_KEY.KILOMETER)
                    .to(UNIT_KEY.METER);
            }

            return data;
        }
    },
    mounted() {
        this.restoreFormCache();
    },
    methods: {
        ...mapActions('running', ['processData']),
        cacheForm() {
            const {
                age,
                distanceUnit,
                elevationUnit,
                saveMeasurements,
                speedUnit,
                weight,
                weightUnit,
            } = this.formData;

            if (!saveMeasurements) {
                localStorage.removeItem(FORM_CACHE_KEY);
                return;
            }

            const cacheData = {
                age,
                distanceUnit,
                elevationUnit,
                speedUnit,
                weight,
                weightUnit,
            };

            localStorage.setItem(FORM_CACHE_KEY, JSON.stringify(cacheData));
        },
        restoreFormCache() {
            let formCache = localStorage.getItem(FORM_CACHE_KEY);

            if (!formCache) {
                return;
            }
            try {
                formCache = JSON.parse(formCache);
            } catch (error) {
                console.error(error); // eslint-disable-line no-console
            }

            this.formData = { ...this.formData, ...formCache };
        },
        onInclineCalculatorSave(data) {
            this.formData = { ...this.formData, ...data };
            this.modals.inclineCalculator = false;
        },
        onSubmit() {
            const data = this.sanitizeData({ ...this.formData, ...this.calculatedData });
            this.processData(data);
            this.modals.results = true;
        },
        sanitizeData (unsanitaryData) {
            const sanitizedData = {};

            sanitizedData.age = Number(unsanitaryData.age);
            sanitizedData.degree = Number(unsanitaryData.degree);
            sanitizedData.distance = Number(unsanitaryData.distance);
            sanitizedData.elevation = Number(unsanitaryData.elevation);
            sanitizedData.speed = Number(unsanitaryData.speed);
            sanitizedData.time = Number(unsanitaryData.time);
            sanitizedData.weight = Number(unsanitaryData.weight);

            return { ...unsanitaryData, ...sanitizedData };
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
