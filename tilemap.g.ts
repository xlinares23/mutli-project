// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101030202020202020202020202020502010102010101010501010101010101020101020202020202020202020202020201010201010101010101020101010102010102010101010101010201010101020101020502020202020202010101010201010201010201010101020101010102010102010102010101010502020202020101020101020101010102010101010201010201010502020202020101010102010102010102010101010101010101020101020101020101010101010101010201010201010201010101010101010105010105020202020202020202020202020101010101010101010101010101010401`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 . 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 . 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 . 2 2 2 2 . 2 
2 . . . . . . . . . 2 2 2 2 . 2 
2 . 2 2 . 2 2 2 2 . 2 2 2 2 . 2 
2 . 2 2 . 2 2 2 2 . . . . . . 2 
2 . 2 2 . 2 2 2 2 . 2 2 2 2 . 2 
2 . 2 2 . . . . . . 2 2 2 2 . 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.castle.tilePath5,sprites.dungeon.collectibleInsignia,sprites.dungeon.doorLockedSouth,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
