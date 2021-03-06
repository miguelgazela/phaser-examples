
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

	game.load.spritesheet('gameboy', 'assets/sprites/gameboy_seize_color_40x60.png', 40, 60);

}

var sprite;
var sprite2;

function create() {

	game.stage.backgroundColor = '#124184';

	//	Here we're tweening the scale of the sprite, which translates to the scale of the Body as well
	//	The collision will carry on working even against the scaled body.

	sprite = game.add.sprite(200, 300, 'gameboy', 2);
	sprite.name = 'green';
	sprite.anchor.setTo(0.5, 0.5);

	game.physics.enable(sprite, Phaser.Physics.ARCADE);
	sprite.body.immovable = true;

	sprite2 = game.add.sprite(600, 270, 'gameboy', 3);
	sprite2.name = 'yellow';
	game.physics.enable(sprite2, Phaser.Physics.ARCADE);
	sprite2.body.rebound = false;

	game.add.tween(sprite.scale).to( { x: 3, y: 3 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

}

function update() {

	sprite2.body.velocity.x = -200;

	game.physics.arcade.collide(sprite, sprite2);

}

function render() {

    // game.debug.physicsBody(sprite.body);
    // game.debug.physicsBody(sprite2.body);

}
