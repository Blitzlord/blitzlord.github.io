function E(){}const nt=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function Y(){return Object.create(null)}function k(t){t.forEach(it)}function Q(t){return typeof t=="function"}function Vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Xt(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function xt(t){return Object.keys(t).length===0}function wt(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Yt(t,e,n){t.$$.on_destroy.push(wt(e,n))}function Zt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?gt(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function ee(t,e,n,i,s,c){if(s){const r=st(e,n,i,c);t.p(r,s)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}const rt=typeof window<"u";let ot=rt?()=>window.performance.now():()=>Date.now(),U=rt?t=>requestAnimationFrame(t):E;const T=new Set;function lt(t){T.forEach(e=>{e.c(t)||(T.delete(e),e.f())}),T.size!==0&&U(lt)}function ct(t){let e;return T.size===0&&U(lt),{promise:new Promise(n=>{T.add(e={c:t,f:n})}),abort(){T.delete(e)}}}let F=!1;function $t(){F=!0}function bt(){F=!1}function vt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:vt(1,s,h=>e[n[h]].claim_order,u))-1;i[o]=n[f]+1;const _=f+1;n[_]=o,s=Math.max(_,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[o],f)}}function Nt(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Tt(t){const e=V("style");return kt(ut(t),e),e.sheet}function kt(t,e){return Nt(t.head||t,e),e.sheet}function At(t,e){if(F){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function St(t,e,n){t.insertBefore(e,n||null)}function Ct(t,e,n){F&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function D(t){t.parentNode&&t.parentNode.removeChild(t)}function re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t){return document.createTextNode(t)}function oe(){return X(" ")}function le(){return X("")}function ce(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ue(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ae(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Dt(t,i,e[i])}function jt(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,i,s=!1){at(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Ht(t,e,n,i){return ft(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function fe(t,e,n){return Ht(t,e,n,V)}function Rt(t,e){return ft(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>X(e),!0)}function _e(t){return Rt(t," ")}function Z(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function de(t,e){const n=Z(t,"HTML_TAG_START",0),i=Z(t,"HTML_TAG_END",n);if(n===i)return new tt(void 0,e);at(t);const s=t.splice(n,i-n+1);D(s[0]),D(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new tt(c,e)}function he(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function me(t,e){t.value=e??""}function pe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ye(t,e,n){t.classList[n?"add":"remove"](e)}function Bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ge(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Lt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Mt(n.nodeName):this.e=V(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)St(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(D)}}class tt extends Lt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ct(this.t,this.n[n],e)}}function xe(t,e){return new t(e)}const P=new Map;let q=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Pt(t,e){const n={stylesheet:Tt(e),rules:{}};return P.set(t,n),n}function I(t,e,n,i,s,c,r,l=0){const o=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*c(p);u+=p*100+`%{${r(g,1-g)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Ot(f)}_${l}`,h=ut(t),{stylesheet:a,rules:d}=P.get(h)||Pt(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${_} ${i}ms linear ${s}ms 1 both`,q+=1,_}function _t(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),q-=s,q||qt())}function qt(){U(()=>{q||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&D(e)}),P.clear())})}function we(t,e,n,i){if(!e)return E;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return E;const{delay:c=0,duration:r=300,easing:l=nt,start:o=ot()+c,end:u=o+r,tick:f=E,css:_}=n(t,{from:e,to:s},i);let h=!0,a=!1,d;function y(){_&&(d=I(t,0,1,r,c,l,_)),c||(a=!0)}function p(){_&&_t(t,d),h=!1}return ct(g=>{if(!a&&g>=o&&(a=!0),a&&g>=u&&(f(1,0),p()),!h)return!1;if(a){const $=g-o,b=0+1*l($/r);f(b,1-b)}return!0}),y(),f(0,1),p}function $e(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,zt(t,s)}}function zt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let j;function M(t){j=t}function dt(){if(!j)throw new Error("Function called outside component initialization");return j}function be(t){dt().$$.on_mount.push(t)}function ve(t){dt().$$.after_update.push(t)}const C=[],et=[],L=[],J=[],ht=Promise.resolve();let K=!1;function mt(){K||(K=!0,ht.then(pt))}function Ee(){return mt(),ht}function z(t){L.push(t)}function Ne(t){J.push(t)}const G=new Set;let B=0;function pt(){const t=j;do{for(;B<C.length;){const e=C[B];B++,M(e),Ft(e.$$)}for(M(null),C.length=0,B=0;et.length;)et.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];G.has(n)||(G.add(n),n())}L.length=0}while(C.length);for(;J.length;)J.pop()();K=!1,G.clear(),M(t)}function Ft(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let S;function Gt(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function W(t,e,n){t.dispatchEvent(Bt(`${e?"intro":"outro"}${n}`))}const O=new Set;let v;function Te(){v={r:0,c:[],p:v}}function ke(){v.r||k(v.c),v=v.p}function yt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),v.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const It={duration:0};function Ae(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,l=null,o=null,u=null;function f(){u&&_t(t,u)}function _(a,d){const y=a.b-r;return d*=Math.abs(y),{a:r,b:a.b,d:y,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:y=300,easing:p=nt,tick:g=E,css:$}=c||It,b={start:ot()+d,b:a};a||(b.group=v,v.r+=1),l||o?o=b:($&&(f(),u=I(t,r,a,y,d,p,$)),a&&g(0,1),l=_(b,y),z(()=>W(t,a,"start")),ct(N=>{if(o&&N>o.start&&(l=_(o,y),o=null,W(t,l.b,"start"),$&&(f(),u=I(t,r,l.b,l.duration,0,p,c.css))),l){if(N>=l.end)g(r=l.b,1-r),W(t,l.b,"end"),o||(l.b?f():--l.group.r||k(l.group.c)),l=null;else if(N>=l.start){const A=N-l.start;r=l.a+l.d*p(A/l.duration),g(r,1-r)}}return!!(l||o)}))}return{run(a){Q(c)?Gt().then(()=>{c=c(s),h(a)}):h(a)},end(){f(),l=o=null}}}const Se=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ce(t,e){t.d(1),e.delete(t.key)}function Jt(t,e){Wt(t,1,1,()=>{e.delete(t.key)})}function Me(t,e){t.f(),Jt(t,e)}function De(t,e,n,i,s,c,r,l,o,u,f,_){let h=t.length,a=c.length,d=h;const y={};for(;d--;)y[t[d].key]=d;const p=[],g=new Map,$=new Map;for(d=a;d--;){const m=_(s,c,d),x=n(m);let w=r.get(x);w?i&&w.p(m,e):(w=u(x,m),w.c()),g.set(x,p[d]=w),x in y&&$.set(x,Math.abs(d-y[x]))}const b=new Set,N=new Set;function A(m){yt(m,1),m.m(l,f),r.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=p[a-1],x=t[h-1],w=m.key,H=x.key;m===x?(f=m.first,h--,a--):g.has(H)?!r.has(w)||b.has(w)?A(m):N.has(H)?h--:$.get(w)>$.get(H)?(N.add(w),A(m)):(b.add(H),h--):(o(x,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||o(m,r)}for(;a;)A(p[a-1]);return p}function je(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function He(t,e,n,i){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,i===void 0&&n(t.$$.ctx[s]))}function Re(t){t&&t.c()}function Be(t,e){t&&t.l(e)}function Kt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||z(()=>{const r=t.$$.on_mount.map(it).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...r):k(r),t.$$.on_mount=[]}),c.forEach(z)}function Qt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ut(t,e){t.$$.dirty[0]===-1&&(C.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Le(t,e,n,i,s,c,r,l=[-1]){const o=j;M(t);const u=t.$$={fragment:null,ctx:[],props:c,update:E,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Y(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return u.ctx&&s(u.ctx[_],u.ctx[_]=d)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](d),f&&Ut(t,_)),h}):[],u.update(),f=!0,k(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){$t();const _=jt(e.target);u.fragment&&u.fragment.l(_),_.forEach(D)}else u.fragment&&u.fragment.c();e.intro&&yt(t.$$.fragment),Kt(t,e.target,e.anchor,e.customElement),bt(),pt()}M(o)}class Oe{$destroy(){Qt(this,1),this.$destroy=E}$on(e,n){if(!Q(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{me as $,Ee as A,E as B,Yt as C,Xt as D,At as E,ce as F,k as G,Zt as H,ee as I,ne as J,te as K,et as L,He as M,ge as N,Ne as O,De as P,re as Q,Se as R,Oe as S,Ce as T,tt as U,de as V,Q as W,nt as X,gt as Y,ae as Z,ye as _,oe as a,je as a0,se as a1,ie as a2,Me as a3,$e as a4,zt as a5,we as a6,z as a7,Ae as a8,ue as a9,Ct as b,_e as c,ke as d,le as e,yt as f,Te as g,D as h,Le as i,ve as j,V as k,fe as l,jt as m,Dt as n,be as o,pe as p,X as q,Rt as r,Vt as s,Wt as t,he as u,xe as v,Re as w,Be as x,Kt as y,Qt as z};
