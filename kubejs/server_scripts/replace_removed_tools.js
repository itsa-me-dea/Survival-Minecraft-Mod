/*event.replaceInput(
    { input: 'minecraft:stick' }, // Arg 1: the filter
    'minecraft:stick',            // Arg 2: the item to replace
    '#minecraft:saplings'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )
  */
ServerEvents.recipes(event => {
    // Wood tools to flint variants
  event.replaceInput(
    { input: 'minecraft:wooden_hoe' }, // Arg 1: the filter
    'minecraft:wooden_hoe',            // Arg 2: the item to replace
    'notreepunching:flint_hoe'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  event.replaceInput(
    { input: 'minecraft:wooden_axe' }, // Arg 1: the filter
    'minecraft:wooden_axe',            // Arg 2: the item to replace
    'notreepunching:flint_axe'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  event.replaceInput(
    { input: 'minecraft:wooden_pickaxe' }, // Arg 1: the filter
    'minecraft:wooden_pickaxe',            // Arg 2: the item to replace
    'notreepunching:flint_pickaxe'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

// Stone tools to gold variant

    console.log('Hello! The recipe event has fired!')
  })