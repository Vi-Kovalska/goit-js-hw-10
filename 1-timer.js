import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as y}from"./assets/vendor-BbbuE1sJ.js";const e=document.querySelector("[data-start]");e.disabled=!0;let c;const i=document.querySelector("#datetime-picker"),S={enableTime:!0,time_24hr:!1,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(e.disabled=!0,y.show({theme:"dark",iconUrl:"../img/icons/alert.svg",imageWidth:"24px",position:"topRight",message:"Please choose a date in the future",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040"})):(c=t[0],e.disabled=!1)},disableMobile:!0,time_24hr:!0};p(i,S);let r=!1,d,s;e.addEventListener("click",g);function g(t){r||(r=!0,e.disabled=!0,i.disabled=!0,d=setInterval(()=>{const n=Date.now();s=c.getTime()-n;const o=b(s);q(o)},1e3))}function b(t){const l=v(Math.floor(t/864e5)),m=a(Math.floor(t%864e5/36e5)),f=a(Math.floor(t%864e5%36e5/6e4)),h=a(Math.floor(t%864e5%36e5%6e4/1e3));return{days:l,hours:m,minutes:f,seconds:h}}function a(t){return String(t).padStart(2,"0")}function v(t){return String(t).padStart(2,"0")}const x=document.querySelector("[data-days]"),C=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),T=document.querySelector("[data-seconds]");function q({days:t,hours:n,minutes:o,seconds:u}){x.textContent=`${t}`,C.textContent=`${n}`,D.textContent=`${o}`,T.textContent=`${u}`,String(s).length===3&&M()}function M(){clearInterval(d),r=!1,i.disabled=!1}
//# sourceMappingURL=1-timer.js.map
