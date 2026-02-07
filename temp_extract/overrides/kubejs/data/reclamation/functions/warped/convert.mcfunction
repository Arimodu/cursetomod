execute unless biome ~ ~ ~ #minecraft:is_nether run return 1
execute if predicate reclamation:convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:convertible_exposed run setblock ~ ~ ~ minecraft:warped_nylium
fillbiome ~ ~ ~ ~ ~ ~ minecraft:warped_forest
execute positioned ~ ~ ~ if predicate reclamation:random5 run function reclamation:warped/place_vegetation
execute positioned ~ ~ ~ if predicate reclamation:random2 run function reclamation:warped/place_fungus
