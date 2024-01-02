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

    remove('byg:anthracite', 'minecraft:torch');
    remove('betteranimalsplus:blubber', 'minecraft:torch');
  
    console.log("This has been removed")
  })