import { Application, Sprite } from 'pixi.js';
const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
const app=new Application({
     width:innerWidth,
     height:innerHeight
}
);
gameDiv.appendChild(app.view);
const black=document.getElementById("h1");

    
//     sprite2.on("click",()=>
//     {
//         sprite2.visible=false;
//         sprite1.visible=false;
//         sprite.visible=true;
//     })
// })

