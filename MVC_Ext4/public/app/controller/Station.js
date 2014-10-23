Ext.define('Panda.controller.Station', {
    extend: 'Ext.app.Controller',
    control: {
        'stationslist combobox': {
            selectionchange: 'onStationSelect'
        },
        'newstation combobox': {
            select: 'onNewStationSelect'
        }
    },
    onStationSelect: function(){
        console.log('Selected station');
    },
    onNewStationSelect: function(){
        console.log('Selected new station');
    }
});

