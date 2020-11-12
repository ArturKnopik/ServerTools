/// CUSTOM LIBS
const util = require('util')

module.exports = {

    editItemSalePriceByIndex: function (item, index, salePrice, buyPrice, NPCname, location) { // count from 0
        if (item.flags.npcsaledata[index]) {
            item.flags.npcsaledata[0].buyPrice = buyPrice;
            item.flags.npcsaledata[0].salePrice = salePrice;
            item.flags.npcsaledata[0].name = NPCname;
            item.flags.npcsaledata[0].location = location;
        } else {
            console.log("ERR_Index: " + item.id + " - " + item.name);
        }
    },

    addItemSalePriceByIndex: function (item, salePrice, buyPrice, NPCname, location) { // count from 0
        //item.flags.npcsaledata.push( buyPrice: buyPrice, salePrice: salePrice, name: NPCname, location: location );
        Object.assign(item.flags.npcsaledata, { buyPrice: buyPrice, salePrice: salePrice, name: NPCname, location: location });
    },

    setItemPriceOnFirstIndex: function (item, salePrice, buyPrice) {
        if (item.flags.npcsaledata[0]) {
            item.flags.npcsaledata[0].buyPrice = buyPrice;
            item.flags.npcsaledata[0].salePrice = salePrice;
        } else {
            console.log("ERR_Index: " + item.id + " - " + item.name);
        }

    },

    addItemSalePrce: function (item, salePrice, buyPrice, NPCname, location) {
       
        //thisSession.hasOwnProperty('merchant_id');

        if ('name' in item.flags.npcsaledata)
        {
            console.log("ERR_Index: $$$$$$$$##########################SADASFASDGASGf")
        }
        item.flags.npcsaledata.push(JSON.stringify({ buyPrice: buyPrice, salePrice: salePrice, name: NPCname, location: location }));
    },

    clearItemSalePrice: function (item) {
        item.flags.npcsaledata.length = 0;
    },

    setItemUnmoveFlag: function (item, value /* ass bool value */) {
        item.flags.unmove = value;
    },

    setItemUnpassFlag: function (item, value /* ass bool value */) {
        item.flags.unpass = value;
    },

    setItemNameFlag: function (item, addName /* ass string value */) {
        console.log("TRY: " + item.id + " -+-+-+-+-+-+-+-");


        if ('name' in item.flags) {
            console.log("TRY: " + item.id + " - unknow name");
            item.flags.name = addName ;
        } else {
            console.log("ERR_Index: " + item.id + " - unknow name");
            var varname = addName;
            Object.assign(item, { name: varname });
           // item.flags.assign( varname );

        }
//        console.log("NEWWWWWWWWWWWWW: " + item.id + " - unknow name");

        console.log(util.inspect(item, false, null, true /* enable colors */));
    },
};
