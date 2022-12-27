import { Application, Sprite } from 'pixi.js';
// import { css } from './css/main.css';
// import { Game } from './Game';
//     const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
//     const app:Application = new Game({
//         height:720,
//         width:1480,
//         backgroundColor: 0x996633,
//     });
//     gameDiv.appendChild(app.view);
const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
const app=new Application({
     width:innerWidth,
     height:innerHeight
}
);
gameDiv.appendChild(app.view);
const sprite=Sprite.from("./assets/Stop_Down.png");
sprite.buttonMode=true;
sprite.interactive=true;
sprite.x=200;
sprite.y=200;
app.stage.addChild(sprite);
sprite.on("click",()=>{
    console.log("clicked");
    const sprite1=Sprite.from("./assets/bg.jpg");
    const sprite2=Sprite.from("./assets/closeButton.png");
    app.stage.addChild(sprite1);
    sprite1.height=innerHeight;
    sprite1.width=innerWidth;
    sprite2.x=1000;
    sprite2.y=10;
    sprite2.height=200;
    sprite2.width=200;
    app.stage.addChild(sprite2);
    
    sprite2.interactive=true;
    sprite2.buttonMode=true;
    sprite.visible=false;
    sprite2.on("click",()=>
    {
        sprite2.visible=false;
        sprite1.visible=false;
        sprite.visible=true;
    })
})

