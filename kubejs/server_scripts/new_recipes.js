ServerEvents.recipes(event => {
    let new_recipe = (output, input1, input2) => {
        event.shaped(output, [
        'X',
        'Y'
        ], {
        X: input1,
        Y: input2
        })
    }

    // realistic torches
    new_recipe('4x realistictorches:unlit_torch', 'byg:anthracite', 'minecraft:stick');
    new_recipe('4x realistictorches:unlit_torch', 'betteranimalsplus:blubber', 'minecraft:stick');
    new_recipe('4x realistictorches:unlit_torch', 'survive:animal_fat', 'minecraft:stick');

    // festive recipes
    new_recipe('2x festive_delight:gingerbread_cookie_dough_creeper', 'festive_delight:creeper_cutter', 'festive_delight:gingerbread_dough');
    new_recipe('2x festive_delight:gingerbread_man_dough', 'festive_delight:gingerbread_man_cutter', 'festive_delight:gingerbread_dough');
    new_recipe('2x festive_delight:snow_bread_cookie_dough', 'festive_delight:flake_cutter', 'festive_delight:gingerbread_dough');
    new_recipe('2x festive_delight:sword_bread_cookie_dough', 'festive_delight:sword_cutter', 'festive_delight:gingerbread_dough');
});

ServerEvents.recipes(event => {
    let new_recipe = (output, input1, input2, input3, input4) => {
        event.shaped(output, [
        'WX',
        'YZ'
        ], {
        W: input1,
        X: input2,
        Y: input3,
        Z: input4
        })
    }

    // festive recipes
    new_recipe('2x festive_delight:sus_bread', 'festive_delight:gingerbread_man', 'festive_delight:gingerbread_man_creeper', 'festive_delight:gingerbread_cookie_flake','festive_delight:gingerbread_cookie_sword');
<<<<<<< Updated upstream
})

ServerEvents.recipes(event => {
    let new_recipe = (output, input1) => {
        event.shaped(output, [
        'XXX'
        ], {
        X: input1
        })
    }

    // festive recipes
    new_recipe('1x kubejs:bed_of_leaves', '#minecraft:leaves');
=======

    //fabric cinnamon recipe fix
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {item: 'festive_delight:cinnamon_sticks'}
        ],
        tool: {tag: 'forge:tools/knives'},
        result: [
            {item: 'festive_delight:cinnamon_powder'}
        ]
    });
    event.custom({
        type: 'farmersdelight:cooking',
        cookingtime: 200,
        experience: 1.0,
        ingredients: [
          {
            item: 'farmersdelight:rice'
          },
          {
            item: 'minecraft:porkchop'
          },
          {
            item: 'farmersdelight:cabbage_leaf'
          },
          {
            item: 'farmersdelight:wheat_dough'
          }
        ],
        recipe_book_tab: 'misc',
        result: {
          item: 'festive_delight:spring_rolls'
        },
        container: {
          item: 'minecraft:air'
        }
    });
>>>>>>> Stashed changes
})