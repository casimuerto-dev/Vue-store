import{_ as g,a as w,j as b,r as d,o as k,b as D,c as I,w as h,L as C,d as s,g as v,v as f,h as P,t as l,k as n,T,l as i,p as S,i as $}from"./index-0515b306.js";const a=c=>(S("data-v-081fad1d"),c=c(),$(),c),B={class:"main"},L={class:"main__column--left"},A={class:"main__wrapper"},N={class:"main__text main__text--modified"},V={class:"imageLoader"},z=["src"],j=a(()=>s("p",{class:"main__text--normal"},"Description of the product",-1)),G=a(()=>s("p",{class:"main__text--normal"}," This product is amazing because this and this and that ",-1)),M={class:"main__column--right"},R={class:"main__wrapper--right"},W=a(()=>s("h2",{class:"main__text",style:{"background-color":"black",position:"relative"}}," Product Details ",-1)),q={class:"main__text--details"},E=a(()=>s("br",null,null,-1)),F={style:{"text-decoration":"underline"}},H=a(()=>s("br",null,null,-1)),J=a(()=>s("p",{class:"main__text--details"},"Perks of this product:",-1)),K=a(()=>s("ul",null,[s("li",{class:"main__text--details"},"Warranty: 2 days!"),s("li",{class:"main__text--details"},"Design: Beautiful colors"),s("li",{class:"main__text--details"}," Accessories: Comes with everything you see! ")],-1)),O={class:"main__text--price"},Q=a(()=>s("span",{style:{"font-size":"14px"}},"99",-1)),U={class:"main__actions"},X={class:"main__actions--count"},Y={__name:"ProductDetails",setup(c){const x=w(),t=b(),r=d(!1),u=d(!1),e=d(1);console.log("product-name:",t.params.name);const m=_=>{_==="+"&&e.value<10?e.value+=1:_==="-"&&e.value>1&&(e.value-=1)},y=()=>{x.increment(t.params.name,e.value)};return k(()=>{window.scrollTo(0,170),u.value=!0}),(_,o)=>(D(),I(C,null,{default:h(()=>[s("div",B,[s("div",L,[v(P(T,{name:"fade"},{default:h(()=>[s("div",A,[s("p",N," Product "+l(n(t).params.name),1),v(s("div",V,null,512),[[f,!r.value]]),s("img",{class:"main__image--product-D",src:`https://picsum.photos/seed/${n(t).params.name}/350/350`,onLoad:o[0]||(o[0]=p=>r.value=!0)},null,40,z),j,G])]),_:1},512),[[f,u.value]])]),s("div",M,[s("div",R,[W,s("p",q,[i(" This product will blow your mind!"),E,i(" This is the acclaimed "),s("span",F,"Product "+l(n(t).params.name),1),i(" that has changed the way the world defines products."),H,i(" Get yours now! ")]),J,K,s("p",O,[i(" $"+l(parseInt(n(t).params.name)>10?parseInt(n(t).params.name)+10:parseInt(n(t).params.name)+20)+".",1),Q])]),s("div",U,[s("button",{class:"main__actions--button",onClick:o[1]||(o[1]=p=>m("-"))},"-"),s("button",{class:"main__actions--button",onClick:o[2]||(o[2]=p=>m("+"))},"+"),s("p",X,l(e.value),1),s("button",{class:"main__actions--button",onClick:y}," Add to cart! ")])])])]),_:1}))}},ss=g(Y,[["__scopeId","data-v-081fad1d"]]);export{ss as default};