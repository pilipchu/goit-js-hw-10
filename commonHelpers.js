import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as p}from"./assets/vendor-77e16229.js";const a=document.querySelector("button[data-start]"),c=document.querySelector("span[data-days]"),d=document.querySelector("span[data-hours]"),l=document.querySelector("span[data-minutes]"),u=document.querySelector("span[data-seconds]");let e=0,s=null;a.disabled=!0;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]-f.defaultDate<0?(p.error({title:"Error",message:"Please choose a date in the future",maxWidth:400,position:"topRight"}),clearInterval(s),c.textContent="00",d.textContent="00",l.textContent="00",u.textContent="00"):(e=t[0]-new Date,a.disabled=!1)}};m("#datetime-picker",f);function S(t){if(e<0)return;const i=1e3,r=i*60,n=r*60,o=n*24;c.textContent=Math.floor(t/o).toString().padStart(2,"0"),d.textContent=Math.floor(t%o/n).toString().padStart(2,"0"),l.textContent=Math.floor(t%o%n/r).toString().padStart(2,"0"),u.textContent=Math.floor(t%o%n%r/i).toString().padStart(2,"0")}a.addEventListener("click",()=>{a.disabled=!0,s=setInterval(()=>{S(e),e-=1e3,e<0&&clearInterval(s)},1e3)});
//# sourceMappingURL=commonHelpers.js.map
