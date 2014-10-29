Ext.define('App.controller.MainController', {
    extend: 'Ext.app.Controller',
    views: ['StationsGrid', 'SongsGrid'],
    refs: {
        viewport: '#viewport'
    },
    control: {
        'button[text=Stations]': {
            click: 'onStationsButtonClick'
        },
        'button[text=Songs]': {
            click: 'onSongsButtonClick'
        }
    },
    onStationsButtonClick: function () {
        console.log('Click Stations');
        var newView = this.getView('StationsGrid').create();
        this.getViewport().setActiveItem(newView);
    },
    onSongsButtonClick: function () {
        console.log('Click Songs');
        var newView = this.getView('SongsGrid').create();
        this.getViewport().setActiveItem(newView);
    }
});

