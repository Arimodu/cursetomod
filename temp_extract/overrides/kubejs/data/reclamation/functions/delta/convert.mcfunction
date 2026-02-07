execute unless biome ~ ~ ~ #minecraft:is_nether run return 1
execute if predicate reclamation:convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 2
fillbiome ~ ~ ~ ~ ~ ~ minecraft:basalt_deltas
execute positioned ~ ~ ~ if predicate reclamation:random5 run function reclamation:delta/place_blackstone_blob
execute positioned ~ ~ ~ if predicate reclamation:random5 run function reclamation:delta/place_basalt_blob
execute positioned ~ ~ ~ if predicate reclamation:random1 run function reclamation:delta/place_large_columns
execute positioned ~ ~ ~ if predicate reclamation:random1 run function reclamation:delta/place_small_columns
execute positioned ~ ~ ~ if predicate reclamation:random1 run function reclamation:delta/place_delta
execute if predicate reclamation:convertible_exposed run function reclamation:delta/skip_blackstone_to_basalt
