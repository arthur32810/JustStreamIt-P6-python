(()=>{"use strict";function e(e){const t=document.createElement("article");t.classList.add("card-film");const n=document.createElement("img");n.alt="Image du film "+e.title,n.src=e.image_url,t.appendChild(n);const i=document.createElement("div"),l=document.createElement("h3");l.textContent=e.title;const d=document.createElement("button");return d.textContent="Détails",i.appendChild(l),i.appendChild(d),t.appendChild(i),t}const t=document.getElementById("film-top"),n=function(e){const t=document.createElement("article");t.id="film-top";const n=document.createElement("img");n.alt="Image du film "+e.image_url,n.src=e.image_url,t.appendChild(n);const i=document.createElement("div"),l=document.createElement("h3");l.textContent=e.title;const d=document.createElement("p");d.textContent=e.description;const a=document.createElement("button");return a.textContent="Détails",a.id="openModal",i.appendChild(l),i.appendChild(d),i.appendChild(a),t.appendChild(i),t}({title:"The Big Lebowski",image_url:"./assets/images/film-top.png",description:'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.'});t.parentNode.replaceChild(n,t);const i=document.getElementById("best-films"),l={title:"Titanic",image_url:"./assets/images/titanic-1.png"};e(l);for(let t=0;t<6;t++)i.appendChild(e(l))})();