(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EpD8:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),i=a.n(n),r=a("iLHE"),o=a("Q+Q2"),s=a.n(o);var c=function(t){var e,a;function n(e){var a,n=(a=t.call(this,e)||this).props.value,i=n>0&&n<256;return a.state={isNumberValid:i},a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){this.updateCanvas()},o.updateCanvas=function(){var t=this.props,e=t.value,a=t.width,n=t.height;if(this.state.isNumberValid){var i=this.canvas.getContext("2d");Object(r.b)(e,a,n).forEach((function(t,e){t.forEach((function(t,a){1===t&&i.fillRect(15*a,15*e,15,15)}))}))}},o.render=function(){var t=this,e=this.state.isNumberValid,a=this.props,n=a.width,r=a.height;return e?i.a.createElement("div",{className:s.a.table},i.a.createElement("canvas",{ref:function(e){t.canvas=e},width:15*n,height:15*r})):i.a.createElement("h4",{className:s.a.notFound},"Invalid number.")},n}(i.a.Component);e.default=c}}]);
//# sourceMappingURL=7-321698122ad51db11c59.js.map