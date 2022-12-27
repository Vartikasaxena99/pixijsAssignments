import { Application, Sprite } from 'pixi.js';
const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
const app=new Application({
     width:innerWidth,
     height:innerHeight
}
);
gameDiv.appendChild(app.view);
const sprite=Sprite.from("./assets/text.png");
const spriteB=Sprite.from("./assets/icon.png");
const spriteA=Sprite.from("./assets/anim.png");
sprite.buttonMode=true;
sprite.interactive=true;
sprite.x=100;
sprite.y=100;
spriteB.x=500;
spriteB.y=150;
spriteA.x=800;
spriteA.y=150;
app.stage.addChild(sprite);
app.stage.addChild(spriteB);
app.stage.addChild(spriteA);
app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    spriteA.rotation -= 0.10 * delta;
    
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

