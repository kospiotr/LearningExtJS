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
        var newView = Ext.create(this.getView('StationsGrid'));
        this.getViewport().setActiveItem(newView);
    },
    onSongsButtonClick: function () {
        console.log('Click Songs');
        var newView = Ext.create(this.getView('SongsGrid'));
        this.getViewport().setActiveItem(newView);
    }
});

