execute unless biome ~ ~ ~ #minecraft:is_nether run return 1
execute if predicate reclamation:convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:convertible_exposed run setblock ~ ~ ~ minecraft:crimson_nylium
fillbiome ~ ~ ~ ~ ~ ~ minecraft:crimson_forest
execute positioned ~ ~ ~ if predicate reclamation:random10 run function reclamation:crimson/place_vegetation
execute positioned ~ ~ ~ if predicate reclamation:random03 run function reclamation:crimson/place_propelplant
execute positioned ~ ~ ~ if predicate reclamation:random2 run function reclamation:crimson/place_fungus
