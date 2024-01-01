ServerEvents.recipes(event => {
  let potting = (output, pottedInput) => {
    event.shaped(output, [
      'S',
      'I'
    ], {
      S: '#notreepunching:h/saws',
      I: pottedInput
    })
  }

  //Now we can make many 'potting' recipes without typing that huge block over and over!
  potting('4x biomesoplenty:fir_planks', '#biomesoplenty:fir_logs')
  potting('4x biomesoplenty:redwood_planks', '#biomesoplenty:redwood_logs')
  potting('4x biomesoplenty:cherry_planks', '#biomesoplenty:cherry_logs')
  potting('4x biomesoplenty:mahogany_planks', '#biomesoplenty:mahogany_logs')
  potting('4x biomesoplenty:jacaranda_planks', '#biomesoplenty:jacaranda_logs')
  potting('4x biomesoplenty:palm_planks', '#biomesoplenty:palm_logs')
  potting('4x biomesoplenty:willow_planks', '#biomesoplenty:willow_logs')
  potting('4x biomesoplenty:dead_planks', '#biomesoplenty:dead_logs')
  potting('4x biomesoplenty:magic_planks', '#biomesoplenty:magic_logs')
  potting('4x biomesoplenty:umbran_planks', '#biomesoplenty:umbran_logs')
  potting('4x biomesoplenty:hellbark_planks', '#biomesoplenty:hellbark_logs')

  event.remove({ output: '#minecraft:planks', mod: 'biomesoplenty' })
})