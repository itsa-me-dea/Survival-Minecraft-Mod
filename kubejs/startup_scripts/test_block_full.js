// Listen to item registry event
StartupEvents.registry('block', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event.create('test_block_full', cardinal)
        .displayName("Test Block Full") // Set a custom name
        .material("wood") // Set a material (affects the sounds and some properties)
        .hardness(1.0) // Set hardness (affects mining time)
        .resistance(1.0) // Set resistance (to explosions, etc)
        .tagBlock('minecraft:debugging') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
        .lightLevel(0.0)
        .requiresTool(true) // Requires a tool or it won't drop (see tags below)
        .tagBlock("mineable/axe") // can be mined faster with an axe
  })