import{a as V,r as v,w as h,o as L,b as _,m as M,d as o,e as a,f as s,g as N,t as d,F as x,h as y,i as g,n as B}from"./index-971d019f.js";const R={class:"px-8 w-full py-8 flex justify-center"},z={class:"max-w-screen-xl w-full flex-col"},A={class:"mb-8"},H=s("span",{class:"font-bold text-white"},"← 3D 맵으로",-1),K=[H],U={class:"w-full flex flex-col"},Z={class:"font-bold text-3xl"},q={class:"mt-4 font-bold text-3xl text-gray-400"},G={key:0,class:"w-full flex flex-wrap py-4 border-b"},J=["onClick"],O={key:1,class:"w-full flex mt-4 py-4 border-b"},P=["onClick"],Q={key:2,class:"w-full flex flex-col flex-wrap"},W=s("span",{class:"mt-4 font-bold text-xl"},"빈 강의실",-1),X={class:"mb-4 font-bold text-gray-500"},Y={class:"flex flex-wrap"},E=["onClick"],ee={class:"px-4 py-2 font-bold"},le=["onClick"],te={class:"px-4 py-2 font-bold"},ae={__name:"VacantClassroom",setup(se){const b=V(),n=v("멀티미디어관-글로벌관"),u=v("1"),r=v(null),p=v(null);function F(e){n.value=e}function S(e){u.value=e}const i=v(null),T=()=>{i.value=new Date().toLocaleDateString("ko-KR",{timeZone:"Asia/Seoul",weekday:"long",hour:"2-digit",minute:"numeric",second:"numeric",hour12:!1})},m=v(""),c=v(null);h(i,()=>{m.value=i.value.split(" ")[0].split("(")[1].split("요일")[0],c.value=i.value.split(" ")[1].split(":")});const $=setInterval(T,1e3);function j(e){var t=!0;console.log(e);for(var l of e.classes){var f=l.days,I=l.timeStart,C=l.timeEnd;if(typeof f=="object")for(var D of f)D==m.value&&k(I,C)&&(t=!1);else f==m.value&&k(I,C)&&(t=!1)}return t}function k(e,t){if(parseInt(c.value[0])-parseInt(e.split(":")[0])<0)return!1;if(parseInt(c.value[0])-parseInt(e.split(":")[0])>=0)if(parseInt(c.value[0])-parseInt(t.split(":")[0])<0){if(parseInt(c.value[1])-parseInt(e.split(":")[1])>=0)return!0}else return parseInt(c.value[0])-parseInt(t.split(":")[0])==0?!(parseInt(c.value[1])-parseInt(t.split(":")[1])>0):!1}h(n,()=>{for(var e of _.bldgs)if(e.bldgName==n.value)if(p.value=e,u.value="1",e.floors.length==0)r.value=null;else for(var t of e.floors)t.floor==u.value&&(r.value=t)}),h(u,()=>{for(var e of _.bldgs)if(e.bldgName==n.value)if(p.value=e,e.floors.length==0)r.value=null;else for(var t of e.floors)t.floor==u.value&&(r.value=t)});function w(e,t,l){b.push({name:"bldg-map-classroom",params:{bldg:e,floor:t,classroom:l}})}return L(()=>{localStorage.getItem("reloaded")?localStorage.removeItem("reloaded"):(localStorage.setItem("reloaded","1"),b.go(0));for(var e of _.bldgs)if(e.bldgName==n.value){p.value=e;for(var t of e.floors)t.floor==u.value&&(r.value=t)}}),M(()=>{clearInterval($)}),(e,t)=>(o(),a("div",R,[s("div",z,[s("div",A,[s("button",{onClick:t[0]||(t[0]=l=>{N(b).push({name:"home"})}),class:"px-4 py-2 bg-gray-300 hover:bg-gray-500 transition-bg-colors duration-300 ease-in-out"},K)]),s("div",U,[s("span",Z,d(n.value),1),s("span",q,d(u.value)+"F",1)]),p.value?(o(),a("div",G,[(o(!0),a(x,null,y(N(_).bldgs,l=>(o(),a("div",{key:l.id,class:"mt-4"},[s("button",{onClick:f=>F(l.bldgName),class:B([n.value==l.bldgName?"text-white bg-red-300":"bg-gray-300","px-4 py-2 mr-4 hover:bg-red-300 transition-bg-colors duration-300 ease-in-out"])},[s("span",null,d(l.bldgName),1)],10,J)]))),128))])):g("",!0),p.value?(o(),a("div",O,[(o(!0),a(x,null,y(p.value.floors,l=>(o(),a("div",{key:l.id},[s("button",{onClick:f=>S(l.floor),class:B([u.value==l.floor?"text-white bg-red-300":"bg-gray-300","px-4 py-2 mr-4 hover:bg-red-300 transition-bg-colors duration-300 ease-in-out"])},[s("span",null,d(l.floor)+"F",1)],10,P)]))),128))])):g("",!0),r.value!=null?(o(),a("div",Q,[W,s("div",X,d(i.value),1),s("div",Y,[(o(!0),a(x,null,y(r.value.rooms,l=>(o(),a("div",{key:l.id,class:"flex flex-row flex-wrap"},[typeof l!="object"&&i.value!=null?(o(),a("button",{key:0,onClick:f=>{w(n.value,r.value.floor,l)},class:"mt-4 mr-4 flex bg-gray-300 hover:bg-red-300 transition-bg-colors duration-300 ease-in-out"},[s("span",ee,d(l),1)],8,E)):g("",!0),typeof l=="object"&&j(l)&&i.value!=null?(o(),a("button",{key:1,onClick:f=>{w(n.value,r.value.floor,l.roomNumber)},class:"mt-4 mr-4 flex bg-gray-300 hover:bg-red-300 transition-bg-colors duration-300 ease-in-out"},[s("span",te,d(l.roomNumber),1)],8,le)):g("",!0)]))),128))])])):g("",!0)])]))}};export{ae as default};
