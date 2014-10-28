Ext.define('App.view.SongList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.songlist',
    store: 'Songs',
    title: 'Songs List',
    columns: [
        {id: 'id', dataIndex: 'id', width: 50, header: 'ID'},
        {id: 'Title', dataIndex: 'title', flex: 1, header: 'Title'},
        {id: 'Artist', dataIndex: 'artist', width: 150, header: 'Artist'},
    ]
});

