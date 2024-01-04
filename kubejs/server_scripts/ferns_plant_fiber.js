/*
ServerEvents.recipes(event => {
  //This is just another way of adding recipes, probably going to comment or remove it.  
  event.custom({
        type: 'notreepunching:tool_damaging_shapeless',
        recipe: {
          type: 'minecraft:crafting_shapeless',
          ingredients: [
            {
              item: 'minecraft:fern'
            },
            {
              tag: 'notreepunching:knives'
            }
          ],
          result: {
            item: 'notreepunching:plant_fiber',
            count: 3
          }
        }
      })
    console.log('Hello! Ferns now make fibers!')
  });
*/

//This edits the loot table and says ferns broken with anything under #notreepunching:knives has a 25% chance of dropping plant fibers like grass does. 
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier('minecraft:fern')
        .matchMainHand('#notreepunching:knives')
        .randomChance(0.25)
        .addLoot('notreepunching:plant_fiber');
})