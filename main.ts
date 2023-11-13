scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("Me encantan los fines de semana", DialogLayout.Full)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.dungeon.stairNorth)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock1, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("Ganaste una vida extra por plantar un árbol", DialogLayout.Top)
    if (controller.A.isPressed()) {
        music.powerUp.play()
        tiles.setTileAt(location, sprites.castle.treeSmallPine)
        info.changeLifeBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    if (game.askForString("¿Cúal es el quinto día de la semana?", 7) == "viernes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el quinto día de la semana?", 7) == "viernes") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            info.changeScoreBy(1)
            game.showLongText("La respuesta es <<viernes>>", DialogLayout.Bottom)
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("El día 31 de octubre es Halloween", DialogLayout.Top)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.dungeon.hazardWater)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile11`, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("De lunes a martes de mierda te hartes", DialogLayout.Full)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.vehicle.roadTurn3)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    if (game.askForString("¿Cúal es el cuarto día de la semana?", 6) == "jueves") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el cuarto día de la semana?", 6) == "lunes") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            info.changeScoreBy(1)
            game.showLongText("La respuesta es <<jueves>>", DialogLayout.Bottom)
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("Quien ríe en viernes llora en domingo", DialogLayout.Full)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`tile7`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    if (game.askForString("¿Cúal es el penúltimo día de la semana?", 6) == "sabado") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el penúltimo día de la semana?", 6) == "sabado") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            info.changeScoreBy(1)
            game.showLongText("La respuesta es <<sábado>>", DialogLayout.Bottom)
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    if (info.score() >= 7) {
        tiles.setWallAt(location, false)
        game.over(true, effects.smiles)
    } else {
        game.setDialogFrame(img`
            ...cc......................cc....
            ..c55c..bbbb...bbbbb......c55c...
            .cb55bcbdddbbbbbdddbbbbbbcb55bc..
            b555555bbdddb111bdddb11db555555b.
            bb5555bbdbdb11111bdb1111bb5555bb.
            cb5555bcddd11111ddd11111cb5555bc.
            .c5bb5c1111d111d111d111ddc5bb5c..
            .cbbbbc111111111111111111cbbbbc..
            ..b11111111111111111111111d111bb.
            ..b111111111111111111111111d1bdb.
            ..bb11111111111111111111111dbddb.
            .bbdb1d11111111111111111111ddddb.
            .bdddd11111111111111111111d1bdbb.
            .bddbd11111111111111111111111bb..
            .bdb1d111111111111111111111111b..
            .bb111d11111111111111111111111b..
            ..b11111111111111111111111d111bb.
            ..b111111111111111111111111d1bdb.
            ..bb11111111111111111111111dbddb.
            .bbdb1d11111111111111111111ddddb.
            .bdddd11111111111111111111d1bdbb.
            .bddbd11111111111111111111111bb..
            .bdbb1111111111111111111111111b..
            .bbbd1111111111111111111111111b..
            ..bcc111111111111111111111dccdb..
            ..c55c111d111d111d111d1111c55cb..
            .cb55bcdd11111ddd11111dddcb55bc..
            b555555b11111bdb11111bdbb555555b.
            bb5555bbb111bdddb111bdddbb5555bb.
            cb5555bcdbbbbbdddbbbbbddcb5555bc.
            .c5bb5c.bb...bbbbb...bbbbc5bb5c..
            .cbbbbc..................cbbbbc..
            .................................
            `)
        game.showLongText("Responde todas las preguntas y podrás pasar ", DialogLayout.Bottom)
        tiles.setWallAt(location, true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile6`, function (sprite, location) {
    if (game.askForString("¿Cúal es el último día de la semana?", 7) == "domingo") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el último día de la semana?", 7) == "domingo") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            info.changeScoreBy(1)
            game.showLongText("La respuesta es <<domingo>>", DialogLayout.Bottom)
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile10`, function (sprite, location) {
    if (game.askForString("¿Cúal es el tercer día de la semana?", 9) == "miercoles") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el tercer día de la semana?", 9) == "miercoles") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            info.changeScoreBy(1)
            game.showLongText("La respuesta es <<miércoles>>", DialogLayout.Bottom)
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight3, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("Pareces el día jueves, siempre estás en medio.", DialogLayout.Full)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, sprites.dungeon.doorClosedSouth)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
    game.setDialogCursor(sprites.dialog.smallDialogLeftThin)
    game.showLongText("El día 25 de diciembre es navidad", DialogLayout.Full)
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`tile12`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if (game.askForString("¿Cúal es el primer día de la semana?", 5) == "lunes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el primer día de la semana?", 5) == "lunes") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.powerDown.play()
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            info.changeScoreBy(1)
            game.showLongText("La respuesta es <<lunes>>", DialogLayout.Bottom)
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile9`, function (sprite, location) {
    if (game.askForString("¿Cúal es el segundo día de la semana?", 6) == "martes") {
        tiles.setTileAt(location, sprites.castle.rock2)
        info.changeScoreBy(1)
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
        music.powerDown.play()
        if (info.life() == 0) {
            game.over(false)
            music.wawawawaa.play()
        }
        if (game.askForString("¿Cúal es el segundo día de la semana?", 6) == "martes") {
            tiles.setTileAt(location, sprites.castle.rock2)
            info.changeScoreBy(1)
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            if (info.life() == 0) {
                game.over(false)
                music.wawawawaa.play()
            }
            info.changeScoreBy(1)
            game.showLongText("La respuesta es <<martes>>", DialogLayout.Bottom)
            tiles.setTileAt(location, sprites.castle.rock2)
        }
    }
})
game.setDialogFrame(img`
    .....cccccccccccccc.....
    ...cbd111111111111dbc...
    ..cd1111111111111111dc..
    .cd111111111111111111dc.
    .b11111111111111111111b.
    cd11111111111111111111dc
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    cd11111111111111111111dc
    .b11111111111111111111b.
    .cd111111111111111111dc.
    ..cd1111111111111111dc..
    ..b11d111111111111dbc...
    .b11bcccccccccccccc.....
    ccccc...................
    `)
game.setDialogTextColor(8)
game.showLongText("Los días de la semana han sido nombrados desde la era romana en referencia a los siete planetas de la astronomía clásica. Ferdinand es un ingeniero de caminos que sabe poco español y de camino al trabajo decide aprenderse los días de la semana. ¿Lo conseguirá antes de que acabe el tiempo?", DialogLayout.Full)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . 
    . . f f f f f f f f . . 
    . . f f f f f f f f . . 
    . . f f f f f f f f . . 
    . . f d f f f f d f . . 
    . f d d d d d d d d f . 
    . d d 8 d d d d 8 d d . 
    . d d 8 d d d d 8 d d . 
    . d d d d d d d d d d . 
    . . d d d 3 3 d d d . . 
    . . . d d d d d d . . . 
    1 1 1 1 1 1 f 1 1 1 1 1 
    1 . . 1 1 1 f 1 1 . . 1 
    1 d . f f f f f f . d 1 
    . . . f f f f f f . . . 
    . . f f f . . f f f . . 
    `, SpriteKind.Player)
mySprite.say("¡Vamos allá!", 5000)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
info.setLife(7)
info.setScore(0)
music.playMelody("C5 G B A F A C5 B ", 120)
