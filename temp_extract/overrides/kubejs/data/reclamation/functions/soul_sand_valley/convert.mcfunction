execute unless biome ~ ~ ~ #minecraft:is_nether run return 1
fillbiome ~ ~ ~ ~ ~ ~ minecraft:soul_sand_valley
execute if predicate reclamation:convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 2
execute if predicate reclamation:random5 if predicate reclamation:convertible_exposed run place feature reclamation:soul_soil_blob
execute if predicate reclamation:convertible run function reclamation:soul_sand_valley/skip_soul_soil_to_soul_sand
execute if predicate reclamation:random03 if predicate reclamation:convertible_exposed run place feature minecraft:patch_soul_fire ~ ~1 ~


