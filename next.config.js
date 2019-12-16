const webpack = require('webpack');
require('dotenv').config();

const withImages = require('next-images')
module.exports = withImages({
    webpack(config, options) {
        return config
    }
})

module.exports = {
    devIndicators: {
        autoPrerender: false,
        
    },

    webpack: config => {
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});

        config.plugins.push(new webpack.DefinePlugin(env));

        return config;
    }
};