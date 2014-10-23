Ext.define('Panda.store.RecentSongs', {
    extend: 'Ext.data.Store',
    model: 'Panda.model.Song',
    requires: 'Panda.model.Song',
    data: {
        'success': true,
        'results': [
            {
                'name': 'Blues At Sunrise (Live)',
                'artist': 'Stevie Ray Vaughan',
                'album': 'Blues At Sunrise',
                'description': 'Description for Stevie',
                'played_date': '1',
                'station': 1
            }]
    }
});

