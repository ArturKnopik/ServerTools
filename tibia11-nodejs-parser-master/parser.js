'use strict';

const util = require('util')
const path = require('path');
const fs = require('fs'),
  appearancesLib = require('./src/Appearances'),
  spriteDump = require('./src/SpriteDump');
const kodModule = require('./src/KOD_extension');
var sprites = new spriteDump();
var appearances = new appearancesLib();

appearances.load().then(function () {
 


  appearances.load();
  console.log("---------------------------START SAVE LOCAL-------------------------- ");
  //fs.writeFileSync(path.resolve(__dirname, 'daneApp.json'), JSON.stringify(appearances));
  console.log("---------------------------END SAVE LOCAL-------------------------- ");
  let rawdata = fs.readFileSync('daneApp.json');
  appearances = JSON.parse(rawdata);

    appearances.save('appearances-kkk.dat');
    console.log("---------------------------END SAVE LOCAL-------------------------- ");

    console.log("---------------------------START PROCESS-------------------------- ");
    console.log("------------------------------------------------------------------ ");
    console.log("--                                                              -- ");
    console.log("--                                                              -- ");
   
    //var noobleArmor = appearances.getItemById(24646);
    //var oldDragnShield = appearances.getItemById(24545);
    var crystalArrow = appearances.getItemById(3239);
    var plateArmor = appearances.getItemById(3357);
   // console.log(util.inspect(plateArmor, false, null, true /* enable colors */));
    /*clothes: AppearanceFlagClothes { slot: 5 }, */
    //plateArmor.flags.npcsaledata[0].buyPrice = 199999999;
    //setItemPrice(plateArmor, 999)
    kodModule.clearItemSalePrice(plateArmor);
   // kodModule.addItemSalePrceByIndex(plateArmor, 800000, 80000, "Neoni", "Kovloria");
    console.log(util.inspect(plateArmor, false, null, true /* enable colors */));
    kodModule.addItemSalePrce(crystalArrow, 800000, 80000, "Neoni", "Kovloria");
    console.log("--                                                              -- ");
    console.log("------------------------------------------------------------------ ");
    console.log("--                                                              -- ");

    console.log(util.inspect(plateArmor, false, null, true /* enable colors */));



   // console.log("-------------------Name Noble------------------- ");
   // kodModule.setItemNameFlag(noobleArmor, "Noble Armor Old");
   // kodModule.setItemUnmoveFlag(noobleArmor, false);
   // kodModule.setItemUnpassFlag(noobleArmor, false);
   // kodModule.addItemSalePriceByIndex(noobleArmor, 999999, 999999, "Neoni", "Doom")
   // console.log(util.inspect(noobleArmor, false, null, true /* enable colors */));
    //console.log("-------------------START dragon------------------- ");
   // kodModule.setItemNameFlag(oldDragnShield, "Dragon Shield Old");
    //kodModule.setItemUnmoveFlag(oldDragnShield, false);
   // kodModule.setItemUnpassFlag(oldDragnShield, false);
   // kodModule.addItemSalePriceByIndex(oldDragnShield, 999999, 999999, "Neoni", "Doom")
    
  //  console.log("-------------------START plate------------------- ");
  //  console.log("IT: " + plateArmor.name);
    //console.log("TR: " + plateArmor.flags.npcsaledata[0].buyPrice);
    //console.log(util.inspect(noobleArmor, false, null, true /* enable colors */));

    //crystalArrow.flags.npcsaledata[0].buyPrice = 199999999;
   // setItemPrice(plateArmor, 999)
   // kodModule.editItemSalePriceByIndex(plateArmor, 90, 9999999, 9999999, "Kretodzilla", "Kovloria");
    //kodModule.clearItemSalePrice(crystalArrow);
    kodModule.addItemSalePrce(crystalArrow, 800000, 80000, "Neoni", "Kovloria");


    appearances.save('appearances-.dat');
    console.log("--                                                              -- ");
    console.log("--                                                              -- ");
    console.log("------------------------------------------------------------------ ");
});
