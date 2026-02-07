ServerEvents.recipes(event => {

    event.remove({ id: 'theurgy:crafting/shaped/sal_ammoniac_tank'})
    event.shaped('theurgy:sal_ammoniac_tank', [
        'SCS',
        'SCS',
        'RCR'
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        R: '#forge:rods/wooden'
    })

    event.remove({ id: 'theurgy:crafting/shaped/sal_ammoniac_accumulator'})
    event.shaped('theurgy:sal_ammoniac_accumulator', [
        'SSS',
        'CCC',
        'R R'
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        R: '#forge:rods/wooden'
    })
    
    event.remove({ id: 'theurgy:crafting/shaped/distiller'})
    event.shaped('theurgy:distiller', [
        ' C ',
        'CBC',
        'SSS'
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        B: 'minecraft:copper_block'
    })

    event.remove({ id: 'theurgy:crafting/shaped/calcination_oven'})
    event.shaped('theurgy:calcination_oven', [
        ' S ',
        'CBC',
        ' S '
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        B: 'minecraft:copper_block'
    })

    event.remove({ id: 'theurgy:crafting/shaped/liquefaction_cauldron'})
    event.shaped('theurgy:liquefaction_cauldron', [
        'CCC',
        'CBC',
        'SSS'
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        B: 'minecraft:bucket'
    })

    event.remove({ id: 'theurgy:crafting/shaped/incubator'})
    event.shaped('theurgy:incubator', [
        'PSP',
        'CCC',
        'SCS'
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        P: '#minecraft:planks'
    })

    event.remove({id: 'theurgy:distillation/cod'})
    event.remove({id: 'theurgy:distillation/salmon'})
    event.remove({id: 'theurgy:distillation/cooked_cod'})
    event.remove({id: 'theurgy:distillation/cooked_salmon'})
    event.custom({
        "type": "theurgy:distillation",
        "distillation_time": 100,
        "ingredient": {
            "tag": "forge:raw_fishes"
        },
        "ingredient_count": 2,
        "result": {
            "count": 1,
            "item": "theurgy:mercury_shard"
        }
    })
    event.custom({
        "type": "theurgy:distillation",
        "distillation_time": 100,
        "ingredient": {
            "tag": "forge:cooked_fishes"
        },
        "ingredient_count": 1,
        "result": {
            "count": 2,
            "item": "theurgy:mercury_shard"
        }
    })

    //dried earth -> dirt sulfur
    event.custom({
        "type": "theurgy:liquefaction",
        "ingredient": {
            "item": "kubejs:dried_earth"
        },
        "liquefaction_time": 100,
        "result": {
            "count": 1,
            "item": "kubejs:sulfur_dirt",
            "nbt": {
                "theurgy:sulfur.source.id": "kubejs:dried_earth"
            }
        },
        "solvent": {
            "fluid": "theurgy:sal_ammoniac"
        },
        "solvent_amount": 10
    })

    //dirt sulfur incubation
    event.custom({
        "type": "theurgy:incubation",
        "incubation_time": 100,
        "mercury": {
            "item": "theurgy:mercury_shard"
        },
        "result": {
            "count": 2,
            "tag": "minecraft:dirt"
        },
        "salt": {
            "item": "theurgy:alchemical_salt_strata"
        },
        "sulfur": {
            "item": "kubejs:sulfur_dirt"
        }
    })

    //iron from mandrake
    event.custom({
        "type": "theurgy:accumulation",
        "accumulationTime": 100,
        "evaporant": {
            "fluid": "theurgy:sal_ammoniac"
        },
        "evaporantAmount": 500,
        "result": {
            "Amount": 250,
            "FluidName": "kubejs:hemoglobic_fluid"
        },
        "solute": {
            "item": "enchanted:mandrake_root",
            "count": 1
        }
    })
    event.custom({
        "type": "theurgy:liquefaction",
        "ingredient": {
            "item": "minecraft:copper_ingot"
        },
        "liquefaction_time": 100,
        "result": {
            "count": 1,
            "item": "theurgy:alchemical_sulfur_iron",
            "nbt": {
                "theurgy:sulfur.source.id": "#forge:ingots/iron"
            }
        },
        "solvent": {
            "fluid": "kubejs:hemoglobic_fluid"
        },
        "solvent_amount": 50
    })

    //reformation recipes
    event.remove({ id: 'theurgy:crafting/shaped/reformation_source_pedestal'})
    event.remove({ id: 'theurgy:crafting/shaped/reformation_result_pedestal'})
    event.remove({ id: 'theurgy:crafting/shaped/reformation_target_pedestal'})
    event.remove({ id: 'theurgy:crafting/shaped/sulfuric_flux_emitter'})
    event.remove({ id: 'theurgy:crafting/shaped/mercury_catalyst'})
    event.shaped('theurgy:reformation_source_pedestal', [
        'BSB',
        'AIA',
        'BBB'
    ], {
        B: 'minecraft:blackstone',
        S: '#theurgy:alchemical_sulfurs',
        A: 'create:andesite_alloy',
        I: 'minecraft:iron_ingot'
    })
    event.shaped('theurgy:reformation_result_pedestal', [
        'DDD',
        'DSD',
        'BBB'
    ], {
        B: 'minecraft:blackstone',
        S: '#theurgy:alchemical_sulfurs',
        D: 'embers:dawnstone_ingot'
    })
    event.shaped('theurgy:reformation_target_pedestal', [
        'CSC',
        'CDC',
        'BBB'
    ], {
        B: 'minecraft:blackstone',
        S: '#theurgy:alchemical_sulfurs',
        D: 'embers:dawnstone_ingot',
        C: 'minecraft:copper_ingot'
    })
    event.shaped('theurgy:sulfuric_flux_emitter', [
        ' M ',
        'DSD',
        'BBB'
    ], {
        B: 'minecraft:blackstone',
        S: '#theurgy:alchemical_sulfurs',
        D: 'embers:dawnstone_ingot',
        M: 'theurgy:sal_ammoniac_crystal'
    })
    event.shaped('theurgy:mercury_catalyst', [
        'AMA',
        'DGD',
        'ADA'
    ], {
        A: 'create:andesite_alloy',
        M: '#theurgy:alchemical_mercuries',
        D: 'embers:dawnstone_ingot',
        G: 'create:fluid_tank'
    })

    //t2,t3 reformation
    event.remove({ id: 'theurgy:crafting/shaped/fermentation_vat'})
    event.shaped('theurgy:fermentation_vat', [
        'BSB',
        'DAD',
        'BCB'
    ], {
        B: 'embers:archaic_brick',
        S: '#theurgy:alchemical_sulfurs',
        D: 'embers:dawnstone_ingot',
        A: 'minecraft:barrel',
        C: 'minecraft:copper_ingot'
    })
    event.remove({ id: 'theurgy:crafting/shaped/digestion_vat'})
    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/dawnstone"
            },
            {
                "tag": "embers:aspectus/copper"
            },
            {
                "tag": "embers:aspectus/iron"
            }
        ],
        "inputs": [
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "theurgy:sal_ammoniac_crystal"
            },
            {
                "item": "embers:archaic_brick"
            },
            {
                "item": "embers:dawnstone_plate"
            }
        ],
        "output": {
            "item": "theurgy:digestion_vat"
        },
        "tablet": {
            "item": "minecraft:decorated_pot"
        }
    })
})