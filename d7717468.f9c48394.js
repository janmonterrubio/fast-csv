(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{127:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return o})),n.d(e,"default",(function(){return u}));var a=n(2),r=n(6),b=(n(0),n(136)),c={title:"Benchmarks"},l={id:"parsing/benchmark",isDocsHomePage:!1,title:"Benchmarks",description:"Source in github",source:"@site/docs/parsing/benchmark.md",permalink:"/fast-csv/docs/parsing/benchmark",editUrl:"https://github.com/C2FO/fast-csv/edit/master/documentation/docs/parsing/benchmark.md",sidebar:"docs",previous:{title:"Examples",permalink:"/fast-csv/docs/parsing/examples"},next:{title:"Getting Started",permalink:"/fast-csv/docs/formatting/getting-started"}},o=[{value:"Quoted",id:"quoted",children:[]},{value:"Non-quoted",id:"non-quoted",children:[]}],i={rightToc:o};function u(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/C2FO/fast-csv/tree/master/examples/benchmark"}),"Source in github")),Object(b.b)("h2",{id:"quoted"},"Quoted"),Object(b.b)("p",null,"A csv with quoted columns. "),Object(b.b)("p",null,"This is benchmark is important because quoted columns require additional logic to parse."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Row Count"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"No. Runs"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Avg"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nonquoted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"15ms")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nonquoted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"62ms")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nonquoted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"20000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"102.2ms")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nonquoted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"50000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"259ms")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nonquoted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"100000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"513ms")))),Object(b.b)("h2",{id:"non-quoted"},"Non-quoted"),Object(b.b)("p",null,"A csv without quoted columns. "),Object(b.b)("p",null,"Non-quoted fields require less logic to be parsed, and should be faster."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Row Count"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"No. Runs"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Avg"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"quoted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10.8ms")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"quoted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"70.8ms")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"quoted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"20000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"144.2ms")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"quoted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"50000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"356.6ms")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"quoted"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"100000"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"712.2ms")))))}u.isMDXComponent=!0},136:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},b=Object.keys(t);for(a=0;a<b.length;a++)n=b[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(a=0;a<b.length;a++)n=b[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=r.a.createContext({}),u=function(t){var e=r.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},O=function(t){var e=u(t.components);return r.a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},j=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,b=t.originalType,c=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),O=u(n),j=a,m=O["".concat(c,".").concat(j)]||O[j]||p[j]||b;return n?r.a.createElement(m,l(l({ref:e},i),{},{components:n})):r.a.createElement(m,l({ref:e},i))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var b=n.length,c=new Array(b);c[0]=j;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:a,c[1]=l;for(var i=2;i<b;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);