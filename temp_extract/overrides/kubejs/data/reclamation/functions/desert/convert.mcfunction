execute if predicate reclamation:convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:convertible run setblock ~ ~ ~ minecraft:sand
execute if predicate reclamation:convertible_exposed run setblock ~ ~ ~ minecraft:sand
fillbiome ~ ~ ~ ~ ~ ~ minecraft:desert
execute positioned ~ ~ ~ if predicate reclamation:random2 run function reclamation:desert/cactus
execute positioned ~ ~ ~ if predicate reclamation:random1 run function reclamation:desert/dead_bush


