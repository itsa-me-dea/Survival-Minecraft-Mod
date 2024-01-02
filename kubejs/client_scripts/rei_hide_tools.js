/*
REIEvents.hide('item', event => {
    event.hide('minecraft:wooden_axe')
})
*/

  REIEvents.hide('item', event => { 
    event.hide([
        // no tree punching
        'minecraft:wooden_sword',
        'minecraft:wooden_shovel',
        'minecraft:wooden_pickaxe',
        'minecraft:wooden_axe',
        'minecraft:wooden_hoe',
        'minecraft:stone_sword',
        'minecraft:stone_shovel',
        'minecraft:stone_pickaxe',
        'minecraft:stone_axe',
        'minecraft:stone_hoe',
        // festive delights
        'festive_delight:spread_ginger_bread_dough',
        'festive_delight:spread_gingerbread_1',
        'festive_delight:spread_gingerbread_2',
        'festive_delight:spread_gingerbread'
    ])
})