"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[529],{7874:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var t=a(9439),r=a(2791),o={form:"HomePage_form__RLHfh",addBtn:"HomePage_addBtn__jgq5i",formContainer:"HomePage_formContainer__BeP92",phoneContainer:"HomePage_phoneContainer__q6Qsi",label:"HomePage_label__u-H22",input:"HomePage_input__7BYZ0",inputPadding:"HomePage_inputPadding__AlI6N",subtitle:"HomePage_subtitle__chVAD"},i=a(5984),s=a(3109),l=(a(4719),a(8174)),u=(a(5462),a(6863)),c=a(5048),m=a(3661),d="Filter_filterContainer__8G57N",_="Filter_label__vEd1E",h="Filter_input__N7T3z",p=a(184),f=function(){var e=(0,c.I0)(),n=(0,c.v9)(m.F1);return(0,p.jsx)("div",{className:d,children:(0,p.jsxs)("label",{className:_,children:["Find contacts by name: ",(0,p.jsx)("br",{}),(0,p.jsx)("input",{className:h,placeholder:"Enter name",onChange:function(n){e((0,m.hX)(n.currentTarget.value.toLocaleLowerCase().trim()))},name:"filter",type:"text",value:n,autoComplete:"off",required:!0})]})})};function b(){var e=(0,u.Tn)(),n=(0,t.Z)(e,1)[0],a=(0,u.Jx)().data,c=(0,r.useState)(""),m=(0,t.Z)(c,2),d=m[0],_=m[1],h=(0,r.useState)(""),b=(0,t.Z)(h,2),g=b[0],x=b[1],N=(0,r.useState)(""),C=(0,t.Z)(N,2),j=C[0],v=C[1],P=function(){_(""),x(""),v("")};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{className:o.subtitle,children:"Add new contact"}),(0,p.jsxs)("form",{className:o.form,onSubmit:function(e){e.preventDefault(),void 0===a.find((function(e){return e.name===d}))?(n({name:d,number:g,id:j}),l.Am.success("Contact ".concat(d," has been added"),{position:l.Am.POSITION.TOP_CENTER,autoClose:1e3})):l.Am.error("".concat(d," already exist"),{position:l.Am.POSITION.TOP_CENTER,autoClose:1e3}),P()},children:[(0,p.jsxs)("div",{className:o.formContainer,children:[(0,p.jsxs)("div",{className:o.inputPadding,children:[(0,p.jsx)("label",{className:o.label,children:"Name:"}),(0,p.jsx)("input",{className:o.input,placeholder:"Enter name",onChange:function(e){var n=e.currentTarget,a=n.name,t=n.value;switch(a){case"name":_(t);break;case"number":x(t);break;default:return}v((0,i.x0)())},type:"text",name:"name",value:d,pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\u0406\u0456\u0407\u0457\u0404\u0454]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]}),(0,p.jsxs)("div",{className:o.phoneContainer,children:[(0,p.jsx)("label",{className:o.label,children:"Number:"}),(0,p.jsx)(s.ZP,{className:o.inputPhone,defaultCountry:"UA",onChange:function(e){x(e)},region:"Europe",title:"Number",type:"tel",name:"number",value:g,placeholder:"Enter phone number",autoComplete:"off",international:!0,maxLength:"16"})]})]}),(0,p.jsxs)("button",{type:"submit",className:o.addBtn,children:["Add ",(0,p.jsx)("br",{})," Contact"]})]}),void 0!==a&&a.length>0&&(0,p.jsx)(f,{})]})}}}]);
//# sourceMappingURL=529.f0b8f178.chunk.js.map