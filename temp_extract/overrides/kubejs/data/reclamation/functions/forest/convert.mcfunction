execute if predicate reclamation:convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:convertible run setblock ~ ~ ~ minecraft:dirt
execute if predicate reclamation:convertible_exposed run setblock ~ ~ ~ minecraft:grass_block
execute if predicate reclamation:convertible_underwater run setblock ~ ~ ~ minecraft:sand
fillbiome ~ ~ ~ ~ ~ ~ minecraft:forest
execute positioned ~ ~ ~ if predicate reclamation:random7 run function reclamation:forest/place_tree
execute positioned ~ ~ ~ if predicate reclamation:random01 run function reclamation:forest/place_flowers
execute positioned ~ ~ ~ if predicate reclamation:random2 run function reclamation:forest/place_grass

