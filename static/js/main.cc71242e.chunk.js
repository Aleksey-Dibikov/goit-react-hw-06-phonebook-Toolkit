(this["webpackJsonpgoit-react-hw-06-phonebook-toolkit"]=this["webpackJsonpgoit-react-hw-06-phonebook-toolkit"]||[]).push([[0],{12:function(t,e,n){t.exports={TaskList:"ContactList_TaskList__3a48x",TaskList_item:"ContactList_TaskList_item__1ICyn",TaskList_button:"ContactList_TaskList_button__3UxPE"}},20:function(t,e,n){t.exports={TaskEditor_input:"Filter_TaskEditor_input__30w08"}},35:function(t,e,n){},36:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a,r=n(0),c=n.n(r),i=n(8),o=n.n(i),s=n(5),u=n(17),b=n(10),d=n(3),l=n(18),j=n.n(l),m=n(4),O=n(19),_=n.n(O),p=n(11),k=n(2),f=n(39),h=Object(d.b)("contact/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(f.a)(),name:e,number:n}}})),x=Object(d.b)("contact/delete"),T=Object(d.b)("contact/filter"),v=Object(d.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(p.a)(a,h,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(p.a)(a,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),C=Object(d.c)("",Object(p.a)({},T,(function(t,e){return e.payload}))),E=Object(k.b)({items:v,filter:C}),g=[].concat(Object(b.a)(Object(d.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),[j.a]),L={key:"root",storage:_.a,blacklist:["filter"]},y=Object(d.a)({reducer:{contacts:Object(m.g)(L,E)},middleware:g,devTools:!1}),A=Object(m.h)(y),N=(n(35),n(36),n(12)),w=n.n(N),F=n(1);var z=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},S=Object(s.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:z(n,a)}}),(function(t){return{onDeleteContact:function(e){return t(x(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(F.jsx)("ul",{className:w.a.TaskList,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(F.jsxs)("li",{className:w.a.TaskList_item,children:[a," : ",r,Object(F.jsx)("button",{className:w.a.TaskList_button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),D=n(15),I=n(6),J=n.n(I);var q=Object(s.b)(null,(function(t){return{onAddContact:function(e){var n=e.name,a=e.number;return t(h({name:n,number:a}))}}}))((function(t){var e=t.onAddContact,n=Object(r.useState)(""),a=Object(D.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(""),s=Object(D.a)(o,2),u=s[0],b=s[1],d=Object(f.a)(),l=Object(f.a)(),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":b(a)}};return Object(F.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:c,number:u}),i(""),b("")},className:J.a.TaskEditor,children:[Object(F.jsx)("label",{id:d,className:J.a.TaskEditor_label,children:Object(F.jsx)("input",{className:J.a.TaskEditor_input,id:d,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432,\r \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.\r \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer,\r Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:j})}),Object(F.jsx)("label",{id:l,className:J.a.TaskEditor_label,children:Object(F.jsx)("input",{className:J.a.TaskEditor_input,id:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:j})}),Object(F.jsx)("button",{className:J.a.TaskEditor_button,type:"submit",children:"Add contact"})]})})),Z=n(20),B=n.n(Z);var M=Object(s.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChangeFilter:function(e){return t(T(e.target.value))}}}))((function(t){var e=t.value,n=t.onChangeFilter;return Object(F.jsxs)("div",{children:[Object(F.jsx)("h3",{children:"Find contacts by name"}),Object(F.jsx)("input",{className:B.a.TaskEditor_input,type:"text",value:e,onChange:n})]})}));var P=function(){return Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(q,{}),Object(F.jsx)("h2",{children:"Contacts"}),Object(F.jsx)(M,{}),Object(F.jsx)(S,{})]})};o.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(s.a,{store:y,children:Object(F.jsx)(u.a,{loading:"please wait",persistor:A,children:Object(F.jsx)(P,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={TaskEditor:"ContactsForm_TaskEditor__3nGRp",TaskEditor_label:"ContactsForm_TaskEditor_label__1kIx3",TaskEditor_input:"ContactsForm_TaskEditor_input__38JpI",TaskEditorinput:"ContactsForm_TaskEditorinput__5eeu0",TaskEditor_button:"ContactsForm_TaskEditor_button__qlp6E"}}},[[38,1,2]]]);
//# sourceMappingURL=main.cc71242e.chunk.js.map