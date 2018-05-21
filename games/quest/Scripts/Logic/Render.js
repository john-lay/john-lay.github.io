/// <reference path="Interactive.ts" />
//declare var Assets: any;
var Draw;
(function (Draw) {
    'use strict';
    // PRIVATE METHODS
    function drawLeftSide(graphic, color, originX, originY) {
        graphic.clear();
        graphic.beginFill(color);
        graphic.lineStyle(2, color, 1);
        graphic.moveTo(originX, originY + 16); // tl
        graphic.lineTo(originX + 32, originY + 32); // tr
        graphic.lineTo(originX + 32, originY + 48); // br
        graphic.lineTo(originX, originY + 32); // bl
        graphic.lineTo(originX, originY + 16); // tl
        graphic.endFill();
    }
    function drawBottomSide(graphic, color, originX, originY) {
        graphic.clear();
        graphic.beginFill(color);
        graphic.lineStyle(2, color, 1);
        graphic.moveTo(originX + 32, originY + 32); // tl
        graphic.lineTo(originX + 64, originY + 16); // tr
        graphic.lineTo(originX + 64, originY + 32); // br
        graphic.lineTo(originX + 32, originY + 48); // bl
        graphic.lineTo(originX + 32, originY + 32); // tl
        graphic.endFill();
    }
    // PUBLIC METHODS
    function grid() {
        var originX;
        var originY;
        var offsetY = 128;
        var offsetX = 0;
        // draw the tile rows
        for (var row = 0; row < tileMap.length; row++) {
            offsetY = offsetY + 16;
            offsetX = offsetX + 32;
            // draw the tile columns
            for (var col = 0; col < tileMap[row].length; col++) {
                originX = offsetX + col * 32;
                originY = offsetY - ((col + 1) * 16);
                Interactive.addTile(row, col, originX, originY, false);
                // add left side for first col
                if (col === 0) {
                    var leftSideGraphic = IsoGame.add.graphics(0, 200);
                    drawLeftSide(leftSideGraphic, tileMap[row][col].tileStyle.stroke, originX, originY);
                }
                // add bottom side for last row
                if (row === tileMap.length - 1) {
                    var bottomSideGraphic = IsoGame.add.graphics(0, 200);
                    drawBottomSide(bottomSideGraphic, tileMap[row][col].tileStyle.stroke, originX, originY);
                }
            }
        }
    }
    Draw.grid = grid;
    function hero(tileX, tileY) {
        var originX = 48;
        var originY = 306;
        var moveTileRightX = tileX * 32;
        var moveTileRightY = tileX * 16;
        var moveTileDownX = tileY * 32;
        var moveTileDownY = tileY * 16;
        originX = originX + moveTileRightX + moveTileDownX;
        originY = originY - moveTileRightY + moveTileDownY;
        Assets.heroSprite = IsoGame.add.sprite(originX, originY, 'hero');
        Assets.heroSprite.tile = { x: tileX, y: tileY };
        Assets.heroSprite.move = 3;
        Assets.heroSprite.animations.add('walk', [1, 2]);
        Assets.heroSprite.animations.play('walk', 2, true);
    }
    Draw.hero = hero;
    function zombie(tileX, tileY) {
        var originX = 80;
        var originY = 306;
        var moveTileRightX = tileX * 32;
        var moveTileRightY = tileX * 16;
        var moveTileDownX = tileY * 32;
        var moveTileDownY = tileY * 16;
        originX = originX + moveTileRightX + moveTileDownX;
        originY = originY - moveTileRightY + moveTileDownY;
        Assets.zombieSprite = IsoGame.add.sprite(originX, originY, 'zombie');
        Assets.zombieSprite.tile = { x: tileX, y: tileY };
        Assets.zombieSprite.move = 3;
        Assets.zombieSprite.animations.add('walk', [1, 2]);
        Assets.zombieSprite.animations.play('walk', 2, true);
        // flip sprite
        Assets.zombieSprite.scale.x *= -1;
    }
    Draw.zombie = zombie;
    function tile(graphic, fill, stroke, originX, originY) {
        graphic.clear();
        graphic.beginFill(fill);
        graphic.lineStyle(2, stroke, 1);
        graphic.moveTo(originX, originY + 16); // tl
        graphic.lineTo(originX + 32, originY); // tr
        graphic.lineTo(originX + 64, originY + 16); // br
        graphic.lineTo(originX + 32, originY + 32); // bl
        graphic.lineTo(originX, originY + 16); // tl
        graphic.endFill();
    }
    Draw.tile = tile;
})(Draw || (Draw = {}));
//# sourceMappingURL=Render.js.map