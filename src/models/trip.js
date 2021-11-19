import convert from 'convert-units';
import { DATUM_UNIT } from '~/utils/constants';

class Trip {
    id = 0;
    calories = 0;
    degree = 0;
    distance = 0;
    distanceUnit = '';
    elevation = 0;
    elevationUnit = '';
    speed = 0;
    speedUnit = '';
    time = 0;
    weight = 0;
    weightUnit = '';

    get displayCalories() {
        return this.calories.toFixed(2);
    }

    get displayDistance() {
        return `${this.distance.toFixed(2)} ${this.distanceUnit}`;
    }
    get displayElevation() {
        return `${this.elevation.toFixed(2)} ${this.elevationUnit}`;
    }
    get displaySpeed() {
        return `${this.speed.toFixed(2)} ${this.speedUnit}`;
    }
    get displayWeight() {
        return `${this.weight.toFixed(2)} ${this.weightUnit}`;
    }

    constructor({
        calories,
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
    }) {
        this.id = Date.now();
        this.calories = Number(calories);
        this.degree = Number(degree);
        this.distance = Number(distance);
        this.distanceUnit = distanceUnit;
        this.elevation = Number(elevation);
        this.elevationUnit = elevationUnit;
        this.speed = Number(speed);
        this.speedUnit = speedUnit;
        this.time = Number(time);
        this.weight = Number(weight);
        this.weightUnit = weightUnit;
    }

    toUnitSystem(datumUnit) {
        const { ELEVATION, SPEED, DISTANCE, WEIGHT } = datumUnit;
        const unitTrip =  {
            elevation: convert(this.elevation).from(this.elevationUnit).to(ELEVATION),
            elevationUnit: ELEVATION,
            speed: convert(this.speed).from(this.speedUnit).to(SPEED),
            speedUnit: SPEED,
            distance: convert(this.distance).from(this.distanceUnit).to(DISTANCE),
            distanceUnit: DISTANCE,
            weight: convert(this.weight).from(this.weightUnit).to(WEIGHT),
            weightUnit: WEIGHT,
        }
        return new Trip({ ...this, ...unitTrip });
    }

    toImperial() {
        return this.toUnitSystem(DATUM_UNIT.IMPERIAL);
    }

    toMetric() {
        return this.toUnitSystem(DATUM_UNIT.METRIC);
    }
}

export default Trip;
