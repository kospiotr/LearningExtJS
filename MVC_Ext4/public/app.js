Ext.application({
    name: 'Panda',
    models: ['Station', 'Song'],
    stores: ['Stations', 'RecentSongs', 'SearchResults'],
    controllers: ['Station'],
    autoCreateViewport: true,
    launch: function () {
        // This is fired as soon as the page is ready
    }
});

