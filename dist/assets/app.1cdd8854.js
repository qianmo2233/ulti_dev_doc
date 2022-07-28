const H3={},or="modulepreload",g4={},cr="/",o1=function(e,n){return!n||n.length===0?e():Promise.all(n.map(l=>{if(l=`${cr}${l}`,l in g4)return;g4[l]=!0;const i=l.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${a}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":or,i||(d.as="script",d.crossOrigin=""),d.href=l,document.head.appendChild(d),i)return new Promise((w,_)=>{d.addEventListener("load",w),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},en={"v-8daa1a0e":()=>o1(()=>import("./index.html.5fd678b4.js"),[]).then(({data:t})=>t),"v-744497ce":()=>o1(()=>import("./index.html.7fdf9282.js"),[]).then(({data:t})=>t),"v-2d0a870d":()=>o1(()=>import("./index.html.ef3cf4a2.js"),[]).then(({data:t})=>t),"v-58b2268e":()=>o1(()=>import("./cloud.html.33d431e8.js"),[]).then(({data:t})=>t),"v-3a29a482":()=>o1(()=>import("./config.html.9af3fe1c.js"),[]).then(({data:t})=>t),"v-07eb27da":()=>o1(()=>import("./data.html.53eae33a.js"),[]).then(({data:t})=>t),"v-4cf85329":()=>o1(()=>import("./database.html.4183e881.js"),[]).then(({data:t})=>t),"v-14fe42d1":()=>o1(()=>import("./executor.html.234f4dc3.js"),[]).then(({data:t})=>t),"v-a0b068ba":()=>o1(()=>import("./game-email.html.f10244b7.js"),[]).then(({data:t})=>t),"v-2b4f175c":()=>o1(()=>import("./guide.html.9d4edea7.js"),[]).then(({data:t})=>t),"v-09d3ea6a":()=>o1(()=>import("./introduction.html.e6047454.js"),[]).then(({data:t})=>t),"v-3c7b0f72":()=>o1(()=>import("./inventory.html.145c1a40.js"),[]).then(({data:t})=>t),"v-7ffe88e0":()=>o1(()=>import("./listener.html.2c0ada28.js"),[]).then(({data:t})=>t),"v-58cdb6fc":()=>o1(()=>import("./packet.html.bbb631dc.js"),[]).then(({data:t})=>t),"v-74c49299":()=>o1(()=>import("./pro-checker.html.f228d647.js"),[]).then(({data:t})=>t),"v-1b43ba77":()=>o1(()=>import("./real-email.html.c9d75e58.js"),[]).then(({data:t})=>t),"v-d2467c20":()=>o1(()=>import("./scoreboard.html.2b6d8d18.js"),[]).then(({data:t})=>t),"v-5bfc1a06":()=>o1(()=>import("./yaml.html.f61b30e8.js"),[]).then(({data:t})=>t),"v-3706649a":()=>o1(()=>import("./404.html.ab74ef0a.js"),[]).then(({data:t})=>t),"v-01560935":()=>o1(()=>import("./index.html.d093fa6b.js"),[]).then(({data:t})=>t),"v-03d52fd3":()=>o1(()=>import("./index.html.098e1930.js"),[]).then(({data:t})=>t),"v-03d52ff2":()=>o1(()=>import("./index.html.9e2b18eb.js"),[]).then(({data:t})=>t)};function E0(t,e){const n=Object.create(null),l=t.split(",");for(let i=0;i<l.length;i++)n[l[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const sr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lr=E0(sr);function nn(t){return!!t||t===""}function B2(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const l=t[n],i=C1(l)?hr(l):B2(l);if(i)for(const a in i)e[a]=i[a]}return e}else{if(C1(t))return t;if(F1(t))return t}}const ir=/;(?![^(]*\))/g,ar=/:(.+)/;function hr(t){const e={};return t.split(ir).forEach(n=>{if(n){const l=n.split(ar);l.length>1&&(e[l[0].trim()]=l[1].trim())}}),e}function q1(t){let e="";if(C1(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const l=q1(t[n]);l&&(e+=l+" ")}else if(F1(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function dr(t,e){if(t.length!==e.length)return!1;let n=!0;for(let l=0;n&&l<t.length;l++)n=r3(t[l],e[l]);return n}function r3(t,e){if(t===e)return!0;let n=m4(t),l=m4(e);if(n||l)return n&&l?t.getTime()===e.getTime():!1;if(n=G3(t),l=G3(e),n||l)return t===e;if(n=Q(t),l=Q(e),n||l)return n&&l?dr(t,e):!1;if(n=F1(t),l=F1(e),n||l){if(!n||!l)return!1;const i=Object.keys(t).length,a=Object.keys(e).length;if(i!==a)return!1;for(const d in t){const w=t.hasOwnProperty(d),_=e.hasOwnProperty(d);if(w&&!_||!w&&_||!r3(t[d],e[d]))return!1}}return String(t)===String(e)}function I0(t,e){return t.findIndex(n=>r3(n,e))}const L1=t=>C1(t)?t:t==null?"":Q(t)||F1(t)&&(t.toString===cn||!_1(t.toString))?JSON.stringify(t,rn,2):String(t),rn=(t,e)=>e&&e.__v_isRef?rn(t,e.value):h3(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[l,i])=>(n[`${l} =>`]=i,n),{})}:g3(e)?{[`Set(${e.size})`]:[...e.values()]}:F1(e)&&!Q(e)&&!sn(e)?String(e):e,P1={},a3=[],d2=()=>{},wr=()=>!1,_r=/^on[^a-z]/,nt=t=>_r.test(t),U0=t=>t.startsWith("onUpdate:"),W1=Object.assign,O0=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pr=Object.prototype.hasOwnProperty,m1=(t,e)=>pr.call(t,e),Q=Array.isArray,h3=t=>rt(t)==="[object Map]",g3=t=>rt(t)==="[object Set]",m4=t=>rt(t)==="[object Date]",_1=t=>typeof t=="function",C1=t=>typeof t=="string",G3=t=>typeof t=="symbol",F1=t=>t!==null&&typeof t=="object",on=t=>F1(t)&&_1(t.then)&&_1(t.catch),cn=Object.prototype.toString,rt=t=>cn.call(t),ur=t=>rt(t).slice(8,-1),sn=t=>rt(t)==="[object Object]",q0=t=>C1(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,R3=E0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rt=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vr=/-(\w)/g,g2=Rt(t=>t.replace(vr,(e,n)=>n?n.toUpperCase():"")),xr=/\B([A-Z])/g,m3=Rt(t=>t.replace(xr,"-$1").toLowerCase()),Dt=Rt(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yt=Rt(t=>t?`on${Dt(t)}`:""),N3=(t,e)=>!Object.is(t,e),$t=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},K3=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let k4;const gr=()=>k4||(k4=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let t2;class mr{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&t2&&(this.parent=t2,this.index=(t2.scopes||(t2.scopes=[])).push(this)-1)}run(e){if(this.active){const n=t2;try{return t2=this,e()}finally{t2=n}}}on(){t2=this}off(){t2=this.parent}stop(e){if(this.active){let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.scopes)for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function kr(t,e=t2){e&&e.active&&e.effects.push(t)}function fr(){return t2}function $r(t){t2&&t2.cleanups.push(t)}const G0=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ln=t=>(t.w&U2)>0,an=t=>(t.n&U2)>0,Mr=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=U2},Cr=t=>{const{deps:e}=t;if(e.length){let n=0;for(let l=0;l<e.length;l++){const i=e[l];ln(i)&&!an(i)?i.delete(t):e[n++]=i,i.w&=~U2,i.n&=~U2}e.length=n}},x0=new WeakMap;let A3=0,U2=1;const g0=30;let a2;const e3=Symbol(""),m0=Symbol("");class N0{constructor(e,n=null,l){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kr(this,l)}run(){if(!this.active)return this.fn();let e=a2,n=E2;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=a2,a2=this,E2=!0,U2=1<<++A3,A3<=g0?Mr(this):f4(this),this.fn()}finally{A3<=g0&&Cr(this),U2=1<<--A3,a2=this.parent,E2=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){a2===this?this.deferStop=!0:this.active&&(f4(this),this.onStop&&this.onStop(),this.active=!1)}}function f4(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E2=!0;const hn=[];function k3(){hn.push(E2),E2=!1}function f3(){const t=hn.pop();E2=t===void 0?!0:t}function r2(t,e,n){if(E2&&a2){let l=x0.get(t);l||x0.set(t,l=new Map);let i=l.get(n);i||l.set(n,i=G0()),dn(i)}}function dn(t,e){let n=!1;A3<=g0?an(t)||(t.n|=U2,n=!ln(t)):n=!t.has(a2),n&&(t.add(a2),a2.deps.push(t))}function H2(t,e,n,l,i,a){const d=x0.get(t);if(!d)return;let w=[];if(e==="clear")w=[...d.values()];else if(n==="length"&&Q(t))d.forEach((_,p)=>{(p==="length"||p>=l)&&w.push(_)});else switch(n!==void 0&&w.push(d.get(n)),e){case"add":Q(t)?q0(n)&&w.push(d.get("length")):(w.push(d.get(e3)),h3(t)&&w.push(d.get(m0)));break;case"delete":Q(t)||(w.push(d.get(e3)),h3(t)&&w.push(d.get(m0)));break;case"set":h3(t)&&w.push(d.get(e3));break}if(w.length===1)w[0]&&k0(w[0]);else{const _=[];for(const p of w)p&&_.push(...p);k0(G0(_))}}function k0(t,e){const n=Q(t)?t:[...t];for(const l of n)l.computed&&$4(l);for(const l of n)l.computed||$4(l)}function $4(t,e){(t!==a2||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const zr=E0("__proto__,__v_isRef,__isVue"),wn=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(G3)),Br=K0(),Hr=K0(!1,!0),Lr=K0(!0),M4=yr();function yr(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const l=z1(this);for(let a=0,d=this.length;a<d;a++)r2(l,"get",a+"");const i=l[e](...n);return i===-1||i===!1?l[e](...n.map(z1)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){k3();const l=z1(this)[e].apply(this,n);return f3(),l}}),t}function K0(t=!1,e=!1){return function(l,i,a){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&a===(t?e?Gr:xn:e?vn:un).get(l))return l;const d=Q(l);if(!t&&d&&m1(M4,i))return Reflect.get(M4,i,a);const w=Reflect.get(l,i,a);return(G3(i)?wn.has(i):zr(i))||(t||r2(l,"get",i),e)?w:N1(w)?d&&q0(i)?w:w.value:F1(w)?t?ot(w):G2(w):w}}const Vr=_n(),br=_n(!0);function _n(t=!1){return function(n,l,i,a){let d=n[l];if(W3(d)&&N1(d)&&!N1(i))return!1;if(!t&&!W3(i)&&(f0(i)||(i=z1(i),d=z1(d)),!Q(n)&&N1(d)&&!N1(i)))return d.value=i,!0;const w=Q(n)&&q0(l)?Number(l)<n.length:m1(n,l),_=Reflect.set(n,l,i,a);return n===z1(a)&&(w?N3(i,d)&&H2(n,"set",l,i):H2(n,"add",l,i)),_}}function Sr(t,e){const n=m1(t,e);t[e];const l=Reflect.deleteProperty(t,e);return l&&n&&H2(t,"delete",e,void 0),l}function Ar(t,e){const n=Reflect.has(t,e);return(!G3(e)||!wn.has(e))&&r2(t,"has",e),n}function jr(t){return r2(t,"iterate",Q(t)?"length":e3),Reflect.ownKeys(t)}const pn={get:Br,set:Vr,deleteProperty:Sr,has:Ar,ownKeys:jr},Pr={get:Lr,set(t,e){return!0},deleteProperty(t,e){return!0}},Rr=W1({},pn,{get:Hr,set:br}),W0=t=>t,Tt=t=>Reflect.getPrototypeOf(t);function at(t,e,n=!1,l=!1){t=t.__v_raw;const i=z1(t),a=z1(e);n||(e!==a&&r2(i,"get",e),r2(i,"get",a));const{has:d}=Tt(i),w=l?W0:n?X0:J3;if(d.call(i,e))return w(t.get(e));if(d.call(i,a))return w(t.get(a));t!==i&&t.get(e)}function ht(t,e=!1){const n=this.__v_raw,l=z1(n),i=z1(t);return e||(t!==i&&r2(l,"has",t),r2(l,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function dt(t,e=!1){return t=t.__v_raw,!e&&r2(z1(t),"iterate",e3),Reflect.get(t,"size",t)}function C4(t){t=z1(t);const e=z1(this);return Tt(e).has.call(e,t)||(e.add(t),H2(e,"add",t,t)),this}function z4(t,e){e=z1(e);const n=z1(this),{has:l,get:i}=Tt(n);let a=l.call(n,t);a||(t=z1(t),a=l.call(n,t));const d=i.call(n,t);return n.set(t,e),a?N3(e,d)&&H2(n,"set",t,e):H2(n,"add",t,e),this}function B4(t){const e=z1(this),{has:n,get:l}=Tt(e);let i=n.call(e,t);i||(t=z1(t),i=n.call(e,t)),l&&l.call(e,t);const a=e.delete(t);return i&&H2(e,"delete",t,void 0),a}function H4(){const t=z1(this),e=t.size!==0,n=t.clear();return e&&H2(t,"clear",void 0,void 0),n}function wt(t,e){return function(l,i){const a=this,d=a.__v_raw,w=z1(d),_=e?W0:t?X0:J3;return!t&&r2(w,"iterate",e3),d.forEach((p,u)=>l.call(i,_(p),_(u),a))}}function _t(t,e,n){return function(...l){const i=this.__v_raw,a=z1(i),d=h3(a),w=t==="entries"||t===Symbol.iterator&&d,_=t==="keys"&&d,p=i[t](...l),u=n?W0:e?X0:J3;return!e&&r2(a,"iterate",_?m0:e3),{next(){const{value:g,done:v}=p.next();return v?{value:g,done:v}:{value:w?[u(g[0]),u(g[1])]:u(g),done:v}},[Symbol.iterator](){return this}}}}function b2(t){return function(...e){return t==="delete"?!1:this}}function Dr(){const t={get(a){return at(this,a)},get size(){return dt(this)},has:ht,add:C4,set:z4,delete:B4,clear:H4,forEach:wt(!1,!1)},e={get(a){return at(this,a,!1,!0)},get size(){return dt(this)},has:ht,add:C4,set:z4,delete:B4,clear:H4,forEach:wt(!1,!0)},n={get(a){return at(this,a,!0)},get size(){return dt(this,!0)},has(a){return ht.call(this,a,!0)},add:b2("add"),set:b2("set"),delete:b2("delete"),clear:b2("clear"),forEach:wt(!0,!1)},l={get(a){return at(this,a,!0,!0)},get size(){return dt(this,!0)},has(a){return ht.call(this,a,!0)},add:b2("add"),set:b2("set"),delete:b2("delete"),clear:b2("clear"),forEach:wt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=_t(a,!1,!1),n[a]=_t(a,!0,!1),e[a]=_t(a,!1,!0),l[a]=_t(a,!0,!0)}),[t,n,e,l]}const[Tr,Fr,Er,Ir]=Dr();function J0(t,e){const n=e?t?Ir:Er:t?Fr:Tr;return(l,i,a)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?l:Reflect.get(m1(n,i)&&i in l?n:l,i,a)}const Ur={get:J0(!1,!1)},Or={get:J0(!1,!0)},qr={get:J0(!0,!1)},un=new WeakMap,vn=new WeakMap,xn=new WeakMap,Gr=new WeakMap;function Nr(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kr(t){return t.__v_skip||!Object.isExtensible(t)?0:Nr(ur(t))}function G2(t){return W3(t)?t:Y0(t,!1,pn,Ur,un)}function Wr(t){return Y0(t,!1,Rr,Or,vn)}function ot(t){return Y0(t,!0,Pr,qr,xn)}function Y0(t,e,n,l,i){if(!F1(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=i.get(t);if(a)return a;const d=Kr(t);if(d===0)return t;const w=new Proxy(t,d===2?l:n);return i.set(t,w),w}function d3(t){return W3(t)?d3(t.__v_raw):!!(t&&t.__v_isReactive)}function W3(t){return!!(t&&t.__v_isReadonly)}function f0(t){return!!(t&&t.__v_isShallow)}function gn(t){return d3(t)||W3(t)}function z1(t){const e=t&&t.__v_raw;return e?z1(e):t}function mn(t){return zt(t,"__v_skip",!0),t}const J3=t=>F1(t)?G2(t):t,X0=t=>F1(t)?ot(t):t;function kn(t){E2&&a2&&(t=z1(t),dn(t.dep||(t.dep=G0())))}function fn(t,e){t=z1(t),t.dep&&k0(t.dep)}function N1(t){return!!(t&&t.__v_isRef===!0)}function X(t){return Mn(t,!1)}function $n(t){return Mn(t,!0)}function Mn(t,e){return N1(t)?t:new Jr(t,e)}class Jr{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:z1(e),this._value=n?e:J3(e)}get value(){return kn(this),this._value}set value(e){e=this.__v_isShallow?e:z1(e),N3(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:J3(e),fn(this))}}function G1(t){return N1(t)?t.value:t}const Yr={get:(t,e,n)=>G1(Reflect.get(t,e,n)),set:(t,e,n,l)=>{const i=t[e];return N1(i)&&!N1(n)?(i.value=n,!0):Reflect.set(t,e,n,l)}};function Cn(t){return d3(t)?t:new Proxy(t,Yr)}function $3(t){const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=Qr(t,n);return e}class Xr{constructor(e,n,l){this._object=e,this._key=n,this._defaultValue=l,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Qr(t,e,n){const l=t[e];return N1(l)?l:new Xr(t,e,n)}class Zr{constructor(e,n,l,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new N0(e,()=>{this._dirty||(this._dirty=!0,fn(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=l}get value(){const e=z1(this);return kn(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function to(t,e,n=!1){let l,i;const a=_1(t);return a?(l=t,i=d2):(l=t.get,i=t.set),new Zr(l,i,a||!i,n)}function I2(t,e,n,l){let i;try{i=l?t(...l):t()}catch(a){ct(a,e,n)}return i}function s2(t,e,n,l){if(_1(t)){const a=I2(t,e,n,l);return a&&on(a)&&a.catch(d=>{ct(d,e,n)}),a}const i=[];for(let a=0;a<t.length;a++)i.push(s2(t[a],e,n,l));return i}function ct(t,e,n,l=!0){const i=e?e.vnode:null;if(e){let a=e.parent;const d=e.proxy,w=n;for(;a;){const p=a.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,d,w)===!1)return}a=a.parent}const _=e.appContext.config.errorHandler;if(_){I2(_,null,10,[t,d,w]);return}}eo(t,n,i,l)}function eo(t,e,n,l=!0){console.error(t)}let Bt=!1,$0=!1;const e2=[];let $2=0;const D3=[];let j3=null,s3=0;const T3=[];let R2=null,l3=0;const zn=Promise.resolve();let Q0=null,M0=null;function Z0(t){const e=Q0||zn;return t?e.then(this?t.bind(this):t):e}function no(t){let e=$2+1,n=e2.length;for(;e<n;){const l=e+n>>>1;Y3(e2[l])<t?e=l+1:n=l}return e}function t4(t){(!e2.length||!e2.includes(t,Bt&&t.allowRecurse?$2+1:$2))&&t!==M0&&(t.id==null?e2.push(t):e2.splice(no(t.id),0,t),Bn())}function Bn(){!Bt&&!$0&&($0=!0,Q0=zn.then(Ln))}function ro(t){const e=e2.indexOf(t);e>$2&&e2.splice(e,1)}function Hn(t,e,n,l){Q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?l+1:l))&&n.push(t),Bn()}function oo(t){Hn(t,j3,D3,s3)}function co(t){Hn(t,R2,T3,l3)}function Ft(t,e=null){if(D3.length){for(M0=e,j3=[...new Set(D3)],D3.length=0,s3=0;s3<j3.length;s3++)j3[s3]();j3=null,s3=0,M0=null,Ft(t,e)}}function Ht(t){if(Ft(),T3.length){const e=[...new Set(T3)];if(T3.length=0,R2){R2.push(...e);return}for(R2=e,R2.sort((n,l)=>Y3(n)-Y3(l)),l3=0;l3<R2.length;l3++)R2[l3]();R2=null,l3=0}}const Y3=t=>t.id==null?1/0:t.id;function Ln(t){$0=!1,Bt=!0,Ft(t),e2.sort((n,l)=>Y3(n)-Y3(l));const e=d2;try{for($2=0;$2<e2.length;$2++){const n=e2[$2];n&&n.active!==!1&&I2(n,null,14)}}finally{$2=0,e2.length=0,Ht(),Bt=!1,Q0=null,(e2.length||D3.length||T3.length)&&Ln(t)}}function so(t,e,...n){if(t.isUnmounted)return;const l=t.vnode.props||P1;let i=n;const a=e.startsWith("update:"),d=a&&e.slice(7);if(d&&d in l){const u=`${d==="modelValue"?"model":d}Modifiers`,{number:g,trim:v}=l[u]||P1;v&&(i=n.map(x=>x.trim())),g&&(i=n.map(K3))}let w,_=l[w=Yt(e)]||l[w=Yt(g2(e))];!_&&a&&(_=l[w=Yt(m3(e))]),_&&s2(_,t,6,i);const p=l[w+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[w])return;t.emitted[w]=!0,s2(p,t,6,i)}}function yn(t,e,n=!1){const l=e.emitsCache,i=l.get(t);if(i!==void 0)return i;const a=t.emits;let d={},w=!1;if(!_1(t)){const _=p=>{const u=yn(p,e,!0);u&&(w=!0,W1(d,u))};!n&&e.mixins.length&&e.mixins.forEach(_),t.extends&&_(t.extends),t.mixins&&t.mixins.forEach(_)}return!a&&!w?(l.set(t,null),null):(Q(a)?a.forEach(_=>d[_]=null):W1(d,a),l.set(t,d),d)}function Et(t,e){return!t||!nt(e)?!1:(e=e.slice(2).replace(/Once$/,""),m1(t,e[0].toLowerCase()+e.slice(1))||m1(t,m3(e))||m1(t,e))}let J1=null,Vn=null;function Lt(t){const e=J1;return J1=t,Vn=t&&t.type.__scopeId||null,e}function lo(t,e=J1,n){if(!e||t._n)return t;const l=(...i)=>{l._d&&T4(-1);const a=Lt(e),d=t(...i);return Lt(a),l._d&&T4(1),d};return l._n=!0,l._c=!0,l._d=!0,l}function Xt(t){const{type:e,vnode:n,proxy:l,withProxy:i,props:a,propsOptions:[d],slots:w,attrs:_,emit:p,render:u,renderCache:g,data:v,setupState:x,ctx:k,inheritAttrs:C}=t;let B,f;const M=Lt(t);try{if(n.shapeFlag&4){const H=i||l;B=i2(u.call(H,H,g,a,x,v,k)),f=_}else{const H=e;B=i2(H.length>1?H(a,{attrs:_,slots:w,emit:p}):H(a,null)),f=e.props?_:io(_)}}catch(H){E3.length=0,ct(H,t,1),B=x1(n2)}let y=B;if(f&&C!==!1){const H=Object.keys(f),{shapeFlag:A}=y;H.length&&A&7&&(d&&H.some(U0)&&(f=ao(f,d)),y=O2(y,f))}return n.dirs&&(y=O2(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),B=y,Lt(M),B}const io=t=>{let e;for(const n in t)(n==="class"||n==="style"||nt(n))&&((e||(e={}))[n]=t[n]);return e},ao=(t,e)=>{const n={};for(const l in t)(!U0(l)||!(l.slice(9)in e))&&(n[l]=t[l]);return n};function ho(t,e,n){const{props:l,children:i,component:a}=t,{props:d,children:w,patchFlag:_}=e,p=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&_>=0){if(_&1024)return!0;if(_&16)return l?L4(l,d,p):!!d;if(_&8){const u=e.dynamicProps;for(let g=0;g<u.length;g++){const v=u[g];if(d[v]!==l[v]&&!Et(p,v))return!0}}}else return(i||w)&&(!w||!w.$stable)?!0:l===d?!1:l?d?L4(l,d,p):!0:!!d;return!1}function L4(t,e,n){const l=Object.keys(e);if(l.length!==Object.keys(t).length)return!0;for(let i=0;i<l.length;i++){const a=l[i];if(e[a]!==t[a]&&!Et(n,a))return!0}return!1}function wo({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _o=t=>t.__isSuspense;function bn(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):co(t)}function w2(t,e){if(U1){let n=U1.provides;const l=U1.parent&&U1.parent.provides;l===n&&(n=U1.provides=Object.create(l)),n[t]=e}}function T1(t,e,n=!1){const l=U1||J1;if(l){const i=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&_1(e)?e.call(l.proxy):e}}const y4={};function K1(t,e,n){return Sn(t,e,n)}function Sn(t,e,{immediate:n,deep:l,flush:i,onTrack:a,onTrigger:d}=P1){const w=U1;let _,p=!1,u=!1;if(N1(t)?(_=()=>t.value,p=f0(t)):d3(t)?(_=()=>t,l=!0):Q(t)?(u=!0,p=t.some(f=>d3(f)||f0(f)),_=()=>t.map(f=>{if(N1(f))return f.value;if(d3(f))return t3(f);if(_1(f))return I2(f,w,2)})):_1(t)?e?_=()=>I2(t,w,2):_=()=>{if(!(w&&w.isUnmounted))return g&&g(),s2(t,w,3,[v])}:_=d2,e&&l){const f=_;_=()=>t3(f())}let g,v=f=>{g=B.onStop=()=>{I2(f,w,4)}};if(p3)return v=d2,e?n&&s2(e,w,3,[_(),u?[]:void 0,v]):_(),d2;let x=u?[]:y4;const k=()=>{if(!!B.active)if(e){const f=B.run();(l||p||(u?f.some((M,y)=>N3(M,x[y])):N3(f,x)))&&(g&&g(),s2(e,w,3,[f,x===y4?void 0:x,v]),x=f)}else B.run()};k.allowRecurse=!!e;let C;i==="sync"?C=k:i==="post"?C=()=>Q1(k,w&&w.suspense):C=()=>oo(k);const B=new N0(_,C);return e?n?k():x=B.run():i==="post"?Q1(B.run.bind(B),w&&w.suspense):B.run(),()=>{B.stop(),w&&w.scope&&O0(w.scope.effects,B)}}function po(t,e,n){const l=this.proxy,i=C1(t)?t.includes(".")?An(l,t):()=>l[t]:t.bind(l,l);let a;_1(e)?a=e:(a=e.handler,n=e);const d=U1;_3(this);const w=Sn(i,a.bind(l),n);return d?_3(d):n3(),w}function An(t,e){const n=e.split(".");return()=>{let l=t;for(let i=0;i<n.length&&l;i++)l=l[n[i]];return l}}function t3(t,e){if(!F1(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),N1(t))t3(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)t3(t[n],e);else if(g3(t)||h3(t))t.forEach(n=>{t3(n,e)});else if(sn(t))for(const n in t)t3(t[n],e);return t}function uo(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return X1(()=>{t.isMounted=!0}),lt(()=>{t.isUnmounting=!0}),t}const o2=[Function,Array],vo={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:o2,onEnter:o2,onAfterEnter:o2,onEnterCancelled:o2,onBeforeLeave:o2,onLeave:o2,onAfterLeave:o2,onLeaveCancelled:o2,onBeforeAppear:o2,onAppear:o2,onAfterAppear:o2,onAppearCancelled:o2},setup(t,{slots:e}){const n=Qo(),l=uo();let i;return()=>{const a=e.default&&Rn(e.default(),!0);if(!a||!a.length)return;let d=a[0];if(a.length>1){for(const C of a)if(C.type!==n2){d=C;break}}const w=z1(t),{mode:_}=w;if(l.isLeaving)return Qt(d);const p=V4(d);if(!p)return Qt(d);const u=C0(p,w,l,n);z0(p,u);const g=n.subTree,v=g&&V4(g);let x=!1;const{getTransitionKey:k}=p.type;if(k){const C=k();i===void 0?i=C:C!==i&&(i=C,x=!0)}if(v&&v.type!==n2&&(!Q2(p,v)||x)){const C=C0(v,w,l,n);if(z0(v,C),_==="out-in")return l.isLeaving=!0,C.afterLeave=()=>{l.isLeaving=!1,n.update()},Qt(d);_==="in-out"&&p.type!==n2&&(C.delayLeave=(B,f,M)=>{const y=Pn(l,v);y[String(v.key)]=v,B._leaveCb=()=>{f(),B._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return d}}},jn=vo;function Pn(t,e){const{leavingVNodes:n}=t;let l=n.get(e.type);return l||(l=Object.create(null),n.set(e.type,l)),l}function C0(t,e,n,l){const{appear:i,mode:a,persisted:d=!1,onBeforeEnter:w,onEnter:_,onAfterEnter:p,onEnterCancelled:u,onBeforeLeave:g,onLeave:v,onAfterLeave:x,onLeaveCancelled:k,onBeforeAppear:C,onAppear:B,onAfterAppear:f,onAppearCancelled:M}=e,y=String(t.key),H=Pn(n,t),A=(R,J)=>{R&&s2(R,l,9,J)},I=(R,J)=>{const Z=J[1];A(R,J),Q(R)?R.every(a1=>a1.length<=1)&&Z():R.length<=1&&Z()},K={mode:a,persisted:d,beforeEnter(R){let J=w;if(!n.isMounted)if(i)J=C||w;else return;R._leaveCb&&R._leaveCb(!0);const Z=H[y];Z&&Q2(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),A(J,[R])},enter(R){let J=_,Z=p,a1=u;if(!n.isMounted)if(i)J=B||_,Z=f||p,a1=M||u;else return;let T=!1;const h1=R._enterCb=N=>{T||(T=!0,N?A(a1,[R]):A(Z,[R]),K.delayedLeave&&K.delayedLeave(),R._enterCb=void 0)};J?I(J,[R,h1]):h1()},leave(R,J){const Z=String(t.key);if(R._enterCb&&R._enterCb(!0),n.isUnmounting)return J();A(g,[R]);let a1=!1;const T=R._leaveCb=h1=>{a1||(a1=!0,J(),h1?A(k,[R]):A(x,[R]),R._leaveCb=void 0,H[Z]===t&&delete H[Z])};H[Z]=t,v?I(v,[R,T]):T()},clone(R){return C0(R,e,n,l)}};return K}function Qt(t){if(st(t))return t=O2(t),t.children=null,t}function V4(t){return st(t)?t.children?t.children[0]:void 0:t}function z0(t,e){t.shapeFlag&6&&t.component?z0(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rn(t,e=!1,n){let l=[],i=0;for(let a=0;a<t.length;a++){let d=t[a];const w=n==null?d.key:String(n)+String(d.key!=null?d.key:a);d.type===V1?(d.patchFlag&128&&i++,l=l.concat(Rn(d.children,e,w))):(e||d.type!==n2)&&l.push(w!=null?O2(d,{key:w}):d)}if(i>1)for(let a=0;a<l.length;a++)l[a].patchFlag=-2;return l}function s(t){return _1(t)?{setup:t,name:t.name}:t}const w3=t=>!!t.type.__asyncLoader;function A1(t){_1(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:l,delay:i=200,timeout:a,suspensible:d=!0,onError:w}=t;let _=null,p,u=0;const g=()=>(u++,_=null,v()),v=()=>{let x;return _||(x=_=e().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),w)return new Promise((C,B)=>{w(k,()=>C(g()),()=>B(k),u+1)});throw k}).then(k=>x!==_&&_?_:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),p=k,k)))};return s({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return p},setup(){const x=U1;if(p)return()=>Zt(p,x);const k=M=>{_=null,ct(M,x,13,!l)};if(d&&x.suspense||p3)return v().then(M=>()=>Zt(M,x)).catch(M=>(k(M),()=>l?x1(l,{error:M}):null));const C=X(!1),B=X(),f=X(!!i);return i&&setTimeout(()=>{f.value=!1},i),a!=null&&setTimeout(()=>{if(!C.value&&!B.value){const M=new Error(`Async component timed out after ${a}ms.`);k(M),B.value=M}},a),v().then(()=>{C.value=!0,x.parent&&st(x.parent.vnode)&&t4(x.parent.update)}).catch(M=>{k(M),B.value=M}),()=>{if(C.value&&p)return Zt(p,x);if(B.value&&l)return x1(l,{error:B.value});if(n&&!f.value)return x1(n)}}})}function Zt(t,{vnode:{ref:e,props:n,children:l,shapeFlag:i},parent:a}){const d=x1(t,n,l);return d.ref=e,d}const st=t=>t.type.__isKeepAlive;function xo(t,e){Dn(t,"a",e)}function go(t,e){Dn(t,"da",e)}function Dn(t,e,n=U1){const l=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(It(e,l,n),n){let i=n.parent;for(;i&&i.parent;)st(i.parent.vnode)&&mo(l,e,n,i),i=i.parent}}function mo(t,e,n,l){const i=It(e,t,l,!0);e4(()=>{O0(l[e],i)},n)}function It(t,e,n=U1,l=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...d)=>{if(n.isUnmounted)return;k3(),_3(n);const w=s2(e,n,t,d);return n3(),f3(),w});return l?i.unshift(a):i.push(a),a}}const V2=t=>(e,n=U1)=>(!p3||t==="sp")&&It(t,e,n),ko=V2("bm"),X1=V2("m"),fo=V2("bu"),$o=V2("u"),lt=V2("bum"),e4=V2("um"),Mo=V2("sp"),Co=V2("rtg"),zo=V2("rtc");function Bo(t,e=U1){It("ec",t,e)}function pt(t,e){const n=J1;if(n===null)return t;const l=qt(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[d,w,_,p=P1]=e[a];_1(d)&&(d={mounted:d,updated:d}),d.deep&&t3(w),i.push({dir:d,instance:l,value:w,oldValue:void 0,arg:_,modifiers:p})}return t}function x2(t,e,n,l){const i=t.dirs,a=e&&e.dirs;for(let d=0;d<i.length;d++){const w=i[d];a&&(w.oldValue=a[d].value);let _=w.dir[l];_&&(k3(),s2(_,n,8,[t.el,w,t,e]),f3())}}const n4="components";function E1(t,e){return En(n4,t,!0,e)||t}const Tn=Symbol();function Fn(t){return C1(t)?En(n4,t,!1)||t:t||Tn}function En(t,e,n=!0,l=!1){const i=J1||U1;if(i){const a=i.type;if(t===n4){const w=rc(a,!1);if(w&&(w===e||w===g2(e)||w===Dt(g2(e))))return a}const d=b4(i[t]||a[t],e)||b4(i.appContext[t],e);return!d&&l?a:d}}function b4(t,e){return t&&(t[e]||t[g2(e)]||t[Dt(g2(e))])}function z2(t,e,n,l){let i;const a=n&&n[l];if(Q(t)||C1(t)){i=new Array(t.length);for(let d=0,w=t.length;d<w;d++)i[d]=e(t[d],d,void 0,a&&a[d])}else if(typeof t=="number"){i=new Array(t);for(let d=0;d<t;d++)i[d]=e(d+1,d,void 0,a&&a[d])}else if(F1(t))if(t[Symbol.iterator])i=Array.from(t,(d,w)=>e(d,w,void 0,a&&a[w]));else{const d=Object.keys(t);i=new Array(d.length);for(let w=0,_=d.length;w<_;w++){const p=d[w];i[w]=e(t[p],p,w,a&&a[w])}}else i=[];return n&&(n[l]=i),i}function Ut(t,e,n={},l,i){if(J1.isCE||J1.parent&&w3(J1.parent)&&J1.parent.isCE)return x1("slot",e==="default"?null:{name:e},l&&l());let a=t[e];a&&a._c&&(a._d=!1),o();const d=a&&In(a(n)),w=m2(V1,{key:n.key||`_${e}`},d||(l?l():[]),d&&t._===1?64:-2);return!i&&w.scopeId&&(w.slotScopeIds=[w.scopeId+"-s"]),a&&a._c&&(a._d=!0),w}function In(t){return t.some(e=>St(e)?!(e.type===n2||e.type===V1&&!In(e.children)):!0)?t:null}const B0=t=>t?Zn(t)?qt(t)||t.proxy:B0(t.parent):null,yt=W1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>B0(t.parent),$root:t=>B0(t.root),$emit:t=>t.emit,$options:t=>On(t),$forceUpdate:t=>t.f||(t.f=()=>t4(t.update)),$nextTick:t=>t.n||(t.n=Z0.bind(t.proxy)),$watch:t=>po.bind(t)}),Ho={get({_:t},e){const{ctx:n,setupState:l,data:i,props:a,accessCache:d,type:w,appContext:_}=t;let p;if(e[0]!=="$"){const x=d[e];if(x!==void 0)switch(x){case 1:return l[e];case 2:return i[e];case 4:return n[e];case 3:return a[e]}else{if(l!==P1&&m1(l,e))return d[e]=1,l[e];if(i!==P1&&m1(i,e))return d[e]=2,i[e];if((p=t.propsOptions[0])&&m1(p,e))return d[e]=3,a[e];if(n!==P1&&m1(n,e))return d[e]=4,n[e];H0&&(d[e]=0)}}const u=yt[e];let g,v;if(u)return e==="$attrs"&&r2(t,"get",e),u(t);if((g=w.__cssModules)&&(g=g[e]))return g;if(n!==P1&&m1(n,e))return d[e]=4,n[e];if(v=_.config.globalProperties,m1(v,e))return v[e]},set({_:t},e,n){const{data:l,setupState:i,ctx:a}=t;return i!==P1&&m1(i,e)?(i[e]=n,!0):l!==P1&&m1(l,e)?(l[e]=n,!0):m1(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:l,appContext:i,propsOptions:a}},d){let w;return!!n[d]||t!==P1&&m1(t,d)||e!==P1&&m1(e,d)||(w=a[0])&&m1(w,d)||m1(l,d)||m1(yt,d)||m1(i.config.globalProperties,d)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:m1(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let H0=!0;function Lo(t){const e=On(t),n=t.proxy,l=t.ctx;H0=!1,e.beforeCreate&&S4(e.beforeCreate,t,"bc");const{data:i,computed:a,methods:d,watch:w,provide:_,inject:p,created:u,beforeMount:g,mounted:v,beforeUpdate:x,updated:k,activated:C,deactivated:B,beforeDestroy:f,beforeUnmount:M,destroyed:y,unmounted:H,render:A,renderTracked:I,renderTriggered:K,errorCaptured:R,serverPrefetch:J,expose:Z,inheritAttrs:a1,components:T,directives:h1,filters:N}=e;if(p&&yo(p,l,null,t.appContext.config.unwrapInjectedRef),d)for(const B1 in d){const H1=d[B1];_1(H1)&&(l[B1]=H1.bind(n))}if(i){const B1=i.call(n,n);F1(B1)&&(t.data=G2(B1))}if(H0=!0,a)for(const B1 in a){const H1=a[B1],q=_1(H1)?H1.bind(n,n):_1(H1.get)?H1.get.bind(n,n):d2,c1=!_1(H1)&&_1(H1.set)?H1.set.bind(n):d2,l1=t1({get:q,set:c1});Object.defineProperty(l,B1,{enumerable:!0,configurable:!0,get:()=>l1.value,set:y1=>l1.value=y1})}if(w)for(const B1 in w)Un(w[B1],l,n,B1);if(_){const B1=_1(_)?_.call(n):_;Reflect.ownKeys(B1).forEach(H1=>{w2(H1,B1[H1])})}u&&S4(u,t,"c");function g1(B1,H1){Q(H1)?H1.forEach(q=>B1(q.bind(n))):H1&&B1(H1.bind(n))}if(g1(ko,g),g1(X1,v),g1(fo,x),g1($o,k),g1(xo,C),g1(go,B),g1(Bo,R),g1(zo,I),g1(Co,K),g1(lt,M),g1(e4,H),g1(Mo,J),Q(Z))if(Z.length){const B1=t.exposed||(t.exposed={});Z.forEach(H1=>{Object.defineProperty(B1,H1,{get:()=>n[H1],set:q=>n[H1]=q})})}else t.exposed||(t.exposed={});A&&t.render===d2&&(t.render=A),a1!=null&&(t.inheritAttrs=a1),T&&(t.components=T),h1&&(t.directives=h1)}function yo(t,e,n=d2,l=!1){Q(t)&&(t=L0(t));for(const i in t){const a=t[i];let d;F1(a)?"default"in a?d=T1(a.from||i,a.default,!0):d=T1(a.from||i):d=T1(a),N1(d)&&l?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>d.value,set:w=>d.value=w}):e[i]=d}}function S4(t,e,n){s2(Q(t)?t.map(l=>l.bind(e.proxy)):t.bind(e.proxy),e,n)}function Un(t,e,n,l){const i=l.includes(".")?An(n,l):()=>n[l];if(C1(t)){const a=e[t];_1(a)&&K1(i,a)}else if(_1(t))K1(i,t.bind(n));else if(F1(t))if(Q(t))t.forEach(a=>Un(a,e,n,l));else{const a=_1(t.handler)?t.handler.bind(n):e[t.handler];_1(a)&&K1(i,a,t)}}function On(t){const e=t.type,{mixins:n,extends:l}=e,{mixins:i,optionsCache:a,config:{optionMergeStrategies:d}}=t.appContext,w=a.get(e);let _;return w?_=w:!i.length&&!n&&!l?_=e:(_={},i.length&&i.forEach(p=>Vt(_,p,d,!0)),Vt(_,e,d)),a.set(e,_),_}function Vt(t,e,n,l=!1){const{mixins:i,extends:a}=e;a&&Vt(t,a,n,!0),i&&i.forEach(d=>Vt(t,d,n,!0));for(const d in e)if(!(l&&d==="expose")){const w=Vo[d]||n&&n[d];t[d]=w?w(t[d],e[d]):e[d]}return t}const Vo={data:A4,props:Y2,emits:Y2,methods:Y2,computed:Y2,beforeCreate:Y1,created:Y1,beforeMount:Y1,mounted:Y1,beforeUpdate:Y1,updated:Y1,beforeDestroy:Y1,beforeUnmount:Y1,destroyed:Y1,unmounted:Y1,activated:Y1,deactivated:Y1,errorCaptured:Y1,serverPrefetch:Y1,components:Y2,directives:Y2,watch:So,provide:A4,inject:bo};function A4(t,e){return e?t?function(){return W1(_1(t)?t.call(this,this):t,_1(e)?e.call(this,this):e)}:e:t}function bo(t,e){return Y2(L0(t),L0(e))}function L0(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Y1(t,e){return t?[...new Set([].concat(t,e))]:e}function Y2(t,e){return t?W1(W1(Object.create(null),t),e):e}function So(t,e){if(!t)return e;if(!e)return t;const n=W1(Object.create(null),t);for(const l in e)n[l]=Y1(t[l],e[l]);return n}function Ao(t,e,n,l=!1){const i={},a={};zt(a,Ot,1),t.propsDefaults=Object.create(null),qn(t,e,i,a);for(const d in t.propsOptions[0])d in i||(i[d]=void 0);n?t.props=l?i:Wr(i):t.type.props?t.props=i:t.props=a,t.attrs=a}function jo(t,e,n,l){const{props:i,attrs:a,vnode:{patchFlag:d}}=t,w=z1(i),[_]=t.propsOptions;let p=!1;if((l||d>0)&&!(d&16)){if(d&8){const u=t.vnode.dynamicProps;for(let g=0;g<u.length;g++){let v=u[g];if(Et(t.emitsOptions,v))continue;const x=e[v];if(_)if(m1(a,v))x!==a[v]&&(a[v]=x,p=!0);else{const k=g2(v);i[k]=y0(_,w,k,x,t,!1)}else x!==a[v]&&(a[v]=x,p=!0)}}}else{qn(t,e,i,a)&&(p=!0);let u;for(const g in w)(!e||!m1(e,g)&&((u=m3(g))===g||!m1(e,u)))&&(_?n&&(n[g]!==void 0||n[u]!==void 0)&&(i[g]=y0(_,w,g,void 0,t,!0)):delete i[g]);if(a!==w)for(const g in a)(!e||!m1(e,g)&&!0)&&(delete a[g],p=!0)}p&&H2(t,"set","$attrs")}function qn(t,e,n,l){const[i,a]=t.propsOptions;let d=!1,w;if(e)for(let _ in e){if(R3(_))continue;const p=e[_];let u;i&&m1(i,u=g2(_))?!a||!a.includes(u)?n[u]=p:(w||(w={}))[u]=p:Et(t.emitsOptions,_)||(!(_ in l)||p!==l[_])&&(l[_]=p,d=!0)}if(a){const _=z1(n),p=w||P1;for(let u=0;u<a.length;u++){const g=a[u];n[g]=y0(i,_,g,p[g],t,!m1(p,g))}}return d}function y0(t,e,n,l,i,a){const d=t[n];if(d!=null){const w=m1(d,"default");if(w&&l===void 0){const _=d.default;if(d.type!==Function&&_1(_)){const{propsDefaults:p}=i;n in p?l=p[n]:(_3(i),l=p[n]=_.call(null,e),n3())}else l=_}d[0]&&(a&&!w?l=!1:d[1]&&(l===""||l===m3(n))&&(l=!0))}return l}function Gn(t,e,n=!1){const l=e.propsCache,i=l.get(t);if(i)return i;const a=t.props,d={},w=[];let _=!1;if(!_1(t)){const u=g=>{_=!0;const[v,x]=Gn(g,e,!0);W1(d,v),x&&w.push(...x)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!a&&!_)return l.set(t,a3),a3;if(Q(a))for(let u=0;u<a.length;u++){const g=g2(a[u]);j4(g)&&(d[g]=P1)}else if(a)for(const u in a){const g=g2(u);if(j4(g)){const v=a[u],x=d[g]=Q(v)||_1(v)?{type:v}:v;if(x){const k=D4(Boolean,x.type),C=D4(String,x.type);x[0]=k>-1,x[1]=C<0||k<C,(k>-1||m1(x,"default"))&&w.push(g)}}}const p=[d,w];return l.set(t,p),p}function j4(t){return t[0]!=="$"}function P4(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function R4(t,e){return P4(t)===P4(e)}function D4(t,e){return Q(e)?e.findIndex(n=>R4(n,t)):_1(e)&&R4(e,t)?0:-1}const Nn=t=>t[0]==="_"||t==="$stable",r4=t=>Q(t)?t.map(i2):[i2(t)],Po=(t,e,n)=>{if(e._n)return e;const l=lo((...i)=>r4(e(...i)),n);return l._c=!1,l},Kn=(t,e,n)=>{const l=t._ctx;for(const i in t){if(Nn(i))continue;const a=t[i];if(_1(a))e[i]=Po(i,a,l);else if(a!=null){const d=r4(a);e[i]=()=>d}}},Wn=(t,e)=>{const n=r4(e);t.slots.default=()=>n},Ro=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=z1(e),zt(e,"_",n)):Kn(e,t.slots={})}else t.slots={},e&&Wn(t,e);zt(t.slots,Ot,1)},Do=(t,e,n)=>{const{vnode:l,slots:i}=t;let a=!0,d=P1;if(l.shapeFlag&32){const w=e._;w?n&&w===1?a=!1:(W1(i,e),!n&&w===1&&delete i._):(a=!e.$stable,Kn(e,i)),d=e}else e&&(Wn(t,e),d={default:1});if(a)for(const w in i)!Nn(w)&&!(w in d)&&delete i[w]};function Jn(){return{app:null,config:{isNativeTag:wr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let To=0;function Fo(t,e){return function(l,i=null){_1(l)||(l=Object.assign({},l)),i!=null&&!F1(i)&&(i=null);const a=Jn(),d=new Set;let w=!1;const _=a.app={_uid:To++,_component:l,_props:i,_container:null,_context:a,_instance:null,version:cc,get config(){return a.config},set config(p){},use(p,...u){return d.has(p)||(p&&_1(p.install)?(d.add(p),p.install(_,...u)):_1(p)&&(d.add(p),p(_,...u))),_},mixin(p){return a.mixins.includes(p)||a.mixins.push(p),_},component(p,u){return u?(a.components[p]=u,_):a.components[p]},directive(p,u){return u?(a.directives[p]=u,_):a.directives[p]},mount(p,u,g){if(!w){const v=x1(l,i);return v.appContext=a,u&&e?e(v,p):t(v,p,g),w=!0,_._container=p,p.__vue_app__=_,qt(v.component)||v.component.proxy}},unmount(){w&&(t(null,_._container),delete _._container.__vue_app__)},provide(p,u){return a.provides[p]=u,_}};return _}}function bt(t,e,n,l,i=!1){if(Q(t)){t.forEach((v,x)=>bt(v,e&&(Q(e)?e[x]:e),n,l,i));return}if(w3(l)&&!i)return;const a=l.shapeFlag&4?qt(l.component)||l.component.proxy:l.el,d=i?null:a,{i:w,r:_}=t,p=e&&e.r,u=w.refs===P1?w.refs={}:w.refs,g=w.setupState;if(p!=null&&p!==_&&(C1(p)?(u[p]=null,m1(g,p)&&(g[p]=null)):N1(p)&&(p.value=null)),_1(_))I2(_,w,12,[d,u]);else{const v=C1(_),x=N1(_);if(v||x){const k=()=>{if(t.f){const C=v?u[_]:_.value;i?Q(C)&&O0(C,a):Q(C)?C.includes(a)||C.push(a):v?(u[_]=[a],m1(g,_)&&(g[_]=u[_])):(_.value=[a],t.k&&(u[t.k]=_.value))}else v?(u[_]=d,m1(g,_)&&(g[_]=d)):x&&(_.value=d,t.k&&(u[t.k]=d))};d?(k.id=-1,Q1(k,n)):k()}}}let S2=!1;const ut=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",vt=t=>t.nodeType===8;function Eo(t){const{mt:e,p:n,o:{patchProp:l,createText:i,nextSibling:a,parentNode:d,remove:w,insert:_,createComment:p}}=t,u=(f,M)=>{if(!M.hasChildNodes()){n(null,f,M),Ht(),M._vnode=f;return}S2=!1,g(M.firstChild,f,null,null,null),Ht(),M._vnode=f,S2&&console.error("Hydration completed but contains mismatches.")},g=(f,M,y,H,A,I=!1)=>{const K=vt(f)&&f.data==="[",R=()=>C(f,M,y,H,A,K),{type:J,ref:Z,shapeFlag:a1,patchFlag:T}=M,h1=f.nodeType;M.el=f,T===-2&&(I=!1,M.dynamicChildren=null);let N=null;switch(J){case X3:h1!==3?M.children===""?(_(M.el=i(""),d(f),f),N=f):N=R():(f.data!==M.children&&(S2=!0,f.data=M.children),N=a(f));break;case n2:h1!==8||K?N=R():N=a(f);break;case F3:if(h1!==1&&h1!==3)N=R();else{N=f;const I1=!M.children.length;for(let g1=0;g1<M.staticCount;g1++)I1&&(M.children+=N.nodeType===1?N.outerHTML:N.data),g1===M.staticCount-1&&(M.anchor=N),N=a(N);return N}break;case V1:K?N=k(f,M,y,H,A,I):N=R();break;default:if(a1&1)h1!==1||M.type.toLowerCase()!==f.tagName.toLowerCase()?N=R():N=v(f,M,y,H,A,I);else if(a1&6){M.slotScopeIds=A;const I1=d(f);if(e(M,I1,null,y,H,ut(I1),I),N=K?B(f):a(f),N&&vt(N)&&N.data==="teleport end"&&(N=a(N)),w3(M)){let g1;K?(g1=x1(V1),g1.anchor=N?N.previousSibling:I1.lastChild):g1=f.nodeType===3?_2(""):x1("div"),g1.el=f,M.component.subTree=g1}}else a1&64?h1!==8?N=R():N=M.type.hydrate(f,M,y,H,A,I,t,x):a1&128&&(N=M.type.hydrate(f,M,y,H,ut(d(f)),A,I,t,g))}return Z!=null&&bt(Z,null,H,M),N},v=(f,M,y,H,A,I)=>{I=I||!!M.dynamicChildren;const{type:K,props:R,patchFlag:J,shapeFlag:Z,dirs:a1}=M,T=K==="input"&&a1||K==="option";if(T||J!==-1){if(a1&&x2(M,null,y,"created"),R)if(T||!I||J&48)for(const N in R)(T&&N.endsWith("value")||nt(N)&&!R3(N))&&l(f,N,null,R[N],!1,void 0,y);else R.onClick&&l(f,"onClick",null,R.onClick,!1,void 0,y);let h1;if((h1=R&&R.onVnodeBeforeMount)&&c2(h1,y,M),a1&&x2(M,null,y,"beforeMount"),((h1=R&&R.onVnodeMounted)||a1)&&bn(()=>{h1&&c2(h1,y,M),a1&&x2(M,null,y,"mounted")},H),Z&16&&!(R&&(R.innerHTML||R.textContent))){let N=x(f.firstChild,M,f,y,H,A,I);for(;N;){S2=!0;const I1=N;N=N.nextSibling,w(I1)}}else Z&8&&f.textContent!==M.children&&(S2=!0,f.textContent=M.children)}return f.nextSibling},x=(f,M,y,H,A,I,K)=>{K=K||!!M.dynamicChildren;const R=M.children,J=R.length;for(let Z=0;Z<J;Z++){const a1=K?R[Z]:R[Z]=i2(R[Z]);if(f)f=g(f,a1,H,A,I,K);else{if(a1.type===X3&&!a1.children)continue;S2=!0,n(null,a1,y,null,H,A,ut(y),I)}}return f},k=(f,M,y,H,A,I)=>{const{slotScopeIds:K}=M;K&&(A=A?A.concat(K):K);const R=d(f),J=x(a(f),M,R,y,H,A,I);return J&&vt(J)&&J.data==="]"?a(M.anchor=J):(S2=!0,_(M.anchor=p("]"),R,J),J)},C=(f,M,y,H,A,I)=>{if(S2=!0,M.el=null,I){const J=B(f);for(;;){const Z=a(f);if(Z&&Z!==J)w(Z);else break}}const K=a(f),R=d(f);return w(f),n(null,M,R,K,y,H,ut(R),A),K},B=f=>{let M=0;for(;f;)if(f=a(f),f&&vt(f)&&(f.data==="["&&M++,f.data==="]")){if(M===0)return a(f);M--}return f};return[u,g]}const Q1=bn;function Io(t){return Uo(t,Eo)}function Uo(t,e){const n=gr();n.__VUE__=!0;const{insert:l,remove:i,patchProp:a,createElement:d,createText:w,createComment:_,setText:p,setElementText:u,parentNode:g,nextSibling:v,setScopeId:x=d2,cloneNode:k,insertStaticContent:C}=t,B=(m,$,z,b=null,V=null,D=null,U=!1,P=null,E=!!$.dynamicChildren)=>{if(m===$)return;m&&!Q2(m,$)&&(b=W(m),M1(m,V,D,!0),m=null),$.patchFlag===-2&&(E=!1,$.dynamicChildren=null);const{type:S,ref:e1,shapeFlag:Y}=$;switch(S){case X3:f(m,$,z,b);break;case n2:M(m,$,z,b);break;case F3:m==null&&y($,z,b,U);break;case V1:h1(m,$,z,b,V,D,U,P,E);break;default:Y&1?I(m,$,z,b,V,D,U,P,E):Y&6?N(m,$,z,b,V,D,U,P,E):(Y&64||Y&128)&&S.process(m,$,z,b,V,D,U,P,E,v1)}e1!=null&&V&&bt(e1,m&&m.ref,D,$||m,!$)},f=(m,$,z,b)=>{if(m==null)l($.el=w($.children),z,b);else{const V=$.el=m.el;$.children!==m.children&&p(V,$.children)}},M=(m,$,z,b)=>{m==null?l($.el=_($.children||""),z,b):$.el=m.el},y=(m,$,z,b)=>{[m.el,m.anchor]=C(m.children,$,z,b,m.el,m.anchor)},H=({el:m,anchor:$},z,b)=>{let V;for(;m&&m!==$;)V=v(m),l(m,z,b),m=V;l($,z,b)},A=({el:m,anchor:$})=>{let z;for(;m&&m!==$;)z=v(m),i(m),m=z;i($)},I=(m,$,z,b,V,D,U,P,E)=>{U=U||$.type==="svg",m==null?K($,z,b,V,D,U,P,E):Z(m,$,V,D,U,P,E)},K=(m,$,z,b,V,D,U,P)=>{let E,S;const{type:e1,props:Y,shapeFlag:n1,transition:i1,patchFlag:k1,dirs:b1}=m;if(m.el&&k!==void 0&&k1===-1)E=m.el=k(m.el);else{if(E=m.el=d(m.type,D,Y&&Y.is,Y),n1&8?u(E,m.children):n1&16&&J(m.children,E,null,b,V,D&&e1!=="foreignObject",U,P),b1&&x2(m,null,b,"created"),Y){for(const D1 in Y)D1!=="value"&&!R3(D1)&&a(E,D1,null,Y[D1],D,m.children,b,V,j);"value"in Y&&a(E,"value",null,Y.value),(S=Y.onVnodeBeforeMount)&&c2(S,b,m)}R(E,m,m.scopeId,U,b)}b1&&x2(m,null,b,"beforeMount");const S1=(!V||V&&!V.pendingBranch)&&i1&&!i1.persisted;S1&&i1.beforeEnter(E),l(E,$,z),((S=Y&&Y.onVnodeMounted)||S1||b1)&&Q1(()=>{S&&c2(S,b,m),S1&&i1.enter(E),b1&&x2(m,null,b,"mounted")},V)},R=(m,$,z,b,V)=>{if(z&&x(m,z),b)for(let D=0;D<b.length;D++)x(m,b[D]);if(V){let D=V.subTree;if($===D){const U=V.vnode;R(m,U,U.scopeId,U.slotScopeIds,V.parent)}}},J=(m,$,z,b,V,D,U,P,E=0)=>{for(let S=E;S<m.length;S++){const e1=m[S]=P?D2(m[S]):i2(m[S]);B(null,e1,$,z,b,V,D,U,P)}},Z=(m,$,z,b,V,D,U)=>{const P=$.el=m.el;let{patchFlag:E,dynamicChildren:S,dirs:e1}=$;E|=m.patchFlag&16;const Y=m.props||P1,n1=$.props||P1;let i1;z&&N2(z,!1),(i1=n1.onVnodeBeforeUpdate)&&c2(i1,z,$,m),e1&&x2($,m,z,"beforeUpdate"),z&&N2(z,!0);const k1=V&&$.type!=="foreignObject";if(S?a1(m.dynamicChildren,S,P,z,b,k1,D):U||q(m,$,P,null,z,b,k1,D,!1),E>0){if(E&16)T(P,$,Y,n1,z,b,V);else if(E&2&&Y.class!==n1.class&&a(P,"class",null,n1.class,V),E&4&&a(P,"style",Y.style,n1.style,V),E&8){const b1=$.dynamicProps;for(let S1=0;S1<b1.length;S1++){const D1=b1[S1],l2=Y[D1],o3=n1[D1];(o3!==l2||D1==="value")&&a(P,D1,l2,o3,V,m.children,z,b,j)}}E&1&&m.children!==$.children&&u(P,$.children)}else!U&&S==null&&T(P,$,Y,n1,z,b,V);((i1=n1.onVnodeUpdated)||e1)&&Q1(()=>{i1&&c2(i1,z,$,m),e1&&x2($,m,z,"updated")},b)},a1=(m,$,z,b,V,D,U)=>{for(let P=0;P<$.length;P++){const E=m[P],S=$[P],e1=E.el&&(E.type===V1||!Q2(E,S)||E.shapeFlag&70)?g(E.el):z;B(E,S,e1,null,b,V,D,U,!0)}},T=(m,$,z,b,V,D,U)=>{if(z!==b){for(const P in b){if(R3(P))continue;const E=b[P],S=z[P];E!==S&&P!=="value"&&a(m,P,S,E,U,$.children,V,D,j)}if(z!==P1)for(const P in z)!R3(P)&&!(P in b)&&a(m,P,z[P],null,U,$.children,V,D,j);"value"in b&&a(m,"value",z.value,b.value)}},h1=(m,$,z,b,V,D,U,P,E)=>{const S=$.el=m?m.el:w(""),e1=$.anchor=m?m.anchor:w("");let{patchFlag:Y,dynamicChildren:n1,slotScopeIds:i1}=$;i1&&(P=P?P.concat(i1):i1),m==null?(l(S,z,b),l(e1,z,b),J($.children,z,e1,V,D,U,P,E)):Y>0&&Y&64&&n1&&m.dynamicChildren?(a1(m.dynamicChildren,n1,z,V,D,U,P),($.key!=null||V&&$===V.subTree)&&Yn(m,$,!0)):q(m,$,z,e1,V,D,U,P,E)},N=(m,$,z,b,V,D,U,P,E)=>{$.slotScopeIds=P,m==null?$.shapeFlag&512?V.ctx.activate($,z,b,U,E):I1($,z,b,V,D,U,E):g1(m,$,E)},I1=(m,$,z,b,V,D,U)=>{const P=m.component=Xo(m,b,V);if(st(m)&&(P.ctx.renderer=v1),Zo(P),P.asyncDep){if(V&&V.registerDep(P,B1),!m.el){const E=P.subTree=x1(n2);M(null,E,$,z)}return}B1(P,m,$,z,V,D,U)},g1=(m,$,z)=>{const b=$.component=m.component;if(ho(m,$,z))if(b.asyncDep&&!b.asyncResolved){H1(b,$,z);return}else b.next=$,ro(b.update),b.update();else $.el=m.el,b.vnode=$},B1=(m,$,z,b,V,D,U)=>{const P=()=>{if(m.isMounted){let{next:e1,bu:Y,u:n1,parent:i1,vnode:k1}=m,b1=e1,S1;N2(m,!1),e1?(e1.el=k1.el,H1(m,e1,U)):e1=k1,Y&&$t(Y),(S1=e1.props&&e1.props.onVnodeBeforeUpdate)&&c2(S1,i1,e1,k1),N2(m,!0);const D1=Xt(m),l2=m.subTree;m.subTree=D1,B(l2,D1,g(l2.el),W(l2),m,V,D),e1.el=D1.el,b1===null&&wo(m,D1.el),n1&&Q1(n1,V),(S1=e1.props&&e1.props.onVnodeUpdated)&&Q1(()=>c2(S1,i1,e1,k1),V)}else{let e1;const{el:Y,props:n1}=$,{bm:i1,m:k1,parent:b1}=m,S1=w3($);if(N2(m,!1),i1&&$t(i1),!S1&&(e1=n1&&n1.onVnodeBeforeMount)&&c2(e1,b1,$),N2(m,!0),Y&&d1){const D1=()=>{m.subTree=Xt(m),d1(Y,m.subTree,m,V,null)};S1?$.type.__asyncLoader().then(()=>!m.isUnmounted&&D1()):D1()}else{const D1=m.subTree=Xt(m);B(null,D1,z,b,m,V,D),$.el=D1.el}if(k1&&Q1(k1,V),!S1&&(e1=n1&&n1.onVnodeMounted)){const D1=$;Q1(()=>c2(e1,b1,D1),V)}($.shapeFlag&256||b1&&w3(b1.vnode)&&b1.vnode.shapeFlag&256)&&m.a&&Q1(m.a,V),m.isMounted=!0,$=z=b=null}},E=m.effect=new N0(P,()=>t4(S),m.scope),S=m.update=()=>E.run();S.id=m.uid,N2(m,!0),S()},H1=(m,$,z)=>{$.component=m;const b=m.vnode.props;m.vnode=$,m.next=null,jo(m,$.props,b,z),Do(m,$.children,z),k3(),Ft(void 0,m.update),f3()},q=(m,$,z,b,V,D,U,P,E=!1)=>{const S=m&&m.children,e1=m?m.shapeFlag:0,Y=$.children,{patchFlag:n1,shapeFlag:i1}=$;if(n1>0){if(n1&128){l1(S,Y,z,b,V,D,U,P,E);return}else if(n1&256){c1(S,Y,z,b,V,D,U,P,E);return}}i1&8?(e1&16&&j(S,V,D),Y!==S&&u(z,Y)):e1&16?i1&16?l1(S,Y,z,b,V,D,U,P,E):j(S,V,D,!0):(e1&8&&u(z,""),i1&16&&J(Y,z,b,V,D,U,P,E))},c1=(m,$,z,b,V,D,U,P,E)=>{m=m||a3,$=$||a3;const S=m.length,e1=$.length,Y=Math.min(S,e1);let n1;for(n1=0;n1<Y;n1++){const i1=$[n1]=E?D2($[n1]):i2($[n1]);B(m[n1],i1,z,null,V,D,U,P,E)}S>e1?j(m,V,D,!0,!1,Y):J($,z,b,V,D,U,P,E,Y)},l1=(m,$,z,b,V,D,U,P,E)=>{let S=0;const e1=$.length;let Y=m.length-1,n1=e1-1;for(;S<=Y&&S<=n1;){const i1=m[S],k1=$[S]=E?D2($[S]):i2($[S]);if(Q2(i1,k1))B(i1,k1,z,null,V,D,U,P,E);else break;S++}for(;S<=Y&&S<=n1;){const i1=m[Y],k1=$[n1]=E?D2($[n1]):i2($[n1]);if(Q2(i1,k1))B(i1,k1,z,null,V,D,U,P,E);else break;Y--,n1--}if(S>Y){if(S<=n1){const i1=n1+1,k1=i1<e1?$[i1].el:b;for(;S<=n1;)B(null,$[S]=E?D2($[S]):i2($[S]),z,k1,V,D,U,P,E),S++}}else if(S>n1)for(;S<=Y;)M1(m[S],V,D,!0),S++;else{const i1=S,k1=S,b1=new Map;for(S=k1;S<=n1;S++){const Z1=$[S]=E?D2($[S]):i2($[S]);Z1.key!=null&&b1.set(Z1.key,S)}let S1,D1=0;const l2=n1-k1+1;let o3=!1,u4=0;const L3=new Array(l2);for(S=0;S<l2;S++)L3[S]=0;for(S=i1;S<=Y;S++){const Z1=m[S];if(D1>=l2){M1(Z1,V,D,!0);continue}let v2;if(Z1.key!=null)v2=b1.get(Z1.key);else for(S1=k1;S1<=n1;S1++)if(L3[S1-k1]===0&&Q2(Z1,$[S1])){v2=S1;break}v2===void 0?M1(Z1,V,D,!0):(L3[v2-k1]=S+1,v2>=u4?u4=v2:o3=!0,B(Z1,$[v2],z,null,V,D,U,P,E),D1++)}const v4=o3?Oo(L3):a3;for(S1=v4.length-1,S=l2-1;S>=0;S--){const Z1=k1+S,v2=$[Z1],x4=Z1+1<e1?$[Z1+1].el:b;L3[S]===0?B(null,v2,z,x4,V,D,U,P,E):o3&&(S1<0||S!==v4[S1]?y1(v2,z,x4,2):S1--)}}},y1=(m,$,z,b,V=null)=>{const{el:D,type:U,transition:P,children:E,shapeFlag:S}=m;if(S&6){y1(m.component.subTree,$,z,b);return}if(S&128){m.suspense.move($,z,b);return}if(S&64){U.move(m,$,z,v1);return}if(U===V1){l(D,$,z);for(let Y=0;Y<E.length;Y++)y1(E[Y],$,z,b);l(m.anchor,$,z);return}if(U===F3){H(m,$,z);return}if(b!==2&&S&1&&P)if(b===0)P.beforeEnter(D),l(D,$,z),Q1(()=>P.enter(D),V);else{const{leave:Y,delayLeave:n1,afterLeave:i1}=P,k1=()=>l(D,$,z),b1=()=>{Y(D,()=>{k1(),i1&&i1()})};n1?n1(D,k1,b1):b1()}else l(D,$,z)},M1=(m,$,z,b=!1,V=!1)=>{const{type:D,props:U,ref:P,children:E,dynamicChildren:S,shapeFlag:e1,patchFlag:Y,dirs:n1}=m;if(P!=null&&bt(P,null,z,m,!0),e1&256){$.ctx.deactivate(m);return}const i1=e1&1&&n1,k1=!w3(m);let b1;if(k1&&(b1=U&&U.onVnodeBeforeUnmount)&&c2(b1,$,m),e1&6)F(m.component,z,b);else{if(e1&128){m.suspense.unmount(z,b);return}i1&&x2(m,null,$,"beforeUnmount"),e1&64?m.type.remove(m,$,z,V,v1,b):S&&(D!==V1||Y>0&&Y&64)?j(S,$,z,!1,!0):(D===V1&&Y&384||!V&&e1&16)&&j(E,$,z),b&&p1(m)}(k1&&(b1=U&&U.onVnodeUnmounted)||i1)&&Q1(()=>{b1&&c2(b1,$,m),i1&&x2(m,null,$,"unmounted")},z)},p1=m=>{const{type:$,el:z,anchor:b,transition:V}=m;if($===V1){L(z,b);return}if($===F3){A(m);return}const D=()=>{i(z),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(m.shapeFlag&1&&V&&!V.persisted){const{leave:U,delayLeave:P}=V,E=()=>U(z,D);P?P(m.el,D,E):E()}else D()},L=(m,$)=>{let z;for(;m!==$;)z=v(m),i(m),m=z;i($)},F=(m,$,z)=>{const{bum:b,scope:V,update:D,subTree:U,um:P}=m;b&&$t(b),V.stop(),D&&(D.active=!1,M1(U,m,$,z)),P&&Q1(P,$),Q1(()=>{m.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},j=(m,$,z,b=!1,V=!1,D=0)=>{for(let U=D;U<m.length;U++)M1(m[U],$,z,b,V)},W=m=>m.shapeFlag&6?W(m.component.subTree):m.shapeFlag&128?m.suspense.next():v(m.anchor||m.el),$1=(m,$,z)=>{m==null?$._vnode&&M1($._vnode,null,null,!0):B($._vnode||null,m,$,null,null,null,z),Ht(),$._vnode=m},v1={p:B,um:M1,m:y1,r:p1,mt:I1,mc:J,pc:q,pbc:a1,n:W,o:t};let w1,d1;return e&&([w1,d1]=e(v1)),{render:$1,hydrate:w1,createApp:Fo($1,w1)}}function N2({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Yn(t,e,n=!1){const l=t.children,i=e.children;if(Q(l)&&Q(i))for(let a=0;a<l.length;a++){const d=l[a];let w=i[a];w.shapeFlag&1&&!w.dynamicChildren&&((w.patchFlag<=0||w.patchFlag===32)&&(w=i[a]=D2(i[a]),w.el=d.el),n||Yn(d,w))}}function Oo(t){const e=t.slice(),n=[0];let l,i,a,d,w;const _=t.length;for(l=0;l<_;l++){const p=t[l];if(p!==0){if(i=n[n.length-1],t[i]<p){e[l]=i,n.push(l);continue}for(a=0,d=n.length-1;a<d;)w=a+d>>1,t[n[w]]<p?a=w+1:d=w;p<t[n[a]]&&(a>0&&(e[l]=n[a-1]),n[a]=l)}}for(a=n.length,d=n[a-1];a-- >0;)n[a]=d,d=e[d];return n}const qo=t=>t.__isTeleport,V1=Symbol(void 0),X3=Symbol(void 0),n2=Symbol(void 0),F3=Symbol(void 0),E3=[];let h2=null;function o(t=!1){E3.push(h2=t?null:[])}function Go(){E3.pop(),h2=E3[E3.length-1]||null}let Q3=1;function T4(t){Q3+=t}function Xn(t){return t.dynamicChildren=Q3>0?h2||a3:null,Go(),Q3>0&&h2&&h2.push(t),t}function c(t,e,n,l,i,a){return Xn(r(t,e,n,l,i,a,!0))}function m2(t,e,n,l,i){return Xn(x1(t,e,n,l,i,!0))}function St(t){return t?t.__v_isVNode===!0:!1}function Q2(t,e){return t.type===e.type&&t.key===e.key}const Ot="__vInternal",Qn=({key:t})=>t!=null?t:null,Mt=({ref:t,ref_key:e,ref_for:n})=>t!=null?C1(t)||N1(t)||_1(t)?{i:J1,r:t,k:e,f:!!n}:t:null;function r(t,e=null,n=null,l=0,i=null,a=t===V1?0:1,d=!1,w=!1){const _={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qn(e),ref:e&&Mt(e),scopeId:Vn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:l,dynamicProps:i,dynamicChildren:null,appContext:null};return w?(o4(_,n),a&128&&t.normalize(_)):n&&(_.shapeFlag|=C1(n)?8:16),Q3>0&&!d&&h2&&(_.patchFlag>0||a&6)&&_.patchFlag!==32&&h2.push(_),_}const x1=No;function No(t,e=null,n=null,l=0,i=null,a=!1){if((!t||t===Tn)&&(t=n2),St(t)){const w=O2(t,e,!0);return n&&o4(w,n),Q3>0&&!a&&h2&&(w.shapeFlag&6?h2[h2.indexOf(t)]=w:h2.push(w)),w.patchFlag|=-2,w}if(oc(t)&&(t=t.__vccOpts),e){e=Ko(e);let{class:w,style:_}=e;w&&!C1(w)&&(e.class=q1(w)),F1(_)&&(gn(_)&&!Q(_)&&(_=W1({},_)),e.style=B2(_))}const d=C1(t)?1:_o(t)?128:qo(t)?64:F1(t)?4:_1(t)?2:0;return r(t,e,n,l,i,d,a,!0)}function Ko(t){return t?gn(t)||Ot in t?W1({},t):t:null}function O2(t,e,n=!1){const{props:l,ref:i,patchFlag:a,children:d}=t,w=e?Wo(l||{},e):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:w,key:w&&Qn(w),ref:e&&e.ref?n&&i?Q(i)?i.concat(Mt(e)):[i,Mt(e)]:Mt(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:d,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==V1?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&O2(t.ssContent),ssFallback:t.ssFallback&&O2(t.ssFallback),el:t.el,anchor:t.anchor}}function _2(t=" ",e=0){return x1(X3,null,t,e)}function h(t,e){const n=x1(F3,null,t);return n.staticCount=e,n}function u1(t="",e=!1){return e?(o(),m2(n2,null,t)):x1(n2,null,t)}function i2(t){return t==null||typeof t=="boolean"?x1(n2):Q(t)?x1(V1,null,t.slice()):typeof t=="object"?D2(t):x1(X3,null,String(t))}function D2(t){return t.el===null||t.memo?t:O2(t)}function o4(t,e){let n=0;const{shapeFlag:l}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(l&65){const i=e.default;i&&(i._c&&(i._d=!1),o4(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ot in e)?e._ctx=J1:i===3&&J1&&(J1.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _1(e)?(e={default:e,_ctx:J1},n=32):(e=String(e),l&64?(n=16,e=[_2(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wo(...t){const e={};for(let n=0;n<t.length;n++){const l=t[n];for(const i in l)if(i==="class")e.class!==l.class&&(e.class=q1([e.class,l.class]));else if(i==="style")e.style=B2([e.style,l.style]);else if(nt(i)){const a=e[i],d=l[i];d&&a!==d&&!(Q(a)&&a.includes(d))&&(e[i]=a?[].concat(a,d):d)}else i!==""&&(e[i]=l[i])}return e}function c2(t,e,n,l=null){s2(t,e,7,[n,l])}const Jo=Jn();let Yo=0;function Xo(t,e,n){const l=t.type,i=(e?e.appContext:t.appContext)||Jo,a={uid:Yo++,vnode:t,type:l,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new mr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gn(l,i),emitsOptions:yn(l,i),emit:null,emitted:null,propsDefaults:P1,inheritAttrs:l.inheritAttrs,ctx:P1,data:P1,props:P1,attrs:P1,slots:P1,refs:P1,setupState:P1,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=so.bind(null,a),t.ce&&t.ce(a),a}let U1=null;const Qo=()=>U1||J1,_3=t=>{U1=t,t.scope.on()},n3=()=>{U1&&U1.scope.off(),U1=null};function Zn(t){return t.vnode.shapeFlag&4}let p3=!1;function Zo(t,e=!1){p3=e;const{props:n,children:l}=t.vnode,i=Zn(t);Ao(t,n,i,e),Ro(t,l);const a=i?tc(t,e):void 0;return p3=!1,a}function tc(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mn(new Proxy(t.ctx,Ho));const{setup:l}=n;if(l){const i=t.setupContext=l.length>1?nc(t):null;_3(t),k3();const a=I2(l,t,0,[t.props,i]);if(f3(),n3(),on(a)){if(a.then(n3,n3),e)return a.then(d=>{F4(t,d,e)}).catch(d=>{ct(d,t,0)});t.asyncDep=a}else F4(t,a,e)}else t6(t,e)}function F4(t,e,n){_1(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:F1(e)&&(t.setupState=Cn(e)),t6(t,n)}let E4;function t6(t,e,n){const l=t.type;if(!t.render){if(!e&&E4&&!l.render){const i=l.template;if(i){const{isCustomElement:a,compilerOptions:d}=t.appContext.config,{delimiters:w,compilerOptions:_}=l,p=W1(W1({isCustomElement:a,delimiters:w},d),_);l.render=E4(i,p)}}t.render=l.render||d2}_3(t),k3(),Lo(t),f3(),n3()}function ec(t){return new Proxy(t.attrs,{get(e,n){return r2(t,"get","$attrs"),e[n]}})}function nc(t){const e=l=>{t.exposed=l||{}};let n;return{get attrs(){return n||(n=ec(t))},slots:t.slots,emit:t.emit,expose:e}}function qt(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cn(mn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yt)return yt[n](t)}}))}function rc(t,e=!0){return _1(t)?t.displayName||t.name:t.name||e&&t.__name}function oc(t){return _1(t)&&"__vccOpts"in t}const t1=(t,e)=>to(t,e,p3);function O(t,e,n){const l=arguments.length;return l===2?F1(e)&&!Q(e)?St(e)?x1(t,null,[e]):x1(t,e):x1(t,null,e):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&St(n)&&(n=[n]),x1(t,e,n))}const cc="3.2.37",sc="http://www.w3.org/2000/svg",Z2=typeof document!="undefined"?document:null,I4=Z2&&Z2.createElement("template"),lc={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,l)=>{const i=e?Z2.createElementNS(sc,t):Z2.createElement(t,n?{is:n}:void 0);return t==="select"&&l&&l.multiple!=null&&i.setAttribute("multiple",l.multiple),i},createText:t=>Z2.createTextNode(t),createComment:t=>Z2.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Z2.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,l,i,a){const d=n?n.previousSibling:e.lastChild;if(i&&(i===a||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{I4.innerHTML=l?`<svg>${t}</svg>`:t;const w=I4.content;if(l){const _=w.firstChild;for(;_.firstChild;)w.appendChild(_.firstChild);w.removeChild(_)}e.insertBefore(w,n)}return[d?d.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ic(t,e,n){const l=t._vtc;l&&(e=(e?[e,...l]:[...l]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ac(t,e,n){const l=t.style,i=C1(n);if(n&&!i){for(const a in n)V0(l,a,n[a]);if(e&&!C1(e))for(const a in e)n[a]==null&&V0(l,a,"")}else{const a=l.display;i?e!==n&&(l.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(l.display=a)}}const U4=/\s*!important$/;function V0(t,e,n){if(Q(n))n.forEach(l=>V0(t,e,l));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const l=hc(t,e);U4.test(n)?t.setProperty(m3(l),n.replace(U4,""),"important"):t[l]=n}}const O4=["Webkit","Moz","ms"],t0={};function hc(t,e){const n=t0[e];if(n)return n;let l=g2(e);if(l!=="filter"&&l in t)return t0[e]=l;l=Dt(l);for(let i=0;i<O4.length;i++){const a=O4[i]+l;if(a in t)return t0[e]=a}return e}const q4="http://www.w3.org/1999/xlink";function dc(t,e,n,l,i){if(l&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(q4,e.slice(6,e.length)):t.setAttributeNS(q4,e,n);else{const a=lr(e);n==null||a&&!nn(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function wc(t,e,n,l,i,a,d){if(e==="innerHTML"||e==="textContent"){l&&d(l,i,a),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const _=n==null?"":n;(t.value!==_||t.tagName==="OPTION")&&(t.value=_),n==null&&t.removeAttribute(e);return}let w=!1;if(n===""||n==null){const _=typeof t[e];_==="boolean"?n=nn(n):n==null&&_==="string"?(n="",w=!0):_==="number"&&(n=0,w=!0)}try{t[e]=n}catch{}w&&t.removeAttribute(e)}const[e6,_c]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let b0=0;const pc=Promise.resolve(),uc=()=>{b0=0},vc=()=>b0||(pc.then(uc),b0=e6());function M2(t,e,n,l){t.addEventListener(e,n,l)}function xc(t,e,n,l){t.removeEventListener(e,n,l)}function gc(t,e,n,l,i=null){const a=t._vei||(t._vei={}),d=a[e];if(l&&d)d.value=l;else{const[w,_]=mc(e);if(l){const p=a[e]=kc(l,i);M2(t,w,p,_)}else d&&(xc(t,w,d,_),a[e]=void 0)}}const G4=/(?:Once|Passive|Capture)$/;function mc(t){let e;if(G4.test(t)){e={};let n;for(;n=t.match(G4);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[m3(t.slice(2)),e]}function kc(t,e){const n=l=>{const i=l.timeStamp||e6();(_c||i>=n.attached-1)&&s2(fc(l,n.value),e,5,[l])};return n.value=t,n.attached=vc(),n}function fc(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(l=>i=>!i._stopped&&l&&l(i))}else return e}const N4=/^on[a-z]/,$c=(t,e,n,l,i=!1,a,d,w,_)=>{e==="class"?ic(t,l,i):e==="style"?ac(t,n,l):nt(e)?U0(e)||gc(t,e,n,l,d):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mc(t,e,l,i))?wc(t,e,l,a,d,w,_):(e==="true-value"?t._trueValue=l:e==="false-value"&&(t._falseValue=l),dc(t,e,l,i))};function Mc(t,e,n,l){return l?!!(e==="innerHTML"||e==="textContent"||e in t&&N4.test(e)&&_1(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||N4.test(e)&&C1(n)?!1:e in t}const A2="transition",y3="animation",c4=(t,{slots:e})=>O(jn,Cc(t),e);c4.displayName="Transition";const n6={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};c4.props=W1({},jn.props,n6);const K2=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},K4=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function Cc(t){const e={};for(const T in t)T in n6||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:l,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:d=`${n}-enter-active`,enterToClass:w=`${n}-enter-to`,appearFromClass:_=a,appearActiveClass:p=d,appearToClass:u=w,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=t,k=zc(i),C=k&&k[0],B=k&&k[1],{onBeforeEnter:f,onEnter:M,onEnterCancelled:y,onLeave:H,onLeaveCancelled:A,onBeforeAppear:I=f,onAppear:K=M,onAppearCancelled:R=y}=e,J=(T,h1,N)=>{W2(T,h1?u:w),W2(T,h1?p:d),N&&N()},Z=(T,h1)=>{T._isLeaving=!1,W2(T,g),W2(T,x),W2(T,v),h1&&h1()},a1=T=>(h1,N)=>{const I1=T?K:M,g1=()=>J(h1,T,N);K2(I1,[h1,g1]),W4(()=>{W2(h1,T?_:a),j2(h1,T?u:w),K4(I1)||J4(h1,l,C,g1)})};return W1(e,{onBeforeEnter(T){K2(f,[T]),j2(T,a),j2(T,d)},onBeforeAppear(T){K2(I,[T]),j2(T,_),j2(T,p)},onEnter:a1(!1),onAppear:a1(!0),onLeave(T,h1){T._isLeaving=!0;const N=()=>Z(T,h1);j2(T,g),Lc(),j2(T,v),W4(()=>{!T._isLeaving||(W2(T,g),j2(T,x),K4(H)||J4(T,l,B,N))}),K2(H,[T,N])},onEnterCancelled(T){J(T,!1),K2(y,[T])},onAppearCancelled(T){J(T,!0),K2(R,[T])},onLeaveCancelled(T){Z(T),K2(A,[T])}})}function zc(t){if(t==null)return null;if(F1(t))return[e0(t.enter),e0(t.leave)];{const e=e0(t);return[e,e]}}function e0(t){return K3(t)}function j2(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function W2(t,e){e.split(/\s+/).forEach(l=>l&&t.classList.remove(l));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function W4(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Bc=0;function J4(t,e,n,l){const i=t._endId=++Bc,a=()=>{i===t._endId&&l()};if(n)return setTimeout(a,n);const{type:d,timeout:w,propCount:_}=Hc(t,e);if(!d)return l();const p=d+"end";let u=0;const g=()=>{t.removeEventListener(p,v),a()},v=x=>{x.target===t&&++u>=_&&g()};setTimeout(()=>{u<_&&g()},w+1),t.addEventListener(p,v)}function Hc(t,e){const n=window.getComputedStyle(t),l=k=>(n[k]||"").split(", "),i=l(A2+"Delay"),a=l(A2+"Duration"),d=Y4(i,a),w=l(y3+"Delay"),_=l(y3+"Duration"),p=Y4(w,_);let u=null,g=0,v=0;e===A2?d>0&&(u=A2,g=d,v=a.length):e===y3?p>0&&(u=y3,g=p,v=_.length):(g=Math.max(d,p),u=g>0?d>p?A2:y3:null,v=u?u===A2?a.length:_.length:0);const x=u===A2&&/\b(transform|all)(,|$)/.test(n[A2+"Property"]);return{type:u,timeout:g,propCount:v,hasTransform:x}}function Y4(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,l)=>X4(n)+X4(t[l])))}function X4(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Lc(){return document.body.offsetHeight}const q2=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>$t(e,n):e};function yc(t){t.target.composing=!0}function Q4(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const S0={created(t,{modifiers:{lazy:e,trim:n,number:l}},i){t._assign=q2(i);const a=l||i.props&&i.props.type==="number";M2(t,e?"change":"input",d=>{if(d.target.composing)return;let w=t.value;n&&(w=w.trim()),a&&(w=K3(w)),t._assign(w)}),n&&M2(t,"change",()=>{t.value=t.value.trim()}),e||(M2(t,"compositionstart",yc),M2(t,"compositionend",Q4),M2(t,"change",Q4))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:l,number:i}},a){if(t._assign=q2(a),t.composing||document.activeElement===t&&t.type!=="range"&&(n||l&&t.value.trim()===e||(i||t.type==="number")&&K3(t.value)===e))return;const d=e==null?"":e;t.value!==d&&(t.value=d)}},Vc={deep:!0,created(t,e,n){t._assign=q2(n),M2(t,"change",()=>{const l=t._modelValue,i=u3(t),a=t.checked,d=t._assign;if(Q(l)){const w=I0(l,i),_=w!==-1;if(a&&!_)d(l.concat(i));else if(!a&&_){const p=[...l];p.splice(w,1),d(p)}}else if(g3(l)){const w=new Set(l);a?w.add(i):w.delete(i),d(w)}else d(r6(t,a))})},mounted:Z4,beforeUpdate(t,e,n){t._assign=q2(n),Z4(t,e,n)}};function Z4(t,{value:e,oldValue:n},l){t._modelValue=e,Q(e)?t.checked=I0(e,l.props.value)>-1:g3(e)?t.checked=e.has(l.props.value):e!==n&&(t.checked=r3(e,r6(t,!0)))}const bc={created(t,{value:e},n){t.checked=r3(e,n.props.value),t._assign=q2(n),M2(t,"change",()=>{t._assign(u3(t))})},beforeUpdate(t,{value:e,oldValue:n},l){t._assign=q2(l),e!==n&&(t.checked=r3(e,l.props.value))}},Sc={deep:!0,created(t,{value:e,modifiers:{number:n}},l){const i=g3(e);M2(t,"change",()=>{const a=Array.prototype.filter.call(t.options,d=>d.selected).map(d=>n?K3(u3(d)):u3(d));t._assign(t.multiple?i?new Set(a):a:a[0])}),t._assign=q2(l)},mounted(t,{value:e}){te(t,e)},beforeUpdate(t,e,n){t._assign=q2(n)},updated(t,{value:e}){te(t,e)}};function te(t,e){const n=t.multiple;if(!(n&&!Q(e)&&!g3(e))){for(let l=0,i=t.options.length;l<i;l++){const a=t.options[l],d=u3(a);if(n)Q(e)?a.selected=I0(e,d)>-1:a.selected=e.has(d);else if(r3(u3(a),e)){t.selectedIndex!==l&&(t.selectedIndex=l);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function u3(t){return"_value"in t?t._value:t.value}function r6(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ac={created(t,e,n){xt(t,e,n,null,"created")},mounted(t,e,n){xt(t,e,n,null,"mounted")},beforeUpdate(t,e,n,l){xt(t,e,n,l,"beforeUpdate")},updated(t,e,n,l){xt(t,e,n,l,"updated")}};function jc(t,e){switch(t){case"SELECT":return Sc;case"TEXTAREA":return S0;default:switch(e){case"checkbox":return Vc;case"radio":return bc;default:return S0}}}function xt(t,e,n,l,i){const d=jc(t.tagName,n.props&&n.props.type)[i];d&&d(t,e,n,l)}const ee={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):V3(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:l}){!e!=!n&&(l?e?(l.beforeEnter(t),V3(t,!0),l.enter(t)):l.leave(t,()=>{V3(t,!1)}):V3(t,e))},beforeUnmount(t,{value:e}){V3(t,e)}};function V3(t,e){t.style.display=e?t._vod:"none"}const Pc=W1({patchProp:$c},lc);let n0,ne=!1;function Rc(){return n0=ne?n0:Io(Pc),ne=!0,n0}const Dc=(...t)=>{const e=Rc().createApp(...t),{mount:n}=e;return e.mount=l=>{const i=Tc(l);if(i)return n(i,!0,i instanceof SVGElement)},e};function Tc(t){return C1(t)?document.querySelector(t):t}const o6=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"UltiKits.dev()","description":"UltiKits Development Docs"},"/en/":{"lang":"en-US","title":"UltiKits.dev()","description":"UltiKits Development Docs"}}}');var Fc=([t,e,n])=>t==="meta"&&e.name?`${t}.${e.name}`:["title","base"].includes(t)?t:t==="template"&&e.id?`${t}.${e.id}`:JSON.stringify([t,e,n]),Ec=t=>{const e=new Set,n=[];return t.forEach(l=>{const i=Fc(l);e.has(i)||(e.add(i),n.push(l))}),n},Ic=t=>/^(https?:)?\/\//.test(t),lK3=t=>/^mailto:/.test(t),iK3=t=>/^tel:/.test(t),c6=t=>Object.prototype.toString.call(t)==="[object Object]",Uc=t=>t.replace(/\/$/,""),Oc=t=>t.replace(/^\//,""),s6=(t,e)=>{const n=Object.keys(t).sort((l,i)=>{const a=i.split("/").length-l.split("/").length;return a!==0?a:i.length-l.length});for(const l of n)if(e.startsWith(l))return l;return"/"};const s4={"v-8daa1a0e":A1(()=>o1(()=>import("./index.html.2a6693f4.js"),[])),"v-744497ce":A1(()=>o1(()=>import("./index.html.3e7dacf9.js"),[])),"v-2d0a870d":A1(()=>o1(()=>import("./index.html.14ed1e19.js"),[])),"v-58b2268e":A1(()=>o1(()=>import("./cloud.html.f3db51d0.js"),[])),"v-3a29a482":A1(()=>o1(()=>import("./config.html.8a068895.js"),[])),"v-07eb27da":A1(()=>o1(()=>import("./data.html.960ff841.js"),[])),"v-4cf85329":A1(()=>o1(()=>import("./database.html.f4a47a28.js"),[])),"v-14fe42d1":A1(()=>o1(()=>import("./executor.html.3933ead9.js"),[])),"v-a0b068ba":A1(()=>o1(()=>import("./game-email.html.f10ad354.js"),[])),"v-2b4f175c":A1(()=>o1(()=>import("./guide.html.c8fffe34.js"),[])),"v-09d3ea6a":A1(()=>o1(()=>import("./introduction.html.bdbc4dde.js"),[])),"v-3c7b0f72":A1(()=>o1(()=>import("./inventory.html.c7cc8258.js"),[])),"v-7ffe88e0":A1(()=>o1(()=>import("./listener.html.4a6b3fa0.js"),[])),"v-58cdb6fc":A1(()=>o1(()=>import("./packet.html.4c40bf76.js"),[])),"v-74c49299":A1(()=>o1(()=>import("./pro-checker.html.593c5064.js"),[])),"v-1b43ba77":A1(()=>o1(()=>import("./real-email.html.6c065d57.js"),[])),"v-d2467c20":A1(()=>o1(()=>import("./scoreboard.html.c862f02f.js"),[])),"v-5bfc1a06":A1(()=>o1(()=>import("./yaml.html.7186626b.js"),[])),"v-3706649a":A1(()=>o1(()=>import("./404.html.fb3bdc19.js"),[])),"v-01560935":A1(()=>o1(()=>import("./index.html.74f0a729.js"),[])),"v-03d52fd3":A1(()=>o1(()=>import("./index.html.5e2f3356.js"),[])),"v-03d52ff2":A1(()=>o1(()=>import("./index.html.70867c14.js"),[]))},l6={404:A1(()=>o1(()=>import("./404.d2d22d8e.js"),["assets/404.d2d22d8e.js","assets/index.73269b8e.js"])),Categories:A1(()=>o1(()=>import("./Categories.ed0ce541.js"),["assets/Categories.ed0ce541.js","assets/index.73269b8e.js","assets/Pagation.f894d153.js"])),Layout:A1(()=>o1(()=>import("./Layout.b35fdfe8.js"),["assets/Layout.b35fdfe8.js","assets/index.73269b8e.js","assets/Pagation.f894d153.js"])),Post:A1(()=>o1(()=>import("./Post.3c210546.js"),[])),Timeline:A1(()=>o1(()=>import("./Timeline.5dc6300e.js"),[]))};var i6=X(en),a6=ot({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),C2=X(a6),Gt=()=>C2;H3.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=t=>{i6.value[t.key]=()=>Promise.resolve(t),t.key===C2.value.key&&(C2.value=t)});var h6=Symbol(""),qc=()=>{const t=T1(h6);if(!t)throw new Error("usePageFrontmatter() is called without provider.");return t},d6=Symbol(""),Gc=()=>{const t=T1(d6);if(!t)throw new Error("usePageHead() is called without provider.");return t},Nc=Symbol(""),w6=Symbol(""),_6=()=>{const t=T1(w6);if(!t)throw new Error("usePageLang() is called without provider.");return t},l4=Symbol(""),p6=()=>{const t=T1(l4);if(!t)throw new Error("useRouteLocale() is called without provider.");return t},F2=X(o6),u6=()=>F2;H3.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=t=>{F2.value=t});var v6=Symbol(""),aK3=()=>{const t=T1(v6);if(!t)throw new Error("useSiteLocaleData() is called without provider.");return t},Kc=Symbol(""),X2=G2({resolvePageData:async t=>{const e=i6.value[t],n=await(e==null?void 0:e());return n!=null?n:a6},resolvePageFrontmatter:t=>t.frontmatter,resolvePageHead:(t,e,n)=>{const l=C1(e.description)?e.description:n.description,i=[...Q(e.head)?e.head:[],...n.head,["title",{},t],["meta",{name:"description",content:l}]];return Ec(i)},resolvePageHeadTitle:(t,e)=>`${t.title?`${t.title} | `:""}${e.title}`,resolvePageLang:t=>t.lang||"en",resolveRouteLocale:(t,e)=>s6(t,e),resolveSiteLocaleData:(t,e)=>({...t,...t.locales[e]})}),Wc=s({name:"ClientOnly",setup(t,e){const n=X(!1);return X1(()=>{n.value=!0}),()=>{var l,i;return n.value?(i=(l=e.slots).default)==null?void 0:i.call(l):null}}}),Jc=s({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(t){const e=Gt(),n=t1(()=>s4[t.pageKey||e.value.key]);return()=>n.value?O(n.value):O("div","404 Not Found")}}),re=s({name:"Vuepress",setup(){const t=Gt(),e=t1(()=>{let n;if(t.value.path){const l=t.value.frontmatter.layout;C1(l)?n=l:n="Layout"}else n="404";return l6[n]||E1(n,!1)});return()=>O(e.value)}}),x6=t=>Ic(t)?t:`${u6().value.base}${Oc(t)}`,k2=t=>t;const Yc=JSON.parse('{"locales":{"/":{"selectLanguageName":"\u7B80\u4F53\u4E2D\u6587"},"/en/":{"selectLanguageName":"English"}},"style":"@vuepress-reco/style-default","logo":"/logo.png","author":"UltiKits Dev Team","docsRepo":"https://github.com/qianmo2233/UltiKitsDoc-V2","docsBranch":"master","docsDir":"docs","lastUpdatedText":"","series":{"/docs/dev/":[{"text":"\u4ECB\u7ECD","children":["introduction","guide"]},{"text":"\u5F00\u53D1","children":["yaml","config","data","executor","listener"]},{"text":"\u63A5\u53E3","children":["game-email","inventory","packet","database","pro-checker","real-email","cloud","scoreboard"]}]},"navbar":[{"text":"\u4E3B\u9875","link":"/"},{"text":"\u5F00\u53D1\u6587\u6863","link":"/docs/dev/introduction"},{"text":"API\u5B57\u5178","link":"/api/"},{"text":"\u7528\u6237\u6587\u6863","link":"https://doc.ultitools.ultikits.com"},{"text":"UltiKits\u5B98\u65B9\u7F51\u7AD9","link":"https://ultikits.com"},{"text":"GitHub\u4ED3\u5E93","link":"https://github.com/wisdommen/UltiTools"}],"bulletin":{"body":[{"type":"text","content":"\u{1F389}\u{1F389}\u{1F389} UltiKits \u5F00\u53D1\u6587\u6863\u73B0\u5DF2\u66F4\u65B0\u6539\u7248\uFF0CAPI\u5B57\u5178\u76EE\u524D\u6B63\u5728\u52AA\u529B\u6574\u7406\u4E2D\uFF0C\u5E0C\u671B\u5927\u5BB6\u5728 QQ \u7FA4\u548C GitHub \u8E0A\u8DC3\u53CD\u9988\u3002","style":"font-size: 12px;"}]},"commentConfig":{"type":"valine","options":{"appId":"OmFxvGIQH4fVXOk6vbT1XeeA-gzGzoHsz","appKey":"6PvpNkDMSXGA31YUsW90HEQ1"}}}'),g6=X(Yc),Xc=()=>g6;H3.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=t=>{g6.value=t});const m6=Symbol(""),Nt=()=>{const t=T1(m6);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},Qc=(t,e)=>{var n;return{...t,...(n=t.locales)==null?void 0:n[e]}};function Zc(){const t=Nt(),e=t1(()=>{var a;return(a=t==null?void 0:t.value)===null||a===void 0?void 0:a.bulletin}),n=X(!1),l="__CLOSE_BULLETIN_POPOVER__";return X1(()=>{var a;const d=sessionStorage.getItem(l);n.value=d!=="true"&&!!(!((a=e==null?void 0:e.value)===null||a===void 0)&&a.body)}),{visible:n,bulletin:e,closeBulletinPopover:()=>{n.value=!1,sessionStorage.setItem(l,"true")}}}const t5={handleImage(t){return`<img style="${t.style||""}" src="${t.src}" />`},handleText(t){return`<div style="${t.style||""}">${t.content}</div>`},handleTitle(t){return`<h5 style="${t.style||""}">${t.content}</h5>`},handleButton(t){return`<a style="${t.style||""}" class="btn" href="${t.link}">${t.text}</a>`},handleButtongroup(t){return`<div class="btn-group">${(t.children||[]).reduce((n,l)=>n+=`<a style="${l.style||t.style||""}" class="btn" href="${l.link}">${l.text}</a>`,"")}</div>`},handleHr(t){return"<hr />"}};function e5(){const t=Nt();function e(l){if(Array.isArray(l))return l.map(i=>e(i));{let i=l.type;return i=i.slice(0,1).toUpperCase()+i.slice(1),t5[`handle${i}`](l)}}return{bodyNodes:t1(()=>{var l,i;return e((i=(l=t==null?void 0:t.value)===null||l===void 0?void 0:l.bulletin)===null||i===void 0?void 0:i.body).join("")}),handleNode:e}}var M3=(t,e)=>{const n=t.__vccOpts||t;for(const[l,i]of e)n[l]=i;return n};const n5={class:"bulletin-title"},r5=r("svg",{t:"1573745677073",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},[r("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"})],-1),o5=[r5],c5=["innerHTML"],s5=s({__name:"Bulletin",setup(t){const{visible:e,bulletin:n,closeBulletinPopover:l}=Zc(),{bodyNodes:i}=e5();return(a,d)=>{var _,p;const w=E1("Xicons");return G1(e)?(o(),c("div",{key:0,class:"bulletin-wrapper",style:B2({width:((_=G1(n))==null?void 0:_.width)||"300px"})},[r("div",n5,[x1(w,{icon:"Bulb","icon-size":"28","icon-color":"#fff",text:((p=G1(n))==null?void 0:p.title)||"\u516C\u544A","text-color":"#fff","text-size":"16"},null,8,["text"]),r("i",{class:"btn-close",onClick:d[0]||(d[0]=(...u)=>G1(l)&&G1(l)(...u))},o5)]),r("div",{class:"bulletin-content",innerHTML:G1(i)},null,8,c5)],4)):u1("",!0)}}});var l5=M3(s5,[["__file","Bulletin.vue"]]),i5=k2({rootComponents:[l5]});function a5(){const t=Nt(),e=t1(()=>{var l;switch((l=t.value.commentConfig)===null||l===void 0?void 0:l.type){case"valine":return"valine";case"waline":return"waline";default:return""}}),n=t1(()=>{var l,i;return((i=(l=t.value)===null||l===void 0?void 0:l.commentConfig)===null||i===void 0?void 0:i.options)||{}});return{solution:e,options:n}}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const i3=typeof window!="undefined";function h5(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const j1=Object.assign;function r0(t,e){const n={};for(const l in e){const i=e[l];n[l]=p2(i)?i.map(t):t(i)}return n}const I3=()=>{},p2=Array.isArray,d5=/\/$/,w5=t=>t.replace(d5,"");function o0(t,e,n="/"){let l,i={},a="",d="";const w=e.indexOf("#");let _=e.indexOf("?");return w<_&&w>=0&&(_=-1),_>-1&&(l=e.slice(0,_),a=e.slice(_+1,w>-1?w:e.length),i=t(a)),w>-1&&(l=l||e.slice(0,w),d=e.slice(w,e.length)),l=v5(l!=null?l:e,n),{fullPath:l+(a&&"?")+a+d,path:l,query:i,hash:d}}function _5(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function oe(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function p5(t,e,n){const l=e.matched.length-1,i=n.matched.length-1;return l>-1&&l===i&&v3(e.matched[l],n.matched[i])&&k6(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function v3(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function k6(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!u5(t[n],e[n]))return!1;return!0}function u5(t,e){return p2(t)?ce(t,e):p2(e)?ce(e,t):t===e}function ce(t,e){return p2(e)?t.length===e.length&&t.every((n,l)=>n===e[l]):t.length===1&&t[0]===e}function v5(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),l=t.split("/");let i=n.length-1,a,d;for(a=0;a<l.length;a++)if(d=l[a],d!==".")if(d==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+l.slice(a-(a===l.length?1:0)).join("/")}var Z3;(function(t){t.pop="pop",t.push="push"})(Z3||(Z3={}));var U3;(function(t){t.back="back",t.forward="forward",t.unknown=""})(U3||(U3={}));function x5(t){if(!t)if(i3){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),w5(t)}const g5=/^[^#]+#/;function m5(t,e){return t.replace(g5,"#")+e}function k5(t,e){const n=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:e.behavior,left:l.left-n.left-(e.left||0),top:l.top-n.top-(e.top||0)}}const Kt=()=>({left:window.pageXOffset,top:window.pageYOffset});function f5(t){let e;if("el"in t){const n=t.el,l=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=k5(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function se(t,e){return(history.state?history.state.position-e:-1)+t}const A0=new Map;function $5(t,e){A0.set(t,e)}function M5(t){const e=A0.get(t);return A0.delete(t),e}let C5=()=>location.protocol+"//"+location.host;function f6(t,e){const{pathname:n,search:l,hash:i}=e,a=t.indexOf("#");if(a>-1){let w=i.includes(t.slice(a))?t.slice(a).length:1,_=i.slice(w);return _[0]!=="/"&&(_="/"+_),oe(_,"")}return oe(n,t)+l+i}function z5(t,e,n,l){let i=[],a=[],d=null;const w=({state:v})=>{const x=f6(t,location),k=n.value,C=e.value;let B=0;if(v){if(n.value=x,e.value=v,d&&d===k){d=null;return}B=C?v.position-C.position:0}else l(x);i.forEach(f=>{f(n.value,k,{delta:B,type:Z3.pop,direction:B?B>0?U3.forward:U3.back:U3.unknown})})};function _(){d=n.value}function p(v){i.push(v);const x=()=>{const k=i.indexOf(v);k>-1&&i.splice(k,1)};return a.push(x),x}function u(){const{history:v}=window;!v.state||v.replaceState(j1({},v.state,{scroll:Kt()}),"")}function g(){for(const v of a)v();a=[],window.removeEventListener("popstate",w),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",w),window.addEventListener("beforeunload",u),{pauseListeners:_,listen:p,destroy:g}}function le(t,e,n,l=!1,i=!1){return{back:t,current:e,forward:n,replaced:l,position:window.history.length,scroll:i?Kt():null}}function B5(t){const{history:e,location:n}=window,l={value:f6(t,n)},i={value:e.state};i.value||a(l.value,{back:null,current:l.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function a(_,p,u){const g=t.indexOf("#"),v=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+_:C5()+t+_;try{e[u?"replaceState":"pushState"](p,"",v),i.value=p}catch(x){console.error(x),n[u?"replace":"assign"](v)}}function d(_,p){const u=j1({},e.state,le(i.value.back,_,i.value.forward,!0),p,{position:i.value.position});a(_,u,!0),l.value=_}function w(_,p){const u=j1({},i.value,e.state,{forward:_,scroll:Kt()});a(u.current,u,!0);const g=j1({},le(l.value,_,null),{position:u.position+1},p);a(_,g,!1),l.value=_}return{location:l,state:i,push:w,replace:d}}function H5(t){t=x5(t);const e=B5(t),n=z5(t,e.state,e.location,e.replace);function l(a,d=!0){d||n.pauseListeners(),history.go(a)}const i=j1({location:"",base:t,go:l,createHref:m5.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function L5(t){return typeof t=="string"||t&&typeof t=="object"}function $6(t){return typeof t=="string"||typeof t=="symbol"}const f2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},M6=Symbol("");var ie;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ie||(ie={}));function x3(t,e){return j1(new Error,{type:t,[M6]:!0},e)}function P2(t,e){return t instanceof Error&&M6 in t&&(e==null||!!(t.type&e))}const ae="[^/]+?",y5={sensitive:!1,strict:!1,start:!0,end:!0},V5=/[.+*?^${}()[\]/\\]/g;function b5(t,e){const n=j1({},y5,e),l=[];let i=n.start?"^":"";const a=[];for(const p of t){const u=p.length?[]:[90];n.strict&&!p.length&&(i+="/");for(let g=0;g<p.length;g++){const v=p[g];let x=40+(n.sensitive?.25:0);if(v.type===0)g||(i+="/"),i+=v.value.replace(V5,"\\$&"),x+=40;else if(v.type===1){const{value:k,repeatable:C,optional:B,regexp:f}=v;a.push({name:k,repeatable:C,optional:B});const M=f||ae;if(M!==ae){x+=10;try{new RegExp(`(${M})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${k}" (${M}): `+H.message)}}let y=C?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;g||(y=B&&p.length<2?`(?:/${y})`:"/"+y),B&&(y+="?"),i+=y,x+=20,B&&(x+=-8),C&&(x+=-20),M===".*"&&(x+=-50)}u.push(x)}l.push(u)}if(n.strict&&n.end){const p=l.length-1;l[p][l[p].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const d=new RegExp(i,n.sensitive?"":"i");function w(p){const u=p.match(d),g={};if(!u)return null;for(let v=1;v<u.length;v++){const x=u[v]||"",k=a[v-1];g[k.name]=x&&k.repeatable?x.split("/"):x}return g}function _(p){let u="",g=!1;for(const v of t){(!g||!u.endsWith("/"))&&(u+="/"),g=!1;for(const x of v)if(x.type===0)u+=x.value;else if(x.type===1){const{value:k,repeatable:C,optional:B}=x,f=k in p?p[k]:"";if(p2(f)&&!C)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const M=p2(f)?f.join("/"):f;if(!M)if(B)v.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):g=!0);else throw new Error(`Missing required param "${k}"`);u+=M}}return u}return{re:d,score:l,keys:a,parse:w,stringify:_}}function S5(t,e){let n=0;for(;n<t.length&&n<e.length;){const l=e[n]-t[n];if(l)return l;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function A5(t,e){let n=0;const l=t.score,i=e.score;for(;n<l.length&&n<i.length;){const a=S5(l[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-l.length)===1){if(he(l))return 1;if(he(i))return-1}return i.length-l.length}function he(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const j5={type:0,value:""},P5=/[a-zA-Z0-9_]/;function R5(t){if(!t)return[[]];if(t==="/")return[[j5]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(x){throw new Error(`ERR (${n})/"${p}": ${x}`)}let n=0,l=n;const i=[];let a;function d(){a&&i.push(a),a=[]}let w=0,_,p="",u="";function g(){!p||(n===0?a.push({type:0,value:p}):n===1||n===2||n===3?(a.length>1&&(_==="*"||_==="+")&&e(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:p,regexp:u,repeatable:_==="*"||_==="+",optional:_==="*"||_==="?"})):e("Invalid state to consume buffer"),p="")}function v(){p+=_}for(;w<t.length;){if(_=t[w++],_==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:_==="/"?(p&&g(),d()):_===":"?(g(),n=1):v();break;case 4:v(),n=l;break;case 1:_==="("?n=2:P5.test(_)?v():(g(),n=0,_!=="*"&&_!=="?"&&_!=="+"&&w--);break;case 2:_===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+_:n=3:u+=_;break;case 3:g(),n=0,_!=="*"&&_!=="?"&&_!=="+"&&w--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${p}"`),g(),d(),i}function D5(t,e,n){const l=b5(R5(t.path),n),i=j1(l,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function T5(t,e){const n=[],l=new Map;e=we({strict:!1,end:!0,sensitive:!1},e);function i(u){return l.get(u)}function a(u,g,v){const x=!v,k=E5(u);k.aliasOf=v&&v.record;const C=we(e,u),B=[k];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of y)B.push(j1({},k,{components:v?v.record.components:k.components,path:H,aliasOf:v?v.record:k}))}let f,M;for(const y of B){const{path:H}=y;if(g&&H[0]!=="/"){const A=g.record.path,I=A[A.length-1]==="/"?"":"/";y.path=g.record.path+(H&&I+H)}if(f=D5(y,g,C),v?v.alias.push(f):(M=M||f,M!==f&&M.alias.push(f),x&&u.name&&!de(f)&&d(u.name)),k.children){const A=k.children;for(let I=0;I<A.length;I++)a(A[I],f,v&&v.children[I])}v=v||f,_(f)}return M?()=>{d(M)}:I3}function d(u){if($6(u)){const g=l.get(u);g&&(l.delete(u),n.splice(n.indexOf(g),1),g.children.forEach(d),g.alias.forEach(d))}else{const g=n.indexOf(u);g>-1&&(n.splice(g,1),u.record.name&&l.delete(u.record.name),u.children.forEach(d),u.alias.forEach(d))}}function w(){return n}function _(u){let g=0;for(;g<n.length&&A5(u,n[g])>=0&&(u.record.path!==n[g].record.path||!C6(u,n[g]));)g++;n.splice(g,0,u),u.record.name&&!de(u)&&l.set(u.record.name,u)}function p(u,g){let v,x={},k,C;if("name"in u&&u.name){if(v=l.get(u.name),!v)throw x3(1,{location:u});C=v.record.name,x=j1(F5(g.params,v.keys.filter(M=>!M.optional).map(M=>M.name)),u.params),k=v.stringify(x)}else if("path"in u)k=u.path,v=n.find(M=>M.re.test(k)),v&&(x=v.parse(k),C=v.record.name);else{if(v=g.name?l.get(g.name):n.find(M=>M.re.test(g.path)),!v)throw x3(1,{location:u,currentLocation:g});C=v.record.name,x=j1({},g.params,u.params),k=v.stringify(x)}const B=[];let f=v;for(;f;)B.unshift(f.record),f=f.parent;return{name:C,path:k,params:x,matched:B,meta:U5(B)}}return t.forEach(u=>a(u)),{addRoute:a,resolve:p,removeRoute:d,getRoutes:w,getRecordMatcher:i}}function F5(t,e){const n={};for(const l of e)l in t&&(n[l]=t[l]);return n}function E5(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:I5(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function I5(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const l in t.components)e[l]=typeof n=="boolean"?n:n[l];return e}function de(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function U5(t){return t.reduce((e,n)=>j1(e,n.meta),{})}function we(t,e){const n={};for(const l in t)n[l]=l in e?e[l]:t[l];return n}function C6(t,e){return e.children.some(n=>n===t||C6(t,n))}const z6=/#/g,O5=/&/g,q5=/\//g,G5=/=/g,N5=/\?/g,B6=/\+/g,K5=/%5B/g,W5=/%5D/g,H6=/%5E/g,J5=/%60/g,L6=/%7B/g,Y5=/%7C/g,y6=/%7D/g,X5=/%20/g;function i4(t){return encodeURI(""+t).replace(Y5,"|").replace(K5,"[").replace(W5,"]")}function Q5(t){return i4(t).replace(L6,"{").replace(y6,"}").replace(H6,"^")}function j0(t){return i4(t).replace(B6,"%2B").replace(X5,"+").replace(z6,"%23").replace(O5,"%26").replace(J5,"`").replace(L6,"{").replace(y6,"}").replace(H6,"^")}function Z5(t){return j0(t).replace(G5,"%3D")}function t8(t){return i4(t).replace(z6,"%23").replace(N5,"%3F")}function e8(t){return t==null?"":t8(t).replace(q5,"%2F")}function At(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function n8(t){const e={};if(t===""||t==="?")return e;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<l.length;++i){const a=l[i].replace(B6," "),d=a.indexOf("="),w=At(d<0?a:a.slice(0,d)),_=d<0?null:At(a.slice(d+1));if(w in e){let p=e[w];p2(p)||(p=e[w]=[p]),p.push(_)}else e[w]=_}return e}function _e(t){let e="";for(let n in t){const l=t[n];if(n=Z5(n),l==null){l!==void 0&&(e+=(e.length?"&":"")+n);continue}(p2(l)?l.map(a=>a&&j0(a)):[l&&j0(l)]).forEach(a=>{a!==void 0&&(e+=(e.length?"&":"")+n,a!=null&&(e+="="+a))})}return e}function r8(t){const e={};for(const n in t){const l=t[n];l!==void 0&&(e[n]=p2(l)?l.map(i=>i==null?null:""+i):l==null?l:""+l)}return e}const o8=Symbol(""),pe=Symbol(""),Wt=Symbol(""),a4=Symbol(""),P0=Symbol("");function b3(){let t=[];function e(l){return t.push(l),()=>{const i=t.indexOf(l);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function T2(t,e,n,l,i){const a=l&&(l.enterCallbacks[i]=l.enterCallbacks[i]||[]);return()=>new Promise((d,w)=>{const _=g=>{g===!1?w(x3(4,{from:n,to:e})):g instanceof Error?w(g):L5(g)?w(x3(2,{from:e,to:g})):(a&&l.enterCallbacks[i]===a&&typeof g=="function"&&a.push(g),d())},p=t.call(l&&l.instances[i],e,n,_);let u=Promise.resolve(p);t.length<3&&(u=u.then(_)),u.catch(g=>w(g))})}function c0(t,e,n,l){const i=[];for(const a of t)for(const d in a.components){let w=a.components[d];if(!(e!=="beforeRouteEnter"&&!a.instances[d]))if(c8(w)){const p=(w.__vccOpts||w)[e];p&&i.push(T2(p,n,l,a,d))}else{let _=w();i.push(()=>_.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${a.path}"`));const u=h5(p)?p.default:p;a.components[d]=u;const v=(u.__vccOpts||u)[e];return v&&T2(v,n,l,a,d)()}))}}return i}function c8(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ue(t){const e=T1(Wt),n=T1(a4),l=t1(()=>e.resolve(G1(t.to))),i=t1(()=>{const{matched:_}=l.value,{length:p}=_,u=_[p-1],g=n.matched;if(!u||!g.length)return-1;const v=g.findIndex(v3.bind(null,u));if(v>-1)return v;const x=ve(_[p-2]);return p>1&&ve(u)===x&&g[g.length-1].path!==x?g.findIndex(v3.bind(null,_[p-2])):v}),a=t1(()=>i.value>-1&&a8(n.params,l.value.params)),d=t1(()=>i.value>-1&&i.value===n.matched.length-1&&k6(n.params,l.value.params));function w(_={}){return i8(_)?e[G1(t.replace)?"replace":"push"](G1(t.to)).catch(I3):Promise.resolve()}return{route:l,href:t1(()=>l.value.href),isActive:a,isExactActive:d,navigate:w}}const s8=s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ue,setup(t,{slots:e}){const n=G2(ue(t)),{options:l}=T1(Wt),i=t1(()=>({[xe(t.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[xe(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=e.default&&e.default(n);return t.custom?a:O("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),l8=s8;function i8(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function a8(t,e){for(const n in e){const l=e[n],i=t[n];if(typeof l=="string"){if(l!==i)return!1}else if(!p2(i)||i.length!==l.length||l.some((a,d)=>a!==i[d]))return!1}return!0}function ve(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xe=(t,e,n)=>t!=null?t:e!=null?e:n,h8=s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const l=T1(P0),i=t1(()=>t.route||l.value),a=T1(pe,0),d=t1(()=>{let p=G1(a);const{matched:u}=i.value;let g;for(;(g=u[p])&&!g.components;)p++;return p}),w=t1(()=>i.value.matched[d.value]);w2(pe,t1(()=>d.value+1)),w2(o8,w),w2(P0,i);const _=X();return K1(()=>[_.value,w.value,t.name],([p,u,g],[v,x,k])=>{u&&(u.instances[g]=p,x&&x!==u&&p&&p===v&&(u.leaveGuards.size||(u.leaveGuards=x.leaveGuards),u.updateGuards.size||(u.updateGuards=x.updateGuards))),p&&u&&(!x||!v3(u,x)||!v)&&(u.enterCallbacks[g]||[]).forEach(C=>C(p))},{flush:"post"}),()=>{const p=i.value,u=w.value,g=u&&u.components[t.name],v=t.name;if(!g)return ge(n.default,{Component:g,route:p});const x=u.props[t.name],k=x?x===!0?p.params:typeof x=="function"?x(p):x:null,B=O(g,j1({},k,e,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(u.instances[v]=null)},ref:_}));return ge(n.default,{Component:B,route:p})||B}}});function ge(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const V6=h8;function d8(t){const e=T5(t.routes,t),n=t.parseQuery||n8,l=t.stringifyQuery||_e,i=t.history,a=b3(),d=b3(),w=b3(),_=$n(f2);let p=f2;i3&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=r0.bind(null,L=>""+L),g=r0.bind(null,e8),v=r0.bind(null,At);function x(L,F){let j,W;return $6(L)?(j=e.getRecordMatcher(L),W=F):W=L,e.addRoute(W,j)}function k(L){const F=e.getRecordMatcher(L);F&&e.removeRoute(F)}function C(){return e.getRoutes().map(L=>L.record)}function B(L){return!!e.getRecordMatcher(L)}function f(L,F){if(F=j1({},F||_.value),typeof L=="string"){const d1=o0(n,L,F.path),m=e.resolve({path:d1.path},F),$=i.createHref(d1.fullPath);return j1(d1,m,{params:v(m.params),hash:At(d1.hash),redirectedFrom:void 0,href:$})}let j;if("path"in L)j=j1({},L,{path:o0(n,L.path,F.path).path});else{const d1=j1({},L.params);for(const m in d1)d1[m]==null&&delete d1[m];j=j1({},L,{params:g(L.params)}),F.params=g(F.params)}const W=e.resolve(j,F),$1=L.hash||"";W.params=u(v(W.params));const v1=_5(l,j1({},L,{hash:Q5($1),path:W.path})),w1=i.createHref(v1);return j1({fullPath:v1,hash:$1,query:l===_e?r8(L.query):L.query||{}},W,{redirectedFrom:void 0,href:w1})}function M(L){return typeof L=="string"?o0(n,L,_.value.path):j1({},L)}function y(L,F){if(p!==L)return x3(8,{from:F,to:L})}function H(L){return K(L)}function A(L){return H(j1(M(L),{replace:!0}))}function I(L){const F=L.matched[L.matched.length-1];if(F&&F.redirect){const{redirect:j}=F;let W=typeof j=="function"?j(L):j;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=M(W):{path:W},W.params={}),j1({query:L.query,hash:L.hash,params:"path"in W?{}:L.params},W)}}function K(L,F){const j=p=f(L),W=_.value,$1=L.state,v1=L.force,w1=L.replace===!0,d1=I(j);if(d1)return K(j1(M(d1),{state:$1,force:v1,replace:w1}),F||j);const m=j;m.redirectedFrom=F;let $;return!v1&&p5(l,W,j)&&($=x3(16,{to:m,from:W}),c1(W,W,!0,!1)),($?Promise.resolve($):J(m,W)).catch(z=>P2(z)?P2(z,2)?z:q(z):B1(z,m,W)).then(z=>{if(z){if(P2(z,2))return K(j1(M(z.to),{state:$1,force:v1,replace:w1}),F||m)}else z=a1(m,W,!0,w1,$1);return Z(m,W,z),z})}function R(L,F){const j=y(L,F);return j?Promise.reject(j):Promise.resolve()}function J(L,F){let j;const[W,$1,v1]=w8(L,F);j=c0(W.reverse(),"beforeRouteLeave",L,F);for(const d1 of W)d1.leaveGuards.forEach(m=>{j.push(T2(m,L,F))});const w1=R.bind(null,L,F);return j.push(w1),c3(j).then(()=>{j=[];for(const d1 of a.list())j.push(T2(d1,L,F));return j.push(w1),c3(j)}).then(()=>{j=c0($1,"beforeRouteUpdate",L,F);for(const d1 of $1)d1.updateGuards.forEach(m=>{j.push(T2(m,L,F))});return j.push(w1),c3(j)}).then(()=>{j=[];for(const d1 of L.matched)if(d1.beforeEnter&&!F.matched.includes(d1))if(p2(d1.beforeEnter))for(const m of d1.beforeEnter)j.push(T2(m,L,F));else j.push(T2(d1.beforeEnter,L,F));return j.push(w1),c3(j)}).then(()=>(L.matched.forEach(d1=>d1.enterCallbacks={}),j=c0(v1,"beforeRouteEnter",L,F),j.push(w1),c3(j))).then(()=>{j=[];for(const d1 of d.list())j.push(T2(d1,L,F));return j.push(w1),c3(j)}).catch(d1=>P2(d1,8)?d1:Promise.reject(d1))}function Z(L,F,j){for(const W of w.list())W(L,F,j)}function a1(L,F,j,W,$1){const v1=y(L,F);if(v1)return v1;const w1=F===f2,d1=i3?history.state:{};j&&(W||w1?i.replace(L.fullPath,j1({scroll:w1&&d1&&d1.scroll},$1)):i.push(L.fullPath,$1)),_.value=L,c1(L,F,j,w1),q()}let T;function h1(){T||(T=i.listen((L,F,j)=>{if(!p1.listening)return;const W=f(L),$1=I(W);if($1){K(j1($1,{replace:!0}),W).catch(I3);return}p=W;const v1=_.value;i3&&$5(se(v1.fullPath,j.delta),Kt()),J(W,v1).catch(w1=>P2(w1,12)?w1:P2(w1,2)?(K(w1.to,W).then(d1=>{P2(d1,20)&&!j.delta&&j.type===Z3.pop&&i.go(-1,!1)}).catch(I3),Promise.reject()):(j.delta&&i.go(-j.delta,!1),B1(w1,W,v1))).then(w1=>{w1=w1||a1(W,v1,!1),w1&&(j.delta?i.go(-j.delta,!1):j.type===Z3.pop&&P2(w1,20)&&i.go(-1,!1)),Z(W,v1,w1)}).catch(I3)}))}let N=b3(),I1=b3(),g1;function B1(L,F,j){q(L);const W=I1.list();return W.length?W.forEach($1=>$1(L,F,j)):console.error(L),Promise.reject(L)}function H1(){return g1&&_.value!==f2?Promise.resolve():new Promise((L,F)=>{N.add([L,F])})}function q(L){return g1||(g1=!L,h1(),N.list().forEach(([F,j])=>L?j(L):F()),N.reset()),L}function c1(L,F,j,W){const{scrollBehavior:$1}=t;if(!i3||!$1)return Promise.resolve();const v1=!j&&M5(se(L.fullPath,0))||(W||!j)&&history.state&&history.state.scroll||null;return Z0().then(()=>$1(L,F,v1)).then(w1=>w1&&f5(w1)).catch(w1=>B1(w1,L,F))}const l1=L=>i.go(L);let y1;const M1=new Set,p1={currentRoute:_,listening:!0,addRoute:x,removeRoute:k,hasRoute:B,getRoutes:C,resolve:f,options:t,push:H,replace:A,go:l1,back:()=>l1(-1),forward:()=>l1(1),beforeEach:a.add,beforeResolve:d.add,afterEach:w.add,onError:I1.add,isReady:H1,install(L){const F=this;L.component("RouterLink",l8),L.component("RouterView",V6),L.config.globalProperties.$router=F,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>G1(_)}),i3&&!y1&&_.value===f2&&(y1=!0,H(i.location).catch($1=>{}));const j={};for(const $1 in f2)j[$1]=t1(()=>_.value[$1]);L.provide(Wt,F),L.provide(a4,G2(j)),L.provide(P0,_);const W=L.unmount;M1.add(L),L.unmount=function(){M1.delete(L),M1.size<1&&(p=f2,T&&T(),T=null,_.value=f2,y1=!1,g1=!1),W()}}};return p1}function c3(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function w8(t,e){const n=[],l=[],i=[],a=Math.max(e.matched.length,t.matched.length);for(let d=0;d<a;d++){const w=e.matched[d];w&&(t.matched.find(p=>v3(p,w))?l.push(w):n.push(w));const _=t.matched[d];_&&(e.matched.find(p=>v3(p,_))||i.push(_))}return[n,l,i]}function C3(){return T1(Wt)}function it(){return T1(a4)}var me=s({name:"Valine",props:{options:{type:Object,default(){return{}}}},setup(t){const e=C3(),{options:n}=$3(t);X1(()=>{const l=async()=>{const{Valine:i}=await o1(()=>import("./reco-valine.88224ab5.js"),[]),a={el:"#valine",placeholder:"just go go",notify:!1,verify:!1,avatar:"retro",visitor:!0,recordIP:!1,path:window.location.pathname,...n.value};new i(a)};l(),K1(()=>e.currentRoute.value.path,i=>{l()},{immediate:!0,deep:!0})})},render(){return O("div",{class:"reco-valine-wrapper"},O("div",{id:"valine"}))}}),J2,gt,O3=typeof Map=="function"?new Map:(J2=[],gt=[],{has:function(t){return J2.indexOf(t)>-1},get:function(t){return gt[J2.indexOf(t)]},set:function(t,e){J2.indexOf(t)===-1&&(J2.push(t),gt.push(e))},delete:function(t){var e=J2.indexOf(t);e>-1&&(J2.splice(e,1),gt.splice(e,1))}}),b6=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch{b6=function(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!1),n}}function _8(t){var e=O3.get(t);e&&e.destroy()}function p8(t){var e=O3.get(t);e&&e.update()}var P3=null;typeof window=="undefined"||typeof window.getComputedStyle!="function"?((P3=function(t){return t}).destroy=function(t){return t},P3.update=function(t){return t}):((P3=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],function(n){return function(l){if(l&&l.nodeName&&l.nodeName==="TEXTAREA"&&!O3.has(l)){var i,a=null,d=null,w=null,_=function(){l.clientWidth!==d&&v()},p=function(x){window.removeEventListener("resize",_,!1),l.removeEventListener("input",v,!1),l.removeEventListener("keyup",v,!1),l.removeEventListener("autosize:destroy",p,!1),l.removeEventListener("autosize:update",v,!1),Object.keys(x).forEach(function(k){l.style[k]=x[k]}),O3.delete(l)}.bind(l,{height:l.style.height,resize:l.style.resize,overflowY:l.style.overflowY,overflowX:l.style.overflowX,wordWrap:l.style.wordWrap});l.addEventListener("autosize:destroy",p,!1),"onpropertychange"in l&&"oninput"in l&&l.addEventListener("keyup",v,!1),window.addEventListener("resize",_,!1),l.addEventListener("input",v,!1),l.addEventListener("autosize:update",v,!1),l.style.overflowX="hidden",l.style.wordWrap="break-word",O3.set(l,{destroy:p,update:v}),(i=window.getComputedStyle(l,null)).resize==="vertical"?l.style.resize="none":i.resize==="both"&&(l.style.resize="horizontal"),a=i.boxSizing==="content-box"?-(parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)):parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),isNaN(a)&&(a=0),v()}function u(x){var k=l.style.width;l.style.width="0px",l.style.width=k,l.style.overflowY=x}function g(){if(l.scrollHeight!==0){var x=function(C){for(var B=[];C&&C.parentNode&&C.parentNode instanceof Element;)C.parentNode.scrollTop&&B.push({node:C.parentNode,scrollTop:C.parentNode.scrollTop}),C=C.parentNode;return B}(l),k=document.documentElement&&document.documentElement.scrollTop;l.style.height="",l.style.height=l.scrollHeight+a+"px",d=l.clientWidth,x.forEach(function(C){C.node.scrollTop=C.scrollTop}),k&&(document.documentElement.scrollTop=k)}}function v(){g();var x=Math.round(parseFloat(l.style.height)),k=window.getComputedStyle(l,null),C=k.boxSizing==="content-box"?Math.round(parseFloat(k.height)):l.offsetHeight;if(C<x?k.overflowY==="hidden"&&(u("scroll"),g(),C=k.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight):k.overflowY!=="hidden"&&(u("hidden"),g(),C=k.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight),w!==C){w=C;var B=b6("autosize:resized");try{l.dispatchEvent(B)}catch{}}}}(n)}),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],_8),t},P3.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],p8),t});var ke=P3;function S6(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let z3=S6();function u8(t){z3=t}const v8=/[&<>"']/,x8=/[&<>"']/g,g8=/[<>"']|&(?!#?\w+;)/,m8=/[<>"']|&(?!#?\w+;)/g,k8={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fe=t=>k8[t];function O1(t,e){if(e){if(v8.test(t))return t.replace(x8,fe)}else if(g8.test(t))return t.replace(m8,fe);return t}const f8=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function A6(t){return t.replace(f8,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const $8=/(^|[^\[])\^/g;function R1(t,e){t=typeof t=="string"?t:t.source,e=e||"";const n={replace:(l,i)=>(i=i.source||i,i=i.replace($8,"$1"),t=t.replace(l,i),n),getRegex:()=>new RegExp(t,e)};return n}const M8=/[^\w:]/g,C8=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function $e(t,e,n){if(t){let l;try{l=decodeURIComponent(A6(n)).replace(M8,"").toLowerCase()}catch{return null}if(l.indexOf("javascript:")===0||l.indexOf("vbscript:")===0||l.indexOf("data:")===0)return null}e&&!C8.test(n)&&(n=L8(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const mt={},z8=/^[^:]+:\/*[^/]*$/,B8=/^([^:]+:)[\s\S]*$/,H8=/^([^:]+:\/*[^/]*)[\s\S]*$/;function L8(t,e){mt[" "+t]||(z8.test(t)?mt[" "+t]=t+"/":mt[" "+t]=Ct(t,"/",!0)),t=mt[" "+t];const n=t.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(B8,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(H8,"$1")+e:t+e}const jt={exec:function(){}};function u2(t){let e=1,n,l;for(;e<arguments.length;e++){n=arguments[e];for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t}function Me(t,e){const n=t.replace(/\|/g,(a,d,w)=>{let _=!1,p=d;for(;--p>=0&&w[p]==="\\";)_=!_;return _?"|":" |"}),l=n.split(/ \|/);let i=0;if(l[0].trim()||l.shift(),l.length>0&&!l[l.length-1].trim()&&l.pop(),l.length>e)l.splice(e);else for(;l.length<e;)l.push("");for(;i<l.length;i++)l[i]=l[i].trim().replace(/\\\|/g,"|");return l}function Ct(t,e,n){const l=t.length;if(l===0)return"";let i=0;for(;i<l;){const a=t.charAt(l-i-1);if(a===e&&!n)i++;else if(a!==e&&n)i++;else break}return t.slice(0,l-i)}function y8(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let l=0,i=0;for(;i<n;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])l++;else if(t[i]===e[1]&&(l--,l<0))return i;return-1}function j6(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Ce(t,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=t),e>>=1,t+=t;return n+t}function ze(t,e,n,l){const i=e.href,a=e.title?O1(e.title):null,d=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){l.state.inLink=!0;const w={type:"link",raw:n,href:i,title:a,text:d,tokens:l.inlineTokens(d,[])};return l.state.inLink=!1,w}return{type:"image",raw:n,href:i,title:a,text:O1(d)}}function V8(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const l=n[1];return e.split(`
`).map(i=>{const a=i.match(/^\s+/);if(a===null)return i;const[d]=a;return d.length>=l.length?i.slice(l.length):i}).join(`
`)}class h4{constructor(e){this.options=e||z3}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const l=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?l:Ct(l,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const l=n[0],i=V8(l,n[3]||"");return{type:"code",raw:l,lang:n[2]?n[2].trim():n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let l=n[2].trim();if(/#$/.test(l)){const a=Ct(l,"#");(this.options.pedantic||!a||/ $/.test(a))&&(l=a.trim())}const i={type:"heading",raw:n[0],depth:n[1].length,text:l,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const l=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(l,[]),text:l}}}list(e){let n=this.rules.block.list.exec(e);if(n){let l,i,a,d,w,_,p,u,g,v,x,k,C=n[1].trim();const B=C.length>1,f={type:"list",raw:"",ordered:B,start:B?+C.slice(0,-1):"",loose:!1,items:[]};C=B?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=B?C:"[*+-]");const M=new RegExp(`^( {0,3}${C})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(k=!1,!(!(n=M.exec(e))||this.rules.block.hr.test(e)));){if(l=n[0],e=e.substring(l.length),u=n[2].split(`
`,1)[0],g=e.split(`
`,1)[0],this.options.pedantic?(d=2,x=u.trimLeft()):(d=n[2].search(/[^ ]/),d=d>4?1:d,x=u.slice(d),d+=n[1].length),_=!1,!u&&/^ *$/.test(g)&&(l+=g+`
`,e=e.substring(g.length+1),k=!0),!k){const H=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),I=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:\`\`\`|~~~)`),K=new RegExp(`^ {0,${Math.min(3,d-1)}}#`);for(;e&&(v=e.split(`
`,1)[0],u=v,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(I.test(u)||K.test(u)||H.test(u)||A.test(e)));){if(u.search(/[^ ]/)>=d||!u.trim())x+=`
`+u.slice(d);else if(!_)x+=`
`+u;else break;!_&&!u.trim()&&(_=!0),l+=v+`
`,e=e.substring(v.length+1)}}f.loose||(p?f.loose=!0:/\n *\n *$/.test(l)&&(p=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(x),i&&(a=i[0]!=="[ ] ",x=x.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:l,task:!!i,checked:a,loose:!1,text:x}),f.raw+=l}f.items[f.items.length-1].raw=l.trimRight(),f.items[f.items.length-1].text=x.trimRight(),f.raw=f.raw.trimRight();const y=f.items.length;for(w=0;w<y;w++){this.lexer.state.top=!1,f.items[w].tokens=this.lexer.blockTokens(f.items[w].text,[]);const H=f.items[w].tokens.filter(I=>I.type==="space"),A=H.every(I=>{const K=I.raw.split("");let R=0;for(const J of K)if(J===`
`&&(R+=1),R>1)return!0;return!1});!f.loose&&H.length&&A&&(f.loose=!0,f.items[w].loose=!0)}return f}}html(e){const n=this.rules.block.html.exec(e);if(n){const l={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(l.type="paragraph",l.text=this.options.sanitizer?this.options.sanitizer(n[0]):O1(n[0]),l.tokens=[],this.lexer.inline(l.text,l.tokens)),l}}def(e){const n=this.rules.block.def.exec(e);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const l=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:l,raw:n[0],href:n[2],title:n[3]}}}table(e){const n=this.rules.block.table.exec(e);if(n){const l={type:"table",header:Me(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(l.header.length===l.align.length){l.raw=n[0];let i=l.align.length,a,d,w,_;for(a=0;a<i;a++)/^ *-+: *$/.test(l.align[a])?l.align[a]="right":/^ *:-+: *$/.test(l.align[a])?l.align[a]="center":/^ *:-+ *$/.test(l.align[a])?l.align[a]="left":l.align[a]=null;for(i=l.rows.length,a=0;a<i;a++)l.rows[a]=Me(l.rows[a],l.header.length).map(p=>({text:p}));for(i=l.header.length,d=0;d<i;d++)l.header[d].tokens=[],this.lexer.inline(l.header[d].text,l.header[d].tokens);for(i=l.rows.length,d=0;d<i;d++)for(_=l.rows[d],w=0;w<_.length;w++)_[w].tokens=[],this.lexer.inline(_[w].text,_[w].tokens);return l}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n){const l={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const l={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}text(e){const n=this.rules.block.text.exec(e);if(n){const l={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:O1(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):O1(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const l=n[2].trim();if(!this.options.pedantic&&/^</.test(l)){if(!/>$/.test(l))return;const d=Ct(l.slice(0,-1),"\\");if((l.length-d.length)%2===0)return}else{const d=y8(n[2],"()");if(d>-1){const _=(n[0].indexOf("!")===0?5:4)+n[1].length+d;n[2]=n[2].substring(0,d),n[0]=n[0].substring(0,_).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const d=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);d&&(i=d[1],a=d[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(l)?i=i.slice(1):i=i.slice(1,-1)),ze(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let l;if((l=this.rules.inline.reflink.exec(e))||(l=this.rules.inline.nolink.exec(e))){let i=(l[2]||l[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i||!i.href){const a=l[0].charAt(0);return{type:"text",raw:a,text:a}}return ze(l,i,l[0],this.lexer)}}emStrong(e,n,l=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&l.match(/[\p{L}\p{N}]/u))return;const a=i[1]||i[2]||"";if(!a||a&&(l===""||this.rules.inline.punctuation.exec(l))){const d=i[0].length-1;let w,_,p=d,u=0;const g=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+d);(i=g.exec(n))!=null;){if(w=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!w)continue;if(_=w.length,i[3]||i[4]){p+=_;continue}else if((i[5]||i[6])&&d%3&&!((d+_)%3)){u+=_;continue}if(p-=_,p>0)continue;if(_=Math.min(_,_+p+u),Math.min(d,_)%2){const x=e.slice(1,d+i.index+_);return{type:"em",raw:e.slice(0,d+i.index+_+1),text:x,tokens:this.lexer.inlineTokens(x,[])}}const v=e.slice(2,d+i.index+_-1);return{type:"strong",raw:e.slice(0,d+i.index+_+1),text:v,tokens:this.lexer.inlineTokens(v,[])}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let l=n[2].replace(/\n/g," ");const i=/[^ ]/.test(l),a=/^ /.test(l)&&/ $/.test(l);return i&&a&&(l=l.substring(1,l.length-1)),l=O1(l,!0),{type:"codespan",raw:n[0],text:l}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(e,n){const l=this.rules.inline.autolink.exec(e);if(l){let i,a;return l[2]==="@"?(i=O1(this.options.mangle?n(l[1]):l[1]),a="mailto:"+i):(i=O1(l[1]),a=i),{type:"link",raw:l[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(e,n){let l;if(l=this.rules.inline.url.exec(e)){let i,a;if(l[2]==="@")i=O1(this.options.mangle?n(l[0]):l[0]),a="mailto:"+i;else{let d;do d=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])[0];while(d!==l[0]);i=O1(l[0]),l[1]==="www."?a="http://"+i:a=i}return{type:"link",raw:l[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,n){const l=this.rules.inline.text.exec(e);if(l){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):O1(l[0]):l[0]:i=O1(this.options.smartypants?n(l[0]):l[0]),{type:"text",raw:l[0],text:i}}}}const r1={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:jt,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};r1._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;r1._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;r1.def=R1(r1.def).replace("label",r1._label).replace("title",r1._title).getRegex();r1.bullet=/(?:[*+-]|\d{1,9}[.)])/;r1.listItemStart=R1(/^( *)(bull) */).replace("bull",r1.bullet).getRegex();r1.list=R1(r1.list).replace(/bull/g,r1.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+r1.def.source+")").getRegex();r1._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";r1._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;r1.html=R1(r1.html,"i").replace("comment",r1._comment).replace("tag",r1._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();r1.paragraph=R1(r1._paragraph).replace("hr",r1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",r1._tag).getRegex();r1.blockquote=R1(r1.blockquote).replace("paragraph",r1.paragraph).getRegex();r1.normal=u2({},r1);r1.gfm=u2({},r1.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});r1.gfm.table=R1(r1.gfm.table).replace("hr",r1.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",r1._tag).getRegex();r1.gfm.paragraph=R1(r1._paragraph).replace("hr",r1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",r1.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",r1._tag).getRegex();r1.pedantic=u2({},r1.normal,{html:R1(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",r1._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:jt,paragraph:R1(r1.normal._paragraph).replace("hr",r1.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",r1.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const G={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:jt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:jt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};G._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";G.punctuation=R1(G.punctuation).replace(/punctuation/g,G._punctuation).getRegex();G.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;G.escapedEmSt=/\\\*|\\_/g;G._comment=R1(r1._comment).replace("(?:-->|$)","-->").getRegex();G.emStrong.lDelim=R1(G.emStrong.lDelim).replace(/punct/g,G._punctuation).getRegex();G.emStrong.rDelimAst=R1(G.emStrong.rDelimAst,"g").replace(/punct/g,G._punctuation).getRegex();G.emStrong.rDelimUnd=R1(G.emStrong.rDelimUnd,"g").replace(/punct/g,G._punctuation).getRegex();G._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;G._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;G._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;G.autolink=R1(G.autolink).replace("scheme",G._scheme).replace("email",G._email).getRegex();G._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;G.tag=R1(G.tag).replace("comment",G._comment).replace("attribute",G._attribute).getRegex();G._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;G._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;G._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;G.link=R1(G.link).replace("label",G._label).replace("href",G._href).replace("title",G._title).getRegex();G.reflink=R1(G.reflink).replace("label",G._label).replace("ref",r1._label).getRegex();G.nolink=R1(G.nolink).replace("ref",r1._label).getRegex();G.reflinkSearch=R1(G.reflinkSearch,"g").replace("reflink",G.reflink).replace("nolink",G.nolink).getRegex();G.normal=u2({},G);G.pedantic=u2({},G.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:R1(/^!?\[(label)\]\((.*?)\)/).replace("label",G._label).getRegex(),reflink:R1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",G._label).getRegex()});G.gfm=u2({},G.normal,{escape:R1(G.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});G.gfm.url=R1(G.gfm.url,"i").replace("email",G.gfm._extended_email).getRegex();G.breaks=u2({},G.gfm,{br:R1(G.br).replace("{2,}","*").getRegex(),text:R1(G.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function b8(t){return t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Be(t){let e="",n,l;const i=t.length;for(n=0;n<i;n++)l=t.charCodeAt(n),Math.random()>.5&&(l="x"+l.toString(16)),e+="&#"+l+";";return e}class L2{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||z3,this.options.tokenizer=this.options.tokenizer||new h4,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:r1.normal,inline:G.normal};this.options.pedantic?(n.block=r1.pedantic,n.inline=G.pedantic):this.options.gfm&&(n.block=r1.gfm,this.options.breaks?n.inline=G.breaks:n.inline=G.gfm),this.tokenizer.rules=n}static get rules(){return{block:r1,inline:G}}static lex(e,n){return new L2(n).lex(e)}static lexInline(e,n){return new L2(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(w,_,p)=>_+"    ".repeat(p.length));let l,i,a,d;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(w=>(l=w.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))){if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length),l.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+l.raw,i.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let w=1/0;const _=e.slice(1);let p;this.options.extensions.startBlock.forEach(function(u){p=u.call({lexer:this},_),typeof p=="number"&&p>=0&&(w=Math.min(w,p))}),w<1/0&&w>=0&&(a=e.substring(0,w+1))}if(this.state.top&&(l=this.tokenizer.paragraph(a))){i=n[n.length-1],d&&i.type==="paragraph"?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l),d=a.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l);continue}if(e){const w="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(w);break}else throw new Error(w)}}return this.state.top=!0,n}inline(e,n){this.inlineQueue.push({src:e,tokens:n})}inlineTokens(e,n=[]){let l,i,a,d=e,w,_,p;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(w=this.tokenizer.rules.inline.reflinkSearch.exec(d))!=null;)u.includes(w[0].slice(w[0].lastIndexOf("[")+1,-1))&&(d=d.slice(0,w.index)+"["+Ce("a",w[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(w=this.tokenizer.rules.inline.blockSkip.exec(d))!=null;)d=d.slice(0,w.index)+"["+Ce("a",w[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(w=this.tokenizer.rules.inline.escapedEmSt.exec(d))!=null;)d=d.slice(0,w.index)+"++"+d.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(_||(p=""),_=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(l=u.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))){if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&l.type==="text"&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length),i=n[n.length-1],i&&l.type==="text"&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(l=this.tokenizer.emStrong(e,d,p)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.del(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.autolink(e,Be)){e=e.substring(l.raw.length),n.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e,Be))){e=e.substring(l.raw.length),n.push(l);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const g=e.slice(1);let v;this.options.extensions.startInline.forEach(function(x){v=x.call({lexer:this},g),typeof v=="number"&&v>=0&&(u=Math.min(u,v))}),u<1/0&&u>=0&&(a=e.substring(0,u+1))}if(l=this.tokenizer.inlineText(a,b8)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(p=l.raw.slice(-1)),_=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class d4{constructor(e){this.options=e||z3}code(e,n,l){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(e,i);a!=null&&a!==e&&(l=!0,e=a)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+O1(i,!0)+'">'+(l?e:O1(e,!0))+`</code></pre>
`:"<pre><code>"+(l?e:O1(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,l,i){if(this.options.headerIds){const a=this.options.headerPrefix+i.slug(l);return`<h${n} id="${a}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,l){const i=n?"ol":"ul",a=n&&l!==1?' start="'+l+'"':"";return"<"+i+a+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const l=n.header?"th":"td";return(n.align?`<${l} align="${n.align}">`:`<${l}>`)+e+`</${l}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,l){if(e=$e(this.options.sanitize,this.options.baseUrl,e),e===null)return l;let i='<a href="'+O1(e)+'"';return n&&(i+=' title="'+n+'"'),i+=">"+l+"</a>",i}image(e,n,l){if(e=$e(this.options.sanitize,this.options.baseUrl,e),e===null)return l;let i=`<img src="${e}" alt="${l}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class P6{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,l){return""+l}image(e,n,l){return""+l}br(){return""}}class R6{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let l=e,i=0;if(this.seen.hasOwnProperty(l)){i=this.seen[e];do i++,l=e+"-"+i;while(this.seen.hasOwnProperty(l))}return n||(this.seen[e]=i,this.seen[l]=0),l}slug(e,n={}){const l=this.serialize(e);return this.getNextSafeSlug(l,n.dryrun)}}class y2{constructor(e){this.options=e||z3,this.options.renderer=this.options.renderer||new d4,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new P6,this.slugger=new R6}static parse(e,n){return new y2(n).parse(e)}static parseInline(e,n){return new y2(n).parseInline(e)}parse(e,n=!0){let l="",i,a,d,w,_,p,u,g,v,x,k,C,B,f,M,y,H,A,I;const K=e.length;for(i=0;i<K;i++){if(x=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[x.type]&&(I=this.options.extensions.renderers[x.type].call({parser:this},x),I!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(x.type))){l+=I||"";continue}switch(x.type){case"space":continue;case"hr":{l+=this.renderer.hr();continue}case"heading":{l+=this.renderer.heading(this.parseInline(x.tokens),x.depth,A6(this.parseInline(x.tokens,this.textRenderer)),this.slugger);continue}case"code":{l+=this.renderer.code(x.text,x.lang,x.escaped);continue}case"table":{for(g="",u="",w=x.header.length,a=0;a<w;a++)u+=this.renderer.tablecell(this.parseInline(x.header[a].tokens),{header:!0,align:x.align[a]});for(g+=this.renderer.tablerow(u),v="",w=x.rows.length,a=0;a<w;a++){for(p=x.rows[a],u="",_=p.length,d=0;d<_;d++)u+=this.renderer.tablecell(this.parseInline(p[d].tokens),{header:!1,align:x.align[d]});v+=this.renderer.tablerow(u)}l+=this.renderer.table(g,v);continue}case"blockquote":{v=this.parse(x.tokens),l+=this.renderer.blockquote(v);continue}case"list":{for(k=x.ordered,C=x.start,B=x.loose,w=x.items.length,v="",a=0;a<w;a++)M=x.items[a],y=M.checked,H=M.task,f="",M.task&&(A=this.renderer.checkbox(y),B?M.tokens.length>0&&M.tokens[0].type==="paragraph"?(M.tokens[0].text=A+" "+M.tokens[0].text,M.tokens[0].tokens&&M.tokens[0].tokens.length>0&&M.tokens[0].tokens[0].type==="text"&&(M.tokens[0].tokens[0].text=A+" "+M.tokens[0].tokens[0].text)):M.tokens.unshift({type:"text",text:A}):f+=A),f+=this.parse(M.tokens,B),v+=this.renderer.listitem(f,H,y);l+=this.renderer.list(v,k,C);continue}case"html":{l+=this.renderer.html(x.text);continue}case"paragraph":{l+=this.renderer.paragraph(this.parseInline(x.tokens));continue}case"text":{for(v=x.tokens?this.parseInline(x.tokens):x.text;i+1<K&&e[i+1].type==="text";)x=e[++i],v+=`
`+(x.tokens?this.parseInline(x.tokens):x.text);l+=n?this.renderer.paragraph(v):v;continue}default:{const R='Token with "'+x.type+'" type was not found.';if(this.options.silent){console.error(R);return}else throw new Error(R)}}}return l}parseInline(e,n){n=n||this.renderer;let l="",i,a,d;const w=e.length;for(i=0;i<w;i++){if(a=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(d=this.options.extensions.renderers[a.type].call({parser:this},a),d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type))){l+=d||"";continue}switch(a.type){case"escape":{l+=n.text(a.text);break}case"html":{l+=n.html(a.text);break}case"link":{l+=n.link(a.href,a.title,this.parseInline(a.tokens,n));break}case"image":{l+=n.image(a.href,a.title,a.text);break}case"strong":{l+=n.strong(this.parseInline(a.tokens,n));break}case"em":{l+=n.em(this.parseInline(a.tokens,n));break}case"codespan":{l+=n.codespan(a.text);break}case"br":{l+=n.br();break}case"del":{l+=n.del(this.parseInline(a.tokens,n));break}case"text":{l+=n.text(a.text);break}default:{const _='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(_);return}else throw new Error(_)}}}return l}}function s1(t,e,n){if(typeof t=="undefined"||t===null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=u2({},s1.defaults,e||{}),j6(e),n){const l=e.highlight;let i;try{i=L2.lex(t,e)}catch(w){return n(w)}const a=function(w){let _;if(!w)try{e.walkTokens&&s1.walkTokens(i,e.walkTokens),_=y2.parse(i,e)}catch(p){w=p}return e.highlight=l,w?n(w):n(null,_)};if(!l||l.length<3||(delete e.highlight,!i.length))return a();let d=0;s1.walkTokens(i,function(w){w.type==="code"&&(d++,setTimeout(()=>{l(w.text,w.lang,function(_,p){if(_)return a(_);p!=null&&p!==w.text&&(w.text=p,w.escaped=!0),d--,d===0&&a()})},0))}),d===0&&a();return}try{const l=L2.lex(t,e);return e.walkTokens&&s1.walkTokens(l,e.walkTokens),y2.parse(l,e)}catch(l){if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+O1(l.message+"",!0)+"</pre>";throw l}}s1.options=s1.setOptions=function(t){return u2(s1.defaults,t),u8(s1.defaults),s1};s1.getDefaults=S6;s1.defaults=z3;s1.use=function(...t){const e=u2({},...t),n=s1.defaults.extensions||{renderers:{},childTokens:{}};let l;t.forEach(i=>{if(i.extensions&&(l=!0,i.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const d=n.renderers?n.renderers[a.name]:null;d?n.renderers[a.name]=function(...w){let _=a.renderer.apply(this,w);return _===!1&&(_=d.apply(this,w)),_}:n.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[a.level]?n[a.level].unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}a.childTokens&&(n.childTokens[a.name]=a.childTokens)})),i.renderer){const a=s1.defaults.renderer||new d4;for(const d in i.renderer){const w=a[d];a[d]=(..._)=>{let p=i.renderer[d].apply(a,_);return p===!1&&(p=w.apply(a,_)),p}}e.renderer=a}if(i.tokenizer){const a=s1.defaults.tokenizer||new h4;for(const d in i.tokenizer){const w=a[d];a[d]=(..._)=>{let p=i.tokenizer[d].apply(a,_);return p===!1&&(p=w.apply(a,_)),p}}e.tokenizer=a}if(i.walkTokens){const a=s1.defaults.walkTokens;e.walkTokens=function(d){i.walkTokens.call(this,d),a&&a.call(this,d)}}l&&(e.extensions=n),s1.setOptions(e)})};s1.walkTokens=function(t,e){for(const n of t)switch(e.call(s1,n),n.type){case"table":{for(const l of n.header)s1.walkTokens(l.tokens,e);for(const l of n.rows)for(const i of l)s1.walkTokens(i.tokens,e);break}case"list":{s1.walkTokens(n.items,e);break}default:s1.defaults.extensions&&s1.defaults.extensions.childTokens&&s1.defaults.extensions.childTokens[n.type]?s1.defaults.extensions.childTokens[n.type].forEach(function(l){s1.walkTokens(n[l],e)}):n.tokens&&s1.walkTokens(n.tokens,e)}};s1.parseInline=function(t,e){if(typeof t=="undefined"||t===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=u2({},s1.defaults,e||{}),j6(e);try{const n=L2.lexInline(t,e);return e.walkTokens&&s1.walkTokens(n,e.walkTokens),y2.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+O1(n.message+"",!0)+"</pre>";throw n}};s1.Parser=y2;s1.parser=y2.parse;s1.Renderer=d4;s1.TextRenderer=P6;s1.Lexer=L2;s1.lexer=L2.lex;s1.Tokenizer=h4;s1.Slugger=R6;s1.parse=s1;s1.options;s1.setOptions;s1.use;s1.walkTokens;s1.parseInline;y2.parse;L2.lex;function q3(t){return!!fr()&&($r(t),!0)}var He;const tt=typeof window!="undefined",s0=()=>{};function D6(t,e){return function(...n){t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})}}tt&&((He=window==null?void 0:window.navigator)==null?void 0:He.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const T6=t=>t();function S8(t,e=200,n={}){return D6(function(l,i={}){let a,d;return w=>{const _=G1(l),p=G1(i.maxWait);if(a&&clearTimeout(a),_<=0||p!==void 0&&p<=0)return d&&(clearTimeout(d),d=null),w();p&&!d&&(d=setTimeout(()=>{a&&clearTimeout(a),d=null,w()},p)),a=setTimeout(()=>{d&&clearTimeout(d),d=null,w()},_)}}(e,n),t)}var Le=Object.getOwnPropertySymbols,A8=Object.prototype.hasOwnProperty,j8=Object.prototype.propertyIsEnumerable;function P8(t,e,n={}){const l=n,{eventFilter:i=T6}=l,a=((d,w)=>{var _={};for(var p in d)A8.call(d,p)&&w.indexOf(p)<0&&(_[p]=d[p]);if(d!=null&&Le)for(var p of Le(d))w.indexOf(p)<0&&j8.call(d,p)&&(_[p]=d[p]);return _})(l,["eventFilter"]);return K1(t,D6(i,e),a)}var R8=Object.defineProperty,D8=Object.defineProperties,T8=Object.getOwnPropertyDescriptors,kt=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,be=(t,e,n)=>e in t?R8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;function F8(t,e,n={}){const l=n,{eventFilter:i}=l,a=((v,x)=>{var k={};for(var C in v)ye.call(v,C)&&x.indexOf(C)<0&&(k[C]=v[C]);if(v!=null&&kt)for(var C of kt(v))x.indexOf(C)<0&&Ve.call(v,C)&&(k[C]=v[C]);return k})(l,["eventFilter"]),{eventFilter:d,pause:w,resume:_,isActive:p}=function(v=T6){const x=X(!0);return{isActive:x,pause:function(){x.value=!1},resume:function(){x.value=!0},eventFilter:(...k)=>{x.value&&v(...k)}}}(i),u=P8(t,e,(g=((v,x)=>{for(var k in x||(x={}))ye.call(x,k)&&be(v,k,x[k]);if(kt)for(var k of kt(x))Ve.call(x,k)&&be(v,k,x[k]);return v})({},a),D8(g,T8({eventFilter:d}))));var g;return{stop:u,pause:w,resume:_,isActive:p}}const Pt=tt?window:void 0,E8=tt?window.document:void 0;function I8(...t){let e,n,l,i;if(typeof t[0]=="string"?([n,l,i]=t,e=Pt):[e,n,l,i]=t,!e)return s0;let a=s0;const d=K1(()=>function(_){var p;const u=G1(_);return(p=u==null?void 0:u.$el)!=null?p:u}(e),_=>{a(),_&&(_.addEventListener(n,l,i),a=()=>{_.removeEventListener(n,l,i),a=s0})},{immediate:!0,flush:"post"}),w=()=>{d(),a()};return q3(w),w}const R0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D0="__vueuse_ssr_handlers__";R0[D0]=R0[D0]||{};const U8=R0[D0],O8={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function et(t,e,n,l={}){var i;const{flush:a="pre",deep:d=!0,listenToStorageChanges:w=!0,writeDefaults:_=!0,shallow:p,window:u=Pt,eventFilter:g,onError:v=H=>{console.error(H)}}=l,x=(p?$n:X)(e);if(!n)try{n=function(H,A){return U8[H]||A}("getDefaultStorage",()=>{var H;return(H=Pt)==null?void 0:H.localStorage})()}catch(H){v(H)}if(!n)return x;const k=G1(e),C=function(H){return H==null?"any":H instanceof Set?"set":H instanceof Map?"map":H instanceof Date?"date":typeof H=="boolean"?"boolean":typeof H=="string"?"string":typeof H=="object"||Array.isArray(H)?"object":Number.isNaN(H)?"any":"number"}(k),B=(i=l.serializer)!=null?i:O8[C],{pause:f,resume:M}=F8(x,()=>function(H){try{H==null?n.removeItem(t):n.setItem(t,B.write(H))}catch(A){v(A)}}(x.value),{flush:a,deep:d,eventFilter:g});return u&&w&&I8(u,"storage",y),y(),x;function y(H){H&&H.key!==t||(x.value=function(A){if(!A||A.key===t){f();try{const I=A?A.newValue:n.getItem(t);return I==null?(_&&k!==null&&n.setItem(t,B.write(k)),k):typeof I!="string"?I:B.read(I)}catch(I){v(I)}finally{M()}}}(H))}}var Se,S3,q8=Object.defineProperty,Ae=Object.getOwnPropertySymbols,G8=Object.prototype.hasOwnProperty,N8=Object.prototype.propertyIsEnumerable,je=(t,e,n)=>e in t?q8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;function K8(t={}){const{controls:e=!1,interval:n="requestAnimationFrame"}=t,l=X(new Date),i=()=>l.value=new Date,a=n==="requestAnimationFrame"?function(d,w={}){const{immediate:_=!0,window:p=Pt}=w,u=X(!1);let g=null;function v(){u.value&&p&&(d(),g=p.requestAnimationFrame(v))}function x(){!u.value&&p&&(u.value=!0,v())}function k(){u.value=!1,g!=null&&p&&(p.cancelAnimationFrame(g),g=null)}return _&&x(),q3(k),{isActive:u,pause:k,resume:x}}(i,{immediate:!0}):function(d,w=1e3,_={}){const{immediate:p=!0,immediateCallback:u=!1}=_;let g=null;const v=X(!1);function x(){g&&(clearInterval(g),g=null)}function k(){v.value=!1,x()}function C(){G1(w)<=0||(v.value=!0,u&&d(),x(),g=setInterval(d,G1(w)))}return p&&tt&&C(),N1(w)&&q3(K1(w,()=>{p&&tt&&C()})),q3(k),{isActive:v,pause:k,resume:C}}(i,n,{immediate:!0});return e?((d,w)=>{for(var _ in w||(w={}))G8.call(w,_)&&je(d,_,w[_]);if(Ae)for(var _ of Ae(w))N8.call(w,_)&&je(d,_,w[_]);return d})({now:l},a):l}(S3=Se||(Se={})).UP="UP",S3.RIGHT="RIGHT",S3.DOWN="DOWN",S3.LEFT="LEFT",S3.NONE="NONE";let W8=0;const w4=({size:t})=>O("svg",{width:t,height:t,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},O("circle",{cx:50,cy:50,fill:"none",stroke:"currentColor",strokeWidth:"4",r:"40","stroke-dasharray":"85 30"},O("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})));var Jt=(t,e)=>{const n=t.__vccOpts||t;for(const[l,i]of e)n[l]=i;return n};const J8=s({name:"ImageWall",components:{LoadingIcon:w4},props:{items:{type:Array,default:()=>[]},columnWidth:{type:Number,default:300},gap:{type:Number,default:0}},emit:["insert"],setup(t){let e=null;const n=X(null),l=X({}),i=X([]),a=()=>{const _=Math.floor((n.value.getBoundingClientRect().width+t.gap)/(t.columnWidth+t.gap));return _>0?_:1},d=async _=>{var u;if(_>=t.items.length)return;await Z0();const p=Array.from(((u=n.value)==null?void 0:u.children)||[]).reduce((g,v)=>v.getBoundingClientRect().height<g.getBoundingClientRect().height?v:g);i.value[Number(p.dataset.index)].push(_),await d(_+1)},w=async(_=!1)=>{if(i.value.length===a()&&!_)return;var p;i.value=(p=a(),new Array(p).fill(null).map(()=>[]));const u=window.scrollY;await d(0),window.scrollTo({top:u})};return K1(()=>[t.items],()=>{l.value={},w(!0)}),K1(()=>[t.columnWidth,t.gap],()=>w()),X1(()=>{w(!0),e=new ResizeObserver(()=>w()),e.observe(n.value)}),lt(()=>e.unobserve(n.value)),{columns:i,state:l,wall:n}}}),Y8=["data-index"],X8=["src","title","onLoad","onClick"];var Q8=Jt(J8,[["render",function(t,e,n,l,i,a){const d=E1("LoadingIcon");return o(),c("div",{ref:"wall",class:"wl-gallery",style:B2({gap:`${t.gap}px`})},[(o(!0),c(V1,null,z2(t.columns,(w,_)=>(o(),c("div",{key:_,class:"wl-gallery-column","data-index":_,style:B2({gap:`${t.gap}px`})},[(o(!0),c(V1,null,z2(w,p=>(o(),c(V1,{key:p},[t.state[t.items[p].src]?u1("v-if",!0):(o(),m2(d,{key:0,size:36,style:{margin:"20px auto"}})),r("img",{class:"wl-gallery-item",src:t.items[p].src,title:t.items[p].title,loading:"lazy",onLoad:u=>t.state[t.items[p].src]=!0,onClick:u=>t.$emit("insert",`![](${t.items[p].src})`)},null,40,X8)],64))),128))],12,Y8))),128))],4)}],["__file","ImageWall.vue"]]);const Z8=["nick","mail","link"],Pe=t=>t.filter(e=>Z8.includes(e)),ts=t=>new Promise((e,n)=>{const l=new FileReader;l.readAsDataURL(t),l.onload=()=>{var i;return e(((i=l.result)==null?void 0:i.toString())||"")},l.onerror=n}),es=t=>t===!0?'<p class="wl-tex">Tex is not available in preview</p>':'<span class="wl-tex">Tex is not available in preview</span>',ns=()=>{const t={next:""},e=({keyword:n,pos:l})=>{const i=new URLSearchParams("media_filter=minimal");return i.set("key","PAY5JLFIH6V6"),i.set("limit","20"),i.set("pos",l||""),i.set("q",n),fetch(`https://g.tenor.com/v1/search?${i.toString()}`,{headers:{"Content-Type":"application/json"}}).then(a=>a.json()).catch(()=>({next:l||"",results:[]}))};return{search:(n="")=>e({keyword:n}).then(l=>(t.next=l.next,l.results.map(i=>({title:i.title,src:i.media[0].tinygif.url})))),more:n=>e({keyword:n,pos:t.next}).then(l=>(t.next=l.next,l.results.map(i=>({title:i.title,src:i.media[0].tinygif.url}))))}},rs=new RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`,"gmi"),Re=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],l0={},os=t=>{let e=0;return t.replace(rs,(n,l,i)=>{if(i)return`<span style="color: slategray">${i}</span>`;if(l==="<")return"&lt;";let a;l0[l]?a=l0[l]:(a=Re[e],l0[l]=a);const d=`<span style="color: #${a}">${l}</span>`;return e=++e%Re.length,d})},cs=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder"],B3=t=>Object.fromEntries(t.map((e,n)=>[cs[n],e]));var i0=B3(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words",`Please input comments between $0 and $1 words!
 Current word number: $2`,"Anonymous","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Search GIF"]),a0=B3(["\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0","3\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044.","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044.","\u30B5\u30A4\u30C8","\u30AA\u30D7\u30B7\u30E7\u30F3","\u3053\u3053\u306B\u30B3\u30E1\u30F3\u30C8","\u30B3\u30E1\u30F3\u30C8\u3057\u307E\u3057\u3087\u3046~","\u63D0\u51FA\u3059\u308B","Like","Cancel like","\u8FD4\u4FE1\u3059\u308B","\u30AD\u30E3\u30F3\u30BB\u30EB","\u30B3\u30E1\u30F3\u30C8","\u66F4\u65B0","\u3055\u3089\u306B\u8AAD\u307F\u8FBC\u3080","\u30D7\u30EC\u30D3\u30E5\u30FC","\u7D75\u6587\u5B57","\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u79D2\u524D","\u5206\u524D","\u6642\u9593\u524D","\u65E5\u524D","\u305F\u3063\u3060\u4ECA","\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u30ED\u30B0\u30A4\u30F3\u3059\u308B","\u30ED\u30B0\u30A2\u30A6\u30C8","\u7BA1\u7406\u8005","\u30C8\u30C3\u30D7\u306B\u7F6E\u304F","\u30EF\u30FC\u30C9",`\u30B3\u30E1\u30F3\u30C8\u306F $0 \u304B\u3089 $1 \u30EF\u30FC\u30C9\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093!
 \u73FE\u5728\u306E\u5358\u8A9E\u756A\u53F7: $2`,"\u533F\u540D","\u3046\u3048\u306B\u3093","\u306A\u304B\u306B\u3093","\u3057\u3082\u304A\u3057","\u7279\u306B\u3057\u3082\u304A\u3057","\u304B\u3052","\u306A\u306C\u3057","GIF","\u63A2\u3059 GIF"]),h0=B3(["\u6635\u79F0","\u6635\u79F0\u4E0D\u80FD\u5C11\u4E8E3\u4E2A\u5B57\u7B26","\u90AE\u7BB1","\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u4EF6\u5730\u5740","\u7F51\u5740","\u53EF\u9009","\u6B22\u8FCE\u8BC4\u8BBA","\u6765\u53D1\u8BC4\u8BBA\u5427~","\u63D0\u4EA4","\u559C\u6B22","\u53D6\u6D88\u559C\u6B22","\u56DE\u590D","\u53D6\u6D88\u56DE\u590D","\u8BC4\u8BBA","\u5237\u65B0","\u52A0\u8F7D\u66F4\u591A...","\u9884\u89C8","\u8868\u60C5","\u4E0A\u4F20\u56FE\u7247","\u79D2\u524D","\u5206\u949F\u524D","\u5C0F\u65F6\u524D","\u5929\u524D","\u521A\u521A","\u6B63\u5728\u4E0A\u4F20","\u767B\u5F55","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9876","\u5B57",`\u8BC4\u8BBA\u5B57\u6570\u5E94\u5728 $0 \u5230 $1 \u5B57\u4E4B\u95F4\uFF01
\u5F53\u524D\u5B57\u6570\uFF1A$2`,"\u533F\u540D","\u6F5C\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8DC3","\u8BDD\u75E8","\u4F20\u8BF4","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),De=B3(["\u66B1\u7A31","\u90F5\u7BB1","\u7DB2\u5740","\u53EF\u9078","\u66B1\u7A31\u4E0D\u80FD\u5C11\u65BC3\u500B\u5B57\u5143","\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u90F5\u4EF6\u5730\u5740","\u6B61\u8FCE\u8A55\u8AD6","\u4F86\u767C\u8A55\u8AD6\u5427~","\u63D0\u4EA4","\u559C\u6B61","\u53D6\u6D88\u559C\u6B61","\u56DE\u8986","\u53D6\u6D88\u56DE\u8986","\u8A55\u8AD6","\u5237\u65B0","\u8F09\u5165\u66F4\u591A...","\u9810\u89BD","\u8868\u60C5","\u4E0A\u50B3\u5716\u7247","\u79D2\u524D","\u5206\u9418\u524D","\u5C0F\u6642\u524D","\u5929\u524D","\u525B\u525B","\u6B63\u5728\u4E0A\u50B3","\u767B\u9304","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9802","\u5B57",`\u8A55\u8AD6\u5B57\u6578\u61C9\u5728 $0 \u5230 $1 \u5B57\u4E4B\u9593\uFF01
\u7576\u524D\u5B57\u6578\uFF1A$2`,"\u533F\u540D","\u6F5B\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8E8D","\u8A71\u7646","\u50B3\u8AAA","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),Te=B3(["Apelido","Apelido n\xE3o pode ser menor que 3 bytes.","E-Mail","Por favor, confirme seu endere\xE7o de e-mail.","Website","Opcional","Comente aqui...","Nenhum coment\xE1rio, ainda.","Enviar","Like","Cancel like","Responder","Cancelar resposta","Coment\xE1rios","Refrescar","Carregar Mais...","Visualizar","Emoji","Enviar Imagem","segundos atr\xE1s","minutos atr\xE1s","horas atr\xE1s","dias atr\xE1s","agora mesmo","Enviando","Entrar","Sair","Admin","Sticky","Palavras",`Favor enviar coment\xE1rio com $0 a $1 palavras!
 N\xFAmero de palavras atuais: $2`,"An\xF4nimo","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Pesquisar GIF"]),d0=B3(["\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C","\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 3 \u0431\u0430\u0439\u0442.","\u042D\u043B. \u0430\u0434\u0440\u0435\u0441","\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.","\u0412\u0435\u0431-\u0441\u0430\u0439\u0442","\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0437\u0434\u0435\u0441\u044C...","\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432.","\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Like","Cancel like","\u041E\u0442\u0432\u0435\u0447\u0430\u0442\u044C","\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438","\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C","\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0431\u043E\u043B\u044C\u0448\u0435...","\u041F\u0440\u0435\u0432\u044C\u044E","\u044D\u043C\u043E\u0434\u0437\u0438","\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","\u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434","\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434","\u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441","\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430","\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F","\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","\u0410\u0434\u043C\u0438\u043D","\u041B\u0438\u043F\u043A\u0438\u0439","\u0421\u043B\u043E\u0432\u0430",`\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043E\u0442 $0 \u0434\u043E $1 \u0441\u043B\u043E\u0432!
\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u043B\u043E\u0432\u0430: $2`,"\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0439","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","\u041F\u043E\u0438\u0441\u043A GIF"]);const Fe={zh:h0,"zh-cn":h0,"zh-CN":h0,"zh-tw":De,"zh-TW":De,en:i0,"en-US":i0,"en-us":i0,jp:a0,"jp-jp":a0,"jp-JP":a0,"pt-br":Te,"pt-BR":Te,ru:d0,"ru-ru":d0,"ru-RU":d0},ss=t=>{try{t=decodeURI(t)}catch{}return t},F6=(t="")=>t.replace(/\/$/u,""),E6=t=>/^(https?:)?\/\//.test(t),ls=t=>{const e=F6(t);return E6(e)?e:`https://${e}`},is=t=>Array.isArray(t)?t:!!t&&[0,t],w0=(t,e)=>typeof t=="function"?t:t!==!1&&e,_0="{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",p0=(t,e)=>{let n=t.toString();for(;n.length<e;)n="0"+n;return n},as=(t,e,n)=>{if(!t)return"";const l=typeof t=="string"?new Date(t.indexOf(" ")!==-1?t.replace(/-/g,"/"):t):t,i=e.getTime()-l.getTime(),a=Math.floor(i/864e5);if(a===0){const d=i%864e5,w=Math.floor(d/36e5);if(w===0){const _=d%36e5,p=Math.floor(_/6e4);if(p===0){const u=_%6e4;return`${Math.round(u/1e3)} ${n.seconds}`}return`${p} ${n.minutes}`}return`${w} ${n.hours}`}return a<0?n.now:a<8?`${a} ${n.days}`:(d=>{const w=p0(d.getDate(),2),_=p0(d.getMonth()+1,2);return`${p0(d.getFullYear(),2)}-${_}-${w}`})(l)},hs=t=>{const e=et("WALINE_EMOJI",{}),n=Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(t));if(n){const l=e.value[t];if(l)return Promise.resolve(l)}return fetch(`${t}/info.json`).then(l=>l.json()).then(l=>{const i={folder:t,...l};return n&&(e.value[t]=i),i})},Ee=(t,e="",n="",l="")=>`${e?`${e}/`:""}${n}${t}${l?`.${l}`:""}`,ds={"Content-Type":"application/json"},ws=({serverURL:t,lang:e,path:n,page:l,pageSize:i,signal:a,token:d})=>{const w={};return d&&(w.Authorization=`Bearer ${d}`),fetch(`${t}/comment?path=${encodeURIComponent(n)}&pageSize=${i}&page=${l}&lang=${e}`,{signal:a,headers:w}).then(_=>_.json()).then(_=>((p,u="")=>{if(typeof p=="object"&&p.errno)throw new TypeError(`Fetch ${u} failed with ${p.errno}: ${p.errmsg}`);return p})(_,"comment list"))},Ie=({serverURL:t,lang:e,token:n,objectId:l,...i})=>fetch(`${t}/comment/${l}?lang=${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(i)}).then(a=>a.json()),_s=t=>t.type.includes("image"),Ue=t=>{const e=Array.from(t).find(_s);return e?e.getAsFile():null},ps=/\$.*?\$/,us=/^\$(.*?)\$/,vs=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,I6=(t="",e={})=>t.replace(/:(.+?):/g,(n,l)=>e[l]?`<img class="wl-emoji" src="${e[l]}" alt="${l}">`:n),xs=(t,{emojiMap:e,highlighter:n,texRenderer:l})=>{if(s1.setOptions({highlight:n||void 0,breaks:!0,smartLists:!0,smartypants:!0}),l){const i=(a=>[{name:"blockMath",level:"block",tokenizer(d){const w=vs.exec(d);if(w!==null)return{type:"html",raw:w[0],text:a(!0,w[1])}}},{name:"inlineMath",level:"inline",start(d){const w=d.search(ps);return w!==-1?w:d.length},tokenizer(d){const w=us.exec(d);if(w!==null)return{type:"html",raw:w[0],text:a(!1,w[1])}}}])(l);s1.use({extensions:i})}return s1.parse(I6(t,e))};let Oe=null;const _4=()=>Oe||(Oe=et("USER_KEY",{}));let qe=null;const U6=()=>qe||(qe=et("WALINE_LIKE",[])),gs=s({name:"CommentBox",components:{CloseIcon:({size:t})=>O("svg",{class:"wl-close-icon",viewBox:"0 0 1024 1024",width:t,height:t},[O("path",{d:"M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",fill:"currentColor"}),O("path",{d:"m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",fill:"#888"})]),EmojiIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},O("path",{d:"M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",fill:"currentColor"})),ImageIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[O("path",{d:"M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",fill:"currentColor"}),O("path",{d:"M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",fill:"currentColor"})]),ImageWall:Q8,MarkdownIcon:()=>O("svg",{width:"16",height:"16",ariaHidden:"true"},O("path",{d:"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",fill:"currentColor"})),PreviewIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[O("path",{d:"M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",fill:"currentColor"}),O("path",{d:"M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",fill:"currentColor"})]),LoadingIcon:w4,GifIcon:()=>O("svg",{width:24,height:24,fill:"currentcolor",viewBox:"0 0 24 24"},[O("path",{style:"transform: translateY(0.5px)",d:"M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"}),O("path",{d:"M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"})])},props:{rootId:{type:String,default:""},replyId:{type:String,default:""},replyUser:{type:String,default:""}},emits:["submit","cancel-reply"],setup(t,{emit:e}){const n=T1("config"),l=et("WALINE_COMMENT_BOX_EDITOR",""),i=et("WALINE_USER_META",{nick:"",mail:"",link:""}),a=_4(),d=X({}),w=X(null),_=X(null),p=X(null),u=X(null),g=X(null),v=X(null),x=X(null),k=X({tabs:[],map:{}}),C=X(0),B=X(!1),f=X(!1),M=X(!1),y=X(""),H=X(0),A=G2({loading:!0,list:[]}),I=X(0),K=X(!1),R=X(""),J=X(!1),Z=t1(()=>n.value.locale),a1=t1(()=>{var q;return Boolean((q=a.value)==null?void 0:q.token)}),T=t1(()=>n.value.imageUploader!==!1),h1=q=>{const c1=w.value,l1=c1.selectionStart,y1=c1.selectionEnd||0,M1=c1.scrollTop;l.value=c1.value.substring(0,l1)+q+c1.value.substring(y1,c1.value.length),c1.focus(),c1.selectionStart=l1+q.length,c1.selectionEnd=l1+q.length,c1.scrollTop=M1},N=q=>{const c1=`![${n.value.locale.uploading} ${q.name}]()`;return h1(c1),Promise.resolve().then(()=>n.value.imageUploader(q)).then(l1=>{l.value=l.value.replace(c1,`\r
![${q.name}](${l1})`)})},I1=()=>{var L,F,j,W,$1;const{serverURL:q,lang:c1,login:l1,wordLimit:y1,requiredMeta:M1}=n.value,p1={comment:R.value,nick:i.value.nick,mail:i.value.mail,link:i.value.link,ua:navigator.userAgent,url:n.value.path};if((L=a.value)!=null&&L.token)p1.nick=a.value.display_name,p1.mail=a.value.email,p1.link=a.value.url;else{if(l1==="force")return;if(M1.indexOf("nick")>-1&&!p1.nick)return(F=d.value.nick)==null||F.focus(),alert(Z.value.nickError);if(M1.indexOf("mail")>-1&&!p1.mail||p1.mail&&!/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(p1.mail))return(j=d.value.mail)==null||j.focus(),alert(Z.value.mailError);if(!p1.comment)return void((W=w.value)==null?void 0:W.focus());p1.nick||(p1.nick=Z.value.anonymous)}if(!K.value)return alert(Z.value.wordHint.replace("$0",y1[0].toString()).replace("$1",y1[1].toString()).replace("$2",H.value.toString()));p1.comment=I6(p1.comment,k.value.map),t.replyId&&t.rootId&&(p1.pid=t.replyId,p1.rid=t.rootId,p1.at=t.replyUser),J.value=!0,(({serverURL:v1,lang:w1,token:d1,comment:m})=>{const $={"Content-Type":"application/json"};return d1&&($.Authorization=`Bearer ${d1}`),fetch(`${v1}/comment?lang=${w1}`,{method:"POST",headers:$,body:JSON.stringify(m)}).then(z=>z.json())})({serverURL:q,lang:c1,token:($1=a.value)==null?void 0:$1.token,comment:p1}).then(v1=>{if(J.value=!1,v1.errmsg)return alert(v1.errmsg);e("submit",v1.data),l.value="",y.value="",t.replyId&&e("cancel-reply")}).catch(v1=>{J.value=!1,alert(v1.message)})},g1=q=>{p.value.contains(q.target)||u.value.contains(q.target)||(B.value=!1),g.value.contains(q.target)||v.value.contains(q.target)||(f.value=!1)},B1=async q=>{var F;const{scrollTop:c1,clientHeight:l1,scrollHeight:y1}=q.target,M1=(l1+c1)/y1,p1=n.value.search,L=((F=x.value)==null?void 0:F.value)||"";M1<.9||A.loading||(A.loading=!0,A.list.push(...p1.more?await p1.more(L,A.list.length):await p1.search(L)),A.loading=!1,setTimeout(()=>{q.target.scrollTop=c1},50))},H1=S8(q=>{A.list=[],B1(q)},300);return K1([n,H],([q,c1])=>{const{wordLimit:l1}=q;l1?c1<l1[0]&&l1[0]!==0?(I.value=l1[0],K.value=!1):c1>l1[1]?(I.value=l1[1],K.value=!1):(I.value=l1[1],K.value=!0):(I.value=0,K.value=!0)},{immediate:!0}),K1(f,async q=>{if(!q)return;const c1=n.value.search;x.value&&(x.value.value=""),A.loading=!0,A.list=c1.default?await c1.default():await c1.search(""),A.loading=!1}),X1(()=>{document.body.addEventListener("click",g1),K1(()=>l.value,q=>{const{highlighter:c1,texRenderer:l1}=n.value;R.value=q,y.value=xs(q,{emojiMap:k.value.map,highlighter:c1,texRenderer:l1}),H.value=(y1=>(M1=>M1.match(/[\w\d\s\u00C0-\u024F]+/giu)||[])(y1).reduce((M1,p1)=>M1+(p1.trim()===""?0:p1.trim().split(/\s+/u).length),0)+(M1=>M1.match(/[\u4E00-\u9FA5]/gu)||[])(y1).length)(q),q?ke(w.value):ke.destroy(w.value)},{immediate:!0}),K1(()=>n.value.emoji,q=>{return(c1=Array.isArray(q)?q:[],Promise.all(c1.map(l1=>typeof l1=="string"?hs(F6(l1)):Promise.resolve(l1))).then(l1=>{const y1={tabs:[],map:{}};return l1.forEach(M1=>{const{name:p1,folder:L,icon:F,prefix:j,type:W,items:$1}=M1;y1.tabs.push({name:p1,icon:Ee(F,L,j,W),items:$1.map(v1=>{const w1=`${j||""}${v1}`;return y1.map[w1]=Ee(v1,L,j,W),w1})})}),y1})).then(l1=>{k.value=l1});var c1},{immediate:!0})}),e4(()=>{document.body.removeEventListener("click",g1)}),{config:n,locale:Z,insert:h1,onChange:()=>{const q=_.value;q.files&&T.value&&N(q.files[0]).then(()=>{q.value=""})},onDrop:q=>{var c1;if((c1=q.dataTransfer)!=null&&c1.items){const l1=Ue(q.dataTransfer.items);l1&&T.value&&(N(l1),q.preventDefault())}},onKeyDown:q=>{const c1=q.key;(q.ctrlKey||q.metaKey)&&c1==="Enter"&&I1()},onPaste:q=>{if(q.clipboardData){const c1=Ue(q.clipboardData.items);c1&&T.value&&N(c1)}},onLogin:q=>{q.preventDefault();const{lang:c1,serverURL:l1}=n.value,y1=(window.innerWidth-450)/2,M1=(window.innerHeight-450)/2,p1=window.open(`${l1}/ui/login?lng=${encodeURIComponent(c1)}`,"_blank",`width=450,height=450,left=${y1},top=${M1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);p1==null||p1.postMessage({type:"TOKEN",data:null},"*");const L=({data:F})=>{F&&F.type==="userInfo"&&F.data.token&&(p1==null||p1.close(),a.value=F.data,(F.data.remember?localStorage:sessionStorage).setItem("WALINE_USER",JSON.stringify(F.data)),window.removeEventListener("message",L))};window.addEventListener("message",L)},onLogout:()=>{a.value={},localStorage.setItem("WALINE_USER","null"),sessionStorage.setItem("WALINE_USER","null")},onProfile:q=>{var L;q.preventDefault();const{lang:c1,serverURL:l1}=n.value,y1=(window.innerWidth-800)/2,M1=(window.innerHeight-800)/2;(L=window.open(`${l1}/ui/profile?lng=${encodeURIComponent(c1)}`,"_blank",`width=800,height=800,left=${y1},top=${M1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`))==null||L.postMessage({type:"TOKEN",data:a.value.token},"*");const p1=({data:F})=>{F&&F.type==="profile"&&(a.value={...a.value,...F},[localStorage,sessionStorage].filter(j=>j.getItem("WALINE_USER")).forEach(j=>j.setItem("WALINE_USER",JSON.stringify(a))),window.removeEventListener("message",p1))};window.addEventListener("message",p1)},submitComment:I1,onImageWallScroll:B1,onGifSearch:H1,isLogin:a1,userInfo:a,isSubmitting:J,wordNumber:H,wordLimit:I,isWordNumberLegal:K,editor:l,userMeta:i,emoji:k,emojiTabIndex:C,showEmoji:B,gifData:A,showGif:f,canUploadImage:T,previewText:y,showPreview:M,inputRefs:d,editorRef:w,emojiButtonRef:p,emojiPopupRef:u,gifButtonRef:g,gifPopupRef:v,imageUploadRef:_,gifSearchInputRef:x}}}),ms={class:"wl-comment"},ks={key:0,class:"wl-login-info"},fs={class:"wl-avatar"},$s=["title"],Ms=["src"],Cs=["textContent"],zs={class:"wl-panel"},Bs=["for","textContent"],Hs=["id","name","type","onUpdate:modelValue"],Ls=["placeholder"],ys={class:"wl-preview"},Vs=r("hr",null,null,-1),bs=["innerHTML"],Ss={class:"wl-footer"},As={class:"wl-actions"},js={href:"https://guides.github.com/features/mastering-markdown/",title:"Markdown Guide","aria-label":"Markdown is supported",class:"wl-action",target:"_blank",rel:"noreferrer"},Ps=["title"],Rs=["title"],Ds=["title"],Ts=["title"],Fs={class:"wl-info"},Es={class:"wl-text-number"},Is={key:0},Us=_2(" \xA0/\xA0 "),Os=["textContent"],qs=["textContent"],Gs=["disabled"],Ns=["placeholder"],Ks={key:0,class:"wl-loading"},Ws={key:0,class:"wl-tab-wrapper"},Js=["title","onClick"],Ys=["src","alt"],Xs={key:0,class:"wl-tabs"},Qs=["onClick"],Zs=["src","alt","title"],tl=["title"];var O6=Jt(gs,[["render",function(t,e,n,l,i,a){const d=E1("CloseIcon"),w=E1("MarkdownIcon"),_=E1("EmojiIcon"),p=E1("GifIcon"),u=E1("ImageIcon"),g=E1("PreviewIcon"),v=E1("LoadingIcon"),x=E1("ImageWall");return o(),c("div",ms,[t.config.login!=="disable"&&t.isLogin?(o(),c("div",ks,[r("div",fs,[r("button",{class:"wl-logout-btn",title:t.locale.logout,onClick:e[0]||(e[0]=(...k)=>t.onLogout&&t.onLogout(...k))},[x1(d,{size:14})],8,$s),r("img",{src:t.userInfo.avatar,alt:"avatar"},null,8,Ms)]),r("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",onClick:e[1]||(e[1]=(...k)=>t.onProfile&&t.onProfile(...k)),textContent:L1(t.userInfo.display_name)},null,8,Cs)])):u1("v-if",!0),r("div",zs,[t.config.login!=="force"&&t.config.meta.length&&!t.isLogin?(o(),c("div",{key:0,class:q1(["wl-header",`item${t.config.meta.length}`])},[(o(!0),c(V1,null,z2(t.config.meta,k=>(o(),c("div",{class:"wl-header-item",key:k},[r("label",{for:k,textContent:L1(t.locale[k]+(t.config.requiredMeta.includes(k)||!t.config.requiredMeta.length?"":`(${t.locale.optional})`))},null,8,Bs),pt(r("input",{ref_for:!0,ref:C=>{C&&(t.inputRefs[k]=C)},id:`wl-${k}`,class:q1(["wl-input",`wl-${k}`]),name:k,type:k==="mail"?"email":"text","onUpdate:modelValue":C=>t.userMeta[k]=C},null,10,Hs),[[Ac,t.userMeta[k]]])]))),128))],2)):u1("v-if",!0),pt(r("textarea",{class:"wl-editor",ref:"editorRef",id:"wl-edit",placeholder:t.replyUser?`@${t.replyUser}`:t.locale.placeholder,"onUpdate:modelValue":e[2]||(e[2]=k=>t.editor=k),onKeydown:e[3]||(e[3]=(...k)=>t.onKeyDown&&t.onKeyDown(...k)),onDrop:e[4]||(e[4]=(...k)=>t.onDrop&&t.onDrop(...k)),onPaste:e[5]||(e[5]=(...k)=>t.onPaste&&t.onPaste(...k))},null,40,Ls),[[S0,t.editor]]),pt(r("div",ys,[Vs,r("h4",null,L1(t.locale.preview)+":",1),r("div",{class:"wl-content",innerHTML:t.previewText},null,8,bs)],512),[[ee,t.showPreview]]),r("div",Ss,[r("div",As,[r("a",js,[x1(w)]),pt(r("button",{ref:"emojiButtonRef",class:q1(["wl-action",{actived:t.showEmoji}]),title:t.locale.emoji,onClick:e[6]||(e[6]=k=>t.showEmoji=!t.showEmoji)},[x1(_)],10,Ps),[[ee,t.emoji.tabs.length]]),t.config.search?(o(),c("button",{key:0,ref:"gifButtonRef",class:q1(["wl-action",{actived:t.showGif}]),title:t.locale.gif,onClick:e[7]||(e[7]=k=>t.showGif=!t.showGif)},[x1(p)],10,Rs)):u1("v-if",!0),r("input",{ref:"imageUploadRef",class:"upload",id:"wl-image-upload",type:"file",accept:".png,.jpg,.jpeg,.webp,.bmp,.gif",onChange:e[8]||(e[8]=(...k)=>t.onChange&&t.onChange(...k))},null,544),t.canUploadImage?(o(),c("label",{key:1,for:"wl-image-upload",class:"wl-action",title:t.locale.uploadImage},[x1(u)],8,Ds)):u1("v-if",!0),r("button",{class:q1(["wl-action",{actived:t.showPreview}]),title:t.locale.preview,onClick:e[9]||(e[9]=k=>t.showPreview=!t.showPreview)},[x1(g)],10,Ts)]),r("div",Fs,[r("div",Es,[_2(L1(t.wordNumber)+" ",1),t.config.wordLimit?(o(),c("span",Is,[Us,r("span",{class:q1({illegal:!t.isWordNumberLegal}),textContent:L1(t.wordLimit)},null,10,Os)])):u1("v-if",!0),_2(" \xA0"+L1(t.locale.word),1)]),t.config.login==="disable"||t.isLogin?u1("v-if",!0):(o(),c("button",{key:0,class:"wl-btn",onClick:e[10]||(e[10]=(...k)=>t.onLogin&&t.onLogin(...k)),textContent:L1(t.locale.login)},null,8,qs)),t.config.login!=="force"||t.isLogin?(o(),c("button",{key:1,class:"wl-btn primary",title:"Cmd|Ctrl + Enter",disabled:t.isSubmitting,onClick:e[11]||(e[11]=(...k)=>t.submitComment&&t.submitComment(...k))},[t.isSubmitting?(o(),m2(v,{key:0,size:16})):(o(),c(V1,{key:1},[_2(L1(t.locale.submit),1)],64))],8,Gs)):u1("v-if",!0)]),r("div",{ref:"gifPopupRef",class:q1(["wl-gif-popup",{display:t.showGif}])},[r("input",{type:"text",placeholder:t.locale.gifSearchPlaceholder,ref:"gifSearchInputRef",onInput:e[12]||(e[12]=(...k)=>t.onGifSearch&&t.onGifSearch(...k))},null,40,Ns),x1(x,{items:t.gifData.list,"column-width":200,gap:6,onInsert:e[13]||(e[13]=k=>t.insert(k)),onScroll:t.onImageWallScroll},null,8,["items","onScroll"]),t.gifData.loading?(o(),c("div",Ks,[x1(v,{size:30})])):u1("v-if",!0)],2),r("div",{ref:"emojiPopupRef",class:q1(["wl-emoji-popup",{display:t.showEmoji}])},[(o(!0),c(V1,null,z2(t.emoji.tabs,(k,C)=>(o(),c(V1,{key:k.name},[C===t.emojiTabIndex?(o(),c("div",Ws,[(o(!0),c(V1,null,z2(k.items,B=>(o(),c("button",{key:B,title:B,onClick:f=>t.insert(`:${B}:`)},[t.showEmoji?(o(),c("img",{key:0,class:"wl-emoji",src:t.emoji.map[B],alt:B,loading:"lazy",referrerPolicy:"no-referrer"},null,8,Ys)):u1("v-if",!0)],8,Js))),128))])):u1("v-if",!0)],64))),128)),t.emoji.tabs.length>1?(o(),c("div",Xs,[(o(!0),c(V1,null,z2(t.emoji.tabs,(k,C)=>(o(),c("button",{key:k.name,class:q1(["wl-tab",{active:t.emojiTabIndex===C}]),onClick:B=>t.emojiTabIndex=C},[r("img",{class:"wl-emoji",src:k.icon,alt:k.name,title:k.name,loading:"lazy",referrerPolicy:"no-referrer"},null,8,Zs)],10,Qs))),128))])):u1("v-if",!0)],2)])]),t.replyId?(o(),c("button",{key:1,class:"wl-close",title:t.locale.cancelReply,onClick:e[14]||(e[14]=k=>t.$emit("cancel-reply"))},[x1(d,{size:24})],8,tl)):u1("v-if",!0)])}],["__file","CommentBox.vue"]]);const el=["approved","waiting","spam"],nl=s({props:{comment:{type:Object,required:!0},rootId:{type:String,required:!0},reply:{type:Object}},components:{CommentBox:O6,DeleteIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},O("path",{d:"m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",fill:"red"})),LikeIcon:({active:t=!1})=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[O("path",{d:"M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z"+(t?"":"M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),fill:t?"red":"currentColor"})]),ReplyIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},O("path",{d:"M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",fill:"currentColor"})),VerifiedIcon:()=>O("svg",{class:"verified-icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},O("path",{d:"m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",fill:"#27ae60"}))},emits:["submit","reply","like","delete","status","sticky"],setup(t){const e=T1("config"),n=U6(),l=_4(),i=t1(()=>e.value.locale),a=t1(()=>{let{link:g}=t.comment;return g?E6(g)?g:`https://${g}`:""}),d=t1(()=>n.value.includes(t.comment.objectId)),w=((g,v)=>{const x=K8();return t1(()=>as(g,x.value,v))})(t.comment.insertedAt,i.value),_=t1(()=>l.value.type==="administrator"),p=t1(()=>t.comment.user_id&&l.value.objectId===t.comment.user_id),u=t1(()=>{var g;return t.comment.objectId===((g=t.reply)==null?void 0:g.objectId)});return{config:e,locale:i,isReplyingCurrent:u,link:a,like:d,time:w,isAdmin:_,isOwner:p,commentStatus:el}}}),rl=["id"],ol={class:"wl-user","aria-hidden":"true"},cl=["src"],sl={class:"wl-card"},ll={class:"wl-head"},il=["href"],al={key:1,class:"wl-nick"},hl=["textContent"],dl=["textContent"],wl=["textContent"],_l=["textContent"],pl=["textContent"],ul={class:"wl-comment-actions"},vl=["title"],xl=["textContent"],gl=["title"],ml={class:"wl-meta","aria-hidden":"true"},kl=["textContent"],fl=["textContent"],$l=["textContent"],Ml=["innerHTML"],Cl={key:0,class:"wl-admin-actions"},zl={class:"wl-comment-status"},Bl=["disabled","onClick","textContent"],Hl={key:1,class:"wl-reply-wrapper"},Ll={key:2,class:"wl-quote"},yl=s({name:"WalineRoot",components:{CommentBox:O6,CommentCard:Jt(nl,[["render",function(t,e,n,l,i,a){const d=E1("VerifiedIcon"),w=E1("DeleteIcon"),_=E1("LikeIcon"),p=E1("ReplyIcon"),u=E1("CommentBox"),g=E1("CommentCard",!0);return o(),c("div",{class:"wl-item",id:t.comment.objectId},[r("div",ol,[t.comment.avatar?(o(),c("img",{key:0,src:t.comment.avatar},null,8,cl)):u1("v-if",!0),t.comment.type?(o(),m2(d,{key:1})):u1("v-if",!0)]),r("div",sl,[r("div",ll,[t.link?(o(),c("a",{key:0,class:"wl-nick",href:t.link,target:"_blank",rel:"nofollow noreferrer"},L1(t.comment.nick),9,il)):(o(),c("span",al,L1(t.comment.nick),1)),t.comment.type==="administrator"?(o(),c("span",{key:2,class:"wl-badge",textContent:L1(t.locale.admin)},null,8,hl)):u1("v-if",!0),t.comment.label?(o(),c("span",{key:3,class:"wl-badge",textContent:L1(t.comment.label)},null,8,dl)):u1("v-if",!0),t.comment.sticky?(o(),c("span",{key:4,class:"wl-badge",textContent:L1(t.locale.sticky)},null,8,wl)):u1("v-if",!0),t.comment.level!==void 0&&t.comment.level>=0?(o(),c("span",{key:5,class:q1(`wl-badge level${t.comment.level}`),textContent:L1(t.locale[`level${t.comment.level}`]||`Level ${t.comment.level}`)},null,10,_l)):u1("v-if",!0),r("span",{class:"wl-time",textContent:L1(t.time)},null,8,pl),r("div",ul,[t.isAdmin||t.isOwner?(o(),c("button",{key:0,class:"wl-delete",onClick:e[0]||(e[0]=v=>t.$emit("delete",t.comment))},[x1(w)])):u1("v-if",!0),r("button",{class:"wl-like",onClick:e[1]||(e[1]=v=>t.$emit("like",t.comment)),title:t.like?t.locale.cancelLike:t.locale.like},[x1(_,{active:t.like},null,8,["active"]),"like"in t.comment?(o(),c("span",{key:0,textContent:L1(t.comment.like)},null,8,xl)):u1("v-if",!0)],8,vl),r("button",{class:q1(["wl-reply",{active:t.isReplyingCurrent}]),title:t.isReplyingCurrent?t.locale.cancelReply:t.locale.reply,onClick:e[2]||(e[2]=v=>t.$emit("reply",t.isReplyingCurrent?null:t.comment))},[x1(p)],10,gl)])]),r("div",ml,[t.comment.addr?(o(),c("span",{key:0,textContent:L1(t.comment.addr)},null,8,kl)):u1("v-if",!0),t.comment.browser?(o(),c("span",{key:1,textContent:L1(t.comment.browser)},null,8,fl)):u1("v-if",!0),t.comment.os?(o(),c("span",{key:2,textContent:L1(t.comment.os)},null,8,$l)):u1("v-if",!0)]),r("div",{class:"wl-content",innerHTML:t.comment.comment},null,8,Ml),t.isAdmin?(o(),c("div",Cl,[r("span",zl,[(o(!0),c(V1,null,z2(t.commentStatus,v=>(o(),c("button",{key:v,class:q1(`wl-btn wl-${v}`),disabled:t.comment.status===v,onClick:x=>t.$emit("status",{status:v,comment:t.comment}),textContent:L1(v)},null,10,Bl))),128))]),t.isAdmin&&!t.comment.rid?(o(),c("button",{key:0,class:"wl-btn wl-sticky",onClick:e[3]||(e[3]=v=>t.$emit("sticky",t.comment))},L1(t.comment.sticky?"unsticky":"sticky"),1)):u1("v-if",!0)])):u1("v-if",!0),t.isReplyingCurrent?(o(),c("div",Hl,[x1(u,{replyId:t.comment.objectId,replyUser:t.comment.nick,rootId:t.rootId,onSubmit:e[4]||(e[4]=v=>t.$emit("submit",v)),onCancelReply:e[5]||(e[5]=v=>t.$emit("reply",null))},null,8,["replyId","replyUser","rootId"])])):u1("v-if",!0),t.comment.children?(o(),c("div",Ll,[(o(!0),c(V1,null,z2(t.comment.children,v=>(o(),m2(g,{key:v.objectId,comment:v,reply:t.reply,rootId:t.rootId,onReply:e[6]||(e[6]=x=>t.$emit("reply",x)),onSubmit:e[7]||(e[7]=x=>t.$emit("submit",x)),onLike:e[8]||(e[8]=x=>t.$emit("like",x)),onDelete:e[9]||(e[9]=x=>t.$emit("delete",x)),onStatus:e[10]||(e[10]=x=>t.$emit("status",x)),onSticky:e[11]||(e[11]=x=>t.$emit("sticky",x))},null,8,["comment","reply","rootId"]))),128))])):u1("v-if",!0)])],8,rl)}],["__file","CommentCard.vue"]]),LoadingIcon:w4},props:["serverURL","path","meta","requiredMeta","dark","lang","locale","pageSize","wordLimit","emoji","login","highlighter","texRenderer","imageUploader","copyright"],setup(t){const e=t1(()=>(({serverURL:k,path:C=location.pathname,lang:B="zh-CN",locale:f,emoji:M=["//unpkg.com/@waline/emojis@1.0.1/weibo"],meta:y=["nick","mail","link"],requiredMeta:H=[],dark:A=!1,pageSize:I=10,wordLimit:K,imageUploader:R,highlighter:J,texRenderer:Z,copyright:a1=!0,login:T="enable",search:h1=ns(),...N})=>({serverURL:ls(k),path:ss(C),locale:{...Fe[B]||Fe["zh-CN"],...typeof f=="object"?f:{}},wordLimit:is(K),meta:Pe(y),requiredMeta:Pe(H),imageUploader:w0(R,ts),highlighter:w0(J,os),texRenderer:w0(Z,es),lang:B,dark:A,emoji:M,pageSize:I,login:T,copyright:a1,search:h1,...N}))(t)),n=_4(),l=U6(),i=X("loading"),a=X(0),d=X(1),w=X(0),_=X([]),p=X(null),u=t1(()=>{return typeof(k=e.value.dark)=="string"?k==="auto"?`@media(prefers-color-scheme:dark){body${_0}}`:`${k}${_0}`:k===!0?`:root${_0}`:"";var k});let g;(function(k,C={}){const B=X(!1),{document:f=E8,immediate:M=!0,manual:y=!1,id:H="vueuse_styletag_"+ ++W8}=C,A=X(k);let I=()=>{};const K=()=>{if(!f)return;const J=f.getElementById(H)||f.createElement("style");J.type="text/css",J.id=H,C.media&&(J.media=C.media),f.head.appendChild(J),B.value||(I=K1(A,Z=>{J.innerText=Z},{immediate:!0}),B.value=!0)},R=()=>{f&&B.value&&(I(),f.head.removeChild(f.getElementById(H)),B.value=!1)};M&&!y&&K(),y||q3(R),ot(B)})(u);const v=k=>{var y;const{serverURL:C,path:B,pageSize:f}=e.value,M=new AbortController;i.value="loading",g==null||g(),ws({serverURL:C,lang:e.value.lang,path:B,pageSize:f,page:k,signal:M.signal,token:(y=n.value)==null?void 0:y.token}).then(H=>{i.value="success",a.value=H.count,_.value.push(...H.data),d.value=k,w.value=H.totalPages}).catch(H=>{H.name!=="AbortError"&&(console.error(H.message),i.value="error")}),g=M.abort.bind(M)},x=()=>{a.value=0,_.value=[],v(1)};return w2("config",e),K1(()=>t.path,x),X1(()=>x()),{config:e,darkmodeStyle:u,i18n:t1(()=>e.value.locale),status:i,count:a,page:d,totalPages:w,data:_,reply:p,loadMore:()=>v(d.value+1),refresh:x,onReply:k=>{p.value=k},onSubmit:k=>{if(k.rid){const C=_.value.find(({objectId:B})=>B===k.rid);if(!C)return;Array.isArray(C.children)||(C.children=[]),C.children.push(k)}else _.value.unshift(k)},onStatusChange:async({comment:k,status:C})=>{var M;if(k.status===C)return;const{serverURL:B,lang:f}=e.value;await Ie({serverURL:B,lang:f,token:(M=n.value)==null?void 0:M.token,objectId:k.objectId,status:C}),k.status=C},onDelete:async({objectId:k})=>{var f;if(!confirm("Are you sure you want to delete this comment?"))return;const{serverURL:C,lang:B}=e.value;await(({serverURL:M,lang:y,token:H,objectId:A})=>fetch(`${M}/comment/${A}?lang=${y}`,{method:"DELETE",headers:{Authorization:`Bearer ${H}`}}).then(I=>I.json()))({serverURL:C,lang:B,token:(f=n.value)==null?void 0:f.token,objectId:k}),_.value.some((M,y)=>M.objectId===k?(_.value=_.value.filter((H,A)=>A!==y),!0):M.children.some((H,A)=>H.objectId===k&&(_.value[y].children=M.children.filter((I,K)=>K!==A),!0)))},onSticky:async k=>{var f;if(k.rid)return;const{serverURL:C,lang:B}=e.value;await Ie({serverURL:C,lang:B,token:(f=n.value)==null?void 0:f.token,objectId:k.objectId,sticky:k.sticky?0:1}),k.sticky=!k.sticky},onLike:async k=>{const{serverURL:C,lang:B}=e.value,{objectId:f}=k,M=l.value.includes(f);await(({serverURL:y,lang:H,objectId:A,like:I})=>fetch(`${y}/comment/${A}?lang=${H}`,{method:"PUT",headers:ds,body:JSON.stringify({like:I})}).then(K=>K.json()))({serverURL:C,lang:B,objectId:f,like:!M}),M?l.value=l.value.filter(y=>y!==f):(l.value=[...l.value,f],l.value.length>50&&(l.value=l.value.slice(-50))),k.like=(k.like||0)+(M?-1:1)},version:"2.6.1"}}}),Vl={"data-waline":""},bl={class:"wl-count"},Sl=["textContent"],Al={class:"wl-cards"},jl={key:1,class:"wl-operation"},Pl=["textContent"],Rl={key:0,class:"wl-loading"},Dl=["textContent"],Tl={class:"wl-operation"},Fl=["textContent"],El={key:3,class:"wl-power"},Il=_2(" Powered by "),Ul=r("a",{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"}," Waline ",-1);var Ol=Jt(yl,[["render",function(t,e,n,l,i,a){const d=E1("CommentBox"),w=E1("CommentCard"),_=E1("LoadingIcon");return o(),c("div",Vl,[t.reply?u1("v-if",!0):(o(),m2(d,{key:0,onSubmit:t.onSubmit},null,8,["onSubmit"])),r("div",bl,[t.count?(o(),c("span",{key:0,class:"wl-num",textContent:L1(t.count)},null,8,Sl)):u1("v-if",!0),_2(" "+L1(t.i18n.comment),1)]),r("div",Al,[(o(!0),c(V1,null,z2(t.data,p=>(o(),m2(w,{key:p.objectId,"root-id":p.objectId,comment:p,reply:t.reply,onReply:t.onReply,onSubmit:t.onSubmit,onStatus:t.onStatusChange,onDelete:t.onDelete,onSticky:t.onSticky,onLike:t.onLike},null,8,["root-id","comment","reply","onReply","onSubmit","onStatus","onDelete","onSticky","onLike"]))),128))]),t.status==="error"?(o(),c("div",jl,[r("button",{type:"button",class:"wl-btn",onClick:e[0]||(e[0]=(...p)=>t.refresh&&t.refresh(...p)),textContent:L1(t.i18n.refresh)},null,8,Pl)])):(o(),c(V1,{key:2},[t.status==="loading"?(o(),c("div",Rl,[x1(_,{size:30})])):t.data.length?t.page<t.totalPages?(o(),c(V1,{key:2},[u1(" Load more button "),r("div",Tl,[r("button",{type:"button",class:"wl-btn",onClick:e[1]||(e[1]=(...p)=>t.loadMore&&t.loadMore(...p)),textContent:L1(t.i18n.more)},null,8,Fl)])],2112)):u1("v-if",!0):(o(),c("div",{key:1,class:"wl-empty",textContent:L1(t.i18n.sofa)},null,8,Dl))],64)),u1(" Copyright Information "),t.config.copyright?(o(),c("div",El,[Il,Ul,_2(" v"+L1(t.version),1)])):u1("v-if",!0)])}],["__file","Waline.vue"]]);var Ge=s({name:"Waline",props:{options:{type:Object,default(){return{}}}},setup(t){const e=it(),{options:n}=$3(t),l=_6(),i=t1(()=>({lang:l.value||"zh-CN",dark:"html.dark",path:x6(e.path),...n.value}));return()=>O("div",{class:"reco-waline-wrapper"},O(Ol,i.value))}}),ql=s({components:{Valine:me,Waline:Ge},props:{hideComments:{type:Boolean,default:!0}},setup(t){const{solution:e,options:n}=a5(),{hideComments:l}=$3(t);let i;switch(e.value){case"valine":i=me;break;case"waline":i=Ge;break;default:i="";break}return()=>i?O(i,{options:n.value,style:`display: ${l.value?"none":"block"}`}):null}}),Gl=s({name:"ValineViews",props:{idVal:String,numStyle:Object,flagTitle:{type:String,default:"Your Article Title"}},setup(t){const e=u6(),n=it(),{idVal:l,numStyle:i,flagTitle:a}=$3(t),d=w=>e.value.base.slice(0,e.value.base.length-1)+w;return()=>O("span",{id:d(l.value||n.path),class:"leancloud-visitors","data-flag-title":a.value},O("a",{class:"leancloud-visitors-count",style:i.value}))}});function Nl({app:t}){t.component("Comments",e=>O(ql,{...e})),t.component("ValineViews",e=>O(Gl,{...e}))}var Kl=k2({enhance(...t){Nl(...t)}});const q6=Symbol(""),G6=Symbol(""),T0=Symbol("");function hK3(){const t=T1(G6)||{},e=T1(T0)||{},n=T1(q6)||{};if(!T0)throw new Error("useSiteLocaleData() is called without provider.");const{currentRoute:l}=C3();return{classificationPosts:t1(()=>n.value[l.value.path]||{}),classificationSummary:t,posts:e}}const Wl={},Jl=[{data:{key:"v-58b2268e",path:"/docs/dev/cloud.html",title:"Cloud API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/cloud.md"},key:"v-58b2268e",path:"/docs/dev/cloud.html",title:"Cloud API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# Cloud API\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\r
:::`,contentRendered:`<h1 id="cloud-api" tabindex="-1"><a class="header-anchor" href="#cloud-api" aria-hidden="true">#</a> Cloud API</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/cloud.html",pathLocale:"/",permalink:null,routeMeta:{title:"Cloud API"},slug:"cloud",filePath:"D:/dev_doc/docs/dev/cloud.md",filePathRelative:"docs/dev/cloud.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/cloud.html.vue",componentFilePathRelative:"pages/docs/dev/cloud.html.vue",componentFileChunkName:"v-58b2268e",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/cloud.html.js",dataFilePathRelative:"pages/docs/dev/cloud.html.js",dataFileChunkName:"v-58b2268e",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/cloud.html",htmlFilePathRelative:"docs/dev/cloud.html"},{data:{key:"v-3a29a482",path:"/docs/dev/config.html",title:"\u914D\u7F6E\u9879",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1657943766e3,updatedTime:1658642188e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:3}]},filePathRelative:"docs/dev/config.md"},key:"v-3a29a482",path:"/docs/dev/config.html",title:"\u914D\u7F6E\u9879",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u914D\u7F6E\u9879\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 [YAML \u6587\u4EF6](yaml) \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1\r
:::`,contentRendered:`<h1 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 <a href="yaml">YAML \u6587\u4EF6</a> \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/config.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u914D\u7F6E\u9879"},slug:"config",filePath:"D:/dev_doc/docs/dev/config.md",filePathRelative:"docs/dev/config.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/config.html.vue",componentFilePathRelative:"pages/docs/dev/config.html.vue",componentFileChunkName:"v-3a29a482",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/config.html.js",dataFilePathRelative:"pages/docs/dev/config.html.js",dataFileChunkName:"v-3a29a482",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/config.html",htmlFilePathRelative:"docs/dev/config.html"},{data:{key:"v-07eb27da",path:"/docs/dev/data.html",title:"\u6570\u636E\u5B58\u53D6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1658642188e3,updatedTime:1658642188e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/data.md"},key:"v-07eb27da",path:"/docs/dev/data.html",title:"\u6570\u636E\u5B58\u53D6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u6570\u636E\u5B58\u53D6\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 [YAML \u6587\u4EF6](yaml) \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1\r
:::`,contentRendered:`<h1 id="\u6570\u636E\u5B58\u53D6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5B58\u53D6" aria-hidden="true">#</a> \u6570\u636E\u5B58\u53D6</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 <a href="yaml">YAML \u6587\u4EF6</a> \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/data.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6570\u636E\u5B58\u53D6"},slug:"data",filePath:"D:/dev_doc/docs/dev/data.md",filePathRelative:"docs/dev/data.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/data.html.vue",componentFilePathRelative:"pages/docs/dev/data.html.vue",componentFileChunkName:"v-07eb27da",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/data.html.js",dataFilePathRelative:"pages/docs/dev/data.html.js",dataFileChunkName:"v-07eb27da",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/data.html",htmlFilePathRelative:"docs/dev/data.html"},{data:{key:"v-4cf85329",path:"/docs/dev/database.html",title:"Database API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/database.md"},key:"v-4cf85329",path:"/docs/dev/database.html",title:"Database API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],content:`# Database API\r
\r
UltiKits \u652F\u6301\u4F7F\u7528MySQL\u6570\u636E\u5E93\u6765\u50A8\u5B58\u6570\u636E\uFF0C\u5E76\u4E14\u5C01\u88C5\u4E86\u4E00\u7CFB\u5217\u7684\u65B9\u6CD5\r
\r
::: warning \u8BE5\u529F\u80FD\u5C06\u88AB\u5F03\u7528\r
\u5728\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF0C\u8BE5\u529F\u80FD\u5DF2\u4E0D\u518D\u9002\u7528\u548C\u652F\u6301\r
:::\r
\r
## \u5FEB\u901F\u5F00\u59CB\r
\r
### \u83B7\u53D6Core API\u5B9E\u4F8B\r
\u6570\u636E\u5E93\u529F\u80FD\u4F9D\u8D56\u4E8EUltiCoreAPI\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u5148\u83B7\u53D6UltiCoreAPI\u5B9E\u4F8B\r
\r
\`\`\`java\r
UltiCoreAPI ultiCoreAPI = new UltiCoreAPI(plugin);\r
\`\`\`\r
\r
### \u8FDE\u63A5\u6570\u636E\u5E93\r
\u5148\u8C03\u7528 \` setUpDatabase() \` \u65B9\u6CD5\u8BBE\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\r
\r
\u7136\u540E\u5B9E\u4F8B\u5316 \` DatabaseUtils \` \u7C7B\r
\r
\`\`\`java\r
ultiCoreAPI.setUpDatabase(database, ip, port, username, password);\r
databaseUtils = new DatabaseUtils(ultiCoreAPI);\r
\`\`\`\r
\r
\u5F97\u5230\u7684 \` databaseUtils \` \u5B9E\u4F8B\u4FBF\u53EF\u4EE5\u8FDB\u884C\u5404\u79CD\u6570\u636E\u5E93\u64CD\u4F5C\u4E86\r
\r
## CRUD\u64CD\u4F5C\r
\r
### \u521B\u5EFA\u6570\u636E\u8868\r
\r
\u8C03\u7528 \` createTable() \` \u65B9\u6CD5\u6765\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u8868\r
\r
\`\`\`java\r
createTable("tableName", fields, true)\r
//\u53EF\u4EE5\u4E0D\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1\r
createTable("tableName", fields)\r
\`\`\`\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570         | \u7C7B\u578B       | \u8BF4\u660E                |\r
|------------|----------|-------------------|\r
| tableName  | String   | \u8868\u540D\u79F0               |\r
| fields     | String[] | \u5B57\u6BB5                |\r
| autoCommit | boolean  | (\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1 |\r
\r
\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F\r
\r
### \u5224\u65AD\u5217\r
\r
\u8C03\u7528 \` isColumnExists() \` \u53EF\u4EE5\u5224\u65AD\u6307\u5B9A\u6570\u636E\u8868\u662F\u5426\u5B58\u5728\u6307\u5B9A\u5217\r
\r
\`\`\`java\r
isColumnExists("tableName", "columnName")\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570         | \u7C7B\u578B     | \u8BF4\u660E  |\r
|------------|--------|-----|\r
| tableName  | String | \u8868\u540D\u79F0 |\r
| columnName | String | \u5217\u540D\u79F0 |\r
\r
\u5B58\u5728\u4E3Atrue\uFF0C\u53CD\u4E4B\u4E3Afalse\r
\r
### \u6DFB\u52A0\u5217\r
\r
\u8C03\u7528 \` addColumn() \` \u6765\u6DFB\u52A0\u4E00\u4E2A\u5217\r
\r
\`\`\`java\r
addColumn("tableName", "columnName")\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570         | \u7C7B\u578B     | \u8BF4\u660E  |\r
|------------|--------|-----|\r
| tableName  | String | \u8868\u540D\u79F0 |\r
| columnName | String | \u5217\u540D\u79F0 |\r
\r
\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F\r
\r
### \u67E5\u8BE2\u6570\u636E\r
\r
\u8C03\u7528 \` getData() \` \u6765\u67E5\u8BE2\u6570\u636E\r
\r
\`\`\`java\r
getData(primaryIDField, id, tableName, fieldName)\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570             | \u7C7B\u578B     | \u8BF4\u660E    |\r
|----------------|--------|-------|\r
| primaryIDField | String | \u4E3B\u952E\u5B57\u6BB5\u540D |\r
| id             | String | \u67E5\u8BE2\u6570\u636E  |\r
| tableName      | String | \u8868\u540D\u79F0   |\r
| fieldName      | String | \u5217\u540D\u79F0   |\r
\r
\u67E5\u8BE2\u6210\u529F\u8FD4\u56DE\u5B57\u7B26\u4E32\u7ED3\u679C\uFF0C\u672A\u627E\u5230\u6216\u5931\u8D25\u8FD4\u56DEnull\r
\r
### \u67E5\u8BE2\u5217\r
\r
\u8C03\u7528 \` getKeys() \` \u67E5\u8BE2\u4E00\u4E2A\u5217\u7684\u5168\u90E8\u6570\u636E\r
\r
\`\`\`java\r
getData(String tableName, String fieldName)\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570             | \u7C7B\u578B     | \u8BF4\u660E    |\r
|----------------|--------|-------|\r
| tableName      | String | \u8868\u540D\u79F0   |\r
| fieldName      | String | \u5217\u540D\u79F0   |\r
\r
\u67E5\u8BE2\u6210\u529F\u8FD4\u56DE\u5B57\u7B26\u4E32\u5217\u8868\uFF0C\u672A\u627E\u5230\u6216\u5931\u8D25\u8FD4\u56DEnull\r
\r
### \u63D2\u5165\u6570\u636E\r
\r
\u8C03\u7528 \` insertData() \` \u6765\u63D2\u5165\u4E00\u6761\u6570\u636E\r
\r
\`\`\`java\r
createTable("tableName", dataMap, true)\r
//\u53EF\u4EE5\u4E0D\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1\r
createTable("tableName", dataMap)\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570         | \u7C7B\u578B                  | \u8BF4\u660E                |\r
|------------|---------------------|-------------------|\r
| tableName  | String              | \u8868\u540D\u79F0               |\r
| DataMap    | Map<String, String> | \u6570\u636E                |\r
| autoCommit | boolean             | (\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1 |\r
\r
::: info\r
- \u5173\u4E8EdataMap\r
\r
Key\u4E3A\u6570\u636E\u5B57\u6BB5\uFF0CValue\u4E3A\u5BF9\u5E94\u7684\u503C\r
:::\r
\r
\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F\r
\r
### \u66F4\u65B0\u6570\u636E\r
\r
\u8C03\u7528 \` updateData() \` \u6765\u66F4\u65B0\u4E00\u6761\u6570\u636E\r
\r
\`\`\`java\r
updateData(tableName, fieldName, primaryIDField, id, value, autoCommit, otherStatements)\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570              | \u7C7B\u578B                        | \u8BF4\u660E                |\r
|-----------------|---------------------------|-------------------|\r
| primaryIDField  | String                    | \u4E3B\u952E\u5B57\u6BB5\u540D             |\r
| id              | String                    | \u67E5\u8BE2\u6570\u636E              |\r
| tableName       | String                    | \u8868\u540D\u79F0               |\r
| fieldName       | String                    | \u76EE\u6807\u5217               |\r
| key             | String                    | \u65B0\u6570\u636E               |\r
| autoCommit      | boolean                   | (\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1 |\r
| otherStatements | List\\<PreparedStatement\\> | (\u53EF\u9009\uFF0C\u9ED8\u8BA4null)\u9644\u52A0\u67E5\u8BE2\u8BED\u53E5 |\r
\r
\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F\r
\r
###`,contentRendered:`<h1 id="database-api" tabindex="-1"><a class="header-anchor" href="#database-api" aria-hidden="true">#</a> Database API</h1>
<p>UltiKits \u652F\u6301\u4F7F\u7528MySQL\u6570\u636E\u5E93\u6765\u50A8\u5B58\u6570\u636E\uFF0C\u5E76\u4E14\u5C01\u88C5\u4E86\u4E00\u7CFB\u5217\u7684\u65B9\u6CD5</p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">\u8BE5\u529F\u80FD\u5C06\u88AB\u5F03\u7528</p><p>\u5728\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF0C\u8BE5\u529F\u80FD\u5DF2\u4E0D\u518D\u9002\u7528\u548C\u652F\u6301</p>
</div><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2>
<h3 id="\u83B7\u53D6core-api\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6core-api\u5B9E\u4F8B" aria-hidden="true">#</a> \u83B7\u53D6Core API\u5B9E\u4F8B</h3>
<p>\u6570\u636E\u5E93\u529F\u80FD\u4F9D\u8D56\u4E8EUltiCoreAPI\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u5148\u83B7\u53D6UltiCoreAPI\u5B9E\u4F8B</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">UltiCoreAPI</span> ultiCoreAPI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UltiCoreAPI</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FDE\u63A5\u6570\u636E\u5E93</h3>
<p>\u5148\u8C03\u7528 <code v-pre>setUpDatabase()</code> \u65B9\u6CD5\u8BBE\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F</p>
<p>\u7136\u540E\u5B9E\u4F8B\u5316 <code v-pre>DatabaseUtils</code> \u7C7B</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>ultiCoreAPI<span class="token punctuation">.</span><span class="token function">setUpDatabase</span><span class="token punctuation">(</span>database<span class="token punctuation">,</span> ip<span class="token punctuation">,</span> port<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
databaseUtils <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatabaseUtils</span><span class="token punctuation">(</span>ultiCoreAPI<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F97\u5230\u7684 <code v-pre>databaseUtils</code> \u5B9E\u4F8B\u4FBF\u53EF\u4EE5\u8FDB\u884C\u5404\u79CD\u6570\u636E\u5E93\u64CD\u4F5C\u4E86</p>
<h2 id="crud\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#crud\u64CD\u4F5C" aria-hidden="true">#</a> CRUD\u64CD\u4F5C</h2>
<h3 id="\u521B\u5EFA\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u8868</h3>
<p>\u8C03\u7528 <code v-pre>createTable()</code> \u65B9\u6CD5\u6765\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u8868</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> fields<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">//\u53EF\u4EE5\u4E0D\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</span>
<span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> fields<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>fields</td>
<td>String[]</td>
<td>\u5B57\u6BB5</td>
</tr>
<tr>
<td>autoCommit</td>
<td>boolean</td>
<td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</td>
</tr>
</tbody>
</table>
<p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p>
<h3 id="\u5224\u65AD\u5217" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5217" aria-hidden="true">#</a> \u5224\u65AD\u5217</h3>
<p>\u8C03\u7528 <code v-pre>isColumnExists()</code> \u53EF\u4EE5\u5224\u65AD\u6307\u5B9A\u6570\u636E\u8868\u662F\u5426\u5B58\u5728\u6307\u5B9A\u5217</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">isColumnExists</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> <span class="token string">"columnName"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>columnName</td>
<td>String</td>
<td>\u5217\u540D\u79F0</td>
</tr>
</tbody>
</table>
<p>\u5B58\u5728\u4E3Atrue\uFF0C\u53CD\u4E4B\u4E3Afalse</p>
<h3 id="\u6DFB\u52A0\u5217" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5217" aria-hidden="true">#</a> \u6DFB\u52A0\u5217</h3>
<p>\u8C03\u7528 <code v-pre>addColumn()</code> \u6765\u6DFB\u52A0\u4E00\u4E2A\u5217</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">addColumn</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> <span class="token string">"columnName"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>columnName</td>
<td>String</td>
<td>\u5217\u540D\u79F0</td>
</tr>
</tbody>
</table>
<p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p>
<h3 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h3>
<p>\u8C03\u7528 <code v-pre>getData()</code> \u6765\u67E5\u8BE2\u6570\u636E</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">getData</span><span class="token punctuation">(</span>primaryIDField<span class="token punctuation">,</span> id<span class="token punctuation">,</span> tableName<span class="token punctuation">,</span> fieldName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>primaryIDField</td>
<td>String</td>
<td>\u4E3B\u952E\u5B57\u6BB5\u540D</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>\u67E5\u8BE2\u6570\u636E</td>
</tr>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>fieldName</td>
<td>String</td>
<td>\u5217\u540D\u79F0</td>
</tr>
</tbody>
</table>
<p>\u67E5\u8BE2\u6210\u529F\u8FD4\u56DE\u5B57\u7B26\u4E32\u7ED3\u679C\uFF0C\u672A\u627E\u5230\u6216\u5931\u8D25\u8FD4\u56DEnull</p>
<h3 id="\u67E5\u8BE2\u5217" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5217" aria-hidden="true">#</a> \u67E5\u8BE2\u5217</h3>
<p>\u8C03\u7528 <code v-pre>getKeys()</code> \u67E5\u8BE2\u4E00\u4E2A\u5217\u7684\u5168\u90E8\u6570\u636E</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">String</span> tableName<span class="token punctuation">,</span> <span class="token class-name">String</span> fieldName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>fieldName</td>
<td>String</td>
<td>\u5217\u540D\u79F0</td>
</tr>
</tbody>
</table>
<p>\u67E5\u8BE2\u6210\u529F\u8FD4\u56DE\u5B57\u7B26\u4E32\u5217\u8868\uFF0C\u672A\u627E\u5230\u6216\u5931\u8D25\u8FD4\u56DEnull</p>
<h3 id="\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> \u63D2\u5165\u6570\u636E</h3>
<p>\u8C03\u7528 <code v-pre>insertData()</code> \u6765\u63D2\u5165\u4E00\u6761\u6570\u636E</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> dataMap<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">//\u53EF\u4EE5\u4E0D\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</span>
<span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> dataMap<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>DataMap</td>
<td>Map&lt;String, String&gt;</td>
<td>\u6570\u636E</td>
</tr>
<tr>
<td>autoCommit</td>
<td>boolean</td>
<td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</td>
</tr>
</tbody>
</table>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">INFO</p><ul>
<li>\u5173\u4E8EdataMap</li>
</ul>
<p>Key\u4E3A\u6570\u636E\u5B57\u6BB5\uFF0CValue\u4E3A\u5BF9\u5E94\u7684\u503C</p>
</div><p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p>
<h3 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h3>
<p>\u8C03\u7528 <code v-pre>updateData()</code> \u6765\u66F4\u65B0\u4E00\u6761\u6570\u636E</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">updateData</span><span class="token punctuation">(</span>tableName<span class="token punctuation">,</span> fieldName<span class="token punctuation">,</span> primaryIDField<span class="token punctuation">,</span> id<span class="token punctuation">,</span> value<span class="token punctuation">,</span> autoCommit<span class="token punctuation">,</span> otherStatements<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>primaryIDField</td>
<td>String</td>
<td>\u4E3B\u952E\u5B57\u6BB5\u540D</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>\u67E5\u8BE2\u6570\u636E</td>
</tr>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>fieldName</td>
<td>String</td>
<td>\u76EE\u6807\u5217</td>
</tr>
<tr>
<td>key</td>
<td>String</td>
<td>\u65B0\u6570\u636E</td>
</tr>
<tr>
<td>autoCommit</td>
<td>boolean</td>
<td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</td>
</tr>
<tr>
<td>otherStatements</td>
<td>List&lt;PreparedStatement&gt;</td>
<td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4null)\u9644\u52A0\u67E5\u8BE2\u8BED\u53E5</td>
</tr>
</tbody>
</table>
<p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/database.html",pathLocale:"/",permalink:null,routeMeta:{title:"Database API"},slug:"database",filePath:"D:/dev_doc/docs/dev/database.md",filePathRelative:"docs/dev/database.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/database.html.vue",componentFilePathRelative:"pages/docs/dev/database.html.vue",componentFileChunkName:"v-4cf85329",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/database.html.js",dataFilePathRelative:"pages/docs/dev/database.html.js",dataFileChunkName:"v-4cf85329",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/database.html",htmlFilePathRelative:"docs/dev/database.html"},{data:{key:"v-14fe42d1",path:"/docs/dev/executor.html",title:"\u547D\u4EE4\u6267\u884C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],git:{createdTime:1658037614e3,updatedTime:1658642188e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/executor.md"},key:"v-14fe42d1",path:"/docs/dev/executor.html",title:"\u547D\u4EE4\u6267\u884C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],content:`# \u547D\u4EE4\u6267\u884C\u5668\r
\r
::: tip \u5F00\u53D1\u89C4\u8303\r
\u8BF7\u5C06\u6267\u884C\u5668\u7C7B\u521B\u5EFA\u5728 \` com.ultikits.ultitools.commands \` \u4E0B\r
:::\r
\r
## \u6E38\u620F\u5185\u547D\u4EE4\r
\r
\u5982\u679C\u8FD9\u4E2A\u547D\u4EE4\u53EA\u80FD\u5728\u6E38\u620F\u5185\u4F7F\u7528\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F \` AbstractPlayerCommandExecutor \` \u7C7B\u5E76\u5B9E\u73B0 \` onPlayerCommand() \` \u65B9\u6CD5\r
\r
\`\`\`java\r
public class Commands extends AbstractPlayerCommandExecutor {\r
    @Override\r
    protected boolean onPlayerCommand(@NotNull Command command, @NotNull String[] strings, @NotNull Player player) {\r
        // do something...\r
        return true;\r
    }\r
}\r
\`\`\`\r
\u8FD9\u4E2A\u65B9\u6CD5\u5F97\u5230\u7684\u53C2\u6570\u4E0E\u5E73\u5E38\u5B9E\u73B0 \` CommandExecutor \` \u63A5\u53E3\u7684 \` onCommand() \` \u65B9\u6CD5\u662F\u4E00\u6837\u7684\uFF0C\u552F\u4E00\u7684\u4E0D\u540C\u662F \` CommandSender \` \u5DF2\u7ECF\u88AB\u8F6C\u6362\u4E3A\u4E86 \` Player \`\r
\r
\u5982\u679C\u901A\u8FC7\u63A7\u5236\u53F0\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5904\u7406\u5E76\u53D1\u51FA\u63D0\u793A\uFF0C\u4E0D\u4F1A\u89E6\u53D1 \` onPlayerCommand() \` \u65B9\u6CD5\r
\r
## \u63A7\u5236\u53F0\u547D\u4EE4\r
\r
\u5982\u679C\u8FD9\u4E2A\u547D\u4EE4\u53EA\u80FD\u5728\u63A7\u5236\u53F0\u4F7F\u7528\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F \` AbstractConsoleCommandExecutor \` \u7C7B\u5E76\u5B9E\u73B0 \` onConsoleCommand() \` \u65B9\u6CD5\r
\r
\`\`\`java\r
public class Commands extends AbstractConsoleCommandExecutor {\r
    @Override\r
    protected boolean onConsoleCommand(@NotNull Command command, @NotNull String[] strings, @NotNull CommandSender commandSender) {\r
        // do something...\r
        return true;\r
    }\r
}\r
\`\`\`\r
\u8FD9\u4E2A\u65B9\u6CD5\u5F97\u5230\u7684\u53C2\u6570\u4E0E\u5E73\u5E38\u5B9E\u73B0 \` CommandExecutor \` \u63A5\u53E3\u7684 \` onCommand() \` \u65B9\u6CD5\u662F\u4E00\u6837\u7684\r
\r
\u5982\u679C\u6E38\u620F\u5185\u73A9\u5BB6\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5904\u7406\u5E76\u53D1\u51FA\u63D0\u793A\uFF0C\u4E0D\u4F1A\u89E6\u53D1 \` onConsoleCommand() \` \u65B9\u6CD5\r
\r
## Tab\u8865\u5168\r
\r
\u5982\u679C\u4F60\u60F3\u8981\u8BE5\u547D\u4EE4\u652F\u6301Tab\u8865\u5168\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F \` AbstractTabExecutor \` \u7C7B\u5E76\u5B9E\u73B0 \` onPlayerCommand() \` \u65B9\u6CD5\u548C \` onPlayerTabComplete() \` \u65B9\u6CD5\r
\r
::: tip\r
\u548C \` AbstractPlayerCommandExecutor \` \u4E00\u6837\uFF0C\u8BE5\u6267\u884C\u5668\u53EA\u80FD\u5728\u6E38\u620F\u5185\u88AB\u89E6\u53D1\r
:::\r
\r
\`\`\`java\r
public class Commands extends AbstractTabExecutor {\r
    @Override\r
    protected boolean onPlayerCommand(@NotNull Command command, @NotNull String[] strings, @NotNull Player player) {\r
        // do something...\r
        return true;\r
    }\r
\r
    @Override\r
    protected @Nullable List<String> onPlayerTabComplete(@NotNull Command command, @NotNull String[] strings, @NotNull Player player) {\r
        // do something...\r
        return list;\r
    }\r
}\r
\`\`\`\r
\r
\` onPlayerTabComplete() \` \u53C2\u6570\u4E0E \` onPlayerCommand() \` \u4E00\u81F4\r
\r
\u8FD4\u56DE\u4E00\u4E2AList\u5217\u8868\uFF0C\u4F5C\u4E3A\u73A9\u5BB6Tab\u8865\u5168\u7684\u5907\u9009\u9879\uFF0Cnull\u5C06\u4E0D\u4F1A\u51FA\u73B0Tab\u8865\u5168\r
\r
## \u6CE8\u518C\u6267\u884C\u5668\r
\r
UltiTools\u4E2D\uFF0C\u6CE8\u518C\u76D1\u542C\u5668\u5341\u5206\u7B80\u5355\r
\r
::: warning \u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C\r
\u5728 UltiTools 6.0 alpha \u524D\uFF0C\u4F60\u53EA\u9700\u8981\u6309\u7167\u6B63\u5E38\u6B65\u9AA4\u7F16\u5199\u5E76\u6CE8\u518C\u6267\u884C\u5668\u5373\u53EF\r
:::\r
\r
\r
\`\`\`java\r
@CmdExecutor(function = "function_name", permission = "ultikits.tools.command", description = "a commend", alias = "command,cmd")\r
//command executor class\r
\`\`\`\r
\r
\u4F7F\u7528 \` @CmdExecutor \` \u6CE8\u89E3\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5BF9\u8BE5\u6267\u884C\u5668\u8FDB\u884C\u6CE8\u518C\uFF0C\u60A8\u65E0\u9700\u624B\u52A8\u6CE8\u518C\r
\r
- \` function \` \u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A,\u586B\u5199\u8BE5\u76D1\u542C\u5668\u6240\u5C5E\u529F\u80FD\u7684\u540D\u79F0\uFF0C\u63D2\u4EF6\u4F1A\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u7684\u529F\u80FD\u5F00\u5173\u6765\u5224\u65AD\u662F\u5426\u8FDB\u884C\u6CE8\u518C\uFF0C\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5219\u63D2\u4EF6\u5C06\u9ED8\u8BA4\u6CE8\u518C\u8BE5\u76D1\u542C\u5668\r
- \` permission \` \u53C2\u6570\uFF0C\u547D\u4EE4\u7684\u6743\u9650\r
- \` description \` \u53C2\u6570\uFF0C\u547D\u4EE4\u7684\u7B80\u4ECB\uFF0C\u5C06\u663E\u793A\u5728\u5E2E\u52A9\u4FE1\u606F\r
- \` alias \` \u53C2\u6570\uFF0C\u547D\u4EE4\uFF0C\u591A\u4E2A\u547D\u4EE4\u4F7F\u7528","\u5206\u5F00 `,contentRendered:`<h1 id="\u547D\u4EE4\u6267\u884C\u5668" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u6267\u884C\u5668" aria-hidden="true">#</a> \u547D\u4EE4\u6267\u884C\u5668</h1>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u5F00\u53D1\u89C4\u8303</p><p>\u8BF7\u5C06\u6267\u884C\u5668\u7C7B\u521B\u5EFA\u5728 <code v-pre>com.ultikits.ultitools.commands</code> \u4E0B</p>
</div><h2 id="\u6E38\u620F\u5185\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6E38\u620F\u5185\u547D\u4EE4" aria-hidden="true">#</a> \u6E38\u620F\u5185\u547D\u4EE4</h2>
<p>\u5982\u679C\u8FD9\u4E2A\u547D\u4EE4\u53EA\u80FD\u5728\u6E38\u620F\u5185\u4F7F\u7528\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F <code v-pre>AbstractPlayerCommandExecutor</code> \u7C7B\u5E76\u5B9E\u73B0 <code v-pre>onPlayerCommand()</code> \u65B9\u6CD5</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Commands</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlayerCommandExecutor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">onPlayerCommand</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Command</span> command<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Player</span> player<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u5F97\u5230\u7684\u53C2\u6570\u4E0E\u5E73\u5E38\u5B9E\u73B0 <code v-pre>CommandExecutor</code> \u63A5\u53E3\u7684 <code v-pre>onCommand()</code> \u65B9\u6CD5\u662F\u4E00\u6837\u7684\uFF0C\u552F\u4E00\u7684\u4E0D\u540C\u662F <code v-pre>CommandSender</code> \u5DF2\u7ECF\u88AB\u8F6C\u6362\u4E3A\u4E86 <code v-pre>Player</code></p>
<p>\u5982\u679C\u901A\u8FC7\u63A7\u5236\u53F0\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5904\u7406\u5E76\u53D1\u51FA\u63D0\u793A\uFF0C\u4E0D\u4F1A\u89E6\u53D1 <code v-pre>onPlayerCommand()</code> \u65B9\u6CD5</p>
<h2 id="\u63A7\u5236\u53F0\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u53F0\u547D\u4EE4" aria-hidden="true">#</a> \u63A7\u5236\u53F0\u547D\u4EE4</h2>
<p>\u5982\u679C\u8FD9\u4E2A\u547D\u4EE4\u53EA\u80FD\u5728\u63A7\u5236\u53F0\u4F7F\u7528\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F <code v-pre>AbstractConsoleCommandExecutor</code> \u7C7B\u5E76\u5B9E\u73B0 <code v-pre>onConsoleCommand()</code> \u65B9\u6CD5</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Commands</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractConsoleCommandExecutor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">onConsoleCommand</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Command</span> command<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">CommandSender</span> commandSender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u5F97\u5230\u7684\u53C2\u6570\u4E0E\u5E73\u5E38\u5B9E\u73B0 <code v-pre>CommandExecutor</code> \u63A5\u53E3\u7684 <code v-pre>onCommand()</code> \u65B9\u6CD5\u662F\u4E00\u6837\u7684</p>
<p>\u5982\u679C\u6E38\u620F\u5185\u73A9\u5BB6\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5904\u7406\u5E76\u53D1\u51FA\u63D0\u793A\uFF0C\u4E0D\u4F1A\u89E6\u53D1 <code v-pre>onConsoleCommand()</code> \u65B9\u6CD5</p>
<h2 id="tab\u8865\u5168" tabindex="-1"><a class="header-anchor" href="#tab\u8865\u5168" aria-hidden="true">#</a> Tab\u8865\u5168</h2>
<p>\u5982\u679C\u4F60\u60F3\u8981\u8BE5\u547D\u4EE4\u652F\u6301Tab\u8865\u5168\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F <code v-pre>AbstractTabExecutor</code> \u7C7B\u5E76\u5B9E\u73B0 <code v-pre>onPlayerCommand()</code> \u65B9\u6CD5\u548C <code v-pre>onPlayerTabComplete()</code> \u65B9\u6CD5</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u548C <code v-pre>AbstractPlayerCommandExecutor</code> \u4E00\u6837\uFF0C\u8BE5\u6267\u884C\u5668\u53EA\u80FD\u5728\u6E38\u620F\u5185\u88AB\u89E6\u53D1</p>
</div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Commands</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTabExecutor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">onPlayerCommand</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Command</span> command<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Player</span> player<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">onPlayerTabComplete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Command</span> command<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Player</span> player<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>onPlayerTabComplete()</code> \u53C2\u6570\u4E0E <code v-pre>onPlayerCommand()</code> \u4E00\u81F4</p>
<p>\u8FD4\u56DE\u4E00\u4E2AList\u5217\u8868\uFF0C\u4F5C\u4E3A\u73A9\u5BB6Tab\u8865\u5168\u7684\u5907\u9009\u9879\uFF0Cnull\u5C06\u4E0D\u4F1A\u51FA\u73B0Tab\u8865\u5168</p>
<h2 id="\u6CE8\u518C\u6267\u884C\u5668" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u6267\u884C\u5668" aria-hidden="true">#</a> \u6CE8\u518C\u6267\u884C\u5668</h2>
<p>UltiTools\u4E2D\uFF0C\u6CE8\u518C\u76D1\u542C\u5668\u5341\u5206\u7B80\u5355</p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">\u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C</p><p>\u5728 UltiTools 6.0 alpha \u524D\uFF0C\u4F60\u53EA\u9700\u8981\u6309\u7167\u6B63\u5E38\u6B65\u9AA4\u7F16\u5199\u5E76\u6CE8\u518C\u6267\u884C\u5668\u5373\u53EF</p>
</div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@CmdExecutor</span><span class="token punctuation">(</span>function <span class="token operator">=</span> <span class="token string">"function_name"</span><span class="token punctuation">,</span> permission <span class="token operator">=</span> <span class="token string">"ultikits.tools.command"</span><span class="token punctuation">,</span> description <span class="token operator">=</span> <span class="token string">"a commend"</span><span class="token punctuation">,</span> alias <span class="token operator">=</span> <span class="token string">"command,cmd"</span><span class="token punctuation">)</span>
<span class="token comment">//command executor class</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code v-pre>@CmdExecutor</code> \u6CE8\u89E3\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5BF9\u8BE5\u6267\u884C\u5668\u8FDB\u884C\u6CE8\u518C\uFF0C\u60A8\u65E0\u9700\u624B\u52A8\u6CE8\u518C</p>
<ul>
<li><code v-pre>function</code> \u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A,\u586B\u5199\u8BE5\u76D1\u542C\u5668\u6240\u5C5E\u529F\u80FD\u7684\u540D\u79F0\uFF0C\u63D2\u4EF6\u4F1A\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u7684\u529F\u80FD\u5F00\u5173\u6765\u5224\u65AD\u662F\u5426\u8FDB\u884C\u6CE8\u518C\uFF0C\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5219\u63D2\u4EF6\u5C06\u9ED8\u8BA4\u6CE8\u518C\u8BE5\u76D1\u542C\u5668</li>
<li><code v-pre>permission</code> \u53C2\u6570\uFF0C\u547D\u4EE4\u7684\u6743\u9650</li>
<li><code v-pre>description</code> \u53C2\u6570\uFF0C\u547D\u4EE4\u7684\u7B80\u4ECB\uFF0C\u5C06\u663E\u793A\u5728\u5E2E\u52A9\u4FE1\u606F</li>
<li><code v-pre>alias</code> \u53C2\u6570\uFF0C\u547D\u4EE4\uFF0C\u591A\u4E2A\u547D\u4EE4\u4F7F\u7528&quot;,&quot;\u5206\u5F00</li>
</ul>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/executor.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u547D\u4EE4\u6267\u884C\u5668"},slug:"executor",filePath:"D:/dev_doc/docs/dev/executor.md",filePathRelative:"docs/dev/executor.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/executor.html.vue",componentFilePathRelative:"pages/docs/dev/executor.html.vue",componentFileChunkName:"v-14fe42d1",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/executor.html.js",dataFilePathRelative:"pages/docs/dev/executor.html.js",dataFileChunkName:"v-14fe42d1",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/executor.html",htmlFilePathRelative:"docs/dev/executor.html"},{data:{key:"v-a0b068ba",path:"/docs/dev/game-email.html",title:"In-game Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],git:{createdTime:1657943766e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/game-email.md"},key:"v-a0b068ba",path:"/docs/dev/game-email.html",title:"In-game Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],content:`# In-game Email API <Badge text="UltiTools 5.1.2+" vertical="middle"/>\r
\r
UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A \`EmailUtils\` \u4EE5\u4F9B\u64CD\u4F5C\u6E38\u620F\u5185\u90AE\u4EF6\u7CFB\u7EDF\u7684\u5404\u79CD\u529F\u80FD\r
\r
\u6240\u6709\u65B9\u6CD5\u5747\u4E3A\u9759\u6001\u65B9\u6CD5\uFF0C\u65E0\u9700\u5B9E\u4F8B\u5316\r
\r
## \u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762\r
\`public statis void readEmails(Player player)\`\r
\r
\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
EmailUtils.readEmails(player);\r
\`\`\`\r
\r
## \u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192\r
\`public static void pushToReceiver(Player receiver)\`\r
\r
\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
EmailUtils.pushToReceiver(player);\r
\`\`\`\r
\r
## \u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6\r
\`public static void sendAllMessage(String message, ItemStack itemSend)\`\r
\r
\u53C2\u6570\uFF1AString \u90AE\u4EF6\u5B57\u7B26\u4E32\u6D88\u606F ItemStack \u7269\u54C1\u9644\u4EF6\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
ItemStack itemStack = new ItemStack(Material.DIAMOND);\r
EmailUtils.pushToReceiver(player);\r
\`\`\`\r
::: tip\r
\u79BB\u7EBF\u73A9\u5BB6\u4E5F\u53EF\u4EE5\u6536\u5230\r
:::\r
\r
## \u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6\r
\`public static void deleteReadEmails(Player player)\`\r
\r
\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
EmailUtils.deleteReadEmails(player);\r
\`\`\`\r
\r
## \u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6\r
\`public static void deleteHistoryEmail(Player player)\`\r
\r
\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
EmailUtils.deleteHistoryEmail(player);\r
\`\`\`\r
\r
## \u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6\r
\`public static void sendMessage(Player player, OfflinePlayer receiver, String message, boolean hasContent)\`\r
\r
\u53C2\u6570\uFF1A\r
1. Player Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
2. OfflinePlayer Bukkit(\u79BB\u7EBF)\u73A9\u5BB6\u5BF9\u8C61\r
3. String \u90AE\u4EF6\u5B57\u7B26\u4E32\u6D88\u606F\r
4. boolean \u662F\u5426\u53D1\u9001\u9644\u4EF6\r
\`\`\`java\r
Player sender = Bukkit.getPlayer("p1");\r
Player receiver = Bukkit.getOfflinePlayer("p2");\r
EmailUtils.sendMessage(sender, receiver, "some message", true);\r
\`\`\`\r
::: tip\r
\u79BB\u7EBF\u73A9\u5BB6\u4E5F\u53EF\u4EE5\u6536\u5230\uFF0C\u82E5\`hasContent\`\u4E3A\`true\`\uFF0C\u5219\u5C06\u73A9\u5BB6\`sender\`\u4E3B\u624B\u4E0A\u7684\u7684\u7269\u54C1\u4F5C\u4E3A\u9644\u4EF6\u53D1\u9001\r
:::\r
\r
## \u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF\r
\`public static Integer getUnReadEmailNum(Player player)\`\r
\r
\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
\u8FD4\u56DE\uFF1AInteger \u672A\u8BFB\u90AE\u4EF6\u6570\u91CF\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
Integer num EmailUtils.getUnReadEmailNum(player);\r
player.sendMessage("\u4F60\u8FD8\u6709 " + num + "\u5C01\u90AE\u4EF6\u672A\u8BFB\uFF01"):\r
\`\`\``,contentRendered:`<h1 id="in-game-email-api" tabindex="-1"><a class="header-anchor" href="#in-game-email-api" aria-hidden="true">#</a> In-game Email API <Badge text="UltiTools 5.1.2+" vertical="middle"/></h1>
<p>UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A <code v-pre>EmailUtils</code> \u4EE5\u4F9B\u64CD\u4F5C\u6E38\u620F\u5185\u90AE\u4EF6\u7CFB\u7EDF\u7684\u5404\u79CD\u529F\u80FD</p>
<p>\u6240\u6709\u65B9\u6CD5\u5747\u4E3A\u9759\u6001\u65B9\u6CD5\uFF0C\u65E0\u9700\u5B9E\u4F8B\u5316</p>
<h2 id="\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762" aria-hidden="true">#</a> \u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762</h2>
<p><code v-pre>public statis void readEmails(Player player)</code></p>
<p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">readEmails</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192" aria-hidden="true">#</a> \u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192</h2>
<p><code v-pre>public static void pushToReceiver(Player receiver)</code></p>
<p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">pushToReceiver</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6" aria-hidden="true">#</a> \u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6</h2>
<p><code v-pre>public static void sendAllMessage(String message, ItemStack itemSend)</code></p>
<p>\u53C2\u6570\uFF1AString \u90AE\u4EF6\u5B57\u7B26\u4E32\u6D88\u606F ItemStack \u7269\u54C1\u9644\u4EF6</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ItemStack</span> itemStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ItemStack</span><span class="token punctuation">(</span><span class="token class-name">Material</span><span class="token punctuation">.</span>DIAMOND<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">pushToReceiver</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u79BB\u7EBF\u73A9\u5BB6\u4E5F\u53EF\u4EE5\u6536\u5230</p>
</div><h2 id="\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6" aria-hidden="true">#</a> \u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6</h2>
<p><code v-pre>public static void deleteReadEmails(Player player)</code></p>
<p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">deleteReadEmails</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6" aria-hidden="true">#</a> \u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6</h2>
<p><code v-pre>public static void deleteHistoryEmail(Player player)</code></p>
<p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">deleteHistoryEmail</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6" aria-hidden="true">#</a> \u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6</h2>
<p><code v-pre>public static void sendMessage(Player player, OfflinePlayer receiver, String message, boolean hasContent)</code></p>
<p>\u53C2\u6570\uFF1A</p>
<ol>
<li>Player Bukkit\u73A9\u5BB6\u5BF9\u8C61</li>
<li>OfflinePlayer Bukkit(\u79BB\u7EBF)\u73A9\u5BB6\u5BF9\u8C61</li>
<li>String \u90AE\u4EF6\u5B57\u7B26\u4E32\u6D88\u606F</li>
<li>boolean \u662F\u5426\u53D1\u9001\u9644\u4EF6</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> sender <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"p1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Player</span> receiver <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getOfflinePlayer</span><span class="token punctuation">(</span><span class="token string">"p2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>sender<span class="token punctuation">,</span> receiver<span class="token punctuation">,</span> <span class="token string">"some message"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u79BB\u7EBF\u73A9\u5BB6\u4E5F\u53EF\u4EE5\u6536\u5230\uFF0C\u82E5<code v-pre>hasContent</code>\u4E3A<code v-pre>true</code>\uFF0C\u5219\u5C06\u73A9\u5BB6<code v-pre>sender</code>\u4E3B\u624B\u4E0A\u7684\u7684\u7269\u54C1\u4F5C\u4E3A\u9644\u4EF6\u53D1\u9001</p>
</div><h2 id="\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF" aria-hidden="true">#</a> \u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF</h2>
<p><code v-pre>public static Integer getUnReadEmailNum(Player player)</code></p>
<p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61
\u8FD4\u56DE\uFF1AInteger \u672A\u8BFB\u90AE\u4EF6\u6570\u91CF</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> num <span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">getUnReadEmailNum</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
player<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">"\u4F60\u8FD8\u6709 "</span> <span class="token operator">+</span> num <span class="token operator">+</span> <span class="token string">"\u5C01\u90AE\u4EF6\u672A\u8BFB\uFF01"</span><span class="token punctuation">)</span><span class="token operator">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/game-email.html",pathLocale:"/",permalink:null,routeMeta:{title:"In-game Email API"},slug:"game-email",filePath:"D:/dev_doc/docs/dev/game-email.md",filePathRelative:"docs/dev/game-email.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/game-email.html.vue",componentFilePathRelative:"pages/docs/dev/game-email.html.vue",componentFileChunkName:"v-a0b068ba",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/game-email.html.js",dataFilePathRelative:"pages/docs/dev/game-email.html.js",dataFileChunkName:"v-a0b068ba",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/game-email.html",htmlFilePathRelative:"docs/dev/game-email.html"},{data:{key:"v-2b4f175c",path:"/docs/dev/guide.html",title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],git:{createdTime:1657943766e3,updatedTime:1657943766e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/guide.md"},key:"v-2b4f175c",path:"/docs/dev/guide.html",title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],content:`# \u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6\r
## \u6240\u6709\u6D41\u7A0B\r
1. \u51C6\u5907\u4E00\u4E2AIDE\r
2. Fork\u4ED3\u5E93\uFF08\u5982\u679C\u8981\u5F00\u53D1UltiKIts\u63D2\u4EF6\uFF09\u6216\u4E0B\u8F7D\u63D2\u4EF6\uFF08\u5982\u679C\u8981\u5F00\u53D1\u57FA\u4E8EUltiKits API\u7684\u63D2\u4EF6\uFF09\r
3. \u5728IDE\u5BFC\u5165\u9879\u76EE\u6216\u63D2\u4EF6\r
4. \u5199\u4EE3\u7801\r
5. **\u6D4B\u8BD5\uFF08\u975E\u5E38\u91CD\u8981\uFF09**\r
6. \u63D0\u4EA4Pull Request\uFF08\u5982\u679C\u8981\u5F00\u53D1UltiKIts\u63D2\u4EF6\uFF09\r
7. \u7ED3\u675F\r
   ::: tip\r
   \u4EE5\u4E0A\u5185\u5BB9\u90FD\u4E0D\u4F1A\u7EC6\u8BB2\uFF0C\u672C\u6587\u6863\u9ED8\u8BA4\u4F60\u5DF2\u7ECF\u638C\u63E1\u4E86Git\uFF0CJava\u7B49\u5F00\u53D1\u77E5\u8BC6\r
   :::\r
## \u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879\r
### Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F\r
\u63D0\u4EA4PR\u65F6\u4F60\u5E94\u8BE5\u9075\u5FAA\u4EE5\u4E0B\u683C\u5F0F\r
\`\`\`\r
MM.DD Updated\r
1. Updete Content...\r
2. Fix Bugs...\r
...\r
\`\`\`\r
\u63D0\u4EA4\u4E4B\u540E\u7B49\u5F85\u5BA1\u6838\u5373\u53EF`,contentRendered:`<h1 id="\u4E3Aultikits\u6DFB\u7816\u52A0\u74E6" tabindex="-1"><a class="header-anchor" href="#\u4E3Aultikits\u6DFB\u7816\u52A0\u74E6" aria-hidden="true">#</a> \u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6</h1>
<h2 id="\u6240\u6709\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709\u6D41\u7A0B" aria-hidden="true">#</a> \u6240\u6709\u6D41\u7A0B</h2>
<ol>
<li>\u51C6\u5907\u4E00\u4E2AIDE</li>
<li>Fork\u4ED3\u5E93\uFF08\u5982\u679C\u8981\u5F00\u53D1UltiKIts\u63D2\u4EF6\uFF09\u6216\u4E0B\u8F7D\u63D2\u4EF6\uFF08\u5982\u679C\u8981\u5F00\u53D1\u57FA\u4E8EUltiKits API\u7684\u63D2\u4EF6\uFF09</li>
<li>\u5728IDE\u5BFC\u5165\u9879\u76EE\u6216\u63D2\u4EF6</li>
<li>\u5199\u4EE3\u7801</li>
<li><strong>\u6D4B\u8BD5\uFF08\u975E\u5E38\u91CD\u8981\uFF09</strong></li>
<li>\u63D0\u4EA4Pull Request\uFF08\u5982\u679C\u8981\u5F00\u53D1UltiKIts\u63D2\u4EF6\uFF09</li>
<li>\u7ED3\u675F<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u4EE5\u4E0A\u5185\u5BB9\u90FD\u4E0D\u4F1A\u7EC6\u8BB2\uFF0C\u672C\u6587\u6863\u9ED8\u8BA4\u4F60\u5DF2\u7ECF\u638C\u63E1\u4E86Git\uFF0CJava\u7B49\u5F00\u53D1\u77E5\u8BC6</p>
</div></li>
</ol>
<h2 id="\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879</h2>
<h3 id="pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F" aria-hidden="true">#</a> Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F</h3>
<p>\u63D0\u4EA4PR\u65F6\u4F60\u5E94\u8BE5\u9075\u5FAA\u4EE5\u4E0B\u683C\u5F0F</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>MM.DD Updated
1. Updete Content...
2. Fix Bugs...
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D0\u4EA4\u4E4B\u540E\u7B49\u5F85\u5BA1\u6838\u5373\u53EF</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6"},slug:"guide",filePath:"D:/dev_doc/docs/dev/guide.md",filePathRelative:"docs/dev/guide.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/guide.html.vue",componentFilePathRelative:"pages/docs/dev/guide.html.vue",componentFileChunkName:"v-2b4f175c",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/guide.html.js",dataFilePathRelative:"pages/docs/dev/guide.html.js",dataFileChunkName:"v-2b4f175c",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/guide.html",htmlFilePathRelative:"docs/dev/guide.html"},{data:{key:"v-09d3ea6a",path:"/docs/dev/introduction.html",title:"\u524D\u8A00",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],git:{createdTime:1657943766e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/introduction.md"},key:"v-09d3ea6a",path:"/docs/dev/introduction.html",title:"\u524D\u8A00",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],content:`# \u524D\u8A00\r
\r
::: danger\r
UltiTools\u662F\u5F00\u6E90\u63D2\u4EF6\uFF0C\u4F46\u8BF7\u4E0D\u8981\u5C06\u5254\u9664/\u7834\u89E3Pro\u9A8C\u8BC1\u7684\u63D2\u4EF6\u53D1\u5E03\u5230\u5404\u7F51\u7EDC\u5E73\u53F0\r
:::\r
\r
## \u7B80\u4ECB\r
\r
UltiTools\u662F\u4E00\u6B3E\u53D1\u5E03\u4E8E2020\u5E746\u6708\u7684MC\u670D\u52A1\u5668\u57FA\u7840\u63D2\u4EF6\uFF0C\u62E5\u6709\u8BF8\u591A\u57FA\u7840\u53CA\u7279\u8272\u529F\u80FD\uFF0C\u5E76\u4E14\u6CE8\u91CD\u6BCF\u4E2A\u7528\u6237\u7684\u53CD\u9988\u3002\r
\r
\u4F5C\u8005\u81F4\u529B\u4E8E\u8BA9\u66F4\u591A\u670D\u4E3B\u8F7B\u677E\u4E0A\u624B\u670D\u52A1\u5668\u7684\u642D\u5EFA\uFF0C\u51CF\u5C11\u8BED\u8A00\u4E0D\u901A\u3001\u63D2\u4EF6\u4E0D\u517C\u5BB9\u7B49\u95EE\u9898\u5E26\u6765\u7684\u70E6\u607C\u3002\r
\r
## \u7279\u70B9\r
\r
* \u9AD8\u517C\u5BB9\uFF1A\u517C\u5BB91.8 - 1.17\u4E3B\u6D41\u7248\u672C\uFF0CBukkit\uFF0CSpigot\uFF0CPaper\uFF0CMohist\uFF0CCatServer\u7B49\u4E3B\u6D41\u670D\u52A1\u7AEF\r
\r
* \u9AD8\u5EA6GUI\uFF1A\u5927\u90E8\u5206\u529F\u80FD\u90FD\u6709\u56FE\u5F62\u5316\u7528\u6237\u754C\u9762\uFF0C\u4FBF\u4E8E\u73A9\u5BB6\u64CD\u4F5C\r
\r
* \u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF1A\u63D2\u4EF6\u529F\u80FD\u4F17\u591A\uFF0C\u53EF\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u6BCF\u4E00\u4E2A\u529F\u80FD\u7684\u5F00\u5173\uFF0C\u5E76\u4E14\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6D88\u606F\u6587\u672C\r
\r
* \u914D\u7F6E\u5B8C\u5584\uFF1A\u9ED8\u8BA4\u914D\u7F6E\u53EF\u76F4\u63A5\u4F5C\u4E3A\u57FA\u7840\u914D\u7F6E\u4F7F\u7528\uFF0C\u6EE1\u8DB3\u65B0\u624B\u7684\u5F00\u670D\u9700\u6C42\uFF0C\u5F53\u7136\uFF0C\u4E00\u5207\u5747\u53EF\u81EA\u5B9A\u4E49\r
\r
* \u6301\u7EED\u7EF4\u62A4\uFF1A\u60A8\u7684\u4EFB\u4F55\u95EE\u9898\u548C\u5EFA\u8BAE\u90FD\u53EF\u4EE5\u901A\u8FC7Github\u7684Issues\u6216\u8005QQ\u7FA4\u63D0\u4EA4\u548C\u53CD\u9988\uFF0C\u4F5C\u8005\u4F1A\u53CA\u65F6\u6839\u636E\u73A9\u5BB6\u7684\u53CD\u9988\u548C\u610F\u89C1\u8FDB\u884Cbug\u4FEE\u590D\u548C\u65B0\u529F\u80FD\u7684\u66F4\u65B0\r
\r
* \u529F\u80FD\u4E30\u5BCC\uFF1AUltiTools\u51E0\u4E4E\u6DB5\u76D6\u4E86\u670D\u52A1\u5668\u6240\u9700\u7684\u6240\u6709\u57FA\u7840\u529F\u80FD\uFF0C\u540C\u65F6\u5305\u542B\u4E86GUI\u767B\u5F55\uFF0C\u90AE\u4EF6\u7CFB\u7EDF\u7B49\u7279\u8272\u529F\u80FD\r
\r
* \u6027\u80FD\u4F18\u5316\uFF1A\u63D2\u4EF6\u7684\u5404\u65B9\u9762\u90FD\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u5728\u5B9E\u73B0\u4E30\u5BCC\u529F\u80FD\u7684\u540C\u65F6\u4FDD\u969C\u4E86\u6D41\u7545\u7684\u4F53\u9A8C`,contentRendered:`<h1 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h1>
<div class="custom-container danger"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0-4l-4 4"></path></g></svg><p class="custom-container-title">DANGER</p><p>UltiTools\u662F\u5F00\u6E90\u63D2\u4EF6\uFF0C\u4F46\u8BF7\u4E0D\u8981\u5C06\u5254\u9664/\u7834\u89E3Pro\u9A8C\u8BC1\u7684\u63D2\u4EF6\u53D1\u5E03\u5230\u5404\u7F51\u7EDC\u5E73\u53F0</p>
</div><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2>
<p>UltiTools\u662F\u4E00\u6B3E\u53D1\u5E03\u4E8E2020\u5E746\u6708\u7684MC\u670D\u52A1\u5668\u57FA\u7840\u63D2\u4EF6\uFF0C\u62E5\u6709\u8BF8\u591A\u57FA\u7840\u53CA\u7279\u8272\u529F\u80FD\uFF0C\u5E76\u4E14\u6CE8\u91CD\u6BCF\u4E2A\u7528\u6237\u7684\u53CD\u9988\u3002</p>
<p>\u4F5C\u8005\u81F4\u529B\u4E8E\u8BA9\u66F4\u591A\u670D\u4E3B\u8F7B\u677E\u4E0A\u624B\u670D\u52A1\u5668\u7684\u642D\u5EFA\uFF0C\u51CF\u5C11\u8BED\u8A00\u4E0D\u901A\u3001\u63D2\u4EF6\u4E0D\u517C\u5BB9\u7B49\u95EE\u9898\u5E26\u6765\u7684\u70E6\u607C\u3002</p>
<h2 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h2>
<ul>
<li>
<p>\u9AD8\u517C\u5BB9\uFF1A\u517C\u5BB91.8 - 1.17\u4E3B\u6D41\u7248\u672C\uFF0CBukkit\uFF0CSpigot\uFF0CPaper\uFF0CMohist\uFF0CCatServer\u7B49\u4E3B\u6D41\u670D\u52A1\u7AEF</p>
</li>
<li>
<p>\u9AD8\u5EA6GUI\uFF1A\u5927\u90E8\u5206\u529F\u80FD\u90FD\u6709\u56FE\u5F62\u5316\u7528\u6237\u754C\u9762\uFF0C\u4FBF\u4E8E\u73A9\u5BB6\u64CD\u4F5C</p>
</li>
<li>
<p>\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF1A\u63D2\u4EF6\u529F\u80FD\u4F17\u591A\uFF0C\u53EF\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u6BCF\u4E00\u4E2A\u529F\u80FD\u7684\u5F00\u5173\uFF0C\u5E76\u4E14\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6D88\u606F\u6587\u672C</p>
</li>
<li>
<p>\u914D\u7F6E\u5B8C\u5584\uFF1A\u9ED8\u8BA4\u914D\u7F6E\u53EF\u76F4\u63A5\u4F5C\u4E3A\u57FA\u7840\u914D\u7F6E\u4F7F\u7528\uFF0C\u6EE1\u8DB3\u65B0\u624B\u7684\u5F00\u670D\u9700\u6C42\uFF0C\u5F53\u7136\uFF0C\u4E00\u5207\u5747\u53EF\u81EA\u5B9A\u4E49</p>
</li>
<li>
<p>\u6301\u7EED\u7EF4\u62A4\uFF1A\u60A8\u7684\u4EFB\u4F55\u95EE\u9898\u548C\u5EFA\u8BAE\u90FD\u53EF\u4EE5\u901A\u8FC7Github\u7684Issues\u6216\u8005QQ\u7FA4\u63D0\u4EA4\u548C\u53CD\u9988\uFF0C\u4F5C\u8005\u4F1A\u53CA\u65F6\u6839\u636E\u73A9\u5BB6\u7684\u53CD\u9988\u548C\u610F\u89C1\u8FDB\u884Cbug\u4FEE\u590D\u548C\u65B0\u529F\u80FD\u7684\u66F4\u65B0</p>
</li>
<li>
<p>\u529F\u80FD\u4E30\u5BCC\uFF1AUltiTools\u51E0\u4E4E\u6DB5\u76D6\u4E86\u670D\u52A1\u5668\u6240\u9700\u7684\u6240\u6709\u57FA\u7840\u529F\u80FD\uFF0C\u540C\u65F6\u5305\u542B\u4E86GUI\u767B\u5F55\uFF0C\u90AE\u4EF6\u7CFB\u7EDF\u7B49\u7279\u8272\u529F\u80FD</p>
</li>
<li>
<p>\u6027\u80FD\u4F18\u5316\uFF1A\u63D2\u4EF6\u7684\u5404\u65B9\u9762\u90FD\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u5728\u5B9E\u73B0\u4E30\u5BCC\u529F\u80FD\u7684\u540C\u65F6\u4FDD\u969C\u4E86\u6D41\u7545\u7684\u4F53\u9A8C</p>
</li>
</ul>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/introduction.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u524D\u8A00"},slug:"introduction",filePath:"D:/dev_doc/docs/dev/introduction.md",filePathRelative:"docs/dev/introduction.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/introduction.html.vue",componentFilePathRelative:"pages/docs/dev/introduction.html.vue",componentFileChunkName:"v-09d3ea6a",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/introduction.html.js",dataFilePathRelative:"pages/docs/dev/introduction.html.js",dataFileChunkName:"v-09d3ea6a",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/introduction.html",htmlFilePathRelative:"docs/dev/introduction.html"},{data:{key:"v-3c7b0f72",path:"/docs/dev/inventory.html",title:"Inventory API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],git:{createdTime:1657943766e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/inventory.md"},key:"v-3c7b0f72",path:"/docs/dev/inventory.html",title:"Inventory API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],content:`# Inventory API <Badge text="UltiCore 1.0.0+" vertical="middle"/>\r
\r
## \u5FEB\u901F\u4E0A\u624B\r
\u4F7F\u7528\u8FD9\u4E2AAPI\u5EFA\u7ACB\u4E00\u4E2A\u754C\u9762\u4F60\u4F1A\u4F53\u4F1A\u5230\u65E0\u4E0E\u4F26\u6BD4\u7684\u5FEB\u901F\u4E0E\u7B80\u5355\uFF0C\u4F60\u53EA\u9700\u8981\u56DB\u884C\u4EE3\u7801\u5373\u53EF\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u7684\u9884\u8BBEGUI\u754C\u9762\u3002\r
### \u5B9E\u4F8B\u5316PageRegister\r
\u9996\u5148\u4F60\u9700\u8981\u5728\u4E3B\u7C7B\u521B\u5EFA\u4E00\u4E2AGetter\uFF1A\r
\`\`\`java\r
public static PageRegister getPageRegister() {\r
    return pageRegister;\r
}\r
\`\`\`\r
::: warning\r
Getter\u7684\u65B9\u6CD5\u540D\u4E00\u5B9A\u662F\`getPageRegister\`\r
:::\r
\u7136\u540E\u5728\u4E3B\u7C7B\u5B9E\u4F8B\u5316\`PageRegister\`\r
\`\`\`java\r
pageRegister = new PageRegister(plugin);\r
\`\`\`\r
### \u521B\u5EFA\u754C\u9762\r
\u4E0B\u9762\u7684\u793A\u4F8B\u521B\u5EFA\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u754C\u9762\uFF1A\r
\`\`\`java\r
InventoryManager inventoryManager = new InventoryManager(null, 54, "\u6211\u7684\u7B2C\u4E00\u4E2AGUI", true);\r
inventoryManager.presetPage(ViewType.PREVIOUS_QUIT_NEXT);\r
inventoryManager.create();\r
ViewManager.registerView(inventoryManager);\r
\`\`\`\r
\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u6301\u6709\u8005\u768454\u683C\u7684\u53EB\u505A\u201C\u6211\u7684\u7B2C\u4E00\u4E2AGUI\u201D\u7684\u754C\u9762\uFF0C\u5E76\u4E14\u4ED6\u7684\u4E0B\u65B9\u6709\u4E09\u4E2A\u6309\u94AE\uFF0C\u5206\u522B\u662F\u201C\u4E0A\u4E00\u9875\u201D\uFF0C\u201C\u9000\u51FA\u201D\u548C\u201C\u4E0B\u4E00\u9875\u201D\uFF0C\u80CC\u666F\u4E3A\u7070\u8272\u3002\r
### \u521B\u5EFA\u76D1\u542C\u5668\r
\u63A5\u4E0B\u6765\u7F16\u5199\u76D1\u542C\u5668\uFF0C\u5373\u76D1\u542C\u9F20\u6807\u70B9\u51FB\u7684\u7269\u54C1\u7684\u7C7B\u3002\r
\u76D1\u542C\u5668\u5E76\u975E\u662F\u5B9E\u73B0Bukkit\u81EA\u5E26\u7684Listener\uFF0C\u800C\u662F\u7EE7\u627FPagesListener\uFF1A\r
\`\`\`java\r
public class Listener extends PagesListener {\r
    @Override\r
    public void onItemClick(InventoryClickEvent event, Player player, InventoryManager inventoryManager, ItemStack clickedItem) {\r
        // do what you want to do.\r
    }\r
}\r
\`\`\`\r
\u6700\u540E\u9700\u8981\u5728\u4E3B\u7C7B\u6CE8\u518C\u6B64\u4E8B\u4EF6\uFF0C\u5C31\u548C\u6B63\u5E38\u7684\u76D1\u542C\u5668\u4E8B\u4EF6\u6CE8\u518C\u4E00\u6837\u7684\u6B65\u9AA4\u3002\r
\`\`\`java\r
Bukkit.getPluginManager().registerEvents(new Listener(), this);\r
\`\`\`\r
\u5E76\u4E14\u5728Listener\u7C7B\u7684onItemClick\u4E2D\u65E0\u9700\u5173\u5FC3\u6700\u4E0B\u65B9\u83DC\u5355\u680F\u7684\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5DF2\u7ECF\u5168\u90E8\u9884\u5904\u7406\u597D\u4E86\u3002\r
\u81F3\u6B64\uFF0C\u4E00\u4E2A\u53EF\u4EE5\u4F7F\u7528\u7684GUI\u754C\u9762\u5C31\u505A\u5B8C\u4E86\u3002\r
## \u9884\u8BBE\u754C\u9762\r
\u5728ViewType\u679A\u4E3E\u7C7B\u4E2D\uFF0C\u6709\u4E09\u79CD\u754C\u9762\u9884\u8BBE\uFF0C\u5206\u522B\u662F\uFF1A\r
- \`OK_CANCEL\` \u786E\u8BA4/\u53D6\u6D88\u754C\u9762\r
- \`PREVIOUS_QUIT_NEXT\` \u7FFB\u9875/\u9000\u51FA\u754C\u9762\r
- \`PREVIOUS_BACK_NEXT\` \u7FFB\u9875/\u8FD4\u56DE\u754C\u9762\r
### \u786E\u8BA4/\u53D6\u6D88\u754C\u9762\r
\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u786E\u8BA4\u548C\u53D6\u6D88\u7684\u573A\u666F\u3002\r
\r
\u65B9\u6CD5\u8C03\u7528\r
\`\`\`java\r
InventoryManager.presetPage(ViewType.OK_CANCEL);\r
\`\`\`\r
\u754C\u9762\u5C5E\u6027\r
| \u5C5E\u6027 | \u4ECB\u7ECD | \u503C |\r
| ------------ | ------------ | ------------ |\r
| isPageButtonEnabled | \u662F\u5426\u5F00\u542F\u7FFB\u9875 | False |\r
| autoAddPage | \u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762 | False |\r
| isLastLineDisabled | \u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1 | True |\r
| backGroundColor | \u80CC\u666F\u8272 | BackGround.GRAY |\r
| middleButton | \u4E2D\u95F4\u7684\u6309\u94AE | null |\r
| pageNumber | \u9884\u8BBE\u9875 | 0 |\r
| isOkCancelEnabled | \u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE | True |\r
### \u7FFB\u9875/\u9000\u51FA\u754C\u9762\r
\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u9700\u8981\u7FFB\u9875\u4E14\u6CA1\u6709\u4E0A\u4E00\u7EA7\u754C\u9762\u7684\u573A\u666F\u3002\u200C\r
\r
\u70B9\u51FB\u4E0B\u4E00\u9875\u5373\u53EF\u8FDB\u5165\u4E0B\u4E00\u9875\uFF0C\u70B9\u51FB\u4E0A\u4E00\u9875\u540C\u7406\u3002\u70B9\u51FB\u9000\u51FA\u5219\u5173\u95ED\u754C\u9762\u3002\r
\r
\u65B9\u6CD5\u8C03\u7528\r
\`\`\`java\r
InventoryManager.presetPage(ViewType.PREVIOUS_QUIT_NEXT);\r
\`\`\`\r
\u754C\u9762\u5C5E\u6027\r
| \u5C5E\u6027 | \u4ECB\u7ECD | \u503C |\r
| ------------ | ------------ | ------------ |\r
| isPageButtonEnabled | \u662F\u5426\u5F00\u542F\u7FFB\u9875 | True |\r
| autoAddPage | \u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762 | True |\r
| isLastLineDisabled | \u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1 | True |\r
| backGroundColor | \u80CC\u666F\u8272 | BackGround.GRAY |\r
| middleButton | \u4E2D\u95F4\u7684\u6309\u94AE | Button.QUIT |\r
| pageNumber | \u9884\u8BBE\u9875 | 1 |\r
| isOkCancelEnabled | \u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE | False |\r
\r
### \u7FFB\u9875/\u8FD4\u56DE\u754C\u9762\r
\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u9700\u8981\u7FFB\u9875\u4E14\u6709\u4E0A\u4E00\u7EA7\u754C\u9762\u7684\u573A\u666F\u3002\u200C\r
\r
\u70B9\u51FB\u4E0B\u4E00\u9875\u5373\u53EF\u8FDB\u5165\u4E0B\u4E00\u9875\uFF0C\u70B9\u51FB\u4E0A\u4E00\u9875\u540C\u7406\u3002\u70B9\u51FB\u9000\u51FA\u5219\u8FD4\u56DE\u4E4B\u524D\u7684\u754C\u9762\u3002\r
\r
\u65B9\u6CD5\u8C03\u7528\r
\`\`\`java\r
InventoryManager.presetPage(ViewType.PREVIOUS_BACK_NEXT);\r
\`\`\`\r
\u754C\u9762\u5C5E\u6027\r
| \u5C5E\u6027 | \u4ECB\u7ECD | \u503C |\r
| ------------ | ------------ | ------------ |\r
| isPageButtonEnabled | \u662F\u5426\u5F00\u542F\u7FFB\u9875 | True |\r
| autoAddPage | \u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762 | True |\r
| isLastLineDisabled | \u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1 | True |\r
| backGroundColor | \u80CC\u666F\u8272 | BackGround.GRAY |\r
| middleButton | \u4E2D\u95F4\u7684\u6309\u94AE | Button.BACK |\r
| pageNumber | \u9884\u8BBE\u9875 | 1 |\r
| isOkCancelEnabled | \u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE | False |\r
## InventoryManager\r
\u8FD9\u91CC\u4ECB\u7ECD\u4E86InventoryManager\u7684\u6240\u6709\u65B9\u6CD5\u3002\r
### create()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void create();\r
\`\`\`\r
\u521B\u5EFAinventory\u5BF9\u8C61\u3002\r
\r
\u4F60\u5FC5\u987B\u5728\u5B8C\u6210\u6240\u6709\u5BF9GUI\u7684\u8BBE\u7F6E\u7684\u540E\u624D\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002(\u6BD4\u5982\u8BBE\u7F6E\u540D\u5B57\uFF0C\u8BBE\u7F6E\u5BB9\u91CF)\r
\r
\u4F60\u5FC5\u987B\u5728\u5BF9GUI\u8FDB\u884C\u64CD\u4F5C\u4E4B\u524D\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002\uFF08\u6BD4\u5982\u6DFB\u52A0\u7269\u54C1\uFF0C\u6E05\u7A7A\u7269\u54C1)\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### presetPage()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void presetPage(ViewType type);\r
\`\`\`\r
\u4F7F\u7528\u9884\u8BBE\u9875\u9762\u3002\r
\r
\u4F60\u53EF\u4EE5\u4F7F\u7528\u9884\u8BBE\u754C\u9762\u6765\u521B\u5EFA\u4E00\u4E2AGUI\u3002\r
\r
\u53C2\u6570\uFF1A\`ViewType\` \u754C\u9762\u9884\u8BBE\u679A\u4E3E\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### setItem()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void setItem(int position, ItemStack item);\r
\`\`\`\r
\r
\u5728GUI\u4E2D\u7684\u4E00\u4E2A\u4F4D\u7F6E\u8BBE\u7F6E\u4E00\u4E2A\u7269\u54C1\u3002\r
\r
\u5F53\u6B64\u4F4D\u7F6E\u5B58\u5728\u7269\u54C1\u65F6\uFF0C\u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u4F1A\u81EA\u52A8\u79FB\u5230\u4E0B\u4E2A\u683C\u5B50\u3002\u5982\u679C\u8981\u8BBE\u7F6E\u7684\u683C\u5B50\u662FGUI\u7684\u6700\u540E\u4E00\u4E2A\u683C\u5B50\u4E14\u5DF2\u7ECF\u6709\u4E86\u7269\u54C1\u5E76\u4E14autoAddPage\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u4F1A\u81EA\u52A8\u751F\u6210\u4E0B\u4E00\u9875\u3002\r
\r
\u53C2\u6570\uFF1A\r
1. \`int\` \u8981\u8BBE\u7F6E\u7684\u4F4D\u7F6E\r
2. \`ItemStack\` \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### forceSetItem()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void forceSetItem(int position, ItemStack item) throws IndexOutOfBoundsException;\r
\`\`\`\r
\r
\u5728GUI\u4E2D\u7684\u4E00\u4E2A\u4F4D\u7F6E\u5F3A\u5236\u8BBE\u7F6E\u4E00\u4E2A\u7269\u54C1\u3002\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u8003\u8651\u4F4D\u7F6E\u662F\u5426\u6709\u7269\u54C1\uFF0C\u5E76\u4E14\u5F53\u4F4D\u7F6E\u5927\u4E8EGUI\u5BB9\u91CF\u65F6\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u751F\u6210\u4E0B\u4E00\u9875\uFF0C\u6240\u4EE5\u5F53\u4F60\u5C1D\u8BD5\u5C06\u4E00\u4E2A\u7269\u54C1\u8BBE\u7F6E\u5230\u5927\u4E8EGUI\u5BB9\u91CF\u7684\u4F4D\u7F6E\u65F6\u4F1A\u629B\u51FA\`IndexOutOfBoundsException\`\u5F02\u5E38\u3002\r
\r
\u53C2\u6570\uFF1A\r
1. \`int\` \u8981\u8BBE\u7F6E\u7684\u4F4D\u7F6E\r
2. \`ItemStack\` \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
\r
\u629B\u51FA\uFF1A\`IndexOutOfBoundsException\`\r
:::\r
### addItem()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void addItem(ItemStack item);\r
\`\`\`\r
\r
\u5411\u754C\u9762\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u7269\u54C1\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u5411\u4E00\u4E2A\u754C\u9762\u4E2D\u6DFB\u52A0\u7269\u54C1\uFF0C\u7269\u54C1\u4F1A\u81EA\u52A8\u5806\u53E0\u5982\u679C\u7269\u54C1\u5C5E\u6027\u76F8\u540C\u3002\r
\r
\u53C2\u6570\uFF1A\`ItemStack\` \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### getInventory()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
Inventory getInventory();\r
\`\`\`\r
\r
\u83B7\u53D6Inventory\u5BF9\u8C61\r
\r
\u5728\u901A\u8FC7\u8FD9\u4E2A\u65B9\u6CD5\u83B7\u53D6InventoryManager\u7684Inventory\u5BF9\u8C61\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u8C03\u7528[create()](#create)\u65B9\u6CD5\uFF0C\u5426\u5219\u4F1A\u8FD4\u56DEnull\uFF01\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### getTitle()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
String getTitle();\r
\`\`\`\r
\r
\u83B7\u53D6\u8FD9\u4E2Ainventory\u7684\u6807\u9898\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`String\` \u6807\u9898\r
:::\r
### getGroupTitle()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
String getGroupTitle();\r
\`\`\`\r
\r
\u83B7\u53D6\u8FD9\u4E2AinventoryManager\u7684\u7EC4\u540D\r
\r
\u7EC4\u540D\u4E00\u822C\u51FA\u73B0\u5728\u6B64\u754C\u9762\u62E5\u6709\u591A\u4E2A\u9875\u9762\u65F6\u3002\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`String\` \u7EC4\u540D\r
:::\r
### getSize()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
int getSize();\r
\`\`\`\r
\r
\u83B7\u53D6Inventory\u7684\u5927\u5C0F\r
\r
\u5728\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u8C03\u7528[create()](#create)\u65B9\u6CD5\u3002\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`int\` \u5927\u5C0F\r
:::\r
### getPageNumber()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
int getPageNumber();\r
\`\`\`\r
\r
\u83B7\u53D6\u6B64\u9875\u9762\u7684\u9875\u7801\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`int\` \u9875\u7801\r
:::\r
### isPageButtonEnabled()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
boolean isPageButtonEnabled();\r
\`\`\`\r
\r
\u83B7\u53D6\u662F\u5426\u5F00\u542F\u4E86\u9875\u9762\u6309\u94AE\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`boolean\` \u662F\u5426\u5F00\u542F\u4E86\u9875\u9762\u6309\u94AE\r
:::\r
### isLastLineDisabled()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
boolean isLastLineDisabled();\r
\`\`\`\r
\r
\u83B7\u53D6\u6700\u540E\u4E00\u884C\u662F\u5426\u4E0D\u5141\u8BB8\u8BBE\u7F6E\u7269\u54C1\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`boolean\` \u662F\u5426\u6700\u540E\u4E00\u884C\u4E0D\u5141\u8BB8\u8BBE\u7F6E\u7269\u54C1\r
:::\r
### clearView()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void clearView();\r
\`\`\`\r
\r
\u6E05\u7A7A\u9875\u9762\r
\r
\u6E05\u9664\u9875\u9762\u4E0A\u7684\u6240\u6709\u7269\u54C1\u3002\u4F46\u662F\u5982\u679C\u6700\u540E\u4E00\u884C\u88AB\u7981\u6B62\u8BBE\u7F6E\uFF0C\u5219\u4E0D\u4F1A\u6E05\u9664\u6700\u540E\u4E00\u884C\u7684\u7269\u54C1\u3002\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### setBackgroundColor()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void setBackgroundColor(@Nullable Colors backgroundColor);\r
\`\`\`\r
\r
\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\u3002\r
\r
\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\uFF0C\u4E0D\u4F1A\u8986\u76D6\u7269\u54C1\u3002\r
\r
\u53C2\u6570\uFF1A\`Colors\` \u80CC\u666F\u8272\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### clearBackGround()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void clearBackGround();\r
\`\`\`\r
\r
\u5220\u9664\u6240\u6709\u80CC\u666F\u989C\u8272\u7269\u54C1\u3002\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### isBackGround()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
boolean isBackGround(@Nullable ItemStack item);\r
\`\`\`\r
\r
\u68C0\u67E5\u4E00\u4E2A\u7269\u54C1\u662F\u5426\u4E3A\u80CC\u666F\u989C\u8272\u7269\u54C1\u3002\r
\r
\u53C2\u6570\uFF1A\`ItemStack\` \u8981\u68C0\u67E5\u7684\u7269\u54C1\u5806\r
\r
\u8FD4\u56DE\uFF1A\`boolean\` \u662F\u5426\u4E3A\u80CC\u666F\u8272\u7269\u54C1\r
:::\r
### setMiddleButton()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void setMiddleButton(Buttons middleButton);\r
\`\`\`\r
\r
\u8BBE\u7F6E\u4E2D\u95F4\u6309\u94AE\r
\r
\u53C2\u6570\uFF1A\`Buttons\` \u6309\u94AE\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### setPageButtonEnabled()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void setPageButtonEnabled(boolean isPageButtonEnabled);\r
\`\`\`\r
\r
\u8BBE\u7F6E\u662F\u5426\u5F00\u542F\u7FFB\u9875\u6309\u94AE\r
\r
\u53C2\u6570\uFF1A\`boolean\` \u662F\u5426\u5F00\u542F\u7FFB\u9875\u6309\u94AE\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### setLastLineDisabled()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void setLastLineDisabled(boolean disabled);\r
\`\`\`\r
\r
\u8BBE\u7F6E\u662F\u5426\u7981\u6B62\u8BBE\u7F6EGUI\u6700\u540E\u4E00\u6392\r
\r
\u53C2\u6570\uFF1A\`boolean\` \u662F\u5426\u7981\u6B62\u8BBE\u7F6EGUI\u6700\u540E\u4E00\u6392\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::`,contentRendered:`<h1 id="inventory-api" tabindex="-1"><a class="header-anchor" href="#inventory-api" aria-hidden="true">#</a> Inventory API <Badge text="UltiCore 1.0.0+" vertical="middle"/></h1>
<h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h2>
<p>\u4F7F\u7528\u8FD9\u4E2AAPI\u5EFA\u7ACB\u4E00\u4E2A\u754C\u9762\u4F60\u4F1A\u4F53\u4F1A\u5230\u65E0\u4E0E\u4F26\u6BD4\u7684\u5FEB\u901F\u4E0E\u7B80\u5355\uFF0C\u4F60\u53EA\u9700\u8981\u56DB\u884C\u4EE3\u7801\u5373\u53EF\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u7684\u9884\u8BBEGUI\u754C\u9762\u3002</p>
<h3 id="\u5B9E\u4F8B\u5316pageregister" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5316pageregister" aria-hidden="true">#</a> \u5B9E\u4F8B\u5316PageRegister</h3>
<p>\u9996\u5148\u4F60\u9700\u8981\u5728\u4E3B\u7C7B\u521B\u5EFA\u4E00\u4E2AGetter\uFF1A</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">PageRegister</span> <span class="token function">getPageRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pageRegister<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>Getter\u7684\u65B9\u6CD5\u540D\u4E00\u5B9A\u662F<code v-pre>getPageRegister</code></p>
</div><p>\u7136\u540E\u5728\u4E3B\u7C7B\u5B9E\u4F8B\u5316<code v-pre>PageRegister</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>pageRegister <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageRegister</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u754C\u9762" aria-hidden="true">#</a> \u521B\u5EFA\u754C\u9762</h3>
<p>\u4E0B\u9762\u7684\u793A\u4F8B\u521B\u5EFA\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u754C\u9762\uFF1A</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InventoryManager</span> inventoryManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InventoryManager</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">,</span> <span class="token string">"\u6211\u7684\u7B2C\u4E00\u4E2AGUI"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inventoryManager<span class="token punctuation">.</span><span class="token function">presetPage</span><span class="token punctuation">(</span><span class="token class-name">ViewType</span><span class="token punctuation">.</span>PREVIOUS_QUIT_NEXT<span class="token punctuation">)</span><span class="token punctuation">;</span>
inventoryManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ViewManager</span><span class="token punctuation">.</span><span class="token function">registerView</span><span class="token punctuation">(</span>inventoryManager<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u6301\u6709\u8005\u768454\u683C\u7684\u53EB\u505A\u201C\u6211\u7684\u7B2C\u4E00\u4E2AGUI\u201D\u7684\u754C\u9762\uFF0C\u5E76\u4E14\u4ED6\u7684\u4E0B\u65B9\u6709\u4E09\u4E2A\u6309\u94AE\uFF0C\u5206\u522B\u662F\u201C\u4E0A\u4E00\u9875\u201D\uFF0C\u201C\u9000\u51FA\u201D\u548C\u201C\u4E0B\u4E00\u9875\u201D\uFF0C\u80CC\u666F\u4E3A\u7070\u8272\u3002</p>
<h3 id="\u521B\u5EFA\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u76D1\u542C\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u76D1\u542C\u5668</h3>
<p>\u63A5\u4E0B\u6765\u7F16\u5199\u76D1\u542C\u5668\uFF0C\u5373\u76D1\u542C\u9F20\u6807\u70B9\u51FB\u7684\u7269\u54C1\u7684\u7C7B\u3002
\u76D1\u542C\u5668\u5E76\u975E\u662F\u5B9E\u73B0Bukkit\u81EA\u5E26\u7684Listener\uFF0C\u800C\u662F\u7EE7\u627FPagesListener\uFF1A</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Listener</span> <span class="token keyword">extends</span> <span class="token class-name">PagesListener</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onItemClick</span><span class="token punctuation">(</span><span class="token class-name">InventoryClickEvent</span> event<span class="token punctuation">,</span> <span class="token class-name">Player</span> player<span class="token punctuation">,</span> <span class="token class-name">InventoryManager</span> inventoryManager<span class="token punctuation">,</span> <span class="token class-name">ItemStack</span> clickedItem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do what you want to do.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u9700\u8981\u5728\u4E3B\u7C7B\u6CE8\u518C\u6B64\u4E8B\u4EF6\uFF0C\u5C31\u548C\u6B63\u5E38\u7684\u76D1\u542C\u5668\u4E8B\u4EF6\u6CE8\u518C\u4E00\u6837\u7684\u6B65\u9AA4\u3002</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPluginManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E76\u4E14\u5728Listener\u7C7B\u7684onItemClick\u4E2D\u65E0\u9700\u5173\u5FC3\u6700\u4E0B\u65B9\u83DC\u5355\u680F\u7684\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5DF2\u7ECF\u5168\u90E8\u9884\u5904\u7406\u597D\u4E86\u3002
\u81F3\u6B64\uFF0C\u4E00\u4E2A\u53EF\u4EE5\u4F7F\u7528\u7684GUI\u754C\u9762\u5C31\u505A\u5B8C\u4E86\u3002</p>
<h2 id="\u9884\u8BBE\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u9884\u8BBE\u754C\u9762" aria-hidden="true">#</a> \u9884\u8BBE\u754C\u9762</h2>
<p>\u5728ViewType\u679A\u4E3E\u7C7B\u4E2D\uFF0C\u6709\u4E09\u79CD\u754C\u9762\u9884\u8BBE\uFF0C\u5206\u522B\u662F\uFF1A</p>
<ul>
<li><code v-pre>OK_CANCEL</code> \u786E\u8BA4/\u53D6\u6D88\u754C\u9762</li>
<li><code v-pre>PREVIOUS_QUIT_NEXT</code> \u7FFB\u9875/\u9000\u51FA\u754C\u9762</li>
<li><code v-pre>PREVIOUS_BACK_NEXT</code> \u7FFB\u9875/\u8FD4\u56DE\u754C\u9762</li>
</ul>
<h3 id="\u786E\u8BA4-\u53D6\u6D88\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u786E\u8BA4-\u53D6\u6D88\u754C\u9762" aria-hidden="true">#</a> \u786E\u8BA4/\u53D6\u6D88\u754C\u9762</h3>
<p>\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u786E\u8BA4\u548C\u53D6\u6D88\u7684\u573A\u666F\u3002</p>
<p>\u65B9\u6CD5\u8C03\u7528</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InventoryManager</span><span class="token punctuation">.</span><span class="token function">presetPage</span><span class="token punctuation">(</span><span class="token class-name">ViewType</span><span class="token punctuation">.</span>OK_CANCEL<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u754C\u9762\u5C5E\u6027</p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027</th>
<th>\u4ECB\u7ECD</th>
<th>\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>isPageButtonEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u7FFB\u9875</td>
<td>False</td>
</tr>
<tr>
<td>autoAddPage</td>
<td>\u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762</td>
<td>False</td>
</tr>
<tr>
<td>isLastLineDisabled</td>
<td>\u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1</td>
<td>True</td>
</tr>
<tr>
<td>backGroundColor</td>
<td>\u80CC\u666F\u8272</td>
<td>BackGround.GRAY</td>
</tr>
<tr>
<td>middleButton</td>
<td>\u4E2D\u95F4\u7684\u6309\u94AE</td>
<td>null</td>
</tr>
<tr>
<td>pageNumber</td>
<td>\u9884\u8BBE\u9875</td>
<td>0</td>
</tr>
<tr>
<td>isOkCancelEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE</td>
<td>True</td>
</tr>
</tbody>
</table>
<h3 id="\u7FFB\u9875-\u9000\u51FA\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u7FFB\u9875-\u9000\u51FA\u754C\u9762" aria-hidden="true">#</a> \u7FFB\u9875/\u9000\u51FA\u754C\u9762</h3>
<p>\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u9700\u8981\u7FFB\u9875\u4E14\u6CA1\u6709\u4E0A\u4E00\u7EA7\u754C\u9762\u7684\u573A\u666F\u3002\u200C</p>
<p>\u70B9\u51FB\u4E0B\u4E00\u9875\u5373\u53EF\u8FDB\u5165\u4E0B\u4E00\u9875\uFF0C\u70B9\u51FB\u4E0A\u4E00\u9875\u540C\u7406\u3002\u70B9\u51FB\u9000\u51FA\u5219\u5173\u95ED\u754C\u9762\u3002</p>
<p>\u65B9\u6CD5\u8C03\u7528</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InventoryManager</span><span class="token punctuation">.</span><span class="token function">presetPage</span><span class="token punctuation">(</span><span class="token class-name">ViewType</span><span class="token punctuation">.</span>PREVIOUS_QUIT_NEXT<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u754C\u9762\u5C5E\u6027</p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027</th>
<th>\u4ECB\u7ECD</th>
<th>\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>isPageButtonEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u7FFB\u9875</td>
<td>True</td>
</tr>
<tr>
<td>autoAddPage</td>
<td>\u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762</td>
<td>True</td>
</tr>
<tr>
<td>isLastLineDisabled</td>
<td>\u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1</td>
<td>True</td>
</tr>
<tr>
<td>backGroundColor</td>
<td>\u80CC\u666F\u8272</td>
<td>BackGround.GRAY</td>
</tr>
<tr>
<td>middleButton</td>
<td>\u4E2D\u95F4\u7684\u6309\u94AE</td>
<td>Button.QUIT</td>
</tr>
<tr>
<td>pageNumber</td>
<td>\u9884\u8BBE\u9875</td>
<td>1</td>
</tr>
<tr>
<td>isOkCancelEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE</td>
<td>False</td>
</tr>
</tbody>
</table>
<h3 id="\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762" aria-hidden="true">#</a> \u7FFB\u9875/\u8FD4\u56DE\u754C\u9762</h3>
<p>\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u9700\u8981\u7FFB\u9875\u4E14\u6709\u4E0A\u4E00\u7EA7\u754C\u9762\u7684\u573A\u666F\u3002\u200C</p>
<p>\u70B9\u51FB\u4E0B\u4E00\u9875\u5373\u53EF\u8FDB\u5165\u4E0B\u4E00\u9875\uFF0C\u70B9\u51FB\u4E0A\u4E00\u9875\u540C\u7406\u3002\u70B9\u51FB\u9000\u51FA\u5219\u8FD4\u56DE\u4E4B\u524D\u7684\u754C\u9762\u3002</p>
<p>\u65B9\u6CD5\u8C03\u7528</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InventoryManager</span><span class="token punctuation">.</span><span class="token function">presetPage</span><span class="token punctuation">(</span><span class="token class-name">ViewType</span><span class="token punctuation">.</span>PREVIOUS_BACK_NEXT<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u754C\u9762\u5C5E\u6027</p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027</th>
<th>\u4ECB\u7ECD</th>
<th>\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>isPageButtonEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u7FFB\u9875</td>
<td>True</td>
</tr>
<tr>
<td>autoAddPage</td>
<td>\u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762</td>
<td>True</td>
</tr>
<tr>
<td>isLastLineDisabled</td>
<td>\u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1</td>
<td>True</td>
</tr>
<tr>
<td>backGroundColor</td>
<td>\u80CC\u666F\u8272</td>
<td>BackGround.GRAY</td>
</tr>
<tr>
<td>middleButton</td>
<td>\u4E2D\u95F4\u7684\u6309\u94AE</td>
<td>Button.BACK</td>
</tr>
<tr>
<td>pageNumber</td>
<td>\u9884\u8BBE\u9875</td>
<td>1</td>
</tr>
<tr>
<td>isOkCancelEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE</td>
<td>False</td>
</tr>
</tbody>
</table>
<h2 id="inventorymanager" tabindex="-1"><a class="header-anchor" href="#inventorymanager" aria-hidden="true">#</a> InventoryManager</h2>
<p>\u8FD9\u91CC\u4ECB\u7ECD\u4E86InventoryManager\u7684\u6240\u6709\u65B9\u6CD5\u3002</p>
<h3 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFAinventory\u5BF9\u8C61\u3002</p>
<p>\u4F60\u5FC5\u987B\u5728\u5B8C\u6210\u6240\u6709\u5BF9GUI\u7684\u8BBE\u7F6E\u7684\u540E\u624D\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002(\u6BD4\u5982\u8BBE\u7F6E\u540D\u5B57\uFF0C\u8BBE\u7F6E\u5BB9\u91CF)</p>
<p>\u4F60\u5FC5\u987B\u5728\u5BF9GUI\u8FDB\u884C\u64CD\u4F5C\u4E4B\u524D\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002\uFF08\u6BD4\u5982\u6DFB\u52A0\u7269\u54C1\uFF0C\u6E05\u7A7A\u7269\u54C1)</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="presetpage" tabindex="-1"><a class="header-anchor" href="#presetpage" aria-hidden="true">#</a> presetPage()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">presetPage</span><span class="token punctuation">(</span><span class="token class-name">ViewType</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528\u9884\u8BBE\u9875\u9762\u3002</p>
<p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u9884\u8BBE\u754C\u9762\u6765\u521B\u5EFA\u4E00\u4E2AGUI\u3002</p>
<p>\u53C2\u6570\uFF1A<code v-pre>ViewType</code> \u754C\u9762\u9884\u8BBE\u679A\u4E3E</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="setitem" tabindex="-1"><a class="header-anchor" href="#setitem" aria-hidden="true">#</a> setItem()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setItem</span><span class="token punctuation">(</span><span class="token keyword">int</span> position<span class="token punctuation">,</span> <span class="token class-name">ItemStack</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728GUI\u4E2D\u7684\u4E00\u4E2A\u4F4D\u7F6E\u8BBE\u7F6E\u4E00\u4E2A\u7269\u54C1\u3002</p>
<p>\u5F53\u6B64\u4F4D\u7F6E\u5B58\u5728\u7269\u54C1\u65F6\uFF0C\u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u4F1A\u81EA\u52A8\u79FB\u5230\u4E0B\u4E2A\u683C\u5B50\u3002\u5982\u679C\u8981\u8BBE\u7F6E\u7684\u683C\u5B50\u662FGUI\u7684\u6700\u540E\u4E00\u4E2A\u683C\u5B50\u4E14\u5DF2\u7ECF\u6709\u4E86\u7269\u54C1\u5E76\u4E14autoAddPage\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u4F1A\u81EA\u52A8\u751F\u6210\u4E0B\u4E00\u9875\u3002</p>
<p>\u53C2\u6570\uFF1A</p>
<ol>
<li><code v-pre>int</code> \u8981\u8BBE\u7F6E\u7684\u4F4D\u7F6E</li>
<li><code v-pre>ItemStack</code> \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806</li>
</ol>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="forcesetitem" tabindex="-1"><a class="header-anchor" href="#forcesetitem" aria-hidden="true">#</a> forceSetItem()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">forceSetItem</span><span class="token punctuation">(</span><span class="token keyword">int</span> position<span class="token punctuation">,</span> <span class="token class-name">ItemStack</span> item<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IndexOutOfBoundsException</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728GUI\u4E2D\u7684\u4E00\u4E2A\u4F4D\u7F6E\u5F3A\u5236\u8BBE\u7F6E\u4E00\u4E2A\u7269\u54C1\u3002</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u8003\u8651\u4F4D\u7F6E\u662F\u5426\u6709\u7269\u54C1\uFF0C\u5E76\u4E14\u5F53\u4F4D\u7F6E\u5927\u4E8EGUI\u5BB9\u91CF\u65F6\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u751F\u6210\u4E0B\u4E00\u9875\uFF0C\u6240\u4EE5\u5F53\u4F60\u5C1D\u8BD5\u5C06\u4E00\u4E2A\u7269\u54C1\u8BBE\u7F6E\u5230\u5927\u4E8EGUI\u5BB9\u91CF\u7684\u4F4D\u7F6E\u65F6\u4F1A\u629B\u51FA<code v-pre>IndexOutOfBoundsException</code>\u5F02\u5E38\u3002</p>
<p>\u53C2\u6570\uFF1A</p>
<ol>
<li><code v-pre>int</code> \u8981\u8BBE\u7F6E\u7684\u4F4D\u7F6E</li>
<li><code v-pre>ItemStack</code> \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806</li>
</ol>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
<p>\u629B\u51FA\uFF1A<code v-pre>IndexOutOfBoundsException</code></p>
</details><h3 id="additem" tabindex="-1"><a class="header-anchor" href="#additem" aria-hidden="true">#</a> addItem()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token class-name">ItemStack</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5411\u754C\u9762\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u7269\u54C1</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u5411\u4E00\u4E2A\u754C\u9762\u4E2D\u6DFB\u52A0\u7269\u54C1\uFF0C\u7269\u54C1\u4F1A\u81EA\u52A8\u5806\u53E0\u5982\u679C\u7269\u54C1\u5C5E\u6027\u76F8\u540C\u3002</p>
<p>\u53C2\u6570\uFF1A<code v-pre>ItemStack</code> \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="getinventory" tabindex="-1"><a class="header-anchor" href="#getinventory" aria-hidden="true">#</a> getInventory()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Inventory</span> <span class="token function">getInventory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6Inventory\u5BF9\u8C61</p>
<p>\u5728\u901A\u8FC7\u8FD9\u4E2A\u65B9\u6CD5\u83B7\u53D6InventoryManager\u7684Inventory\u5BF9\u8C61\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u8C03\u7528<a href="#create">create()</a>\u65B9\u6CD5\uFF0C\u5426\u5219\u4F1A\u8FD4\u56DEnull\uFF01</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="gettitle" tabindex="-1"><a class="header-anchor" href="#gettitle" aria-hidden="true">#</a> getTitle()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> <span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u8FD9\u4E2Ainventory\u7684\u6807\u9898</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>String</code> \u6807\u9898</p>
</details><h3 id="getgrouptitle" tabindex="-1"><a class="header-anchor" href="#getgrouptitle" aria-hidden="true">#</a> getGroupTitle()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> <span class="token function">getGroupTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u8FD9\u4E2AinventoryManager\u7684\u7EC4\u540D</p>
<p>\u7EC4\u540D\u4E00\u822C\u51FA\u73B0\u5728\u6B64\u754C\u9762\u62E5\u6709\u591A\u4E2A\u9875\u9762\u65F6\u3002</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>String</code> \u7EC4\u540D</p>
</details><h3 id="getsize" tabindex="-1"><a class="header-anchor" href="#getsize" aria-hidden="true">#</a> getSize()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6Inventory\u7684\u5927\u5C0F</p>
<p>\u5728\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u8C03\u7528<a href="#create">create()</a>\u65B9\u6CD5\u3002</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>int</code> \u5927\u5C0F</p>
</details><h3 id="getpagenumber" tabindex="-1"><a class="header-anchor" href="#getpagenumber" aria-hidden="true">#</a> getPageNumber()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">getPageNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u6B64\u9875\u9762\u7684\u9875\u7801</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>int</code> \u9875\u7801</p>
</details><h3 id="ispagebuttonenabled" tabindex="-1"><a class="header-anchor" href="#ispagebuttonenabled" aria-hidden="true">#</a> isPageButtonEnabled()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">isPageButtonEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u662F\u5426\u5F00\u542F\u4E86\u9875\u9762\u6309\u94AE</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>boolean</code> \u662F\u5426\u5F00\u542F\u4E86\u9875\u9762\u6309\u94AE</p>
</details><h3 id="islastlinedisabled" tabindex="-1"><a class="header-anchor" href="#islastlinedisabled" aria-hidden="true">#</a> isLastLineDisabled()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">isLastLineDisabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u6700\u540E\u4E00\u884C\u662F\u5426\u4E0D\u5141\u8BB8\u8BBE\u7F6E\u7269\u54C1</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>boolean</code> \u662F\u5426\u6700\u540E\u4E00\u884C\u4E0D\u5141\u8BB8\u8BBE\u7F6E\u7269\u54C1</p>
</details><h3 id="clearview" tabindex="-1"><a class="header-anchor" href="#clearview" aria-hidden="true">#</a> clearView()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">clearView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E05\u7A7A\u9875\u9762</p>
<p>\u6E05\u9664\u9875\u9762\u4E0A\u7684\u6240\u6709\u7269\u54C1\u3002\u4F46\u662F\u5982\u679C\u6700\u540E\u4E00\u884C\u88AB\u7981\u6B62\u8BBE\u7F6E\uFF0C\u5219\u4E0D\u4F1A\u6E05\u9664\u6700\u540E\u4E00\u884C\u7684\u7269\u54C1\u3002</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="setbackgroundcolor" tabindex="-1"><a class="header-anchor" href="#setbackgroundcolor" aria-hidden="true">#</a> setBackgroundColor()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setBackgroundColor</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Colors</span> backgroundColor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\u3002</p>
<p>\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\uFF0C\u4E0D\u4F1A\u8986\u76D6\u7269\u54C1\u3002</p>
<p>\u53C2\u6570\uFF1A<code v-pre>Colors</code> \u80CC\u666F\u8272</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="clearbackground" tabindex="-1"><a class="header-anchor" href="#clearbackground" aria-hidden="true">#</a> clearBackGround()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">clearBackGround</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5220\u9664\u6240\u6709\u80CC\u666F\u989C\u8272\u7269\u54C1\u3002</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="isbackground" tabindex="-1"><a class="header-anchor" href="#isbackground" aria-hidden="true">#</a> isBackGround()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">isBackGround</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ItemStack</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u68C0\u67E5\u4E00\u4E2A\u7269\u54C1\u662F\u5426\u4E3A\u80CC\u666F\u989C\u8272\u7269\u54C1\u3002</p>
<p>\u53C2\u6570\uFF1A<code v-pre>ItemStack</code> \u8981\u68C0\u67E5\u7684\u7269\u54C1\u5806</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>boolean</code> \u662F\u5426\u4E3A\u80CC\u666F\u8272\u7269\u54C1</p>
</details><h3 id="setmiddlebutton" tabindex="-1"><a class="header-anchor" href="#setmiddlebutton" aria-hidden="true">#</a> setMiddleButton()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setMiddleButton</span><span class="token punctuation">(</span><span class="token class-name">Buttons</span> middleButton<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u4E2D\u95F4\u6309\u94AE</p>
<p>\u53C2\u6570\uFF1A<code v-pre>Buttons</code> \u6309\u94AE</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="setpagebuttonenabled" tabindex="-1"><a class="header-anchor" href="#setpagebuttonenabled" aria-hidden="true">#</a> setPageButtonEnabled()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setPageButtonEnabled</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> isPageButtonEnabled<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u662F\u5426\u5F00\u542F\u7FFB\u9875\u6309\u94AE</p>
<p>\u53C2\u6570\uFF1A<code v-pre>boolean</code> \u662F\u5426\u5F00\u542F\u7FFB\u9875\u6309\u94AE</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="setlastlinedisabled" tabindex="-1"><a class="header-anchor" href="#setlastlinedisabled" aria-hidden="true">#</a> setLastLineDisabled()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setLastLineDisabled</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> disabled<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u662F\u5426\u7981\u6B62\u8BBE\u7F6EGUI\u6700\u540E\u4E00\u6392</p>
<p>\u53C2\u6570\uFF1A<code v-pre>boolean</code> \u662F\u5426\u7981\u6B62\u8BBE\u7F6EGUI\u6700\u540E\u4E00\u6392</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/inventory.html",pathLocale:"/",permalink:null,routeMeta:{title:"Inventory API"},slug:"inventory",filePath:"D:/dev_doc/docs/dev/inventory.md",filePathRelative:"docs/dev/inventory.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/inventory.html.vue",componentFilePathRelative:"pages/docs/dev/inventory.html.vue",componentFileChunkName:"v-3c7b0f72",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/inventory.html.js",dataFilePathRelative:"pages/docs/dev/inventory.html.js",dataFileChunkName:"v-3c7b0f72",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/inventory.html",htmlFilePathRelative:"docs/dev/inventory.html"},{data:{key:"v-7ffe88e0",path:"/docs/dev/listener.html",title:"\u4E8B\u4EF6\u76D1\u542C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1658037614e3,updatedTime:1658037614e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/listener.md"},key:"v-7ffe88e0",path:"/docs/dev/listener.html",title:"\u4E8B\u4EF6\u76D1\u542C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u4E8B\u4EF6\u76D1\u542C\u5668\r
\r
::: warning \u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C\r
\u5728 UltiTools 6.0 alpha \u524D\uFF0C\u4F60\u53EA\u9700\u8981\u6309\u7167\u6B63\u5E38\u6B65\u9AA4\u7F16\u5199\u5E76\u6CE8\u518C\u76D1\u542C\u5668\u5373\u53EF\r
:::\r
\r
\u5728UltiTools\u521B\u5EFA\u65B0\u7684\u547D\u4EE4\u6267\u884C\u5668\u6216\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u4E0E\u5E73\u5E38\u6709\u6240\u4E0D\u540C\r
\r
::: tip \u5F00\u53D1\u89C4\u8303\r
\u8BF7\u5C06\u76D1\u542C\u5668\u7C7B\u521B\u5EFA\u5728 \` com.ultikits.ultitools.listener \` \u4E0B\r
:::\r
\r
\u548C\u4E00\u822C\u6B65\u9AA4\u4E00\u6837\uFF0C\u4F60\u9700\u8981\u5B9E\u73B0 \` Listener \` \u63A5\u53E3\uFF0C\u5E76\u4E14\u5728\u76D1\u542C\u65B9\u6CD5\u4E0A\u4F7F\u7528  \` @EventHandler \` \u6CE8\u89E3\r
\r
\`\`\`java\r
@EventListener(function = "function_name")\r
public class ListenerName implements Listener {\r
\r
    @EventHandler\r
    public void onEvent(Event event){\r
        // do something...\r
    }\r
}\r
\`\`\`\r
\r
\u4F60\u4F1A\u53D1\u73B0\u8FD9\u4E2A\u76D1\u542C\u5668\u7C7B\u6709\u4E86\u4E00\u4E2A \` @EventListener \` \u6CE8\u89E3\r
\r
\u4F7F\u7528\u8FD9\u4E2A\u6CE8\u89E3\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5BF9\u8BE5\u76D1\u542C\u5668\u8FDB\u884C\u6CE8\u518C\uFF0C\u60A8\u65E0\u9700\u624B\u52A8\u6CE8\u518C\r
\r
\u8FD9\u4E2A\u6CE8\u89E3\u53EA\u6709\u4E00\u4E2A \` function \` \u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A core\r
\r
\u8BE5\u53C2\u6570\u586B\u5199\u8BE5\u76D1\u542C\u5668\u6240\u5C5E\u529F\u80FD\u7684\u540D\u79F0\uFF0C\u63D2\u4EF6\u4F1A\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u7684\u529F\u80FD\u5F00\u5173\u6765\u5224\u65AD\u662F\u5426\u8FDB\u884C\u6CE8\u518C\r
\r
\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5219\u63D2\u4EF6\u5C06\u9ED8\u8BA4\u6CE8\u518C\u8BE5\u76D1\u542C\u5668`,contentRendered:`<h1 id="\u4E8B\u4EF6\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C\u5668" aria-hidden="true">#</a> \u4E8B\u4EF6\u76D1\u542C\u5668</h1>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">\u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C</p><p>\u5728 UltiTools 6.0 alpha \u524D\uFF0C\u4F60\u53EA\u9700\u8981\u6309\u7167\u6B63\u5E38\u6B65\u9AA4\u7F16\u5199\u5E76\u6CE8\u518C\u76D1\u542C\u5668\u5373\u53EF</p>
</div><p>\u5728UltiTools\u521B\u5EFA\u65B0\u7684\u547D\u4EE4\u6267\u884C\u5668\u6216\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u4E0E\u5E73\u5E38\u6709\u6240\u4E0D\u540C</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u5F00\u53D1\u89C4\u8303</p><p>\u8BF7\u5C06\u76D1\u542C\u5668\u7C7B\u521B\u5EFA\u5728 <code v-pre>com.ultikits.ultitools.listener</code> \u4E0B</p>
</div><p>\u548C\u4E00\u822C\u6B65\u9AA4\u4E00\u6837\uFF0C\u4F60\u9700\u8981\u5B9E\u73B0 <code v-pre>Listener</code> \u63A5\u53E3\uFF0C\u5E76\u4E14\u5728\u76D1\u542C\u65B9\u6CD5\u4E0A\u4F7F\u7528  <code v-pre>@EventHandler</code> \u6CE8\u89E3</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@EventListener</span><span class="token punctuation">(</span>function <span class="token operator">=</span> <span class="token string">"function_name"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListenerName</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token class-name">Event</span> event<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u4F1A\u53D1\u73B0\u8FD9\u4E2A\u76D1\u542C\u5668\u7C7B\u6709\u4E86\u4E00\u4E2A <code v-pre>@EventListener</code> \u6CE8\u89E3</p>
<p>\u4F7F\u7528\u8FD9\u4E2A\u6CE8\u89E3\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5BF9\u8BE5\u76D1\u542C\u5668\u8FDB\u884C\u6CE8\u518C\uFF0C\u60A8\u65E0\u9700\u624B\u52A8\u6CE8\u518C</p>
<p>\u8FD9\u4E2A\u6CE8\u89E3\u53EA\u6709\u4E00\u4E2A <code v-pre>function</code> \u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A core</p>
<p>\u8BE5\u53C2\u6570\u586B\u5199\u8BE5\u76D1\u542C\u5668\u6240\u5C5E\u529F\u80FD\u7684\u540D\u79F0\uFF0C\u63D2\u4EF6\u4F1A\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u7684\u529F\u80FD\u5F00\u5173\u6765\u5224\u65AD\u662F\u5426\u8FDB\u884C\u6CE8\u518C</p>
<p>\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5219\u63D2\u4EF6\u5C06\u9ED8\u8BA4\u6CE8\u518C\u8BE5\u76D1\u542C\u5668</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/listener.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E8B\u4EF6\u76D1\u542C\u5668"},slug:"listener",filePath:"D:/dev_doc/docs/dev/listener.md",filePathRelative:"docs/dev/listener.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/listener.html.vue",componentFilePathRelative:"pages/docs/dev/listener.html.vue",componentFileChunkName:"v-7ffe88e0",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/listener.html.js",dataFilePathRelative:"pages/docs/dev/listener.html.js",dataFileChunkName:"v-7ffe88e0",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/listener.html",htmlFilePathRelative:"docs/dev/listener.html"},{data:{key:"v-58cdb6fc",path:"/docs/dev/packet.html",title:"Packet API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],git:{createdTime:1657943766e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/packet.md"},key:"v-58cdb6fc",path:"/docs/dev/packet.html",title:"Packet API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],content:`# Packet API <Badge text="UltiCore 1.2.5+" vertical="middle"/>\r
\r
::: warning \u8FD9\u662F\u5B9E\u9A8C\u6027\u529F\u80FD\r
\u8FD9\u4E2A\u529F\u80FD\u76EE\u524D\u4ECD\u5728\u5F00\u53D1\u6D4B\u8BD5\u4E2D\uFF0C\u53EF\u80FD\u5B58\u5728\u67D0\u4E9B\u95EE\u9898\r
:::\r
\r
## \u5FEB\u901F\u4E0A\u624B\r
\u548CBukkit\u7684\u4E8B\u4EF6\u76D1\u542C\u7C7B\u4F3C\uFF0C\u4F60\u9700\u8981\uFF1A\r
1. \u5B9E\u73B0\`PacketListener\`\u63A5\u53E3\r
2. \u4F7F\u7528\`@PacketHandler\`\u6CE8\u89E3\r
\r
\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A\r
<CodeGroup>\r
<CodeGroupItem title="DemoListener.java" active>\r
\r
\`\`\`java\r
public class DemoListener implements PacketListener, Listener {\r
\r
    @PacketHandler(type = PacketType.IN)\r
    public void OnPacketIn(PacketEvent event) {\r
        Packet packet = event.getPacket();\r
        UltiTools.getInstance().getLogger().info(packet.getHandle().getClass());\r
    }\r
\r
    @EventHandler\r
    public void onPlayerJoin(PlayerJoinEvent event) {\r
        Bukkit.getScheduler().runTask(UltiTools.getInstance(), PacketController.getPlayer(event.getPlayer())::hook);\r
    }\r
}\r
\`\`\`\r
\r
  </CodeGroupItem>\r
\r
  <CodeGroupItem title="Main.java">\r
\r
\`\`\`java\r
public class Main extends JavaPlugin {\r
    @Override\r
    public void onEnable() {\r
        PacketController.register(this);\r
        PacketController.registerListener(new DemoLsistener());\r
    }\r
}\r
\`\`\`\r
\r
  </CodeGroupItem>\r
</CodeGroup>\r
\r
1. \u6CE8\u89E3 \`PacketHandler\` \u53EF\u4EE5\u8BA9\u4E00\u4E2A\u65B9\u6CD5\u4F5C\u4E3A\u4E00\u4E2A\u6570\u636E\u5305\u76D1\u542C\u5668\u65B9\u6CD5\r
2. \u63A5\u53E3 \`PacketListener\` \u53EF\u4EE5\u8BA9\u4E00\u4E2A\u7C7B\u4F5C\u4E3A\u6570\u636E\u5305\u76D1\u542C\u5668\u7C7B\r
\r
::: tip\r
\u9700\u8981\u5728\u73A9\u5BB6\u52A0\u5165\u6E38\u620F\u540E\u6267\u884C\`PacketController.getPlayer(event.getPlayer())::hook\`\u4F7F\u63D2\u4EF6\u80FD\u591F\u76D1\u542C\u4E0E\u8BE5\u73A9\u5BB6\u76F8\u5173\u7684\u6570\u636E\u5305\r
:::\r
\r
1. \u4F7F\u7528\`event.getPacket()\`\u83B7\u53D6\u6570\u636E\u5305\u5BF9\u8C61\r
2. \u4F7F\u7528\`event.getPacket().getHandle().getClass\`\u83B7\u53D6\u6570\u636E\u5305\u7C7B\uFF0C\u4F7F\u7528\u53CD\u5C04\u53EF\u4EE5\u83B7\u53D6\u548C\u4FEE\u6539\u6570\u636E\u5305\u7684\u5185\u5BB9\r
3. \u4F7F\u7528\`event.setCancelled()\`\u6765\u8BA9\u670D\u52A1\u7AEF\u662F\u5426\u5904\u7406\u8BE5\u6570\u636E\u5305`,contentRendered:`<h1 id="packet-api" tabindex="-1"><a class="header-anchor" href="#packet-api" aria-hidden="true">#</a> Packet API <Badge text="UltiCore 1.2.5+" vertical="middle"/></h1>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">\u8FD9\u662F\u5B9E\u9A8C\u6027\u529F\u80FD</p><p>\u8FD9\u4E2A\u529F\u80FD\u76EE\u524D\u4ECD\u5728\u5F00\u53D1\u6D4B\u8BD5\u4E2D\uFF0C\u53EF\u80FD\u5B58\u5728\u67D0\u4E9B\u95EE\u9898</p>
</div><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h2>
<p>\u548CBukkit\u7684\u4E8B\u4EF6\u76D1\u542C\u7C7B\u4F3C\uFF0C\u4F60\u9700\u8981\uFF1A</p>
<ol>
<li>\u5B9E\u73B0<code v-pre>PacketListener</code>\u63A5\u53E3</li>
<li>\u4F7F\u7528<code v-pre>@PacketHandler</code>\u6CE8\u89E3</li>
</ol>
<p>\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A</p>
<CodeGroup>
<CodeGroupItem title="DemoListener.java" active>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoListener</span> <span class="token keyword">implements</span> <span class="token class-name">PacketListener</span><span class="token punctuation">,</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@PacketHandler</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">PacketType</span><span class="token punctuation">.</span>IN<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">OnPacketIn</span><span class="token punctuation">(</span><span class="token class-name">PacketEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Packet</span> packet <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getPacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UltiTools</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>packet<span class="token punctuation">.</span><span class="token function">getHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPlayerJoin</span><span class="token punctuation">(</span><span class="token class-name">PlayerJoinEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">runTask</span><span class="token punctuation">(</span><span class="token class-name">UltiTools</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">PacketController</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">::</span><span class="token function">hook</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Main.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">extends</span> <span class="token class-name">JavaPlugin</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PacketController</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PacketController</span><span class="token punctuation">.</span><span class="token function">registerListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DemoLsistener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ol>
<li>\u6CE8\u89E3 <code v-pre>PacketHandler</code> \u53EF\u4EE5\u8BA9\u4E00\u4E2A\u65B9\u6CD5\u4F5C\u4E3A\u4E00\u4E2A\u6570\u636E\u5305\u76D1\u542C\u5668\u65B9\u6CD5</li>
<li>\u63A5\u53E3 <code v-pre>PacketListener</code> \u53EF\u4EE5\u8BA9\u4E00\u4E2A\u7C7B\u4F5C\u4E3A\u6570\u636E\u5305\u76D1\u542C\u5668\u7C7B</li>
</ol>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u9700\u8981\u5728\u73A9\u5BB6\u52A0\u5165\u6E38\u620F\u540E\u6267\u884C<code v-pre>PacketController.getPlayer(event.getPlayer())::hook</code>\u4F7F\u63D2\u4EF6\u80FD\u591F\u76D1\u542C\u4E0E\u8BE5\u73A9\u5BB6\u76F8\u5173\u7684\u6570\u636E\u5305</p>
</div><ol>
<li>\u4F7F\u7528<code v-pre>event.getPacket()</code>\u83B7\u53D6\u6570\u636E\u5305\u5BF9\u8C61</li>
<li>\u4F7F\u7528<code v-pre>event.getPacket().getHandle().getClass</code>\u83B7\u53D6\u6570\u636E\u5305\u7C7B\uFF0C\u4F7F\u7528\u53CD\u5C04\u53EF\u4EE5\u83B7\u53D6\u548C\u4FEE\u6539\u6570\u636E\u5305\u7684\u5185\u5BB9</li>
<li>\u4F7F\u7528<code v-pre>event.setCancelled()</code>\u6765\u8BA9\u670D\u52A1\u7AEF\u662F\u5426\u5904\u7406\u8BE5\u6570\u636E\u5305</li>
</ol>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/packet.html",pathLocale:"/",permalink:null,routeMeta:{title:"Packet API"},slug:"packet",filePath:"D:/dev_doc/docs/dev/packet.md",filePathRelative:"docs/dev/packet.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/packet.html.vue",componentFilePathRelative:"pages/docs/dev/packet.html.vue",componentFileChunkName:"v-58cdb6fc",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/packet.html.js",dataFilePathRelative:"pages/docs/dev/packet.html.js",dataFileChunkName:"v-58cdb6fc",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/packet.html",htmlFilePathRelative:"docs/dev/packet.html"},{data:{key:"v-74c49299",path:"/docs/dev/pro-checker.html",title:"Pro Checker API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/pro-checker.md"},key:"v-74c49299",path:"/docs/dev/pro-checker.html",title:"Pro Checker API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],content:`# Pro Checker API\r
\r
\u5982\u679C\u4F60\u9700\u8981\u68C0\u67E5\u63D2\u4EF6\u662F\u5426\u6FC0\u6D3B\u4E86Pro\u7248\u672C\uFF08\u4F8B\u5982\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF09\uFF0C\u90A3\u4E48\u5C31\u5E94\u8BE5\u4F7F\u7528\u8FD9\u4E2A\u63A5\u53E3\r
\r
::: danger\r
UltiTools\u662F\u5F00\u6E90\u63D2\u4EF6\uFF0C\u4F46\u8BF7\u4E0D\u8981\u5C06\u5254\u9664/\u7834\u89E3Pro\u9A8C\u8BC1\u7684\u63D2\u4EF6\u53D1\u5E03\u5230\u5404\u7F51\u7EDC\u5E73\u53F0\r
:::\r
\r
## \u83B7\u53D6\u5B9E\u4F8B\r
\r
\u9996\u5148\u4F60\u9700\u8981\u5B9E\u4F8B\u5316\u4E00\u4E2AProChecker\u5BF9\u8C61\r
\r
\u6784\u9020\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165UltiKits\u7684\u8D26\u53F7\u548C\u5BC6\u7801\r
\r
\`\`\`java\r
ProChecker proChecker = new ProChecker("username", "password");\r
\`\`\`\r
\r
\u7136\u540E\u5F97\u5230\u7684proChecker\u5373\u53EF\u7528\u4E8E\u9A8C\u8BC1Pro\u72B6\u6001\r
\r
## \u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001\r
\r
\u76F4\u63A5\u8C03\u7528 \` getProStatus() \` \u5373\u53EF\r
\r
\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u4F5C\u4E3A\u6FC0\u6D3B\u72B6\u6001\uFF0Ctrue\u4E3A\u5DF2\u6FC0\u6D3B\uFF0Cfalse\u4E3A\u672A\u6FC0\u6D3B\r
\r
::: warning\r
\u5982\u679C\u4F60\u8981\u8C03\u7528\u4E91\u7AEF\u529F\u80FD\uFF08\u4F8B\u5982\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF09\uFF0C\u90A3\u4E48\u5728\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u90FD\u662F\u8981\u8FDB\u884CPro\u9A8C\u8BC1\u7684\r
:::\r
\r
## \u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001\r
\r
\u6B63\u5E38\u60C5\u51B5\u4E0B Pro Checker \u4F1A\u81EA\u52A8\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001\uFF0C\u5982\u679C\u4F60\u9700\u8981\u624B\u52A8\u5237\u65B0\uFF0C\u90A3\u4E48\u4F60\u53EA\u9700\u8981\u8C03\u7528 \` validatePro() \` \u65B9\u6CD5\u5373\u53EF\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5237\u65B0\u7ED3\u679C\r
\r
| \u5B57\u7B26\u4E32                    | \u542B\u4E49                  |\r
|------------------------|---------------------|\r
| Login Failed!          | \u767B\u5F55\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u7F51\u7EDC\u95EE\u9898\u6216\u8D26\u53F7\u5BC6\u7801\u9519\u8BEF |\r
| Pro Version Activated! | Pro\u7248\u672C\u5DF2\u6FC0\u6D3B            |\r
| Pro Activate Failed!   | Pro\u7248\u672C\u672A\u6FC0\u6D3B            |\r
\r
\r
## \u4F7F\u7528 CD-Key \u9A8C\u8BC1\r
\r
::: danger \u5DF2\u5F03\u7528\u7684\u65B9\u6CD5\r
\u8FD9\u79CD\u9A8C\u8BC1\u65B9\u5F0F\u5728 UltiTools 5.0 \u540E\u88AB\u5F03\u7528\uFF0C\u8BF7\u4E0D\u8981\u7528\u8FD9\u79CD\u65B9\u5F0F\u9A8C\u8BC1\uFF01\r
:::\r
\r
\u8C03\u7528 \` validatePro() \` \u65B9\u6CD5\u5373\u53EF\u4F7F\u7528CD-Key\u9A8C\u8BC1\r
\r
\u4F60\u53EA\u9700\u8981\u4F20\u5165 CD-Key \u5B57\u7B26\u4E32\u5373\u53EF\r
\r
\`\`\`java\r
proChecker.validatePro("XXXX-XXXX-XXXX-XXXX")\r
\`\`\`\r
\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u9A8C\u8BC1\u7ED3\u679C`,contentRendered:`<h1 id="pro-checker-api" tabindex="-1"><a class="header-anchor" href="#pro-checker-api" aria-hidden="true">#</a> Pro Checker API</h1>
<p>\u5982\u679C\u4F60\u9700\u8981\u68C0\u67E5\u63D2\u4EF6\u662F\u5426\u6FC0\u6D3B\u4E86Pro\u7248\u672C\uFF08\u4F8B\u5982\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF09\uFF0C\u90A3\u4E48\u5C31\u5E94\u8BE5\u4F7F\u7528\u8FD9\u4E2A\u63A5\u53E3</p>
<div class="custom-container danger"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0-4l-4 4"></path></g></svg><p class="custom-container-title">DANGER</p><p>UltiTools\u662F\u5F00\u6E90\u63D2\u4EF6\uFF0C\u4F46\u8BF7\u4E0D\u8981\u5C06\u5254\u9664/\u7834\u89E3Pro\u9A8C\u8BC1\u7684\u63D2\u4EF6\u53D1\u5E03\u5230\u5404\u7F51\u7EDC\u5E73\u53F0</p>
</div><h2 id="\u83B7\u53D6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5B9E\u4F8B" aria-hidden="true">#</a> \u83B7\u53D6\u5B9E\u4F8B</h2>
<p>\u9996\u5148\u4F60\u9700\u8981\u5B9E\u4F8B\u5316\u4E00\u4E2AProChecker\u5BF9\u8C61</p>
<p>\u6784\u9020\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165UltiKits\u7684\u8D26\u53F7\u548C\u5BC6\u7801</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ProChecker</span> proChecker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProChecker</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u5F97\u5230\u7684proChecker\u5373\u53EF\u7528\u4E8E\u9A8C\u8BC1Pro\u72B6\u6001</p>
<h2 id="\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001" aria-hidden="true">#</a> \u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001</h2>
<p>\u76F4\u63A5\u8C03\u7528 <code v-pre>getProStatus()</code> \u5373\u53EF</p>
<p>\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u4F5C\u4E3A\u6FC0\u6D3B\u72B6\u6001\uFF0Ctrue\u4E3A\u5DF2\u6FC0\u6D3B\uFF0Cfalse\u4E3A\u672A\u6FC0\u6D3B</p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>\u5982\u679C\u4F60\u8981\u8C03\u7528\u4E91\u7AEF\u529F\u80FD\uFF08\u4F8B\u5982\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF09\uFF0C\u90A3\u4E48\u5728\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u90FD\u662F\u8981\u8FDB\u884CPro\u9A8C\u8BC1\u7684</p>
</div><h2 id="\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001" aria-hidden="true">#</a> \u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001</h2>
<p>\u6B63\u5E38\u60C5\u51B5\u4E0B Pro Checker \u4F1A\u81EA\u52A8\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001\uFF0C\u5982\u679C\u4F60\u9700\u8981\u624B\u52A8\u5237\u65B0\uFF0C\u90A3\u4E48\u4F60\u53EA\u9700\u8981\u8C03\u7528 <code v-pre>validatePro()</code> \u65B9\u6CD5\u5373\u53EF</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5237\u65B0\u7ED3\u679C</p>
<table>
<thead>
<tr>
<th>\u5B57\u7B26\u4E32</th>
<th>\u542B\u4E49</th>
</tr>
</thead>
<tbody>
<tr>
<td>Login Failed!</td>
<td>\u767B\u5F55\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u7F51\u7EDC\u95EE\u9898\u6216\u8D26\u53F7\u5BC6\u7801\u9519\u8BEF</td>
</tr>
<tr>
<td>Pro Version Activated!</td>
<td>Pro\u7248\u672C\u5DF2\u6FC0\u6D3B</td>
</tr>
<tr>
<td>Pro Activate Failed!</td>
<td>Pro\u7248\u672C\u672A\u6FC0\u6D3B</td>
</tr>
</tbody>
</table>
<h2 id="\u4F7F\u7528-cd-key-\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-cd-key-\u9A8C\u8BC1" aria-hidden="true">#</a> \u4F7F\u7528 CD-Key \u9A8C\u8BC1</h2>
<div class="custom-container danger"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0-4l-4 4"></path></g></svg><p class="custom-container-title">\u5DF2\u5F03\u7528\u7684\u65B9\u6CD5</p><p>\u8FD9\u79CD\u9A8C\u8BC1\u65B9\u5F0F\u5728 UltiTools 5.0 \u540E\u88AB\u5F03\u7528\uFF0C\u8BF7\u4E0D\u8981\u7528\u8FD9\u79CD\u65B9\u5F0F\u9A8C\u8BC1\uFF01</p>
</div><p>\u8C03\u7528 <code v-pre>validatePro()</code> \u65B9\u6CD5\u5373\u53EF\u4F7F\u7528CD-Key\u9A8C\u8BC1</p>
<p>\u4F60\u53EA\u9700\u8981\u4F20\u5165 CD-Key \u5B57\u7B26\u4E32\u5373\u53EF</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>proChecker<span class="token punctuation">.</span><span class="token function">validatePro</span><span class="token punctuation">(</span><span class="token string">"XXXX-XXXX-XXXX-XXXX"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u9A8C\u8BC1\u7ED3\u679C</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/pro-checker.html",pathLocale:"/",permalink:null,routeMeta:{title:"Pro Checker API"},slug:"pro-checker",filePath:"D:/dev_doc/docs/dev/pro-checker.md",filePathRelative:"docs/dev/pro-checker.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/pro-checker.html.vue",componentFilePathRelative:"pages/docs/dev/pro-checker.html.vue",componentFileChunkName:"v-74c49299",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/pro-checker.html.js",dataFilePathRelative:"pages/docs/dev/pro-checker.html.js",dataFileChunkName:"v-74c49299",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/pro-checker.html",htmlFilePathRelative:"docs/dev/pro-checker.html"},{data:{key:"v-1b43ba77",path:"/docs/dev/real-email.html",title:"Real Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/real-email.md"},key:"v-1b43ba77",path:"/docs/dev/real-email.html",title:"Real Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],content:`# Real Email API\r
\r
\u5982\u679C\u4F60\u9700\u8981\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\r
\r
::: info \u8FD9\u662FPro\u529F\u80FD\r
\u8BF7\u5148\u9A8C\u8BC1\u63D2\u4EF6\u7684Pro\u6FC0\u6D3B\u72B6\u6001\u518D\u8FDB\u884C\u53D1\u9001\u64CD\u4F5C\r
\r
\u5C31\u7B97\u6CA1\u6709\u9A8C\u8BC1\uFF0C\u4E91\u7AEF\u670D\u52A1\u5668\u4E5F\u4F1A\u56E0\u4E3APro\u672A\u6FC0\u6D3B\u800C\u62D2\u7EDD\u53D1\u9001\uFF0C\u4F46\u662F\u4F60\u65E0\u6CD5\u5F97\u77E5\u662F\u56E0\u4E3A\u6FC0\u6D3B\u95EE\u9898\u8FD8\u662F\u4E91\u7AEF\u670D\u52A1\u5668\u95EE\u9898\r
:::\r
\r
## \u53D1\u9001\u90AE\u4EF6\r
\r
\u53D1\u9001\u90AE\u4EF6\u5341\u5206\u7B80\u5355\uFF0C\u4F60\u53EA\u9700\u8981\u8C03\u7528 \` SendEmailUtils.sendEmail() \` \u65B9\u6CD5\u5373\u53EF\r
\r
\u65B9\u6CD5\u53C2\u6570\r
\r
| \u53C2\u6570      | \u7C7B\u578B     | \u8BF4\u660E     |\r
|---------|--------|--------|\r
| target  | String | \u76EE\u6807\u7535\u5B50\u90AE\u7BB1 |\r
| title   | String | \u7535\u5B50\u90AE\u4EF6\u6807\u9898 |\r
| content | String | \u7535\u5B50\u90AE\u4EF6\u5185\u5BB9 |\r
\r
\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A \` CheckResponse \` \u5BF9\u8C61\u4F5C\u4E3A\u53D1\u9001\u7ED3\u679C\r
\r
## \u53D1\u9001\u7ED3\u679C\u68C0\u67E5\r
\r
\u53D1\u9001\u90AE\u4EF6\u540E\uFF0C\u4F60\u5C06\u5F97\u5230\u4E00\u4E2A \` CheckResponse \` \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5305\u542B\u4E86\u53D1\u9001\u7684\u7ED3\u679C\r
\r
\` CheckResponse \` \u4E2D\u6709\u4E24\u4E2A \` String \` \u5C5E\u6027\uFF0C\u5206\u522B\u662F \` code \` \u548C \` msg \`\r
\r
\` code \` \u662F\u8FD4\u56DE\u7801\r
\r
\` msg \` \u662F\u4E91\u7AEF\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u4FE1\u606F\r
\r
\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EA\u9700\u8981\u5224\u65AD\u8FD4\u56DE\u7801\u5373\u53EF\uFF0C\u90AE\u4EF6\u53D1\u9001\u6210\u529F\u4E3A \` "200" \`\r
\r
\u53D1\u9001\u5931\u8D25\u65F6\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 \` msg \` \u6765\u5224\u65AD\u51FA\u9519\u539F\u56E0`,contentRendered:`<h1 id="real-email-api" tabindex="-1"><a class="header-anchor" href="#real-email-api" aria-hidden="true">#</a> Real Email API</h1>
<p>\u5982\u679C\u4F60\u9700\u8981\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5</p>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u8FD9\u662FPro\u529F\u80FD</p><p>\u8BF7\u5148\u9A8C\u8BC1\u63D2\u4EF6\u7684Pro\u6FC0\u6D3B\u72B6\u6001\u518D\u8FDB\u884C\u53D1\u9001\u64CD\u4F5C</p>
<p>\u5C31\u7B97\u6CA1\u6709\u9A8C\u8BC1\uFF0C\u4E91\u7AEF\u670D\u52A1\u5668\u4E5F\u4F1A\u56E0\u4E3APro\u672A\u6FC0\u6D3B\u800C\u62D2\u7EDD\u53D1\u9001\uFF0C\u4F46\u662F\u4F60\u65E0\u6CD5\u5F97\u77E5\u662F\u56E0\u4E3A\u6FC0\u6D3B\u95EE\u9898\u8FD8\u662F\u4E91\u7AEF\u670D\u52A1\u5668\u95EE\u9898</p>
</div><h2 id="\u53D1\u9001\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u90AE\u4EF6" aria-hidden="true">#</a> \u53D1\u9001\u90AE\u4EF6</h2>
<p>\u53D1\u9001\u90AE\u4EF6\u5341\u5206\u7B80\u5355\uFF0C\u4F60\u53EA\u9700\u8981\u8C03\u7528 <code v-pre>SendEmailUtils.sendEmail()</code> \u65B9\u6CD5\u5373\u53EF</p>
<p>\u65B9\u6CD5\u53C2\u6570</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>target</td>
<td>String</td>
<td>\u76EE\u6807\u7535\u5B50\u90AE\u7BB1</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>\u7535\u5B50\u90AE\u4EF6\u6807\u9898</td>
</tr>
<tr>
<td>content</td>
<td>String</td>
<td>\u7535\u5B50\u90AE\u4EF6\u5185\u5BB9</td>
</tr>
</tbody>
</table>
<p>\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A <code v-pre>CheckResponse</code> \u5BF9\u8C61\u4F5C\u4E3A\u53D1\u9001\u7ED3\u679C</p>
<h2 id="\u53D1\u9001\u7ED3\u679C\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u7ED3\u679C\u68C0\u67E5" aria-hidden="true">#</a> \u53D1\u9001\u7ED3\u679C\u68C0\u67E5</h2>
<p>\u53D1\u9001\u90AE\u4EF6\u540E\uFF0C\u4F60\u5C06\u5F97\u5230\u4E00\u4E2A <code v-pre>CheckResponse</code> \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5305\u542B\u4E86\u53D1\u9001\u7684\u7ED3\u679C</p>
<p><code v-pre>CheckResponse</code> \u4E2D\u6709\u4E24\u4E2A <code v-pre>String</code> \u5C5E\u6027\uFF0C\u5206\u522B\u662F <code v-pre>code</code> \u548C <code v-pre>msg</code></p>
<p><code v-pre>code</code> \u662F\u8FD4\u56DE\u7801</p>
<p><code v-pre>msg</code> \u662F\u4E91\u7AEF\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u4FE1\u606F</p>
<p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EA\u9700\u8981\u5224\u65AD\u8FD4\u56DE\u7801\u5373\u53EF\uFF0C\u90AE\u4EF6\u53D1\u9001\u6210\u529F\u4E3A <code v-pre>&quot;200&quot;</code></p>
<p>\u53D1\u9001\u5931\u8D25\u65F6\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code v-pre>msg</code> \u6765\u5224\u65AD\u51FA\u9519\u539F\u56E0</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/real-email.html",pathLocale:"/",permalink:null,routeMeta:{title:"Real Email API"},slug:"real-email",filePath:"D:/dev_doc/docs/dev/real-email.md",filePathRelative:"docs/dev/real-email.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/real-email.html.vue",componentFilePathRelative:"pages/docs/dev/real-email.html.vue",componentFileChunkName:"v-1b43ba77",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/real-email.html.js",dataFilePathRelative:"pages/docs/dev/real-email.html.js",dataFileChunkName:"v-1b43ba77",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/real-email.html",htmlFilePathRelative:"docs/dev/real-email.html"},{data:{key:"v-d2467c20",path:"/docs/dev/scoreboard.html",title:"Score Board API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],git:{createdTime:1658642188e3,updatedTime:1658642188e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/scoreboard.md"},key:"v-d2467c20",path:"/docs/dev/scoreboard.html",title:"Score Board API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],content:`# Score Board API\r
\r
UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A \` ScoreBoardService \` \u7C7B\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u5BF9\u8BB0\u5206\u677F\u8FDB\u884C\u64CD\u4F5C\r
\r
## \u5F00\u542F\u8BB0\u5206\u677F\r
\r
::: tip\r
\u5728\u5F00\u542F\u8BB0\u5206\u677F\u60C5\u51B5\u4E0B\uFF0C\u63D2\u4EF6\u5DF2\u4E3A\u6240\u6709\u7684\u5728\u7EBF\u73A9\u5BB6\u8FDB\u884C\u4E86\u6CE8\u518C\r
:::\r
\r
\u5F00\u542F\u4E00\u4E2A\u73A9\u5BB6\u7684\u8BB0\u5206\u677F\u5341\u5206\u7B80\u5355\uFF0C\u8C03\u7528 \` registerPlayer() \` \u8FDB\u884C\u6CE8\u518C\u5373\u53EF\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165\u76EE\u6807\u73A9\u5BB6\u7684 UUID \uFF0C**\u800C\u4E0D\u662F\u73A9\u5BB6\u7684\u6E38\u620F\u540D**\r
\r
## \u5173\u95ED\u8BB0\u5206\u677F\r
\r
\u8C03\u7528 \` unregisterPlayer() \` \u8FDB\u884C\u6CE8\u518C\u5373\u53EF\u5173\u95ED\u4E00\u4E2A\u73A9\u5BB6\u7684\u8BA1\u5206\u677F\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165\u76EE\u6807\u73A9\u5BB6\u7684 UUID \uFF0C**\u800C\u4E0D\u662F\u73A9\u5BB6\u7684\u6E38\u620F\u540D**\r
\r
## \u66F4\u65B0\u8BB0\u5206\u677F\r
\r
\u4F7F\u7528 \` updateLine() \` \u5373\u53EF\u5BF9\u6307\u5B9A\u73A9\u5BB6\u7684\u8BB0\u5206\u677F\u8FDB\u884C\u66F4\u65B0\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u6709\u4E09\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u662F\uFF1A\r
- \` Player \` \u73A9\u5BB6\u5BF9\u8C61\r
- \` String \` \u66F4\u65B0\u5185\u5BB9\r
- \` int \` \u66F4\u65B0\u76EE\u6807\u5206\u6570\r
\r
::: tip\r
\u6B64\u65B9\u6CD5\u5C06\u4FA7\u8FB9\u680F\u7684\u5206\u6570\u4F5C\u4E3A\u552F\u4E00\u952E\uFF0C\u82E5\u5DF2\u5B58\u5728\u5206\u6570\uFF0C\u5C06\u8FDB\u884C\u5185\u5BB9\u8986\u76D6\r
:::\r
\r
\u5F53\u66F4\u65B0\u5185\u5BB9\u53C2\u6570\u4E3A \` null \` \u65F6\uFF0C\u5C06\u5220\u9664\u8BE5\u884C`,contentRendered:`<h1 id="score-board-api" tabindex="-1"><a class="header-anchor" href="#score-board-api" aria-hidden="true">#</a> Score Board API</h1>
<p>UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A <code v-pre>ScoreBoardService</code> \u7C7B\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u5BF9\u8BB0\u5206\u677F\u8FDB\u884C\u64CD\u4F5C</p>
<h2 id="\u5F00\u542F\u8BB0\u5206\u677F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u8BB0\u5206\u677F" aria-hidden="true">#</a> \u5F00\u542F\u8BB0\u5206\u677F</h2>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u5728\u5F00\u542F\u8BB0\u5206\u677F\u60C5\u51B5\u4E0B\uFF0C\u63D2\u4EF6\u5DF2\u4E3A\u6240\u6709\u7684\u5728\u7EBF\u73A9\u5BB6\u8FDB\u884C\u4E86\u6CE8\u518C</p>
</div><p>\u5F00\u542F\u4E00\u4E2A\u73A9\u5BB6\u7684\u8BB0\u5206\u677F\u5341\u5206\u7B80\u5355\uFF0C\u8C03\u7528 <code v-pre>registerPlayer()</code> \u8FDB\u884C\u6CE8\u518C\u5373\u53EF</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165\u76EE\u6807\u73A9\u5BB6\u7684 UUID \uFF0C<strong>\u800C\u4E0D\u662F\u73A9\u5BB6\u7684\u6E38\u620F\u540D</strong></p>
<h2 id="\u5173\u95ED\u8BB0\u5206\u677F" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u8BB0\u5206\u677F" aria-hidden="true">#</a> \u5173\u95ED\u8BB0\u5206\u677F</h2>
<p>\u8C03\u7528 <code v-pre>unregisterPlayer()</code> \u8FDB\u884C\u6CE8\u518C\u5373\u53EF\u5173\u95ED\u4E00\u4E2A\u73A9\u5BB6\u7684\u8BA1\u5206\u677F</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165\u76EE\u6807\u73A9\u5BB6\u7684 UUID \uFF0C<strong>\u800C\u4E0D\u662F\u73A9\u5BB6\u7684\u6E38\u620F\u540D</strong></p>
<h2 id="\u66F4\u65B0\u8BB0\u5206\u677F" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u8BB0\u5206\u677F" aria-hidden="true">#</a> \u66F4\u65B0\u8BB0\u5206\u677F</h2>
<p>\u4F7F\u7528 <code v-pre>updateLine()</code> \u5373\u53EF\u5BF9\u6307\u5B9A\u73A9\u5BB6\u7684\u8BB0\u5206\u677F\u8FDB\u884C\u66F4\u65B0</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u6709\u4E09\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u662F\uFF1A</p>
<ul>
<li><code v-pre>Player</code> \u73A9\u5BB6\u5BF9\u8C61</li>
<li><code v-pre>String</code> \u66F4\u65B0\u5185\u5BB9</li>
<li><code v-pre>int</code> \u66F4\u65B0\u76EE\u6807\u5206\u6570</li>
</ul>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u6B64\u65B9\u6CD5\u5C06\u4FA7\u8FB9\u680F\u7684\u5206\u6570\u4F5C\u4E3A\u552F\u4E00\u952E\uFF0C\u82E5\u5DF2\u5B58\u5728\u5206\u6570\uFF0C\u5C06\u8FDB\u884C\u5185\u5BB9\u8986\u76D6</p>
</div><p>\u5F53\u66F4\u65B0\u5185\u5BB9\u53C2\u6570\u4E3A <code v-pre>null</code> \u65F6\uFF0C\u5C06\u5220\u9664\u8BE5\u884C</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/scoreboard.html",pathLocale:"/",permalink:null,routeMeta:{title:"Score Board API"},slug:"scoreboard",filePath:"D:/dev_doc/docs/dev/scoreboard.md",filePathRelative:"docs/dev/scoreboard.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/scoreboard.html.vue",componentFilePathRelative:"pages/docs/dev/scoreboard.html.vue",componentFileChunkName:"v-d2467c20",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/scoreboard.html.js",dataFilePathRelative:"pages/docs/dev/scoreboard.html.js",dataFileChunkName:"v-d2467c20",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/scoreboard.html",htmlFilePathRelative:"docs/dev/scoreboard.html"},{data:{key:"v-5bfc1a06",path:"/docs/dev/yaml.html",title:"YAML\u6587\u4EF6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],git:{createdTime:1658642188e3,updatedTime:1658642188e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/yaml.md"},key:"v-5bfc1a06",path:"/docs/dev/yaml.html",title:"YAML\u6587\u4EF6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],content:`# YAML\u6587\u4EF6\r
\r
\u5982\u679C\u4F60\u60F3\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684YAML\u6587\u4EF6\u6765\u50A8\u5B58\u4F60\u7684\u5404\u79CD\u914D\u7F6E\u9879\u548C\u6570\u636E\uFF0C\u90A3\u4E48\u8BF7\u9075\u4ECE\u4EE5\u4E0B\u6B65\u9AA4\r
\r
::: warning \u8BE5\u89C4\u8303\u5C06\u53D8\u66F4\r
\u5728\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF0C\u8BE5\u672C\u5F00\u53D1\u6307\u5F15\u5C06\u4E0D\u518D\u9002\u7528\r
:::\r
\r
## \u6DFB\u52A0\u679A\u4E3E\r
\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5728 \` ConfigsEnum \` \u679A\u4E3E\u7C7B\u4E2D\u6DFB\u52A0\u4F60\u7684\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4EE5\u4FBF\u63D2\u4EF6\u77E5\u9053\u8BE5\u6587\u4EF6\u7684\u50A8\u5B58\u4F4D\u7F6E\r
\r
\`\`\`java\r
YOUR_CONFIG_NAME(UltiTools.getInstance().getDataFolder() + "path/to/config.yml"),\r
\`\`\`\r
\r
## \u521B\u5EFA\u5BF9\u8C61\r
\r
UltiKits\u4F7F\u7528\u5BF9\u8C61\u6765\u7EDF\u4E00\u7BA1\u7406YAML\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5173\u4E8E\u8BE5\u914D\u7F6E\u6587\u4EF6\u7684Config\u7C7B\r
\r
::: tip\r
\u8BF7\u5C06\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\u5BF9\u8C61\u521B\u5EFA\u5728 \` com.ultikits.ultitools.config \` \u4E0B\r
:::\r
\r
### \u914D\u7F6E\u6587\u4EF6\r
\u5982\u679C\u8BE5YAML\u6587\u4EF6\u4E3A\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2AConfig\u7C7B\u5E94\u8BE5\u7EE7\u627F \` AbstractConfigReviewable \` \u7C7B\r
\r
\u63D2\u4EF6\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u4F1A\u68C0\u6D4B\u914D\u7F6E\u6587\u4EF6\u7684\u66F4\u65B0\uFF0C\u5E76\u81EA\u52A8\u66F4\u65B0\u65B0\u7684\u914D\u7F6E\u9879\uFF0C\u56E0\u6B64\u8BE5\u7C7B\u9700\u8981\u521D\u59CB\u5316\u7236\u7C7B\u7684 \` version \` \u5C5E\u6027\r
\r
\u6BCF\u6B21\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6\u65F6\u8BF7\u589E\u52A0 \` version \` \u7684\u503C\r
\r
\`\`\`java\r
public class YourConfig extends AbstractConfigReviewable {\r
    private static final YourConfig config = new YourConfig("you_config_name", ConfigsEnum.YOUR_CONFIG_NAME.toString());\r
\r
    public YourConfig() {\r
        config.init();\r
    }\r
\r
    private YourConfig(String name, String filePath) {\r
        super(name, filePath);\r
        version = 1.0;\r
    }\r
}\r
\`\`\`\r
\r
\u5BF9\u8C61\u5B9E\u4F8B\u5316\u65B9\u6CD5\u53C2\u6570\u8BF4\u660E:\r
\r
| \u5C5E\u6027\u540D          | \u7C7B\u578B     | \u8BF4\u660E                   |\r
|--------------|--------|----------------------|\r
| name         | String | \u6570\u636E\u6587\u4EF6\u540D\u79F0               |\r
| filePath     | String | \u6570\u636E\u6587\u4EF6\u6240\u5728\u8DEF\u5F84             |\r
\r
### \u6570\u636E\u6587\u4EF6\r
\u5982\u679C\u8BE5YAML\u6587\u4EF6\u4E3A\u6570\u636E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2AConfig\u7C7B\u5E94\u8BE5\u7EE7\u627F \` AbstractConfig \` \u7C7B\r
\r
\` AbstractConfig \` \u7C7B\u6CA1\u6709 \` version \` \u5C5E\u6027\uFF0C\u56E0\u6B64\u63D2\u4EF6\u53EA\u4F1A\u68C0\u6D4B\u8BE5\u6587\u4EF6\u7684\u5B58\u5728\u6027\u5E76\u81EA\u52A8\u751F\u6210\r
\r
\u4F60\u9700\u8981\u624B\u52A8\u68C0\u67E5\u8BE5\u6570\u636E\u6587\u4EF6\u7684\u7ED3\u6784\u5E76\u66F4\u65B0\r
\r
\`\`\`java\r
public class YourConfig extends AbstractConfig {\r
    private static final YourConfig config = new YourConfig("you_config_name", UltiTools.getInstance().getDataFolder().toString(), ConfigsEnum.YOUR_CONFIG_NAME.toString(), "you_data_name.yml");\r
\r
    public YourConfig() {\r
        config.init();\r
    }\r
\r
    private YourConfig(String name, String folder, String filePath, String resourcePath) {\r
        super(name, folder, filePath, resourcePath);\r
    }\r
}\r
\`\`\`\r
\r
\u5BF9\u8C61\u5B9E\u4F8B\u5316\u65B9\u6CD5\u53C2\u6570\u8BF4\u660E:\r
\r
| \u5C5E\u6027\u540D          | \u7C7B\u578B     | \u8BF4\u660E                   |\r
|--------------|--------|----------------------|\r
| name         | String | \u6570\u636E\u6587\u4EF6\u540D\u79F0               |\r
| folder       | String | \u6570\u636E\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84          |\r
| filePath     | String | \u6570\u636E\u6587\u4EF6\u6240\u5728\u8DEF\u5F84             |\r
| resourcePath | String | \u6570\u636E\u6587\u4EF6\u5728JAR\u5305\u5185Resource\u8DEF\u5F84 |\r
\r
::: tip\r
\u4F60\u5F53\u7136\u4E5F\u53EF\u4EE5\u4E3A\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528 \` AbstractConfig \` \u7C7B\uFF0C\u4F46\u662F\u4F60\u9700\u8981\u624B\u52A8\u8FDB\u884C\u8BB8\u591A\u64CD\u4F5C\r
:::\r
\r
## \u521D\u59CB\u5316\r
\r
\u63A5\u4E0B\u6765\uFF0C\u4F60\u9700\u8981\u5728\u63D2\u4EF6\u542F\u52A8\u65F6\u521D\u59CB\u5316\u8BE5\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\r
\r
\u5728 com.ultikits.ultitools.ultitools \u4E2D \` Initializer \` \u7C7B\u7684 \` initConfig() \` \u65B9\u6CD5\u4E2D\u6DFB\u52A0\u5BF9\u4F60\u7684Config\u7C7B\u7684\u5B9E\u4F8B\u5316\r
\r
\`\`\`java\r
new YourConfig();\r
\`\`\`\r
\r
## YAML\u6587\u4EF6\r
\u6700\u540E\uFF0C\u4F60\u9700\u8981\u5728resource\u76EE\u5F55\u4E0B\u521B\u5EFA\u4F60\u7684YAML\u6587\u4EF6\r
\r
\u5982\u679C\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u5E94\u8BE5\u5305\u542B\u7248\u672C\u4FE1\u606F\r
\r
\`\`\`yaml\r
# \u914D\u7F6E\u7248\u672C\u53F7\uFF0C\u8BF7\u52FF\u66F4\u6539 \r
config_version: 1.0\r
\`\`\`\r
\r
\u5982\u679C\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u5206\u522B\u521B\u5EFA\u4E24\u4EFD\u524D\u7F00\u4E3A\u201Czh_\u201D\uFF0C\u201Cen_\u201D\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684\u8BED\u8A00\u5BF9\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u6CE8\u91CA\uFF0C\u5426\u5219\u521B\u5EFA\u4E00\u4EFD\u5373\u53EF\r
\r
## \u8BFB\u5199\u6570\u636E\r
\r
UltiTools \u5C01\u88C5\u4E86\u4E00\u4E2A \` ConfigController \` \u7C7B\u6765\u5BF9\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C\r
\r
### \u83B7\u53D6\r
\u4F7F\u7528 \` getConfig() \` \u65B9\u6CD5\u5373\u53EF\u83B7\u53D6\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\r
\r
\`\`\`java\r
YamlConfiguration config = ConfigController.getConfig("config_name");\r
\`\`\`\r
\r
\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2ABukkit\u7684 \` YamlConfiguration \` \u5BF9\u8C61\uFF0C\u50CF\u5E73\u5E38\u64CD\u4F5CBukkit\u914D\u7F6E\u6587\u4EF6\u4E00\u6837\r
\r
### \u4FDD\u5B58\u65B0\u7684\u6587\u4EF6\r
\u4F7F\u7528 \` saveConfig() \` \u65B9\u6CD5\u53EF\u4EE5\u4FDD\u5B58\u4E00\u4EFD\u65B0\u7684\u6587\u4EF6\r
\r
\`\`\`java\r
ConfigController.saveConfig("config_name");\r
\`\`\`\r
\r
::: warning\r
\u6267\u884C\u8BE5\u65B9\u6CD5\u4F1A\u8986\u76D6\u539F\u6709\u7684\u6587\u4EF6\uFF01\u8BF7\u8C28\u614E\u4F7F\u7528\r
:::`,contentRendered:`<h1 id="yaml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#yaml\u6587\u4EF6" aria-hidden="true">#</a> YAML\u6587\u4EF6</h1>
<p>\u5982\u679C\u4F60\u60F3\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684YAML\u6587\u4EF6\u6765\u50A8\u5B58\u4F60\u7684\u5404\u79CD\u914D\u7F6E\u9879\u548C\u6570\u636E\uFF0C\u90A3\u4E48\u8BF7\u9075\u4ECE\u4EE5\u4E0B\u6B65\u9AA4</p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">\u8BE5\u89C4\u8303\u5C06\u53D8\u66F4</p><p>\u5728\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF0C\u8BE5\u672C\u5F00\u53D1\u6307\u5F15\u5C06\u4E0D\u518D\u9002\u7528</p>
</div><h2 id="\u6DFB\u52A0\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u679A\u4E3E" aria-hidden="true">#</a> \u6DFB\u52A0\u679A\u4E3E</h2>
<p>\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5728 <code v-pre>ConfigsEnum</code> \u679A\u4E3E\u7C7B\u4E2D\u6DFB\u52A0\u4F60\u7684\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4EE5\u4FBF\u63D2\u4EF6\u77E5\u9053\u8BE5\u6587\u4EF6\u7684\u50A8\u5B58\u4F4D\u7F6E</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">YOUR_CONFIG_NAME</span><span class="token punctuation">(</span><span class="token class-name">UltiTools</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDataFolder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"path/to/config.yml"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA\u5BF9\u8C61</h2>
<p>UltiKits\u4F7F\u7528\u5BF9\u8C61\u6765\u7EDF\u4E00\u7BA1\u7406YAML\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5173\u4E8E\u8BE5\u914D\u7F6E\u6587\u4EF6\u7684Config\u7C7B</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u8BF7\u5C06\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\u5BF9\u8C61\u521B\u5EFA\u5728 <code v-pre>com.ultikits.ultitools.config</code> \u4E0B</p>
</div><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3>
<p>\u5982\u679C\u8BE5YAML\u6587\u4EF6\u4E3A\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2AConfig\u7C7B\u5E94\u8BE5\u7EE7\u627F <code v-pre>AbstractConfigReviewable</code> \u7C7B</p>
<p>\u63D2\u4EF6\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u4F1A\u68C0\u6D4B\u914D\u7F6E\u6587\u4EF6\u7684\u66F4\u65B0\uFF0C\u5E76\u81EA\u52A8\u66F4\u65B0\u65B0\u7684\u914D\u7F6E\u9879\uFF0C\u56E0\u6B64\u8BE5\u7C7B\u9700\u8981\u521D\u59CB\u5316\u7236\u7C7B\u7684 <code v-pre>version</code> \u5C5E\u6027</p>
<p>\u6BCF\u6B21\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6\u65F6\u8BF7\u589E\u52A0 <code v-pre>version</code> \u7684\u503C</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YourConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractConfigReviewable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">YourConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token string">"you_config_name"</span><span class="token punctuation">,</span> <span class="token class-name">ConfigsEnum</span><span class="token punctuation">.</span>YOUR_CONFIG_NAME<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        version <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u5B9E\u4F8B\u5316\u65B9\u6CD5\u53C2\u6570\u8BF4\u660E:</p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027\u540D</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u540D\u79F0</td>
</tr>
<tr>
<td>filePath</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u6240\u5728\u8DEF\u5F84</td>
</tr>
</tbody>
</table>
<h3 id="\u6570\u636E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6587\u4EF6" aria-hidden="true">#</a> \u6570\u636E\u6587\u4EF6</h3>
<p>\u5982\u679C\u8BE5YAML\u6587\u4EF6\u4E3A\u6570\u636E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2AConfig\u7C7B\u5E94\u8BE5\u7EE7\u627F <code v-pre>AbstractConfig</code> \u7C7B</p>
<p><code v-pre>AbstractConfig</code> \u7C7B\u6CA1\u6709 <code v-pre>version</code> \u5C5E\u6027\uFF0C\u56E0\u6B64\u63D2\u4EF6\u53EA\u4F1A\u68C0\u6D4B\u8BE5\u6587\u4EF6\u7684\u5B58\u5728\u6027\u5E76\u81EA\u52A8\u751F\u6210</p>
<p>\u4F60\u9700\u8981\u624B\u52A8\u68C0\u67E5\u8BE5\u6570\u636E\u6587\u4EF6\u7684\u7ED3\u6784\u5E76\u66F4\u65B0</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YourConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractConfig</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">YourConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token string">"you_config_name"</span><span class="token punctuation">,</span> <span class="token class-name">UltiTools</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDataFolder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">ConfigsEnum</span><span class="token punctuation">.</span>YOUR_CONFIG_NAME<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"you_data_name.yml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> folder<span class="token punctuation">,</span> <span class="token class-name">String</span> filePath<span class="token punctuation">,</span> <span class="token class-name">String</span> resourcePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> folder<span class="token punctuation">,</span> filePath<span class="token punctuation">,</span> resourcePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u5B9E\u4F8B\u5316\u65B9\u6CD5\u53C2\u6570\u8BF4\u660E:</p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027\u540D</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u540D\u79F0</td>
</tr>
<tr>
<td>folder</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84</td>
</tr>
<tr>
<td>filePath</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u6240\u5728\u8DEF\u5F84</td>
</tr>
<tr>
<td>resourcePath</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u5728JAR\u5305\u5185Resource\u8DEF\u5F84</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u4F60\u5F53\u7136\u4E5F\u53EF\u4EE5\u4E3A\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528 <code v-pre>AbstractConfig</code> \u7C7B\uFF0C\u4F46\u662F\u4F60\u9700\u8981\u624B\u52A8\u8FDB\u884C\u8BB8\u591A\u64CD\u4F5C</p>
</div><h2 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h2>
<p>\u63A5\u4E0B\u6765\uFF0C\u4F60\u9700\u8981\u5728\u63D2\u4EF6\u542F\u52A8\u65F6\u521D\u59CB\u5316\u8BE5\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6</p>
<p>\u5728 com.ultikits.ultitools.ultitools \u4E2D <code v-pre>Initializer</code> \u7C7B\u7684 <code v-pre>initConfig()</code> \u65B9\u6CD5\u4E2D\u6DFB\u52A0\u5BF9\u4F60\u7684Config\u7C7B\u7684\u5B9E\u4F8B\u5316</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="yaml\u6587\u4EF6-1" tabindex="-1"><a class="header-anchor" href="#yaml\u6587\u4EF6-1" aria-hidden="true">#</a> YAML\u6587\u4EF6</h2>
<p>\u6700\u540E\uFF0C\u4F60\u9700\u8981\u5728resource\u76EE\u5F55\u4E0B\u521B\u5EFA\u4F60\u7684YAML\u6587\u4EF6</p>
<p>\u5982\u679C\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u5E94\u8BE5\u5305\u542B\u7248\u672C\u4FE1\u606F</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># \u914D\u7F6E\u7248\u672C\u53F7\uFF0C\u8BF7\u52FF\u66F4\u6539 </span>
<span class="token key atrule">config_version</span><span class="token punctuation">:</span> <span class="token number">1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u5206\u522B\u521B\u5EFA\u4E24\u4EFD\u524D\u7F00\u4E3A\u201Czh_\u201D\uFF0C\u201Cen_\u201D\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684\u8BED\u8A00\u5BF9\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u6CE8\u91CA\uFF0C\u5426\u5219\u521B\u5EFA\u4E00\u4EFD\u5373\u53EF</p>
<h2 id="\u8BFB\u5199\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u5199\u6570\u636E" aria-hidden="true">#</a> \u8BFB\u5199\u6570\u636E</h2>
<p>UltiTools \u5C01\u88C5\u4E86\u4E00\u4E2A <code v-pre>ConfigController</code> \u7C7B\u6765\u5BF9\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C</p>
<h3 id="\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6" aria-hidden="true">#</a> \u83B7\u53D6</h3>
<p>\u4F7F\u7528 <code v-pre>getConfig()</code> \u65B9\u6CD5\u5373\u53EF\u83B7\u53D6\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">YamlConfiguration</span> config <span class="token operator">=</span> <span class="token class-name">ConfigController</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token string">"config_name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2ABukkit\u7684 <code v-pre>YamlConfiguration</code> \u5BF9\u8C61\uFF0C\u50CF\u5E73\u5E38\u64CD\u4F5CBukkit\u914D\u7F6E\u6587\u4EF6\u4E00\u6837</p>
<h3 id="\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u4FDD\u5B58\u65B0\u7684\u6587\u4EF6</h3>
<p>\u4F7F\u7528 <code v-pre>saveConfig()</code> \u65B9\u6CD5\u53EF\u4EE5\u4FDD\u5B58\u4E00\u4EFD\u65B0\u7684\u6587\u4EF6</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ConfigController</span><span class="token punctuation">.</span><span class="token function">saveConfig</span><span class="token punctuation">(</span><span class="token string">"config_name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>\u6267\u884C\u8BE5\u65B9\u6CD5\u4F1A\u8986\u76D6\u539F\u6709\u7684\u6587\u4EF6\uFF01\u8BF7\u8C28\u614E\u4F7F\u7528</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/yaml.html",pathLocale:"/",permalink:null,routeMeta:{title:"YAML\u6587\u4EF6"},slug:"yaml",filePath:"D:/dev_doc/docs/dev/yaml.md",filePathRelative:"docs/dev/yaml.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/yaml.html.vue",componentFilePathRelative:"pages/docs/dev/yaml.html.vue",componentFileChunkName:"v-5bfc1a06",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/yaml.html.js",dataFilePathRelative:"pages/docs/dev/yaml.html.js",dataFileChunkName:"v-5bfc1a06",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/yaml.html",htmlFilePathRelative:"docs/dev/yaml.html"}],Yl={categories:{pagination:10,extendedPages:[],items:{},layout:"Categories"},tags:{pagination:10,extendedPages:[],items:{},layout:"Categories"}};async function Xl(){const t=t1(()=>Wl),e=t1(()=>Jl),n=t1(()=>Yl);w2(q6,t),w2(G6,n),w2(T0,e)}var Ql=k2({setup(){Xl()}}),Zl=k2({enhance({app:t}){const e=Xc(),n=t._context.provides[l4],l=t1(()=>Qc(e.value,n.value));t.provide(m6,l),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return l.value}}})}});const t9=(t,e)=>e.some(n=>{if(C1(n))return n===t.key;const{key:l,ctrl:i=!1,shift:a=!1,alt:d=!1}=n;return l===t.key&&i===t.ctrlKey&&a===t.shiftKey&&d===t.altKey}),e9=/[^\x00-\x7F]/,n9=t=>t.split(/\s+/g).map(e=>e.trim()).filter(e=>!!e),Ne=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),Ke=(t,e)=>{const n=e.join(" "),l=n9(t);if(e9.test(t))return l.some(d=>n.toLowerCase().indexOf(d)>-1);const i=t.endsWith(" ");return new RegExp(l.map((d,w)=>l.length===w+1&&!i?`(?=.*\\b${Ne(d)})`:`(?=.*\\b${Ne(d)}\\b)`).join("")+".+","gi").test(n)},r9=({input:t,hotKeys:e})=>{if(e.value.length===0)return;const n=l=>{!t.value||t9(l,e.value)&&!t.value.contains(l.target)&&(l.preventDefault(),t.value.focus())};X1(()=>{document.addEventListener("keydown",n)}),lt(()=>{document.removeEventListener("keydown",n)})},o9=[{title:"",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/api/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/en/",pathLocale:"/en/",extraFields:[]},{title:"Cloud API",headers:[],path:"/docs/dev/cloud.html",pathLocale:"/",extraFields:[]},{title:"\u914D\u7F6E\u9879",headers:[],path:"/docs/dev/config.html",pathLocale:"/",extraFields:[]},{title:"\u6570\u636E\u5B58\u53D6",headers:[],path:"/docs/dev/data.html",pathLocale:"/",extraFields:[]},{title:"Database API",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],path:"/docs/dev/database.html",pathLocale:"/",extraFields:[]},{title:"\u547D\u4EE4\u6267\u884C\u5668",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],path:"/docs/dev/executor.html",pathLocale:"/",extraFields:[]},{title:"In-game Email API",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],path:"/docs/dev/game-email.html",pathLocale:"/",extraFields:[]},{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],path:"/docs/dev/guide.html",pathLocale:"/",extraFields:[]},{title:"\u524D\u8A00",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],path:"/docs/dev/introduction.html",pathLocale:"/",extraFields:[]},{title:"Inventory API",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],path:"/docs/dev/inventory.html",pathLocale:"/",extraFields:[]},{title:"\u4E8B\u4EF6\u76D1\u542C\u5668",headers:[],path:"/docs/dev/listener.html",pathLocale:"/",extraFields:[]},{title:"Packet API",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],path:"/docs/dev/packet.html",pathLocale:"/",extraFields:[]},{title:"Pro Checker API",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],path:"/docs/dev/pro-checker.html",pathLocale:"/",extraFields:[]},{title:"Real Email API",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],path:"/docs/dev/real-email.html",pathLocale:"/",extraFields:[]},{title:"Score Board API",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],path:"/docs/dev/scoreboard.html",pathLocale:"/",extraFields:[]},{title:"YAML\u6587\u4EF6",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],path:"/docs/dev/yaml.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/2/",pathLocale:"/",extraFields:[]}],N6=X(o9),c9=()=>N6;H3.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=t=>{N6.value=t});const s9=({searchIndex:t,routeLocale:e,query:n,maxSuggestions:l})=>{const i=t1(()=>t.value.filter(a=>a.pathLocale===e.value));return t1(()=>{const a=n.value.trim().toLowerCase();if(!a)return[];const d=[],w=(_,p)=>{Ke(a,[p.title])&&d.push({link:`${_.path}#${p.slug}`,title:_.title,header:p.title});for(const u of p.children){if(d.length>=l.value)return;w(_,u)}};for(const _ of i.value){if(d.length>=l.value)break;if(Ke(a,[_.title,..._.extraFields])){d.push({link:_.path,title:_.title});continue}for(const p of _.headers){if(d.length>=l.value)break;w(_,p)}}return d})},l9=t=>{const e=X(0);return{focusIndex:e,focusNext:()=>{e.value<t.value.length-1?e.value+=1:e.value=0},focusPrev:()=>{e.value>0?e.value-=1:e.value=t.value.length-1}}},i9=s({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(t){const{locales:e,hotKeys:n,maxSuggestions:l}=$3(t),i=C3(),a=p6(),d=c9(),w=X(null),_=X(!1),p=X(""),u=t1(()=>{var y;return(y=e.value[a.value])!=null?y:{}}),g=s9({searchIndex:d,routeLocale:a,query:p,maxSuggestions:l}),{focusIndex:v,focusNext:x,focusPrev:k}=l9(g);r9({input:w,hotKeys:n});const C=t1(()=>_.value&&!!g.value.length),B=()=>{!C.value||k()},f=()=>{!C.value||x()},M=y=>{if(!C.value)return;const H=g.value[y];!H||i.push(H.link).then(()=>{p.value="",v.value=0})};return()=>O("form",{class:"search-box",role:"search"},[O("input",{ref:w,type:"search",placeholder:u.value.placeholder,autocomplete:"off",spellcheck:!1,value:p.value,onFocus:()=>_.value=!0,onBlur:()=>_.value=!1,onInput:y=>p.value=y.target.value,onKeydown:y=>{switch(y.key){case"ArrowUp":{B();break}case"ArrowDown":{f();break}case"Enter":{y.preventDefault(),M(v.value);break}}}}),C.value&&O("ul",{class:"suggestions",onMouseleave:()=>v.value=-1},g.value.map(({link:y,title:H,header:A},I)=>O("li",{class:["suggestion",{focus:v.value===I}],onMouseenter:()=>v.value=I,onMousedown:()=>M(I)},O("a",{href:y,onClick:K=>K.preventDefault()},[O("span",{class:"page-title"},H),A&&O("span",{class:"page-header"},`> ${A}`)]))))])}});const a9={},h9=[{key:"s",ctrl:!0}],d9=5;var w9=k2({enhance({app:t}){t.component("SearchBox",e=>O(i9,{locales:a9,hotKeys:h9,maxSuggestions:d9,...e}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT