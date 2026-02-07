execute if predicate reclamation:convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:convertible run setblock ~ ~ ~ minecraft:dirt
execute if predicate reclamation:convertible_exposed run setblock ~ ~ ~ minecraft:mycelium
fillbiome ~ ~ ~ ~ ~ ~ minecraft:mushroom_fields
execute positioned ~ ~ ~ if predicate reclamation:random1 run function reclamation:mushroom_fields/vegetation
execute positioned ~ ~ ~ if predicate reclamation:random03 run function reclamation:mushroom_fields/red_mushroom
execute positioned ~ ~ ~ if predicate reclamation:random03 run function reclamation:mushroom_fields/brown_mushroom
