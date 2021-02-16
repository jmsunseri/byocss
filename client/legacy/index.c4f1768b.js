import{_ as e,a as t,b as n,c as a,i as o,d as r,S as s,s as i,f as c,k as l,p as f,r as p,t as u,u as m,v as x,e as d,g as h,h as $,j as g,l as v,m as b,n as y,o as T,q as w,y as j}from"./client.e3ab83bb.js";import R from"./example.e6fb9c85.js";import{C as k,a as C}from"./CodeExample.4ba0eee9.js";function D(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=t(e);if(a){var s=t(this).constructor;o=Reflect.construct(r,arguments,s)}else o=r.apply(this,arguments);return n(this,o)}}function E(e){var t,n,a,o,r;return n=new R({}),o=new C({props:{exampleHTML:e[3],exampleTheme:e[4]}}),{c:function(){t=d("div"),c(n.$$.fragment),a=h(),c(o.$$.fragment),this.h()},l:function(e){t=$(e,"DIV",{slot:!0,class:!0});var r=g(t);l(n.$$.fragment,r),a=v(r),l(o.$$.fragment,r),r.forEach(b),this.h()},h:function(){y(t,"slot","examples"),y(t,"class","flex flex-col gap-3")},m:function(e,s){T(e,t,s),f(n,t,null),w(t,a),f(o,t,null),r=!0},p:j,i:function(e){r||(u(n.$$.fragment,e),u(o.$$.fragment,e),r=!0)},o:function(e){m(n.$$.fragment,e),m(o.$$.fragment,e),r=!1},d:function(e){e&&b(t),x(n),x(o)}}}function I(e){var t,n;return t=new k({props:{props:e[0],slots:e[1],themeProps:e[2],description:"The allows to apply predefined styles to text.",componentName:"Text",$$slots:{examples:[E]},$$scope:{ctx:e}}}),{c:function(){c(t.$$.fragment)},l:function(e){l(t.$$.fragment,e)},m:function(e,a){f(t,e,a),n=!0},p:function(e,n){var a=p(n,1)[0],o={};32&a&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i:function(e){n||(u(t.$$.fragment,e),n=!0)},o:function(e){m(t.$$.fragment,e),n=!1},d:function(e){x(t,e)}}}function H(e){return[[{name:"variant",type:"string",default:"'default'",description:"This defines which variant of the text component from your theme configuration will be applied."},{name:"css",type:"string",description:"Extra css classes you would like to have applied to the text component."}],[{description:"Will be placed inside text span element"}],[{name:"style",type:"string | object",description:"The name of this prop could be anything.   \n      It can be a single string containing all styles applied to the button or \n      it can be an object broken up in to multiple props."}],'<div class="flex flex-col gap-3">\n  <Text variant="example-header">Header</Text>\n  <Text variant="example-caption">Caption</Text>\n  <Text variant="example-code">let foo = 1;</Text>\n</div>',"const theme: ITheme = {\n  texts: {\n    'example-header': 'text-4xl font-bold',\n    'example-caption': 'text-xs',\n    'example-code': 'rounded-md bg-blue-800 flex flex-col font-mono p-1 whitespace-pre text-red-50',\n  }\n};\n\n"]}var P=function(t){e(c,s);var n=D(c);function c(e){var t;return a(this,c),t=n.call(this),o(r(t),e,H,I,i,{}),t}return c}();export default P;
