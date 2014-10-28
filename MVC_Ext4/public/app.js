Ext.application({
    name: 'App',
    models: [
        'Station', 
        'Song'
    ],
    stores: [
        'Stations', 
        'Songs'
    ],
    controllers: ['Station'],
    autoCreateViewport: true,
    launch: function () {
        // This is fired as soon as the page is ready
    }
});

