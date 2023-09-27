(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Fo(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Ze={},Ci=[],Zt=()=>{},Nu=()=>!1,Fu=/^on[^a-z]/,fs=n=>Fu.test(n),Oo=n=>n.startsWith("onUpdate:"),dt=Object.assign,Bo=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ou=Object.prototype.hasOwnProperty,We=(n,e)=>Ou.call(n,e),Ie=Array.isArray,rr=n=>hs(n)==="[object Map]",Bu=n=>hs(n)==="[object Set]",Ge=n=>typeof n=="function",pt=n=>typeof n=="string",zo=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",hc=n=>st(n)&&Ge(n.then)&&Ge(n.catch),zu=Object.prototype.toString,hs=n=>zu.call(n),Hu=n=>hs(n).slice(8,-1),Gu=n=>hs(n)==="[object Object]",Ho=n=>pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Qr=Fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ds=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Vu=/-(\w)/g,Ni=ds(n=>n.replace(Vu,(e,t)=>t?t.toUpperCase():"")),Wu=/\B([A-Z])/g,Wi=ds(n=>n.replace(Wu,"-$1").toLowerCase()),dc=ds(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ps=ds(n=>n?`on${dc(n)}`:""),rs=(n,e)=>!Object.is(n,e),Ls=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ss=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},ku=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let va;const po=()=>va||(va=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Go(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=pt(i)?ju(i):Go(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(pt(n))return n;if(st(n))return n}}const Xu=/;(?![^(]*\))/g,qu=/:([^]+)/,Yu=/\/\*[^]*?\*\//g;function ju(n){const e={};return n.replace(Yu,"").split(Xu).forEach(t=>{if(t){const i=t.split(qu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Vo(n){let e="";if(pt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=Vo(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ku="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$u=Fo(Ku);function pc(n){return!!n||n===""}let kt;class Zu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=kt;try{return kt=this,e()}finally{kt=t}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ju(n,e=kt){e&&e.active&&e.effects.push(n)}function Qu(){return kt}const Wo=n=>{const e=new Set(n);return e.w=0,e.n=0,e},mc=n=>(n.w&On)>0,_c=n=>(n.n&On)>0,ef=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=On},tf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];mc(r)&&!_c(r)?r.delete(n):e[t++]=r,r.w&=~On,r.n&=~On}e.length=t}},mo=new WeakMap;let tr=0,On=1;const _o=30;let qt;const Qn=Symbol(""),go=Symbol("");class ko{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ju(this,i)}run(){if(!this.active)return this.fn();let e=qt,t=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Dn=!0,On=1<<++tr,tr<=_o?ef(this):xa(this),this.fn()}finally{tr<=_o&&tf(this),On=1<<--tr,qt=this.parent,Dn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(xa(this),this.onStop&&this.onStop(),this.active=!1)}}function xa(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Dn=!0;const gc=[];function ki(){gc.push(Dn),Dn=!1}function Xi(){const n=gc.pop();Dn=n===void 0?!0:n}function Lt(n,e,t){if(Dn&&qt){let i=mo.get(n);i||mo.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Wo()),vc(r)}}function vc(n,e){let t=!1;tr<=_o?_c(n)||(n.n|=On,t=!mc(n)):t=!n.has(qt),t&&(n.add(qt),qt.deps.push(n))}function En(n,e,t,i,r,s){const a=mo.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ie(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ie(n)?Ho(t)&&o.push(a.get("length")):(o.push(a.get(Qn)),rr(n)&&o.push(a.get(go)));break;case"delete":Ie(n)||(o.push(a.get(Qn)),rr(n)&&o.push(a.get(go)));break;case"set":rr(n)&&o.push(a.get(Qn));break}if(o.length===1)o[0]&&vo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);vo(Wo(l))}}function vo(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&Ma(i);for(const i of t)i.computed||Ma(i)}function Ma(n,e){(n!==qt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const nf=Fo("__proto__,__v_isRef,__isVue"),xc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(zo)),rf=Xo(),sf=Xo(!1,!0),of=Xo(!0),Ea=af();function af(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Xe(this);for(let s=0,a=this.length;s<a;s++)Lt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Xe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ki();const i=Xe(this)[e].apply(this,t);return Xi(),i}}),n}function lf(n){const e=Xe(this);return Lt(e,"has",n),e.hasOwnProperty(n)}function Xo(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Tf:Tc:e?yc:Sc).get(i))return i;const a=Ie(i);if(!n){if(a&&We(Ea,r))return Reflect.get(Ea,r,s);if(r==="hasOwnProperty")return lf}const o=Reflect.get(i,r,s);return(zo(r)?xc.has(r):nf(r))||(n||Lt(i,"get",r),e)?o:At(o)?a&&Ho(r)?o:o.value:st(o)?n?bc(o):ms(o):o}}const cf=Mc(),uf=Mc(!0);function Mc(n=!1){return function(t,i,r,s){let a=t[i];if(ur(a)&&At(a)&&!At(r))return!1;if(!n&&(!xo(r)&&!ur(r)&&(a=Xe(a),r=Xe(r)),!Ie(t)&&At(a)&&!At(r)))return a.value=r,!0;const o=Ie(t)&&Ho(i)?Number(i)<t.length:We(t,i),l=Reflect.set(t,i,r,s);return t===Xe(s)&&(o?rs(r,a)&&En(t,"set",i,r):En(t,"add",i,r)),l}}function ff(n,e){const t=We(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&En(n,"delete",e,void 0),i}function hf(n,e){const t=Reflect.has(n,e);return(!zo(e)||!xc.has(e))&&Lt(n,"has",e),t}function df(n){return Lt(n,"iterate",Ie(n)?"length":Qn),Reflect.ownKeys(n)}const Ec={get:rf,set:cf,deleteProperty:ff,has:hf,ownKeys:df},pf={get:of,set(n,e){return!0},deleteProperty(n,e){return!0}},mf=dt({},Ec,{get:sf,set:uf}),qo=n=>n,ps=n=>Reflect.getPrototypeOf(n);function Ar(n,e,t=!1,i=!1){n=n.__v_raw;const r=Xe(n),s=Xe(e);t||(e!==s&&Lt(r,"get",e),Lt(r,"get",s));const{has:a}=ps(r),o=i?qo:t?$o:Ko;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function wr(n,e=!1){const t=this.__v_raw,i=Xe(t),r=Xe(n);return e||(n!==r&&Lt(i,"has",n),Lt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Rr(n,e=!1){return n=n.__v_raw,!e&&Lt(Xe(n),"iterate",Qn),Reflect.get(n,"size",n)}function Sa(n){n=Xe(n);const e=Xe(this);return ps(e).has.call(e,n)||(e.add(n),En(e,"add",n,n)),this}function ya(n,e){e=Xe(e);const t=Xe(this),{has:i,get:r}=ps(t);let s=i.call(t,n);s||(n=Xe(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?rs(e,a)&&En(t,"set",n,e):En(t,"add",n,e),this}function Ta(n){const e=Xe(this),{has:t,get:i}=ps(e);let r=t.call(e,n);r||(n=Xe(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&En(e,"delete",n,void 0),s}function ba(){const n=Xe(this),e=n.size!==0,t=n.clear();return e&&En(n,"clear",void 0,void 0),t}function Cr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=Xe(a),l=e?qo:n?$o:Ko;return!n&&Lt(o,"iterate",Qn),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Pr(n,e,t){return function(...i){const r=this.__v_raw,s=Xe(r),a=rr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?qo:e?$o:Ko;return!e&&Lt(s,"iterate",l?go:Qn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Tn(n){return function(...e){return n==="delete"?!1:this}}function _f(){const n={get(s){return Ar(this,s)},get size(){return Rr(this)},has:wr,add:Sa,set:ya,delete:Ta,clear:ba,forEach:Cr(!1,!1)},e={get(s){return Ar(this,s,!1,!0)},get size(){return Rr(this)},has:wr,add:Sa,set:ya,delete:Ta,clear:ba,forEach:Cr(!1,!0)},t={get(s){return Ar(this,s,!0)},get size(){return Rr(this,!0)},has(s){return wr.call(this,s,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Cr(!0,!1)},i={get(s){return Ar(this,s,!0,!0)},get size(){return Rr(this,!0)},has(s){return wr.call(this,s,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Pr(s,!1,!1),t[s]=Pr(s,!0,!1),e[s]=Pr(s,!1,!0),i[s]=Pr(s,!0,!0)}),[n,t,e,i]}const[gf,vf,xf,Mf]=_f();function Yo(n,e){const t=e?n?Mf:xf:n?vf:gf;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(We(t,r)&&r in i?t:i,r,s)}const Ef={get:Yo(!1,!1)},Sf={get:Yo(!1,!0)},yf={get:Yo(!0,!1)},Sc=new WeakMap,yc=new WeakMap,Tc=new WeakMap,Tf=new WeakMap;function bf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Af(n){return n.__v_skip||!Object.isExtensible(n)?0:bf(Hu(n))}function ms(n){return ur(n)?n:jo(n,!1,Ec,Ef,Sc)}function wf(n){return jo(n,!1,mf,Sf,yc)}function bc(n){return jo(n,!0,pf,yf,Tc)}function jo(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Af(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Pi(n){return ur(n)?Pi(n.__v_raw):!!(n&&n.__v_isReactive)}function ur(n){return!!(n&&n.__v_isReadonly)}function xo(n){return!!(n&&n.__v_isShallow)}function Ac(n){return Pi(n)||ur(n)}function Xe(n){const e=n&&n.__v_raw;return e?Xe(e):n}function wc(n){return ss(n,"__v_skip",!0),n}const Ko=n=>st(n)?ms(n):n,$o=n=>st(n)?bc(n):n;function Rf(n){Dn&&qt&&(n=Xe(n),vc(n.dep||(n.dep=Wo())))}function Cf(n,e){n=Xe(n);const t=n.dep;t&&vo(t)}function At(n){return!!(n&&n.__v_isRef===!0)}function Pf(n){return At(n)?n.value:n}const Lf={get:(n,e,t)=>Pf(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return At(r)&&!At(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Rc(n){return Pi(n)?n:new Proxy(n,Lf)}class Df{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ko(e,()=>{this._dirty||(this._dirty=!0,Cf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Xe(this);return Rf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Uf(n,e,t=!1){let i,r;const s=Ge(n);return s?(i=n,r=Zt):(i=n.get,r=n.set),new Df(i,r,s||!r,t)}function Un(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){_s(s,e,t)}return r}function Jt(n,e,t,i){if(Ge(n)){const s=Un(n,e,t,i);return s&&hc(s)&&s.catch(a=>{_s(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Jt(n[s],e,t,i));return r}function _s(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Un(l,null,10,[n,a,o]);return}}If(n,t,r,i)}function If(n,e,t,i=!0){console.error(n)}let fr=!1,Mo=!1;const gt=[];let rn=0;const Li=[];let vn=null,$n=0;const Cc=Promise.resolve();let Zo=null;function Nf(n){const e=Zo||Cc;return n?e.then(this?n.bind(this):n):e}function Ff(n){let e=rn+1,t=gt.length;for(;e<t;){const i=e+t>>>1;hr(gt[i])<n?e=i+1:t=i}return e}function Jo(n){(!gt.length||!gt.includes(n,fr&&n.allowRecurse?rn+1:rn))&&(n.id==null?gt.push(n):gt.splice(Ff(n.id),0,n),Pc())}function Pc(){!fr&&!Mo&&(Mo=!0,Zo=Cc.then(Dc))}function Of(n){const e=gt.indexOf(n);e>rn&&gt.splice(e,1)}function Bf(n){Ie(n)?Li.push(...n):(!vn||!vn.includes(n,n.allowRecurse?$n+1:$n))&&Li.push(n),Pc()}function Aa(n,e=fr?rn+1:0){for(;e<gt.length;e++){const t=gt[e];t&&t.pre&&(gt.splice(e,1),e--,t())}}function Lc(n){if(Li.length){const e=[...new Set(Li)];if(Li.length=0,vn){vn.push(...e);return}for(vn=e,vn.sort((t,i)=>hr(t)-hr(i)),$n=0;$n<vn.length;$n++)vn[$n]();vn=null,$n=0}}const hr=n=>n.id==null?1/0:n.id,zf=(n,e)=>{const t=hr(n)-hr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Dc(n){Mo=!1,fr=!0,gt.sort(zf);const e=Zt;try{for(rn=0;rn<gt.length;rn++){const t=gt[rn];t&&t.active!==!1&&Un(t,null,14)}}finally{rn=0,gt.length=0,Lc(),fr=!1,Zo=null,(gt.length||Li.length)&&Dc()}}function Hf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ze;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||Ze;d&&(r=t.map(m=>pt(m)?m.trim():m)),f&&(r=t.map(ku))}let o,l=i[o=Ps(e)]||i[o=Ps(Ni(e))];!l&&s&&(l=i[o=Ps(Wi(e))]),l&&Jt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Jt(c,n,6,r)}}function Uc(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ge(n)){const l=c=>{const u=Uc(c,e,!0);u&&(o=!0,dt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(st(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>a[l]=null):dt(a,s),st(n)&&i.set(n,a),a)}function gs(n,e){return!n||!fs(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(n,e[0].toLowerCase()+e.slice(1))||We(n,Wi(e))||We(n,e))}let on=null,Ic=null;function os(n){const e=on;return on=n,Ic=n&&n.type.__scopeId||null,e}function Gf(n,e=on,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Fa(-1);const s=os(e);let a;try{a=n(...r)}finally{os(s),i._d&&Fa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ds(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:M,inheritAttrs:v}=n;let p,h;const A=os(n);try{if(t.shapeFlag&4){const T=r||i;p=tn(u.call(T,T,f,s,m,d,M)),h=l}else{const T=e;p=tn(T.length>1?T(s,{attrs:l,slots:o,emit:c}):T(s,null)),h=e.props?l:Vf(l)}}catch(T){or.length=0,_s(T,n,1),p=ei(dr)}let S=p;if(h&&v!==!1){const T=Object.keys(h),{shapeFlag:w}=S;T.length&&w&7&&(a&&T.some(Oo)&&(h=Wf(h,a)),S=Fi(S,h))}return t.dirs&&(S=Fi(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),p=S,os(A),p}const Vf=n=>{let e;for(const t in n)(t==="class"||t==="style"||fs(t))&&((e||(e={}))[t]=n[t]);return e},Wf=(n,e)=>{const t={};for(const i in n)(!Oo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function kf(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wa(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!gs(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?wa(i,a,c):!0:!!a;return!1}function wa(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!gs(t,s))return!0}return!1}function Xf({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const qf=n=>n.__isSuspense;function Yf(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):Bf(n)}const Lr={};function Us(n,e,t){return Nc(n,e,t)}function Nc(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Ze){var o;const l=Qu()===((o=vt)==null?void 0:o.scope)?vt:null;let c,u=!1,f=!1;if(At(n)?(c=()=>n.value,u=xo(n)):Pi(n)?(c=()=>n,i=!0):Ie(n)?(f=!0,u=n.some(T=>Pi(T)||xo(T)),c=()=>n.map(T=>{if(At(T))return T.value;if(Pi(T))return wi(T);if(Ge(T))return Un(T,l,2)})):Ge(n)?e?c=()=>Un(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Jt(n,l,3,[m])}:c=Zt,e&&i){const T=c;c=()=>wi(T())}let d,m=T=>{d=A.onStop=()=>{Un(T,l,4)}},M;if(mr)if(m=Zt,e?t&&Jt(e,l,3,[c(),f?[]:void 0,m]):c(),r==="sync"){const T=kh();M=T.__watcherHandles||(T.__watcherHandles=[])}else return Zt;let v=f?new Array(n.length).fill(Lr):Lr;const p=()=>{if(A.active)if(e){const T=A.run();(i||u||(f?T.some((w,D)=>rs(w,v[D])):rs(T,v)))&&(d&&d(),Jt(e,l,3,[T,v===Lr?void 0:f&&v[0]===Lr?[]:v,m]),v=T)}else A.run()};p.allowRecurse=!!e;let h;r==="sync"?h=p:r==="post"?h=()=>Rt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),h=()=>Jo(p));const A=new ko(c,h);e?t?p():v=A.run():r==="post"?Rt(A.run.bind(A),l&&l.suspense):A.run();const S=()=>{A.stop(),l&&l.scope&&Bo(l.scope.effects,A)};return M&&M.push(S),S}function jf(n,e,t){const i=this.proxy,r=pt(n)?n.includes(".")?Fc(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const a=vt;Oi(this);const o=Nc(r,s.bind(i),t);return a?Oi(a):ti(),o}function Fc(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function wi(n,e){if(!st(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),At(n))wi(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)wi(n[t],e);else if(Bu(n)||rr(n))n.forEach(t=>{wi(t,e)});else if(Gu(n))for(const t in n)wi(n[t],e);return n}function Vn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ki(),Jt(l,t,8,[n.el,o,n,e]),Xi())}}const es=n=>!!n.type.__asyncLoader,Oc=n=>n.type.__isKeepAlive;function Kf(n,e){Bc(n,"a",e)}function $f(n,e){Bc(n,"da",e)}function Bc(n,e,t=vt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(vs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Oc(r.parent.vnode)&&Zf(i,e,t,r),r=r.parent}}function Zf(n,e,t,i){const r=vs(e,n,i,!0);Hc(()=>{Bo(i[e],r)},t)}function vs(n,e,t=vt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;ki(),Oi(t);const o=Jt(e,t,n,a);return ti(),Xi(),o});return i?r.unshift(s):r.push(s),s}}const Sn=n=>(e,t=vt)=>(!mr||n==="sp")&&vs(n,(...i)=>e(...i),t),Jf=Sn("bm"),zc=Sn("m"),Qf=Sn("bu"),eh=Sn("u"),th=Sn("bum"),Hc=Sn("um"),nh=Sn("sp"),ih=Sn("rtg"),rh=Sn("rtc");function sh(n,e=vt){vs("ec",n,e)}const oh=Symbol.for("v-ndc"),Eo=n=>n?Zc(n)?ia(n)||n.proxy:Eo(n.parent):null,sr=dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Eo(n.parent),$root:n=>Eo(n.root),$emit:n=>n.emit,$options:n=>Qo(n),$forceUpdate:n=>n.f||(n.f=()=>Jo(n.update)),$nextTick:n=>n.n||(n.n=Nf.bind(n.proxy)),$watch:n=>jf.bind(n)}),Is=(n,e)=>n!==Ze&&!n.__isScriptSetup&&We(n,e),ah={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Is(i,e))return a[e]=1,i[e];if(r!==Ze&&We(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&We(c,e))return a[e]=3,s[e];if(t!==Ze&&We(t,e))return a[e]=4,t[e];So&&(a[e]=0)}}const u=sr[e];let f,d;if(u)return e==="$attrs"&&Lt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Ze&&We(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,We(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Is(r,e)?(r[e]=t,!0):i!==Ze&&We(i,e)?(i[e]=t,!0):We(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Ze&&We(n,a)||Is(e,a)||(o=s[0])&&We(o,a)||We(i,a)||We(sr,a)||We(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:We(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ra(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let So=!0;function lh(n){const e=Qo(n),t=n.proxy,i=n.ctx;So=!1,e.beforeCreate&&Ca(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:M,activated:v,deactivated:p,beforeDestroy:h,beforeUnmount:A,destroyed:S,unmounted:T,render:w,renderTracked:D,renderTriggered:P,errorCaptured:Q,serverPrefetch:E,expose:b,inheritAttrs:ae,components:ue,directives:z,filters:q}=e;if(c&&ch(c,i,null),a)for(const V in a){const W=a[V];Ge(W)&&(i[V]=W.bind(t))}if(r){const V=r.call(t,t);st(V)&&(n.data=ms(V))}if(So=!0,s)for(const V in s){const W=s[V],le=Ge(W)?W.bind(t,t):Ge(W.get)?W.get.bind(t,t):Zt,se=!Ge(W)&&Ge(W.set)?W.set.bind(t):Zt,O=Vh({get:le,set:se});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>O.value,set:k=>O.value=k})}if(o)for(const V in o)Gc(o[V],i,t,V);if(l){const V=Ge(l)?l.call(t):l;Reflect.ownKeys(V).forEach(W=>{mh(W,V[W])})}u&&Ca(u,n,"c");function ne(V,W){Ie(W)?W.forEach(le=>V(le.bind(t))):W&&V(W.bind(t))}if(ne(Jf,f),ne(zc,d),ne(Qf,m),ne(eh,M),ne(Kf,v),ne($f,p),ne(sh,Q),ne(rh,D),ne(ih,P),ne(th,A),ne(Hc,T),ne(nh,E),Ie(b))if(b.length){const V=n.exposed||(n.exposed={});b.forEach(W=>{Object.defineProperty(V,W,{get:()=>t[W],set:le=>t[W]=le})})}else n.exposed||(n.exposed={});w&&n.render===Zt&&(n.render=w),ae!=null&&(n.inheritAttrs=ae),ue&&(n.components=ue),z&&(n.directives=z)}function ch(n,e,t=Zt){Ie(n)&&(n=yo(n));for(const i in n){const r=n[i];let s;st(r)?"default"in r?s=ts(r.from||i,r.default,!0):s=ts(r.from||i):s=ts(r),At(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Ca(n,e,t){Jt(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Gc(n,e,t,i){const r=i.includes(".")?Fc(t,i):()=>t[i];if(pt(n)){const s=e[n];Ge(s)&&Us(r,s)}else if(Ge(n))Us(r,n.bind(t));else if(st(n))if(Ie(n))n.forEach(s=>Gc(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&Us(r,s,n)}}function Qo(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>as(l,c,a,!0)),as(l,e,a)),st(e)&&s.set(e,l),l}function as(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&as(n,s,t,!0),r&&r.forEach(a=>as(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=uh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const uh={data:Pa,props:La,emits:La,methods:nr,computed:nr,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:nr,directives:nr,watch:hh,provide:Pa,inject:fh};function Pa(n,e){return e?n?function(){return dt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function fh(n,e){return nr(yo(n),yo(e))}function yo(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Et(n,e){return n?[...new Set([].concat(n,e))]:e}function nr(n,e){return n?dt(Object.create(null),n,e):e}function La(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:dt(Object.create(null),Ra(n),Ra(e??{})):e}function hh(n,e){if(!n)return e;if(!e)return n;const t=dt(Object.create(null),n);for(const i in e)t[i]=Et(n[i],e[i]);return t}function Vc(){return{app:null,config:{isNativeTag:Nu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dh=0;function ph(n,e){return function(i,r=null){Ge(i)||(i=dt({},i)),r!=null&&!st(r)&&(r=null);const s=Vc(),a=new Set;let o=!1;const l=s.app={_uid:dh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Xh,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ge(c.install)?(a.add(c),c.install(l,...u)):Ge(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const d=ei(i,r);return d.appContext=s,u&&e?e(d,c):n(d,c,f),o=!0,l._container=c,c.__vue_app__=l,ia(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ls=l;try{return c()}finally{ls=null}}};return l}}let ls=null;function mh(n,e){if(vt){let t=vt.provides;const i=vt.parent&&vt.parent.provides;i===t&&(t=vt.provides=Object.create(i)),t[n]=e}}function ts(n,e,t=!1){const i=vt||on;if(i||ls){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ls._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}function _h(n,e,t,i=!1){const r={},s={};ss(s,Ms,1),n.propsDefaults=Object.create(null),Wc(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:wf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function gh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Xe(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(gs(n.emitsOptions,d))continue;const m=e[d];if(l)if(We(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const M=Ni(d);r[M]=To(l,o,M,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Wc(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!We(e,f)&&((u=Wi(f))===f||!We(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=To(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!We(e,f))&&(delete s[f],c=!0)}c&&En(n,"set","$attrs")}function Wc(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Qr(l))continue;const c=e[l];let u;r&&We(r,u=Ni(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:gs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Xe(t),c=o||Ze;for(let u=0;u<s.length;u++){const f=s[u];t[f]=To(r,l,f,c[f],n,!We(c,f))}}return a}function To(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=We(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ge(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Oi(r),i=c[t]=l.call(null,e),ti())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Wi(t))&&(i=!0))}return i}function kc(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[d,m]=kc(f,e,!0);dt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,Ci),Ci;if(Ie(s))for(let u=0;u<s.length;u++){const f=Ni(s[u]);Da(f)&&(a[f]=Ze)}else if(s)for(const u in s){const f=Ni(u);if(Da(f)){const d=s[u],m=a[f]=Ie(d)||Ge(d)?{type:d}:dt({},d);if(m){const M=Na(Boolean,m.type),v=Na(String,m.type);m[0]=M>-1,m[1]=v<0||M<v,(M>-1||We(m,"default"))&&o.push(f)}}}const c=[a,o];return st(n)&&i.set(n,c),c}function Da(n){return n[0]!=="$"}function Ua(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Ia(n,e){return Ua(n)===Ua(e)}function Na(n,e){return Ie(e)?e.findIndex(t=>Ia(t,n)):Ge(e)&&Ia(e,n)?0:-1}const Xc=n=>n[0]==="_"||n==="$stable",ea=n=>Ie(n)?n.map(tn):[tn(n)],vh=(n,e,t)=>{if(e._n)return e;const i=Gf((...r)=>ea(e(...r)),t);return i._c=!1,i},qc=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Xc(r))continue;const s=n[r];if(Ge(s))e[r]=vh(r,s,i);else if(s!=null){const a=ea(s);e[r]=()=>a}}},Yc=(n,e)=>{const t=ea(e);n.slots.default=()=>t},xh=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Xe(e),ss(e,"_",t)):qc(e,n.slots={})}else n.slots={},e&&Yc(n,e);ss(n.slots,Ms,1)},Mh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ze;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(dt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,qc(e,r)),a=e}else e&&(Yc(n,e),a={default:1});if(s)for(const o in r)!Xc(o)&&!(o in a)&&delete r[o]};function bo(n,e,t,i,r=!1){if(Ie(n)){n.forEach((d,m)=>bo(d,e&&(Ie(e)?e[m]:e),t,i,r));return}if(es(i)&&!r)return;const s=i.shapeFlag&4?ia(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ze?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(pt(c)?(u[c]=null,We(f,c)&&(f[c]=null)):At(c)&&(c.value=null)),Ge(l))Un(l,o,12,[a,u]);else{const d=pt(l),m=At(l);if(d||m){const M=()=>{if(n.f){const v=d?We(f,l)?f[l]:u[l]:l.value;r?Ie(v)&&Bo(v,s):Ie(v)?v.includes(s)||v.push(s):d?(u[l]=[s],We(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,We(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(M.id=-1,Rt(M,t)):M()}}}const Rt=Yf;function Eh(n){return Sh(n)}function Sh(n,e){const t=po();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Zt,insertStaticContent:M}=n,v=(_,R,U,B=null,F=null,ie=null,re=!1,K=null,oe=!!R.dynamicChildren)=>{if(_===R)return;_&&!$i(_,R)&&(B=Ce(_),k(_,F,ie,!0),_=null),R.patchFlag===-2&&(oe=!1,R.dynamicChildren=null);const{type:te,ref:xe,shapeFlag:x}=R;switch(te){case xs:p(_,R,U,B);break;case dr:h(_,R,U,B);break;case Ns:_==null&&A(R,U,B,re);break;case xn:ue(_,R,U,B,F,ie,re,K,oe);break;default:x&1?w(_,R,U,B,F,ie,re,K,oe):x&6?z(_,R,U,B,F,ie,re,K,oe):(x&64||x&128)&&te.process(_,R,U,B,F,ie,re,K,oe,ze)}xe!=null&&F&&bo(xe,_&&_.ref,ie,R||_,!R)},p=(_,R,U,B)=>{if(_==null)i(R.el=o(R.children),U,B);else{const F=R.el=_.el;R.children!==_.children&&c(F,R.children)}},h=(_,R,U,B)=>{_==null?i(R.el=l(R.children||""),U,B):R.el=_.el},A=(_,R,U,B)=>{[_.el,_.anchor]=M(_.children,R,U,B,_.el,_.anchor)},S=({el:_,anchor:R},U,B)=>{let F;for(;_&&_!==R;)F=d(_),i(_,U,B),_=F;i(R,U,B)},T=({el:_,anchor:R})=>{let U;for(;_&&_!==R;)U=d(_),r(_),_=U;r(R)},w=(_,R,U,B,F,ie,re,K,oe)=>{re=re||R.type==="svg",_==null?D(R,U,B,F,ie,re,K,oe):E(_,R,F,ie,re,K,oe)},D=(_,R,U,B,F,ie,re,K)=>{let oe,te;const{type:xe,props:x,shapeFlag:g,transition:L,dirs:Z}=_;if(oe=_.el=a(_.type,ie,x&&x.is,x),g&8?u(oe,_.children):g&16&&Q(_.children,oe,null,B,F,ie&&xe!=="foreignObject",re,K),Z&&Vn(_,null,B,"created"),P(oe,_,_.scopeId,re,B),x){for(const ee in x)ee!=="value"&&!Qr(ee)&&s(oe,ee,null,x[ee],ie,_.children,B,F,Te);"value"in x&&s(oe,"value",null,x.value),(te=x.onVnodeBeforeMount)&&en(te,B,_)}Z&&Vn(_,null,B,"beforeMount");const J=(!F||F&&!F.pendingBranch)&&L&&!L.persisted;J&&L.beforeEnter(oe),i(oe,R,U),((te=x&&x.onVnodeMounted)||J||Z)&&Rt(()=>{te&&en(te,B,_),J&&L.enter(oe),Z&&Vn(_,null,B,"mounted")},F)},P=(_,R,U,B,F)=>{if(U&&m(_,U),B)for(let ie=0;ie<B.length;ie++)m(_,B[ie]);if(F){let ie=F.subTree;if(R===ie){const re=F.vnode;P(_,re,re.scopeId,re.slotScopeIds,F.parent)}}},Q=(_,R,U,B,F,ie,re,K,oe=0)=>{for(let te=oe;te<_.length;te++){const xe=_[te]=K?Cn(_[te]):tn(_[te]);v(null,xe,R,U,B,F,ie,re,K)}},E=(_,R,U,B,F,ie,re)=>{const K=R.el=_.el;let{patchFlag:oe,dynamicChildren:te,dirs:xe}=R;oe|=_.patchFlag&16;const x=_.props||Ze,g=R.props||Ze;let L;U&&Wn(U,!1),(L=g.onVnodeBeforeUpdate)&&en(L,U,R,_),xe&&Vn(R,_,U,"beforeUpdate"),U&&Wn(U,!0);const Z=F&&R.type!=="foreignObject";if(te?b(_.dynamicChildren,te,K,U,B,Z,ie):re||W(_,R,K,null,U,B,Z,ie,!1),oe>0){if(oe&16)ae(K,R,x,g,U,B,F);else if(oe&2&&x.class!==g.class&&s(K,"class",null,g.class,F),oe&4&&s(K,"style",x.style,g.style,F),oe&8){const J=R.dynamicProps;for(let ee=0;ee<J.length;ee++){const de=J[ee],ce=x[de],H=g[de];(H!==ce||de==="value")&&s(K,de,ce,H,F,_.children,U,B,Te)}}oe&1&&_.children!==R.children&&u(K,R.children)}else!re&&te==null&&ae(K,R,x,g,U,B,F);((L=g.onVnodeUpdated)||xe)&&Rt(()=>{L&&en(L,U,R,_),xe&&Vn(R,_,U,"updated")},B)},b=(_,R,U,B,F,ie,re)=>{for(let K=0;K<R.length;K++){const oe=_[K],te=R[K],xe=oe.el&&(oe.type===xn||!$i(oe,te)||oe.shapeFlag&70)?f(oe.el):U;v(oe,te,xe,null,B,F,ie,re,!0)}},ae=(_,R,U,B,F,ie,re)=>{if(U!==B){if(U!==Ze)for(const K in U)!Qr(K)&&!(K in B)&&s(_,K,U[K],null,re,R.children,F,ie,Te);for(const K in B){if(Qr(K))continue;const oe=B[K],te=U[K];oe!==te&&K!=="value"&&s(_,K,te,oe,re,R.children,F,ie,Te)}"value"in B&&s(_,"value",U.value,B.value)}},ue=(_,R,U,B,F,ie,re,K,oe)=>{const te=R.el=_?_.el:o(""),xe=R.anchor=_?_.anchor:o("");let{patchFlag:x,dynamicChildren:g,slotScopeIds:L}=R;L&&(K=K?K.concat(L):L),_==null?(i(te,U,B),i(xe,U,B),Q(R.children,U,xe,F,ie,re,K,oe)):x>0&&x&64&&g&&_.dynamicChildren?(b(_.dynamicChildren,g,U,F,ie,re,K),(R.key!=null||F&&R===F.subTree)&&jc(_,R,!0)):W(_,R,U,xe,F,ie,re,K,oe)},z=(_,R,U,B,F,ie,re,K,oe)=>{R.slotScopeIds=K,_==null?R.shapeFlag&512?F.ctx.activate(R,U,B,re,oe):q(R,U,B,F,ie,re,oe):$(_,R,oe)},q=(_,R,U,B,F,ie,re)=>{const K=_.component=Fh(_,B,F);if(Oc(_)&&(K.ctx.renderer=ze),Oh(K),K.asyncDep){if(F&&F.registerDep(K,ne),!_.el){const oe=K.subTree=ei(dr);h(null,oe,R,U)}return}ne(K,_,R,U,F,ie,re)},$=(_,R,U)=>{const B=R.component=_.component;if(kf(_,R,U))if(B.asyncDep&&!B.asyncResolved){V(B,R,U);return}else B.next=R,Of(B.update),B.update();else R.el=_.el,B.vnode=R},ne=(_,R,U,B,F,ie,re)=>{const K=()=>{if(_.isMounted){let{next:xe,bu:x,u:g,parent:L,vnode:Z}=_,J=xe,ee;Wn(_,!1),xe?(xe.el=Z.el,V(_,xe,re)):xe=Z,x&&Ls(x),(ee=xe.props&&xe.props.onVnodeBeforeUpdate)&&en(ee,L,xe,Z),Wn(_,!0);const de=Ds(_),ce=_.subTree;_.subTree=de,v(ce,de,f(ce.el),Ce(ce),_,F,ie),xe.el=de.el,J===null&&Xf(_,de.el),g&&Rt(g,F),(ee=xe.props&&xe.props.onVnodeUpdated)&&Rt(()=>en(ee,L,xe,Z),F)}else{let xe;const{el:x,props:g}=R,{bm:L,m:Z,parent:J}=_,ee=es(R);if(Wn(_,!1),L&&Ls(L),!ee&&(xe=g&&g.onVnodeBeforeMount)&&en(xe,J,R),Wn(_,!0),x&&Ue){const de=()=>{_.subTree=Ds(_),Ue(x,_.subTree,_,F,null)};ee?R.type.__asyncLoader().then(()=>!_.isUnmounted&&de()):de()}else{const de=_.subTree=Ds(_);v(null,de,U,B,_,F,ie),R.el=de.el}if(Z&&Rt(Z,F),!ee&&(xe=g&&g.onVnodeMounted)){const de=R;Rt(()=>en(xe,J,de),F)}(R.shapeFlag&256||J&&es(J.vnode)&&J.vnode.shapeFlag&256)&&_.a&&Rt(_.a,F),_.isMounted=!0,R=U=B=null}},oe=_.effect=new ko(K,()=>Jo(te),_.scope),te=_.update=()=>oe.run();te.id=_.uid,Wn(_,!0),te()},V=(_,R,U)=>{R.component=_;const B=_.vnode.props;_.vnode=R,_.next=null,gh(_,R.props,B,U),Mh(_,R.children,U),ki(),Aa(),Xi()},W=(_,R,U,B,F,ie,re,K,oe=!1)=>{const te=_&&_.children,xe=_?_.shapeFlag:0,x=R.children,{patchFlag:g,shapeFlag:L}=R;if(g>0){if(g&128){se(te,x,U,B,F,ie,re,K,oe);return}else if(g&256){le(te,x,U,B,F,ie,re,K,oe);return}}L&8?(xe&16&&Te(te,F,ie),x!==te&&u(U,x)):xe&16?L&16?se(te,x,U,B,F,ie,re,K,oe):Te(te,F,ie,!0):(xe&8&&u(U,""),L&16&&Q(x,U,B,F,ie,re,K,oe))},le=(_,R,U,B,F,ie,re,K,oe)=>{_=_||Ci,R=R||Ci;const te=_.length,xe=R.length,x=Math.min(te,xe);let g;for(g=0;g<x;g++){const L=R[g]=oe?Cn(R[g]):tn(R[g]);v(_[g],L,U,null,F,ie,re,K,oe)}te>xe?Te(_,F,ie,!0,!1,x):Q(R,U,B,F,ie,re,K,oe,x)},se=(_,R,U,B,F,ie,re,K,oe)=>{let te=0;const xe=R.length;let x=_.length-1,g=xe-1;for(;te<=x&&te<=g;){const L=_[te],Z=R[te]=oe?Cn(R[te]):tn(R[te]);if($i(L,Z))v(L,Z,U,null,F,ie,re,K,oe);else break;te++}for(;te<=x&&te<=g;){const L=_[x],Z=R[g]=oe?Cn(R[g]):tn(R[g]);if($i(L,Z))v(L,Z,U,null,F,ie,re,K,oe);else break;x--,g--}if(te>x){if(te<=g){const L=g+1,Z=L<xe?R[L].el:B;for(;te<=g;)v(null,R[te]=oe?Cn(R[te]):tn(R[te]),U,Z,F,ie,re,K,oe),te++}}else if(te>g)for(;te<=x;)k(_[te],F,ie,!0),te++;else{const L=te,Z=te,J=new Map;for(te=Z;te<=g;te++){const pe=R[te]=oe?Cn(R[te]):tn(R[te]);pe.key!=null&&J.set(pe.key,te)}let ee,de=0;const ce=g-Z+1;let H=!1,Ae=0;const ye=new Array(ce);for(te=0;te<ce;te++)ye[te]=0;for(te=L;te<=x;te++){const pe=_[te];if(de>=ce){k(pe,F,ie,!0);continue}let ge;if(pe.key!=null)ge=J.get(pe.key);else for(ee=Z;ee<=g;ee++)if(ye[ee-Z]===0&&$i(pe,R[ee])){ge=ee;break}ge===void 0?k(pe,F,ie,!0):(ye[ge-Z]=te+1,ge>=Ae?Ae=ge:H=!0,v(pe,R[ge],U,null,F,ie,re,K,oe),de++)}const be=H?yh(ye):Ci;for(ee=be.length-1,te=ce-1;te>=0;te--){const pe=Z+te,ge=R[pe],Ne=pe+1<xe?R[pe+1].el:B;ye[te]===0?v(null,ge,U,Ne,F,ie,re,K,oe):H&&(ee<0||te!==be[ee]?O(ge,U,Ne,2):ee--)}}},O=(_,R,U,B,F=null)=>{const{el:ie,type:re,transition:K,children:oe,shapeFlag:te}=_;if(te&6){O(_.component.subTree,R,U,B);return}if(te&128){_.suspense.move(R,U,B);return}if(te&64){re.move(_,R,U,ze);return}if(re===xn){i(ie,R,U);for(let x=0;x<oe.length;x++)O(oe[x],R,U,B);i(_.anchor,R,U);return}if(re===Ns){S(_,R,U);return}if(B!==2&&te&1&&K)if(B===0)K.beforeEnter(ie),i(ie,R,U),Rt(()=>K.enter(ie),F);else{const{leave:x,delayLeave:g,afterLeave:L}=K,Z=()=>i(ie,R,U),J=()=>{x(ie,()=>{Z(),L&&L()})};g?g(ie,Z,J):J()}else i(ie,R,U)},k=(_,R,U,B=!1,F=!1)=>{const{type:ie,props:re,ref:K,children:oe,dynamicChildren:te,shapeFlag:xe,patchFlag:x,dirs:g}=_;if(K!=null&&bo(K,null,U,_,!0),xe&256){R.ctx.deactivate(_);return}const L=xe&1&&g,Z=!es(_);let J;if(Z&&(J=re&&re.onVnodeBeforeUnmount)&&en(J,R,_),xe&6)Ee(_.component,U,B);else{if(xe&128){_.suspense.unmount(U,B);return}L&&Vn(_,null,R,"beforeUnmount"),xe&64?_.type.remove(_,R,U,F,ze,B):te&&(ie!==xn||x>0&&x&64)?Te(te,R,U,!1,!0):(ie===xn&&x&384||!F&&xe&16)&&Te(oe,R,U),B&&me(_)}(Z&&(J=re&&re.onVnodeUnmounted)||L)&&Rt(()=>{J&&en(J,R,_),L&&Vn(_,null,R,"unmounted")},U)},me=_=>{const{type:R,el:U,anchor:B,transition:F}=_;if(R===xn){Me(U,B);return}if(R===Ns){T(_);return}const ie=()=>{r(U),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(_.shapeFlag&1&&F&&!F.persisted){const{leave:re,delayLeave:K}=F,oe=()=>re(U,ie);K?K(_.el,ie,oe):oe()}else ie()},Me=(_,R)=>{let U;for(;_!==R;)U=d(_),r(_),_=U;r(R)},Ee=(_,R,U)=>{const{bum:B,scope:F,update:ie,subTree:re,um:K}=_;B&&Ls(B),F.stop(),ie&&(ie.active=!1,k(re,_,R,U)),K&&Rt(K,R),Rt(()=>{_.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Te=(_,R,U,B=!1,F=!1,ie=0)=>{for(let re=ie;re<_.length;re++)k(_[re],R,U,B,F)},Ce=_=>_.shapeFlag&6?Ce(_.component.subTree):_.shapeFlag&128?_.suspense.next():d(_.anchor||_.el),we=(_,R,U)=>{_==null?R._vnode&&k(R._vnode,null,null,!0):v(R._vnode||null,_,R,null,null,null,U),Aa(),Lc(),R._vnode=_},ze={p:v,um:k,m:O,r:me,mt:q,mc:Q,pc:W,pbc:b,n:Ce,o:n};let ct,Ue;return e&&([ct,Ue]=e(ze)),{render:we,hydrate:ct,createApp:ph(we,ct)}}function Wn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function jc(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Cn(r[s]),o.el=a.el),t||jc(a,o)),o.type===xs&&(o.el=a.el)}}function yh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Th=n=>n.__isTeleport,xn=Symbol.for("v-fgt"),xs=Symbol.for("v-txt"),dr=Symbol.for("v-cmt"),Ns=Symbol.for("v-stc"),or=[];let Kt=null;function bh(n=!1){or.push(Kt=n?null:[])}function Ah(){or.pop(),Kt=or[or.length-1]||null}let pr=1;function Fa(n){pr+=n}function wh(n){return n.dynamicChildren=pr>0?Kt||Ci:null,Ah(),pr>0&&Kt&&Kt.push(n),n}function Rh(n,e,t,i,r,s){return wh($c(n,e,t,i,r,s,!0))}function Ch(n){return n?n.__v_isVNode===!0:!1}function $i(n,e){return n.type===e.type&&n.key===e.key}const Ms="__vInternal",Kc=({key:n})=>n??null,ns=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?pt(n)||At(n)||Ge(n)?{i:on,r:n,k:e,f:!!t}:n:null);function $c(n,e=null,t=null,i=0,r=null,s=n===xn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Kc(e),ref:e&&ns(e),scopeId:Ic,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:on};return o?(ta(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),pr>0&&!a&&Kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Kt.push(l),l}const ei=Ph;function Ph(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===oh)&&(n=dr),Ch(n)){const o=Fi(n,e,!0);return t&&ta(o,t),pr>0&&!s&&Kt&&(o.shapeFlag&6?Kt[Kt.indexOf(n)]=o:Kt.push(o)),o.patchFlag|=-2,o}if(Gh(n)&&(n=n.__vccOpts),e){e=Lh(e);let{class:o,style:l}=e;o&&!pt(o)&&(e.class=Vo(o)),st(l)&&(Ac(l)&&!Ie(l)&&(l=dt({},l)),e.style=Go(l))}const a=pt(n)?1:qf(n)?128:Th(n)?64:st(n)?4:Ge(n)?2:0;return $c(n,e,t,i,r,a,s,!0)}function Lh(n){return n?Ac(n)||Ms in n?dt({},n):n:null}function Fi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Uh(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Kc(o),ref:e&&e.ref?t&&r?Ie(r)?r.concat(ns(e)):[r,ns(e)]:ns(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fi(n.ssContent),ssFallback:n.ssFallback&&Fi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Dh(n=" ",e=0){return ei(xs,null,n,e)}function tn(n){return n==null||typeof n=="boolean"?ei(dr):Ie(n)?ei(xn,null,n.slice()):typeof n=="object"?Cn(n):ei(xs,null,String(n))}function Cn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fi(n)}function ta(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ta(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ms in e)?e._ctx=on:r===3&&on&&(on.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:on},t=32):(e=String(e),i&64?(t=16,e=[Dh(e)]):t=8);n.children=e,n.shapeFlag|=t}function Uh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Vo([e.class,i.class]));else if(r==="style")e.style=Go([e.style,i.style]);else if(fs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ie(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function en(n,e,t,i=null){Jt(n,e,7,[t,i])}const Ih=Vc();let Nh=0;function Fh(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ih,s={uid:Nh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kc(i,r),emitsOptions:Uc(i,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Hf.bind(null,s),n.ce&&n.ce(s),s}let vt=null,na,li,Oa="__VUE_INSTANCE_SETTERS__";(li=po()[Oa])||(li=po()[Oa]=[]),li.push(n=>vt=n),na=n=>{li.length>1?li.forEach(e=>e(n)):li[0](n)};const Oi=n=>{na(n),n.scope.on()},ti=()=>{vt&&vt.scope.off(),na(null)};function Zc(n){return n.vnode.shapeFlag&4}let mr=!1;function Oh(n,e=!1){mr=e;const{props:t,children:i}=n.vnode,r=Zc(n);_h(n,t,r,e),xh(n,i);const s=r?Bh(n,e):void 0;return mr=!1,s}function Bh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=wc(new Proxy(n.ctx,ah));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Hh(n):null;Oi(n),ki();const s=Un(i,n,0,[n.props,r]);if(Xi(),ti(),hc(s)){if(s.then(ti,ti),e)return s.then(a=>{Ba(n,a,e)}).catch(a=>{_s(a,n,0)});n.asyncDep=s}else Ba(n,s,e)}else Jc(n,e)}function Ba(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=Rc(e)),Jc(n,t)}let za;function Jc(n,e,t){const i=n.type;if(!n.render){if(!e&&za&&!i.render){const r=i.template||Qo(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=dt(dt({isCustomElement:s,delimiters:o},a),l);i.render=za(r,c)}}n.render=i.render||Zt}Oi(n),ki(),lh(n),Xi(),ti()}function zh(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Lt(n,"get","$attrs"),e[t]}}))}function Hh(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return zh(n)},slots:n.slots,emit:n.emit,expose:e}}function ia(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Rc(wc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in sr)return sr[t](n)},has(e,t){return t in e||t in sr}}))}function Gh(n){return Ge(n)&&"__vccOpts"in n}const Vh=(n,e)=>Uf(n,e,mr),Wh=Symbol.for("v-scx"),kh=()=>ts(Wh),Xh="3.3.4",qh="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,Ha=Zn&&Zn.createElement("template"),Yh={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Zn.createElementNS(qh,n):Zn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Zn.createTextNode(n),createComment:n=>Zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ha.innerHTML=i?`<svg>${n}</svg>`:n;const o=Ha.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function jh(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Kh(n,e,t){const i=n.style,r=pt(t);if(t&&!r){if(e&&!pt(e))for(const s in e)t[s]==null&&Ao(i,s,"");for(const s in t)Ao(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Ga=/\s*!important$/;function Ao(n,e,t){if(Ie(t))t.forEach(i=>Ao(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=$h(n,e);Ga.test(t)?n.setProperty(Wi(i),t.replace(Ga,""),"important"):n[i]=t}}const Va=["Webkit","Moz","ms"],Fs={};function $h(n,e){const t=Fs[e];if(t)return t;let i=Ni(e);if(i!=="filter"&&i in n)return Fs[e]=i;i=dc(i);for(let r=0;r<Va.length;r++){const s=Va[r]+i;if(s in n)return Fs[e]=s}return e}const Wa="http://www.w3.org/1999/xlink";function Zh(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Wa,e.slice(6,e.length)):n.setAttributeNS(Wa,e,t);else{const s=$u(e);t==null||s&&!pc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Jh(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=pc(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Qh(n,e,t,i){n.addEventListener(e,t,i)}function ed(n,e,t,i){n.removeEventListener(e,t,i)}function td(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=nd(e);if(i){const c=s[e]=sd(i,r);Qh(n,o,c,l)}else a&&(ed(n,o,a,l),s[e]=void 0)}}const ka=/(?:Once|Passive|Capture)$/;function nd(n){let e;if(ka.test(n)){e={};let i;for(;i=n.match(ka);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Wi(n.slice(2)),e]}let Os=0;const id=Promise.resolve(),rd=()=>Os||(id.then(()=>Os=0),Os=Date.now());function sd(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Jt(od(i,t.value),e,5,[i])};return t.value=n,t.attached=rd(),t}function od(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xa=/^on[a-z]/,ad=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?jh(n,i,r):e==="style"?Kh(n,t,i):fs(e)?Oo(e)||td(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ld(n,e,i,r))?Jh(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Zh(n,e,i,r))};function ld(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Xa.test(e)&&Ge(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Xa.test(e)&&pt(t)?!1:e in n}const cd=dt({patchProp:ad},Yh);let qa;function ud(){return qa||(qa=Eh(cd))}const fd=(...n)=>{const e=ud().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=hd(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function hd(n){return pt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ra="156",dd=0,Ya=1,pd=2,Qc=1,md=2,gn=3,Bn=0,Pt=1,sn=2,In=0,Di=1,ja=2,Ka=3,$a=4,_d=5,bi=100,gd=101,vd=102,Za=103,Ja=104,xd=200,Md=201,Ed=202,Sd=203,eu=204,tu=205,yd=206,Td=207,bd=208,Ad=209,wd=210,Rd=0,Cd=1,Pd=2,wo=3,Ld=4,Dd=5,Ud=6,Id=7,nu=0,Nd=1,Fd=2,Nn=0,Od=1,Bd=2,zd=3,Hd=4,Gd=5,iu=300,Bi=301,zi=302,Ro=303,Co=304,Es=306,Po=1e3,Yt=1001,Lo=1002,Tt=1003,Qa=1004,Bs=1005,Ct=1006,Vd=1007,_r=1008,Fn=1009,Wd=1010,kd=1011,sa=1012,ru=1013,Pn=1014,Ln=1015,gr=1016,su=1017,ou=1018,ni=1020,Xd=1021,jt=1023,qd=1024,Yd=1025,ii=1026,Hi=1027,jd=1028,au=1029,Kd=1030,lu=1031,cu=1033,zs=33776,Hs=33777,Gs=33778,Vs=33779,el=35840,tl=35841,nl=35842,il=35843,$d=36196,rl=37492,sl=37496,ol=37808,al=37809,ll=37810,cl=37811,ul=37812,fl=37813,hl=37814,dl=37815,pl=37816,ml=37817,_l=37818,gl=37819,vl=37820,xl=37821,Ws=36492,Ml=36494,El=36495,Zd=36283,Sl=36284,yl=36285,Tl=36286,uu=3e3,ri=3001,Jd=3200,Qd=3201,ep=0,tp=1,si="",Ke="srgb",cn="srgb-linear",Ss="display-p3",ks=7680,np=519,ip=512,rp=513,sp=514,op=515,ap=516,lp=517,cp=518,up=519,bl=35044,Al="300 es",Do=1035,Mn=2e3,cs=2001;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wl=1234567;const ar=Math.PI/180,vr=180/Math.PI;function Yi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function oa(n,e){return(n%e+e)%e}function fp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function hp(n,e,t){return n!==e?(t-n)/(e-n):0}function lr(n,e,t){return(1-t)*n+t*e}function dp(n,e,t,i){return lr(n,e,1-Math.exp(-t*i))}function pp(n,e=1){return e-Math.abs(oa(n,e*2)-e)}function mp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _p(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function gp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vp(n,e){return n+Math.random()*(e-n)}function xp(n){return n*(.5-Math.random())}function Mp(n){n!==void 0&&(wl=n);let e=wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ep(n){return n*ar}function Sp(n){return n*vr}function Uo(n){return(n&n-1)===0&&n!==0}function yp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function us(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tp(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),M=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*M,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*M,o*c);break;case"ZYZ":n.set(l*M,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xs={DEG2RAD:ar,RAD2DEG:vr,generateUUID:Yi,clamp:bt,euclideanModulo:oa,mapLinear:fp,inverseLerp:hp,lerp:lr,damp:dp,pingpong:pp,smoothstep:mp,smootherstep:_p,randInt:gp,randFloat:vp,randFloatSpread:xp,seededRandom:Mp,degToRad:Ep,radToDeg:Sp,isPowerOfTwo:Uo,ceilPowerOfTwo:yp,floorPowerOfTwo:us,setQuaternionFromProperEuler:Tp,normalize:St,denormalize:Ai};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],M=i[8],v=r[0],p=r[3],h=r[6],A=r[1],S=r[4],T=r[7],w=r[2],D=r[5],P=r[8];return s[0]=a*v+o*A+l*w,s[3]=a*p+o*S+l*D,s[6]=a*h+o*T+l*P,s[1]=c*v+u*A+f*w,s[4]=c*p+u*S+f*D,s[7]=c*h+u*T+f*P,s[2]=d*v+m*A+M*w,s[5]=d*p+m*S+M*D,s[8]=d*h+m*T+M*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,M=t*f+i*d+r*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/M;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qs.makeScale(e,t)),this}rotate(e){return this.premultiply(qs.makeRotation(-e)),this}translate(e,t){return this.premultiply(qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qs=new Be;function fu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bp(){const n=xr("canvas");return n.style.display="block",n}const Rl={};function cr(n){n in Rl||(Rl[n]=!0,console.warn(n))}function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ap=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),wp=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Rp(n){return n.convertSRGBToLinear().applyMatrix3(wp)}function Cp(n){return n.applyMatrix3(Ap).convertLinearToSRGB()}const Pp={[cn]:n=>n,[Ke]:n=>n.convertSRGBToLinear(),[Ss]:Rp},Lp={[cn]:n=>n,[Ke]:n=>n.convertLinearToSRGB(),[Ss]:Cp},Ht={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return cn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Pp[e],r=Lp[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let ci;class hu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=xr("canvas")),ci.width=e.width,ci.height=e.height;const i=ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ui(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dp=0;class du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(js(r[a].image)):s.push(js(r[a]))}else s=js(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Up=0;class wt extends qi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=Yt,r=Yt,s=Ct,a=_r,o=jt,l=Fn,c=wt.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Yi(),this.name="",this.source=new du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ri?Ke:si),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Po:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Po:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ke?ri:uu}set encoding(e){cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ri?Ke:si}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=iu;wt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],M=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(M-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(M+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,T=(m+1)/2,w=(h+1)/2,D=(u+d)/4,P=(f+v)/4,Q=(M+p)/4;return S>T&&S>w?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=D/i,s=P/i):T>w?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=D/r,s=Q/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=Q/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-M)*(p-M)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(p-M)/A,this.y=(f-v)/A,this.z=(d-u)/A,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ip extends qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ri?Ke:si),this.texture=new wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ct,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new du(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Ip{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pu extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Np extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],M=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=M,e[t+3]=v;return}if(f!==v||l!==d||c!==m||u!==M){let p=1-o;const h=l*d+c*m+u*M+f*v,A=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const w=Math.sqrt(S),D=Math.atan2(w,h*A);p=Math.sin(p*D)/w,o=Math.sin(o*D)/w}const T=o*A;if(l=l*p+d*T,c=c*p+m*T,u=u*p+M*T,f=f*p+v*T,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],M=s[a+3];return e[t]=o*M+u*f+l*m-c*d,e[t+1]=l*M+u*d+c*f-o*m,e[t+2]=c*M+u*m+o*d-l*f,e[t+3]=u*M-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),M=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*M,this._y=c*m*f-d*u*M,this._z=c*u*M+d*m*f,this._w=c*u*f-d*m*M;break;case"YXZ":this._x=d*u*f+c*m*M,this._y=c*m*f-d*u*M,this._z=c*u*M-d*m*f,this._w=c*u*f+d*m*M;break;case"ZXY":this._x=d*u*f-c*m*M,this._y=c*m*f+d*u*M,this._z=c*u*M+d*m*f,this._w=c*u*f-d*m*M;break;case"ZYX":this._x=d*u*f-c*m*M,this._y=c*m*f+d*u*M,this._z=c*u*M-d*m*f,this._w=c*u*f+d*m*M;break;case"YZX":this._x=d*u*f+c*m*M,this._y=c*m*f+d*u*M,this._z=c*u*M-d*m*f,this._w=c*u*f-d*m*M;break;case"XZY":this._x=d*u*f-c*m*M,this._y=c*m*f-d*u*M,this._z=c*u*M+d*m*f,this._w=c*u*f+d*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-f*-a,this.y=u*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new G,Cl=new Er;class Sr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ui.copy(e.boundingBox),ui.applyMatrix4(e.matrixWorld),this.union(ui);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)hn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(hn)}else r.boundingBox===null&&r.computeBoundingBox(),ui.copy(r.boundingBox),ui.applyMatrix4(e.matrixWorld),this.union(ui)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Dr.subVectors(this.max,Zi),fi.subVectors(e.a,Zi),hi.subVectors(e.b,Zi),di.subVectors(e.c,Zi),bn.subVectors(hi,fi),An.subVectors(di,hi),kn.subVectors(fi,di);let t=[0,-bn.z,bn.y,0,-An.z,An.y,0,-kn.z,kn.y,bn.z,0,-bn.x,An.z,0,-An.x,kn.z,0,-kn.x,-bn.y,bn.x,0,-An.y,An.x,0,-kn.y,kn.x,0];return!$s(t,fi,hi,di,Dr)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,fi,hi,di,Dr))?!1:(Ur.crossVectors(bn,An),t=[Ur.x,Ur.y,Ur.z],$s(t,fi,hi,di,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new G,new G,new G,new G,new G,new G,new G,new G],hn=new G,ui=new Sr,fi=new G,hi=new G,di=new G,bn=new G,An=new G,kn=new G,Zi=new G,Dr=new G,Ur=new G,Xn=new G;function $s(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Xn.fromArray(n,s);const o=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),u=i.dot(Xn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Fp=new Sr,Ji=new G,Zs=new G;class aa{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ji,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(Zs)),this.expandByPoint(Ji.copy(e.center).sub(Zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new G,Js=new G,Ir=new G,wn=new G,Qs=new G,Nr=new G,eo=new G;class mu{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Js.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Js);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=wn.dot(this.direction),l=-wn.dot(Ir),c=wn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,M;if(u>0)if(f=a*l-o,d=a*o-l,M=s*u,f>=0)if(d>=-M)if(d<=M){const v=1/u;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-M?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=M?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Js).addScaledVector(Ir,d),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const i=dn.dot(this.direction),r=dn.dot(dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,i,r,s){Qs.subVectors(t,e),Nr.subVectors(i,e),eo.crossVectors(Qs,Nr);let a=this.direction.dot(eo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(Nr.crossVectors(wn,Nr));if(l<0)return null;const c=o*this.direction.dot(Qs.cross(wn));if(c<0||l+c>a)return null;const u=-o*wn.dot(eo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,M,v,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,M,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,M,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=M,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,M=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+M*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=M+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,M=c*u,v=c*f;t[0]=d+v*o,t[4]=M*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-M,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,M=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=M+m*o,t[1]=m+M*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,M=o*u,v=o*f;t[0]=l*u,t[4]=M*c-m,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=m*c-M,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,M=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=M*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+M,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,m=a*c,M=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=m*f-M,t[2]=M*f-m,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Op,e,Bp)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Rn.crossVectors(i,Ut),Rn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Rn.crossVectors(i,Ut)),Rn.normalize(),Fr.crossVectors(Ut,Rn),r[0]=Rn.x,r[4]=Fr.x,r[8]=Ut.x,r[1]=Rn.y,r[5]=Fr.y,r[9]=Ut.y,r[2]=Rn.z,r[6]=Fr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],M=i[2],v=i[6],p=i[10],h=i[14],A=i[3],S=i[7],T=i[11],w=i[15],D=r[0],P=r[4],Q=r[8],E=r[12],b=r[1],ae=r[5],ue=r[9],z=r[13],q=r[2],$=r[6],ne=r[10],V=r[14],W=r[3],le=r[7],se=r[11],O=r[15];return s[0]=a*D+o*b+l*q+c*W,s[4]=a*P+o*ae+l*$+c*le,s[8]=a*Q+o*ue+l*ne+c*se,s[12]=a*E+o*z+l*V+c*O,s[1]=u*D+f*b+d*q+m*W,s[5]=u*P+f*ae+d*$+m*le,s[9]=u*Q+f*ue+d*ne+m*se,s[13]=u*E+f*z+d*V+m*O,s[2]=M*D+v*b+p*q+h*W,s[6]=M*P+v*ae+p*$+h*le,s[10]=M*Q+v*ue+p*ne+h*se,s[14]=M*E+v*z+p*V+h*O,s[3]=A*D+S*b+T*q+w*W,s[7]=A*P+S*ae+T*$+w*le,s[11]=A*Q+S*ue+T*ne+w*se,s[15]=A*E+S*z+T*V+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],M=e[3],v=e[7],p=e[11],h=e[15];return M*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],M=e[12],v=e[13],p=e[14],h=e[15],A=f*p*c-v*d*c+v*l*m-o*p*m-f*l*h+o*d*h,S=M*d*c-u*p*c-M*l*m+a*p*m+u*l*h-a*d*h,T=u*v*c-M*f*c+M*o*m-a*v*m-u*o*h+a*f*h,w=M*f*l-u*v*l-M*o*d+a*v*d+u*o*p-a*f*p,D=t*A+i*S+r*T+s*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=A*P,e[1]=(v*d*s-f*p*s-v*r*m+i*p*m+f*r*h-i*d*h)*P,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*h+i*l*h)*P,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*P,e[4]=S*P,e[5]=(u*p*s-M*d*s+M*r*m-t*p*m-u*r*h+t*d*h)*P,e[6]=(M*l*s-a*p*s-M*r*c+t*p*c+a*r*h-t*l*h)*P,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*P,e[8]=T*P,e[9]=(M*f*s-u*v*s-M*i*m+t*v*m+u*i*h-t*f*h)*P,e[10]=(a*v*s-M*o*s+M*i*c-t*v*c-a*i*h+t*o*h)*P,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*P,e[12]=w*P,e[13]=(u*v*r-M*f*r+M*i*d-t*v*d-u*i*p+t*f*p)*P,e[14]=(M*o*r-a*v*r-M*i*l+t*v*l+a*i*p-t*o*p)*P,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,M=s*f,v=a*u,p=a*f,h=o*f,A=l*c,S=l*u,T=l*f,w=i.x,D=i.y,P=i.z;return r[0]=(1-(v+h))*w,r[1]=(m+T)*w,r[2]=(M-S)*w,r[3]=0,r[4]=(m-T)*D,r[5]=(1-(d+h))*D,r[6]=(p+A)*D,r[7]=0,r[8]=(M+S)*P,r[9]=(p-A)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const a=pi.set(r[4],r[5],r[6]).length(),o=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const c=1/s,u=1/a,f=1/o;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=f,Gt.elements[9]*=f,Gt.elements[10]*=f,t.setFromRotationMatrix(Gt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Mn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,M;if(o===Mn)m=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===cs)m=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Mn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let M,v;if(o===Mn)M=(a+s)*f,v=-2*f;else if(o===cs)M=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const pi=new G,Gt=new ht,Op=new G(0,0,0),Bp=new G(1,1,1),Rn=new G,Fr=new G,Ut=new G,Pl=new ht,Ll=new Er;class ys{constructor(e=0,t=0,i=0,r=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class la{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zp=0;const Dl=new G,mi=new Er,pn=new ht,Or=new G,Qi=new G,Hp=new G,Gp=new Er,Ul=new G(1,0,0),Il=new G(0,1,0),Nl=new G(0,0,1),Vp={type:"added"},Wp={type:"removed"};class Ft extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new G,t=new ys,i=new Er,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Be}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Nl,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Qi,Or,this.up):pn.lookAt(Or,Qi,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(pn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),M=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),M.length>0&&(i.nodes=M)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new G(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new G,mn=new G,to=new G,_n=new G,_i=new G,gi=new G,Fl=new G,no=new G,io=new G,ro=new G;let Br=!1;class Xt{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vt.subVectors(r,t),mn.subVectors(i,t),to.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(mn),l=Vt.dot(to),c=mn.dot(mn),u=mn.dot(to),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,M=(a*u-o*l)*d;return s.set(1-m-M,M,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,i,r,s,a,o,l){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,_n),l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l}static isFrontFacing(e,t,i,r){return Vt.subVectors(i,t),mn.subVectors(e,t),Vt.cross(mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Vt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),Xt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;_i.subVectors(r,i),gi.subVectors(s,i),no.subVectors(e,i);const l=_i.dot(no),c=gi.dot(no);if(l<=0&&c<=0)return t.copy(i);io.subVectors(e,r);const u=_i.dot(io),f=gi.dot(io);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(_i,a);ro.subVectors(e,s);const m=_i.dot(ro),M=gi.dot(ro);if(M>=0&&m<=M)return t.copy(s);const v=m*c-l*M;if(v<=0&&c>=0&&M<=0)return o=c/(c-M),t.copy(i).addScaledVector(gi,o);const p=u*M-m*f;if(p<=0&&f-u>=0&&m-M>=0)return Fl.subVectors(s,r),o=(f-u)/(f-u+(m-M)),t.copy(r).addScaledVector(Fl,o);const h=1/(p+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(_i,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kp=0;class Ts extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Di,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={h:0,s:0,l:0},zr={h:0,s:0,l:0};function so(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ht.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ht.workingColorSpace){if(e=oa(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=so(a,s,e+1/3),this.g=so(a,s,e),this.b=so(a,s,e-1/3)}return Ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ke){const i=_u[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ke){return Ht.fromWorkingColorSpace(_t.copy(this),e),Math.round(bt(_t.r*255,0,255))*65536+Math.round(bt(_t.g*255,0,255))*256+Math.round(bt(_t.b*255,0,255))}getHexString(e=Ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(_t.copy(this),t);const i=_t.r,r=_t.g,s=_t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Ke){Ht.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,i=_t.g,r=_t.b;return e!==Ke?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=i,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(zr);const i=lr(Wt.h,zr.h,t),r=lr(Wt.s,zr.s,t),s=lr(Wt.l,zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new $e;$e.NAMES=_u;class Mr extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new G,Hr=new qe;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bl,this.updateRange={offset:0,count:-1},this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class gu extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vu extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Xp=0;const Bt=new ht,oo=new Ft,vi=new G,It=new Sr,er=new Sr,ut=new G;class zn extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fu(e)?vu:gu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];er.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(It.min,er.min),It.expandByPoint(ut),ut.addVectors(It.max,er.max),It.expandByPoint(ut)):(It.expandByPoint(er.min),It.expandByPoint(er.max))}It.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(e,c),ut.add(vi)),r=Math.max(r,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new G,u[b]=new G;const f=new G,d=new G,m=new G,M=new qe,v=new qe,p=new qe,h=new G,A=new G;function S(b,ae,ue){f.fromArray(r,b*3),d.fromArray(r,ae*3),m.fromArray(r,ue*3),M.fromArray(a,b*2),v.fromArray(a,ae*2),p.fromArray(a,ue*2),d.sub(f),m.sub(f),v.sub(M),p.sub(M);const z=1/(v.x*p.y-p.x*v.y);isFinite(z)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(z),A.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(z),c[b].add(h),c[ae].add(h),c[ue].add(h),u[b].add(A),u[ae].add(A),u[ue].add(A))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let b=0,ae=T.length;b<ae;++b){const ue=T[b],z=ue.start,q=ue.count;for(let $=z,ne=z+q;$<ne;$+=3)S(i[$+0],i[$+1],i[$+2])}const w=new G,D=new G,P=new G,Q=new G;function E(b){P.fromArray(s,b*3),Q.copy(P);const ae=c[b];w.copy(ae),w.sub(P.multiplyScalar(P.dot(ae))).normalize(),D.crossVectors(Q,ae);const z=D.dot(u[b])<0?-1:1;l[b*4]=w.x,l[b*4+1]=w.y,l[b*4+2]=w.z,l[b*4+3]=z}for(let b=0,ae=T.length;b<ae;++b){const ue=T[b],z=ue.start,q=ue.count;for(let $=z,ne=z+q;$<ne;$+=3)E(i[$+0]),E(i[$+1]),E(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,m=e.count;d<m;d+=3){const M=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,M),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,M=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)d[M++]=c[m++]}return new an(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new ht,qn=new mu,Gr=new aa,Bl=new G,xi=new G,Mi=new G,Ei=new G,ao=new G,Vr=new G,Wr=new qe,kr=new qe,Xr=new qe,zl=new G,Hl=new G,Gl=new G,qr=new G,Yr=new G;class $t extends Ft{constructor(e=new zn,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ao.fromBufferAttribute(f,e),a?Vr.addScaledVector(ao,u):Vr.addScaledVector(ao.sub(t),u))}t.add(Vr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(s),qn.copy(e.ray).recast(e.near),!(Gr.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Gr,Bl)===null||qn.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(Ol.copy(s).invert(),qn.copy(e.ray).applyMatrix4(Ol),!(i.boundingBox!==null&&qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,v=d.length;M<v;M++){const p=d[M],h=a[p.materialIndex],A=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=A,w=S;T<w;T+=3){const D=o.getX(T),P=o.getX(T+1),Q=o.getX(T+2);r=jr(this,h,e,i,c,u,f,D,P,Q),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=M,h=v;p<h;p+=3){const A=o.getX(p),S=o.getX(p+1),T=o.getX(p+2);r=jr(this,a,e,i,c,u,f,A,S,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let M=0,v=d.length;M<v;M++){const p=d[M],h=a[p.materialIndex],A=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=A,w=S;T<w;T+=3){const D=T,P=T+1,Q=T+2;r=jr(this,h,e,i,c,u,f,D,P,Q),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=M,h=v;p<h;p+=3){const A=p,S=p+1,T=p+2;r=jr(this,a,e,i,c,u,f,A,S,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function qp(n,e,t,i,r,s,a,o){let l;if(e.side===Pt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Bn,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:n}}function jr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,xi),n.getVertexPosition(l,Mi),n.getVertexPosition(c,Ei);const u=qp(n,e,t,i,xi,Mi,Ei,qr);if(u){r&&(Wr.fromBufferAttribute(r,o),kr.fromBufferAttribute(r,l),Xr.fromBufferAttribute(r,c),u.uv=Xt.getInterpolation(qr,xi,Mi,Ei,Wr,kr,Xr,new qe)),s&&(Wr.fromBufferAttribute(s,o),kr.fromBufferAttribute(s,l),Xr.fromBufferAttribute(s,c),u.uv1=Xt.getInterpolation(qr,xi,Mi,Ei,Wr,kr,Xr,new qe),u.uv2=u.uv1),a&&(zl.fromBufferAttribute(a,o),Hl.fromBufferAttribute(a,l),Gl.fromBufferAttribute(a,c),u.normal=Xt.getInterpolation(qr,xi,Mi,Ei,zl,Hl,Gl,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};Xt.getNormal(xi,Mi,Ei,f.normal),u.face=f}return u}class yr extends zn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;M("z","y","x",-1,-1,i,t,e,a,s,0),M("z","y","x",1,-1,i,t,-e,a,s,1),M("x","z","y",1,1,e,i,t,r,a,2),M("x","z","y",1,-1,e,i,-t,r,a,3),M("x","y","z",1,-1,e,t,i,r,s,4),M("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function M(v,p,h,A,S,T,w,D,P,Q,E){const b=T/P,ae=w/Q,ue=T/2,z=w/2,q=D/2,$=P+1,ne=Q+1;let V=0,W=0;const le=new G;for(let se=0;se<ne;se++){const O=se*ae-z;for(let k=0;k<$;k++){const me=k*b-ue;le[v]=me*A,le[p]=O*S,le[h]=q,c.push(le.x,le.y,le.z),le[v]=0,le[p]=0,le[h]=D>0?1:-1,u.push(le.x,le.y,le.z),f.push(k/P),f.push(1-se/Q),V+=1}}for(let se=0;se<Q;se++)for(let O=0;O<P;O++){const k=d+O+$*se,me=d+O+$*(se+1),Me=d+(O+1)+$*(se+1),Ee=d+(O+1)+$*se;l.push(k,me,Ee),l.push(me,Me,Ee),W+=6}o.addGroup(m,W,E),m+=W,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yt(n){const e={};for(let t=0;t<n.length;t++){const i=Gi(n[t]);for(const r in i)e[r]=i[r]}return e}function Yp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xu(n){return n.getRenderTarget()===null?n.outputColorSpace:cn}const jp={clone:Gi,merge:yt};var Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mu extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Mu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,yi=1;class Zp extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new zt(Si,yi,e,t);r.layers=this.layers,this.add(r);const s=new zt(Si,yi,e,t);s.layers=this.layers,this.add(s);const a=new zt(Si,yi,e,t);a.layers=this.layers,this.add(a);const o=new zt(Si,yi,e,t);o.layers=this.layers,this.add(o);const l=new zt(Si,yi,e,t);l.layers=this.layers,this.add(l);const c=new zt(Si,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Eu extends wt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jp extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ri?Ke:si),this.texture=new Eu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yr(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:In});s.uniforms.tEquirect.value=t;const a=new $t(r,s),o=t.minFilter;return t.minFilter===_r&&(t.minFilter=Ct),new Zp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const lo=new G,Qp=new G,em=new Be;class jn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=lo.subVectors(i,t).cross(Qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(lo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||em.getNormalMatrix(e),r=this.coplanarPoint(lo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new aa,Kr=new G;class Su{constructor(e=new jn,t=new jn,i=new jn,r=new jn,s=new jn,a=new jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],M=r[9],v=r[10],p=r[11],h=r[12],A=r[13],S=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,p-m,T-h).normalize(),i[1].setComponents(l+s,d+c,p+m,T+h).normalize(),i[2].setComponents(l+a,d+u,p+M,T+A).normalize(),i[3].setComponents(l-a,d-u,p-M,T-A).normalize(),i[4].setComponents(l-o,d-f,p-v,T-S).normalize(),t===Mn)i[5].setComponents(l+o,d+f,p+v,T+S).normalize();else if(t===cs)i[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kr.x=r.normal.x>0?e.max.x:e.min.x,Kr.y=r.normal.y>0?e.max.y:e.min.y,Kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function tm(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let M;if(f instanceof Float32Array)M=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=n.SHORT;else if(f instanceof Uint32Array)M=n.UNSIGNED_INT;else if(f instanceof Int32Array)M=n.INT;else if(f instanceof Int8Array)M=n.BYTE;else if(f instanceof Uint8Array)M=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ii extends zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],M=[],v=[],p=[];for(let h=0;h<u;h++){const A=h*d-a;for(let S=0;S<c;S++){const T=S*f-s;M.push(T,-A,0),v.push(0,0,1),p.push(S/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const S=A+c*h,T=A+c*(h+1),w=A+1+c*(h+1),D=A+1+c*h;m.push(S,T,D),m.push(T,w,D)}this.setIndex(m),this.setAttribute("position",new ln(M,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ym=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Qm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,i_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,o_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,a_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,m_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,__=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,v_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,C_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,G_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ag=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:rm,alphamap_pars_fragment:sm,alphatest_fragment:om,alphatest_pars_fragment:am,aomap_fragment:lm,aomap_pars_fragment:cm,begin_vertex:um,beginnormal_vertex:fm,bsdfs:hm,iridescence_fragment:dm,bumpmap_pars_fragment:pm,clipping_planes_fragment:mm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:gm,clipping_planes_vertex:vm,color_fragment:xm,color_pars_fragment:Mm,color_pars_vertex:Em,color_vertex:Sm,common:ym,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:bm,displacementmap_pars_vertex:Am,displacementmap_vertex:wm,emissivemap_fragment:Rm,emissivemap_pars_fragment:Cm,colorspace_fragment:Pm,colorspace_pars_fragment:Lm,envmap_fragment:Dm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Im,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:Ym,envmap_vertex:Fm,fog_vertex:Om,fog_pars_vertex:Bm,fog_fragment:zm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Gm,lightmap_fragment:Vm,lightmap_pars_fragment:Wm,lights_lambert_fragment:km,lights_lambert_pars_fragment:Xm,lights_pars_begin:qm,lights_toon_fragment:jm,lights_toon_pars_fragment:Km,lights_phong_fragment:$m,lights_phong_pars_fragment:Zm,lights_physical_fragment:Jm,lights_physical_pars_fragment:Qm,lights_fragment_begin:e_,lights_fragment_maps:t_,lights_fragment_end:n_,logdepthbuf_fragment:i_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:s_,logdepthbuf_vertex:o_,map_fragment:a_,map_pars_fragment:l_,map_particle_fragment:c_,map_particle_pars_fragment:u_,metalnessmap_fragment:f_,metalnessmap_pars_fragment:h_,morphcolor_vertex:d_,morphnormal_vertex:p_,morphtarget_pars_vertex:m_,morphtarget_vertex:__,normal_fragment_begin:g_,normal_fragment_maps:v_,normal_pars_fragment:x_,normal_pars_vertex:M_,normal_vertex:E_,normalmap_pars_fragment:S_,clearcoat_normal_fragment_begin:y_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:b_,iridescence_pars_fragment:A_,opaque_fragment:w_,packing:R_,premultiplied_alpha_fragment:C_,project_vertex:P_,dithering_fragment:L_,dithering_pars_fragment:D_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:I_,shadowmap_pars_fragment:N_,shadowmap_pars_vertex:F_,shadowmap_vertex:O_,shadowmask_pars_fragment:B_,skinbase_vertex:z_,skinning_pars_vertex:H_,skinning_vertex:G_,skinnormal_vertex:V_,specularmap_fragment:W_,specularmap_pars_fragment:k_,tonemapping_fragment:X_,tonemapping_pars_fragment:q_,transmission_fragment:Y_,transmission_pars_fragment:j_,uv_pars_fragment:K_,uv_pars_vertex:$_,uv_vertex:Z_,worldpos_vertex:J_,background_vert:Q_,background_frag:eg,backgroundCube_vert:tg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:rg,depth_vert:sg,depth_frag:og,distanceRGBA_vert:ag,distanceRGBA_frag:lg,equirect_vert:cg,equirect_frag:ug,linedashed_vert:fg,linedashed_frag:hg,meshbasic_vert:dg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:_g,meshmatcap_vert:gg,meshmatcap_frag:vg,meshnormal_vert:xg,meshnormal_frag:Mg,meshphong_vert:Eg,meshphong_frag:Sg,meshphysical_vert:yg,meshphysical_frag:Tg,meshtoon_vert:bg,meshtoon_frag:Ag,points_vert:wg,points_frag:Rg,shadow_vert:Cg,shadow_frag:Pg,sprite_vert:Lg,sprite_frag:Dg},he={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},nn={basic:{uniforms:yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:yt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:yt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:yt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:yt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:yt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:yt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:yt([he.common,he.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:yt([he.lights,he.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};nn.physical={uniforms:yt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const $r={r:0,b:0,g:0};function Ug(n,e,t,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function M(p,h){let A=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?v(o,l):S&&S.isColor&&(v(S,1),A=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Es)?(u===void 0&&(u=new $t(new yr(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Gi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=S.colorSpace!==Ke,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new $t(new Ii(2,2),new ai({name:"BackgroundMaterial",uniforms:Gi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=S.colorSpace!==Ke,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,h){p.getRGB($r,xu(n)),i.buffers.color.setClear($r.r,$r.g,$r.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:M}}function Ig(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(q,$,ne,V,W){let le=!1;if(a){const se=v(V,ne,$);c!==se&&(c=se,m(c.object)),le=h(q,V,ne,W),le&&A(q,V,ne,W)}else{const se=$.wireframe===!0;(c.geometry!==V.id||c.program!==ne.id||c.wireframe!==se)&&(c.geometry=V.id,c.program=ne.id,c.wireframe=se,le=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,Q(q,$,ne,V),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(q){return i.isWebGL2?n.bindVertexArray(q):s.bindVertexArrayOES(q)}function M(q){return i.isWebGL2?n.deleteVertexArray(q):s.deleteVertexArrayOES(q)}function v(q,$,ne){const V=ne.wireframe===!0;let W=o[q.id];W===void 0&&(W={},o[q.id]=W);let le=W[$.id];le===void 0&&(le={},W[$.id]=le);let se=le[V];return se===void 0&&(se=p(d()),le[V]=se),se}function p(q){const $=[],ne=[],V=[];for(let W=0;W<r;W++)$[W]=0,ne[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ne,attributeDivisors:V,object:q,attributes:{},index:null}}function h(q,$,ne,V){const W=c.attributes,le=$.attributes;let se=0;const O=ne.getAttributes();for(const k in O)if(O[k].location>=0){const Me=W[k];let Ee=le[k];if(Ee===void 0&&(k==="instanceMatrix"&&q.instanceMatrix&&(Ee=q.instanceMatrix),k==="instanceColor"&&q.instanceColor&&(Ee=q.instanceColor)),Me===void 0||Me.attribute!==Ee||Ee&&Me.data!==Ee.data)return!0;se++}return c.attributesNum!==se||c.index!==V}function A(q,$,ne,V){const W={},le=$.attributes;let se=0;const O=ne.getAttributes();for(const k in O)if(O[k].location>=0){let Me=le[k];Me===void 0&&(k==="instanceMatrix"&&q.instanceMatrix&&(Me=q.instanceMatrix),k==="instanceColor"&&q.instanceColor&&(Me=q.instanceColor));const Ee={};Ee.attribute=Me,Me&&Me.data&&(Ee.data=Me.data),W[k]=Ee,se++}c.attributes=W,c.attributesNum=se,c.index=V}function S(){const q=c.newAttributes;for(let $=0,ne=q.length;$<ne;$++)q[$]=0}function T(q){w(q,0)}function w(q,$){const ne=c.newAttributes,V=c.enabledAttributes,W=c.attributeDivisors;ne[q]=1,V[q]===0&&(n.enableVertexAttribArray(q),V[q]=1),W[q]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,$),W[q]=$)}function D(){const q=c.newAttributes,$=c.enabledAttributes;for(let ne=0,V=$.length;ne<V;ne++)$[ne]!==q[ne]&&(n.disableVertexAttribArray(ne),$[ne]=0)}function P(q,$,ne,V,W,le,se){se===!0?n.vertexAttribIPointer(q,$,ne,W,le):n.vertexAttribPointer(q,$,ne,V,W,le)}function Q(q,$,ne,V){if(i.isWebGL2===!1&&(q.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const W=V.attributes,le=ne.getAttributes(),se=$.defaultAttributeValues;for(const O in le){const k=le[O];if(k.location>=0){let me=W[O];if(me===void 0&&(O==="instanceMatrix"&&q.instanceMatrix&&(me=q.instanceMatrix),O==="instanceColor"&&q.instanceColor&&(me=q.instanceColor)),me!==void 0){const Me=me.normalized,Ee=me.itemSize,Te=t.get(me);if(Te===void 0)continue;const Ce=Te.buffer,we=Te.type,ze=Te.bytesPerElement,ct=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||me.gpuType===ru);if(me.isInterleavedBufferAttribute){const Ue=me.data,_=Ue.stride,R=me.offset;if(Ue.isInstancedInterleavedBuffer){for(let U=0;U<k.locationSize;U++)w(k.location+U,Ue.meshPerAttribute);q.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let U=0;U<k.locationSize;U++)T(k.location+U);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let U=0;U<k.locationSize;U++)P(k.location+U,Ee/k.locationSize,we,Me,_*ze,(R+Ee/k.locationSize*U)*ze,ct)}else{if(me.isInstancedBufferAttribute){for(let Ue=0;Ue<k.locationSize;Ue++)w(k.location+Ue,me.meshPerAttribute);q.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ue=0;Ue<k.locationSize;Ue++)T(k.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ue=0;Ue<k.locationSize;Ue++)P(k.location+Ue,Ee/k.locationSize,we,Me,Ee*ze,Ee/k.locationSize*Ue*ze,ct)}}else if(se!==void 0){const Me=se[O];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(k.location,Me);break;case 3:n.vertexAttrib3fv(k.location,Me);break;case 4:n.vertexAttrib4fv(k.location,Me);break;default:n.vertexAttrib1fv(k.location,Me)}}}}D()}function E(){ue();for(const q in o){const $=o[q];for(const ne in $){const V=$[ne];for(const W in V)M(V[W].object),delete V[W];delete $[ne]}delete o[q]}}function b(q){if(o[q.id]===void 0)return;const $=o[q.id];for(const ne in $){const V=$[ne];for(const W in V)M(V[W].object),delete V[W];delete $[ne]}delete o[q.id]}function ae(q){for(const $ in o){const ne=o[$];if(ne[q.id]===void 0)continue;const V=ne[q.id];for(const W in V)M(V[W].object),delete V[W];delete ne[q.id]}}function ue(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ue,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:ae,initAttributes:S,enableAttribute:T,disableUnusedAttributes:D}}function Ng(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Fg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,T=a||e.has("OES_texture_float"),w=S&&T,D=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:A,vertexTextures:S,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:D}}function Og(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new jn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const M=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||M===null||M.length===0||s&&!p)s?u(null):c();else{const A=s?0:i,S=A*4;let T=h.clippingState||null;l.value=T,T=u(M,d,S,m);for(let w=0;w!==S;++w)T[w]=t[w];h.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,M){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,M!==!0||p===null){const h=m+v*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,T=m;S!==v;++S,T+=4)a.copy(f[S]).applyMatrix4(A,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Bg(n){let e=new WeakMap;function t(a,o){return o===Ro?a.mapping=Bi:o===Co&&(a.mapping=zi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ro||o===Co)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Jp(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zg extends Mu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,Vl=[.125,.215,.35,.446,.526,.582],Jn=20,co=new zg,Wl=new $e;let uo=null;const Kn=(1+Math.sqrt(5))/2,Ti=1/Kn,kl=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Kn,Ti),new G(0,Kn,-Ti),new G(Ti,0,Kn),new G(-Ti,0,Kn),new G(Kn,Ti,0),new G(-Kn,Ti,0)];class Xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){uo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uo),e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:gr,format:jt,colorSpace:cn,depthBuffer:!1},r=ql(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(s)),this._blurMaterial=Gg(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,i,r){const o=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Wl),u.toneMapping=Nn,u.autoClear=!1;const m=new Mr({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),M=new $t(new yr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Wl),v=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):A===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const S=this._cubeSize;Zr(r,A*S,h>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(M,o),u.render(e,o)}M.geometry.dispose(),M.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bi||e.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,co)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kl[(r-1)%kl.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new $t(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),v=s/M,p=isFinite(s)?1+Math.floor(u*v):Jn;p>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);const h=[];let A=0;for(let P=0;P<Jn;++P){const Q=P/v,E=Math.exp(-Q*Q/2);h.push(E),P===0?A+=E:P<p&&(A+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=M,d.mipInt.value=S-i;const T=this._sizeLods[r],w=3*T*(r>S-Ri?r-S+Ri:0),D=4*(this._cubeSize-T);Zr(t,w,D,3*T,2*T),l.setRenderTarget(t),l.render(f,co)}}function Hg(n){const e=[],t=[],i=[];let r=n;const s=n-Ri+1+Vl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ri?l=Vl[a-n+Ri-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,M=6,v=3,p=2,h=1,A=new Float32Array(v*M*m),S=new Float32Array(p*M*m),T=new Float32Array(h*M*m);for(let D=0;D<m;D++){const P=D%3*2/3-1,Q=D>2?0:-1,E=[P,Q,0,P+2/3,Q,0,P+2/3,Q+1,0,P,Q,0,P+2/3,Q+1,0,P,Q+1,0];A.set(E,v*M*D),S.set(d,p*M*D);const b=[D,D,D,D,D,D];T.set(b,h*M*D)}const w=new zn;w.setAttribute("position",new an(A,v)),w.setAttribute("uv",new an(S,p)),w.setAttribute("faceIndex",new an(T,h)),e.push(w),r>Ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ql(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Gg(n,e,t){const i=new Float32Array(Jn),r=new G(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Yl(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function jl(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ro||l===Co,u=l===Bi||l===zi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Xl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Xl(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Wg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kg(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const M in d.attributes)e.remove(d.attributes[M]);for(const M in d.morphAttributes){const v=d.morphAttributes[M];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const M in d)e.update(d[M],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const M in m){const v=m[M];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,M=f.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let S=0,T=A.length;S<T;S+=3){const w=A[S+0],D=A[S+1],P=A[S+2];d.push(w,D,D,P,P,w)}}else if(M!==void 0){const A=M.array;v=M.version;for(let S=0,T=A.length/3-1;S<T;S+=3){const w=S+0,D=S+1,P=S+2;d.push(w,D,D,P,P,w)}}else return;const p=new(fu(d)?vu:gu)(d,1);p.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Xg(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,M){if(M===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,d*l,M),t.update(m,s,M)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function qg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yg(n,e){return n[0]-e[0]}function jg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Kg(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const M=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=M!==void 0?M.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let $=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var m=$;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],Q=u.morphAttributes.color||[];let E=0;S===!0&&(E=1),T===!0&&(E=2),w===!0&&(E=3);let b=u.attributes.position.count*E,ae=1;b>e.maxTextureSize&&(ae=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const ue=new Float32Array(b*ae*4*v),z=new pu(ue,b,ae,v);z.type=Ln,z.needsUpdate=!0;const q=E*4;for(let ne=0;ne<v;ne++){const V=D[ne],W=P[ne],le=Q[ne],se=b*ae*4*ne;for(let O=0;O<V.count;O++){const k=O*q;S===!0&&(a.fromBufferAttribute(V,O),ue[se+k+0]=a.x,ue[se+k+1]=a.y,ue[se+k+2]=a.z,ue[se+k+3]=0),T===!0&&(a.fromBufferAttribute(W,O),ue[se+k+4]=a.x,ue[se+k+5]=a.y,ue[se+k+6]=a.z,ue[se+k+7]=0),w===!0&&(a.fromBufferAttribute(le,O),ue[se+k+8]=a.x,ue[se+k+9]=a.y,ue[se+k+10]=a.z,ue[se+k+11]=le.itemSize===4?a.w:1)}}p={count:v,texture:z,size:new qe(b,ae)},s.set(u,p),u.addEventListener("dispose",$)}let h=0;for(let S=0;S<d.length;S++)h+=d[S];const A=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",A),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const M=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==M){v=[];for(let T=0;T<M;T++)v[T]=[T,0];i[u.id]=v}for(let T=0;T<M;T++){const w=v[T];w[0]=T,w[1]=d[T]}v.sort(jg);for(let T=0;T<8;T++)T<M&&v[T][1]?(o[T][0]=v[T][0],o[T][1]=v[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(Yg);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let A=0;for(let T=0;T<8;T++){const w=o[T],D=w[0],P=w[1];D!==Number.MAX_SAFE_INTEGER&&P?(p&&u.getAttribute("morphTarget"+T)!==p[D]&&u.setAttribute("morphTarget"+T,p[D]),h&&u.getAttribute("morphNormal"+T)!==h[D]&&u.setAttribute("morphNormal"+T,h[D]),r[T]=P,A+=P):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),h&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const S=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function $g(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Tu=new wt,bu=new pu,Au=new Np,wu=new Eu,Kl=[],$l=[],Zl=new Float32Array(16),Jl=new Float32Array(9),Ql=new Float32Array(4);function ji(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Kl[r];if(s===void 0&&(s=new Float32Array(r),Kl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function at(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bs(n,e){let t=$l[e];t===void 0&&(t=new Int32Array(e),$l[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2fv(this.addr,e),lt(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;n.uniform3fv(this.addr,e),lt(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4fv(this.addr,e),lt(t,e)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Ql.set(i),n.uniformMatrix2fv(this.addr,!1,Ql),lt(t,i)}}function nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Jl.set(i),n.uniformMatrix3fv(this.addr,!1,Jl),lt(t,i)}}function iv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Zl.set(i),n.uniformMatrix4fv(this.addr,!1,Zl),lt(t,i)}}function rv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2iv(this.addr,e),lt(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3iv(this.addr,e),lt(t,e)}}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4iv(this.addr,e),lt(t,e)}}function lv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2uiv(this.addr,e),lt(t,e)}}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3uiv(this.addr,e),lt(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4uiv(this.addr,e),lt(t,e)}}function hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Tu,r)}function dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Au,r)}function pv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wu,r)}function mv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bu,r)}function _v(n){switch(n){case 5126:return Zg;case 35664:return Jg;case 35665:return Qg;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return uv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}function gv(n,e){n.uniform1fv(this.addr,e)}function vv(n,e){const t=ji(e,this.size,2);n.uniform2fv(this.addr,t)}function xv(n,e){const t=ji(e,this.size,3);n.uniform3fv(this.addr,t)}function Mv(n,e){const t=ji(e,this.size,4);n.uniform4fv(this.addr,t)}function Ev(n,e){const t=ji(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sv(n,e){const t=ji(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yv(n,e){const t=ji(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tv(n,e){n.uniform1iv(this.addr,e)}function bv(n,e){n.uniform2iv(this.addr,e)}function Av(n,e){n.uniform3iv(this.addr,e)}function wv(n,e){n.uniform4iv(this.addr,e)}function Rv(n,e){n.uniform1uiv(this.addr,e)}function Cv(n,e){n.uniform2uiv(this.addr,e)}function Pv(n,e){n.uniform3uiv(this.addr,e)}function Lv(n,e){n.uniform4uiv(this.addr,e)}function Dv(n,e,t){const i=this.cache,r=e.length,s=bs(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Tu,s[a])}function Uv(n,e,t){const i=this.cache,r=e.length,s=bs(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Au,s[a])}function Iv(n,e,t){const i=this.cache,r=e.length,s=bs(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||wu,s[a])}function Nv(n,e,t){const i=this.cache,r=e.length,s=bs(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||bu,s[a])}function Fv(n){switch(n){case 5126:return gv;case 35664:return vv;case 35665:return xv;case 35666:return Mv;case 35674:return Ev;case 35675:return Sv;case 35676:return yv;case 5124:case 35670:return Tv;case 35667:case 35671:return bv;case 35668:case 35672:return Av;case 35669:case 35673:return wv;case 5125:return Rv;case 36294:return Cv;case 36295:return Pv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Nv}}class Ov{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=_v(t.type)}}class Bv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Fv(t.type)}}class zv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function ec(n,e){n.seq.push(e),n.map[e.id]=e}function Hv(n,e,t){const i=n.name,r=i.length;for(fo.lastIndex=0;;){const s=fo.exec(i),a=fo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ec(t,c===void 0?new Ov(o,n,e):new Bv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new zv(o),ec(t,f)),t=f}}}class is{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Hv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function tc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Gv=0;function Vv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Wv(n){switch(n){case cn:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function nc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Vv(n.getShaderSource(e),a)}else return r}function kv(n,e){const t=Wv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Xv(n,e){let t;switch(e){case Od:t="Linear";break;case Bd:t="Reinhard";break;case zd:t="OptimizedCineon";break;case Hd:t="ACESFilmic";break;case Gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ir).join(`
`)}function Yv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ir(n){return n!==""}function ic(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(n){return n.replace(Kv,Zv)}const $v=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zv(n,e){let t=Oe[e];if(t===void 0){const i=$v.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Io(t)}const Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(n){return n.replace(Jv,Qv)}function Qv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function oc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ex(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===md?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function tx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bi:case zi:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function ix(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nu:e="ENVMAP_BLENDING_MULTIPLY";break;case Nd:e="ENVMAP_BLENDING_MIX";break;case Fd:e="ENVMAP_BLENDING_ADD";break}return e}function rx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ex(t),c=tx(t),u=nx(t),f=ix(t),d=rx(t),m=t.isWebGL2?"":qv(t),M=Yv(s),v=r.createProgram();let p,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ir).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ir).join(`
`),h.length>0&&(h+=`
`)):(p=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),h=[m,oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=Io(a),a=ic(a,t),a=rc(a,t),o=Io(o),o=ic(o,t),o=rc(o,t),a=sc(a),o=sc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=A+p+a,T=A+h+o,w=tc(r,r.VERTEX_SHADER,S),D=tc(r,r.FRAGMENT_SHADER,T);if(r.attachShader(v,w),r.attachShader(v,D),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(v).trim(),b=r.getShaderInfoLog(w).trim(),ae=r.getShaderInfoLog(D).trim();let ue=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,D);else{const q=nc(r,w,"vertex"),$=nc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+q+`
`+$)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(b===""||ae==="")&&(z=!1);z&&(this.diagnostics={runnable:ue,programLog:E,vertexShader:{log:b,prefix:p},fragmentShader:{log:ae,prefix:h}})}r.deleteShader(w),r.deleteShader(D);let P;this.getUniforms=function(){return P===void 0&&(P=new is(r,v)),P};let Q;return this.getAttributes=function(){return Q===void 0&&(Q=jv(r,v)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=D,this}let ox=0;class ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lx(e),t.set(e,i)),i}}class lx{constructor(e){this.id=ox++,this.code=e,this.usedTimes=0}}function cx(n,e,t,i,r,s,a){const o=new la,l=new ax,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,b,ae,ue,z){const q=ue.fog,$=z.geometry,ne=E.isMeshStandardMaterial?ue.environment:null,V=(E.isMeshStandardMaterial?t:e).get(E.envMap||ne),W=V&&V.mapping===Es?V.image.height:null,le=M[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,O=se!==void 0?se.length:0;let k=0;$.morphAttributes.position!==void 0&&(k=1),$.morphAttributes.normal!==void 0&&(k=2),$.morphAttributes.color!==void 0&&(k=3);let me,Me,Ee,Te;if(le){const je=nn[le];me=je.vertexShader,Me=je.fragmentShader}else me=E.vertexShader,Me=E.fragmentShader,l.update(E),Ee=l.getVertexShaderID(E),Te=l.getFragmentShaderID(E);const Ce=n.getRenderTarget(),we=z.isInstancedMesh===!0,ze=!!E.map,ct=!!E.matcap,Ue=!!V,_=!!E.aoMap,R=!!E.lightMap,U=!!E.bumpMap,B=!!E.normalMap,F=!!E.displacementMap,ie=!!E.emissiveMap,re=!!E.metalnessMap,K=!!E.roughnessMap,oe=E.anisotropy>0,te=E.clearcoat>0,xe=E.iridescence>0,x=E.sheen>0,g=E.transmission>0,L=oe&&!!E.anisotropyMap,Z=te&&!!E.clearcoatMap,J=te&&!!E.clearcoatNormalMap,ee=te&&!!E.clearcoatRoughnessMap,de=xe&&!!E.iridescenceMap,ce=xe&&!!E.iridescenceThicknessMap,H=x&&!!E.sheenColorMap,Ae=x&&!!E.sheenRoughnessMap,ye=!!E.specularMap,be=!!E.specularColorMap,pe=!!E.specularIntensityMap,ge=g&&!!E.transmissionMap,Ne=g&&!!E.thicknessMap,Ye=!!E.gradientMap,C=!!E.alphaMap,_e=E.alphaTest>0,X=!!E.alphaHash,fe=!!E.extensions,ve=!!$.attributes.uv1,ke=!!$.attributes.uv2,Je=!!$.attributes.uv3;let tt=Nn;return E.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(tt=n.toneMapping),{isWebGL2:u,shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:me,fragmentShader:Me,defines:E.defines,customVertexShaderID:Ee,customFragmentShaderID:Te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:we,instancingColor:we&&z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:cn,map:ze,matcap:ct,envMap:Ue,envMapMode:Ue&&V.mapping,envMapCubeUVHeight:W,aoMap:_,lightMap:R,bumpMap:U,normalMap:B,displacementMap:d&&F,emissiveMap:ie,normalMapObjectSpace:B&&E.normalMapType===tp,normalMapTangentSpace:B&&E.normalMapType===ep,metalnessMap:re,roughnessMap:K,anisotropy:oe,anisotropyMap:L,clearcoat:te,clearcoatMap:Z,clearcoatNormalMap:J,clearcoatRoughnessMap:ee,iridescence:xe,iridescenceMap:de,iridescenceThicknessMap:ce,sheen:x,sheenColorMap:H,sheenRoughnessMap:Ae,specularMap:ye,specularColorMap:be,specularIntensityMap:pe,transmission:g,transmissionMap:ge,thicknessMap:Ne,gradientMap:Ye,opaque:E.transparent===!1&&E.blending===Di,alphaMap:C,alphaTest:_e,alphaHash:X,combine:E.combine,mapUv:ze&&v(E.map.channel),aoMapUv:_&&v(E.aoMap.channel),lightMapUv:R&&v(E.lightMap.channel),bumpMapUv:U&&v(E.bumpMap.channel),normalMapUv:B&&v(E.normalMap.channel),displacementMapUv:F&&v(E.displacementMap.channel),emissiveMapUv:ie&&v(E.emissiveMap.channel),metalnessMapUv:re&&v(E.metalnessMap.channel),roughnessMapUv:K&&v(E.roughnessMap.channel),anisotropyMapUv:L&&v(E.anisotropyMap.channel),clearcoatMapUv:Z&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:J&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:H&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(E.sheenRoughnessMap.channel),specularMapUv:ye&&v(E.specularMap.channel),specularColorMapUv:be&&v(E.specularColorMap.channel),specularIntensityMapUv:pe&&v(E.specularIntensityMap.channel),transmissionMapUv:ge&&v(E.transmissionMap.channel),thicknessMapUv:Ne&&v(E.thicknessMap.channel),alphaMapUv:C&&v(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(B||oe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:ke,vertexUv3s:Je,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(ze||C),fog:!!q,useFog:E.fog===!0,fogExp2:q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:k,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&ae.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&E.map.colorSpace===Ke,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sn,flipSided:E.side===Pt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:fe&&E.extensions.derivatives===!0,extensionFragDepth:fe&&E.extensions.fragDepth===!0,extensionDrawBuffers:fe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ae in E.defines)b.push(ae),b.push(E.defines[ae]);return E.isRawShaderMaterial===!1&&(A(b,E),S(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function A(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function S(E,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function T(E){const b=M[E.type];let ae;if(b){const ue=nn[b];ae=jp.clone(ue.uniforms)}else ae=E.uniforms;return ae}function w(E,b){let ae;for(let ue=0,z=c.length;ue<z;ue++){const q=c[ue];if(q.cacheKey===b){ae=q,++ae.usedTimes;break}}return ae===void 0&&(ae=new sx(n,b,E,s),c.push(ae)),ae}function D(E){if(--E.usedTimes===0){const b=c.indexOf(E);c[b]=c[c.length-1],c.pop(),E.destroy()}}function P(E){l.remove(E)}function Q(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:w,releaseProgram:D,releaseShaderCache:P,programs:c,dispose:Q}}function ux(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function fx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ac(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,M,v,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:M,renderOrder:f.renderOrder,z:v,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=M,h.renderOrder=f.renderOrder,h.z=v,h.group=p),e++,h}function o(f,d,m,M,v,p){const h=a(f,d,m,M,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,M,v,p){const h=a(f,d,m,M,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||fx),i.length>1&&i.sort(d||ac),r.length>1&&r.sort(d||ac)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function hx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new lc,n.set(i,[a])):r>=s.length?(a=new lc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function dx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new $e};break;case"SpotLight":t={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function px(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mx=0;function _x(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gx(n,e){const t=new dx,i=px(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,a=new ht,o=new ht;function l(u,f){let d=0,m=0,M=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let v=0,p=0,h=0,A=0,S=0,T=0,w=0,D=0,P=0,Q=0;u.sort(_x);const E=f===!0?Math.PI:1;for(let ae=0,ue=u.length;ae<ue;ae++){const z=u[ae],q=z.color,$=z.intensity,ne=z.distance,V=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=q.r*$*E,m+=q.g*$*E,M+=q.b*$*E;else if(z.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(z.sh.coefficients[W],$);else if(z.isDirectionalLight){const W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){const le=z.shadow,se=i.get(z);se.shadowBias=le.bias,se.shadowNormalBias=le.normalBias,se.shadowRadius=le.radius,se.shadowMapSize=le.mapSize,r.directionalShadow[v]=se,r.directionalShadowMap[v]=V,r.directionalShadowMatrix[v]=z.shadow.matrix,T++}r.directional[v]=W,v++}else if(z.isSpotLight){const W=t.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy(q).multiplyScalar($*E),W.distance=ne,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,r.spot[h]=W;const le=z.shadow;if(z.map&&(r.spotLightMap[P]=z.map,P++,le.updateMatrices(z),z.castShadow&&Q++),r.spotLightMatrix[h]=le.matrix,z.castShadow){const se=i.get(z);se.shadowBias=le.bias,se.shadowNormalBias=le.normalBias,se.shadowRadius=le.radius,se.shadowMapSize=le.mapSize,r.spotShadow[h]=se,r.spotShadowMap[h]=V,D++}h++}else if(z.isRectAreaLight){const W=t.get(z);W.color.copy(q).multiplyScalar($),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),r.rectArea[A]=W,A++}else if(z.isPointLight){const W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*E),W.distance=z.distance,W.decay=z.decay,z.castShadow){const le=z.shadow,se=i.get(z);se.shadowBias=le.bias,se.shadowNormalBias=le.normalBias,se.shadowRadius=le.radius,se.shadowMapSize=le.mapSize,se.shadowCameraNear=le.camera.near,se.shadowCameraFar=le.camera.far,r.pointShadow[p]=se,r.pointShadowMap[p]=V,r.pointShadowMatrix[p]=z.shadow.matrix,w++}r.point[p]=W,p++}else if(z.isHemisphereLight){const W=t.get(z);W.skyColor.copy(z.color).multiplyScalar($*E),W.groundColor.copy(z.groundColor).multiplyScalar($*E),r.hemi[S]=W,S++}}A>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=M;const b=r.hash;(b.directionalLength!==v||b.pointLength!==p||b.spotLength!==h||b.rectAreaLength!==A||b.hemiLength!==S||b.numDirectionalShadows!==T||b.numPointShadows!==w||b.numSpotShadows!==D||b.numSpotMaps!==P)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=A,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=D+P-Q,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=Q,b.directionalLength=v,b.pointLength=p,b.spotLength=h,b.rectAreaLength=A,b.hemiLength=S,b.numDirectionalShadows=T,b.numPointShadows=w,b.numSpotShadows=D,b.numSpotMaps=P,r.version=mx++)}function c(u,f){let d=0,m=0,M=0,v=0,p=0;const h=f.matrixWorldInverse;for(let A=0,S=u.length;A<S;A++){const T=u[A];if(T.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),d++}else if(T.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),M++}else if(T.isRectAreaLight){const w=r.rectArea[v];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(h),o.identity(),a.copy(T.matrixWorld),a.premultiply(h),o.extractRotation(a),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(h),m++}else if(T.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function cc(n,e){const t=new gx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function vx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new cc(n,e),t.set(s,[l])):a>=o.length?(l=new cc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class xx extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mx extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yx(n,e,t){let i=new Su;const r=new qe,s=new qe,a=new ft,o=new xx({depthPacking:Qd}),l=new Mx,c={},u=t.maxTextureSize,f={[Bn]:Pt,[Pt]:Bn,[sn]:sn},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Ex,fragmentShader:Sx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const M=new zn;M.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(M,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let h=this.type;this.render=function(w,D,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const Q=n.getRenderTarget(),E=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(In),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ue=h!==gn&&this.type===gn,z=h===gn&&this.type!==gn;for(let q=0,$=w.length;q<$;q++){const ne=w[q],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const W=V.getFrameExtents();if(r.multiply(W),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,V.mapSize.y=s.y)),V.map===null||ue===!0||z===!0){const se=this.type!==gn?{minFilter:Tt,magFilter:Tt}:{};V.map!==null&&V.map.dispose(),V.map=new oi(r.x,r.y,se),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const le=V.getViewportCount();for(let se=0;se<le;se++){const O=V.getViewport(se);a.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),ae.viewport(a),V.updateMatrices(ne,se),i=V.getFrustum(),T(D,P,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===gn&&A(V,P),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(Q,E,b)};function A(w,D){const P=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new oi(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(D,null,P,d,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(D,null,P,m,v,null)}function S(w,D,P,Q){let E=null;const b=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)E=b;else if(E=P.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ae=E.uuid,ue=D.uuid;let z=c[ae];z===void 0&&(z={},c[ae]=z);let q=z[ue];q===void 0&&(q=E.clone(),z[ue]=q),E=q}if(E.visible=D.visible,E.wireframe=D.wireframe,Q===gn?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:f[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ae=n.properties.get(E);ae.light=P}return E}function T(w,D,P,Q,E){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===gn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const ue=e.update(w),z=w.material;if(Array.isArray(z)){const q=ue.groups;for(let $=0,ne=q.length;$<ne;$++){const V=q[$],W=z[V.materialIndex];if(W&&W.visible){const le=S(w,W,Q,E);n.renderBufferDirect(P,null,ue,le,w,V)}}}else if(z.visible){const q=S(w,z,Q,E);n.renderBufferDirect(P,null,ue,q,w,null)}}const ae=w.children;for(let ue=0,z=ae.length;ue<z;ue++)T(ae[ue],D,P,Q,E)}}function Tx(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const _e=new ft;let X=null;const fe=new ft(0,0,0,0);return{setMask:function(ve){X!==ve&&!C&&(n.colorMask(ve,ve,ve,ve),X=ve)},setLocked:function(ve){C=ve},setClear:function(ve,ke,Je,tt,yn){yn===!0&&(ve*=tt,ke*=tt,Je*=tt),_e.set(ve,ke,Je,tt),fe.equals(_e)===!1&&(n.clearColor(ve,ke,Je,tt),fe.copy(_e))},reset:function(){C=!1,X=null,fe.set(-1,0,0,0)}}}function s(){let C=!1,_e=null,X=null,fe=null;return{setTest:function(ve){ve?Ce(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ve){_e!==ve&&!C&&(n.depthMask(ve),_e=ve)},setFunc:function(ve){if(X!==ve){switch(ve){case Rd:n.depthFunc(n.NEVER);break;case Cd:n.depthFunc(n.ALWAYS);break;case Pd:n.depthFunc(n.LESS);break;case wo:n.depthFunc(n.LEQUAL);break;case Ld:n.depthFunc(n.EQUAL);break;case Dd:n.depthFunc(n.GEQUAL);break;case Ud:n.depthFunc(n.GREATER);break;case Id:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ve}},setLocked:function(ve){C=ve},setClear:function(ve){fe!==ve&&(n.clearDepth(ve),fe=ve)},reset:function(){C=!1,_e=null,X=null,fe=null}}}function a(){let C=!1,_e=null,X=null,fe=null,ve=null,ke=null,Je=null,tt=null,yn=null;return{setTest:function(je){C||(je?Ce(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(je){_e!==je&&!C&&(n.stencilMask(je),_e=je)},setFunc:function(je,Qt,xt){(X!==je||fe!==Qt||ve!==xt)&&(n.stencilFunc(je,Qt,xt),X=je,fe=Qt,ve=xt)},setOp:function(je,Qt,xt){(ke!==je||Je!==Qt||tt!==xt)&&(n.stencilOp(je,Qt,xt),ke=je,Je=Qt,tt=xt)},setLocked:function(je){C=je},setClear:function(je){yn!==je&&(n.clearStencil(je),yn=je)},reset:function(){C=!1,_e=null,X=null,fe=null,ve=null,ke=null,Je=null,tt=null,yn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},M=new WeakMap,v=[],p=null,h=!1,A=null,S=null,T=null,w=null,D=null,P=null,Q=null,E=!1,b=null,ae=null,ue=null,z=null,q=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,V=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),ne=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ne=V>=2);let le=null,se={};const O=n.getParameter(n.SCISSOR_BOX),k=n.getParameter(n.VIEWPORT),me=new ft().fromArray(O),Me=new ft().fromArray(k);function Ee(C,_e,X,fe){const ve=new Uint8Array(4),ke=n.createTexture();n.bindTexture(C,ke),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<X;Je++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(_e+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ke}const Te={};Te[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(wo),F(!1),ie(Ya),Ce(n.CULL_FACE),U(In);function Ce(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function we(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function ze(C,_e){return m[C]!==_e?(n.bindFramebuffer(C,_e),m[C]=_e,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=_e),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function ct(C,_e){let X=v,fe=!1;if(C)if(X=M.get(_e),X===void 0&&(X=[],M.set(_e,X)),C.isWebGLMultipleRenderTargets){const ve=C.texture;if(X.length!==ve.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,Je=ve.length;ke<Je;ke++)X[ke]=n.COLOR_ATTACHMENT0+ke;X.length=ve.length,fe=!0}}else X[0]!==n.COLOR_ATTACHMENT0&&(X[0]=n.COLOR_ATTACHMENT0,fe=!0);else X[0]!==n.BACK&&(X[0]=n.BACK,fe=!0);fe&&(t.isWebGL2?n.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Ue(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const _={[bi]:n.FUNC_ADD,[gd]:n.FUNC_SUBTRACT,[vd]:n.FUNC_REVERSE_SUBTRACT};if(i)_[Za]=n.MIN,_[Ja]=n.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(_[Za]=C.MIN_EXT,_[Ja]=C.MAX_EXT)}const R={[xd]:n.ZERO,[Md]:n.ONE,[Ed]:n.SRC_COLOR,[eu]:n.SRC_ALPHA,[wd]:n.SRC_ALPHA_SATURATE,[bd]:n.DST_COLOR,[yd]:n.DST_ALPHA,[Sd]:n.ONE_MINUS_SRC_COLOR,[tu]:n.ONE_MINUS_SRC_ALPHA,[Ad]:n.ONE_MINUS_DST_COLOR,[Td]:n.ONE_MINUS_DST_ALPHA};function U(C,_e,X,fe,ve,ke,Je,tt){if(C===In){h===!0&&(we(n.BLEND),h=!1);return}if(h===!1&&(Ce(n.BLEND),h=!0),C!==_d){if(C!==A||tt!==E){if((S!==bi||D!==bi)&&(n.blendEquation(n.FUNC_ADD),S=bi,D=bi),tt)switch(C){case Di:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ja:n.blendFunc(n.ONE,n.ONE);break;case Ka:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $a:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ja:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ka:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $a:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,w=null,P=null,Q=null,A=C,E=tt}return}ve=ve||_e,ke=ke||X,Je=Je||fe,(_e!==S||ve!==D)&&(n.blendEquationSeparate(_[_e],_[ve]),S=_e,D=ve),(X!==T||fe!==w||ke!==P||Je!==Q)&&(n.blendFuncSeparate(R[X],R[fe],R[ke],R[Je]),T=X,w=fe,P=ke,Q=Je),A=C,E=!1}function B(C,_e){C.side===sn?we(n.CULL_FACE):Ce(n.CULL_FACE);let X=C.side===Pt;_e&&(X=!X),F(X),C.blending===Di&&C.transparent===!1?U(In):U(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const fe=C.stencilWrite;c.setTest(fe),fe&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),K(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(C){b!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),b=C)}function ie(C){C!==dd?(Ce(n.CULL_FACE),C!==ae&&(C===Ya?n.cullFace(n.BACK):C===pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),ae=C}function re(C){C!==ue&&(ne&&n.lineWidth(C),ue=C)}function K(C,_e,X){C?(Ce(n.POLYGON_OFFSET_FILL),(z!==_e||q!==X)&&(n.polygonOffset(_e,X),z=_e,q=X)):we(n.POLYGON_OFFSET_FILL)}function oe(C){C?Ce(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function te(C){C===void 0&&(C=n.TEXTURE0+$-1),le!==C&&(n.activeTexture(C),le=C)}function xe(C,_e,X){X===void 0&&(le===null?X=n.TEXTURE0+$-1:X=le);let fe=se[X];fe===void 0&&(fe={type:void 0,texture:void 0},se[X]=fe),(fe.type!==C||fe.texture!==_e)&&(le!==X&&(n.activeTexture(X),le=X),n.bindTexture(C,_e||Te[C]),fe.type=C,fe.texture=_e)}function x(){const C=se[le];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function g(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function L(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function H(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(C){me.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),me.copy(C))}function pe(C){Me.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Me.copy(C))}function ge(C,_e){let X=f.get(_e);X===void 0&&(X=new WeakMap,f.set(_e,X));let fe=X.get(C);fe===void 0&&(fe=n.getUniformBlockIndex(_e,C.name),X.set(C,fe))}function Ne(C,_e){const fe=f.get(_e).get(C);u.get(_e)!==fe&&(n.uniformBlockBinding(_e,fe,C.__bindingPointIndex),u.set(_e,fe))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},le=null,se={},m={},M=new WeakMap,v=[],p=null,h=!1,A=null,S=null,T=null,w=null,D=null,P=null,Q=null,E=!1,b=null,ae=null,ue=null,z=null,q=null,me.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:we,bindFramebuffer:ze,drawBuffers:ct,useProgram:Ue,setBlending:U,setMaterial:B,setFlipSided:F,setCullFace:ie,setLineWidth:re,setPolygonOffset:K,setScissorTest:oe,activeTexture:te,bindTexture:xe,unbindTexture:x,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ae,texImage3D:ye,updateUBOMapping:ge,uniformBlockBinding:Ne,texStorage2D:ce,texStorage3D:H,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:ee,compressedTexSubImage3D:de,scissor:be,viewport:pe,reset:Ye}}function bx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let v;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(x,g){return h?new OffscreenCanvas(x,g):xr("canvas")}function S(x,g,L,Z){let J=1;if((x.width>Z||x.height>Z)&&(J=Z/Math.max(x.width,x.height)),J<1||g===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const ee=g?us:Math.floor,de=ee(J*x.width),ce=ee(J*x.height);v===void 0&&(v=A(de,ce));const H=L?A(de,ce):v;return H.width=de,H.height=ce,H.getContext("2d").drawImage(x,0,0,de,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+de+"x"+ce+")."),H}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function T(x){return Uo(x.width)&&Uo(x.height)}function w(x){return o?!1:x.wrapS!==Yt||x.wrapT!==Yt||x.minFilter!==Tt&&x.minFilter!==Ct}function D(x,g){return x.generateMipmaps&&g&&x.minFilter!==Tt&&x.minFilter!==Ct}function P(x){n.generateMipmap(x)}function Q(x,g,L,Z,J=!1){if(o===!1)return g;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let ee=g;return g===n.RED&&(L===n.FLOAT&&(ee=n.R32F),L===n.HALF_FLOAT&&(ee=n.R16F),L===n.UNSIGNED_BYTE&&(ee=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(ee=n.R8UI),L===n.UNSIGNED_SHORT&&(ee=n.R16UI),L===n.UNSIGNED_INT&&(ee=n.R32UI),L===n.BYTE&&(ee=n.R8I),L===n.SHORT&&(ee=n.R16I),L===n.INT&&(ee=n.R32I)),g===n.RG&&(L===n.FLOAT&&(ee=n.RG32F),L===n.HALF_FLOAT&&(ee=n.RG16F),L===n.UNSIGNED_BYTE&&(ee=n.RG8)),g===n.RGBA&&(L===n.FLOAT&&(ee=n.RGBA32F),L===n.HALF_FLOAT&&(ee=n.RGBA16F),L===n.UNSIGNED_BYTE&&(ee=Z===Ke&&J===!1?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)),(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(x,g,L){return D(x,L)===!0||x.isFramebufferTexture&&x.minFilter!==Tt&&x.minFilter!==Ct?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function b(x){return x===Tt||x===Qa||x===Bs?n.NEAREST:n.LINEAR}function ae(x){const g=x.target;g.removeEventListener("dispose",ae),z(g),g.isVideoTexture&&M.delete(g)}function ue(x){const g=x.target;g.removeEventListener("dispose",ue),$(g)}function z(x){const g=i.get(x);if(g.__webglInit===void 0)return;const L=x.source,Z=p.get(L);if(Z){const J=Z[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&q(x),Object.keys(Z).length===0&&p.delete(L)}i.remove(x)}function q(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const L=x.source,Z=p.get(L);delete Z[g.__cacheKey],a.memory.textures--}function $(x){const g=x.texture,L=i.get(x),Z=i.get(g);if(Z.__webglTexture!==void 0&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(L.__webglFramebuffer[J]))for(let ee=0;ee<L.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(L.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(L.__webglFramebuffer[J]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[J])}else{if(Array.isArray(L.__webglFramebuffer))for(let J=0;J<L.__webglFramebuffer.length;J++)n.deleteFramebuffer(L.__webglFramebuffer[J]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let J=0;J<L.__webglColorRenderbuffer.length;J++)L.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[J]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let J=0,ee=g.length;J<ee;J++){const de=i.get(g[J]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(g[J])}i.remove(g),i.remove(x)}let ne=0;function V(){ne=0}function W(){const x=ne;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),ne+=1,x}function le(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function se(x,g){const L=i.get(x);if(x.isVideoTexture&&te(x),x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){const Z=x.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(L,x,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function O(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){ze(L,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function k(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){ze(L,x,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function me(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){ct(L,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const Me={[Po]:n.REPEAT,[Yt]:n.CLAMP_TO_EDGE,[Lo]:n.MIRRORED_REPEAT},Ee={[Tt]:n.NEAREST,[Qa]:n.NEAREST_MIPMAP_NEAREST,[Bs]:n.NEAREST_MIPMAP_LINEAR,[Ct]:n.LINEAR,[Vd]:n.LINEAR_MIPMAP_NEAREST,[_r]:n.LINEAR_MIPMAP_LINEAR},Te={[ip]:n.NEVER,[up]:n.ALWAYS,[rp]:n.LESS,[op]:n.LEQUAL,[sp]:n.EQUAL,[cp]:n.GEQUAL,[ap]:n.GREATER,[lp]:n.NOTEQUAL};function Ce(x,g,L){if(L?(n.texParameteri(x,n.TEXTURE_WRAP_S,Me[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,Me[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,Me[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Ee[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Ee[g.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==Yt||g.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,b(g.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,b(g.minFilter)),g.minFilter!==Tt&&g.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Te[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Tt||g.minFilter!==Bs&&g.minFilter!==_r||g.type===Ln&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===gr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(x,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function we(x,g){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",ae));const Z=g.source;let J=p.get(Z);J===void 0&&(J={},p.set(Z,J));const ee=le(g);if(ee!==x.__cacheKey){J[ee]===void 0&&(J[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),J[ee].usedTimes++;const de=J[x.__cacheKey];de!==void 0&&(J[x.__cacheKey].usedTimes--,de.usedTimes===0&&q(g)),x.__cacheKey=ee,x.__webglTexture=J[ee].texture}return L}function ze(x,g,L){let Z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=n.TEXTURE_3D);const J=we(x,g),ee=g.source;t.bindTexture(Z,x.__webglTexture,n.TEXTURE0+L);const de=i.get(ee);if(ee.version!==de.__version||J===!0){t.activeTexture(n.TEXTURE0+L),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ce=w(g)&&T(g.image)===!1;let H=S(g.image,ce,!1,u);H=xe(g,H);const Ae=T(H)||o,ye=s.convert(g.format,g.colorSpace);let be=s.convert(g.type),pe=Q(g.internalFormat,ye,be,g.colorSpace,g.isVideoTexture);Ce(Z,g,Ae);let ge;const Ne=g.mipmaps,Ye=o&&g.isVideoTexture!==!0,C=de.__version===void 0||J===!0,_e=E(g,H,Ae);if(g.isDepthTexture)pe=n.DEPTH_COMPONENT,o?g.type===Ln?pe=n.DEPTH_COMPONENT32F:g.type===Pn?pe=n.DEPTH_COMPONENT24:g.type===ni?pe=n.DEPTH24_STENCIL8:pe=n.DEPTH_COMPONENT16:g.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ii&&pe===n.DEPTH_COMPONENT&&g.type!==sa&&g.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Pn,be=s.convert(g.type)),g.format===Hi&&pe===n.DEPTH_COMPONENT&&(pe=n.DEPTH_STENCIL,g.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=ni,be=s.convert(g.type))),C&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,pe,H.width,H.height):t.texImage2D(n.TEXTURE_2D,0,pe,H.width,H.height,0,ye,be,null));else if(g.isDataTexture)if(Ne.length>0&&Ae){Ye&&C&&t.texStorage2D(n.TEXTURE_2D,_e,pe,Ne[0].width,Ne[0].height);for(let X=0,fe=Ne.length;X<fe;X++)ge=Ne[X],Ye?t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,ye,be,ge.data):t.texImage2D(n.TEXTURE_2D,X,pe,ge.width,ge.height,0,ye,be,ge.data);g.generateMipmaps=!1}else Ye?(C&&t.texStorage2D(n.TEXTURE_2D,_e,pe,H.width,H.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,H.width,H.height,ye,be,H.data)):t.texImage2D(n.TEXTURE_2D,0,pe,H.width,H.height,0,ye,be,H.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ye&&C&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,pe,Ne[0].width,Ne[0].height,H.depth);for(let X=0,fe=Ne.length;X<fe;X++)ge=Ne[X],g.format!==jt?ye!==null?Ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,H.depth,ye,ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,pe,ge.width,ge.height,H.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,H.depth,ye,be,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,pe,ge.width,ge.height,H.depth,0,ye,be,ge.data)}else{Ye&&C&&t.texStorage2D(n.TEXTURE_2D,_e,pe,Ne[0].width,Ne[0].height);for(let X=0,fe=Ne.length;X<fe;X++)ge=Ne[X],g.format!==jt?ye!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,X,pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,ye,be,ge.data):t.texImage2D(n.TEXTURE_2D,X,pe,ge.width,ge.height,0,ye,be,ge.data)}else if(g.isDataArrayTexture)Ye?(C&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,pe,H.width,H.height,H.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ye,be,H.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,H.width,H.height,H.depth,0,ye,be,H.data);else if(g.isData3DTexture)Ye?(C&&t.texStorage3D(n.TEXTURE_3D,_e,pe,H.width,H.height,H.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ye,be,H.data)):t.texImage3D(n.TEXTURE_3D,0,pe,H.width,H.height,H.depth,0,ye,be,H.data);else if(g.isFramebufferTexture){if(C)if(Ye)t.texStorage2D(n.TEXTURE_2D,_e,pe,H.width,H.height);else{let X=H.width,fe=H.height;for(let ve=0;ve<_e;ve++)t.texImage2D(n.TEXTURE_2D,ve,pe,X,fe,0,ye,be,null),X>>=1,fe>>=1}}else if(Ne.length>0&&Ae){Ye&&C&&t.texStorage2D(n.TEXTURE_2D,_e,pe,Ne[0].width,Ne[0].height);for(let X=0,fe=Ne.length;X<fe;X++)ge=Ne[X],Ye?t.texSubImage2D(n.TEXTURE_2D,X,0,0,ye,be,ge):t.texImage2D(n.TEXTURE_2D,X,pe,ye,be,ge);g.generateMipmaps=!1}else Ye?(C&&t.texStorage2D(n.TEXTURE_2D,_e,pe,H.width,H.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,be,H)):t.texImage2D(n.TEXTURE_2D,0,pe,ye,be,H);D(g,Ae)&&P(Z),de.__version=ee.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function ct(x,g,L){if(g.image.length!==6)return;const Z=we(x,g),J=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+L);const ee=i.get(J);if(J.version!==ee.__version||Z===!0){t.activeTexture(n.TEXTURE0+L),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const de=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,H=[];for(let X=0;X<6;X++)!de&&!ce?H[X]=S(g.image[X],!1,!0,c):H[X]=ce?g.image[X].image:g.image[X],H[X]=xe(g,H[X]);const Ae=H[0],ye=T(Ae)||o,be=s.convert(g.format,g.colorSpace),pe=s.convert(g.type),ge=Q(g.internalFormat,be,pe,g.colorSpace),Ne=o&&g.isVideoTexture!==!0,Ye=ee.__version===void 0||Z===!0;let C=E(g,Ae,ye);Ce(n.TEXTURE_CUBE_MAP,g,ye);let _e;if(de){Ne&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,C,ge,Ae.width,Ae.height);for(let X=0;X<6;X++){_e=H[X].mipmaps;for(let fe=0;fe<_e.length;fe++){const ve=_e[fe];g.format!==jt?be!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe,0,0,ve.width,ve.height,be,pe,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe,ge,ve.width,ve.height,0,be,pe,ve.data)}}}else{_e=g.mipmaps,Ne&&Ye&&(_e.length>0&&C++,t.texStorage2D(n.TEXTURE_CUBE_MAP,C,ge,H[0].width,H[0].height));for(let X=0;X<6;X++)if(ce){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,H[X].width,H[X].height,be,pe,H[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ge,H[X].width,H[X].height,0,be,pe,H[X].data);for(let fe=0;fe<_e.length;fe++){const ke=_e[fe].image[X].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe+1,0,0,ke.width,ke.height,be,pe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe+1,ge,ke.width,ke.height,0,be,pe,ke.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,be,pe,H[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ge,be,pe,H[X]);for(let fe=0;fe<_e.length;fe++){const ve=_e[fe];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe+1,0,0,be,pe,ve.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe+1,ge,be,pe,ve.image[X])}}}D(g,ye)&&P(n.TEXTURE_CUBE_MAP),ee.__version=J.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Ue(x,g,L,Z,J,ee){const de=s.convert(L.format,L.colorSpace),ce=s.convert(L.type),H=Q(L.internalFormat,de,ce,L.colorSpace);if(!i.get(g).__hasExternalTextures){const ye=Math.max(1,g.width>>ee),be=Math.max(1,g.height>>ee);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,H,ye,be,g.depth,0,de,ce,null):t.texImage2D(J,ee,H,ye,be,0,de,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),oe(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,i.get(L).__webglTexture,0,K(g)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,i.get(L).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(x,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer&&!g.stencilBuffer){let Z=n.DEPTH_COMPONENT16;if(L||oe(g)){const J=g.depthTexture;J&&J.isDepthTexture&&(J.type===Ln?Z=n.DEPTH_COMPONENT32F:J.type===Pn&&(Z=n.DEPTH_COMPONENT24));const ee=K(g);oe(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,Z,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,Z,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(g.depthBuffer&&g.stencilBuffer){const Z=K(g);L&&oe(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,g.width,g.height):oe(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const Z=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let J=0;J<Z.length;J++){const ee=Z[J],de=s.convert(ee.format,ee.colorSpace),ce=s.convert(ee.type),H=Q(ee.internalFormat,de,ce,ee.colorSpace),Ae=K(g);L&&oe(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,H,g.width,g.height):oe(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,H,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,H,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function R(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),se(g.depthTexture,0);const Z=i.get(g.depthTexture).__webglTexture,J=K(g);if(g.depthTexture.format===ii)oe(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(g.depthTexture.format===Hi)oe(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function U(x){const g=i.get(x),L=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");R(g.__webglFramebuffer,x)}else if(L){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]=n.createRenderbuffer(),_(g.__webglDepthbuffer[Z],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),_(g.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(x,g,L){const Z=i.get(x);g!==void 0&&Ue(Z.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&U(x)}function F(x){const g=x.texture,L=i.get(x),Z=i.get(g);x.addEventListener("dispose",ue),x.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=g.version,a.memory.textures++);const J=x.isWebGLCubeRenderTarget===!0,ee=x.isWebGLMultipleRenderTargets===!0,de=T(x)||o;if(J){L.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[ce]=[];for(let H=0;H<g.mipmaps.length;H++)L.__webglFramebuffer[ce][H]=n.createFramebuffer()}else L.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)L.__webglFramebuffer[ce]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ee)if(r.drawBuffers){const ce=x.texture;for(let H=0,Ae=ce.length;H<Ae;H++){const ye=i.get(ce[H]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&oe(x)===!1){const ce=ee?g:[g];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let H=0;H<ce.length;H++){const Ae=ce[H];L.__webglColorRenderbuffer[H]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[H]);const ye=s.convert(Ae.format,Ae.colorSpace),be=s.convert(Ae.type),pe=Q(Ae.internalFormat,ye,be,Ae.colorSpace,x.isXRRenderTarget===!0),ge=K(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,pe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+H,n.RENDERBUFFER,L.__webglColorRenderbuffer[H])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),_(L.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,g,de);for(let ce=0;ce<6;ce++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let H=0;H<g.mipmaps.length;H++)Ue(L.__webglFramebuffer[ce][H],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,H);else Ue(L.__webglFramebuffer[ce],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);D(g,de)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const ce=x.texture;for(let H=0,Ae=ce.length;H<Ae;H++){const ye=ce[H],be=i.get(ye);t.bindTexture(n.TEXTURE_2D,be.__webglTexture),Ce(n.TEXTURE_2D,ye,de),Ue(L.__webglFramebuffer,x,ye,n.COLOR_ATTACHMENT0+H,n.TEXTURE_2D,0),D(ye,de)&&P(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?ce=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,Z.__webglTexture),Ce(ce,g,de),o&&g.mipmaps&&g.mipmaps.length>0)for(let H=0;H<g.mipmaps.length;H++)Ue(L.__webglFramebuffer[H],x,g,n.COLOR_ATTACHMENT0,ce,H);else Ue(L.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,ce,0);D(g,de)&&P(ce),t.unbindTexture()}x.depthBuffer&&U(x)}function ie(x){const g=T(x)||o,L=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0,J=L.length;Z<J;Z++){const ee=L[Z];if(D(ee,g)){const de=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(ee).__webglTexture;t.bindTexture(de,ce),P(de),t.unbindTexture()}}}function re(x){if(o&&x.samples>0&&oe(x)===!1){const g=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],L=x.width,Z=x.height;let J=n.COLOR_BUFFER_BIT;const ee=[],de=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(x),H=x.isWebGLMultipleRenderTargets===!0;if(H)for(let Ae=0;Ae<g.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ae=0;Ae<g.length;Ae++){ee.push(n.COLOR_ATTACHMENT0+Ae),x.depthBuffer&&ee.push(de);const ye=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ye===!1&&(x.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),H&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]),ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[de]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[de])),H){const be=i.get(g[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,L,Z,0,0,L,Z,J,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),H)for(let Ae=0;Ae<g.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Ae]);const ye=i.get(g[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function K(x){return Math.min(f,x.samples)}function oe(x){const g=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function te(x){const g=a.render.frame;M.get(x)!==g&&(M.set(x,g),x.update())}function xe(x,g){const L=x.colorSpace,Z=x.format,J=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Do||L!==cn&&L!==si&&(L===Ke||L===Ss?o===!1?e.has("EXT_sRGB")===!0&&Z===jt?(x.format=Do,x.minFilter=Ct,x.generateMipmaps=!1):g=hu.sRGBToLinear(g):(Z!==jt||J!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=se,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=me,this.rebindTextures=B,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=oe}const Ax=0,ot=1;function wx(n,e,t){const i=t.isWebGL2;function r(s,a=si){let o;const l=a===Ke||a===Ss?ot:Ax;if(s===Fn)return n.UNSIGNED_BYTE;if(s===su)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ou)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Wd)return n.BYTE;if(s===kd)return n.SHORT;if(s===sa)return n.UNSIGNED_SHORT;if(s===ru)return n.INT;if(s===Pn)return n.UNSIGNED_INT;if(s===Ln)return n.FLOAT;if(s===gr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Xd)return n.ALPHA;if(s===jt)return n.RGBA;if(s===qd)return n.LUMINANCE;if(s===Yd)return n.LUMINANCE_ALPHA;if(s===ii)return n.DEPTH_COMPONENT;if(s===Hi)return n.DEPTH_STENCIL;if(s===Do)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===jd)return n.RED;if(s===au)return n.RED_INTEGER;if(s===Kd)return n.RG;if(s===lu)return n.RG_INTEGER;if(s===cu)return n.RGBA_INTEGER;if(s===zs||s===Hs||s===Gs||s===Vs)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===zs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===zs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===el||s===tl||s===nl||s===il)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===el)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===il)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$d)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rl||s===sl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===rl)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===sl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ol||s===al||s===ll||s===cl||s===ul||s===fl||s===hl||s===dl||s===pl||s===ml||s===_l||s===gl||s===vl||s===xl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ol)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===al)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ll)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ul)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ml)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_l)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ws||s===Ml||s===El)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ws)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ml)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===El)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zd||s===Sl||s===yl||s===Tl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ws)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Sl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ni?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Rx extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jr extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cx={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,M=.005;c.inputState.pinching&&d>m+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Px extends wt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ii,u!==ii&&u!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ii&&(i=Pn),i===void 0&&u===Hi&&(i=ni),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lx extends qi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,M=null;const v=t.getContextAttributes();let p=null,h=null;const A=[],S=[],T=new zt;T.layers.enable(1),T.viewport=new ft;const w=new zt;w.layers.enable(2),w.viewport=new ft;const D=[T,w],P=new Rx;P.layers.enable(1),P.layers.enable(2);let Q=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let k=A[O];return k===void 0&&(k=new ho,A[O]=k),k.getTargetRaySpace()},this.getControllerGrip=function(O){let k=A[O];return k===void 0&&(k=new ho,A[O]=k),k.getGripSpace()},this.getHand=function(O){let k=A[O];return k===void 0&&(k=new ho,A[O]=k),k.getHandSpace()};function b(O){const k=S.indexOf(O.inputSource);if(k===-1)return;const me=A[k];me!==void 0&&(me.update(O.inputSource,O.frame,c||a),me.dispatchEvent({type:O.type,data:O.inputSource}))}function ae(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",ue);for(let O=0;O<A.length;O++){const k=S[O];k!==null&&(S[O]=null,A[O].disconnect(k))}Q=null,E=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",ue),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:m}),h=new oi(m.framebufferWidth,m.framebufferHeight,{format:jt,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let k=null,me=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=v.stencil?Hi:ii,me=v.stencil?ni:Pn);const Ee={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),h=new oi(d.textureWidth,d.textureHeight,{format:jt,type:Fn,depthTexture:new Px(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Te=e.properties.get(h);Te.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ue(O){for(let k=0;k<O.removed.length;k++){const me=O.removed[k],Me=S.indexOf(me);Me>=0&&(S[Me]=null,A[Me].disconnect(me))}for(let k=0;k<O.added.length;k++){const me=O.added[k];let Me=S.indexOf(me);if(Me===-1){for(let Te=0;Te<A.length;Te++)if(Te>=S.length){S.push(me),Me=Te;break}else if(S[Te]===null){S[Te]=me,Me=Te;break}if(Me===-1)break}const Ee=A[Me];Ee&&Ee.connect(me)}}const z=new G,q=new G;function $(O,k,me){z.setFromMatrixPosition(k.matrixWorld),q.setFromMatrixPosition(me.matrixWorld);const Me=z.distanceTo(q),Ee=k.projectionMatrix.elements,Te=me.projectionMatrix.elements,Ce=Ee[14]/(Ee[10]-1),we=Ee[14]/(Ee[10]+1),ze=(Ee[9]+1)/Ee[5],ct=(Ee[9]-1)/Ee[5],Ue=(Ee[8]-1)/Ee[0],_=(Te[8]+1)/Te[0],R=Ce*Ue,U=Ce*_,B=Me/(-Ue+_),F=B*-Ue;k.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(F),O.translateZ(B),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const ie=Ce+B,re=we+B,K=R-F,oe=U+(Me-F),te=ze*we/re*ie,xe=ct*we/re*ie;O.projectionMatrix.makePerspective(K,oe,te,xe,ie,re),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function ne(O,k){k===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(k.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;P.near=w.near=T.near=O.near,P.far=w.far=T.far=O.far,(Q!==P.near||E!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),Q=P.near,E=P.far);const k=O.parent,me=P.cameras;ne(P,k);for(let Me=0;Me<me.length;Me++)ne(me[Me],k);me.length===2?$(P,T,w):P.projectionMatrix.copy(T.projectionMatrix),V(O,P,k)};function V(O,k,me){me===null?O.matrix.copy(k.matrixWorld):(O.matrix.copy(me.matrixWorld),O.matrix.invert(),O.matrix.multiply(k.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(k.projectionMatrix),O.projectionMatrixInverse.copy(k.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=vr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)};let W=null;function le(O,k){if(u=k.getViewerPose(c||a),M=k,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let Me=!1;me.length!==P.cameras.length&&(P.cameras.length=0,Me=!0);for(let Ee=0;Ee<me.length;Ee++){const Te=me[Ee];let Ce=null;if(m!==null)Ce=m.getViewport(Te);else{const ze=f.getViewSubImage(d,Te);Ce=ze.viewport,Ee===0&&(e.setRenderTargetTextures(h,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(h))}let we=D[Ee];we===void 0&&(we=new zt,we.layers.enable(Ee),we.viewport=new ft,D[Ee]=we),we.matrix.fromArray(Te.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Te.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Ee===0&&(P.matrix.copy(we.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Me===!0&&P.cameras.push(we)}}for(let me=0;me<A.length;me++){const Me=S[me],Ee=A[me];Me!==null&&Ee!==void 0&&Ee.update(Me,k,c||a)}W&&W(O,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),M=null}const se=new yu;se.setAnimationLoop(le),this.setAnimationLoop=function(O){W=O},this.dispose=function(){}}}function Dx(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,xu(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,A,S,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),M(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,A,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Pt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Pt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const A=e.get(h).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,A,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const A=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ux(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,S){const T=S.program;i.uniformBlockBinding(A,T)}function c(A,S){let T=r[A.id];T===void 0&&(M(A),T=u(A),r[A.id]=T,A.addEventListener("dispose",p));const w=S.program;i.updateUBOMapping(A,w);const D=e.render.frame;s[A.id]!==D&&(d(A),s[A.id]=D)}function u(A){const S=f();A.__bindingPointIndex=S;const T=n.createBuffer(),w=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const S=r[A.id],T=A.uniforms,w=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let D=0,P=T.length;D<P;D++){const Q=T[D];if(m(Q,D,w)===!0){const E=Q.__offset,b=Array.isArray(Q.value)?Q.value:[Q.value];let ae=0;for(let ue=0;ue<b.length;ue++){const z=b[ue],q=v(z);typeof z=="number"?(Q.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,E+ae,Q.__data)):z.isMatrix3?(Q.__data[0]=z.elements[0],Q.__data[1]=z.elements[1],Q.__data[2]=z.elements[2],Q.__data[3]=z.elements[0],Q.__data[4]=z.elements[3],Q.__data[5]=z.elements[4],Q.__data[6]=z.elements[5],Q.__data[7]=z.elements[0],Q.__data[8]=z.elements[6],Q.__data[9]=z.elements[7],Q.__data[10]=z.elements[8],Q.__data[11]=z.elements[0]):(z.toArray(Q.__data,ae),ae+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,Q.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,S,T){const w=A.value;if(T[S]===void 0){if(typeof w=="number")T[S]=w;else{const D=Array.isArray(w)?w:[w],P=[];for(let Q=0;Q<D.length;Q++)P.push(D[Q].clone());T[S]=P}return!0}else if(typeof w=="number"){if(T[S]!==w)return T[S]=w,!0}else{const D=Array.isArray(T[S])?T[S]:[T[S]],P=Array.isArray(w)?w:[w];for(let Q=0;Q<D.length;Q++){const E=D[Q];if(E.equals(P[Q])===!1)return E.copy(P[Q]),!0}}return!1}function M(A){const S=A.uniforms;let T=0;const w=16;let D=0;for(let P=0,Q=S.length;P<Q;P++){const E=S[P],b={boundary:0,storage:0},ae=Array.isArray(E.value)?E.value:[E.value];for(let ue=0,z=ae.length;ue<z;ue++){const q=ae[ue],$=v(q);b.boundary+=$.boundary,b.storage+=$.storage}if(E.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,P>0){D=T%w;const ue=w-D;D!==0&&ue-b.boundary<0&&(T+=w-D,E.__offset=T)}T+=b.storage}return D=T%w,D>0&&(T+=w-D),A.__size=T,A.__cache={},this}function v(A){const S={boundary:0,storage:0};return typeof A=="number"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function p(A){const S=A.target;S.removeEventListener("dispose",p);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Ru{constructor(e={}){const{canvas:t=bp(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),M=new Int32Array(4);let v=null,p=null;const h=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ke,this._useLegacyLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;const S=this;let T=!1,w=0,D=0,P=null,Q=-1,E=null;const b=new ft,ae=new ft;let ue=null;const z=new $e(0);let q=0,$=t.width,ne=t.height,V=1,W=null,le=null;const se=new ft(0,0,$,ne),O=new ft(0,0,$,ne);let k=!1;const me=new Su;let Me=!1,Ee=!1,Te=null;const Ce=new ht,we=new qe,ze=new G,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return P===null?V:1}let _=i;function R(y,I){for(let Y=0;Y<y.length;Y++){const N=y[Y],j=t.getContext(N,I);if(j!==null)return j}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ra}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",fe,!1),_===null){const I=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&I.shift(),_=R(I,y),_===null)throw R(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let U,B,F,ie,re,K,oe,te,xe,x,g,L,Z,J,ee,de,ce,H,Ae,ye,be,pe,ge,Ne;function Ye(){U=new Wg(_),B=new Fg(_,U,e),U.init(B),pe=new wx(_,U,B),F=new Tx(_,U,B),ie=new qg(_),re=new ux,K=new bx(_,U,F,re,B,pe,ie),oe=new Bg(S),te=new Vg(S),xe=new tm(_,B),ge=new Ig(_,U,xe,B),x=new kg(_,xe,ie,ge),g=new $g(_,x,xe,ie),Ae=new Kg(_,B,K),de=new Og(re),L=new cx(S,oe,te,U,B,ge,de),Z=new Dx(S,re),J=new hx,ee=new vx(U,B),H=new Ug(S,oe,te,F,g,d,l),ce=new yx(S,g,B),Ne=new Ux(_,ie,B,F),ye=new Ng(_,U,ie,B),be=new Xg(_,U,ie,B),ie.programs=L.programs,S.capabilities=B,S.extensions=U,S.properties=re,S.renderLists=J,S.shadowMap=ce,S.state=F,S.info=ie}Ye();const C=new Lx(S,_);this.xr=C,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const y=U.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=U.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize($,ne,!1))},this.getSize=function(y){return y.set($,ne)},this.setSize=function(y,I,Y=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,ne=I,t.width=Math.floor(y*V),t.height=Math.floor(I*V),Y===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set($*V,ne*V).floor()},this.setDrawingBufferSize=function(y,I,Y){$=y,ne=I,V=Y,t.width=Math.floor(y*Y),t.height=Math.floor(I*Y),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(se)},this.setViewport=function(y,I,Y,N){y.isVector4?se.set(y.x,y.y,y.z,y.w):se.set(y,I,Y,N),F.viewport(b.copy(se).multiplyScalar(V).floor())},this.getScissor=function(y){return y.copy(O)},this.setScissor=function(y,I,Y,N){y.isVector4?O.set(y.x,y.y,y.z,y.w):O.set(y,I,Y,N),F.scissor(ae.copy(O).multiplyScalar(V).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(y){F.setScissorTest(k=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){le=y},this.getClearColor=function(y){return y.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(y=!0,I=!0,Y=!0){let N=0;if(y){let j=!1;if(P!==null){const Se=P.texture.format;j=Se===cu||Se===lu||Se===au}if(j){const Se=P.texture.type,Re=Se===Fn||Se===Pn||Se===sa||Se===ni||Se===su||Se===ou,Le=H.getClearColor(),De=H.getClearAlpha(),He=Le.r,Pe=Le.g,Fe=Le.b;Re?(m[0]=He,m[1]=Pe,m[2]=Fe,m[3]=De,_.clearBufferuiv(_.COLOR,0,m)):(M[0]=He,M[1]=Pe,M[2]=Fe,M[3]=De,_.clearBufferiv(_.COLOR,0,M))}else N|=_.COLOR_BUFFER_BIT}I&&(N|=_.DEPTH_BUFFER_BIT),Y&&(N|=_.STENCIL_BUFFER_BIT),_.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),J.dispose(),ee.dispose(),re.dispose(),oe.dispose(),te.dispose(),g.dispose(),ge.dispose(),Ne.dispose(),L.dispose(),C.dispose(),C.removeEventListener("sessionstart",je),C.removeEventListener("sessionend",Qt),Te&&(Te.dispose(),Te=null),xt.stop()};function _e(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=ie.autoReset,I=ce.enabled,Y=ce.autoUpdate,N=ce.needsUpdate,j=ce.type;Ye(),ie.autoReset=y,ce.enabled=I,ce.autoUpdate=Y,ce.needsUpdate=N,ce.type=j}function fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ve(y){const I=y.target;I.removeEventListener("dispose",ve),ke(I)}function ke(y){Je(y),re.remove(y)}function Je(y){const I=re.get(y).programs;I!==void 0&&(I.forEach(function(Y){L.releaseProgram(Y)}),y.isShaderMaterial&&L.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,Y,N,j,Se){I===null&&(I=ct);const Re=j.isMesh&&j.matrixWorld.determinant()<0,Le=Lu(y,I,Y,N,j);F.setMaterial(N,Re);let De=Y.index,He=1;if(N.wireframe===!0){if(De=x.getWireframeAttribute(Y),De===void 0)return;He=2}const Pe=Y.drawRange,Fe=Y.attributes.position;let Qe=Pe.start*He,et=(Pe.start+Pe.count)*He;Se!==null&&(Qe=Math.max(Qe,Se.start*He),et=Math.min(et,(Se.start+Se.count)*He)),De!==null?(Qe=Math.max(Qe,0),et=Math.min(et,De.count)):Fe!=null&&(Qe=Math.max(Qe,0),et=Math.min(et,Fe.count));const Ot=et-Qe;if(Ot<0||Ot===1/0)return;ge.setup(j,N,Le,Y,De);let un,nt=ye;if(De!==null&&(un=xe.get(De),nt=be,nt.setIndex(un)),j.isMesh)N.wireframe===!0?(F.setLineWidth(N.wireframeLinewidth*Ue()),nt.setMode(_.LINES)):nt.setMode(_.TRIANGLES);else if(j.isLine){let Ve=N.linewidth;Ve===void 0&&(Ve=1),F.setLineWidth(Ve*Ue()),j.isLineSegments?nt.setMode(_.LINES):j.isLineLoop?nt.setMode(_.LINE_LOOP):nt.setMode(_.LINE_STRIP)}else j.isPoints?nt.setMode(_.POINTS):j.isSprite&&nt.setMode(_.TRIANGLES);if(j.isInstancedMesh)nt.renderInstances(Qe,Ot,j.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,As=Math.min(Y.instanceCount,Ve);nt.renderInstances(Qe,Ot,As)}else nt.render(Qe,Ot)},this.compile=function(y,I){function Y(N,j,Se){N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=Pt,N.needsUpdate=!0,br(N,j,Se),N.side=Bn,N.needsUpdate=!0,br(N,j,Se),N.side=sn):br(N,j,Se)}p=ee.get(y),p.init(),A.push(p),y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(S._useLegacyLights),y.traverse(function(N){const j=N.material;if(j)if(Array.isArray(j))for(let Se=0;Se<j.length;Se++){const Re=j[Se];Y(Re,y,N)}else Y(j,y,N)}),A.pop(),p=null};let tt=null;function yn(y){tt&&tt(y)}function je(){xt.stop()}function Qt(){xt.start()}const xt=new yu;xt.setAnimationLoop(yn),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(y){tt=y,C.setAnimationLoop(y),y===null?xt.stop():xt.start()},C.addEventListener("sessionstart",je),C.addEventListener("sessionend",Qt),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(I),I=C.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,I,P),p=ee.get(y,A.length),p.init(),A.push(p),Ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),me.setFromProjectionMatrix(Ce),Ee=this.localClippingEnabled,Me=de.init(this.clippingPlanes,Ee),v=J.get(y,h.length),v.init(),h.push(v),ha(y,I,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(W,le),this.info.render.frame++,Me===!0&&de.beginShadows();const Y=p.state.shadowsArray;if(ce.render(Y,y,I),Me===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(v,y),p.setupLights(S._useLegacyLights),I.isArrayCamera){const N=I.cameras;for(let j=0,Se=N.length;j<Se;j++){const Re=N[j];da(v,y,Re,Re.viewport)}}else da(v,y,I);P!==null&&(K.updateMultisampleRenderTarget(P),K.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(S,y,I),ge.resetDefaultState(),Q=-1,E=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function ha(y,I,Y,N){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||me.intersectsSprite(y)){N&&ze.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ce);const Re=g.update(y),Le=y.material;Le.visible&&v.push(y,Re,Le,Y,ze.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||me.intersectsObject(y))){const Re=g.update(y),Le=y.material;if(N&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ze.copy(y.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ze.copy(Re.boundingSphere.center)),ze.applyMatrix4(y.matrixWorld).applyMatrix4(Ce)),Array.isArray(Le)){const De=Re.groups;for(let He=0,Pe=De.length;He<Pe;He++){const Fe=De[He],Qe=Le[Fe.materialIndex];Qe&&Qe.visible&&v.push(y,Re,Qe,Y,ze.z,Fe)}}else Le.visible&&v.push(y,Re,Le,Y,ze.z,null)}}const Se=y.children;for(let Re=0,Le=Se.length;Re<Le;Re++)ha(Se[Re],I,Y,N)}function da(y,I,Y,N){const j=y.opaque,Se=y.transmissive,Re=y.transparent;p.setupLightsView(Y),Me===!0&&de.setGlobalState(S.clippingPlanes,Y),Se.length>0&&Pu(j,Se,I,Y),N&&F.viewport(b.copy(N)),j.length>0&&Tr(j,I,Y),Se.length>0&&Tr(Se,I,Y),Re.length>0&&Tr(Re,I,Y),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Pu(y,I,Y,N){const j=B.isWebGL2;Te===null&&(Te=new oi(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")?gr:Fn,minFilter:_r,samples:j?4:0})),S.getDrawingBufferSize(we),j?Te.setSize(we.x,we.y):Te.setSize(us(we.x),us(we.y));const Se=S.getRenderTarget();S.setRenderTarget(Te),S.getClearColor(z),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear();const Re=S.toneMapping;S.toneMapping=Nn,Tr(y,Y,N),K.updateMultisampleRenderTarget(Te),K.updateRenderTargetMipmap(Te);let Le=!1;for(let De=0,He=I.length;De<He;De++){const Pe=I[De],Fe=Pe.object,Qe=Pe.geometry,et=Pe.material,Ot=Pe.group;if(et.side===sn&&Fe.layers.test(N.layers)){const un=et.side;et.side=Pt,et.needsUpdate=!0,pa(Fe,Y,N,Qe,et,Ot),et.side=un,et.needsUpdate=!0,Le=!0}}Le===!0&&(K.updateMultisampleRenderTarget(Te),K.updateRenderTargetMipmap(Te)),S.setRenderTarget(Se),S.setClearColor(z,q),S.toneMapping=Re}function Tr(y,I,Y){const N=I.isScene===!0?I.overrideMaterial:null;for(let j=0,Se=y.length;j<Se;j++){const Re=y[j],Le=Re.object,De=Re.geometry,He=N===null?Re.material:N,Pe=Re.group;Le.layers.test(Y.layers)&&pa(Le,I,Y,De,He,Pe)}}function pa(y,I,Y,N,j,Se){y.onBeforeRender(S,I,Y,N,j,Se),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),j.onBeforeRender(S,I,Y,N,y,Se),j.transparent===!0&&j.side===sn&&j.forceSinglePass===!1?(j.side=Pt,j.needsUpdate=!0,S.renderBufferDirect(Y,I,N,j,y,Se),j.side=Bn,j.needsUpdate=!0,S.renderBufferDirect(Y,I,N,j,y,Se),j.side=sn):S.renderBufferDirect(Y,I,N,j,y,Se),y.onAfterRender(S,I,Y,N,j,Se)}function br(y,I,Y){I.isScene!==!0&&(I=ct);const N=re.get(y),j=p.state.lights,Se=p.state.shadowsArray,Re=j.state.version,Le=L.getParameters(y,j.state,Se,I,Y),De=L.getProgramCacheKey(Le);let He=N.programs;N.environment=y.isMeshStandardMaterial?I.environment:null,N.fog=I.fog,N.envMap=(y.isMeshStandardMaterial?te:oe).get(y.envMap||N.environment),He===void 0&&(y.addEventListener("dispose",ve),He=new Map,N.programs=He);let Pe=He.get(De);if(Pe!==void 0){if(N.currentProgram===Pe&&N.lightsStateVersion===Re)return ma(y,Le),Pe}else Le.uniforms=L.getUniforms(y),y.onBuild(Y,Le,S),y.onBeforeCompile(Le,S),Pe=L.acquireProgram(Le,De),He.set(De,Pe),N.uniforms=Le.uniforms;const Fe=N.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=de.uniform),ma(y,Le),N.needsLights=Uu(y),N.lightsStateVersion=Re,N.needsLights&&(Fe.ambientLightColor.value=j.state.ambient,Fe.lightProbe.value=j.state.probe,Fe.directionalLights.value=j.state.directional,Fe.directionalLightShadows.value=j.state.directionalShadow,Fe.spotLights.value=j.state.spot,Fe.spotLightShadows.value=j.state.spotShadow,Fe.rectAreaLights.value=j.state.rectArea,Fe.ltc_1.value=j.state.rectAreaLTC1,Fe.ltc_2.value=j.state.rectAreaLTC2,Fe.pointLights.value=j.state.point,Fe.pointLightShadows.value=j.state.pointShadow,Fe.hemisphereLights.value=j.state.hemi,Fe.directionalShadowMap.value=j.state.directionalShadowMap,Fe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Fe.spotShadowMap.value=j.state.spotShadowMap,Fe.spotLightMatrix.value=j.state.spotLightMatrix,Fe.spotLightMap.value=j.state.spotLightMap,Fe.pointShadowMap.value=j.state.pointShadowMap,Fe.pointShadowMatrix.value=j.state.pointShadowMatrix);const Qe=Pe.getUniforms(),et=is.seqWithValue(Qe.seq,Fe);return N.currentProgram=Pe,N.uniformsList=et,Pe}function ma(y,I){const Y=re.get(y);Y.outputColorSpace=I.outputColorSpace,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}function Lu(y,I,Y,N,j){I.isScene!==!0&&(I=ct),K.resetTextureUnits();const Se=I.fog,Re=N.isMeshStandardMaterial?I.environment:null,Le=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:cn,De=(N.isMeshStandardMaterial?te:oe).get(N.envMap||Re),He=N.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Pe=!!Y.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Fe=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,et=!!Y.morphAttributes.color;let Ot=Nn;N.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ot=S.toneMapping);const un=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=un!==void 0?un.length:0,Ve=re.get(N),As=p.state.lights;if(Me===!0&&(Ee===!0||y!==E)){const Dt=y===E&&N.id===Q;de.setState(N,y,Dt)}let it=!1;N.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==As.state.version||Ve.outputColorSpace!==Le||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||j.isInstancedMesh&&Ve.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ve.instancingColor===!1&&j.instanceColor!==null||Ve.envMap!==De||N.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==de.numPlanes||Ve.numIntersection!==de.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Pe||Ve.morphTargets!==Fe||Ve.morphNormals!==Qe||Ve.morphColors!==et||Ve.toneMapping!==Ot||B.isWebGL2===!0&&Ve.morphTargetsCount!==nt)&&(it=!0):(it=!0,Ve.__version=N.version);let Hn=Ve.currentProgram;it===!0&&(Hn=br(N,I,j));let _a=!1,Ki=!1,ws=!1;const Mt=Hn.getUniforms(),Gn=Ve.uniforms;if(F.useProgram(Hn.program)&&(_a=!0,Ki=!0,ws=!0),N.id!==Q&&(Q=N.id,Ki=!0),_a||E!==y){Mt.setValue(_,"projectionMatrix",y.projectionMatrix),Mt.setValue(_,"viewMatrix",y.matrixWorldInverse);const Dt=Mt.map.cameraPosition;Dt!==void 0&&Dt.setValue(_,ze.setFromMatrixPosition(y.matrixWorld)),B.logarithmicDepthBuffer&&Mt.setValue(_,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Mt.setValue(_,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,Ki=!0,ws=!0)}if(j.isSkinnedMesh){Mt.setOptional(_,j,"bindMatrix"),Mt.setOptional(_,j,"bindMatrixInverse");const Dt=j.skeleton;Dt&&(B.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Mt.setValue(_,"boneTexture",Dt.boneTexture,K),Mt.setValue(_,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rs=Y.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&B.isWebGL2===!0)&&Ae.update(j,Y,Hn),(Ki||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,Mt.setValue(_,"receiveShadow",j.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Gn.envMap.value=De,Gn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ki&&(Mt.setValue(_,"toneMappingExposure",S.toneMappingExposure),Ve.needsLights&&Du(Gn,ws),Se&&N.fog===!0&&Z.refreshFogUniforms(Gn,Se),Z.refreshMaterialUniforms(Gn,N,V,ne,Te),is.upload(_,Ve.uniformsList,Gn,K)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(is.upload(_,Ve.uniformsList,Gn,K),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Mt.setValue(_,"center",j.center),Mt.setValue(_,"modelViewMatrix",j.modelViewMatrix),Mt.setValue(_,"normalMatrix",j.normalMatrix),Mt.setValue(_,"modelMatrix",j.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Dt=N.uniformsGroups;for(let Cs=0,Iu=Dt.length;Cs<Iu;Cs++)if(B.isWebGL2){const ga=Dt[Cs];Ne.update(ga,Hn),Ne.bind(ga,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function Du(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Uu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,I,Y){re.get(y.texture).__webglTexture=I,re.get(y.depthTexture).__webglTexture=Y;const N=re.get(y);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=Y===void 0,N.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){const Y=re.get(y);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,Y=0){P=y,w=I,D=Y;let N=!0,j=null,Se=!1,Re=!1;if(y){const De=re.get(y);De.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(_.FRAMEBUFFER,null),N=!1):De.__webglFramebuffer===void 0?K.setupRenderTarget(y):De.__hasExternalTextures&&K.rebindTextures(y,re.get(y.texture).__webglTexture,re.get(y.depthTexture).__webglTexture);const He=y.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Re=!0);const Pe=re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?j=Pe[I][Y]:j=Pe[I],Se=!0):B.isWebGL2&&y.samples>0&&K.useMultisampledRTT(y)===!1?j=re.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?j=Pe[Y]:j=Pe,b.copy(y.viewport),ae.copy(y.scissor),ue=y.scissorTest}else b.copy(se).multiplyScalar(V).floor(),ae.copy(O).multiplyScalar(V).floor(),ue=k;if(F.bindFramebuffer(_.FRAMEBUFFER,j)&&B.drawBuffers&&N&&F.drawBuffers(y,j),F.viewport(b),F.scissor(ae),F.setScissorTest(ue),Se){const De=re.get(y.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+I,De.__webglTexture,Y)}else if(Re){const De=re.get(y.texture),He=I||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,De.__webglTexture,Y||0,He)}Q=-1},this.readRenderTargetPixels=function(y,I,Y,N,j,Se,Re){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){F.bindFramebuffer(_.FRAMEBUFFER,Le);try{const De=y.texture,He=De.format,Pe=De.type;if(He!==jt&&pe.convert(He)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Pe===gr&&(U.has("EXT_color_buffer_half_float")||B.isWebGL2&&U.has("EXT_color_buffer_float"));if(Pe!==Fn&&pe.convert(Pe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Ln&&(B.isWebGL2||U.has("OES_texture_float")||U.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-N&&Y>=0&&Y<=y.height-j&&_.readPixels(I,Y,N,j,pe.convert(He),pe.convert(Pe),Se)}finally{const De=P!==null?re.get(P).__webglFramebuffer:null;F.bindFramebuffer(_.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(y,I,Y=0){const N=Math.pow(2,-Y),j=Math.floor(I.image.width*N),Se=Math.floor(I.image.height*N);K.setTexture2D(I,0),_.copyTexSubImage2D(_.TEXTURE_2D,Y,0,0,y.x,y.y,j,Se),F.unbindTexture()},this.copyTextureToTexture=function(y,I,Y,N=0){const j=I.image.width,Se=I.image.height,Re=pe.convert(Y.format),Le=pe.convert(Y.type);K.setTexture2D(Y,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,Y.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,Y.unpackAlignment),I.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,N,y.x,y.y,j,Se,Re,Le,I.image.data):I.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,N,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,Re,I.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,N,y.x,y.y,Re,Le,I.image),N===0&&Y.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(y,I,Y,N,j=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=y.max.x-y.min.x+1,Re=y.max.y-y.min.y+1,Le=y.max.z-y.min.z+1,De=pe.convert(N.format),He=pe.convert(N.type);let Pe;if(N.isData3DTexture)K.setTexture3D(N,0),Pe=_.TEXTURE_3D;else if(N.isDataArrayTexture)K.setTexture2DArray(N,0),Pe=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,N.unpackAlignment);const Fe=_.getParameter(_.UNPACK_ROW_LENGTH),Qe=_.getParameter(_.UNPACK_IMAGE_HEIGHT),et=_.getParameter(_.UNPACK_SKIP_PIXELS),Ot=_.getParameter(_.UNPACK_SKIP_ROWS),un=_.getParameter(_.UNPACK_SKIP_IMAGES),nt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,nt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,nt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,y.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,y.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,y.min.z),Y.isDataTexture||Y.isData3DTexture?_.texSubImage3D(Pe,j,I.x,I.y,I.z,Se,Re,Le,De,He,nt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(Pe,j,I.x,I.y,I.z,Se,Re,Le,De,nt.data)):_.texSubImage3D(Pe,j,I.x,I.y,I.z,Se,Re,Le,De,He,nt),_.pixelStorei(_.UNPACK_ROW_LENGTH,Fe),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Qe),_.pixelStorei(_.UNPACK_SKIP_PIXELS,et),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ot),_.pixelStorei(_.UNPACK_SKIP_IMAGES,un),j===0&&N.generateMipmaps&&_.generateMipmap(Pe),F.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?K.setTextureCube(y,0):y.isData3DTexture?K.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?K.setTexture2DArray(y,0):K.setTexture2D(y,0),F.unbindTexture()},this.resetState=function(){w=0,D=0,P=null,F.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ke?ri:uu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ri?Ke:cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ix extends Ru{}Ix.prototype.isWebGL1Renderer=!0;class Nx extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Fx extends wt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Ct,this.magFilter=s!==void 0?s:Ct,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ua extends zn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new G,d=new G,m=[],M=[],v=[],p=[];for(let h=0;h<=i;h++){const A=[],S=h/i;let T=0;h===0&&a===0?T=.5/t:h===i&&l===Math.PI&&(T=-.5/t);for(let w=0;w<=t;w++){const D=w/t;f.x=-e*Math.cos(r+D*s)*Math.sin(a+S*o),f.y=e*Math.cos(a+S*o),f.z=e*Math.sin(r+D*s)*Math.sin(a+S*o),M.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(D+T,1-S),A.push(c++)}u.push(A)}for(let h=0;h<i;h++)for(let A=0;A<t;A++){const S=u[h][A+1],T=u[h][A],w=u[h+1][A],D=u[h+1][A+1];(h!==0||a>0)&&m.push(S,T,D),(h!==i-1||l<Math.PI)&&m.push(T,w,D)}this.setIndex(m),this.setAttribute("position",new ln(M,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const uc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ox{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],M=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return M}return null}}}const Bx=new Ox;class fa{constructor(e){this.manager=e!==void 0?e:Bx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fa.DEFAULT_MATERIAL_NAME="__DEFAULT";class zx extends fa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=uc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=xr("img");function l(){u(),uc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Cu extends fa{constructor(e){super(e)}load(e,t,i,r){const s=new wt,a=new zx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Hx{constructor(e,t,i=0,r=1/0){this.ray=new mu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new la,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return No(e,this,i,t),i.sort(fc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)No(e[r],this,i,t);return i.sort(fc),i}}function fc(n,e){return n.distance-e.distance}function No(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)No(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);class Vi{static createButton(e){const t=document.createElement("button");function i(){let l=null;async function c(f){f.addEventListener("end",u),await e.xr.setSession(f),t.textContent="EXIT VR",l=f}function u(){l.removeEventListener("end",u),t.textContent="ENTER VR",l=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(l===null){const f={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",f).then(c)}else l.end()}}function r(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function s(){r(),t.textContent="VR NOT SUPPORTED"}function a(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),t.textContent="VR NOT ALLOWED"}function o(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",o(t),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?i():s(),l&&Vi.xrSessionIsGranted&&t.click()}).catch(a),t;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",o(l),l}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Vi.xrSessionIsGranted=!0})}}}Vi.xrSessionIsGranted=!1;Vi.registerSessionGrantedListener();const Nt={UNINITIALIZED:0,NOSOURCE:1,LOADING:2,READY:3};class Gx{constructor(e={}){this._geometry=new Ii(2,1),this._material=new Mr({color:16777215,side:sn}),this._mesh=new $t(this._geometry,this._material),this._playButtonObject=new $t(new Ii(.5,.25),new Mr({color:16777215,alphaMap:new Cu().load("./files/play_button_alpha.jpg"),alphaTest:.3})),this._playButtonObject.position.z=.001,this._mesh.add(this._playButtonObject),this._videoDOMElement=document.createElement("video"),this._videoDOMElement.setAttribute("style","display:none;"),this._videoDOMElement.setAttribute("preload","auto"),this._videoDOMElement.setAttribute("playsinline","playsinline"),this._videoDOMElement.setAttribute("webkit-playsinline","webkit-playsinline"),this._videoDOMElement.muted=!1,this._videoDOMElement.autoplay=!0,this._videoDOMElement.loop=!0,e.volume&&this._setVolume(e.volume),this._videoDOMElement.onpause=(function(){this._playButtonObject.visible=!0}).bind(this),this._videoDOMElement.onended=(function(){this._playButtonObject.visible=!0}).bind(this),this._videoDOMElement.onplay=(function(){this._playButtonObject.visible=!1}).bind(this),document.body.appendChild(this._videoDOMElement),this._setState(Nt.NOSOURCE).then((function(){if(e.source)try{this._setSource(e.source)}catch(t){console.log(t)}}).bind(this))}getMesh(){return this._mesh}getPlayButtonMesh(){return this._playButtonObject}_setSource(e){if(this._state!==Nt.UNINITIALIZED){if(typeof e!="string")throw"New source must be a string!";for(;this._videoDOMElement.firstChild;)this._videoDOMElement.removeChild(this._videoDOMElement.firstChild);var t=document.createElement("source");t.src=e,t.type="video/mp4",this._videoDOMElement.appendChild(t),this._videoDOMElement.oncanplay=(function(){this._setState(Nt.READY)}).bind(this),this._setState(Nt.LOADING).then((function(){this._videoDOMElement.load()}).bind(this))}}_clearSource(){this._state!==Nt.UNINITIALIZED&&this._state!==Nt.NOSOURCE&&this._setState(Nt.NOSOURCE).then(function(){for(;this._videoDOMElement.firstChild;)this._videoDOMElement.removeChild(this._videoDOMElement.firstChild)})}_setVolume(e){this._videoDOMElement!==void 0&&(this._videoDOMElement.volume=e>1?1:e<0?0:e)}async _setState(e){if(e!==this._state)switch(this._state=e,this._state){case Nt.NOSOURCE:this._material.map=null,this._material.needsUpdate=!0,this.visible=!0;break;case Nt.LOADING:break;case Nt.READY:let t=new Ii(this._videoDOMElement.videoWidth/this._videoDOMElement.videoHeight,1);this._geometry.dispose(),this._geometry=t,this._material.map=new Fx(this._videoDOMElement),this._material.map.needsUpdate=!0,this._material.needsUpdate=!0,this.visible=!0,this._videoDOMElement.volume=1;break;default:return}}canPlay(){return this._state===Nt.READY}play(){this._state===Nt.READY&&this._videoDOMElement.play()}pause(){this._state===Nt.READY&&this._videoDOMElement.pause()}isPaused(){if(this._videoDOMElement!==void 0)return this._videoDOMElement.paused}}class Vx{constructor(e){this.container=document.querySelector(e),this.camera,this.scene,this.renderer,this.controls,this.isUserInteracting=!1,this.onPointerDownMouseX=0,this.onPointerDownMouseY=0,this.lon=0,this.lat=0,this.phi=0,this.theta=0,this.onPointerDownLon=0,this.onPointerDownLat=0,this.init(),this.animate()}init(){this.camera=new zt(75,window.innerWidth/window.innerHeight,1,1100),this.scene=new Nx;const e=new ua(500,60,40);e.scale(-1,1,1);const t=new Cu().load("./files/snow_hdr.jpg");t.colorSpace=Ke;const i=new Mr({map:t}),r=new $t(e,i);this.scene.add(r),this.videoPlayerObject=new Gx({source:"./files/coffee.mp4",play_btn_color:7252957}),this.videoPlayerObject.getMesh().position.z=-2,this.scene.add(this.videoPlayerObject.getMesh()),this.renderer=new Ru,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(800,800),this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local"),this.container.appendChild(this.renderer.domElement),this.container.appendChild(Vi.createButton(this.renderer)),this.container.style.touchAction="none",this.container.addEventListener("pointerdown",this.onPointerDown.bind(this)),document.addEventListener("wheel",this.onDocumentMouseWheel.bind(this)),document.addEventListener("dragover",function(s){s.preventDefault(),s.dataTransfer.dropEffect="copy"}),document.addEventListener("dragenter",function(){document.body.style.opacity=.5}),document.addEventListener("dragleave",function(){document.body.style.opacity=1}),document.addEventListener("drop",function(s){s.preventDefault();const a=new FileReader;a.addEventListener("load",function(o){i.map.image.src=o.target.result,i.map.needsUpdate=!0}),a.readAsDataURL(s.dataTransfer.files[0]),document.body.style.opacity=1})}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}onPointerDown(e){if(e.isPrimary!==!1){this.isUserInteracting=!0,this.onPointerDownMouseX=e.clientX,this.onPointerDownMouseY=e.clientY,this.onPointerDownLon=this.lon,this.onPointerDownLat=this.lat,this.listenMouse||(this.listenMouse=!0,this.container.addEventListener("pointermove",this.onPointerMove.bind(this)),this.container.addEventListener("pointerup",this.onPointerUp.bind(this))),e.preventDefault();var t=new qe(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1),i=new Hx;i.setFromCamera(t,this.camera);var r=i.intersectObject(this.videoPlayerObject.getPlayButtonMesh(),!0);r.length>0&&this.videoPlayerObject.canPlay()&&(this.videoPlayerObject.isPaused()?this.videoPlayerObject.play():this.videoPlayerObject.pause())}}onPointerMove(e){e.isPrimary!==!1&&this.isUserInteracting&&(this.lon=(this.onPointerDownMouseX-e.clientX)*.1+this.onPointerDownLon,this.lat=(e.clientY-this.onPointerDownMouseY)*.1+this.onPointerDownLat)}onPointerUp(e){e.isPrimary!==!1&&(this.isUserInteracting=!1)}onDocumentMouseWheel(e){const t=this.camera.fov+e.deltaY*.05;this.camera.fov=Xs.clamp(t,10,75),this.camera.updateProjectionMatrix()}animate(){this.renderer.setAnimationLoop(this.update.bind(this))}update(){this.lat=Math.max(-85,Math.min(85,this.lat)),this.phi=Xs.degToRad(90-this.lat),this.theta=Xs.degToRad(this.lon);const e=500*Math.sin(this.phi)*Math.cos(this.theta),t=500*Math.cos(this.phi),i=500*Math.sin(this.phi)*Math.sin(this.theta);this.camera.lookAt(e,t,i),this.renderer.render(this.scene,this.camera)}}const Wx=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},kx={class:"scene",id:"scene"},Xx={__name:"App",setup(n){const e=ms({base3d:{},sphereprojection:{}});return zc(()=>{e.sphereprojection=new Vx("#scene")}),(t,i)=>(bh(),Rh("div",kx))}},qx=Wx(Xx,[["__scopeId","data-v-f91849b0"]]);fd(qx).mount("#app");
