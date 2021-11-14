<template>
    <v-expansion-panels>
        <v-expansion-panel
            v-for="({ calories }, i) in trips"
            :key="i">
            <v-expansion-panel-header>
                <v-row no-gutters>
                    <v-col cols="3">
                        Calories: {{ calories }}
                    </v-col>
                </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'TripList',
    computed: {
        ...mapState('running', ['trips']),
    },
};
</script>
