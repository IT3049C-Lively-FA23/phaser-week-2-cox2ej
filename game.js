const game = new Phaser.Game(800,600, Phaser.AUTO, '', {
    preload : preload,
    create : create,
    update : update
})

    function preload(){
        game.load.image('sky', 'assets/sky.png')
        game.load.image('ground', 'assets/platform.png')
        game.load.image('diamond', 'assets/diamond.png')
        game.load.spritesheet('woof', 'assets/woof.png', 32, 32)
    }
    function create(){
        game.physics.startSystem(Phaser.Physics.ARCADE)

        game.add.sprite(0,0,'sky')

        platforms = game.add.group()
        platforms.enableBody = true

        let ground = platforms.create(0, game.world.height - 64, 'ground')
        ground.scale.setTo(2,2)
        ground.body.immovable

        
    }
    function update(){

    }

