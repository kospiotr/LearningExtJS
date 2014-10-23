Ext.define('Panda.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Panda.view.NewStation',
        'Panda.view.SongControls',
        'Panda.view.StationsList',
        'Panda.view.RecentlyPlayedScroller',
        'Panda.view.SongInfo'],
    layout: 'fit',
    items: [
        {
            xtype: 'panel',
            title: 'App',
            padding: 5,
            border: 1,
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'panel',
//                    title: 'Top',
//                    border: 1,
//                    padding: '5 5 0 5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'newstation',
                            title: 'New Station',
                            width: 200,
                            layout: 'fit',
                            border: 1,
                            margin: 5,
                        }, {
                            xtype: 'songcontrols',
                            flex: 1,
                            border: 1,
                            margin: 5,
                        }, {
                            xtype: 'panel',
                            title: 'Logo',
                            width: 150,
                            items: [{html: 'LOGO'}],
                            border: 1,
                            margin: 5,
                        }
                    ]
                }, {
                    xtype: 'panel',
//                    title: 'Middle',
//                    border: 1,
//                    padding: 5,
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [{
                            xtype: 'panel',
//                            title: 'West',
//                            padding: '5 0 5 5',
//                            border: 1,
                            width: 300,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [{
                                    xtype: 'stationslist',
                                    flex: 1,
                                    padding: 5,
                                    border: 1,
                                }, {
                                    xtype: 'panel',
                                    title: 'Ad',
                                    height: 100,
                                    padding: 5,
                                    border: 1,
                                }]
                        }, {
                            xtype: 'panel',
//                            title: 'Center',
//                            padding: 5,
//                            border: 1,
                            flex: 1,
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                                padding: 5,
                                border: 1
                            },
                            items: [{
                                    xtype: 'recentlyplayedscroller',
                                    padding: 5,
                                    border: 1,
                                    height: 100,
                                }, {
                                    xtype: 'songinfo',
                                    flex: 1,
                                    padding: 5,
                                    border: 1,
                                }]
                        }]
                }


            ]
        }
    ]
});

