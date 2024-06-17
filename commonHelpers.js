import{a as n,S as d,i as m}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();n.defaults.baseURL="https://pixabay.com";async function p(i){return(await n.get("api/",{params:{key:"5078704-abab538ab7558d1cf73264192",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}function y(i,o){const s=i.map(({largeImageURL:l,webformatURL:e,likes:t,comments:a,views:c,downloads:f,tags:u})=>`<li class="gallery-item">
            <a class="link-card" href="${l}">
                <img class="image-card" src="${e}" alt="${u}"/></a>
                <ul class="info-list">
                    <li class="info-item">
                        <h3 class="info-title">Likes</h3>
                        <p>${t}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Views</h3>
                        <p>${c}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Comments</h3>
                        <p>${a}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Downloads</h3>
                        <p>${f}</p>
                    </li>
                </ul>
        </li>`).join("");o.innerHTML=s}const h="/goit-js-hw-12/assets/octagon-7115e62e.svg",r={loader:document.querySelector(".loader"),galleryBox:document.querySelector(".gallery-box"),gallery:document.querySelector(".gallery"),form:document.querySelector("form")},g=new d(".link-card",{captionsData:"alt",captionDelay:250}),b={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:" #EF4040",maxWidth:"432px",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"24",position:"topRight",iconUrl:h,progressBarColor:"#B51B1B"};r.form.addEventListener("submit",async i=>{i.preventDefault();const o=r.form.elements.search.value.trim();if(o!==""){try{L();const s=await p(o);x(),s.hits.length>0?(y(s.hits,r.gallery),g.refresh()):(m.show(b),r.gallery.innerHTML="")}catch(s){console.log("Error:",s)}r.form.reset()}});function L(){r.galleryBox.style.display="none",r.loader.style.display="block"}function x(){r.loader.style.display="none",r.galleryBox.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
