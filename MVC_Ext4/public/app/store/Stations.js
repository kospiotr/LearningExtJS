Ext.define('App.store.Stations', {
    extend: 'Ext.data.Store',
    requires: 'App.model.Station',
    model: 'App.model.Station',
    autoLoad: true,
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
                'id': -1,
                'name': 'All'
            },
            {
                'id': 1,
                'name': 'Rock'
            },
            {
                'id': 2,
                'name': 'Rock & Roll'
            },
            {
                'id': 3,
                'name': 'Pop'
            }
        ]
    }
});

