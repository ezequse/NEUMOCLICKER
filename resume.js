class resumir extends Phaser.Scene {
  constructor() {
    super('resumir');
  }

  preload ()
  {   
    this.load.image('resume', 'assets/resume.png');
    this.load.image('backboton', 'assets/back_button.png');
    this.load.image('home', 'assets/home.png');
    this.load.image('bg_pausa', 'assets/bg_pausa.png');
    
  }

  create() {
    var bg_pausa = this.add.image(400,300, 'bg_pausa').setVisible(true);
    var resume = this.add.image( 500, 300, 'resume').setDisplaySize(651, 250);
    
    var jugar = this.add.image(400, 400, 'backboton').setScale(1.5).setInteractive();
    var menu = this.add.image(600, 400, 'home').setScale(3).setInteractive();

        jugar.on("pointerdown", () => {
          this.scene.stop();
          this.scene.resume('gameplay');   
                 
        });

        menu.on("pointerdown", () => {
          if (idioma == "por"){
            var confirmacion = this.add.text(290, 500, '          Seguro? \n(Toque aqui para ir ao menu)',{fontSize: '24px'}).setInteractive();
          } else if ( idioma == "en"){
            var confirmacion = this.add.text(270, 500, '          Are you sure? \n(Touch here to return to the menu)',{fontSize: '24px'}).setInteractive();
          } else {
            var confirmacion = this.add.text(290, 500, '            Seguro? \n(Toca aquí para volver al menú)',{fontSize: '24px'}).setInteractive();
          }
          
           
          confirmacion.on("pointerdown", () =>{
            this.scene.stop();
            this.scene.stop('gameplay');
            this.scene.start('teaser');  
            this.scene.bringToTop('teaser'); 
          });

        });

    }

  update() {
  
  }
}