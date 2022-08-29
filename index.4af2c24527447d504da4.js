(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var a=e.g.document;if(!r&&a&&(a.currentScript&&(r=a.currentScript.src),!r)){var t=a.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})();const r={azathoth:e.p+"assets/Azathoth.jpg",cthulhu:e.p+"assets/Cthulthu.jpg",iogSothoth:e.p+"assets/IogSothoth.jpg",shubNiggurath:e.p+"assets/ShubNiggurath.jpg"},a=[{id:"azathoth",name:"azathoth",cardFace:r.azathoth,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:2,blueCards:0,brownCards:4}},{id:"cthulhu",name:"cthulhu",cardFace:r.cthulhu,firstStage:{greenCards:0,blueCards:2,brownCards:2},secondStage:{greenCards:1,blueCards:0,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"iogSothoth",name:"iogSothoth",cardFace:r.iogSothoth,firstStage:{greenCards:0,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"shubNiggurath",name:"shubNiggurath",cardFace:r.shubNiggurath,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:3,blueCards:1,brownCards:2},thirdStage:{greenCards:2,blueCards:0,brownCards:4}}],t=[{id:"veryEasy",name:"Очень низкая"},{id:"easy",name:"Низкая"},{id:"normal",name:"Средняя"},{id:"hard",name:"Высокая"},{id:"veryHard",name:"Очень высокая"}],n=class{constructor(e,r="div",a="",t=""){const n=document.createElement(r);n.className=a,n.innerHTML=t,e&&e.append(n),this.node=n}destroy(){this.node.remove()}};class s extends n{constructor(e,r,a){super(e,"button","button",r),this.node.onclick=a}}class i extends n{constructor(e,r){super(e,"div","ancient-card"),this.data=r,this.node.style.backgroundImage=`url(${this.data.cardFace})`}}const c={blue1:e.p+"assets/blue1.jpg",blue2:e.p+"assets/blue2.jpg",blue3:e.p+"assets/blue3.jpg",blue4:e.p+"assets/blue4.jpg",blue5:e.p+"assets/blue5.jpg",blue6:e.p+"assets/blue6.jpg",blue7:e.p+"assets/blue7.jpg",blue8:e.p+"assets/blue8.jpg",blue9:e.p+"assets/blue9.jpg",blue10:e.p+"assets/blue10.jpg",blue11:e.p+"assets/blue11.jpg",blue12:e.p+"assets/blue12.jpg"},o=[{id:"blue1",cardFace:c.blue1,difficulty:"hard",color:"blue"},{id:"blue2",cardFace:c.blue2,difficulty:"hard",color:"blue"},{id:"blue3",cardFace:c.blue3,difficulty:"easy",color:"blue"},{id:"blue4",cardFace:c.blue4,difficulty:"easy",color:"blue"},{id:"blue5",cardFace:c.blue5,difficulty:"easy",color:"blue"},{id:"blue6",cardFace:c.blue6,difficulty:"hard",color:"blue"},{id:"blue7",cardFace:c.blue7,difficulty:"normal",color:"blue"},{id:"blue8",cardFace:c.blue8,difficulty:"hard",color:"blue"},{id:"blue9",cardFace:c.blue9,difficulty:"normal",color:"blue"},{id:"blue10",cardFace:c.blue10,difficulty:"easy",color:"blue"},{id:"blue11",cardFace:c.blue11,difficulty:"normal",color:"blue"},{id:"blue12",cardFace:c.blue12,difficulty:"normal",color:"blue"}],d={brown1:e.p+"assets/brown1.jpg",brown2:e.p+"assets/brown2.jpg",brown3:e.p+"assets/brown3.jpg",brown4:e.p+"assets/brown4.jpg",brown5:e.p+"assets/brown5.jpg",brown6:e.p+"assets/brown6.jpg",brown7:e.p+"assets/brown7.jpg",brown8:e.p+"assets/brown8.jpg",brown9:e.p+"assets/brown9.jpg",brown10:e.p+"assets/brown10.jpg",brown11:e.p+"assets/brown11.jpg",brown12:e.p+"assets/brown12.jpg",brown13:e.p+"assets/brown13.jpg",brown14:e.p+"assets/brown14.jpg",brown15:e.p+"assets/brown15.jpg",brown16:e.p+"assets/brown16.jpg",brown17:e.p+"assets/brown17.jpg",brown18:e.p+"assets/brown18.jpg",brown19:e.p+"assets/brown19.jpg",brown20:e.p+"assets/brown20.jpg",brown21:e.p+"assets/brown21.jpg"},l=[{id:"brown1",cardFace:d.brown1,difficulty:"normal",color:"brown"},{id:"brown2",cardFace:d.brown2,difficulty:"normal",color:"brown"},{id:"brown3",cardFace:d.brown3,difficulty:"normal",color:"brown"},{id:"brown4",cardFace:d.brown4,difficulty:"normal",color:"brown"},{id:"brown5",cardFace:d.brown5,difficulty:"normal",color:"brown"},{id:"brown6",cardFace:d.brown6,difficulty:"hard",color:"brown"},{id:"brown7",cardFace:d.brown7,difficulty:"hard",color:"brown"},{id:"brown8",cardFace:d.brown8,difficulty:"hard",color:"brown"},{id:"brown9",cardFace:d.brown9,difficulty:"hard",color:"brown"},{id:"brown10",cardFace:d.brown10,difficulty:"hard",color:"brown"},{id:"brown11",cardFace:d.brown11,difficulty:"easy",color:"brown"},{id:"brown12",cardFace:d.brown12,difficulty:"easy",color:"brown"},{id:"brown13",cardFace:d.brown13,difficulty:"easy",color:"brown"},{id:"brown14",cardFace:d.brown14,difficulty:"easy",color:"brown"},{id:"brown15",cardFace:d.brown15,difficulty:"normal",color:"brown"},{id:"brown16",cardFace:d.brown16,difficulty:"normal",color:"brown"},{id:"brown17",cardFace:d.brown17,difficulty:"normal",color:"brown"},{id:"brown18",cardFace:d.brown18,difficulty:"normal",color:"brown"},{id:"brown19",cardFace:d.brown19,difficulty:"normal",color:"brown"},{id:"brown20",cardFace:d.brown20,difficulty:"normal",color:"brown"},{id:"brown21",cardFace:d.brown21,difficulty:"easy",color:"brown"}],g={green1:e.p+"assets/green1.jpg",green2:e.p+"assets/green2.jpg",green3:e.p+"assets/green3.jpg",green4:e.p+"assets/green4.jpg",green5:e.p+"assets/green5.jpg",green6:e.p+"assets/green6.jpg",green7:e.p+"assets/green7.jpg",green8:e.p+"assets/green8.jpg",green9:e.p+"assets/green9.jpg",green10:e.p+"assets/green10.jpg",green11:e.p+"assets/green11.jpg",green12:e.p+"assets/green12.jpg",green13:e.p+"assets/green13.jpg",green14:e.p+"assets/green14.jpg",green15:e.p+"assets/green15.jpg",green16:e.p+"assets/green16.jpg",green17:e.p+"assets/green17.jpg",green18:e.p+"assets/green18.jpg"},u=[{id:"green1",cardFace:g.green1,difficulty:"easy",color:"green"},{id:"green2",cardFace:g.green2,difficulty:"hard",color:"green"},{id:"green3",cardFace:g.green3,difficulty:"hard",color:"green"},{id:"green4",cardFace:g.green4,difficulty:"hard",color:"green"},{id:"green5",cardFace:g.green5,difficulty:"hard",color:"green"},{id:"green6",cardFace:g.green6,difficulty:"hard",color:"green"},{id:"green7",cardFace:g.green7,difficulty:"normal",color:"green"},{id:"green8",cardFace:g.green8,difficulty:"normal",color:"green"},{id:"green9",cardFace:g.green9,difficulty:"normal",color:"green"},{id:"green10",cardFace:g.green10,difficulty:"normal",color:"green"},{id:"green11",cardFace:g.green11,difficulty:"normal",color:"green"},{id:"green12",cardFace:g.green12,difficulty:"easy",color:"green"},{id:"green13",cardFace:g.green13,difficulty:"normal",color:"green"},{id:"green14",cardFace:g.green14,difficulty:"normal",color:"green"},{id:"green15",cardFace:g.green15,difficulty:"normal",color:"green"},{id:"green16",cardFace:g.green16,difficulty:"easy",color:"green"},{id:"green17",cardFace:g.green17,difficulty:"easy",color:"green"},{id:"green18",cardFace:g.green18,difficulty:"easy",color:"green"}],b=e=>{for(let r=e.length-1;r>0;r--){let a=Math.floor(Math.random()*(r+1));[e[r],e[a]]=[e[a],e[r]]}return e};class h extends n{constructor(e,r){super(e,"div","game-set"),this.cardSet=r,this.names={firstStage:"Этап 1",secondStage:"Этап 2",thirdStage:"Этап 3"},console.log(this.cardSet),this.gameStateTable=new n(this.node,"div","game-state"),this.showGameStateTable(),this.cardBtn=new n(this.node,"div","show-card-btn"),this.card=new n(this.node,"div","card"),this.cardBtn.node.onclick=()=>{let e;Object.keys(this.cardSet).forEach((r=>{this.cardSet[r].length&&!e&&(e=this.cardSet[r].pop(),this.showCard(e))})),this.cardSet.thirdStage.length||this.cardBtn.destroy(),this.showGameStateTable()}}showGameStateTable(){let e;this.gameStateWrapper&&this.gameStateWrapper.destroy(),this.gameStateWrapper=new n(this.gameStateTable.node,"div","game-state-wrapper"),Object.keys(this.cardSet).forEach((r=>{const a=new n(this.gameStateWrapper.node,"div","stage-wrapper");this.cardSet[r].length||a.node.classList.add("stage-complited"),a.node.classList.remove("stage-active"),this.cardSet[r].length&&!e&&(a.node.classList.add("stage-active"),e=1),a.node.innerHTML=`\n      <h2 class = "stage-name"> ${this.names[r]} </h2>\n      <div class = "game-state-count bg-green">${this.cardSet[r].filter((e=>"green"===e.color)).length}</div>\n      <div class = "game-state-count bg-brown">${this.cardSet[r].filter((e=>"brown"===e.color)).length}</div>\n      <div class = "game-state-count bg-blue">${this.cardSet[r].filter((e=>"blue"===e.color)).length}</div>\n      `}))}showCard(e){this.card.node.style.backgroundImage=`url('${e.cardFace}')`}}class f{constructor(){this.state={},this.state.Ancinent="",this.state.GameDifficulty="normal",this.gameMenu=new n(document.body,"div","game-menu","<h1>Eldritch Horror</h1>"),this.gameField=new n(document.body,"div","game-field",""),this.ancientsMenu=new n(this.gameMenu.node,"div","ancients-menu","<h2>Выберите карту древнего</h2>"),this.difficultyMenu=new n(this.gameMenu.node,"div","difficulty-menu","<h2>Выберите сложность</h2>"),this.createAncientsMenu(),this.createDifficultyMenu(),this.createStartBtn()}createAncientsMenu(){this.ancientsWrapper&&this.ancientsWrapper.destroy(),this.ancientsWrapper=new n(this.ancientsMenu.node,"div","ancients-wrapper",""),a.forEach((e=>{const r=new i(this.ancientsWrapper.node,e);r.node.onclick=()=>{this.state.Ancinent=r.data,r.node.classList.add("ancient-card_active"),this.createStartBtn(),this.createAncientsMenu()},r.data.id===this.state.Ancinent.id&&r.node.classList.add("ancient-card_active")}))}createDifficultyMenu(){this.difficultiesWrapper&&this.difficultiesWrapper.destroy(),this.difficultiesWrapper=new n(this.difficultyMenu.node,"div","difficulties-wrapper",""),t.forEach((e=>{const r=new s(this.difficultiesWrapper.node,e.name,(()=>{this.state.GameDifficulty=e.id,r.node.classList.add("active-button"),this.createStartBtn(),this.createDifficultyMenu()}));e.id===this.state.GameDifficulty&&r.node.classList.add("active-button")}))}createStartBtn(){if(!this.state.Ancinent)return void(this.gameField.node.innerHTML="<h2>Для начала игры выберите карту древнего</h2>");this.gameField.node.innerHTML="";const e=new s(this.gameField.node,"Замешать колоду",(()=>{this.cardSet=(e=>{const r=o,a=l,t=u,n=r=>e.Ancinent.firstStage[r]+e.Ancinent.secondStage[r]+e.Ancinent.thirdStage[r],s={veryEasy:e=>{const r=n(`${e[0].color}Cards`),a=[...e.filter((e=>"easy"===e.difficulty)),...e.filter((e=>"normal"===e.difficulty))];return a.slice(0,r),b(a)},easy:e=>{const r=n(`${e[0].color}Cards`),a=e.filter((e=>"hard"!==e.difficulty)),t=b(a);return t.slice(0,r),t},normal:e=>{const r=n(`${e[0].color}Cards`);return b(e).slice(0,r)},hard:e=>{const r=n(`${e[0].color}Cards`),a=e.filter((e=>"easy"!==e.difficulty)),t=b(a);return t.slice(0,r),t},veryHard:e=>{const r=n(`${e[0].color}Cards`),a=[...e.filter((e=>"hard"===e.difficulty)),...e.filter((e=>"normal"===e.difficulty))];return a.slice(0,r),b(a)}},i={blueCards:s[e.GameDifficulty](r),brownCards:s[e.GameDifficulty](a),greenCards:s[e.GameDifficulty](t)},c={firstStage:[],secondStage:[],thirdStage:[]};return Object.keys(c).forEach((r=>{c[r]=b([...i.blueCards.splice(0,e.Ancinent[r].blueCards),...i.brownCards.splice(0,e.Ancinent[r].brownCards),...i.greenCards.splice(0,e.Ancinent[r].greenCards)])})),c})(this.state),new h(this.gameField.node,this.cardSet),e.destroy()}))}}document.addEventListener("DOMContentLoaded",(()=>{new f}))})();