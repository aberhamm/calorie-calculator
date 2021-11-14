import { calculateRunningCalories } from "~/utils/calculators";
import Trip from "~/models/trip";

// initial state
const state = () => ({
    trips: []
});

// getters
const getters = {
    getTripById: (state) => (id) => {
        return state.trips.find(trip => trip.id === id);
    },
    latestTrip: (state,/* getters */) => {
        const { trips } = state;
        const tripCount = trips.length;

        return tripCount ? trips[tripCount - 1] : null;
    }
};

// actions
const actions = {
    processData({ commit }, data) {
        const calories = calculateRunningCalories(data);

        commit('CREATE_TRIP', {
            calories,
            ...data
        });
    },
};

// mutations
const mutations = {
    CREATE_TRIP(state, payload) {
        const trip = new Trip(payload);

        state.trips.push(trip);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
