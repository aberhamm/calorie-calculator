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
                                    :items="dropdownOptions.weight"
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
                                    :disabled="disabledField.speed"
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
import convert from 'convert-units';

import InclineCalculatorModal from './components/InclineCalculatorModal.vue';

import { FORM_CACHE_KEY, METERS_IN_ONE_KM, UNIT_KEY } from '../../utils/constants';
import { getConversions, getDropdownOptions } from './helpers';

export default {
    name: 'RunningCalorieCalculator',
    components: {
        InclineCalculatorModal,
    },
    data() {
        return {
            conversionTableHeader: [
                {
                    text: 'Calculated',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Metric',
                    value: 'metric',
                },
                {
                    text: 'Imperial',
                    value: 'imperial',
                },
            ],
            dataUnitMap: {
                elevation: {
                    imperial: UNIT_KEY.FOOT,
                    metric: UNIT_KEY.METER,
                },
                speed: {
                    imperial: UNIT_KEY.MILES_PER_HOUR,
                    metric: UNIT_KEY.KILOMETERS_PER_HOUR,
                },
                distance: {
                    imperial: UNIT_KEY.MILE,
                    metric: UNIT_KEY.KILOMETER,
                },
                weight: {
                    imperial: UNIT_KEY.POUND,
                    metric: UNIT_KEY.KILOGRAM,
                },
            },
            dropdownOptions: {
                distance: getDropdownOptions('length', [UNIT_KEY.MILE, UNIT_KEY.KILOMETER]),
                elevation: getDropdownOptions('length', [UNIT_KEY.METER, UNIT_KEY.FOOT]),
                speed: getDropdownOptions('speed', [
                    UNIT_KEY.MILES_PER_HOUR,
                    UNIT_KEY.KILOMETERS_PER_HOUR,
                ]),
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
                inclineCalculatorModal: false,
            },
        };
    },
    watch: {
        cacheData: function () {
            this.cacheForm();
        },
    },
    computed: {
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
            return getConversions(this.formData);
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
        getDropdownOptions(measure, options) {
            let units = convert().list(measure);

            if (options) {
                units = units.filter((unit) => options.includes(unit.abbr));
            }

            units = units.map((unit) => ({
                text: unit.plural,
                value: unit.abbr,
            }));

            return units;
        },
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
                console.error(error);
            }

            this.formData = { ...this.formData, ...formCache };
        },
        onInclineCalculatorSave(data) {
            this.formData = { ...this.formData, ...data };
            this.formData.degree = this.degree;
            this.modals.inclineCalculatorModal = false;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
