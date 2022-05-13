"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_re=self.webpackChunkgoit_react_hw_08_phonebook_re||[]).push([[416],{8128:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(1413),a=t(5290),u=t(9434),o=t(577),i="NOT_FOUND";var c=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?c:r,u=t.maxSize,o=void 0===u?1:u,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),f=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:i},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return i}return{get:r,put:function(n,a){r(n)===i&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,l);function m(){var n=f.get(arguments);if(n===i){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return m.clearCache=function(){return f.clear()},m}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function f(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,f=s.memoizeOptions,m=void 0===f?t:f,d=Array.isArray(m)?m:[m],p=l(r),h=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(d)),v=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return u=h.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:p,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),v};return a}var m=f(s),d=function(e){return e.contacts.items},p=function(e){return e.contacts.filter},h=function(e){return e.contacts.isLoading},v=function(e){return e.contacts.error},_=m([d,p],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),b=t(581),g=t(660),y="AddContactForm_form__kUQ6h",x="AddContactForm_label__yACYa",j="AddContactForm_input__Lot1m",C="AddContactForm_button__3q7Qf",N="AddContactForm_error__2ZW3O",A=t(184),k=function(){var e=(0,u.v9)(d),n=(0,u.I0)(),t=(0,a.cI)({defaultValues:{name:"",number:""},mode:"onChange"}),i=t.register,c=t.handleSubmit,s=t.reset,l=t.formState.errors;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("form",{onSubmit:c((function(t){var r=t.name,a=t.number,u=e.find((function(e){return e.name===r}));if(u)return o.Am.error(" ".concat(u.name," is already in contacts")),void s();n(b.addContact({name:r,number:a})),s()})),className:y,autoComplete:"off",children:[(0,A.jsxs)("label",{className:x,children:["Name",(0,A.jsx)("input",(0,r.Z)({className:j,type:"text",name:"name"},i("name",{required:{value:!0,message:"Required"},pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Name may contain only letters, apostrophe, dash and spaces"}})))]}),l.name&&(0,A.jsx)("p",{className:N,children:l.name.message}),(0,A.jsxs)("label",{className:x,children:["Number",(0,A.jsx)("input",(0,r.Z)({className:j,type:"tel",name:"number"},i("number",{required:{value:!0,message:"Required"},pattern:{value:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}})))]}),l.number&&(0,A.jsx)("p",{className:N,children:l.number.message}),(0,A.jsx)("button",{type:"submit",className:C,children:"Add contact"})]})})},F="Filter_container__rGsQ8",w="Filter_label__jd56n",q="Filter_input__Fn28o",z=function(){var e=(0,u.v9)(p),n=(0,u.I0)();return(0,A.jsx)("div",{className:F,children:(0,A.jsxs)("label",{className:w,children:["Find contacts by name",(0,A.jsx)("input",{className:q,type:"text",value:e,onChange:function(e){return n(g.changeFilter(e.target.value))}})]})})},E=t(2791),I="List_button__jxIfW",L=function(){var e=(0,u.v9)(_),n=(0,u.v9)(h),t=(0,u.v9)(v),r=(0,u.I0)();(0,E.useEffect)((function(){r(b.fetchContacts())}),[r]);return(0,A.jsxs)(A.Fragment,{children:[t&&(0,A.jsx)("h2",{children:t}),n&&(0,A.jsx)("h2",{children:"Loading..."}),e.length>0&&!n&&(0,A.jsx)("ul",{children:e.map((function(e){return(0,A.jsxs)("li",{children:[e.name,": ",e.number,(0,A.jsx)("button",{className:I,onClick:function(){return n=e.id,r(b.deleteContact(n));var n},children:"Delete"})]},e.id)}))})]})},O="PhonebookPage_title__hTA19",S=function(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("h2",{className:O,children:"Phonebook"}),(0,A.jsx)(k,{}),(0,A.jsx)("h2",{className:O,children:"Contacts"}),(0,A.jsx)(z,{}),(0,A.jsx)(L,{})]})}}}]);
//# sourceMappingURL=phonebook-page.43f9114e.chunk.js.map