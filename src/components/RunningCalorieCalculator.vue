<template>
    <v-container class="RunningCalorieCalculator">
        <v-row>
            <v-col cols="12" md="8">
                <v-form class="calculator">
                    <v-container>
                        <v-row>
                            <v-col cols="12">
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
                                    v-model="formData.weightUnit"
                                    :items="unitDropdownItems.weight"
                                    hide-details="auto"
                                    outlined />
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-divider></v-divider>
                        </v-row>

                        <v-row align="center">
                            <v-col cols="6">
                                <v-text-field
                                    hide-details="auto"
                                    v-model="formData.degree"
                                    label="Degree (%)"
                                    type="number"
                                    outlined
                                    clearable />
                            </v-col>
                            <v-col cols="6">
                                <v-btn
                                    color="primary"
                                    small
                                    text
                                    @click.stop="modals.inclineCalculatorModal = true">
                                    Calculate
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    hide-details="auto"
                                    v-model="formData.time"
                                    :disabled="disabledField.time"
                                    label="Time (min)"
                                    type="number"
                                    outlined
                                    clearable />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    hide-details="auto"
                                    v-model="formData.distance"
                                    :disabled="disabledField.distance"
                                    label="Distance"
                                    type="number"
                                    outlined
                                    clearable />
                            </v-col>

                            <v-col cols="6">
                                <v-select
                                    v-model="formData.distanceUnit"
                                    :items="unitDropdownItems.distance"
                                    hide-details="auto"
                                    outlined />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    hide-details="auto"
                                    v-model="formData.speed"
                                    :disabled="disabledField.speed"
                                    label="Speed"
                                    type="number"
                                    outlined
                                    clearable />
                            </v-col>

                            <v-col cols="6">
                                <v-select
                                    v-model="formData.speedUnit"
                                    :items="unitDropdownItems.speed"
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
                    </v-container>
                </v-form>
            </v-col>
            <v-col cols="12" md="4">
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-card-title class="subheading font-weight-bold">
                                Results
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-list dense>
                                <v-list-item>
                                    <v-list-item-content>Calories:</v-list-item-content>
                                    <v-list-item-content class="align-end">
                                        {{ calories }}
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-data-table
                            dense
                            disable-filtering
                            disable-pagination
                            disable-sort
                            hide-default-footer
                            :headers="conversionTableHeader"
                            :items="conversionTableRows"
                            class="elevation-1" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <incline-calculator-modal
            :value="modals.inclineCalculatorModal"
            @save="onInclineCalculatorSave" />
    </v-container>
</template>

<script>
import {
    FORM_CACHE_KEY,
    SECONDS_IN_ONE_MINUTE,
    MULTIPLIER_MILES_TO_KM,
    MULTIPLIER_KM_TO_MILES,
    MULTIPLIER_LBS_TO_KG,
    MULTIPLIER_KG_TO_LBS,
    MULTIPLIER_FEET_TO_MET,
    MULTIPLIER_MET_TO_FEET,
    METERS_IN_ONE_KM,
} from '../utils/constants';

import InclineCalculatorModal from './modals/InclineCalculatorModal.vue';

