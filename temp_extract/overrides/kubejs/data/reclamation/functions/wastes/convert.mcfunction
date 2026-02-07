execute unless biome ~ ~ ~ #minecraft:is_nether run return 1
execute if predicate reclamation:convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:convertible_exposed run setblock ~ ~ ~ minecraft:netherrack
fillbiome ~ ~ ~ ~ ~ ~ minecraft:nether_wastes
