function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let n=null;const o=()=>{e.body.style.backgroundColor=t(),e.body.style.color=t()};e.btnStart.addEventListener("click",(function(){n=setInterval(o,1e3),e.btnStart.disabled=!0,e.btnStop.disabled=!1})),e.btnStop.addEventListener("click",(()=>{clearInterval(n),e.btnStart.disabled=!1,e.btnStop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.ce97095f.js.map
