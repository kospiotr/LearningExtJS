Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'App.view.StationsGrid',
        'App.view.SongsGrid'
    ],
    layout: 'fit',
    padding: 5,
    items: [
        {
            itemId: 'viewport',
            xtype: 'panel',
            title: 'App',
            bodyPadding: 5,
            border: true,
            layout: 'card',
            tbar: [
                {
                    xtype: 'button',
                    text: 'Stations'
                },
                {
                    xtype: 'button',
                    text: 'Songs'
                }
            ]
        }
    ]
});