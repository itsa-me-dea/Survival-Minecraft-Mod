// Listen to item registry event
StartupEvents.registry('block', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event.create('bed_of_leaves')
        .displayName("Bed of Leaves") // Set a custom name
        .material("leaves") // Set a material (affects the sounds and some properties)
        .hardness(0.2) // Set hardness (affects mining time)
        .resistance(0.2) // Set resistance (to explosions, etc)
        // .tagBoth('kubejs:tag_name')
        .tagBlock('minecraft:beds') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
        .lightLevel(0.0)
        .opaque(false)
        .transparent(true)
        .renderType('cutout')
        .requiresTool(true) // Requires a tool or it won't drop (see tags below)
        .tagBlock("mineable/shears") // can be mined faster with an axe
        .fullBlock(false)
        .box(0, 0, 0, 16, 3, 32, true)

  })
