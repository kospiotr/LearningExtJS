Ext.define('App.controller.Station', {
    extend: 'Ext.app.Controller',
    refs: {
        stationList: 'stationlist',
        songList: 'songlist'
    },
    control: {
        'stationlist': {
//            afterrender: 'onStart',
            select: 'onStationSelect'
        },
        'stationlist store':{
            load: 'onStart'
        },
        'songlist': {
            rowclick: 'onSongSelect'
        },
    },
    onStart: function () {
        console.log('onStart');
        var stationList = this.getStationList(),
                stationListStore = stationList.getStore(),
                firstRecord = stationListStore.getCount() > 0 ? stationListStore.getAt(2) : null;
        if (firstRecord !== null) {
//            stationList.select(firstRecord);
            stationList.fireEvent('select', stationList, [firstRecord]);
        }
    },
    onStationSelect: function (combo, records) {
        console.log('selected');
        var stationName = records[0].get('name');
        var songListStore = this.getSongList().getStore();
        songListStore.clearFilter();
        songListStore.filterBy(function (record) {
            if (stationName === 'All') {
                return true;
            }
            var songStationName = record.get('station');
            return stationName === songStationName;
        });
    },
    onSongSelect: function () {
        console.log('Selected song');
    }
});

