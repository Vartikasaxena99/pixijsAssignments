import { Application, Sprite,Graphics } from 'pixi.js';
const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
const app=new Application({
     width:innerWidth,
     height:innerHeight
}
);
gameDiv.appendChild(app.view);
const sprite=Sprite.from("./assets/text.png");
const spriteB=Sprite.from("./assets/icon.png");

sprite.buttonMode=true;
sprite.interactive=true;
sprite.x=100;
sprite.y=100;
spriteB.x=500;
spriteB.y=150;

app.stage.addChild(sprite);
app.stage.addChild(spriteB);

const graphics=new Graphics();
const thing = new Graphics();
app.stage.addChild(thing);
thing.x = 950;
thing.y = 250;

let count = 0;

// Just click on the stage to draw random lines

app.stage.on('pointerdown', () => {
    graphics.lineStyle(Math.random() * 30, Math.random() * 0xFFFFFF, 1);
    graphics.moveTo(Math.random() * 800, Math.random() * 600);
    graphics.bezierCurveTo(
        Math.random() * 800, Math.random() * 600,
        Math.random() * 800, Math.random() * 600,
        Math.random() * 800, Math.random() * 600,
    );
});

app.ticker.add(() => {
    count += 0.1;

    thing.clear();
    thing.lineStyle(10, 0xff0000, 1);
    thing.beginFill(0xffFF00, 0.5);

    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
    thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
    thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
    thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.closePath();

    thing.rotation = count * 0.1;
});

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

