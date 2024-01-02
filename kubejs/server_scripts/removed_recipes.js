// event.remove({ input: '#byg:anthracite', output: '#minecraft:torch' });

// REIEvents.remove('item', event => { 
//     event.remove([
//         { input: '#byg:anthracite', output: '#minecraft:torch' }
//     ])
//     console.log("This has been removed")
// });

ServerEvents.recipes(event =>  { 
    event.remove([
        { input: '#byg:anthracite', output: '#minecraft:torch' }
    ])
    console.log("This has been removed")
});