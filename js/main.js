var CatchMice = CatchMice || {};

CatchMice.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_canvas');

CatchMice.game.state.add('Boot', CatchMice.Boot);
CatchMice.game.state.add('Preload', CatchMice.Preload);
CatchMice.game.state.add('MainMenu', CatchMice.MainMenu);
CatchMice.game.state.add('MapMenu', CatchMice.MapMenu);
CatchMice.game.state.add('Game', CatchMice.Game);

CatchMice.level = 0;


CatchMice.game.state.start('Boot');