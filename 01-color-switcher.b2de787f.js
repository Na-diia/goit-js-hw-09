function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const o={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),color:document.querySelector(".color")};let e=null;const n=()=>{o.body.style.backgroundColor=t(),o.body.style.color=t(),o.color.textContent=t()};o.btnStart.addEventListener("click",(function(){e=setInterval(n,1e3),o.btnStart.disabled=!1})),o.btnStop.addEventListener("click",(()=>{clearInterval(e),o.btnStart.disabled=!0}));
//# sourceMappingURL=01-color-switcher.b2de787f.js.map
