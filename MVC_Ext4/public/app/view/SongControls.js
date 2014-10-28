Ext.define('App.view.SongControls', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.songcontrols',
    title: 'Song Controls',
    layout: 'hbox',
    items: [
        {
            xtype: 'button',
            text: 'Prev',
            margin: '5 0 5 5'
        },{
            xtype: 'button',
            text: 'Play',
            flex: 1,
            margin: 5
        },{
            xtype: 'button',
            text: 'Next',
            margin: '5 5 5 0'
        },
    ]
});

