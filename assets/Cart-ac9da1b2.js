import{_ as v,u as I,a as $,r as p,b as _,e as l,m as x,d as t,t as u,k as m,n as S,l as y,p as b,i as f,q as F,s as P,F as g,f as C,c as k,w,L,h as B}from"./index-0515b306.js";const D=o=>(b("data-v-3148bd12"),o=o(),f(),o),N={class:"summary"},V={key:0,class:"imageLoader",style:{width:"150px",height:"150px"}},E=["src"],M={class:"summary__details"},T={class:"main__text--details"},j={class:"main__text--details"},z={class:"main__text--details"},O={class:"summary__actions"},q={key:0,class:"main__text--details",style:{color:"red","font-size":"11px","margin-top":"5px","line-height":"11px"}},R=D(()=>t("br",null,null,-1)),A={__name:"ProductSummary",props:["name","amount"],setup(o){const e=o,c=I(),s=$(),d=p(!1),n=i=>{c.push(`/details/${i}`)};return(i,a)=>(_(),l("div",N,[d.value?x("",!0):(_(),l("div",V)),t("img",{onClick:a[0]||(a[0]=r=>n(e.name)),class:"summary__image main__image--product-D",src:`https://picsum.photos/seed/${e.name}/150/150`,onLoad:a[1]||(a[1]=r=>d.value=!0)},null,40,E),t("div",M,[t("p",T,"Porduct "+u(e.name),1),t("p",j,"amount: "+u(e.amount),1),t("p",z," Price per unit: "+u(m(s).storedItems.items[e.name].price),1),t("div",O,[t("button",{class:S({summary__buttons:!0,disabled:e.amount<2}),onClick:a[2]||(a[2]=r=>m(s).decrement(e.name))}," Less ",2),t("button",{class:"summary__buttons",onClick:a[3]||(a[3]=r=>m(s).increment(e.name))}," More "),t("button",{class:"summary__buttons delete",onClick:a[4]||(a[4]=r=>m(s).deleteItem(e.name))}," Delete ")]),m(s).cantDeleteMore?(_(),l("p",q,[y(" There should be at least "),R,y(" one item on the cart ")])):x("",!0)])]))}},G=v(A,[["__scopeId","data-v-3148bd12"]]);const h=o=>(b("data-v-85ac73c4"),o=o(),f(),o),H={class:"check"},J=h(()=>t("h4",{class:"main__text"},"Summary",-1)),K=h(()=>t("div",{class:"check__item"},[t("h5",{class:"check__subtitle"},"Items"),t("h5",{class:"check__subtitle"},"Price")],-1)),Q={class:"check__item"},U={class:"check__text"},W={class:"check__text"},X=h(()=>t("hr",{style:{width:"100%",margin:"auto"}},null,-1)),Y={class:"check__item"},Z=h(()=>t("h4",{class:"check__subtitle--modified"},"Total",-1)),tt={class:"check__subtitle--modified"},et={__name:"Check",props:["items"],setup(o){const e=o,c=p(Object.entries(e.items)),s=p(0);F(e.items,n=>{c.value=Object.entries(n),d(c.value)});const d=n=>{s.value=0,n.forEach(i=>{s.value+=i[1].price*i[1].amount}),s.value=parseFloat(s.value).toFixed(2)};return P(()=>{c.value.forEach(n=>{s.value+=n[1].price*n[1].amount}),s.value=parseFloat(s.value).toFixed(2)}),console.log(c.value),(n,i)=>(_(),l("div",H,[J,t("div",null,[K,(_(!0),l(g,null,C(e.items,(a,r)=>(_(),l("div",Q,[t("p",U,"Product "+u(r),1),t("p",W,u(parseFloat(a.amount*a.price).toFixed(2)),1)]))),256))]),X,t("div",Y,[Z,t("h4",tt,u(s.value),1)])]))}},st=v(et,[["__scopeId","data-v-85ac73c4"]]);const at={class:"cart"},ot={class:"cart__left--column"},ct={class:"cart__right--column"},nt={__name:"Cart",setup(o){const e=$(),c=p();return c.value=e.storedItems,console.log("items in cart:",c.value),(s,d)=>(_(),k(L,null,{default:w(()=>[t("div",at,[t("div",ot,[(_(!0),l(g,null,C(c.value.items,(n,i)=>(_(),k(G,{name:i,amount:n.amount},null,8,["name","amount"]))),256))]),t("div",ct,[B(st,{items:c.value.items},null,8,["items"])])])]),_:1}))}},it=v(nt,[["__scopeId","data-v-51ec814e"]]);export{it as default};