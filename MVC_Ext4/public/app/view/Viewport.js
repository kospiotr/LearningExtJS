Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'App.view.StationList',
        'App.view.SongControls',
        'App.view.SongList',
        'App.view.RecentlyPlayedScroller',
        'App.view.SongInfo',
        'App.view.Logo'
    ],
    layout: 'fit',
    items: [
        {
            xtype: 'panel',
            title: 'App.',
            border: 1,
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch',
                padding: 5
            },
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        padding: '0 0 5 0'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Stations',
                            width: 200,
                            layout: 'fit',
                            border: 1,
                            items: [
                                {
                                    xtype: 'stationlist',
                                }
                            ]
                        },
                        {
                            xtype: 'songcontrols',
                            flex: 1,
                            border: 1,
                            padding: '0 5'
                        },
                        {
                            xtype: 'logo',
                            width: 200
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [{
                            xtype: 'panel',
                            width: 300,
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                                padding: '0 5 0 0'
                            },
                            items: [
                                {
                                    xtype: 'songlist',
                                    flex: 1,
                                    border: 1,
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Ad',
                                    height: 100,
                                    border: 1,
                                    padding: '5 0 0 0'
                                }
                            ]
                        }, {
                            xtype: 'panel',
                            flex: 1,
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                                border: 1
                            },
                            items: [{
                                    xtype: 'recentlyplayedscroller',
                                    border: 1,
                                    height: 100,
                                    padding: '0 0 5 0'
                                }, {
                                    xtype: 'songinfo',
                                    flex: 1,
                                    border: 1,
                                }]
                        }]
                }
            ]
        }
    ]
});

