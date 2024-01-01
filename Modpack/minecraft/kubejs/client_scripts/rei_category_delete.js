REIEvents.removeCategories(event => {
  console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
  
  //event.remove works too, but yeeting is so much more fun 😉
  event.remove('minecraft:plugins/tag')
})
