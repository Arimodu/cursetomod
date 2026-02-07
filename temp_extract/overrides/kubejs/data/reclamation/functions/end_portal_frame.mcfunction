setblock ~-1 ~3 ~-2 minecraft:end_portal_frame[facing=south]
setblock ~1 ~3 ~-2 minecraft:end_portal_frame[facing=south]
setblock ~ ~3 ~-2 minecraft:end_portal_frame[facing=south]
setblock ~-1 ~3 ~2 minecraft:end_portal_frame[facing=north]
setblock ~1 ~3 ~2 minecraft:end_portal_frame[facing=north]
setblock ~ ~3 ~2 minecraft:end_portal_frame[facing=north]
setblock ~2 ~3 ~-1 minecraft:end_portal_frame[facing=west]
setblock ~2 ~3 ~1 minecraft:end_portal_frame[facing=west]
setblock ~2 ~3 ~ minecraft:end_portal_frame[facing=west]
setblock ~-2 ~3 ~-1 minecraft:end_portal_frame[facing=east]
setblock ~-2 ~3 ~1 minecraft:end_portal_frame[facing=east]
setblock ~-2 ~3 ~ minecraft:end_portal_frame[facing=east]
playsound minecraft:block.stone.break block @a[distance=..32] ~ ~3 ~-2
playsound minecraft:block.stone.break block @a[distance=..32] ~ ~3 ~2
playsound minecraft:block.stone.break block @a[distance=..32] ~2 ~3 ~
playsound minecraft:block.stone.break block @a[distance=..32] ~-2 ~3 ~
particle minecraft:block minecraft:end_portal_frame ~-1 ~3 ~-2 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~1 ~3 ~-2 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~ ~3 ~-2 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~-1 ~3 ~2 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~1 ~3 ~2 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~ ~3 ~2 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~2 ~3 ~-1 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~2 ~3 ~1 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~2 ~3 ~ 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~-2 ~3 ~-1 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~-2 ~3 ~1 0.6 0.6 0.6 0 10
particle minecraft:block minecraft:end_portal_frame ~-2 ~3 ~ 0.6 0.6 0.6 0 10
