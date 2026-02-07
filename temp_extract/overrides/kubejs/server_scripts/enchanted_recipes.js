ServerEvents.recipes(event => {
    //fix demon heart recipes
    //event.remove({id: 'enchanted:distilling/demon_heart_diamond_vapour'})
    
    //anointing paste needs results, not seeds
    event.remove({id: 'enchanted:anointing_paste'})
    event.shapeless('enchanted:anointing_paste', [
        'enchanted:water_artichoke',
        'enchanted:belladonna_flower',
        'enchanted:mandrake_root',
        'enchanted:icy_needle'
    ])

    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            62,
            128,
            78
        ],
        "ingredients": [
            {
                "item": "enchanted:belladonna_flower"
            },
            {
                "item": "enchanted:water_artichoke"
            },
            {
                "item": "minecraft:bone_meal"
            }
        ],
        "power": 0,
        "result": {
            "count": 3,
            "item": "enchanted:mutandis"
        }
    })
    event.remove({id: 'enchanted:witch_cauldron/mutandis'})
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            62,
            128,
            78
        ],
        "ingredients": [
            {
                "item": "enchanted:mandrake_root"
            },
            {
                "item": "enchanted:exhale_of_the_horned_one"
            },
            {
                "item": "minecraft:bone_meal"
            }
        ],
        "power": 0,
        "result": {
            "count": 7,
            "item": "enchanted:mutandis"
        }
    }).id('enchanted:witch_cauldron/mutandis')

    //earmuffs recipe
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "w": {
                "tag": "minecraft:wool"
            },
            "c": {
                "item": "minecraft:copper_ingot"
            },
            "d": {
                "item": "farmersdelight:straw"
            }
        },
        "pattern": [
            "dcd",
            "w w"
        ],
        "result": {
            "item": "enchanted:earmuffs"
        },
        "show_notification": true
    })

    //cauldron for brilliant fiber
    event.remove({id: "naturesaura:gold_fiber"})
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            62,
            128,
            78
        ],
        "ingredients": [
            {
                "item": "enchanted:odour_of_purity"
            },
            {
                "item": "minecraft:string"
            },
            {
                "item": "enchanted:wolfsbane_flower"
            },
            {
                "item": "enchanted:whiff_of_magic"
            }
        ],
        "power": 0,
        "result": {
            "count": 2,
            "item": "naturesaura:gold_fiber"
        }
    })

    event.remove({id: "enchanted:altar"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "building",
        "key": {
            "b": {
                "item": "enchanted:breath_of_the_goddess"
            },
            "e": {
                "item": "enchanted:exhale_of_the_horned_one"
            },
            "r": {
                "item": "enchanted:rowan_log"
            },
            "s": {
                "item": "minecraft:stone_bricks"
            },
            "w": {
                "item": "minecraft:gold_nugget"
            }
        },
        "pattern": [
            "bwe",
            "srs",
            "srs"
        ],
        "result": {
            "item": "enchanted:altar"
        },
        "show_notification": true
    })

    event.remove({id: "enchanted:attuned_stone"})
    event.custom({"type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            62,
            128,
            78
        ],
        "ingredients": [
            {
                "item": "botania:mana_pearl"
            },
            {
                "item": "enchanted:whiff_of_magic"
            },
            {
                "item": "naturesaura:gold_leaf"
            }
        ],
        "power": 500,
        "result": {
            "item": "enchanted:attuned_stone"
        }
    })

    //chalk recipes
    event.remove({id: "enchanted:ritual_chalk"})
    event.remove({id: "enchanted:witch_cauldron/golden_chalk"})
    event.remove({id: "enchanted:witch_cauldron/nether_chalk"})
    event.remove({id: "enchanted:witch_cauldron/otherwhere_chalk"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "equipment",
        "key": {
            "a": {
                "item": "enchanted:wood_ash"
            },
            "r": {
                "item": "enchanted:gypsum"
            }
        },
        "pattern": [
            "ara",
            "ara",
            "ara"
        ],
        "result": {
            "item": "enchanted:ritual_chalk"
        },
        "show_notification": true
    })
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            89,
            64,
            0
        ],
        "finalColor": [
            194,
            155,
            0
        ],
        "ingredients": [
            {
                "item": "enchanted:mandrake_root"
            },
            {
                "item": "embers:dawnstone_ingot"
            },
            {
                "item": "enchanted:ritual_chalk"
            }
        ],
        "power": 3000,
        "result": {
            "item": "enchanted:golden_chalk"
        }
    }).id("enchanted:witch_cauldron/golden_chalk")
    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            84,
            1,
            26
        ],
        "finalColor": [
            156,
            1,
            47
        ],
        "ingredients": [
            {
                "item": "minecraft:nether_wart"
            },
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "enchanted:ritual_chalk"
            }
        ],
        "power": 2000,
        "result": {
            "item": "enchanted:nether_chalk"
        }
    }).id("enchanted:witch_cauldron/nether_chalk")
    event.custom({
            "type": "enchanted:witch_cauldron",
            "cookingColor": [
                49,
                21,
                74
            ],
            "finalColor": [
                73,
                13,
                130
            ],
            "ingredients": [
                {
                    "item": "minecraft:nether_wart"
                },
                {
                    "item": "enchanted:attuned_stone"
                },
                {
                    "item": "minecraft:ender_pearl"
                },
                {
                    "item": "enchanted:ritual_chalk"
                }
            ],
            "power": 2000,
            "result": {
                "item": "enchanted:otherwhere_chalk"
            }
        }).id("enchanted:witch_cauldron/otherwhere_chalk")

    //blaze powder to gold fiber
    event.custom({
        "type": "enchanted:wheel",
        "duration": 300,
        "ingredients": [
            {
                "item": "minecraft:blaze_powder"
            },
            {
                "item": "enchanted:bone_needle"
            },
            {
                "item": "enchanted:icy_needle"
            }
        ],
        "power": 500,
        "result": {
            "item": "naturesaura:gold_fiber",
            "count": 3
        }
    })

    event.remove({id: 'enchanted:fume_funnel'})
    event.shaped('enchanted:fume_funnel', [
        'BAB',
        'BMB',
        'DSD'
    ], {
        A: 'minecraft:lava_bucket',
        B: 'embers:caminite_plate',
        S: 'minecraft:iron_bars',
        D: 'minecraft:copper_block',
        M: 'minecraft:iron_block'
    })

    //redstone
    event.custom({
        "type": "enchanted:distilling",
        "cookTime": 300,
        "ingredients": [
            {
                "item": "minecraft:blaze_powder"
            },
            {
                "item": "create:cinder_flour"
            }
        ],
        "power": 750,
        "results": [
            {
                "count": 2,
                "item": "minecraft:redstone"
            }
        ]
    })
})