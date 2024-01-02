ServerEvents.recipes(event => {
    let new_recipe = (output, input) => {
        event.shaped(output, [
        'X',
        'Y'
        ], {
        X: input,
        Y: 'minecraft:stick'
        })
    }

    new_recipe('4x realistictorches:unlit_torch', 'byg:anthracite');
    new_recipe('4x realistictorches:unlit_torch', 'betteranimalsplus:blubber');
    new_recipe('4x realistictorches:unlit_torch', 'survive:animal_fat');
})