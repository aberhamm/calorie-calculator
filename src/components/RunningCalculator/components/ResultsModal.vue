<template>
    <v-bottom-sheet
        :value="open"
        scrollable
        @click:outside="$emit('close')">
        <v-sheet class="text-center">
            <v-btn class="mt-6" text color="red" @click="$emit('close')">
                close
            </v-btn>
            <div v-if="latestTrip">
                <trip-data :trip-id="latestTrip.id" />
            </div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>
import { mapGetters } from 'vuex';
import TripData from '../../TripData';

export default {
    name: 'ResultsModal',
    components: {
        TripData
    },
    props: {
        open: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters('running', ['latestTrip']),
    },
};
</script>
