import{S as Bs,i as As,s as Fs,J as Cs,K as Gs,w as ns,a as T,k as h,q as y,L as Os,x as is,h as r,c as E,l as u,m as f,r as b,n as d,y as ds,b as R,E as t,M as ft,N as Ws,f as hs,t as us,z as fs,P as Ie,Q as Ls,o as Ms,B as kt,p as vl,u as _t,e as Et}from"../../../chunks/index-6c4a4d91.js";import{G as js}from"../../../chunks/GA-e96febe3.js";import{S as Ys,p as Us,s as pl,b as _s,c as $s}from"../../../chunks/sendEvent-9719e596.js";import{T as qs}from"../../../chunks/interfaces-4435d131.js";function ps(i,e,c){const s=i.slice();return s[25]=e[c],s}function vs(i,e,c){const s=i.slice();return s[28]=e[c],s}function ms(i,e,c){const s=i.slice();return s[31]=e[c],s}function ys(i,e,c){const s=i.slice();return s[28]=e[c],s}function bs(i,e,c){const s=i.slice();return s[31]=e[c],s}function Ts(i,e,c){const s=i.slice();return s[28]=e[c],s}function Es(i,e,c){const s=i.slice();return s[28]=e[c],s}function ks(i,e,c){const s=i.slice();return s[28]=e[c],s}function gs(i){let e,c,s,l;function n(...a){return i[15](i[28],...a)}return{c(){e=h("button"),this.h()},l(a){e=u(a,"BUTTON",{name:!0,type:!0,title:!0,"data-type":!0,"data-selected":!0,class:!0}),f(e).forEach(r),this.h()},h(){d(e,"name","type1"),d(e,"type","button"),d(e,"title",i[28]),d(e,"data-type",i[28]),d(e,"data-selected",c=i[1]===i[28]),d(e,"class","type type__symbol-big"),e.value=i[28]},m(a,o){R(a,e,o),s||(l=ft(e,"click",n),s=!0)},p(a,o){i=a,o[0]&2&&c!==(c=i[1]===i[28])&&d(e,"data-selected",c)},d(a){a&&r(e),s=!1,l()}}}function ws(i){let e,c,s,l,n;function a(...o){return i[16](i[28],...o)}return{c(){e=h("button"),this.h()},l(o){e=u(o,"BUTTON",{name:!0,type:!0,title:!0,"data-type":!0,"data-selected":!0,class:!0}),f(e).forEach(r),this.h()},h(){d(e,"name","type2"),d(e,"type","button"),d(e,"title",i[28]),d(e,"data-type",i[28]),d(e,"data-selected",c=i[2]===i[28]),e.disabled=s=i[1]===i[28],d(e,"class","type type__symbol-big"),e.value=i[28]},m(o,v){R(o,e,v),l||(n=ft(e,"click",a),l=!0)},p(o,v){i=o,v[0]&4&&c!==(c=i[2]===i[28])&&d(e,"data-selected",c),v[0]&2&&s!==(s=i[1]===i[28])&&(e.disabled=s)},d(o){o&&r(e),l=!1,n()}}}function Ks(i){let e,c,s;return{c(){e=h("div"),c=h("span"),s=y("Loading..."),this.h()},l(l){e=u(l,"DIV",{slot:!0});var n=f(e);c=u(n,"SPAN",{});var a=f(c);s=b(a,"Loading..."),a.forEach(r),n.forEach(r),this.h()},h(){d(e,"slot","loading")},m(l,n){R(l,e,n),t(e,c),t(c,s)},p:kt,d(l){l&&r(e)}}}function zs(i){let e,c,s,l,n=i[40]+"",a,o,v,D,p,k;return{c(){e=h("div"),c=h("div"),s=T(),l=h("span"),a=T(),o=h("div"),D=T(),p=h("div"),this.h()},l(m){e=u(m,"DIV",{slot:!0});var I=f(e);c=u(I,"DIV",{class:!0,style:!0}),f(c).forEach(r),s=E(I),l=u(I,"SPAN",{class:!0});var N=f(l);N.forEach(r),a=E(I),o=u(I,"DIV",{class:!0,"data-type":!0}),f(o).forEach(r),D=E(I),p=u(I,"DIV",{class:!0,"data-type":!0}),f(p).forEach(r),I.forEach(r),this.h()},h(){d(c,"class","pokemon pokemon__small"),vl(c,"--pokemon-url","url('/assets/i/"+i[41].id+".min.png')"),d(l,"class","label"),d(o,"class","type type__symbol-autocomplete"),d(o,"data-type",v=i[41].types[0]),d(p,"class","type type__symbol-autocomplete"),d(p,"data-type",k=i[41].types[1]),d(e,"slot","item")},m(m,I){R(m,e,I),t(e,c),t(e,s),t(e,l),l.innerHTML=n,t(e,a),t(e,o),t(e,D),t(e,p)},p(m,I){I[1]&1024&&vl(c,"--pokemon-url","url('/assets/i/"+m[41].id+".min.png')"),I[1]&512&&n!==(n=m[40]+"")&&(l.innerHTML=n),I[1]&1024&&v!==(v=m[41].types[0])&&d(o,"data-type",v),I[1]&1024&&k!==(k=m[41].types[1])&&d(p,"data-type",k)},d(m){m&&r(e)}}}function Js(i){let e,c;return{c(){e=h("td"),c=y('"Type 1" not selected.'),this.h()},l(s){e=u(s,"TD",{colspan:!0,class:!0});var l=f(e);c=b(l,'"Type 1" not selected.'),l.forEach(r),this.h()},h(){d(e,"colspan","6"),d(e,"class","text-center error")},m(s,l){R(s,e,l),t(e,c)},p:kt,d(s){s&&r(e)}}}function Qs(i){let e,c=["0","0.25","0.5","1","2","4"],s=[];for(let l=0;l<6;l+=1)s[l]=Ds(bs(i,c,l));return{c(){for(let l=0;l<6;l+=1)s[l].c();e=Et()},l(l){for(let n=0;n<6;n+=1)s[n].l(l);e=Et()},m(l,n){for(let a=0;a<6;a+=1)s[a].m(l,n);R(l,e,n)},p(l,n){if(n[0]&8){c=["0","0.25","0.5","1","2","4"];let a;for(a=0;a<6;a+=1){const o=bs(l,c,a);s[a]?s[a].p(o,n):(s[a]=Ds(o),s[a].c(),s[a].m(e.parentNode,e))}for(;a<6;a+=1)s[a].d(1)}},d(l){Ie(s,l),l&&r(e)}}}function Is(i){let e,c,s=i[28]+"",l,n;return{c(){e=h("div"),c=h("span"),l=y(s),this.h()},l(a){e=u(a,"DIV",{class:!0,"data-type":!0});var o=f(e);c=u(o,"SPAN",{});var v=f(c);l=b(v,s),v.forEach(r),o.forEach(r),this.h()},h(){d(e,"class","type type__very-small d-block"),d(e,"data-type",n=i[28])},m(a,o){R(a,e,o),t(e,c),t(c,l)},p(a,o){o[0]&8&&s!==(s=a[28]+"")&&_t(l,s),o[0]&8&&n!==(n=a[28])&&d(e,"data-type",n)},d(a){a&&r(e)}}}function Ds(i){let e,c,s=i[3][i[31]],l=[];for(let n=0;n<s.length;n+=1)l[n]=Is(Ts(i,s,n));return{c(){e=h("td");for(let n=0;n<l.length;n+=1)l[n].c();c=T()},l(n){e=u(n,"TD",{});var a=f(e);for(let o=0;o<l.length;o+=1)l[o].l(a);c=E(a),a.forEach(r)},m(n,a){R(n,e,a);for(let o=0;o<l.length;o+=1)l[o].m(e,null);t(e,c)},p(n,a){if(a[0]&8){s=n[3][n[31]];let o;for(o=0;o<s.length;o+=1){const v=Ts(n,s,o);l[o]?l[o].p(v,a):(l[o]=Is(v),l[o].c(),l[o].m(e,c))}for(;o<l.length;o+=1)l[o].d(1);l.length=s.length}},d(n){n&&r(e),Ie(l,n)}}}function Vs(i){let e,c,s,l,n;return{c(){e=y("("),c=h("div"),s=h("span"),l=y(i[6]),n=y(")"),this.h()},l(a){e=b(a,"("),c=u(a,"DIV",{class:!0,style:!0,"data-type":!0});var o=f(c);s=u(o,"SPAN",{});var v=f(s);l=b(v,i[6]),v.forEach(r),o.forEach(r),n=b(a,")"),this.h()},h(){d(c,"class","type type__tera"),vl(c,"display","inline-block"),d(c,"data-type",i[6])},m(a,o){R(a,e,o),R(a,c,o),t(c,s),t(s,l),R(a,n,o)},p(a,o){o[0]&64&&_t(l,a[6]),o[0]&64&&d(c,"data-type",a[6])},d(a){a&&r(e),a&&r(c),a&&r(n)}}}function Xs(i){let e,c;return{c(){e=h("p"),c=y("No Tera Type selected. Please select a Tera Type."),this.h()},l(s){e=u(s,"P",{class:!0});var l=f(e);c=b(l,"No Tera Type selected. Please select a Tera Type."),l.forEach(r),this.h()},h(){d(e,"class","error")},m(s,l){R(s,e,l),t(e,c)},p:kt,d(s){s&&r(e)}}}function Zs(i){let e,c,s,l,n,a,o,v,D,p,k,m,I,N,Z,le,B,G,O,K,M,S,A,ne,ve,se,z,g,V,ae,De,x;function re(H,ee){return H[1]?ea:xs}let ge=re(i),F=ge(i);return{c(){e=h("p"),c=y("Your Pokemon is now weak against:"),s=T(),l=h("table"),n=h("tbody"),a=h("tr"),o=h("th"),v=y("Factor"),D=T(),p=h("tr"),k=h("th"),m=h("span"),I=y("0×"),N=h("span"),Z=y("Immune"),le=T(),B=h("th"),G=y("¼×"),O=T(),K=h("th"),M=y("½×"),S=T(),A=h("th"),ne=y("1×"),ve=T(),se=h("th"),z=y("2×"),g=T(),V=h("th"),ae=y("4×"),De=T(),x=h("tr"),F.c(),this.h()},l(H){e=u(H,"P",{});var ee=f(e);c=b(ee,"Your Pokemon is now weak against:"),ee.forEach(r),s=E(H),l=u(H,"TABLE",{class:!0});var Ae=f(l);n=u(Ae,"TBODY",{});var W=f(n);a=u(W,"TR",{});var te=f(a);o=u(te,"TH",{class:!0,colspan:!0});var Fe=f(o);v=b(Fe,"Factor"),Fe.forEach(r),te.forEach(r),D=E(W),p=u(W,"TR",{});var L=f(p);k=u(L,"TH",{class:!0});var Ve=f(k);m=u(Ve,"SPAN",{class:!0});var me=f(m);I=b(me,"0×"),me.forEach(r),N=u(Ve,"SPAN",{class:!0});var oe=f(N);Z=b(oe,"Immune"),oe.forEach(r),Ve.forEach(r),le=E(L),B=u(L,"TH",{class:!0});var Ce=f(B);G=b(Ce,"¼×"),Ce.forEach(r),O=E(L),K=u(L,"TH",{class:!0});var ye=f(K);M=b(ye,"½×"),ye.forEach(r),S=E(L),A=u(L,"TH",{class:!0});var Ge=f(A);ne=b(Ge,"1×"),Ge.forEach(r),ve=E(L),se=u(L,"TH",{class:!0});var Oe=f(se);z=b(Oe,"2×"),Oe.forEach(r),g=E(L),V=u(L,"TH",{class:!0});var be=f(V);ae=b(be,"4×"),be.forEach(r),L.forEach(r),De=E(W),x=u(W,"TR",{});var Te=f(x);F.l(Te),Te.forEach(r),W.forEach(r),Ae.forEach(r),this.h()},h(){d(o,"class","text-center"),d(o,"colspan","6"),d(m,"class","d-md-none"),d(N,"class","d-none d-md-block"),d(k,"class","text-center"),d(B,"class","text-center"),d(K,"class","text-center"),d(A,"class","text-center"),d(se,"class","text-center"),d(V,"class","text-center"),d(l,"class","table table-bordered table-sm bg-white")},m(H,ee){R(H,e,ee),t(e,c),R(H,s,ee),R(H,l,ee),t(l,n),t(n,a),t(a,o),t(o,v),t(n,D),t(n,p),t(p,k),t(k,m),t(m,I),t(k,N),t(N,Z),t(p,le),t(p,B),t(B,G),t(p,O),t(p,K),t(K,M),t(p,S),t(p,A),t(A,ne),t(p,ve),t(p,se),t(se,z),t(p,g),t(p,V),t(V,ae),t(n,De),t(n,x),F.m(x,null)},p(H,ee){ge===(ge=re(H))&&F?F.p(H,ee):(F.d(1),F=ge(H),F&&(F.c(),F.m(x,null)))},d(H){H&&r(e),H&&r(s),H&&r(l),F.d()}}}function xs(i){let e,c;return{c(){e=h("td"),c=y('"Type 1" not selected.'),this.h()},l(s){e=u(s,"TD",{colspan:!0,class:!0});var l=f(e);c=b(l,'"Type 1" not selected.'),l.forEach(r),this.h()},h(){d(e,"colspan","6"),d(e,"class","text-center error")},m(s,l){R(s,e,l),t(e,c)},p:kt,d(s){s&&r(e)}}}function ea(i){let e,c=["0","0.25","0.5","1","2","4"],s=[];for(let l=0;l<6;l+=1)s[l]=Ss(ms(i,c,l));return{c(){for(let l=0;l<6;l+=1)s[l].c();e=Et()},l(l){for(let n=0;n<6;n+=1)s[n].l(l);e=Et()},m(l,n){for(let a=0;a<6;a+=1)s[a].m(l,n);R(l,e,n)},p(l,n){if(n[0]&16){c=["0","0.25","0.5","1","2","4"];let a;for(a=0;a<6;a+=1){const o=ms(l,c,a);s[a]?s[a].p(o,n):(s[a]=Ss(o),s[a].c(),s[a].m(e.parentNode,e))}for(;a<6;a+=1)s[a].d(1)}},d(l){Ie(s,l),l&&r(e)}}}function Ps(i){let e,c,s=i[28]+"",l,n;return{c(){e=h("div"),c=h("span"),l=y(s),this.h()},l(a){e=u(a,"DIV",{class:!0,"data-type":!0});var o=f(e);c=u(o,"SPAN",{});var v=f(c);l=b(v,s),v.forEach(r),o.forEach(r),this.h()},h(){d(e,"class","type type__very-small d-block"),d(e,"data-type",n=i[28])},m(a,o){R(a,e,o),t(e,c),t(c,l)},p(a,o){o[0]&16&&s!==(s=a[28]+"")&&_t(l,s),o[0]&16&&n!==(n=a[28])&&d(e,"data-type",n)},d(a){a&&r(e)}}}function Ss(i){let e,c,s=i[4][i[31]],l=[];for(let n=0;n<s.length;n+=1)l[n]=Ps(ys(i,s,n));return{c(){e=h("td");for(let n=0;n<l.length;n+=1)l[n].c();c=T()},l(n){e=u(n,"TD",{});var a=f(e);for(let o=0;o<l.length;o+=1)l[o].l(a);c=E(a),a.forEach(r)},m(n,a){R(n,e,a);for(let o=0;o<l.length;o+=1)l[o].m(e,null);t(e,c)},p(n,a){if(a[0]&16){s=n[4][n[31]];let o;for(o=0;o<s.length;o+=1){const v=ys(n,s,o);l[o]?l[o].p(v,a):(l[o]=Ps(v),l[o].c(),l[o].m(e,c))}for(;o<l.length;o+=1)l[o].d(1);l.length=s.length}},d(n){n&&r(e),Ie(l,n)}}}function Ns(i){let e,c,s=i[28]+"",l,n,a,o,v;function D(...p){return i[18](i[28],...p)}return{c(){e=h("button"),c=h("span"),l=y(s),n=T(),this.h()},l(p){e=u(p,"BUTTON",{type:!0,class:!0,"data-type":!0});var k=f(e);c=u(k,"SPAN",{});var m=f(c);l=b(m,s),m.forEach(r),n=E(k),k.forEach(r),this.h()},h(){d(e,"type","button"),d(e,"class","type type__tera"),d(e,"data-type",a=i[28])},m(p,k){R(p,e,k),t(e,c),t(c,l),t(e,n),o||(v=ft(e,"click",D),o=!0)},p(p,k){i=p,k[0]&32&&s!==(s=i[28]+"")&&_t(l,s),k[0]&32&&a!==(a=i[28])&&d(e,"data-type",a)},d(p){p&&r(e),o=!1,v()}}}function Rs(i){let e,c,s=i[25].score+"",l,n,a,o,v=i[25].types,D=[];for(let p=0;p<v.length;p+=1)D[p]=Ns(vs(i,v,p));return{c(){e=h("tr"),c=h("td"),l=y(s),n=T(),a=h("td");for(let p=0;p<D.length;p+=1)D[p].c();o=T(),this.h()},l(p){e=u(p,"TR",{});var k=f(e);c=u(k,"TD",{class:!0});var m=f(c);l=b(m,s),m.forEach(r),n=E(k),a=u(k,"TD",{});var I=f(a);for(let N=0;N<D.length;N+=1)D[N].l(I);I.forEach(r),o=E(k),k.forEach(r),this.h()},h(){d(c,"class","text-center")},m(p,k){R(p,e,k),t(e,c),t(c,l),t(e,n),t(e,a);for(let m=0;m<D.length;m+=1)D[m].m(a,null);t(e,o)},p(p,k){if(k[0]&32&&s!==(s=p[25].score+"")&&_t(l,s),k[0]&16416){v=p[25].types;let m;for(m=0;m<v.length;m+=1){const I=vs(p,v,m);D[m]?D[m].p(I,k):(D[m]=Ns(I),D[m].c(),D[m].m(a,null))}for(;m<D.length;m+=1)D[m].d(1);D.length=v.length}},d(p){p&&r(e),Ie(D,p)}}}function ta(i){let e,c,s,l,n,a,o,v,D,p,k,m,I,N,Z,le,B,G,O,K,M,S,A,ne,ve,se,z,g,V,ae,De,x,re,ge,F,H,ee,Ae,W,te,Fe,L,Ve,me,oe,Ce,ye,Ge,Oe,be,Te,Ee,gt,wt,J,st,It,Dt,at,Vt,Pt,We,ke,rt,Pe,St,Nt,Q,Se,Le,Rt,Me,Ht,Bt,je,At,Ft,Ye,Ct,Gt,Ue,Ot,Wt,$e,Lt,Mt,qe,jt,Yt,Ke,Ut,Ne,$t,qt,Kt,ue,ot,zt,Jt,ct,Qt,Xt,ze,Je,we,Re,Qe,Zt,xt,nt,el,tl,ll,it,sl,dt,fe,al,rl,ht,ol,cl,He,ut,nl,il,_e,dl,ml;e=new js({});let Xe=i[8],j=[];for(let _=0;_<Xe.length;_+=1)j[_]=gs(ks(i,Xe,_));let Ze=i[8],Y=[];for(let _=0;_<Ze.length;_+=1)Y[_]=ws(Es(i,Ze,_));function Hs(_){i[17](_)}let yl={className:"pokemon-input",dropdownClassName:"pokemon-dropdown",items:i[7],class:"form-control form-control-lg",placeholder:"Search Pokémon...",showClear:"true",labelFieldName:"en",valueFieldName:"en",maxItemsToShowInList:"4",onChange:i[13],keywordsFunction:la,$$slots:{item:[zs,({label:_,item:P})=>({40:_,41:P}),({label:_,item:P})=>[0,(_?512:0)|(P?1024:0)]],loading:[Ks]},$$scope:{ctx:i}};i[0]!==void 0&&(yl.selectedItem=i[0]),Ee=new Ys({props:yl}),Cs.push(()=>Gs(Ee,"selectedItem",Hs,i[0]));function bl(_,P){return _[1]?Qs:Js}let pt=bl(i),ie=pt(i),U=i[6]&&Vs(i);function Tl(_,P){return _[6]?Zs:Xs}let vt=Tl(i),de=vt(i),xe=i[5],$=[];for(let _=0;_<xe.length;_+=1)$[_]=Rs(ps(i,xe,_));return{c(){ns(e.$$.fragment),c=T(),s=h("div"),l=T(),n=h("div"),a=h("div"),o=h("div"),v=h("h2"),D=y("Tera Type Calculator"),p=T(),k=h("p"),m=y("Find the best Tera Type for your Pokémon to win VGC Battles."),I=T(),N=h("div"),Z=h("div"),le=h("div"),B=h("div"),G=h("div"),O=h("div"),K=h("div"),M=h("div"),S=h("div"),A=h("div"),ne=h("h5"),ve=y("Select Type 1"),se=T(),z=h("div");for(let _=0;_<j.length;_+=1)j[_].c();g=h("button"),V=y("Reset"),De=T(),x=h("div"),re=h("div"),ge=T(),F=h("div"),H=h("h5"),ee=y("Select Type 2"),Ae=T(),W=h("div");for(let _=0;_<Y.length;_+=1)Y[_].c();te=h("button"),Fe=y("Reset"),Ve=T(),me=h("div"),oe=h("div"),Ce=T(),ye=h("div"),Ge=y("Or select your lovely Pokémon"),Oe=T(),be=h("div"),Te=h("form"),ns(Ee.$$.fragment),wt=T(),J=h("div"),st=h("h4"),It=y("Weaknesses"),Dt=T(),at=h("p"),Vt=y("Your Pokemon is weak against:"),Pt=T(),We=h("table"),ke=h("tbody"),rt=h("tr"),Pe=h("th"),St=y("Factor"),Nt=T(),Q=h("tr"),Se=h("th"),Le=h("span"),Rt=y("0×"),Me=h("span"),Ht=y("Immune"),Bt=T(),je=h("th"),At=y("¼×"),Ft=T(),Ye=h("th"),Ct=y("½×"),Gt=T(),Ue=h("th"),Ot=y("1×"),Wt=T(),$e=h("th"),Lt=y("2×"),Mt=T(),qe=h("th"),jt=y("4×"),Yt=T(),Ke=h("tr"),ie.c(),Ut=T(),Ne=h("h4"),$t=y("Weaknesses with new Tera Type"),U&&U.c(),qt=T(),de.c(),Kt=T(),ue=h("div"),ot=h("h4"),zt=y("Best Tera Type Results"),Jt=T(),ct=h("p"),Qt=y("The best Tera Types for your Pokemon are:"),Xt=T(),ze=h("div"),Je=h("table"),we=h("tbody"),Re=h("tr"),Qe=h("th"),Zt=y("Score*"),xt=T(),nt=h("th"),el=y("Tera Types"),tl=T();for(let _=0;_<$.length;_+=1)$[_].c();ll=T(),it=h("div"),sl=T(),dt=h("p"),fe=h("small"),al=y("*The score is calculated from the super effectiveness + resistance of the new tera type against your weaknesses."),rl=h("br"),ht=h("b"),ol=y("Example:"),cl=y(" First your Fuecoco is weak against Fire, Ground and Rock. The best Tera Type would be "),He=h("div"),ut=h("span"),nl=y("Grass"),il=y(" with a score of 10. Because Grass is super effective against Water (2), Ground (2), Rock (2). So the score score is 6 + New Resistance against Water(2) and Ground (2). Together it's a score of 10."),this.h()},l(_){const P=Os("svelte-1awvpqb",document.head);is(e.$$.fragment,P),P.forEach(r),c=E(_),s=u(_,"DIV",{id:!0,class:!0}),f(s).forEach(r),l=E(_),n=u(_,"DIV",{class:!0});var C=f(n);a=u(C,"DIV",{class:!0});var w=f(a);o=u(w,"DIV",{class:!0});var X=f(o);v=u(X,"H2",{class:!0});var El=f(v);D=b(El,"Tera Type Calculator"),El.forEach(r),p=E(X),k=u(X,"P",{class:!0});var kl=f(k);m=b(kl,"Find the best Tera Type for your Pokémon to win VGC Battles."),kl.forEach(r),I=E(X),N=u(X,"DIV",{class:!0});var gl=f(N);Z=u(gl,"DIV",{class:!0});var mt=f(Z);le=u(mt,"DIV",{class:!0});var wl=f(le);B=u(wl,"DIV",{class:!0});var yt=f(B);G=u(yt,"DIV",{class:!0});var et=f(G);O=u(et,"DIV",{class:!0});var Il=f(O);K=u(Il,"DIV",{class:!0});var Dl=f(K);M=u(Dl,"DIV",{class:!0});var Vl=f(M);S=u(Vl,"DIV",{class:!0});var q=f(S);A=u(q,"DIV",{class:!0});var Pl=f(A);ne=u(Pl,"H5",{});var Sl=f(ne);ve=b(Sl,"Select Type 1"),Sl.forEach(r),Pl.forEach(r),se=E(q),z=u(q,"DIV",{class:!0,"data-selected":!0});var hl=f(z);for(let he=0;he<j.length;he+=1)j[he].l(hl);g=u(hl,"BUTTON",{type:!0,title:!0,class:!0});var Nl=f(g);V=b(Nl,"Reset"),Nl.forEach(r),hl.forEach(r),De=E(q),x=u(q,"DIV",{class:!0});var Rl=f(x);re=u(Rl,"DIV",{"data-type":!0,title:!0,class:!0}),f(re).forEach(r),Rl.forEach(r),ge=E(q),F=u(q,"DIV",{class:!0});var Hl=f(F);H=u(Hl,"H5",{});var Bl=f(H);ee=b(Bl,"Select Type 2"),Bl.forEach(r),Hl.forEach(r),Ae=E(q),W=u(q,"DIV",{class:!0,"data-selected":!0});var ul=f(W);for(let he=0;he<Y.length;he+=1)Y[he].l(ul);te=u(ul,"BUTTON",{type:!0,title:!0,class:!0});var Al=f(te);Fe=b(Al,"Reset"),Al.forEach(r),ul.forEach(r),Ve=E(q),me=u(q,"DIV",{class:!0});var Fl=f(me);oe=u(Fl,"DIV",{"data-type":!0,title:!0,class:!0}),f(oe).forEach(r),Fl.forEach(r),Ce=E(q),ye=u(q,"DIV",{class:!0});var Cl=f(ye);Ge=b(Cl,"Or select your lovely Pokémon"),Cl.forEach(r),Oe=E(q),be=u(q,"DIV",{class:!0});var Gl=f(be);Te=u(Gl,"FORM",{class:!0});var Ol=f(Te);is(Ee.$$.fragment,Ol),Ol.forEach(r),Gl.forEach(r),q.forEach(r),Vl.forEach(r),Dl.forEach(r),Il.forEach(r),wt=E(et),J=u(et,"DIV",{class:!0});var pe=f(J);st=u(pe,"H4",{});var Wl=f(st);It=b(Wl,"Weaknesses"),Wl.forEach(r),Dt=E(pe),at=u(pe,"P",{});var Ll=f(at);Vt=b(Ll,"Your Pokemon is weak against:"),Ll.forEach(r),Pt=E(pe),We=u(pe,"TABLE",{class:!0});var Ml=f(We);ke=u(Ml,"TBODY",{});var tt=f(ke);rt=u(tt,"TR",{});var jl=f(rt);Pe=u(jl,"TH",{class:!0,colspan:!0});var Yl=f(Pe);St=b(Yl,"Factor"),Yl.forEach(r),jl.forEach(r),Nt=E(tt),Q=u(tt,"TR",{});var ce=f(Q);Se=u(ce,"TH",{class:!0});var fl=f(Se);Le=u(fl,"SPAN",{class:!0});var Ul=f(Le);Rt=b(Ul,"0×"),Ul.forEach(r),Me=u(fl,"SPAN",{class:!0});var $l=f(Me);Ht=b($l,"Immune"),$l.forEach(r),fl.forEach(r),Bt=E(ce),je=u(ce,"TH",{class:!0});var ql=f(je);At=b(ql,"¼×"),ql.forEach(r),Ft=E(ce),Ye=u(ce,"TH",{class:!0});var Kl=f(Ye);Ct=b(Kl,"½×"),Kl.forEach(r),Gt=E(ce),Ue=u(ce,"TH",{class:!0});var zl=f(Ue);Ot=b(zl,"1×"),zl.forEach(r),Wt=E(ce),$e=u(ce,"TH",{class:!0});var Jl=f($e);Lt=b(Jl,"2×"),Jl.forEach(r),Mt=E(ce),qe=u(ce,"TH",{class:!0});var Ql=f(qe);jt=b(Ql,"4×"),Ql.forEach(r),ce.forEach(r),Yt=E(tt),Ke=u(tt,"TR",{});var Xl=f(Ke);ie.l(Xl),Xl.forEach(r),tt.forEach(r),Ml.forEach(r),Ut=E(pe),Ne=u(pe,"H4",{});var _l=f(Ne);$t=b(_l,"Weaknesses with new Tera Type"),U&&U.l(_l),_l.forEach(r),qt=E(pe),de.l(pe),pe.forEach(r),Kt=E(et),ue=u(et,"DIV",{class:!0});var lt=f(ue);ot=u(lt,"H4",{});var Zl=f(ot);zt=b(Zl,"Best Tera Type Results"),Zl.forEach(r),Jt=E(lt),ct=u(lt,"P",{});var xl=f(ct);Qt=b(xl,"The best Tera Types for your Pokemon are:"),xl.forEach(r),Xt=E(lt),ze=u(lt,"DIV",{class:!0});var es=f(ze);Je=u(es,"TABLE",{class:!0});var ts=f(Je);we=u(ts,"TBODY",{});var bt=f(we);Re=u(bt,"TR",{});var Tt=f(Re);Qe=u(Tt,"TH",{class:!0});var ls=f(Qe);Zt=b(ls,"Score*"),ls.forEach(r),xt=E(Tt),nt=u(Tt,"TH",{});var ss=f(nt);el=b(ss,"Tera Types"),ss.forEach(r),Tt.forEach(r),tl=E(bt);for(let he=0;he<$.length;he+=1)$[he].l(bt);bt.forEach(r),ts.forEach(r),es.forEach(r),lt.forEach(r),et.forEach(r),ll=E(yt),it=u(yt,"DIV",{class:!0}),f(it).forEach(r),yt.forEach(r),wl.forEach(r),sl=E(mt),dt=u(mt,"P",{});var as=f(dt);fe=u(as,"SMALL",{});var Be=f(fe);al=b(Be,"*The score is calculated from the super effectiveness + resistance of the new tera type against your weaknesses."),rl=u(Be,"BR",{}),ht=u(Be,"B",{});var rs=f(ht);ol=b(rs,"Example:"),rs.forEach(r),cl=b(Be," First your Fuecoco is weak against Fire, Ground and Rock. The best Tera Type would be "),He=u(Be,"DIV",{"data-type":!0,class:!0});var os=f(He);ut=u(os,"SPAN",{});var cs=f(ut);nl=b(cs,"Grass"),cs.forEach(r),os.forEach(r),il=b(Be," with a score of 10. Because Grass is super effective against Water (2), Ground (2), Rock (2). So the score score is 6 + New Resistance against Water(2) and Ground (2). Together it's a score of 10."),Be.forEach(r),as.forEach(r),mt.forEach(r),gl.forEach(r),X.forEach(r),w.forEach(r),C.forEach(r),this.h()},h(){document.title="Pokémon Tera Type Counter Calculator - Terastal.net",d(s,"id","tera-type-calcultator"),d(s,"class","divider"),d(v,"class","jumbotron-heading"),d(k,"class","lead"),d(A,"class","col-12 sm-12 col-lg-12 px-0"),d(g,"type","button"),d(g,"title","Reset Type 1"),d(g,"class","reset"),d(z,"class","col-12 sm-12 col-lg-10 px-0"),d(z,"data-selected",ae=!!i[1]),d(re,"data-type",i[1]),d(re,"title",i[1]),d(re,"class","selected-type"),d(x,"class","col-12 sm-12 col-lg-2 px-0"),d(F,"class","col-12 sm-12 col-lg-12 px-0 pt-3"),d(te,"type","button"),d(te,"title","Reset Type 2"),d(te,"class","reset"),d(W,"class","col-12 sm-12 col-lg-10 px-0"),d(W,"data-selected",L=!!i[2]),d(oe,"data-type",i[2]),d(oe,"title",i[2]),d(oe,"class","selected-type"),d(me,"class","col-12 sm-12 col-lg-2 px-0"),d(ye,"class","col-12 sm-12 col-lg-12 px-0 pt-3"),d(Te,"class","pokemon-search-form"),d(be,"class","col-12 px-0"),d(S,"class","row "),d(M,"class","col-12 px-0"),d(K,"class","row"),d(O,"class","col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"),d(Pe,"class","text-center"),d(Pe,"colspan","6"),d(Le,"class","d-md-none"),d(Me,"class","d-none d-md-block"),d(Se,"class","text-center"),d(je,"class","text-center"),d(Ye,"class","text-center"),d(Ue,"class","text-center"),d($e,"class","text-center"),d(qe,"class","text-center"),d(We,"class","table table-bordered table-sm bg-white"),d(J,"class","col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 "),d(Qe,"class","text-center"),d(Je,"class","table table-bordered table-sm"),d(ze,"class","d-flex justify-content-between align-items-center bg-white"),d(ue,"class","col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 "),d(G,"class","row"),d(it,"class","raid-card-background-2"),d(B,"class","raid-card-inner"),d(le,"class","raid-card"),d(He,"data-type","Grass"),d(He,"class","type type__small"),d(Z,"class","col-12 px-0"),d(N,"class","row px-0"),d(o,"class","col-12"),d(a,"class","row px-0"),d(n,"class","container py-3 tera-type-calcultator")},m(_,P){ds(e,document.head,null),R(_,c,P),R(_,s,P),R(_,l,P),R(_,n,P),t(n,a),t(a,o),t(o,v),t(v,D),t(o,p),t(o,k),t(k,m),t(o,I),t(o,N),t(N,Z),t(Z,le),t(le,B),t(B,G),t(G,O),t(O,K),t(K,M),t(M,S),t(S,A),t(A,ne),t(ne,ve),t(S,se),t(S,z);for(let C=0;C<j.length;C+=1)j[C].m(z,null);t(z,g),t(g,V),t(S,De),t(S,x),t(x,re),t(S,ge),t(S,F),t(F,H),t(H,ee),t(S,Ae),t(S,W);for(let C=0;C<Y.length;C+=1)Y[C].m(W,null);t(W,te),t(te,Fe),t(S,Ve),t(S,me),t(me,oe),t(S,Ce),t(S,ye),t(ye,Ge),t(S,Oe),t(S,be),t(be,Te),ds(Ee,Te,null),t(G,wt),t(G,J),t(J,st),t(st,It),t(J,Dt),t(J,at),t(at,Vt),t(J,Pt),t(J,We),t(We,ke),t(ke,rt),t(rt,Pe),t(Pe,St),t(ke,Nt),t(ke,Q),t(Q,Se),t(Se,Le),t(Le,Rt),t(Se,Me),t(Me,Ht),t(Q,Bt),t(Q,je),t(je,At),t(Q,Ft),t(Q,Ye),t(Ye,Ct),t(Q,Gt),t(Q,Ue),t(Ue,Ot),t(Q,Wt),t(Q,$e),t($e,Lt),t(Q,Mt),t(Q,qe),t(qe,jt),t(ke,Yt),t(ke,Ke),ie.m(Ke,null),t(J,Ut),t(J,Ne),t(Ne,$t),U&&U.m(Ne,null),t(J,qt),de.m(J,null),t(G,Kt),t(G,ue),t(ue,ot),t(ot,zt),t(ue,Jt),t(ue,ct),t(ct,Qt),t(ue,Xt),t(ue,ze),t(ze,Je),t(Je,we),t(we,Re),t(Re,Qe),t(Qe,Zt),t(Re,xt),t(Re,nt),t(nt,el),t(we,tl);for(let C=0;C<$.length;C+=1)$[C].m(we,null);t(B,ll),t(B,it),t(Z,sl),t(Z,dt),t(dt,fe),t(fe,al),t(fe,rl),t(fe,ht),t(ht,ol),t(fe,cl),t(fe,He),t(He,ut),t(ut,nl),t(fe,il),_e=!0,dl||(ml=[ft(g,"click",i[11]),ft(te,"click",i[12])],dl=!0)},p(_,P){if(P[0]&770){Xe=_[8];let w;for(w=0;w<Xe.length;w+=1){const X=ks(_,Xe,w);j[w]?j[w].p(X,P):(j[w]=gs(X),j[w].c(),j[w].m(z,g))}for(;w<j.length;w+=1)j[w].d(1);j.length=Xe.length}if((!_e||P[0]&2&&ae!==(ae=!!_[1]))&&d(z,"data-selected",ae),(!_e||P[0]&2)&&d(re,"data-type",_[1]),(!_e||P[0]&2)&&d(re,"title",_[1]),P[0]&1286){Ze=_[8];let w;for(w=0;w<Ze.length;w+=1){const X=Es(_,Ze,w);Y[w]?Y[w].p(X,P):(Y[w]=ws(X),Y[w].c(),Y[w].m(W,te))}for(;w<Y.length;w+=1)Y[w].d(1);Y.length=Ze.length}(!_e||P[0]&4&&L!==(L=!!_[2]))&&d(W,"data-selected",L),(!_e||P[0]&4)&&d(oe,"data-type",_[2]),(!_e||P[0]&4)&&d(oe,"title",_[2]);const C={};if(P[1]&34304&&(C.$$scope={dirty:P,ctx:_}),!gt&&P[0]&1&&(gt=!0,C.selectedItem=_[0],Ws(()=>gt=!1)),Ee.$set(C),pt===(pt=bl(_))&&ie?ie.p(_,P):(ie.d(1),ie=pt(_),ie&&(ie.c(),ie.m(Ke,null))),_[6]?U?U.p(_,P):(U=Vs(_),U.c(),U.m(Ne,null)):U&&(U.d(1),U=null),vt===(vt=Tl(_))&&de?de.p(_,P):(de.d(1),de=vt(_),de&&(de.c(),de.m(J,null))),P[0]&16416){xe=_[5];let w;for(w=0;w<xe.length;w+=1){const X=ps(_,xe,w);$[w]?$[w].p(X,P):($[w]=Rs(X),$[w].c(),$[w].m(we,null))}for(;w<$.length;w+=1)$[w].d(1);$.length=xe.length}},i(_){_e||(hs(e.$$.fragment,_),hs(Ee.$$.fragment,_),_e=!0)},o(_){us(e.$$.fragment,_),us(Ee.$$.fragment,_),_e=!1},d(_){fs(e),_&&r(c),_&&r(s),_&&r(l),_&&r(n),Ie(j,_),Ie(Y,_),fs(Ee),ie.d(),U&&U.d(),de.d(),Ie($,_),dl=!1,Ls(ml)}}}function la(i){return i.en+" "+i.de+" "+i.fr}function sa(i,e,c){let s,l=Us,n,a;const o={0:[],"0.25":[],"0.5":[],1:[],2:[],4:[]},v={0:[],"0.25":[],"0.5":[],1:[],2:[],4:[]},D=Object.keys(qs);Ms(async()=>{N(),O()});function p(g,V){V===a&&I(),c(1,n=V),N(),O(),A(),B(),pl("tera_type_calculator","type_1",V)}function k(g,V){V!==n&&(c(2,a=V),N(),O(),A(),B(),pl("tera_type_calculator","type_2",V))}function m(){c(1,n=void 0),N(),O(),A(),B()}function I(){c(2,a=void 0),N(),O(),A(),B()}function N(){if(le(),!n||!n&&!a)return;const g=_s(n,a);Object.keys(g).forEach(V=>{const ae=g[V].toString();o[ae].push(V)})}function Z(){if(B(),!M)return;const g=_s(M);Object.keys(g).forEach(V=>{const ae=g[V].toString();v[ae].push(V)})}function le(){Object.keys(o).forEach(g=>{c(3,o[g]=[],o)})}function B(){Object.keys(v).forEach(g=>{c(4,v[g]=[],v)})}let G=[];function O(){n&&c(5,G=$s(n,a))}function K(g){m(),I(),pl("tera_type_calculator","select_pokemon",g?g.en:"empty"),g&&(c(1,n=g.types[0]),c(2,a=g.types[1]),N(),O())}let M;function S(g,V){c(6,M=V),Z()}function A(){c(6,M=void 0)}const ne=(g,V)=>p(V,g),ve=(g,V)=>k(V,g);function se(g){s=g,c(0,s)}return[s,n,a,o,v,G,M,l,D,p,k,m,I,K,S,ne,ve,se,(g,V)=>S(V,g)]}class na extends Bs{constructor(e){super(),As(this,e,sa,ta,Fs,{},null,[-1,-1])}}export{na as default};
