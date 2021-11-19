<template>
    <div class="RunningCalculator">
        <v-row no-gutters>
            <v-col cols="12" md="8">
                <running-form />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import convert from 'convert-units';
import { mapActions, mapState } from 'vuex';
import RunningForm from './components/RunningForm.vue';
import { UNIT_KEY } from '~/utils/constants';

export default {
    name: 'RunningCalculator',
    components: {
        RunningForm,
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
        };
    },
    watch: {
        cacheData: function () {
            this.cacheForm();
        },
    },
    computed: {
        ...mapState('running', ['trips']),
    },
    methods: {
        ...mapActions('running', ['calculateCalories']),
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
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
