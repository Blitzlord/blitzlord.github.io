import{S as Ws,i as Ls,s as Ms,L as js,M as Ys,w as _s,a as m,k as h,q as T,N as Us,x as ps,h as r,c as y,l as u,m as f,r as E,n as d,y as vs,b as R,E as t,F as vt,O as $s,f as ms,t as ys,z as bs,Q as we,G as qs,o as zs,B as wt,p as kl,u as mt,e as Dt}from"../../../chunks/index-df1b6393.js";import{S as Ks}from"../../../chunks/Scripts-d73a1027.js";import{S as Qs,p as Js,s as El,c as Ts,d as Xs}from"../../../chunks/sendEvent-73a52b3d.js";import{T as Zs}from"../../../chunks/interfaces-64f496f9.js";function Es(i,e,c){const s=i.slice();return s[25]=e[c],s}function ks(i,e,c){const s=i.slice();return s[28]=e[c],s}function gs(i,e,c){const s=i.slice();return s[31]=e[c],s}function Is(i,e,c){const s=i.slice();return s[28]=e[c],s}function Ds(i,e,c){const s=i.slice();return s[31]=e[c],s}function ws(i,e,c){const s=i.slice();return s[28]=e[c],s}function Vs(i,e,c){const s=i.slice();return s[28]=e[c],s}function Ps(i,e,c){const s=i.slice();return s[28]=e[c],s}function Ss(i){let e,c,s,l;function n(...a){return i[15](i[28],...a)}return{c(){e=h("button"),this.h()},l(a){e=u(a,"BUTTON",{name:!0,type:!0,title:!0,"data-type":!0,"data-selected":!0,class:!0}),f(e).forEach(r),this.h()},h(){d(e,"name","type1"),d(e,"type","button"),d(e,"title",i[28]),d(e,"data-type",i[28]),d(e,"data-selected",c=i[1]===i[28]),d(e,"class","type type__symbol-big"),e.value=i[28]},m(a,o){R(a,e,o),s||(l=vt(e,"click",n),s=!0)},p(a,o){i=a,o[0]&2&&c!==(c=i[1]===i[28])&&d(e,"data-selected",c)},d(a){a&&r(e),s=!1,l()}}}function Ns(i){let e,c,s,l,n;function a(...o){return i[16](i[28],...o)}return{c(){e=h("button"),this.h()},l(o){e=u(o,"BUTTON",{name:!0,type:!0,title:!0,"data-type":!0,"data-selected":!0,class:!0}),f(e).forEach(r),this.h()},h(){d(e,"name","type2"),d(e,"type","button"),d(e,"title",i[28]),d(e,"data-type",i[28]),d(e,"data-selected",c=i[2]===i[28]),e.disabled=s=i[1]===i[28],d(e,"class","type type__symbol-big"),e.value=i[28]},m(o,v){R(o,e,v),l||(n=vt(e,"click",a),l=!0)},p(o,v){i=o,v[0]&4&&c!==(c=i[2]===i[28])&&d(e,"data-selected",c),v[0]&2&&s!==(s=i[1]===i[28])&&(e.disabled=s)},d(o){o&&r(e),l=!1,n()}}}function xs(i){let e,c,s;return{c(){e=h("div"),c=h("span"),s=T("Loading..."),this.h()},l(l){e=u(l,"DIV",{slot:!0});var n=f(e);c=u(n,"SPAN",{});var a=f(c);s=E(a,"Loading..."),a.forEach(r),n.forEach(r),this.h()},h(){d(e,"slot","loading")},m(l,n){R(l,e,n),t(e,c),t(c,s)},p:wt,d(l){l&&r(e)}}}function ea(i){let e,c,s,l,n=i[40]+"",a,o,v,V,p,k;return{c(){e=h("div"),c=h("div"),s=m(),l=h("span"),a=m(),o=h("div"),V=m(),p=h("div"),this.h()},l(b){e=u(b,"DIV",{slot:!0});var w=f(e);c=u(w,"DIV",{class:!0,style:!0}),f(c).forEach(r),s=y(w),l=u(w,"SPAN",{class:!0});var S=f(l);S.forEach(r),a=y(w),o=u(w,"DIV",{class:!0,"data-type":!0}),f(o).forEach(r),V=y(w),p=u(w,"DIV",{class:!0,"data-type":!0}),f(p).forEach(r),w.forEach(r),this.h()},h(){d(c,"class","pokemon pokemon__small"),kl(c,"--pokemon-url","url('/assets/i/"+i[41].id+".min.png')"),d(l,"class","label"),d(o,"class","type type__symbol-autocomplete"),d(o,"data-type",v=i[41].types[0]),d(p,"class","type type__symbol-autocomplete"),d(p,"data-type",k=i[41].types[1]),d(e,"slot","item")},m(b,w){R(b,e,w),t(e,c),t(e,s),t(e,l),l.innerHTML=n,t(e,a),t(e,o),t(e,V),t(e,p)},p(b,w){w[1]&1024&&kl(c,"--pokemon-url","url('/assets/i/"+b[41].id+".min.png')"),w[1]&512&&n!==(n=b[40]+"")&&(l.innerHTML=n),w[1]&1024&&v!==(v=b[41].types[0])&&d(o,"data-type",v),w[1]&1024&&k!==(k=b[41].types[1])&&d(p,"data-type",k)},d(b){b&&r(e)}}}function ta(i){let e,c;return{c(){e=h("td"),c=T('"Type 1" not selected.'),this.h()},l(s){e=u(s,"TD",{colspan:!0,class:!0});var l=f(e);c=E(l,'"Type 1" not selected.'),l.forEach(r),this.h()},h(){d(e,"colspan","6"),d(e,"class","text-center error")},m(s,l){R(s,e,l),t(e,c)},p:wt,d(s){s&&r(e)}}}function la(i){let e,c=["0","0.25","0.5","1","2","4"],s=[];for(let l=0;l<6;l+=1)s[l]=Hs(Ds(i,c,l));return{c(){for(let l=0;l<6;l+=1)s[l].c();e=Dt()},l(l){for(let n=0;n<6;n+=1)s[n].l(l);e=Dt()},m(l,n){for(let a=0;a<6;a+=1)s[a].m(l,n);R(l,e,n)},p(l,n){if(n[0]&8){c=["0","0.25","0.5","1","2","4"];let a;for(a=0;a<6;a+=1){const o=Ds(l,c,a);s[a]?s[a].p(o,n):(s[a]=Hs(o),s[a].c(),s[a].m(e.parentNode,e))}for(;a<6;a+=1)s[a].d(1)}},d(l){we(s,l),l&&r(e)}}}function Rs(i){let e,c,s=i[28]+"",l,n;return{c(){e=h("div"),c=h("span"),l=T(s),this.h()},l(a){e=u(a,"DIV",{class:!0,"data-type":!0});var o=f(e);c=u(o,"SPAN",{});var v=f(c);l=E(v,s),v.forEach(r),o.forEach(r),this.h()},h(){d(e,"class","type type__very-small d-block"),d(e,"data-type",n=i[28])},m(a,o){R(a,e,o),t(e,c),t(c,l)},p(a,o){o[0]&8&&s!==(s=a[28]+"")&&mt(l,s),o[0]&8&&n!==(n=a[28])&&d(e,"data-type",n)},d(a){a&&r(e)}}}function Hs(i){let e,c,s=i[3][i[31]],l=[];for(let n=0;n<s.length;n+=1)l[n]=Rs(ws(i,s,n));return{c(){e=h("td");for(let n=0;n<l.length;n+=1)l[n].c();c=m()},l(n){e=u(n,"TD",{});var a=f(e);for(let o=0;o<l.length;o+=1)l[o].l(a);c=y(a),a.forEach(r)},m(n,a){R(n,e,a);for(let o=0;o<l.length;o+=1)l[o].m(e,null);t(e,c)},p(n,a){if(a[0]&8){s=n[3][n[31]];let o;for(o=0;o<s.length;o+=1){const v=ws(n,s,o);l[o]?l[o].p(v,a):(l[o]=Rs(v),l[o].c(),l[o].m(e,c))}for(;o<l.length;o+=1)l[o].d(1);l.length=s.length}},d(n){n&&r(e),we(l,n)}}}function Bs(i){let e,c,s,l,n;return{c(){e=T("("),c=h("div"),s=h("span"),l=T(i[6]),n=T(")"),this.h()},l(a){e=E(a,"("),c=u(a,"DIV",{class:!0,style:!0,"data-type":!0});var o=f(c);s=u(o,"SPAN",{});var v=f(s);l=E(v,i[6]),v.forEach(r),o.forEach(r),n=E(a,")"),this.h()},h(){d(c,"class","type type__tera"),kl(c,"display","inline-block"),d(c,"data-type",i[6])},m(a,o){R(a,e,o),R(a,c,o),t(c,s),t(s,l),R(a,n,o)},p(a,o){o[0]&64&&mt(l,a[6]),o[0]&64&&d(c,"data-type",a[6])},d(a){a&&r(e),a&&r(c),a&&r(n)}}}function sa(i){let e,c;return{c(){e=h("p"),c=T("No Tera Type selected. Please select a Tera Type."),this.h()},l(s){e=u(s,"P",{class:!0});var l=f(e);c=E(l,"No Tera Type selected. Please select a Tera Type."),l.forEach(r),this.h()},h(){d(e,"class","error")},m(s,l){R(s,e,l),t(e,c)},p:wt,d(s){s&&r(e)}}}function aa(i){let e,c,s,l,n,a,o,v,V,p,k,b,w,S,ce,ye,F,ue,O,C,L,Q,H,le,se,J,N,I,D,ne,Ve,G;function x(B,j){return B[1]?oa:ra}let ge=x(i),M=ge(i);return{c(){e=h("p"),c=T("Your Pokemon is now weak against:"),s=m(),l=h("table"),n=h("tbody"),a=h("tr"),o=h("th"),v=T("Factor"),V=m(),p=h("tr"),k=h("th"),b=h("span"),w=T("0×"),S=h("span"),ce=T("Immune"),ye=m(),F=h("th"),ue=T("¼×"),O=m(),C=h("th"),L=T("½×"),Q=m(),H=h("th"),le=T("1×"),se=m(),J=h("th"),N=T("2×"),I=m(),D=h("th"),ne=T("4×"),Ve=m(),G=h("tr"),M.c(),this.h()},l(B){e=u(B,"P",{});var j=f(e);c=E(j,"Your Pokemon is now weak against:"),j.forEach(r),s=y(B),l=u(B,"TABLE",{class:!0});var ae=f(l);n=u(ae,"TBODY",{});var fe=f(n);a=u(fe,"TR",{});var be=f(a);o=u(be,"TH",{class:!0,colspan:!0});var Ie=f(o);v=E(Ie,"Factor"),Ie.forEach(r),be.forEach(r),V=y(fe),p=u(fe,"TR",{});var Y=f(p);k=u(Y,"TH",{class:!0});var Pe=f(k);b=u(Pe,"SPAN",{class:!0});var ee=f(b);w=E(ee,"0×"),ee.forEach(r),S=u(Pe,"SPAN",{class:!0});var te=f(S);ce=E(te,"Immune"),te.forEach(r),Pe.forEach(r),ye=y(Y),F=u(Y,"TH",{class:!0});var Oe=f(F);ue=E(Oe,"¼×"),Oe.forEach(r),O=y(Y),C=u(Y,"TH",{class:!0});var Se=f(C);L=E(Se,"½×"),Se.forEach(r),Q=y(Y),H=u(Y,"TH",{class:!0});var Ce=f(H);le=E(Ce,"1×"),Ce.forEach(r),se=y(Y),J=u(Y,"TH",{class:!0});var Te=f(J);N=E(Te,"2×"),Te.forEach(r),I=y(Y),D=u(Y,"TH",{class:!0});var re=f(D);ne=E(re,"4×"),re.forEach(r),Y.forEach(r),Ve=y(fe),G=u(fe,"TR",{});var Ge=f(G);M.l(Ge),Ge.forEach(r),fe.forEach(r),ae.forEach(r),this.h()},h(){d(o,"class","text-center"),d(o,"colspan","6"),d(b,"class","d-md-none"),d(S,"class","d-none d-md-block"),d(k,"class","text-center"),d(F,"class","text-center"),d(C,"class","text-center"),d(H,"class","text-center"),d(J,"class","text-center"),d(D,"class","text-center"),d(l,"class","table table-bordered table-sm")},m(B,j){R(B,e,j),t(e,c),R(B,s,j),R(B,l,j),t(l,n),t(n,a),t(a,o),t(o,v),t(n,V),t(n,p),t(p,k),t(k,b),t(b,w),t(k,S),t(S,ce),t(p,ye),t(p,F),t(F,ue),t(p,O),t(p,C),t(C,L),t(p,Q),t(p,H),t(H,le),t(p,se),t(p,J),t(J,N),t(p,I),t(p,D),t(D,ne),t(n,Ve),t(n,G),M.m(G,null)},p(B,j){ge===(ge=x(B))&&M?M.p(B,j):(M.d(1),M=ge(B),M&&(M.c(),M.m(G,null)))},d(B){B&&r(e),B&&r(s),B&&r(l),M.d()}}}function ra(i){let e,c;return{c(){e=h("td"),c=T('"Type 1" not selected.'),this.h()},l(s){e=u(s,"TD",{colspan:!0,class:!0});var l=f(e);c=E(l,'"Type 1" not selected.'),l.forEach(r),this.h()},h(){d(e,"colspan","6"),d(e,"class","text-center error")},m(s,l){R(s,e,l),t(e,c)},p:wt,d(s){s&&r(e)}}}function oa(i){let e,c=["0","0.25","0.5","1","2","4"],s=[];for(let l=0;l<6;l+=1)s[l]=As(gs(i,c,l));return{c(){for(let l=0;l<6;l+=1)s[l].c();e=Dt()},l(l){for(let n=0;n<6;n+=1)s[n].l(l);e=Dt()},m(l,n){for(let a=0;a<6;a+=1)s[a].m(l,n);R(l,e,n)},p(l,n){if(n[0]&16){c=["0","0.25","0.5","1","2","4"];let a;for(a=0;a<6;a+=1){const o=gs(l,c,a);s[a]?s[a].p(o,n):(s[a]=As(o),s[a].c(),s[a].m(e.parentNode,e))}for(;a<6;a+=1)s[a].d(1)}},d(l){we(s,l),l&&r(e)}}}function Fs(i){let e,c,s=i[28]+"",l,n;return{c(){e=h("div"),c=h("span"),l=T(s),this.h()},l(a){e=u(a,"DIV",{class:!0,"data-type":!0});var o=f(e);c=u(o,"SPAN",{});var v=f(c);l=E(v,s),v.forEach(r),o.forEach(r),this.h()},h(){d(e,"class","type type__very-small d-block"),d(e,"data-type",n=i[28])},m(a,o){R(a,e,o),t(e,c),t(c,l)},p(a,o){o[0]&16&&s!==(s=a[28]+"")&&mt(l,s),o[0]&16&&n!==(n=a[28])&&d(e,"data-type",n)},d(a){a&&r(e)}}}function As(i){let e,c,s=i[4][i[31]],l=[];for(let n=0;n<s.length;n+=1)l[n]=Fs(Is(i,s,n));return{c(){e=h("td");for(let n=0;n<l.length;n+=1)l[n].c();c=m()},l(n){e=u(n,"TD",{});var a=f(e);for(let o=0;o<l.length;o+=1)l[o].l(a);c=y(a),a.forEach(r)},m(n,a){R(n,e,a);for(let o=0;o<l.length;o+=1)l[o].m(e,null);t(e,c)},p(n,a){if(a[0]&16){s=n[4][n[31]];let o;for(o=0;o<s.length;o+=1){const v=Is(n,s,o);l[o]?l[o].p(v,a):(l[o]=Fs(v),l[o].c(),l[o].m(e,c))}for(;o<l.length;o+=1)l[o].d(1);l.length=s.length}},d(n){n&&r(e),we(l,n)}}}function Os(i){let e,c,s=i[28]+"",l,n,a,o,v;function V(...p){return i[18](i[28],...p)}return{c(){e=h("button"),c=h("span"),l=T(s),n=m(),this.h()},l(p){e=u(p,"BUTTON",{type:!0,class:!0,"data-type":!0});var k=f(e);c=u(k,"SPAN",{});var b=f(c);l=E(b,s),b.forEach(r),n=y(k),k.forEach(r),this.h()},h(){d(e,"type","button"),d(e,"class","type type__tera"),d(e,"data-type",a=i[28])},m(p,k){R(p,e,k),t(e,c),t(c,l),t(e,n),o||(v=vt(e,"click",V),o=!0)},p(p,k){i=p,k[0]&32&&s!==(s=i[28]+"")&&mt(l,s),k[0]&32&&a!==(a=i[28])&&d(e,"data-type",a)},d(p){p&&r(e),o=!1,v()}}}function Cs(i){let e,c,s=i[25].score+"",l,n,a,o,v=i[25].types,V=[];for(let p=0;p<v.length;p+=1)V[p]=Os(ks(i,v,p));return{c(){e=h("tr"),c=h("td"),l=T(s),n=m(),a=h("td");for(let p=0;p<V.length;p+=1)V[p].c();o=m(),this.h()},l(p){e=u(p,"TR",{});var k=f(e);c=u(k,"TD",{class:!0});var b=f(c);l=E(b,s),b.forEach(r),n=y(k),a=u(k,"TD",{});var w=f(a);for(let S=0;S<V.length;S+=1)V[S].l(w);w.forEach(r),o=y(k),k.forEach(r),this.h()},h(){d(c,"class","text-center")},m(p,k){R(p,e,k),t(e,c),t(c,l),t(e,n),t(e,a);for(let b=0;b<V.length;b+=1)V[b].m(a,null);t(e,o)},p(p,k){if(k[0]&32&&s!==(s=p[25].score+"")&&mt(l,s),k[0]&16416){v=p[25].types;let b;for(b=0;b<v.length;b+=1){const w=ks(p,v,b);V[b]?V[b].p(w,k):(V[b]=Os(w),V[b].c(),V[b].m(a,null))}for(;b<V.length;b+=1)V[b].d(1);V.length=v.length}},d(p){p&&r(e),we(V,p)}}}function ca(i){let e,c,s,l,n,a,o,v,V,p,k,b,w,S,ce,ye,F,ue,O,C,L,Q,H,le,se,J,N,I,D,ne,Ve,G,x,ge,M,B,j,ae,fe,be,Ie,Y,Pe,ee,te,Oe,Se,Ce,Te,re,Ge,We,Vt,Pt,Le,Me,Ee,St,Nt,X,ot,Rt,Ht,ct,Bt,Ft,je,ke,nt,Ne,At,Ot,Z,Re,Ye,Ct,Ue,Gt,Wt,$e,Lt,Mt,qe,jt,Yt,ze,Ut,$t,Ke,qt,zt,Qe,Kt,Qt,Je,Jt,He,Xt,Zt,xt,_e,it,el,tl,dt,ll,sl,Xe,Ze,De,Be,xe,al,rl,ht,ol,cl,nl,ut,il,ft,pe,dl,hl,_t,ul,fl,Fe,pt,_l,pl,ve,vl,gl;e=new Ks({});let et=i[8],U=[];for(let _=0;_<et.length;_+=1)U[_]=Ss(Ps(i,et,_));let tt=i[8],$=[];for(let _=0;_<tt.length;_+=1)$[_]=Ns(Vs(i,tt,_));function Gs(_){i[17](_)}let Il={className:"pokemon-input",dropdownClassName:"pokemon-dropdown",items:i[7],class:"form-control form-control-lg",placeholder:"Search Pokémon...",showClear:"true",labelFieldName:"en",valueFieldName:"en",maxItemsToShowInList:"4",onChange:i[13],keywordsFunction:na,$$slots:{item:[ea,({label:_,item:P})=>({40:_,41:P}),({label:_,item:P})=>[0,(_?512:0)|(P?1024:0)]],loading:[xs]},$$scope:{ctx:i}};i[0]!==void 0&&(Il.selectedItem=i[0]),Ee=new Qs({props:Il}),js.push(()=>Ys(Ee,"selectedItem",Gs,i[0]));function Dl(_,P){return _[1]?la:ta}let yt=Dl(i),ie=yt(i),q=i[6]&&Bs(i);function wl(_,P){return _[6]?aa:sa}let bt=wl(i),de=bt(i),lt=i[5],z=[];for(let _=0;_<lt.length;_+=1)z[_]=Cs(Es(i,lt,_));return{c(){_s(e.$$.fragment),c=m(),s=h("div"),l=m(),n=h("div"),a=h("div"),o=h("div"),v=h("h2"),V=T("Tera Type Calculator"),p=m(),k=h("p"),b=T("Find the best Tera Type for your Pokémon to win VGC Battles."),w=m(),S=h("div"),ce=h("div"),ye=m(),F=h("div"),ue=m(),O=h("div"),C=h("div"),L=h("div"),Q=h("div"),H=h("div"),le=h("div"),se=h("div"),J=h("div"),N=h("div"),I=h("div"),D=h("h5"),ne=T("Select Type 1"),Ve=m(),G=h("div");for(let _=0;_<U.length;_+=1)U[_].c();x=h("button"),ge=T("Reset"),B=m(),j=h("div"),ae=h("div"),fe=m(),be=h("div"),Ie=h("h5"),Y=T("Select Type 2"),Pe=m(),ee=h("div");for(let _=0;_<$.length;_+=1)$[_].c();te=h("button"),Oe=T("Reset"),Ce=m(),Te=h("div"),re=h("div"),Ge=m(),We=h("div"),Vt=T("Or select your lovely Pokémon"),Pt=m(),Le=h("div"),Me=h("form"),_s(Ee.$$.fragment),Nt=m(),X=h("div"),ot=h("h4"),Rt=T("Weaknesses"),Ht=m(),ct=h("p"),Bt=T("Your Pokemon is weak against:"),Ft=m(),je=h("table"),ke=h("tbody"),nt=h("tr"),Ne=h("th"),At=T("Factor"),Ot=m(),Z=h("tr"),Re=h("th"),Ye=h("span"),Ct=T("0×"),Ue=h("span"),Gt=T("Immune"),Wt=m(),$e=h("th"),Lt=T("¼×"),Mt=m(),qe=h("th"),jt=T("½×"),Yt=m(),ze=h("th"),Ut=T("1×"),$t=m(),Ke=h("th"),qt=T("2×"),zt=m(),Qe=h("th"),Kt=T("4×"),Qt=m(),Je=h("tr"),ie.c(),Jt=m(),He=h("h4"),Xt=T("Weaknesses with new Tera Type"),q&&q.c(),Zt=m(),de.c(),xt=m(),_e=h("div"),it=h("h4"),el=T("Best Tera Type Results"),tl=m(),dt=h("p"),ll=T("The best Tera Types for your Pokemon are:"),sl=m(),Xe=h("div"),Ze=h("table"),De=h("tbody"),Be=h("tr"),xe=h("th"),al=T("Score*"),rl=m(),ht=h("th"),ol=T("Tera Types"),cl=m();for(let _=0;_<z.length;_+=1)z[_].c();nl=m(),ut=h("div"),il=m(),ft=h("p"),pe=h("small"),dl=T("*The score is calculated from the super effectiveness + resistance of the new tera type against your weaknesses."),hl=h("br"),_t=h("b"),ul=T("Example:"),fl=T(" First your Fuecoco is weak against Fire, Ground and Rock. The best Tera Type would be "),Fe=h("div"),pt=h("span"),_l=T("Grass"),pl=T(" with a score of 10. Because Grass is super effective against Water (2), Ground (2), Rock (2). So the score score is 6 + New Resistance against Water(2) and Ground (2). Together it's a score of 10."),this.h()},l(_){const P=Us("svelte-1oik806",document.head);ps(e.$$.fragment,P),P.forEach(r),c=y(_),s=u(_,"DIV",{id:!0,class:!0}),f(s).forEach(r),l=y(_),n=u(_,"DIV",{class:!0});var A=f(n);a=u(A,"DIV",{class:!0});var g=f(a);o=u(g,"DIV",{class:!0});var W=f(o);v=u(W,"H2",{class:!0});var Vl=f(v);V=E(Vl,"Tera Type Calculator"),Vl.forEach(r),p=y(W),k=u(W,"P",{class:!0});var Pl=f(k);b=E(Pl,"Find the best Tera Type for your Pokémon to win VGC Battles."),Pl.forEach(r),w=y(W),S=u(W,"DIV",{class:!0});var Tt=f(S);ce=u(Tt,"DIV",{id:!0}),f(ce).forEach(r),ye=y(Tt),F=u(Tt,"DIV",{id:!0}),f(F).forEach(r),Tt.forEach(r),ue=y(W),O=u(W,"DIV",{class:!0});var Sl=f(O);C=u(Sl,"DIV",{class:!0});var Et=f(C);L=u(Et,"DIV",{class:!0});var Nl=f(L);Q=u(Nl,"DIV",{class:!0});var kt=f(Q);H=u(kt,"DIV",{class:!0});var st=f(H);le=u(st,"DIV",{class:!0});var Rl=f(le);se=u(Rl,"DIV",{class:!0});var Hl=f(se);J=u(Hl,"DIV",{class:!0});var Bl=f(J);N=u(Bl,"DIV",{class:!0});var K=f(N);I=u(K,"DIV",{class:!0});var Fl=f(I);D=u(Fl,"H5",{});var Al=f(D);ne=E(Al,"Select Type 1"),Al.forEach(r),Fl.forEach(r),Ve=y(K),G=u(K,"DIV",{class:!0,"data-selected":!0});var ml=f(G);for(let he=0;he<U.length;he+=1)U[he].l(ml);x=u(ml,"BUTTON",{type:!0,title:!0,class:!0});var Ol=f(x);ge=E(Ol,"Reset"),Ol.forEach(r),ml.forEach(r),B=y(K),j=u(K,"DIV",{class:!0});var Cl=f(j);ae=u(Cl,"DIV",{"data-type":!0,title:!0,class:!0}),f(ae).forEach(r),Cl.forEach(r),fe=y(K),be=u(K,"DIV",{class:!0});var Gl=f(be);Ie=u(Gl,"H5",{});var Wl=f(Ie);Y=E(Wl,"Select Type 2"),Wl.forEach(r),Gl.forEach(r),Pe=y(K),ee=u(K,"DIV",{class:!0,"data-selected":!0});var yl=f(ee);for(let he=0;he<$.length;he+=1)$[he].l(yl);te=u(yl,"BUTTON",{type:!0,title:!0,class:!0});var Ll=f(te);Oe=E(Ll,"Reset"),Ll.forEach(r),yl.forEach(r),Ce=y(K),Te=u(K,"DIV",{class:!0});var Ml=f(Te);re=u(Ml,"DIV",{"data-type":!0,title:!0,class:!0}),f(re).forEach(r),Ml.forEach(r),Ge=y(K),We=u(K,"DIV",{class:!0});var jl=f(We);Vt=E(jl,"Or select your lovely Pokémon"),jl.forEach(r),Pt=y(K),Le=u(K,"DIV",{class:!0});var Yl=f(Le);Me=u(Yl,"FORM",{class:!0});var Ul=f(Me);ps(Ee.$$.fragment,Ul),Ul.forEach(r),Yl.forEach(r),K.forEach(r),Bl.forEach(r),Hl.forEach(r),Rl.forEach(r),Nt=y(st),X=u(st,"DIV",{class:!0});var me=f(X);ot=u(me,"H4",{});var $l=f(ot);Rt=E($l,"Weaknesses"),$l.forEach(r),Ht=y(me),ct=u(me,"P",{});var ql=f(ct);Bt=E(ql,"Your Pokemon is weak against:"),ql.forEach(r),Ft=y(me),je=u(me,"TABLE",{class:!0});var zl=f(je);ke=u(zl,"TBODY",{});var at=f(ke);nt=u(at,"TR",{});var Kl=f(nt);Ne=u(Kl,"TH",{class:!0,colspan:!0});var Ql=f(Ne);At=E(Ql,"Factor"),Ql.forEach(r),Kl.forEach(r),Ot=y(at),Z=u(at,"TR",{});var oe=f(Z);Re=u(oe,"TH",{class:!0});var bl=f(Re);Ye=u(bl,"SPAN",{class:!0});var Jl=f(Ye);Ct=E(Jl,"0×"),Jl.forEach(r),Ue=u(bl,"SPAN",{class:!0});var Xl=f(Ue);Gt=E(Xl,"Immune"),Xl.forEach(r),bl.forEach(r),Wt=y(oe),$e=u(oe,"TH",{class:!0});var Zl=f($e);Lt=E(Zl,"¼×"),Zl.forEach(r),Mt=y(oe),qe=u(oe,"TH",{class:!0});var xl=f(qe);jt=E(xl,"½×"),xl.forEach(r),Yt=y(oe),ze=u(oe,"TH",{class:!0});var es=f(ze);Ut=E(es,"1×"),es.forEach(r),$t=y(oe),Ke=u(oe,"TH",{class:!0});var ts=f(Ke);qt=E(ts,"2×"),ts.forEach(r),zt=y(oe),Qe=u(oe,"TH",{class:!0});var ls=f(Qe);Kt=E(ls,"4×"),ls.forEach(r),oe.forEach(r),Qt=y(at),Je=u(at,"TR",{});var ss=f(Je);ie.l(ss),ss.forEach(r),at.forEach(r),zl.forEach(r),Jt=y(me),He=u(me,"H4",{});var Tl=f(He);Xt=E(Tl,"Weaknesses with new Tera Type"),q&&q.l(Tl),Tl.forEach(r),Zt=y(me),de.l(me),me.forEach(r),xt=y(st),_e=u(st,"DIV",{class:!0});var rt=f(_e);it=u(rt,"H4",{});var as=f(it);el=E(as,"Best Tera Type Results"),as.forEach(r),tl=y(rt),dt=u(rt,"P",{});var rs=f(dt);ll=E(rs,"The best Tera Types for your Pokemon are:"),rs.forEach(r),sl=y(rt),Xe=u(rt,"DIV",{class:!0});var os=f(Xe);Ze=u(os,"TABLE",{class:!0});var cs=f(Ze);De=u(cs,"TBODY",{});var gt=f(De);Be=u(gt,"TR",{});var It=f(Be);xe=u(It,"TH",{class:!0});var ns=f(xe);al=E(ns,"Score*"),ns.forEach(r),rl=y(It),ht=u(It,"TH",{});var is=f(ht);ol=E(is,"Tera Types"),is.forEach(r),It.forEach(r),cl=y(gt);for(let he=0;he<z.length;he+=1)z[he].l(gt);gt.forEach(r),cs.forEach(r),os.forEach(r),rt.forEach(r),st.forEach(r),nl=y(kt),ut=u(kt,"DIV",{class:!0}),f(ut).forEach(r),kt.forEach(r),Nl.forEach(r),il=y(Et),ft=u(Et,"P",{});var ds=f(ft);pe=u(ds,"SMALL",{});var Ae=f(pe);dl=E(Ae,"*The score is calculated from the super effectiveness + resistance of the new tera type against your weaknesses."),hl=u(Ae,"BR",{}),_t=u(Ae,"B",{});var hs=f(_t);ul=E(hs,"Example:"),hs.forEach(r),fl=E(Ae," First your Fuecoco is weak against Fire, Ground and Rock. The best Tera Type would be "),Fe=u(Ae,"DIV",{"data-type":!0,class:!0});var us=f(Fe);pt=u(us,"SPAN",{});var fs=f(pt);_l=E(fs,"Grass"),fs.forEach(r),us.forEach(r),pl=E(Ae," with a score of 10. Because Grass is super effective against Water (2), Ground (2), Rock (2). So the score score is 6 + New Resistance against Water(2) and Ground (2). Together it's a score of 10."),Ae.forEach(r),ds.forEach(r),Et.forEach(r),Sl.forEach(r),W.forEach(r),g.forEach(r),A.forEach(r),this.h()},h(){document.title="Terastal Calculator - Best Tera Type Counter",d(s,"id","tera-type-calcultator"),d(s,"class","divider"),d(v,"class","jumbotron-heading"),d(k,"class","lead"),d(ce,"id","nn_lb1"),d(F,"id","nn_mobile_lb2"),d(S,"class","lb-wrapper"),d(I,"class","col-12 sm-12 col-lg-12 px-0"),d(x,"type","button"),d(x,"title","Reset Type 1"),d(x,"class","reset"),d(G,"class","col-12 sm-12 col-lg-10 px-0"),d(G,"data-selected",M=!!i[1]),d(ae,"data-type",i[1]),d(ae,"title",i[1]),d(ae,"class","selected-type"),d(j,"class","col-12 sm-12 col-lg-2 px-0"),d(be,"class","col-12 sm-12 col-lg-12 px-0 pt-3"),d(te,"type","button"),d(te,"title","Reset Type 2"),d(te,"class","reset"),d(ee,"class","col-12 sm-12 col-lg-10 px-0"),d(ee,"data-selected",Se=!!i[2]),d(re,"data-type",i[2]),d(re,"title",i[2]),d(re,"class","selected-type"),d(Te,"class","col-12 sm-12 col-lg-2 px-0"),d(We,"class","col-12 sm-12 col-lg-12 px-0 pt-3"),d(Me,"class","pokemon-search-form"),d(Le,"class","col-12 px-0"),d(N,"class","row "),d(J,"class","col-12 px-0"),d(se,"class","row"),d(le,"class","col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"),d(Ne,"class","text-center"),d(Ne,"colspan","6"),d(Ye,"class","d-md-none"),d(Ue,"class","d-none d-md-block"),d(Re,"class","text-center"),d($e,"class","text-center"),d(qe,"class","text-center"),d(ze,"class","text-center"),d(Ke,"class","text-center"),d(Qe,"class","text-center"),d(je,"class","table table-bordered table-sm"),d(X,"class","col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 "),d(xe,"class","text-center"),d(Ze,"class","table table-bordered table-sm"),d(Xe,"class","d-flex justify-content-between align-items-center"),d(_e,"class","col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 "),d(H,"class","row"),d(ut,"class","raid-card-background-2"),d(Q,"class","raid-card-inner"),d(L,"class","raid-card"),d(Fe,"data-type","Grass"),d(Fe,"class","type type__small"),d(C,"class","col-12 px-0"),d(O,"class","row px-0"),d(o,"class","col-12"),d(a,"class","row px-0"),d(n,"class","container py-3 tera-type-calcultator")},m(_,P){vs(e,document.head,null),R(_,c,P),R(_,s,P),R(_,l,P),R(_,n,P),t(n,a),t(a,o),t(o,v),t(v,V),t(o,p),t(o,k),t(k,b),t(o,w),t(o,S),t(S,ce),t(S,ye),t(S,F),t(o,ue),t(o,O),t(O,C),t(C,L),t(L,Q),t(Q,H),t(H,le),t(le,se),t(se,J),t(J,N),t(N,I),t(I,D),t(D,ne),t(N,Ve),t(N,G);for(let A=0;A<U.length;A+=1)U[A].m(G,null);t(G,x),t(x,ge),t(N,B),t(N,j),t(j,ae),t(N,fe),t(N,be),t(be,Ie),t(Ie,Y),t(N,Pe),t(N,ee);for(let A=0;A<$.length;A+=1)$[A].m(ee,null);t(ee,te),t(te,Oe),t(N,Ce),t(N,Te),t(Te,re),t(N,Ge),t(N,We),t(We,Vt),t(N,Pt),t(N,Le),t(Le,Me),vs(Ee,Me,null),t(H,Nt),t(H,X),t(X,ot),t(ot,Rt),t(X,Ht),t(X,ct),t(ct,Bt),t(X,Ft),t(X,je),t(je,ke),t(ke,nt),t(nt,Ne),t(Ne,At),t(ke,Ot),t(ke,Z),t(Z,Re),t(Re,Ye),t(Ye,Ct),t(Re,Ue),t(Ue,Gt),t(Z,Wt),t(Z,$e),t($e,Lt),t(Z,Mt),t(Z,qe),t(qe,jt),t(Z,Yt),t(Z,ze),t(ze,Ut),t(Z,$t),t(Z,Ke),t(Ke,qt),t(Z,zt),t(Z,Qe),t(Qe,Kt),t(ke,Qt),t(ke,Je),ie.m(Je,null),t(X,Jt),t(X,He),t(He,Xt),q&&q.m(He,null),t(X,Zt),de.m(X,null),t(H,xt),t(H,_e),t(_e,it),t(it,el),t(_e,tl),t(_e,dt),t(dt,ll),t(_e,sl),t(_e,Xe),t(Xe,Ze),t(Ze,De),t(De,Be),t(Be,xe),t(xe,al),t(Be,rl),t(Be,ht),t(ht,ol),t(De,cl);for(let A=0;A<z.length;A+=1)z[A].m(De,null);t(Q,nl),t(Q,ut),t(C,il),t(C,ft),t(ft,pe),t(pe,dl),t(pe,hl),t(pe,_t),t(_t,ul),t(pe,fl),t(pe,Fe),t(Fe,pt),t(pt,_l),t(pe,pl),ve=!0,vl||(gl=[vt(x,"click",i[11]),vt(te,"click",i[12])],vl=!0)},p(_,P){if(P[0]&770){et=_[8];let g;for(g=0;g<et.length;g+=1){const W=Ps(_,et,g);U[g]?U[g].p(W,P):(U[g]=Ss(W),U[g].c(),U[g].m(G,x))}for(;g<U.length;g+=1)U[g].d(1);U.length=et.length}if((!ve||P[0]&2&&M!==(M=!!_[1]))&&d(G,"data-selected",M),(!ve||P[0]&2)&&d(ae,"data-type",_[1]),(!ve||P[0]&2)&&d(ae,"title",_[1]),P[0]&1286){tt=_[8];let g;for(g=0;g<tt.length;g+=1){const W=Vs(_,tt,g);$[g]?$[g].p(W,P):($[g]=Ns(W),$[g].c(),$[g].m(ee,te))}for(;g<$.length;g+=1)$[g].d(1);$.length=tt.length}(!ve||P[0]&4&&Se!==(Se=!!_[2]))&&d(ee,"data-selected",Se),(!ve||P[0]&4)&&d(re,"data-type",_[2]),(!ve||P[0]&4)&&d(re,"title",_[2]);const A={};if(P[1]&34304&&(A.$$scope={dirty:P,ctx:_}),!St&&P[0]&1&&(St=!0,A.selectedItem=_[0],$s(()=>St=!1)),Ee.$set(A),yt===(yt=Dl(_))&&ie?ie.p(_,P):(ie.d(1),ie=yt(_),ie&&(ie.c(),ie.m(Je,null))),_[6]?q?q.p(_,P):(q=Bs(_),q.c(),q.m(He,null)):q&&(q.d(1),q=null),bt===(bt=wl(_))&&de?de.p(_,P):(de.d(1),de=bt(_),de&&(de.c(),de.m(X,null))),P[0]&16416){lt=_[5];let g;for(g=0;g<lt.length;g+=1){const W=Es(_,lt,g);z[g]?z[g].p(W,P):(z[g]=Cs(W),z[g].c(),z[g].m(De,null))}for(;g<z.length;g+=1)z[g].d(1);z.length=lt.length}},i(_){ve||(ms(e.$$.fragment,_),ms(Ee.$$.fragment,_),ve=!0)},o(_){ys(e.$$.fragment,_),ys(Ee.$$.fragment,_),ve=!1},d(_){bs(e),_&&r(c),_&&r(s),_&&r(l),_&&r(n),we(U,_),we($,_),bs(Ee),ie.d(),q&&q.d(),de.d(),we(z,_),vl=!1,qs(gl)}}}function na(i){return i.en+" "+i.de+" "+i.fr}function ia(i,e,c){let s,l=Js,n,a;const o={0:[],"0.25":[],"0.5":[],1:[],2:[],4:[]},v={0:[],"0.25":[],"0.5":[],1:[],2:[],4:[]},V=Object.keys(Zs);zs(async()=>{S(),O()});function p(I,D){D===a&&w(),c(1,n=D),S(),O(),H(),F(),El("tera_type_calculator","type_1",D)}function k(I,D){D!==n&&(c(2,a=D),S(),O(),H(),F(),El("tera_type_calculator","type_2",D))}function b(){c(1,n=void 0),S(),O(),H(),F()}function w(){c(2,a=void 0),S(),O(),H(),F()}function S(){if(ye(),!n||!n&&!a)return;const I=Ts(n,a);Object.keys(I).forEach(D=>{const ne=I[D].toString();o[ne].push(D)})}function ce(){if(F(),!L)return;const I=Ts(L);Object.keys(I).forEach(D=>{const ne=I[D].toString();v[ne].push(D)})}function ye(){Object.keys(o).forEach(I=>{c(3,o[I]=[],o)})}function F(){Object.keys(v).forEach(I=>{c(4,v[I]=[],v)})}let ue=[];function O(){n&&c(5,ue=Xs(n,a))}function C(I){b(),w(),El("tera_type_calculator","select_pokemon",I?I.en:"empty"),I&&(c(1,n=I.types[0]),c(2,a=I.types[1]),S(),O())}let L;function Q(I,D){c(6,L=D),ce()}function H(){c(6,L=void 0)}const le=(I,D)=>p(D,I),se=(I,D)=>k(D,I);function J(I){s=I,c(0,s)}return[s,n,a,o,v,ue,L,l,V,p,k,b,w,C,Q,le,se,J,(I,D)=>Q(D,I)]}class _a extends Ws{constructor(e){super(),Ls(this,e,ia,ca,Ms,{},null,[-1,-1])}}export{_a as default};