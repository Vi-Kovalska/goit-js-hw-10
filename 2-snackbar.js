import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector(".form"),m=document.querySelector("[name=delay]");a.addEventListener("submit",r);function r(t){t.preventDefault();const i=t.target.elements.delay.value;new Promise((e,s)=>{setTimeout(()=>{t.target.elements.state.value==="fulfilled"?e(`${i}`):s(`${i}`)},i)}).then(e=>{o.show({theme:"dark",iconUrl:"../img/icons/ok.svg",imageWidth:"24px",position:"topRight",title:"OK",message:`Fulfilled promise in ${e}ms`,messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#59A10D"})}).catch(e=>{o.show({theme:"dark",iconUrl:"../img/icons/alert.svg",imageWidth:"24px",position:"topRight",title:"Error",message:`Rejected promise in ${e}ms`,messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040"})}),m.value=""}
//# sourceMappingURL=2-snackbar.js.map
