<template>
    <v-dialog :value="value" max-width="600px">
        <v-card>
            <v-card-title>
                <span class="text-h5">Calculate Incline</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="formData.elevation"
                                hide-details="auto"
                                label="Total elevation"
                                type="number"
                                outlined
                                clearable />
                        </v-col>

                        <v-col cols="12">
                            <v-radio-group v-model="formData.elevationUnit" row>
                                <v-radio label="feet" value="imperial" />
                                <v-radio label="meters" value="metric" />
                            </v-radio-group>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="formData.distance"
                                label="Distance"
                                type="number"
                                outlined
                                clearable />
                        </v-col>
                        <v-col cols="12">
                            <v-radio-group v-model="formData.distanceUnit" row>
                                <v-radio label="miles" value="imperial" />
                                <v-radio label="kilometers" value="metric" />
                            </v-radio-group>
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
                distanceUnit: 'metric',
                elevation: '',
                elevationUnit: 'metric',
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
