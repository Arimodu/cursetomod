setblock ~ ~2 ~ complicated_bees:bee_nest{species:"reclamation:wasteland"}
data modify block ~ ~2 ~ species set from entity @e[distance=..3,limit=1,type=minecraft:item] Item.tag.species
kill @e[distance=..3,type=minecraft:item]
particle complicated_bees:bee ~ ~2 ~ 0.5 0.5 0.5 1 20
playsound minecraft:entity.bee.death block @a[distance=..32]