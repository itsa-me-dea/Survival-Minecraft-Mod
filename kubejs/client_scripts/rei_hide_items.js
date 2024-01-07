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
        'festive_delight:spead_gingerbread_1',
        'festive_delight:spead_gingerbread_2',
        'festive_delight:spead_gingerbread',
        'festive_delight:festive_chiken',
        'festive_delight:festive_chicken_stage_0',
        'festive_delight:festive_chicken_stage_1',
        'festive_delight:festive_chicken_stage_2',
        'festive_delight:festive_chicken_stage_3',
        'festive_delight:festive_chicken_stage_leftover',
        'festive_delight:cinnamon_bush',
        'festive_delight:cinnamon_bushripe',
        // nomadic tents
        'nomadictents:door_frame',
        'nomadictents:yurt_wall_frame',
        'nomadictents:yurt_roof_frame',
        'nomadictents:tepee_wall_frame',
        'nomadictents:bedouin_wall_frame',
        'nomadictents:bedouin_roof_frame',
        'nomadictents:indlu_wall_frame',
        'nomadictents:shamiyana_wall_frame'
    ])
})