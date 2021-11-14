import convert from 'convert-units';
import {
    MINUTES_IN_ONE_HOUR,
    METERS_IN_ONE_KM,
    UNIT_KEY
} from './constants';

export const getDropdownOptions = (measurement, options) => {
    let units = convert().list(measurement);

    if (options) {
        units = units.filter((unit) => options.includes(unit.abbr));
    }

    units = units.map((unit) => ({
        text: unit.plural,
        value: unit.abbr,
    }));

    return units;
};

export const getConversions = ({
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
}) => {
    /**
     * Convert all to numbers and metric units
     */

    elevation = convert(Number(elevation)).from(elevationUnit).to(UNIT_KEY.METER);

    speed = convert(Number(speed)).from(speedUnit).to(UNIT_KEY.KILOMETERS_PER_HOUR);

    distance = convert(Number(distance)).from(distanceUnit).to(UNIT_KEY.KILOMETER);

    weight = convert(Number(weight)).from(weightUnit).to(UNIT_KEY.KILOGRAM);

    /**
     * Solve for missing variables
     */

    // If solving for speed
    if (!speed && time > 0) {
        speed = (distance / time) * MINUTES_IN_ONE_HOUR;
    }

    // If solving for time
    if (!time && speed) {
        time = (distance / speed) * MINUTES_IN_ONE_HOUR;
    }

    // If solving for distance
    if (!distance) {
        distance = (speed * time) / MINUTES_IN_ONE_HOUR;
    }

    // If solving for elevation
    if (!elevation) {
        elevation = (degree / 100) * distance * METERS_IN_ONE_KM;
    }

    return {
        imperial: {
            distance: convert(distance).from(UNIT_KEY.KILOMETER).to(UNIT_KEY.MILE),
            elevation: convert(elevation).from(UNIT_KEY.METER).to(UNIT_KEY.FOOT),
            speed: convert(speed).from(UNIT_KEY.KILOMETERS_PER_HOUR).to(UNIT_KEY.MILES_PER_HOUR),
            weight: convert(weight).from(UNIT_KEY.KILOGRAM).to(UNIT_KEY.POUND),
        },
        metric: {
            elevation,
            speed,
            distance,
            weight,
        },
    };
};
