import { Application, Sprite } from 'pixi.js';
import PIXI from 'pixi.js';
import { Sound } from '@pixi/sound';

const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');

const app=new Application({
     width:innerWidth,
     height:innerHeight
}
);
gameDiv.appendChild(app.view);


const sprite=Sprite.from("./assets/off_toggle.png");
// const sprite1=Sprite.from("./assets/wheel.png");
sprite.buttonMode=true;
sprite.interactive=true;
sprite.x=350;
sprite.y=40;
app.stage.addChild(sprite);
const s=Sound.from('./assets/m.mp3');

sprite.on("click",()=>{
    s.play();
    const sprite2=Sprite.from("./assets/on_toggle.png");
    sprite2.x=350;
    sprite2.y=50;
    sprite2.height=500;
    sprite2.width=500;
    
    app.stage.addChild(sprite2);
    sprite2.interactive=true;
    sprite2.buttonMode=true;
    sprite.visible=false;
    sprite2.on("click",()=>
    {
        s.pause();
        sprite2.visible=false;
        sprite.visible=true;
    })
})


// app.stage.addChild(sprite1);
