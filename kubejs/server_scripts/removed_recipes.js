// event.remove({ input: '#byg:anthracite', output: '#minecraft:torch' });

// REIEvents.remove('item', event => { 
//     event.remove([
//         { input: '#byg:anthracite', output: '#minecraft:torch' }
//     ])
//     console.log("This has been removed")
// });

ServerEvents.recipes(event => {
    let remove = (input, output) => {
        event.remove([
            { input: input, output: output }
        ]);
    };

    //torches
    remove('byg:anthracite', 'minecraft:torch');
    remove('betteranimalsplus:blubber', 'minecraft:torch');
    //festive delights
    remove('festive_delight:cinnamon_sticks', 'festive_delight:cinnamon_powder')
  
    console.log("This has been removed")
  })