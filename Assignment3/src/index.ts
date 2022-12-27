import { Application, Sprite } from 'pixi.js';
const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
const app=new Application({
     width:innerWidth,
     height:innerHeight
}
);
gameDiv.appendChild(app.view);
const sprite=Sprite.from("./assets/first.jpg");
const sprite1=Sprite.from("./assets/forward.png");
sprite1.buttonMode=true;
sprite1.interactive=true;
sprite.height=innerHeight;
sprite.width=innerWidth;
sprite1.x=990;
sprite1.y=360;
sprite1.height=200;
sprite1.width=200;
app.stage.addChild(sprite);
app.stage.addChild(sprite1);
sprite1.on("click",()=>{
    console.log("clicked");
    const sprite3=Sprite.from("./assets/second.jpg");
    app.stage.addChild(sprite3);
    sprite3.height=innerHeight;
    sprite3.width=innerWidth;
    const sprite11=Sprite.from("./assets/forward.png");
    const sprite22=Sprite.from("./assets/back.png");
    sprite11.x=990;
    sprite11.y=360;
    sprite22.x=100;
    sprite22.y=380;
    sprite22.height=150;
    sprite22.width=150;
    sprite11.height=200;
    sprite11.width=200;
    app.stage.addChild(sprite11);
    app.stage.addChild(sprite22);
    sprite11.buttonMode=true;
    sprite11.interactive=true;
    sprite22.buttonMode=true;
    sprite22.interactive=true;
    sprite3.interactive=true;
    sprite11.on("click",()=>
    {
        const sprite4=Sprite.from("./assets/third.jpg");
        app.stage.addChild(sprite4);
        const sprite23=Sprite.from("./assets/back.png");
        sprite23.x=100;
        sprite23.y=380;
        sprite23.height=150;
        sprite23.width=150;
        sprite23.buttonMode=true;
        sprite23.interactive=true;
        app.stage.addChild(sprite23);
        sprite23.on("click",()=>
        {
            app.stage.addChild(sprite3);
            sprite.height=innerHeight;
            sprite.width=innerWidth; 
            app.stage.addChild(sprite11);
            app.stage.addChild(sprite22);
        })
    })
    sprite22.on("click",()=>
    {
        app.stage.addChild(sprite);
        sprite.height=innerHeight;
        sprite.width=innerWidth;
        app.stage.addChild(sprite1);

        
    })
})

