execute if predicate reclamation:convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:convertible run setblock ~ ~ ~ minecraft:dirt
execute if predicate reclamation:convertible_exposed run setblock ~ ~ ~ minecraft:grass_block
execute if predicate reclamation:convertible_underwater run setblock ~ ~ ~ minecraft:sand
fillbiome ~ ~ ~ ~ ~ ~ minecraft:bamboo_jungle
execute positioned ~ ~ ~ if predicate reclamation:random2 run function reclamation:bamboo_jungle/place_bamboo
execute positioned ~ ~ ~ if predicate reclamation:random2 run function reclamation:bamboo_jungle/place_bamboo2
execute positioned ~ ~ ~ if predicate reclamation:random1 run function reclamation:bamboo_jungle/place_vegetation
execute positioned ~ ~ ~ if predicate reclamation:random1 run function reclamation:bamboo_jungle/patch_grass_jungle


