Ext.define('App.view.StationList', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.stationlist',
    store: 'Stations',
    displayField: 'name',
    triggerAction: 'all',
    autoSelect: true

});

