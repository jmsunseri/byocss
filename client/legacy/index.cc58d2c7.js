import{_ as t,a as n,b as e,c as o,i as a,d as r,S as s,s as c,T as i,B as u,e as f,f as l,g as $,h as d,j as p,k as m,l as h,m as y,n as g,o as v,p as w,q as b,r as x,t as j,u as I,v as k,w as T,x as S,y as B}from"./client.778e9578.js";function D(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=n(t);if(o){var s=n(this).constructor;a=Reflect.construct(r,arguments,s)}else a=r.apply(this,arguments);return e(this,a)}}function C(t){var n;return{c:function(){n=T("Hi there welcome to BYOCSS Svelte component library. The goal of this\n    project is to provide you with a functional set of components that allows\n    you to style them as you see fit using any means necessary. This website\n    uses tailwind but you are free to use any css library or define your own\n    classes. Then you use a json config file to inject those classes into the\n    templates.")},l:function(t){n=S(t,"Hi there welcome to BYOCSS Svelte component library. The goal of this\n    project is to provide you with a functional set of components that allows\n    you to style them as you see fit using any means necessary. This website\n    uses tailwind but you are free to use any css library or define your own\n    classes. Then you use a json config file to inject those classes into the\n    templates.")},m:function(t,e){v(t,n,e)},d:function(t){t&&y(n)}}}function E(t){var n;return{c:function(){n=T("In the case of the button below we defined a javascript object and populated\n    it with Tailwind CSS classes.")},l:function(t){n=S(t,"In the case of the button below we defined a javascript object and populated\n    it with Tailwind CSS classes.")},m:function(t,e){v(t,n,e)},d:function(t){t&&y(n)}}}function R(t){var n,e="const theme = {\n    buttons: {\n      default: {\n        style: {\n          misc: 'btn focus:outline-none',\n          background: 'bg-red-500 hover:bg-red-400',\n          border: 'rounded-md border-red-700 border-2',\n          spacing: 'px-4 py-2',\n          font: 'text-white',\n          shadow: 'shadow-md',\n        },\n        icon: {},\n      },\n    },\n  };";return{c:function(){n=T(e)},l:function(t){n=S(t,e)},m:function(t,e){v(t,n,e)},p:B,d:function(t){t&&y(n)}}}function Y(t){var n;return{c:function(){n=T("The component library cares that you defined a buttons object and it cares\n    that you defined an icon property. The icon property will be used if you put\n    an icon in the icon slot of the component. If you don't like this structure\n    that's ok you could just as easily do this.")},l:function(t){n=S(t,"The component library cares that you defined a buttons object and it cares\n    that you defined an icon property. The icon property will be used if you put\n    an icon in the icon slot of the component. If you don't like this structure\n    that's ok you could just as easily do this.")},m:function(t,e){v(t,n,e)},d:function(t){t&&y(n)}}}function O(t){var n,e="const theme = {\n  buttons: {\n    default: {\n      style: 'btn focus:outline-none bg-red-500 hover:bg-red-400 rounded-md border-red-700 border-2 px-4 py-2 text-white shadow-md',\n      icon: {}\n    },\n  },\n};";return{c:function(){n=T(e)},l:function(t){n=S(t,e)},m:function(t,e){v(t,n,e)},p:B,d:function(t){t&&y(n)}}}function V(t){var n;return{c:function(){n=T("It doesn't matter. It will take the classes and apply them as needed to the\n    component.")},l:function(t){n=S(t,"It doesn't matter. It will take the classes and apply them as needed to the\n    component.")},m:function(t,e){v(t,n,e)},d:function(t){t&&y(n)}}}function H(t){var n,e='<Button variant="default" >I\'m a Button</Button>';return{c:function(){n=T(e)},l:function(t){n=S(t,e)},m:function(t,e){v(t,n,e)},p:B,d:function(t){t&&y(n)}}}function q(t){var n,e,o,a;return{c:function(){n=T("You don't need to apply the property "),e=f("code"),o=T('variant="default"'),a=T(" it will\n      look for a default variant automatically.")},l:function(t){n=S(t,"You don't need to apply the property "),e=d(t,"CODE",{});var r=p(e);o=S(r,'variant="default"'),r.forEach(y),a=S(t," it will\n      look for a default variant automatically.")},m:function(t,r){v(t,n,r),v(t,e,r),b(e,o),v(t,a,r)},d:function(t){t&&y(n),t&&y(e),t&&y(a)}}}function P(t){var n;return{c:function(){n=T("I'm a Button")},l:function(t){n=S(t,"I'm a Button")},m:function(t,e){v(t,n,e)},d:function(t){t&&y(n)}}}function _(t){var n,e,o,a,r,s,c,T,S,B,D,_,z,A,F,G,J,K,L,M,N;return e=new i({props:{$$slots:{default:[C]},$$scope:{ctx:t}}}),a=new i({props:{$$slots:{default:[E]},$$scope:{ctx:t}}}),s=new i({props:{variant:"code-block",$$slots:{default:[R]},$$scope:{ctx:t}}}),T=new i({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),B=new i({props:{variant:"code-block",$$slots:{default:[O]},$$scope:{ctx:t}}}),_=new i({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),F=new i({props:{variant:"code-block",$$slots:{default:[H]},$$scope:{ctx:t}}}),J=new i({props:{variant:"caption",$$slots:{default:[q]},$$scope:{ctx:t}}}),M=new u({props:{variant:"default",$$slots:{default:[P]},$$scope:{ctx:t}}}),{c:function(){n=f("div"),l(e.$$.fragment),o=$(),l(a.$$.fragment),r=$(),l(s.$$.fragment),c=$(),l(T.$$.fragment),S=$(),l(B.$$.fragment),D=$(),l(_.$$.fragment),z=$(),A=f("div"),l(F.$$.fragment),G=$(),l(J.$$.fragment),K=$(),L=f("div"),l(M.$$.fragment),this.h()},l:function(t){n=d(t,"DIV",{class:!0});var i=p(n);m(e.$$.fragment,i),o=h(i),m(a.$$.fragment,i),r=h(i),m(s.$$.fragment,i),c=h(i),m(T.$$.fragment,i),S=h(i),m(B.$$.fragment,i),D=h(i),m(_.$$.fragment,i),z=h(i),A=d(i,"DIV",{});var u=p(A);m(F.$$.fragment,u),G=h(u),m(J.$$.fragment,u),u.forEach(y),K=h(i),L=d(i,"DIV",{class:!0});var f=p(L);m(M.$$.fragment,f),f.forEach(y),i.forEach(y),this.h()},h:function(){g(L,"class","flex"),g(n,"class","container mx-auto flex flex-col gap-3 pr-4")},m:function(t,i){v(t,n,i),w(e,n,null),b(n,o),w(a,n,null),b(n,r),w(s,n,null),b(n,c),w(T,n,null),b(n,S),w(B,n,null),b(n,D),w(_,n,null),b(n,z),b(n,A),w(F,A,null),b(A,G),w(J,A,null),b(n,K),b(n,L),w(M,L,null),N=!0},p:function(t,n){var o=x(n,1)[0],r={};1&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r);var c={};1&o&&(c.$$scope={dirty:o,ctx:t}),a.$set(c);var i={};1&o&&(i.$$scope={dirty:o,ctx:t}),s.$set(i);var u={};1&o&&(u.$$scope={dirty:o,ctx:t}),T.$set(u);var f={};1&o&&(f.$$scope={dirty:o,ctx:t}),B.$set(f);var l={};1&o&&(l.$$scope={dirty:o,ctx:t}),_.$set(l);var $={};1&o&&($.$$scope={dirty:o,ctx:t}),F.$set($);var d={};1&o&&(d.$$scope={dirty:o,ctx:t}),J.$set(d);var p={};1&o&&(p.$$scope={dirty:o,ctx:t}),M.$set(p)},i:function(t){N||(j(e.$$.fragment,t),j(a.$$.fragment,t),j(s.$$.fragment,t),j(T.$$.fragment,t),j(B.$$.fragment,t),j(_.$$.fragment,t),j(F.$$.fragment,t),j(J.$$.fragment,t),j(M.$$.fragment,t),N=!0)},o:function(t){I(e.$$.fragment,t),I(a.$$.fragment,t),I(s.$$.fragment,t),I(T.$$.fragment,t),I(B.$$.fragment,t),I(_.$$.fragment,t),I(F.$$.fragment,t),I(J.$$.fragment,t),I(M.$$.fragment,t),N=!1},d:function(t){t&&y(n),k(e),k(a),k(s),k(T),k(B),k(_),k(F),k(J),k(M)}}}var z=function(n){t(i,s);var e=D(i);function i(t){var n;return o(this,i),n=e.call(this),a(r(n),t,null,_,c,{}),n}return i}();export default z;
