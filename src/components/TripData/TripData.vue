<template>
    <div class="pb-16">
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
                                {{ trip.displayCalories }}
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-data-table
                        dense
                        disable-filtering
                        disable-pagination
                        disable-sort
                        hide-default-header
                        hide-default-footer
                        mobile-breakpoint="0"
                        :headers="tableHeader"
                        :items="tableRows"
                        class="elevation-1" />
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { TABLE_HEADERS as TH } from '~/utils/constants';

export default {
    name: 'TripData',
    props: {
        tripId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            tableHeader: [TH.DATUM, TH.METRIC, TH.IMPERIAL].map(value => ({ value }))
        }
    },
    computed: {
        ...mapGetters('running', ['getTripById']),
        tableRows() {
            if (!this.imperialTrip && !this.metricTrip) {
                return null;
            }

            return [
                {
                    [TH.DATUM]: 'Weight',
                    [TH.IMPERIAL]: this.imperialTrip.displayWeight,
                    [TH.METRIC]: this.metricTrip.displayWeight,
                },
                {
                    [TH.DATUM]: 'Distance',
                    [TH.IMPERIAL]: this.imperialTrip.displayDistance,
                    [TH.METRIC]: this.metricTrip.displayDistance,
                },
                {
                    [TH.DATUM]: 'Speed',
                    [TH.IMPERIAL]: this.imperialTrip.displaySpeed,
                    [TH.METRIC]: this.metricTrip.displaySpeed,
                },
                {
                    [TH.DATUM]: 'Elevation',
                    [TH.IMPERIAL]: this.imperialTrip.displayElevation,
                    [TH.METRIC]: this.metricTrip.displayElevation,
                },
            ]
        },
        trip() {
            return this.getTripById(this.tripId);
        },
        imperialTrip() {
            return this.trip.toImperial();
        },
        metricTrip() {
            return this.trip.toMetric();
        },
    }
};
</script>
