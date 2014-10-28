Ext.define('App.store.Songs', {
    extend: 'Ext.data.Store',
    model: 'App.model.Song',
    requires: 'App.model.Song',
    autoload: true,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'results'
        }
    },
    data: {
        'success': true,
        'results': [
            {
                'id': 1,
                'title': 'Arahja',
                'artist': 'Kult',
                'station': 'Rock',
            },
            {
                'id': 2,
                'title': 'Happy',
                'artist': 'Pharell Williams',
                'station': 'Pop',
            },
            {
                'id': 3,
                'title': 'Crazy',
                'artist': 'Britney Spears',
                'station': 'Pop',
            }

        ]
    }
});

