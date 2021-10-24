export function convertMeasurements(
    value,
    selectedUnit,
    desiredUnit,
    multiplier
) {
    console.log({ value, selectedUnit, desiredUnit, multiplier });
    return selectedUnit === desiredUnit ? value : multiplier * value;
}
