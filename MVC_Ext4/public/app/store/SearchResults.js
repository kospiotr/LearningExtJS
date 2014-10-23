Ext.define('Panda.store.SearchResults', {
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
                'name': 'Led Zeppelin'
            }, {
                'id': 2,
                'name': 'The Rolling Stones'
            }, {
                'id': 3,
                'name': 'Daft Punk'
            }, {
                'id': 4,
                'name': 'John Mayer'
            }, {
                'id': 5,
                'name': 'Pete Philly &amp; Perquisite'
            }, {
                'id': 6,
                'name': 'Black Star'
            }, {
                'id': 7,
                'name': 'Macy Gray'
            }]
    }
});

