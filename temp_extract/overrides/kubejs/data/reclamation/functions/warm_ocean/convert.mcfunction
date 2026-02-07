execute if predicate reclamation:ocean_convertible_exposed run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:ocean_convertible_underwater run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:ocean_convertible run setblock ~ ~ ~ minecraft:sand
fillbiome ~ ~ ~ ~ ~ ~ minecraft:warm_ocean
execute positioned ~ ~ ~ if predicate reclamation:random2 run function reclamation:warm_ocean/coral
execute positioned ~ ~ ~ if predicate reclamation:random2 run function reclamation:warm_ocean/seagrass
execute positioned ~ ~ ~ if predicate reclamation:random03 run function reclamation:warm_ocean/sea_pickle


