import { Application, Sprite } from 'pixi.js';
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
    const win=window.open("./assets/bg.png");
    setTimeout(()=>
    { win.close();}, 3000);
    app.stage.addChild(sprite);
    
})

