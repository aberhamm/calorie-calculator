export const FORM_CACHE_KEY = 'formData';
export const MINUTES_IN_ONE_HOUR = 60;
export const METERS_IN_ONE_KM = 1000;
export const UNIT_KEY = {
    FOOT: 'ft',
    KILOGRAM: 'kg',
    KILOMETER: 'km',
    KILOMETERS_PER_HOUR: 'km/h',
    METER: 'm',
    MILE: 'mi',
    MILES_PER_HOUR: 'm/h',
    POUND: 'lb',
};

export const TABLE_HEADERS = {
    DATUM: 'datum',
    IMPERIAL: 'imperial',
    METRIC: 'metric',
}

export const DATUM_UNIT = {
    IMPERIAL: {
        DISTANCE: UNIT_KEY.MILE,
        ELEVATION: UNIT_KEY.FOOT,
        SPEED: UNIT_KEY.MILES_PER_HOUR,
        WEIGHT: UNIT_KEY.POUND,
    },
    METRIC: {
        DISTANCE: UNIT_KEY.KILOMETER,
        ELEVATION: UNIT_KEY.METER,
        SPEED: UNIT_KEY.KILOMETERS_PER_HOUR,
        WEIGHT: UNIT_KEY.KILOGRAM,
    }
};
