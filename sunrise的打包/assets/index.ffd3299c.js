var e=Object.defineProperty,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(s,a,t)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;import{d as n,r as o,c,o as p,w as v,a as l,b as d,s as i,t as u,u as g,e as b,f,g as m,h as y,D as h}from"./vendor.4032689a.js";var O=n({name:"App",components:{}});O.render=function(e,s,a,t,r,n){const v=o("router-view");return p(),c(v)};var w=n({name:"ObsSvgaDock",props:{btnlist:{type:Array,value:[1,2,3,4,5,6,7,8]}},setup(){}});const j=v()(((e,s,a,t,r,n)=>(p(),c("h1",null,"hello"))));w.render=j,w.__scopeId="data-v-11cd6ea6";var P=n({name:"AudioEffect",props:{btnlist:{type:Array,value:[1,2,3,4,5,6,7,8]}},setup(){}});const _=v()(((e,s,a,t,r,n)=>(p(),c("h1",null,"ae"))));P.render=_,P.__scopeId="data-v-21a2c518";var A=n({name:"ObsSvgaRender",props:{},setup(){const e=l({rendersize:{display:"flex","justify-content":"center"}}),n=g(),o=["/svga/assets/1.d2729e58.svga","/svga/assets/2.33b7cc9c.svga","/svga/assets/3.3af8256e.svga","/svga/assets/4.f28b98fd.svga","/svga/assets/5.39d3d5b6.svga","/svga/assets/6.bc3b283e.svga","/svga/assets/7.57105399.svga","/svga/assets/8.b5693fcd.svga"];return d((()=>{let s=new i.Player("#Canvas");var a=new i.Parser;const t=Number(n.params.id);a.load(o[t-1],(function(a){console.log(a),console.log(e.rendersize),s.setVideoItem(a),s.loops=1,s.startAnimation()}))})),((e,n)=>{for(var o in n||(n={}))a.call(n,o)&&r(e,o,n[o]);if(s)for(var o of s(n))t.call(n,o)&&r(e,o,n[o]);return e})({},u(e))}});const I=v()(((e,s,a,t,r,n)=>(p(),c("div",null,[b("div",{id:"Canvas",style:e.rendersize},null,4)]))));A.render=I,A.__scopeId="data-v-63c4182e";const z=[{path:"/",component:w},{path:"/ae/:uuid",component:P},{path:"/render/:id",component:A}],S=f({history:m("#"),routes:z}),x=y(O);x.config.globalProperties.$axios=h,x.use(S).mount("#app");
