// ...
plugins: [
    // other plugins,zz
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
]
//...