<template>
    <v-container class="RunningCalorieCalculator">
        <v-row>
            <v-col cols="8">
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
                                    clearable
                                />
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
                                    clearable
                                />
                            </v-col>

                            <v-col cols="6">
                                <v-radio-group
                                    v-model="formData.weightUnit"
                                    row
                                >
                                    <v-radio label="pounds" value="imperial" />
                                    <v-radio label="kilos" value="metric" />
                                </v-radio-group>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    hide-details="auto"
                                    v-model="formData.degree"
                                    :disabled="disabledField.degree"
                                    label="Degree (%)"
                                    type="number"
                                    outlined
                                    clearable
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12"> - or - </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field
                                    hide-details="auto"
                                    v-model="formData.elevation"
                                    :disabled="disabledField.elevation"
                                    label="Elevation"
                                    type="number"
                                    outlined
                                    clearable
                                />
                            </v-col>

                            <v-col cols="6">
                                <v-radio-group
                                    v-model="formData.elevationUnit"
                                    row
                                >
                                    <v-radio label="feet" value="imperial" />
                                    <v-radio label="meters" value="metric" />
                                </v-radio-group>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    hide-details="auto"
                                    v-model="formData.time"
                                    :disabled="disabledField.time"
                                    label="Time (min)"
                                    type="number"
                                    outlined
                                    clearable
                                />
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
                                    clearable
                                />
                            </v-col>

                            <v-col cols="6">
                                <v-radio-group
                                    v-model="formData.distanceUnit"
                                    row
                                >
                                    <v-radio label="miles" value="imperial" />
                                    <v-radio
                                        label="kilometers"
                                        value="metric"
                                    />
                                </v-radio-group>
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
                                    clearable
                                />
                            </v-col>

                            <v-col cols="6">
                                <v-radio-group v-model="formData.speedUnit" row>
                                    <v-radio label="mph" value="imperial" />
                                    <v-radio label="kmph" value="metric" />
                                </v-radio-group>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-checkbox
                                    v-model="formData.saveMeasurements"
                                    label="Save measurements and configuration for next time."
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn
                                    type="submit"
                                    class="ma-2"
                                    outlined
                                    color="indigo"
                                >
                                    Submit
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-col>
            <v-col cols="4">
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-card-title class="subheading font-weight-bold">
                                Results
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-list dense>
                                <v-list-item>
                                    <v-list-item-content
                                        >Calories:</v-list-item-content
                                    >
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
                            :items="[
                                {
                                    name: 'Calories',
                                    metric: calories,
                                },
                                {
                                    name: 'Degree',
                                    metric: degree,
                                },
                            ]"
                            class="elevation-1"
                        />
                        <table>
                            <tr>
                                <td>Calories:</td>
                                <td>{{ calories }}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Degree</td>
                                <td>{{ degree }}%</td>
                                <td></td>
                            </tr>
                            <tr
                                v-for="(value, key, i) in dataUnitMap"
                                :key="i"
                                class="data-chart"
                            >
                                <td>{{ key }}:</td>
                                <td>
                                    {{ conversion.metric[key] }}
                                    {{ value.metric }}
                                </td>
                                <td>
                                    {{ conversion.imperial[key] }}
                                    {{ value.imperial }}
                                </td>
                            </tr>
                        </table>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
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

export default {
    name: 'RunningCalorieCalculator',
    data() {
        return {
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
            dataUnitMap: {
                elevation: {
                    imperial: 'ft.',
                    metric: 'm.',
                },
                speed: {
                    imperial: 'mph',
                    metric: 'kmph',
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
        };
    },
    computed: {
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
             * Convert all to metric
             */

            if (elevationUnit !== 'metric') {
                elevation *= MULTIPLIER_FEET_TO_MET;
            }

            if (speedUnit !== 'metric') {
                speed *= MULTIPLIER_MILES_TO_KM;
            }

            if (distanceUnit !== 'metric') {
                distance *= MULTIPLIER_MILES_TO_KM;
            }

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
        disabledField() {
            const { degree, distance, elevation, speed, time } = this.formData;

            return {
                degree: !!elevation,
                distance: !!(speed && time),
                elevation: !!degree,
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
            const {
                age,
                saveMeasurements,
                speedUnit,
                distanceUnit,
                weight,
                weightUnit,
            } = this.formData;

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
        onSubmit() {
            this.cacheForm();
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
