(this["webpackJsonptodo-intro-react"]=this["webpackJsonptodo-intro-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=n(6),u=n(1);var i=r.a.createContext();function d(e){var t=function(e,t){var n=r.a.useState(!1),a=Object(u.a)(n,2),o=a[0],c=a[1],l=r.a.useState(!0),i=Object(u.a)(l,2),d=i[0],m=i[1],s=r.a.useState(t),f=Object(u.a)(s,2),p=f[0],E=f[1];return r.a.useEffect((function(){setTimeout((function(){try{var n,a=localStorage.getItem(e);a?n=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),n=t),E(n),m(!1)}catch(o){c(o)}}),1e3)})),{item:p,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),E(t)}catch(o){c(o)}},loading:d,error:o}}("TODOS_V1",[]),n=t.item,a=t.saveItem,o=t.loading,c=t.error,d=r.a.useState(""),m=Object(u.a)(d,2),s=m[0],f=m[1],p=r.a.useState(!1),E=Object(u.a)(p,2),h=E[0],v=E[1],x=n.filter((function(e){return!!e.completed})).length,g=n.length,b=[];b=!s.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=s.toLowerCase();return t.includes(n)}));return r.a.createElement(i.Provider,{value:{loading:o,error:c,totalTodos:g,completedTodos:x,searchValue:s,setSearchValue:f,serchedTodos:b,addTodo:function(e){var t=Object(l.a)(n);t.push({text:e,completed:!1}),a(t)},completeTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(l.a)(n);r[t].completed=!0,a(r)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(l.a)(n);r.splice(t,1),a(r)},openModal:h,setOpenModal:v}},e.children)}n(14);function m(){var e=r.a.useContext(i),t=e.totalTodos,n=e.completedTodos;return r.a.createElement("h2",{className:"todocounter"},"Has completado ",n," de ",t," TODOs")}n(15);function s(){var e=r.a.useContext(i),t=e.searchValue,n=e.setSearchValue;return r.a.createElement("input",{className:"input",placeholder:"Cebolla",value:t,onChange:function(e){n(e.target.value)}})}n(16);var f=n(5);function p(e){return r.a.createElement("li",{className:"todo-list"},r.a.createElement("span",{onClick:e.onComplete},r.a.createElement(f.a,{className:"todo-list__check ".concat(e.completed&&"todo-list__checked--active")})),r.a.createElement("p",{className:"todo-list__text ".concat(e.completed&&"todo-list__text--active")},e.input),r.a.createElement("span",{onClick:e.onDelete},r.a.createElement(f.b,{className:"todo-list__delete"})))}n(17);function E(e){return r.a.createElement("button",{className:"button",onClick:function(){e.setOpenModal((function(e){return!e}))}},"+")}n(18);function h(e){return r.a.createElement("ul",{className:"item"},e.children)}n(19);function v(e){var t=e.children;return c.a.createPortal(r.a.createElement("div",{className:"modal"},t),document.getElementById("modal"))}n(20);function x(){var e=r.a.useState(""),t=Object(u.a)(e,2),n=t[0],a=t[1],o=r.a.useContext(i),c=o.addTodo,l=o.setOpenModal;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(n),l(!1)}},r.a.createElement("label",null,"A\xf1adir nuevo Todo"),r.a.createElement("textarea",{placeholder:"Escribe un nuevo Todo",value:n,onChange:function(e){a(e.target.value)}}),r.a.createElement("div",{className:"modal-buttons"},r.a.createElement("button",{type:"submit"},"A\xf1adir"),r.a.createElement("button",{type:"button",onClick:function(){l(!1)}},"Cancelar")))}var g=n(8),b=function(e){return r.a.createElement(g.a,Object.assign({speed:2,width:400,height:150,viewBox:"0 0 400 150",backgroundColor:"#c2c2c2",foregroundColor:"#ecebeb"},e),r.a.createElement("circle",{cx:"10",cy:"20",r:"8"}),r.a.createElement("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),r.a.createElement("circle",{cx:"10",cy:"50",r:"8"}),r.a.createElement("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),r.a.createElement("circle",{cx:"10",cy:"80",r:"8"}),r.a.createElement("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),r.a.createElement("circle",{cx:"10",cy:"110",r:"8"}),r.a.createElement("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"}))};function O(){var e=r.a.useContext(i),t=e.error,n=e.loading,a=e.serchedTodos,o=e.completeTodos,c=e.deleteTodo,l=e.openModal,u=e.setOpenModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(s,null),r.a.createElement(h,null,t&&r.a.createElement("p",null,"Hubo un error"),n&&r.a.createElement(b,null),!n&&!a.length&&r.a.createElement("p",null,"Crea tu primer TODO!"),a.map((function(e){return r.a.createElement(p,{input:e.text,key:e.text,completed:e.completed,onComplete:function(){return o(e.text)},onDelete:function(){return c(e.text)}})}))),!!l&&r.a.createElement(v,null,r.a.createElement(x,null)),r.a.createElement(E,{setOpenModal:u,openModal:l}))}var y=function(){return r.a.createElement(d,null,r.a.createElement(O,null))};c.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.bbb71b27.chunk.js.map