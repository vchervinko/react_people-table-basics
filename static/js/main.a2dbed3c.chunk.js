(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(5),r=(n(19),n(20),n(21),n(2)),s=n(1),j=n(6),i=n.n(j),o=n(0),l=function(e){var t=e.to,n=e.title;return Object(o.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:n})},b=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(l,{to:"/",title:"Home"}),Object(o.jsx)(l,{to:"people",title:"PeoplePage"})]})})})},d=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},h=n(4),u=function(e){var t=e.person,n=t.slug,c=t.name,r=t.sex;return Object(o.jsx)(a.b,{to:"/people/".concat(n),className:i()({"has-text-danger":"f"===r}),children:c})},O=function(e){var t=e.person,n=e.selectedPersonSlug===t.slug;return Object(o.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":n}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(u,{person:t})}),Object(o.jsx)("td",{children:t.sex}),Object(o.jsx)("td",{children:t.born}),Object(o.jsx)("td",{children:t.died}),Object(o.jsx)("td",{children:t.mother?Object(o.jsx)(u,{person:t.mother}):t.motherName||"-"}),Object(o.jsx)("td",{children:t.father?Object(o.jsx)(u,{person:t.father}):t.fatherName||"-"})]})},x=function(e){var t=e.people,n=Object(r.h)().slug,c=void 0===n?"":n;return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:["Name","Sex","Born","Died","Mother","Father"].map((function(e){return Object(o.jsx)("th",{children:e},e)}))})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsx)(O,{person:e,selectedPersonSlug:c},e.slug)}))})]})};function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}n(23);var m=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},f=n(8),v=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),r=Object(h.a)(a,2),j=r[0],i=r[1],l=Object(s.useState)(!1),b=Object(h.a)(l,2),d=b[0],u=b[1];Object(s.useEffect)((function(){p().then((function(e){return c(e)})).catch((function(){return u(!0)})).finally((function(){return i(!0)}))}),[]);var O=j&&d,v=j&&!d&&0===n.length,g=j&&!d&&n.length>0,N=function(e){return e.map((function(t){var n=e.find((function(e){return e.name===t.motherName})),c=e.find((function(e){return e.name===t.fatherName}));return Object(f.a)(Object(f.a)({},t),{},{mother:n,father:c})}))}(n);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[!j&&Object(o.jsx)(m,{}),O&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),v&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),g&&Object(o.jsx)(x,{people:N})]})})]})},g=function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})},N=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)(d,{})}),Object(o.jsx)(r.b,{path:"home",element:Object(o.jsx)(r.a,{to:"/"})}),Object(o.jsxs)(r.b,{path:"people",children:[Object(o.jsx)(r.b,{index:!0,element:Object(o.jsx)(v,{})}),Object(o.jsx)(r.b,{path:":slug",element:Object(o.jsx)(v,{})})]}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)(g,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(N,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a2dbed3c.chunk.js.map