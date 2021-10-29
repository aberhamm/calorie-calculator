module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/calorie-calculator/' : '/',
    transpileDependencies: ['vuetify'],
};
