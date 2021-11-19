import convert from 'convert-units';
import {
    UNIT_KEY
} from './constants';

const calculateInclinePercentage = ({
    distance,
    distanceUnit,
    elevation,
    elevationUnit
}) => {
    if (!elevation || !distance) return 0;

    const elevationMeters = convert(elevation).from(elevationUnit).to(UNIT_KEY.METER);
    const distanceMeters = convert(distance).from(distanceUnit).to(UNIT_KEY.METER);

    return (elevationMeters / distanceMeters) * 100;
};

const calculateRunningCalories = ({ degree, time, speed, weight }) => {
    if (!(speed && time && weight)) {
        return 0
    }

    // Convert incline to ground speed
    const groundSpeed = speed + (speed * degree * 9) / 200;

    const calories = (((groundSpeed * 1000) / 60 + 17.5) * time * weight) / 1000;

    return calories;
};

export {
    calculateInclinePercentage,
    calculateRunningCalories
}
