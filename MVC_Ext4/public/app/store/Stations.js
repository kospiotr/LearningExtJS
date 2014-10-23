Ext.define('Panda.store.Stations', {
    extend: 'Ext.data.Store',
    requires: 'Panda.model.Station',
    model: 'Panda.model.Station',
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
                'id': 1,
                'played_date': 4,
                'name': 'Led Zeppelin'
            }, {
                'id': 2,
                'played_date': 3,
                'name': 'The Rolling Stones'
            }, {
                'id': 3,
                'played_date': 2,
                'name': 'Daft Punk'
            }]
    }
});

