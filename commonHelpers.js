import{a as m,S as w,i as g}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();m.defaults.baseURL="https://pixabay.com";async function p(s,t){return(await m.get("api/",{params:{key:"5078704-abab538ab7558d1cf73264192",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}function f(s,t){const n=s.map(({largeImageURL:l,webformatURL:e,likes:r,comments:i,views:M,downloads:S,tags:v})=>`<li class="gallery-item">
            <a class="link-card" href="${l}">
                <img class="image-card" src="${e}" alt="${v}"/></a>
                <ul class="info-list">
                    <li class="info-item">
                        <h3 class="info-title">Likes</h3>
                        <p>${r}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Views</h3>
                        <p>${M}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Comments</h3>
                        <p>${i}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Downloads</h3>
                        <p>${S}</p>
                    </li>
                </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",n)}const q="/goit-js-hw-12/assets/octagon-7115e62e.svg";let c="",a=1,u;const o={loader:document.querySelector(".loader"),galleryBox:document.querySelector(".gallery-box"),gallery:document.querySelector(".gallery"),form:document.querySelector("form"),btnMore:document.querySelector(".btn-more")},h=new w(".link-card",{captionsData:"alt",captionDelay:250}),d={message:"",backgroundColor:" #EF4040",maxWidth:"432px",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"24",position:"topRight",iconUrl:q,progressBarColor:"#B51B1B"};o.form.addEventListener("submit",async s=>{if(s.preventDefault(),L(),c=o.form.elements.search.value.trim(),c!==""){o.gallery.innerHTML="",a=1;try{y();const t=await p(c,a);b(),u=Math.ceil(t.totalHits/15),t.hits.length>0&&u>1?(f(t.hits,o.gallery),h.refresh(),x()):t.hits.length>0?(f(t.hits,o.gallery),h.refresh()):(d.message="Sorry, there are no images matching your search query. Please try again!",g.show(d),o.gallery.innerHTML="")}catch(t){console.log("Error:",t)}o.form.reset()}});o.btnMore.addEventListener("click",async()=>{try{a+=1,y();const s=await p(c,a);b(),f(s.hits,o.gallery),a===u&&(L(),d.message="We're sorry, but you've reached the end of search results.",g.show(d)),h.refresh()}catch(s){console.log("Error:",s)}});function y(){o.loader.classList.remove("hidden")}function b(){o.loader.classList.add("hidden")}function x(){o.btnMore.classList.remove("hidden")}function L(){o.btnMore.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
