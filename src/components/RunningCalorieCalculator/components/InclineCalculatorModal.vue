<template>
    <v-dialog :value="value" max-width="600px">
        <v-card>
            <v-card-title>
                <span class="text-h5">Calculate Incline</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                                v-model="formData.elevation"
                                hide-details="auto"
                                label="Total elevation"
                                type="number"
                                outlined
                                clearable />
                        </v-col>

                        <v-col cols="6">
                            <v-select
                                v-model="formData.elevationUnit"
                                :items="dropdownOptions.elevation"
                                hide-details="auto"
                                outlined />
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="formData.distance"
                                hide-details="auto"
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
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="onSave"> Save </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { UNIT_KEY } from '../../../utils/constants';
import { getDropdownOptions } from '../helpers';

export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            formData: {
                distance: '',
                distanceUnit: UNIT_KEY.KILOMETER,
                elevation: '',
                elevationUnit: UNIT_KEY.METER,
            },
            dropdownOptions: {
                distance: getDropdownOptions('length', [UNIT_KEY.MILE, UNIT_KEY.KILOMETER]),
                elevation: getDropdownOptions('length', [UNIT_KEY.METER, UNIT_KEY.FOOT]),
            },
        };
    },
    methods: {
        onSave() {
            this.$emit('save', this.formData);
        },
    },
};
</script>
