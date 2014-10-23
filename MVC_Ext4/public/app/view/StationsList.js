Ext.define('Panda.view.StationsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stationslist',
    store: 'Stations',
    title: 'Stations List',
    columns: [
        {id: 'id', dataIndex: 'id', width: 50, header: 'ID'},
        {id: 'name', dataIndex: 'name', flex: 1, header: 'Name'},
        {id: 'played_date', dataIndex: 'played_date', header: 'Played'},
    ]
});

