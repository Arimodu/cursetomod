LootJS.modifiers(event => {
    event.addBlockLootModifier('minecraft:grass').removeLoot('enchanted:garlic')

    event.addBlockLootModifier('kubejs:dead_log')
        .randomChance(0.1)
        .addLoot('minecraft:charcoal')
})