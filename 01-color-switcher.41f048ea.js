const t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let e=null;t.btnStart.addEventListener("click",(function(){e=1e3,t.btnStart.disabled=!1})),t.btnStop.addEventListener("click",(()=>{clearInterval(e),t.btnStart.disabled=!0}));
//# sourceMappingURL=01-color-switcher.41f048ea.js.map
