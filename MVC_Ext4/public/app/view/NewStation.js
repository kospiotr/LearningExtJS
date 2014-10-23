Ext.define('Panda.view.NewStation', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.newstation',
    items: [
        {xtype: 'combo', store: 'SearchResults', displayField: 'name'}
    ]
});

