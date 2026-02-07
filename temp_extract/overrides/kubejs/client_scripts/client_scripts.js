ItemEvents.tooltip(event => {
    event.addAdvanced('create:mechanical_press', (item, advanced, text) => {
        text.add(Text.of('Cannot make plates!').red())
    })
})

JEIEvents.information(event => {
    event.addItem('minecraft:twisting_vines', ['Can be obtained by bonemealing Warped Nylium.'])
})