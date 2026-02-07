ServerEvents.recipes(event => {
    //archwood conversions
    function botania_convert(input, output) {
        event.custom({
            "type": "botania:mana_infusion",
            "catalyst": {
                "type": "block",
                "block": "botania:alchemy_catalyst"
            },
            "input": {
                "item": input
            },
            "mana": 50,
            "output": {
                "item": output
            }
        })
    }
    botania_convert("ars_nouveau:red_archwood_sapling", "ars_elemental:yellow_archwood_sapling")
    botania_convert("ars_elemental:yellow_archwood_sapling", "ars_nouveau:green_archwood_sapling")
    botania_convert("ars_nouveau:green_archwood_sapling", "ars_nouveau:blue_archwood_sapling")
    botania_convert("ars_nouveau:blue_archwood_sapling", "ars_nouveau:purple_archwood_sapling")
    botania_convert("ars_nouveau:purple_archwood_sapling", "ars_nouveau:red_archwood_sapling")

    event.remove({ id: 'ars_elemental:imbuement_anima_essence'})
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "tag": "forge:gems/source"
        },
        "output": "ars_elemental:anima_essence",
        "pedestalItems": [
            {
                "item": {
                    "item": "bloodmagic:infusedslate"
                }
            },
            {
                "item": {
                    "item": "minecraft:bone_meal"
                }
            },
            {
                "item": {
                    "item": "minecraft:golden_apple"
                }
            }
        ],
        "source": 3000
    })

    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "minecraft:sweet_berries"
        },
        "output": "ars_nouveau:sourceberry_bush",
        "pedestalItems": [
            {
                "item": {
                    "item": "ars_nouveau:magebloom_fiber"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:magebloom_fiber"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:abjuration_essence"
                }
            }
        ],
        "source": 2000
    })

    event.replaceInput({id: 'ars_nouveau:ritual_conjure_island_desert'},
        'ars_nouveau:earth_essence',
        'reclamation_util:arid_biome_bottle')
    event.replaceInput({id: 'ars_nouveau:ritual_conjure_island_plains'},
        'ars_nouveau:earth_essence',
        'reclamation_util:icy_biome_bottle')

    event.remove({id: 'ars_nouveau:storage_lectern'})
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": "ars_nouveau:storage_lectern"
        },
        "pedestalItems": [
            {
                "item": "ars_nouveau:bookwyrm_charm"
            },
            {
                "tag": "forge:chests"
            },
            {
                "tag": "forge:chests"
            },
            {
                "tag": "forge:chests"
            }
        ],
        "reagent": [
            {
                "item": "minecraft:lectern"
            }
        ],
        "sourceCost": 0
    })

    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.shapeless('ars_nouveau:novice_spell_book', [
        'minecraft:book',
        'botania:manasteel_shovel',
        'botania:manasteel_pick',
        'botania:manasteel_axe',
        'botania:manasteel_sword',
        'ars_nouveau:source_gem',
        'ars_nouveau:source_gem',
        'ars_nouveau:source_gem',
        'ars_nouveau:source_gem'
    ])
    event.replaceInput({id: 'ars_nouveau:wilden_summon_alt'}, 'minecraft:emerald_block', 'bloodmagic:infusedslate')

    botania_convert("minecraft:apple", "ars_nouveau:bombegranate_pod")
    botania_convert("ars_nouveau:bombegranate_pod", "ars_elemental:flashpine_pod")
    botania_convert("ars_elemental:flashpine_pod", "ars_nouveau:mendosteen_pod")
    botania_convert("ars_nouveau:mendosteen_pod", "ars_nouveau:bastion_pod")
    botania_convert("ars_nouveau:bastion_pod", "ars_nouveau:frostaya_pod")
    botania_convert("ars_nouveau:frostaya_pod", "ars_nouveau:bombegranate_pod")
})