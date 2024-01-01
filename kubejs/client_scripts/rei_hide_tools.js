//REIRuntime.hideItem(item)
/*
REIRuntime.hideItems([
    'minecraft:wooden_axe',
    'minecraft:wooden_pickaxe'
])
*/

/*
REIEvents.hide('item', event => {
    event.hide('minecraft:wooden_axe')
})
*/


  REIEvents.hide('item', event => { 
    event.hide([
        'minecraft:wooden_sword',
        'minecraft:wooden_shovel',
        'minecraft:wooden_pickaxe',
        'minecraft:wooden_axe',
        'minecraft:wooden_hoe'
    ])
})
