(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(146),i=n(159),c=n.n(i),u=n(156),l=n(154);e.default=function(){return a.a.createElement(u.a,null,a.a.createElement(l.a,{title:"404: Not found"}),a.a.createElement("br",null),a.a.createElement("p",null,"You entered an invalid number. ",a.a.createElement(o.a,{to:"/wolfram/"+c()(1,255)},"Try")," a number between 1 and 255!"))}},146:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(33),u=n.n(c);n.d(e,"a",function(){return u.a});n(147);var l=a.a.createContext({}),s=function(t){return a.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(t,e,n){var r;t.exports=(r=n(149))&&r.default||r},148:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},149:function(t,e,n){"use strict";n.r(e);n(34);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(55),u=n(2),l=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return n?a.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},150:function(t,e,n){var r=n(151),a=n(166),o=n(167),i="[object Null]",c="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:i:u&&u in Object(t)?a(t):o(t)}},151:function(t,e,n){var r=n(157).Symbol;t.exports=r},152:function(t){t.exports={data:{site:{siteMetadata:{title:"Wolfram Cellular Automaton"}}}}},154:function(t,e,n){"use strict";var r=n(155),a=n(0),o=n.n(a),i=n(4),c=n.n(i),u=n(173),l=n.n(u);function s(t){var e=t.description,n=t.lang,a=t.meta,i=t.keywords,c=t.title,u=r.data.site,s=e||u.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=s},155:function(t){t.exports={data:{site:{siteMetadata:{title:"Wolfram Cellular Automaton",description:"Graphical representation of Wolfram's simple cellular automaton.",author:"Ibel"}}}}},156:function(t,e,n){"use strict";var r=n(152),a=n(0),o=n.n(a),i=n(4),c=n.n(i),u=n(146),l=function(t){var e=t.siteTitle;return o.a.createElement("header",{style:{marginBottom:"0.45rem",marginTop:"4em"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem",textAlign:"center"}},o.a.createElement("h2",{style:{margin:0}},o.a.createElement(u.a,{to:"/",style:{color:"black",textDecoration:"none"}},e))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var s=l,f=(n(153),function(t){var e=t.children;return o.a.createElement(u.b,{query:"755544856",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{siteTitle:t.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",display:"flex",flexDirection:"column",paddingTop:0}},o.a.createElement("main",{style:{alignSelf:"center"}},e)))},data:r})});f.propTypes={children:c.a.node.isRequired};e.a=f},157:function(t,e,n){var r=n(165),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},158:function(t,e,n){var r=n(148),a=n(171),o=NaN,i=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(a(t))return o;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=u.test(t);return n||l.test(t)?s(t.slice(2),n?2:8):c.test(t)?o:+t}},159:function(t,e,n){var r=n(160),a=n(161),o=n(170),i=parseFloat,c=Math.min,u=Math.random;t.exports=function(t,e,n){if(n&&"boolean"!=typeof n&&a(t,e,n)&&(e=n=void 0),void 0===n&&("boolean"==typeof e?(n=e,e=void 0):"boolean"==typeof t&&(n=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=o(t),void 0===e?(e=t,t=0):e=o(e)),t>e){var l=t;t=e,e=l}if(n||t%1||e%1){var s=u();return c(t+s*(e-t+i("1e-"+((s+"").length-1))),e)}return r(t,e)}},160:function(t,e){var n=Math.floor,r=Math.random;t.exports=function(t,e){return t+n(r()*(e-t+1))}},161:function(t,e,n){var r=n(162),a=n(163),o=n(169),i=n(148);t.exports=function(t,e,n){if(!i(n))return!1;var c=typeof e;return!!("number"==c?a(n)&&o(e,n.length):"string"==c&&e in n)&&r(n[e],t)}},162:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},163:function(t,e,n){var r=n(164),a=n(168);t.exports=function(t){return null!=t&&a(t.length)&&!r(t)}},164:function(t,e,n){var r=n(150),a=n(148),o="[object AsyncFunction]",i="[object Function]",c="[object GeneratorFunction]",u="[object Proxy]";t.exports=function(t){if(!a(t))return!1;var e=r(t);return e==i||e==c||e==o||e==u}},165:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(74))},166:function(t,e,n){var r=n(151),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(u){}var a=i.call(t);return r&&(e?t[c]=n:delete t[c]),a}},167:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},168:function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},169:function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var a=typeof t;return!!(e=null==e?n:e)&&("number"==a||"symbol"!=a&&r.test(t))&&t>-1&&t%1==0&&t<e}},170:function(t,e,n){var r=n(158),a=1/0,o=1.7976931348623157e308;t.exports=function(t){return t?(t=r(t))===a||t===-a?(t<0?-1:1)*o:t==t?t:0:0===t?t:0}},171:function(t,e,n){var r=n(150),a=n(172),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||a(t)&&r(t)==o}},172:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}}}]);
//# sourceMappingURL=component---src-pages-404-js-faa6b84a085c76cb60fb.js.map