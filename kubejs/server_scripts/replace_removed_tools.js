/*event.replaceInput(
    { input: 'minecraft:stick' }, // Arg 1: the filter
    'minecraft:stick',            // Arg 2: the item to replace
    '#minecraft:saplings'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )
  */


ServerEvents.recipes(event => {
  let replace = (filter, item, replacement) => {
    event.replaceInput(
      { input: filter },  // Arg 1: the filter
      item,               // Arg 2: the item to replace
      replacement         // Arg 3: the item to replace it with
    );
  };

  // Wood tools to flint variants
  replace('minecraft:wooden_hoe', 'minecraft:wooden_hoe', 'notreepunching:flint_hoe');
  replace('minecraft:wooden_shovel', 'minecraft:wooden_shovel', 'notreepunching:flint_shovel');
  replace('minecraft:wooden_axe', 'minecraft:wooden_axe', 'notreepunching:flint_axe');
  replace('minecraft:wooden_pickaxe', 'minecraft:wooden_pickaxe', 'notreepunching:flint_pickaxe');

  // Stone tools to gold variants
  replace('minecraft:stone_hoe', 'minecraft:stone_hoe', 'minecraft:gold_hoe');
  replace('minecraft:stone_shovel', 'minecraft:stone_shovel', 'minecraft:gold_shovel');
  replace('minecraft:stone_axe', 'minecraft:stone_axe', 'minecraft:gold_axe');
  replace('minecraft:stone_pickaxe', 'minecraft:stone_pickaxe', 'minecraft:gold_pickaxe');

  console.log('Hello! The recipe event has fired!')
})