export default {
    name: 'RunningCalorieCalculator',
    components: { InclineCalculatorModal },
    data() {
        return {
            conversionTableHeader: [
                {
                    text: 'Calculated',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Metric', value: 'metric' },
                { text: 'Imperial', value: 'imperial' },
            ],
            dataUnitMap: {
                elevation: {
                    imperial: 'ft.',
                    metric: 'm.',
                },
                speed: {
                    imperial: 'mph',
                    metric: 'kph',
                },
                distance: {
                    imperial: 'mi.',
                    metric: 'm.',
                },
                weight: {
                    imperial: 'lbs.',
                    metric: 'kg.',
                },
            },
            formData: {
                age: '',
                degree: '',
                distance: '',
                distanceUnit: 'metric',
                elevation: '',
                elevationUnit: 'metric',
                saveMeasurements: true,
                speed: '',
                speedUnit: 'metric',
                time: '',
                weight: '',
                weightUnit: 'metric',
            },
            modals: {
                inclineCalculatorModal: false,
            }
        };
    },
    computed: {
        unitDropdownItems () {
            let items = {};

            for (const [quantity, mapping] of Object.entries(this.dataUnitMap)) {
                for (const [measurementSystem, unit] of Object.entries(mapping)) {
                    items[quantity] = [ ...(items[quantity] || []), {
                        text: unit,
                        value: measurementSystem
                    }]
                }
            }

            return items;
        },
        degree() {
            const { degree } = this.formData;
            const { distance, elevation } = this.conversion.metric;

            if (degree) return degree;

            if (!(elevation && distance)) return 0;

            return (elevation / (distance * METERS_IN_ONE_KM)) * 100;
        },
        calories() {
            const { degree } = this;
            const { time } = this.formData;
            const { speed, weight } = this.conversion.metric;

            if (!(speed && time && weight)) {
                return 0;
            }

            const groundSpeed = speed + (speed * degree * 9) / 200;

            return (((groundSpeed * 1000) / 60 + 17.5) * time * weight) / 1000;
        },
        conversion() {
            let {
                degree,
                distance,
                distanceUnit,
                elevation,
                elevationUnit,
                speed,
                speedUnit,
                time,
                weight,
                weightUnit,
            } = this.formData;

            /**
             * Convert all to numbers and metric
             */

            elevation = Number(elevation);

            if (elevationUnit !== 'metric') {
                elevation *= MULTIPLIER_FEET_TO_MET;
            }

            speed = Number(speed);

            if (speedUnit !== 'metric') {
                speed *= MULTIPLIER_MILES_TO_KM;
            }

            distance = Number(distance);

            if (distanceUnit !== 'metric') {
                distance *= MULTIPLIER_MILES_TO_KM;
            }

            weight = Number(weight);

            if (weightUnit !== 'metric') {
                weight *= MULTIPLIER_LBS_TO_KG;
            }

            /**
             * Solve for missing variables
             */

            // If solving for speed
            if (!speed && time > 0) {
                speed = (distance / time) * SECONDS_IN_ONE_MINUTE;
            }

            // If solving for time
            if (!time && speed) {
                time = (distance / speed) * SECONDS_IN_ONE_MINUTE;
            }

            // If solving for distance
            if (!distance) {
                distance = (speed * time) / SECONDS_IN_ONE_MINUTE;
            }

            // If solving for elevation
            if (!elevation) {
                elevation = (degree / 100) * distance * METERS_IN_ONE_KM;
            }

            return {
                imperial: {
                    distance: distance * MULTIPLIER_KM_TO_MILES,
                    elevation: elevation * MULTIPLIER_MET_TO_FEET,
                    speed: speed * MULTIPLIER_KM_TO_MILES,
                    weight: weight * MULTIPLIER_KG_TO_LBS,
                },
                metric: {
                    elevation,
                    speed,
                    distance,
                    weight,
                },
            };
        },
        conversionTableRows() {
            const { conversion, dataUnitMap } = this;

            return Object.keys(dataUnitMap).map((key) => ({
                name: key,
                imperial: `${parseFloat(conversion.imperial[key]).toFixed(2)} ${
                    dataUnitMap[key].imperial
                }`,
                metric: `${parseFloat(conversion.metric[key]).toFixed(2)} ${
                    dataUnitMap[key].metric
                }`,
            }));
        },
        disabledField() {
            const { distance, speed, time } = this.formData;

            return {
                distance: !!(speed && time),
                speed: !!(distance && time),
                time: !!(distance && speed),
            };
        },
    },
    mounted() {
        this.restoreFormCache();
    },
    methods: {
        cacheForm() {
            const { age, saveMeasurements, speedUnit, distanceUnit, weight, weightUnit } =
                this.formData;

            if (!saveMeasurements) {
                localStorage.removeItem(FORM_CACHE_KEY);
                return;
            }

            const cacheData = {
                age,
                speedUnit,
                distanceUnit,
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
                console.error(error);
            }

            this.formData = { ...this.formData, ...formCache };
        },
        onInclineCalculatorSave (data) {
            this.formData = { ...this.formData, ...data };
            // this.$nextTick();
            this.formData.degree = this.degree;
            this.modals.inclineCalculatorModal = false;
        },
        onSubmit() {
            this.cacheForm();
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
