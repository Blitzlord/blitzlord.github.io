import{S as us,i as hs,s as fs,J as _s,K as ps,a as b,k as i,q as T,w as vs,L as ms,h as s,c as g,l as u,m as h,r as k,x as ys,n as l,b as L,E as e,y as bs,M as st,N as gs,f as Es,t as Ts,O as Oe,z as ks,Z as Is,o as Ds,B as ds,p as Jl,u as al,e as Zl}from"../../../chunks/index-61c90870.js";import{S as Vs,p as ws,s as sl,g as Ps,b as Rs}from"../../../chunks/sendEvent-44ed129f.js";import{T as Ss}from"../../../chunks/interfaces-77b05b3b.js";function Ql(a,t,c){const n=a.slice();return n[19]=t[c],n}function Xl(a,t,c){const n=a.slice();return n[22]=t[c],n}function xl(a,t,c){const n=a.slice();return n[25]=t[c],n}function es(a,t,c){const n=a.slice();return n[22]=t[c],n}function ts(a,t,c){const n=a.slice();return n[22]=t[c],n}function ls(a,t,c){const n=a.slice();return n[22]=t[c],n}function ss(a){let t,c,n,o;function _(...r){return a[13](a[22],...r)}return{c(){t=i("button"),this.h()},l(r){t=u(r,"BUTTON",{name:!0,type:!0,title:!0,"data-type":!0,"data-selected":!0,class:!0}),h(t).forEach(s),this.h()},h(){l(t,"name","type1"),l(t,"type","button"),l(t,"title",a[22]),l(t,"data-type",a[22]),l(t,"data-selected",c=a[1]===a[22]),l(t,"class","type type__symbol-big"),t.value=a[22]},m(r,d){L(r,t,d),n||(o=st(t,"click",_),n=!0)},p(r,d){a=r,d[0]&2&&c!==(c=a[1]===a[22])&&l(t,"data-selected",c)},d(r){r&&s(t),n=!1,o()}}}function as(a){let t,c,n,o,_;function r(...d){return a[14](a[22],...d)}return{c(){t=i("button"),this.h()},l(d){t=u(d,"BUTTON",{name:!0,type:!0,title:!0,"data-type":!0,"data-selected":!0,class:!0}),h(t).forEach(s),this.h()},h(){l(t,"name","type2"),l(t,"type","button"),l(t,"title",a[22]),l(t,"data-type",a[22]),l(t,"data-selected",c=a[2]===a[22]),t.disabled=n=a[1]===a[22],l(t,"class","type type__symbol-big"),t.value=a[22]},m(d,p){L(d,t,p),o||(_=st(t,"click",r),o=!0)},p(d,p){a=d,p[0]&4&&c!==(c=a[2]===a[22])&&l(t,"data-selected",c),p[0]&2&&n!==(n=a[1]===a[22])&&(t.disabled=n)},d(d){d&&s(t),o=!1,_()}}}function Ns(a){let t,c,n;return{c(){t=i("div"),c=i("span"),n=T("Loading..."),this.h()},l(o){t=u(o,"DIV",{slot:!0});var _=h(t);c=u(_,"SPAN",{});var r=h(c);n=k(r,"Loading..."),r.forEach(s),_.forEach(s),this.h()},h(){l(t,"slot","loading")},m(o,_){L(o,t,_),e(t,c),e(c,n)},p:ds,d(o){o&&s(t)}}}function Bs(a){let t,c,n,o,_=a[30]+"",r,d,p,I,m,w;return{c(){t=i("div"),c=i("div"),n=b(),o=i("span"),r=b(),d=i("div"),I=b(),m=i("div"),this.h()},l(y){t=u(y,"DIV",{slot:!0});var E=h(t);c=u(E,"DIV",{class:!0,style:!0}),h(c).forEach(s),n=g(E),o=u(E,"SPAN",{class:!0});var R=h(o);R.forEach(s),r=g(E),d=u(E,"DIV",{class:!0,"data-type":!0}),h(d).forEach(s),I=g(E),m=u(E,"DIV",{class:!0,"data-type":!0}),h(m).forEach(s),E.forEach(s),this.h()},h(){l(c,"class","pokemon pokemon__small"),Jl(c,"--pokemon-url","url('/assets/i/"+a[31].id+".min.png')"),l(o,"class","label"),l(d,"class","type type__symbol-autocomplete"),l(d,"data-type",p=a[31].types[0]),l(m,"class","type type__symbol-autocomplete"),l(m,"data-type",w=a[31].types[1]),l(t,"slot","item")},m(y,E){L(y,t,E),e(t,c),e(t,n),e(t,o),o.innerHTML=_,e(t,r),e(t,d),e(t,I),e(t,m)},p(y,E){E[1]&1&&Jl(c,"--pokemon-url","url('/assets/i/"+y[31].id+".min.png')"),E[0]&1073741824&&_!==(_=y[30]+"")&&(o.innerHTML=_),E[1]&1&&p!==(p=y[31].types[0])&&l(d,"data-type",p),E[1]&1&&w!==(w=y[31].types[1])&&l(m,"data-type",w)},d(y){y&&s(t)}}}function Hs(a){let t,c;return{c(){t=i("td"),c=T('"Type 1" not selected.'),this.h()},l(n){t=u(n,"TD",{colspan:!0,class:!0});var o=h(t);c=k(o,'"Type 1" not selected.'),o.forEach(s),this.h()},h(){l(t,"colspan","6"),l(t,"class","text-center error")},m(n,o){L(n,t,o),e(t,c)},p:ds,d(n){n&&s(t)}}}function Cs(a){let t,c=["0","0.25","0.5","1","2","4"],n=[];for(let o=0;o<6;o+=1)n[o]=rs(xl(a,c,o));return{c(){for(let o=0;o<6;o+=1)n[o].c();t=Zl()},l(o){for(let _=0;_<6;_+=1)n[_].l(o);t=Zl()},m(o,_){for(let r=0;r<6;r+=1)n[r].m(o,_);L(o,t,_)},p(o,_){if(_[0]&8){c=["0","0.25","0.5","1","2","4"];let r;for(r=0;r<6;r+=1){const d=xl(o,c,r);n[r]?n[r].p(d,_):(n[r]=rs(d),n[r].c(),n[r].m(t.parentNode,t))}for(;r<6;r+=1)n[r].d(1)}},d(o){Oe(n,o),o&&s(t)}}}function os(a){let t,c,n=a[22]+"",o,_;return{c(){t=i("div"),c=i("span"),o=T(n),this.h()},l(r){t=u(r,"DIV",{class:!0,"data-type":!0});var d=h(t);c=u(d,"SPAN",{});var p=h(c);o=k(p,n),p.forEach(s),d.forEach(s),this.h()},h(){l(t,"class","type type__very-small d-block"),l(t,"data-type",_=a[22])},m(r,d){L(r,t,d),e(t,c),e(c,o)},p(r,d){d[0]&8&&n!==(n=r[22]+"")&&al(o,n),d[0]&8&&_!==(_=r[22])&&l(t,"data-type",_)},d(r){r&&s(t)}}}function rs(a){let t,c,n=a[3][a[25]],o=[];for(let _=0;_<n.length;_+=1)o[_]=os(es(a,n,_));return{c(){t=i("td");for(let _=0;_<o.length;_+=1)o[_].c();c=b()},l(_){t=u(_,"TD",{});var r=h(t);for(let d=0;d<o.length;d+=1)o[d].l(r);c=g(r),r.forEach(s)},m(_,r){L(_,t,r);for(let d=0;d<o.length;d+=1)o[d].m(t,null);e(t,c)},p(_,r){if(r[0]&8){n=_[3][_[25]];let d;for(d=0;d<n.length;d+=1){const p=es(_,n,d);o[d]?o[d].p(p,r):(o[d]=os(p),o[d].c(),o[d].m(t,c))}for(;d<o.length;d+=1)o[d].d(1);o.length=n.length}},d(_){_&&s(t),Oe(o,_)}}}function cs(a){let t,c,n=a[22]+"",o,_,r;return{c(){t=i("div"),c=i("span"),o=T(n),_=b(),this.h()},l(d){t=u(d,"DIV",{class:!0,"data-type":!0});var p=h(t);c=u(p,"SPAN",{});var I=h(c);o=k(I,n),I.forEach(s),_=g(p),p.forEach(s),this.h()},h(){l(t,"class","type type__tera"),l(t,"data-type",r=a[22])},m(d,p){L(d,t,p),e(t,c),e(c,o),e(t,_)},p(d,p){p[0]&16&&n!==(n=d[22]+"")&&al(o,n),p[0]&16&&r!==(r=d[22])&&l(t,"data-type",r)},d(d){d&&s(t)}}}function ns(a){let t,c,n=a[19].score+"",o,_,r,d,p=a[19].types,I=[];for(let m=0;m<p.length;m+=1)I[m]=cs(Xl(a,p,m));return{c(){t=i("tr"),c=i("td"),o=T(n),_=b(),r=i("td");for(let m=0;m<I.length;m+=1)I[m].c();d=b(),this.h()},l(m){t=u(m,"TR",{});var w=h(t);c=u(w,"TD",{class:!0});var y=h(c);o=k(y,n),y.forEach(s),_=g(w),r=u(w,"TD",{});var E=h(r);for(let R=0;R<I.length;R+=1)I[R].l(E);E.forEach(s),d=g(w),w.forEach(s),this.h()},h(){l(c,"class","text-center")},m(m,w){L(m,t,w),e(t,c),e(c,o),e(t,_),e(t,r);for(let y=0;y<I.length;y+=1)I[y].m(r,null);e(t,d)},p(m,w){if(w[0]&16&&n!==(n=m[19].score+"")&&al(o,n),w[0]&16){p=m[19].types;let y;for(y=0;y<p.length;y+=1){const E=Xl(m,p,y);I[y]?I[y].p(E,w):(I[y]=cs(E),I[y].c(),I[y].m(r,null))}for(;y<I.length;y+=1)I[y].d(1);I.length=p.length}},d(m){m&&s(t),Oe(I,m)}}}function Fs(a){let t,c,n,o,_,r,d,p,I,m,w,y,E,R,le,M,B,se,ae,oe,P,V,S,Ae,at,U,Y,ot,Ze,rt,he,X,ct,fe,Le,nt,dt,q,K,it,Qe,ut,_e,x,ht,pe,ft,_t,ve,me,ee,pt,vt,z,We,mt,yt,Me,bt,gt,ye,te,je,ce,Et,Tt,O,ne,be,kt,ge,It,Dt,Ee,Vt,wt,Te,Pt,Rt,ke,St,Nt,Ie,Bt,Ht,De,Ct,Ft,Ve,Gt,J,$e,Ot,At,Ue,Lt,Wt,we,Pe,re,de,Re,Mt,jt,Ye,$t,Ut,Yt,qe,qt,Ke,Z,Kt,zt,ze,Jt,Zt,ie,Je,Qt,Xt,Q,xt,ol,Se=a[6],H=[];for(let f=0;f<Se.length;f+=1)H[f]=ss(ls(a,Se,f));let Ne=a[6],C=[];for(let f=0;f<Ne.length;f+=1)C[f]=as(ts(a,Ne,f));function is(f){a[15](f)}let rl={className:"pokemon-input",dropdownClassName:"pokemon-dropdown",items:a[5],class:"form-control form-control-lg",placeholder:"Search Pokémon...",showClear:"true",labelFieldName:"en",valueFieldName:"en",maxItemsToShowInList:"4",onChange:a[11],keywordsFunction:Gs,$$slots:{item:[Bs,({label:f,item:D})=>({30:f,31:D}),({label:f,item:D})=>[f?1073741824:0,D?1:0]],loading:[Ns]},$$scope:{ctx:a}};a[0]!==void 0&&(rl.selectedItem=a[0]),ee=new Vs({props:rl}),_s.push(()=>ps(ee,"selectedItem",is,a[0]));function cl(f,D){return f[1]?Cs:Hs}let Xe=cl(a),j=Xe(a),Be=a[4],F=[];for(let f=0;f<Be.length;f+=1)F[f]=ns(Ql(a,Be,f));return{c(){t=b(),c=i("div"),n=b(),o=i("div"),_=i("div"),r=i("div"),d=i("h2"),p=T("Tera Type Calculator"),I=b(),m=i("p"),w=T("Find the best Tera Type for your Pokémon to win VGC Battles."),y=b(),E=i("div"),R=i("div"),le=i("div"),M=i("div"),B=i("div"),se=i("div"),ae=i("div"),oe=i("div"),P=i("div"),V=i("div"),S=i("h5"),Ae=T("Select Type 1"),at=b(),U=i("div");for(let f=0;f<H.length;f+=1)H[f].c();Y=i("button"),ot=T("Reset"),rt=b(),he=i("div"),X=i("div"),ct=b(),fe=i("div"),Le=i("h5"),nt=T("Select Type 2"),dt=b(),q=i("div");for(let f=0;f<C.length;f+=1)C[f].c();K=i("button"),it=T("Reset"),ut=b(),_e=i("div"),x=i("div"),ht=b(),pe=i("div"),ft=T("Or select your lovely Pokémon"),_t=b(),ve=i("div"),me=i("form"),vs(ee.$$.fragment),vt=b(),z=i("div"),We=i("h4"),mt=T("Weaknesses"),yt=b(),Me=i("p"),bt=T("Your Pokemon is weak against:"),gt=b(),ye=i("table"),te=i("tbody"),je=i("tr"),ce=i("th"),Et=T("Factor"),Tt=b(),O=i("tr"),ne=i("th"),be=i("span"),kt=T("0×"),ge=i("span"),It=T("Immune"),Dt=b(),Ee=i("th"),Vt=T("¼×"),wt=b(),Te=i("th"),Pt=T("½×"),Rt=b(),ke=i("th"),St=T("1×"),Nt=b(),Ie=i("th"),Bt=T("2×"),Ht=b(),De=i("th"),Ct=T("4×"),Ft=b(),Ve=i("tr"),j.c(),Gt=b(),J=i("div"),$e=i("h4"),Ot=T("Best Tera Type Results"),At=b(),Ue=i("p"),Lt=T("The best Tera Types for your Pokemon are:"),Wt=b(),we=i("div"),Pe=i("table"),re=i("tbody"),de=i("tr"),Re=i("th"),Mt=T("Score*"),jt=b(),Ye=i("th"),$t=T("Tera Types"),Ut=b();for(let f=0;f<F.length;f+=1)F[f].c();Yt=b(),qe=i("div"),qt=b(),Ke=i("p"),Z=i("small"),Kt=T("*The score is calculated from the super effectiveness + resistance of the new tera type against your weaknesses."),zt=i("br"),ze=i("b"),Jt=T("Example:"),Zt=T(" First your Fuecoco is weak against Fire, Ground and Rock. The best Tera Type would be "),ie=i("div"),Je=i("span"),Qt=T("Grass"),Xt=T(" with a score of 10. Because Grass is super effective against Water (2), Ground (2), Rock (2). So the score score is 6 + New Resistance against Water(2) and Ground (2). Together it's a score of 10."),this.h()},l(f){ms("svelte-1e2bt7k",document.head).forEach(s),t=g(f),c=u(f,"DIV",{id:!0,class:!0}),h(c).forEach(s),n=g(f),o=u(f,"DIV",{class:!0});var N=h(o);_=u(N,"DIV",{class:!0});var v=h(_);r=u(v,"DIV",{class:!0});var A=h(r);d=u(A,"H2",{class:!0});var nl=h(d);p=k(nl,"Tera Type Calculator"),nl.forEach(s),I=g(A),m=u(A,"P",{class:!0});var dl=h(m);w=k(dl,"Find the best Tera Type for your Pokémon to win VGC Battles."),dl.forEach(s),y=g(A),E=u(A,"DIV",{class:!0});var il=h(E);R=u(il,"DIV",{class:!0});var xe=h(R);le=u(xe,"DIV",{class:!0});var ul=h(le);M=u(ul,"DIV",{class:!0});var et=h(M);B=u(et,"DIV",{class:!0});var He=h(B);se=u(He,"DIV",{class:!0});var hl=h(se);ae=u(hl,"DIV",{class:!0});var fl=h(ae);oe=u(fl,"DIV",{class:!0});var _l=h(oe);P=u(_l,"DIV",{class:!0});var G=h(P);V=u(G,"DIV",{class:!0});var pl=h(V);S=u(pl,"H5",{});var vl=h(S);Ae=k(vl,"Select Type 1"),vl.forEach(s),pl.forEach(s),at=g(G),U=u(G,"DIV",{class:!0,"data-selected":!0});var el=h(U);for(let $=0;$<H.length;$+=1)H[$].l(el);Y=u(el,"BUTTON",{type:!0,title:!0,class:!0});var ml=h(Y);ot=k(ml,"Reset"),ml.forEach(s),el.forEach(s),rt=g(G),he=u(G,"DIV",{class:!0});var yl=h(he);X=u(yl,"DIV",{"data-type":!0,title:!0,class:!0}),h(X).forEach(s),yl.forEach(s),ct=g(G),fe=u(G,"DIV",{class:!0});var bl=h(fe);Le=u(bl,"H5",{});var gl=h(Le);nt=k(gl,"Select Type 2"),gl.forEach(s),bl.forEach(s),dt=g(G),q=u(G,"DIV",{class:!0,"data-selected":!0});var tl=h(q);for(let $=0;$<C.length;$+=1)C[$].l(tl);K=u(tl,"BUTTON",{type:!0,title:!0,class:!0});var El=h(K);it=k(El,"Reset"),El.forEach(s),tl.forEach(s),ut=g(G),_e=u(G,"DIV",{class:!0});var Tl=h(_e);x=u(Tl,"DIV",{"data-type":!0,title:!0,class:!0}),h(x).forEach(s),Tl.forEach(s),ht=g(G),pe=u(G,"DIV",{class:!0});var kl=h(pe);ft=k(kl,"Or select your lovely Pokémon"),kl.forEach(s),_t=g(G),ve=u(G,"DIV",{class:!0});var Il=h(ve);me=u(Il,"FORM",{class:!0});var Dl=h(me);ys(ee.$$.fragment,Dl),Dl.forEach(s),Il.forEach(s),G.forEach(s),_l.forEach(s),fl.forEach(s),hl.forEach(s),vt=g(He),z=u(He,"DIV",{class:!0});var Ce=h(z);We=u(Ce,"H4",{});var Vl=h(We);mt=k(Vl,"Weaknesses"),Vl.forEach(s),yt=g(Ce),Me=u(Ce,"P",{});var wl=h(Me);bt=k(wl,"Your Pokemon is weak against:"),wl.forEach(s),gt=g(Ce),ye=u(Ce,"TABLE",{class:!0});var Pl=h(ye);te=u(Pl,"TBODY",{});var Fe=h(te);je=u(Fe,"TR",{});var Rl=h(je);ce=u(Rl,"TH",{class:!0,colspan:!0});var Sl=h(ce);Et=k(Sl,"Factor"),Sl.forEach(s),Rl.forEach(s),Tt=g(Fe),O=u(Fe,"TR",{});var W=h(O);ne=u(W,"TH",{class:!0});var ll=h(ne);be=u(ll,"SPAN",{class:!0});var Nl=h(be);kt=k(Nl,"0×"),Nl.forEach(s),ge=u(ll,"SPAN",{class:!0});var Bl=h(ge);It=k(Bl,"Immune"),Bl.forEach(s),ll.forEach(s),Dt=g(W),Ee=u(W,"TH",{class:!0});var Hl=h(Ee);Vt=k(Hl,"¼×"),Hl.forEach(s),wt=g(W),Te=u(W,"TH",{class:!0});var Cl=h(Te);Pt=k(Cl,"½×"),Cl.forEach(s),Rt=g(W),ke=u(W,"TH",{class:!0});var Fl=h(ke);St=k(Fl,"1×"),Fl.forEach(s),Nt=g(W),Ie=u(W,"TH",{class:!0});var Gl=h(Ie);Bt=k(Gl,"2×"),Gl.forEach(s),Ht=g(W),De=u(W,"TH",{class:!0});var Ol=h(De);Ct=k(Ol,"4×"),Ol.forEach(s),W.forEach(s),Ft=g(Fe),Ve=u(Fe,"TR",{});var Al=h(Ve);j.l(Al),Al.forEach(s),Fe.forEach(s),Pl.forEach(s),Ce.forEach(s),Gt=g(He),J=u(He,"DIV",{class:!0});var Ge=h(J);$e=u(Ge,"H4",{});var Ll=h($e);Ot=k(Ll,"Best Tera Type Results"),Ll.forEach(s),At=g(Ge),Ue=u(Ge,"P",{});var Wl=h(Ue);Lt=k(Wl,"The best Tera Types for your Pokemon are:"),Wl.forEach(s),Wt=g(Ge),we=u(Ge,"DIV",{class:!0});var Ml=h(we);Pe=u(Ml,"TABLE",{class:!0});var jl=h(Pe);re=u(jl,"TBODY",{});var tt=h(re);de=u(tt,"TR",{});var lt=h(de);Re=u(lt,"TH",{class:!0});var $l=h(Re);Mt=k($l,"Score*"),$l.forEach(s),jt=g(lt),Ye=u(lt,"TH",{});var Ul=h(Ye);$t=k(Ul,"Tera Types"),Ul.forEach(s),lt.forEach(s),Ut=g(tt);for(let $=0;$<F.length;$+=1)F[$].l(tt);tt.forEach(s),jl.forEach(s),Ml.forEach(s),Ge.forEach(s),He.forEach(s),Yt=g(et),qe=u(et,"DIV",{class:!0}),h(qe).forEach(s),et.forEach(s),ul.forEach(s),qt=g(xe),Ke=u(xe,"P",{});var Yl=h(Ke);Z=u(Yl,"SMALL",{});var ue=h(Z);Kt=k(ue,"*The score is calculated from the super effectiveness + resistance of the new tera type against your weaknesses."),zt=u(ue,"BR",{}),ze=u(ue,"B",{});var ql=h(ze);Jt=k(ql,"Example:"),ql.forEach(s),Zt=k(ue," First your Fuecoco is weak against Fire, Ground and Rock. The best Tera Type would be "),ie=u(ue,"DIV",{"data-type":!0,class:!0});var Kl=h(ie);Je=u(Kl,"SPAN",{});var zl=h(Je);Qt=k(zl,"Grass"),zl.forEach(s),Kl.forEach(s),Xt=k(ue," with a score of 10. Because Grass is super effective against Water (2), Ground (2), Rock (2). So the score score is 6 + New Resistance against Water(2) and Ground (2). Together it's a score of 10."),ue.forEach(s),Yl.forEach(s),xe.forEach(s),il.forEach(s),A.forEach(s),v.forEach(s),N.forEach(s),this.h()},h(){document.title="Terastal - Pokémon Tera Type Counter Calculator",l(c,"id","tera-type-calcultator"),l(c,"class","divider"),l(d,"class","jumbotron-heading"),l(m,"class","lead"),l(V,"class","col-12 sm-12 col-lg-12 px-0"),l(Y,"type","button"),l(Y,"title","Reset Type 1"),l(Y,"class","reset"),l(U,"class","col-12 sm-12 col-lg-10 px-0"),l(U,"data-selected",Ze=!!a[1]),l(X,"data-type",a[1]),l(X,"title",a[1]),l(X,"class","selected-type"),l(he,"class","col-12 sm-12 col-lg-2 px-0"),l(fe,"class","col-12 sm-12 col-lg-12 px-0 pt-3"),l(K,"type","button"),l(K,"title","Reset Type 2"),l(K,"class","reset"),l(q,"class","col-12 sm-12 col-lg-10 px-0"),l(q,"data-selected",Qe=!!a[2]),l(x,"data-type",a[2]),l(x,"title",a[2]),l(x,"class","selected-type"),l(_e,"class","col-12 sm-12 col-lg-2 px-0"),l(pe,"class","col-12 sm-12 col-lg-12 px-0 pt-3"),l(me,"class","pokemon-search-form"),l(ve,"class","col-12 px-0"),l(P,"class","row "),l(oe,"class","col-12 px-0"),l(ae,"class","row"),l(se,"class","col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"),l(ce,"class","text-center"),l(ce,"colspan","6"),l(be,"class","d-md-none"),l(ge,"class","d-none d-md-block"),l(ne,"class","text-center"),l(Ee,"class","text-center"),l(Te,"class","text-center"),l(ke,"class","text-center"),l(Ie,"class","text-center"),l(De,"class","text-center"),l(ye,"class","table table-bordered table-sm bg-white"),l(z,"class","col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 "),l(Re,"class","text-center"),l(Pe,"class","table table-bordered table-sm"),l(we,"class","d-flex justify-content-between align-items-center bg-white"),l(J,"class","col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 "),l(B,"class","row"),l(qe,"class","raid-card-background-2"),l(M,"class","raid-card-inner"),l(le,"class","raid-card"),l(ie,"data-type","Grass"),l(ie,"class","type type__small"),l(R,"class","col-12 px-0"),l(E,"class","row px-0"),l(r,"class","col-12"),l(_,"class","row px-0"),l(o,"class","container py-3 tera-type-calcultator")},m(f,D){L(f,t,D),L(f,c,D),L(f,n,D),L(f,o,D),e(o,_),e(_,r),e(r,d),e(d,p),e(r,I),e(r,m),e(m,w),e(r,y),e(r,E),e(E,R),e(R,le),e(le,M),e(M,B),e(B,se),e(se,ae),e(ae,oe),e(oe,P),e(P,V),e(V,S),e(S,Ae),e(P,at),e(P,U);for(let N=0;N<H.length;N+=1)H[N].m(U,null);e(U,Y),e(Y,ot),e(P,rt),e(P,he),e(he,X),e(P,ct),e(P,fe),e(fe,Le),e(Le,nt),e(P,dt),e(P,q);for(let N=0;N<C.length;N+=1)C[N].m(q,null);e(q,K),e(K,it),e(P,ut),e(P,_e),e(_e,x),e(P,ht),e(P,pe),e(pe,ft),e(P,_t),e(P,ve),e(ve,me),bs(ee,me,null),e(B,vt),e(B,z),e(z,We),e(We,mt),e(z,yt),e(z,Me),e(Me,bt),e(z,gt),e(z,ye),e(ye,te),e(te,je),e(je,ce),e(ce,Et),e(te,Tt),e(te,O),e(O,ne),e(ne,be),e(be,kt),e(ne,ge),e(ge,It),e(O,Dt),e(O,Ee),e(Ee,Vt),e(O,wt),e(O,Te),e(Te,Pt),e(O,Rt),e(O,ke),e(ke,St),e(O,Nt),e(O,Ie),e(Ie,Bt),e(O,Ht),e(O,De),e(De,Ct),e(te,Ft),e(te,Ve),j.m(Ve,null),e(B,Gt),e(B,J),e(J,$e),e($e,Ot),e(J,At),e(J,Ue),e(Ue,Lt),e(J,Wt),e(J,we),e(we,Pe),e(Pe,re),e(re,de),e(de,Re),e(Re,Mt),e(de,jt),e(de,Ye),e(Ye,$t),e(re,Ut);for(let N=0;N<F.length;N+=1)F[N].m(re,null);e(M,Yt),e(M,qe),e(R,qt),e(R,Ke),e(Ke,Z),e(Z,Kt),e(Z,zt),e(Z,ze),e(ze,Jt),e(Z,Zt),e(Z,ie),e(ie,Je),e(Je,Qt),e(Z,Xt),Q=!0,xt||(ol=[st(Y,"click",a[9]),st(K,"click",a[10])],xt=!0)},p(f,D){if(D[0]&194){Se=f[6];let v;for(v=0;v<Se.length;v+=1){const A=ls(f,Se,v);H[v]?H[v].p(A,D):(H[v]=ss(A),H[v].c(),H[v].m(U,Y))}for(;v<H.length;v+=1)H[v].d(1);H.length=Se.length}if((!Q||D[0]&2&&Ze!==(Ze=!!f[1]))&&l(U,"data-selected",Ze),(!Q||D[0]&2)&&l(X,"data-type",f[1]),(!Q||D[0]&2)&&l(X,"title",f[1]),D[0]&326){Ne=f[6];let v;for(v=0;v<Ne.length;v+=1){const A=ts(f,Ne,v);C[v]?C[v].p(A,D):(C[v]=as(A),C[v].c(),C[v].m(q,K))}for(;v<C.length;v+=1)C[v].d(1);C.length=Ne.length}(!Q||D[0]&4&&Qe!==(Qe=!!f[2]))&&l(q,"data-selected",Qe),(!Q||D[0]&4)&&l(x,"data-type",f[2]),(!Q||D[0]&4)&&l(x,"title",f[2]);const N={};if(D[0]&1073741824|D[1]&33&&(N.$$scope={dirty:D,ctx:f}),!pt&&D[0]&1&&(pt=!0,N.selectedItem=f[0],gs(()=>pt=!1)),ee.$set(N),Xe===(Xe=cl(f))&&j?j.p(f,D):(j.d(1),j=Xe(f),j&&(j.c(),j.m(Ve,null))),D[0]&16){Be=f[4];let v;for(v=0;v<Be.length;v+=1){const A=Ql(f,Be,v);F[v]?F[v].p(A,D):(F[v]=ns(A),F[v].c(),F[v].m(re,null))}for(;v<F.length;v+=1)F[v].d(1);F.length=Be.length}},i(f){Q||(Es(ee.$$.fragment,f),Q=!0)},o(f){Ts(ee.$$.fragment,f),Q=!1},d(f){f&&s(t),f&&s(c),f&&s(n),f&&s(o),Oe(H,f),Oe(C,f),ks(ee),j.d(),Oe(F,f),xt=!1,Is(ol)}}}function Gs(a){return a.en+" "+a.de+" "+a.fr}function Os(a,t,c){let o,_=ws,r,d;const p={0:[],"0.25":[],"0.5":[],1:[],2:[],4:[]},I=Object.keys(Ss);Ds(async()=>{R(),B()});function m(V,S){S===d&&E(),c(1,r=S),R(),B(),sl("tera_type_calculator","type_1",S)}function w(V,S){S!==r&&(c(2,d=S),R(),B(),sl("tera_type_calculator","type_2",S))}function y(){c(1,r=void 0),R(),B()}function E(){c(2,d=void 0),R(),B()}function R(){if(le(),!r||!r&&!d)return;const V=Ps(r,d);Object.keys(V).forEach(S=>{const Ae=V[S].toString();p[Ae].push(S)})}function le(){Object.keys(p).forEach(V=>{c(3,p[V]=[],p)})}let M=[];function B(){r&&c(4,M=Rs(r,d))}function se(V){y(),E(),sl("tera_type_calculator","select_pokemon",V?V.en:"empty"),V&&(c(1,r=V.types[0]),c(2,d=V.types[1]),R(),B())}const ae=(V,S)=>m(S,V),oe=(V,S)=>w(S,V);function P(V){o=V,c(0,o)}return[o,r,d,p,M,_,I,m,w,y,E,se,!0,ae,oe,P]}class Ms extends us{constructor(t){super(),hs(this,t,Os,Fs,fs,{prerender:12},null,[-1,-1])}get prerender(){return this.$$.ctx[12]}}export{Ms as default};
