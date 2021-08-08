(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(31),s=n.n(a),o=n(34),i=n(16),u=n(8),l=n.n(u),d=n(12),j=n(11),b=n(2),h=n(1),f=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(h.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};f.defaultProps={color:"steelblue"};var p=f,O=function(e){var t=e.title,n=e.onAdd,r=e.showAddTask,c=Object(b.e)();return console.log(c),Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("h1",{children:["Task ",t]}),"/"===c.pathname&&Object(h.jsx)(p,{onClick:n,color:r?"#003300":"steelblue",text:r?"Close":"Add"})]})},x=n(33),k=function(e){var t=e.task,n=e.deleteTask,r=e.toggleReminder;return Object(h.jsxs)("div",{className:t.reminder?"task reminder":"task",onDoubleClick:function(){return r(t.id)},children:[Object(h.jsxs)("h3",{children:[t.text," ",Object(h.jsx)(x.a,{onClick:function(){return n(t)},style:{color:"#62757f",cursor:"pointer"}})]}),Object(h.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.deleteTask,r=e.toggleReminder;return Object(h.jsx)(h.Fragment,{children:t.map((function(e,t){return Object(h.jsx)(k,{toggleReminder:r,deleteTask:n,task:e},t)}))})},v=n(9),g=function(e){var t=e.addTask,n=Object(r.useState)(""),c=Object(j.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(j.a)(o,2),u=i[0],l=i[1],d=Object(r.useState)(!1),b=Object(j.a)(d,2),f=b[0],p=b[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:f}),s(""),l(""),p(!1)):alert("Please add a task")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Day & Time"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{children:"Set Reminder"}),Object(h.jsx)("input",{type:"checkbox",checked:!!f,value:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(h.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},y=n(13),T=n.n(y),w=function(){return Object(h.jsxs)("footer",{children:[Object(h.jsx)("p",{children:"CopyRight & copy : 2021"}),Object(h.jsx)(v.b,{to:"/about",children:"About"})]})},C=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Version 1.0.0 by Mark"}),Object(h.jsx)(v.b,{to:"/",children:"Go Back"})]})};var S=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),u=s[0],f=s[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("http://localhost:5000/tasks");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.delete("http://localhost:5000/tasks/".concat(t.id));case 2:n=u.filter((function(e){return e.id!==t.id})),f(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,r=n.data,e.next=6,T.a.put("http://localhost:5000/tasks/".concat(t),Object(i.a)(Object(i.a)({},r),{},{reminder:!r.reminder}));case 6:f(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:!e.reminder}):e})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post("http://localhost:5000/tasks",t);case 2:n=e.sent,console.log(n),f([].concat(Object(o.a)(u),[n.data]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(v.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{title:"hello",onAdd:function(){return c(!n)},showAddTask:n}),n&&Object(h.jsx)(g,{addTask:y}),Object(h.jsx)(b.a,{exact:!0,path:"/",render:function(e){return Object(h.jsx)(h.Fragment,{children:u.length>0?Object(h.jsx)(m,{toggleReminder:k,deleteTask:x,tasks:u}):"add tasks"})}}),Object(h.jsx)(b.a,{path:"/about",component:C}),Object(h.jsx)(w,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(64);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),N()}},[[65,1,2]]]);
//# sourceMappingURL=main.23ca62f6.chunk.js.map