execute if predicate reclamation:convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:convertible run setblock ~ ~ ~ minecraft:dirt
execute if predicate reclamation:convertible_exposed run setblock ~ ~ ~ minecraft:grass_block
execute if predicate reclamation:convertible_underwater run setblock ~ ~ ~ minecraft:sand
fillbiome ~ ~ ~ ~ ~ ~ minecraft:plains
execute if predicate reclamation:random2 if predicate reclamation:convertible run place feature minecraft:patch_grass ~ ~1 ~
execute if predicate reclamation:random01 if predicate reclamation:convertible run place feature minecraft:flower_plain ~ ~1 ~
execute if predicate reclamation:random01 if predicate reclamation:convertible run place feature minecraft:trees_plains ~ ~1 ~

