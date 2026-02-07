ServerEvents.recipes(event => {
    event.remove({ id: 'ae2:network/blocks/crystal_processing_charger'})
    event.shaped('ae2:charger', [
            'WCW',
            'M  ',
            'WCW'
        ], {
            W: 'minecraft:iron_ingot',
            C: 'minecraft:copper_ingot',
            M: 'mekanism:steel_casing'
        }
    )

    event.custom({
        "type": "ae2:charger",
        "ingredient": {
            "item": "mekanism:enriched_diamond"
        },
        "result": {
            "item": "ae2:certus_quartz_crystal"
        }
    })

    event.remove({id: 'ae2:inscriber/calculation_processor'})
    event.remove({id: 'ae2:inscriber/engineering_processor'})
    event.remove({id: 'ae2:inscriber/logic_processor'})
    event.remove({id: 'advanced_ae:quantum_processor'})
    event.remove({id: 'advanced_ae:calculation_processor_chamber'})
    event.remove({id: 'advanced_ae:engineering_processor_chamber'})
    event.remove({id: 'advanced_ae:logic_processor_chamber'})
    event.remove({id: 'advanced_ae:quantum_processor_chamber'})
    function inscriber(input, output) {
        event.custom({
            "type": "ae2:inscriber",
            "ingredients": {
                "bottom": {
                    "item": "ae2:printed_silicon"
                },
                "middle": {
                    "item": "mekanism:alloy_infused"
                },
                "top": {
                    "item": input
                }
            },
            "mode": "press",
            "result": {
                "item": output
            }
        })
        event.custom({
            "type": "advanced_ae:reaction",
            "energy": 20000,
            "fluid": {
                "fluidStack": {
                    "Amount": 100,
                    "FluidName": "minecraft:water"
                }
            },
            "input_items": [
                {
                    "amount": 4,
                    "ingredient": {
                        "item": input
                    }
                },
                {
                    "amount": 4,
                    "ingredient": {
                        "item": "ae2:printed_silicon"
                    }
                },
                {
                    "amount": 4,
                    "ingredient": {
                        "item": "mekanism:alloy_infused"
                    }
                }
            ],
            "output": {
                "#": 4,
                "#c": "ae2:i",
                "id": output
            }
        })
    }
    inscriber("ae2:printed_calculation_processor", "ae2:calculation_processor")
    inscriber("ae2:printed_engineering_processor", "ae2:engineering_processor")
    inscriber("ae2:printed_logic_processor", "ae2:logic_processor")
    inscriber("advanced_ae:printed_quantum_processor", "advanced_ae:quantum_processor")
    event.remove({id: 'ae2:network/blocks/controller'})
    event.shaped('ae2:controller', [
            'SCS',
            'FEF',
            'SFS'
        ], {
            S: 'ae2:smooth_sky_stone_block',
            F: 'ae2:fluix_crystal',
            C: 'ars_nouveau:storage_lectern',
            E: 'ae2:engineering_processor'
        }
    )
})