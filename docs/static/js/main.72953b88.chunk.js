(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{86:function(e,t,n){"use strict";n.r(t);var c=n(109),r=n(0),a=n(62),i=n.n(a),j=n(110),s=n(66),u=n(5),l=n(63),o=r.createContext(null),b=r.createContext(null),d=n(3),m=Object(l.a)((function(e,t){switch(t.type){case"commitFormValue":e.formValue=t.value;break;default:return e}})),h=function(e){var t=e.children,n=r.useReducer(m,{formValue:{peSize:"",amount:""}}),c=Object(u.a)(n,2),a=c[0],i=function(e){return{saveFormValue:function(t){e({type:"commitFormValue",value:t})},clearFormValue:function(){e({type:"commitFormValue",value:{peSize:"",amount:""}})}}}(c[1]);return Object(d.jsx)(o.Provider,{value:a,children:Object(d.jsx)(b.Provider,{value:i,children:t})})},O=n(108),x=n(111),p=n(97),f=n(98),g=n(99),v=function(e){var t=e.item;return Object(d.jsxs)(p.g,{children:[Object(d.jsxs)(p.d,{children:[t.peSize,"\u53f7"]}),Object(d.jsxs)(p.d,{isNumeric:!0,children:[t.amount,"m"]})]})},S=n(65),z=function(){var e=Object(r.useContext)(o).formValue,t=function(e){var t=e.peSize,n=e.amount;return t&&n?new S.PeLineAmountCalculator({peSize:t,amount:n}).run():[]}({peSize:e.peSize,amount:e.amount});return 0===t.length?null:Object(d.jsxs)(p.a,{variant:"simple",children:[Object(d.jsx)(p.f,{children:Object(d.jsxs)(p.g,{children:[Object(d.jsx)(p.e,{children:"\u53f7\u6570"}),Object(d.jsx)(p.e,{isNumeric:!0,children:"\u7cf8\u5dfb\u91cf(m)"})]})}),Object(d.jsx)(p.c,{children:t.map((function(e){return Object(d.jsx)(v,{item:e},e.peSize)}))}),Object(d.jsxs)(p.b,{children:["\u8a08\u7b97\u7d50\u679c\u306f",Object(d.jsx)(f.a,{color:"teal.400",href:"http://www.jaftma.or.jp/standard/",target:"_blank",rel:"noopener noreferrer",children:"JAFTMA\uff08\u65e5\u672c\u91e3\u7528\u54c1\u5de5\u696d\u4f1a\uff09"}),"\u306b\u3088\u308bPE\u7cf8\u306e\u592a\u3055\u6a19\u6e96\u898f\u683c",Object(d.jsx)(g.a,{children:"1\u53f7=200d(\u30c7\u30cb\u30fc\u30eb)"}),"\u3092\u524d\u63d0\u3068\u3057\u305f\u53c2\u8003\u5024\u306b\u306a\u308a\u307e\u3059\u3002"]})]})},C=n(2),w=n(36),V=n(11),y=n(100),F=n(37),k=n(103),A=n(112),P=n(70),E=function(){var e=Object(r.useContext)(b).saveFormValue,t=Object(r.useState)({peSize:"",amount:""}),n=Object(u.a)(t,2),c=n[0],a=n[1],i=function(e){a(Object(w.a)(Object(w.a)({},c),{},Object(C.a)({},e.currentTarget.name,e.currentTarget.value)))};return Object(d.jsx)(V.a.form,{onSubmit:function(t){t.preventDefault(),e(c)},children:Object(d.jsxs)(x.b,{spacing:4,children:[Object(d.jsx)(y.a,{children:"\u304a\u624b\u6301\u3061\u306e\u30ea\u30fc\u30eb\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308bPE\u30e9\u30a4\u30f3\u306e\u7cf8\u5dfb\u91cf\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(d.jsxs)(F.a,{id:"peSize",isRequired:!0,children:[Object(d.jsx)(k.a,{children:"\u53f7\u6570"}),Object(d.jsx)(A.a,{name:"peSize",type:"text",inputmode:"numeric",placeholder:"e.g. 0.8",value:c.peSize,onChange:i})]}),Object(d.jsxs)(F.a,{id:"amount",isRequired:!0,children:[Object(d.jsx)(k.a,{children:"\u7cf8\u5dfb\u91cf(m)"}),Object(d.jsx)(A.a,{name:"amount",type:"text",inputmode:"numeric",pattern:"\\d*",placeholder:"e.g. 200",value:c.amount,onChange:i})]}),Object(d.jsx)(P.a,{type:"submit",children:"\u8a08\u7b97"})]})})},R=n(105),T=n(106),J=n(107),M=n(89),q=n(104),L=n(55),N=function(e){var t=Object(M.b)().toggleColorMode,n=Object(M.c)("dark","light"),c=Object(M.c)(L.a,L.b);return Object(d.jsx)(q.a,Object(w.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(d.jsx)(c,{}),"aria-label":"Switch to ".concat(n," mode")},e))},B=function(){return Object(d.jsxs)(R.a,{h:"100%",justify:"center",align:"center",children:[Object(d.jsx)(T.a,{as:"h1",size:"md",isTruncated:!0,children:"PE\u30e9\u30a4\u30f3\u7cf8\u5dfb\u91cf\u8a08\u7b97\u30c4\u30fc\u30eb"}),Object(d.jsx)(J.a,{}),Object(d.jsx)(N,{})]})},D=function(){return Object(d.jsxs)(O.a,{minH:"100vh",templateRows:"72px 1fr",templateColumns:{base:"1fr",md:"1fr 2fr 1fr"},templateAreas:{base:'"header"               "main"',md:'"header      header header"             "left-space  main   right-space"'},children:[Object(d.jsx)(O.b,{gridArea:"header",margin:"4",children:Object(d.jsx)(B,{})}),Object(d.jsx)(O.b,{gridArea:"main",margin:"4",children:Object(d.jsxs)(x.a,{spacing:6,children:[Object(d.jsx)(E,{}),Object(d.jsx)(z,{})]})})]})},H=function(){return Object(d.jsx)(j.a,{theme:s.theme,children:Object(d.jsx)(h,{children:Object(d.jsx)(D,{})})})};i.a.render(Object(d.jsxs)(r.StrictMode,{children:[Object(d.jsx)(c.a,{}),Object(d.jsx)(H,{})]}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.72953b88.chunk.js.map