(this.webpackJsonpgameflow=this.webpackJsonpgameflow||[]).push([[2],{181:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n(1),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function a(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var u={},c="https://checkout.flutterwave.com/v3.js";function s(e){var t=function(){var e=Object(r.useState)({loaded:!1,error:!1}),t=e[0],n=e[1];return Object(r.useEffect)((function(){if(!u.hasOwnProperty(c)){u.src=c;var e=document.createElement("script");e.src=c,e.async=!0;var t=function(){n({loaded:!0,error:!1})},r=function(){delete u.src,n({loaded:!0,error:!0})};return e.addEventListener("load",t),e.addEventListener("complete",t),e.addEventListener("error",r),document.body.appendChild(e),function(){e.removeEventListener("load",t),e.removeEventListener("error",r)}}n({loaded:!0,error:!1})}),[]),[t.loaded,t.error]}(),n=t[0],s=t[1];return Object(r.useEffect)((function(){if(s)throw new Error("Unable to load flutterwave payment modal")}),[s]),function(t){var r,u,c=this,l=t.callback,d=t.onClose;if(s)throw new Error("Unable to load flutterwave payment modal");if(n){var f=o(o({},e),{amount:null!==(r=e.amount)&&void 0!==r?r:0,callback:function(t){return a(c,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return"successful"!==t.status?[3,2]:(l(t),[4,fetch("https://cors-anywhere.herokuapp.com/https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:e.public_key,language:"Flutterwave-React-v3",version:"1.0.7",title:(null===e||void 0===e?void 0:e.payment_options.split(",").length)>1?"Initiate-Charge-Multiple":"Initiate-Charge-"+(null===e||void 0===e?void 0:e.payment_options),message:"15s"})})]);case 1:return r.sent(),[3,4];case 2:return l(t),[4,fetch("https://cors-anywhere.herokuapp.com/https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:null!==(n=e.public_key)&&void 0!==n?n:"",language:"Flutterwave-React-v3",version:"1.0.7",title:(null===e||void 0===e?void 0:e.payment_options.split(",").length)>1?"Initiate-Charge-Multiple-error":"Initiate-Charge-"+(null===e||void 0===e?void 0:e.payment_options)+"-error",message:"15s"})})];case 3:r.sent(),r.label=4;case 4:return[2]}}))}))},onclose:d,payment_options:null!==(u=null===e||void 0===e?void 0:e.payment_options)&&void 0!==u?u:"card, ussd, mobilemoney"});return window.FlutterwaveCheckout&&window.FlutterwaveCheckout(f)}}}function l(){document.getElementsByName("checkout").forEach((function(e){e.setAttribute("style","position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;"),document.body.style.overflow=""}))}},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return R}));var r,o,a,i=n(1),u=n.n(i);!function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"}(r||(r={})),function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"}(o||(o={})),function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"}(a||(a={}));var c="data-react-paypal-script-id",s="data-sdk-integration-source",l="react-paypal-js",d="data-namespace",f="paypal",p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p.apply(this,arguments)};function v(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function h(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function y(e){return void 0===e&&(e=f),window[e]}function m(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,o=void 0===r?"":r,a=e.sdkDataNamespace,i="Unable to render <"+t+" /> because window."+(void 0===a?f:a)+"."+n.charAt(0).toUpperCase().concat(n.substring(1))+" is undefined.";if(!o.includes(n)){var u=[o,n].filter(Boolean).join();i+="\nTo fix the issue, add '"+n+"' to the list of components passed to the parent PayPalScriptProvider:\n`<PayPalScriptProvider options={{ components: '"+u+"'}}>`."}return i}function b(e){return"react-paypal-js-"+function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(e))}function E(e,t){var n;switch(t.type){case o.LOADING_STATUS:return p(p({},e),{loadingStatus:t.value});case o.RESET_OPTIONS:return function(e){var t=self.document.querySelector("script["+c+'="'+e+'"]');(null===t||void 0===t?void 0:t.parentNode)&&t.parentNode.removeChild(t)}(e.options[c]),delete t.value[c],p(p({},e),{loadingStatus:r.PENDING,options:p(p({},t.value),(n={},n[c]=""+b(t.value),n[s]=l,n))});case o.SET_BRAINTREE_INSTANCE:return p(p({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var w=Object(i.createContext)(null);function g(e){if("function"===typeof(null===e||void 0===e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw new Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}function O(){var e=g(Object(i.useContext)(w));return[p(p({},e),{isInitial:e.loadingStatus===r.INITIAL,isPending:e.loadingStatus===r.PENDING,isResolved:e.loadingStatus===r.RESOLVED,isRejected:e.loadingStatus===r.REJECTED}),e.dispatch]}Object(i.createContext)(null);var S=function e(t){var n=t.className,r=void 0===n?"":n,o=t.disabled,a=void 0!==o&&o,c=t.children,s=t.forceReRender,l=void 0===s?[]:s,f=v(t,["className","disabled","children","forceReRender"]),b=a?{opacity:.38}:{},E=(r+" "+(a?"paypal-buttons-disabled":"")).trim(),w=Object(i.useRef)(null),g=Object(i.useRef)(null),S=O()[0],N=S.isResolved,P=S.options,j=Object(i.useState)(null),I=j[0],k=j[1],C=Object(i.useState)(!0),A=C[0],T=C[1],R=Object(i.useState)(null)[1];function D(){null!==g.current&&g.current.close().catch((function(){}))}return Object(i.useEffect)((function(){if(!1===N)return D;var t=y(P[d]);if(void 0===t||void 0===t.Buttons)return R((function(){throw new Error(m({reactComponentName:e.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:P.components,sdkDataNamespace:P[d]}))})),D;try{g.current=t.Buttons(p(p({},f),{onInit:function(e,t){k(t),"function"===typeof f.onInit&&f.onInit(e,t)}}))}catch(n){return R((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  "+n)}))}return!1===g.current.isEligible()?(T(!1),D):w.current?(g.current.render(w.current).catch((function(e){null!==w.current&&0!==w.current.children.length&&R((function(){throw new Error("Failed to render <PayPalButtons /> component. "+e)}))})),D):D}),h(h([N],l,!0),[f.fundingSource],!1)),Object(i.useEffect)((function(){null!==I&&(!0===a?I.disable().catch((function(){})):I.enable().catch((function(){})))}),[a,I]),u.a.createElement(u.a.Fragment,null,A?u.a.createElement("div",{ref:w,style:b,className:E}):c)};function N(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL);var n=function(e,t){var n="",r="";Array.isArray(e)?e.length>1?(n="*",r=e.toString()):n=e.toString():"string"===typeof e&&e.length>0?n=e:"string"===typeof t&&t.length>0&&(n="*",r=t);return{"merchant-id":n,"data-merchant-id":r}}(e["merchant-id"],e["data-merchant-id"]),r=Object.assign({},e,n),o=Object.keys(r).filter((function(e){return"undefined"!==typeof r[e]&&null!==r[e]&&""!==r[e]})).reduce((function(e,t){var n=r[t].toString();return"data-"===t.substring(0,5)?e.dataAttributes[t]=n:e.queryParams[t]=n,e}),{queryParams:{},dataAttributes:{}}),a=o.queryParams,i=o.dataAttributes;return{url:t+"?"+P(a),dataAttributes:i}}function P(e){var t="";return Object.keys(e).forEach((function(n){0!==t.length&&(t+="&"),t+=n+"="+e[n]})),t}function j(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach((function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])})),n}function I(e,t){if(void 0===t&&(t=C()),T(e,t),"undefined"===typeof window)return t.resolve(null);var n=N(e),r=n.url,o=n.dataAttributes,a=o["data-namespace"]||"paypal",i=A(a);return function(e,t){var n=document.querySelector('script[src="'+e+'"]');if(null===n)return null;var r=j(e,t),o=Object.assign({},n.dataset);if(delete o.uidAuto,Object.keys(o).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o).forEach((function(e){o[e]!==r.dataset[e]&&(a=!1)})),a?n:null}(r,o)&&i?t.resolve(i):k({url:r,attributes:o},t).then((function(){var e=A(a);if(e)return e;throw new Error("The window."+a+" global variable is not available.")}))}function k(e,t){void 0===t&&(t=C()),T(e,t);var n=e.url,r=e.attributes;if("string"!==typeof n||0===n.length)throw new Error("Invalid url.");if("undefined"!==typeof r&&"object"!==typeof r)throw new Error("Expected attributes to be an object.");return new t((function(e,t){if("undefined"===typeof window)return e();!function(e){var t=e.url,n=e.attributes,r=e.onSuccess,o=e.onError,a=j(t,n);a.onerror=o,a.onload=r,document.head.insertBefore(a,document.head.firstElementChild)}({url:n,attributes:r,onSuccess:function(){return e()},onError:function(){return t(new Error('The script "'+n+'" failed to load.'))}})}))}function C(){if("undefined"===typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function A(e){return window[e]}function T(e,t){if("object"!==typeof e||null===e)throw new Error("Expected an options object.");if("undefined"!==typeof t&&"function"!==typeof t)throw new Error("Expected PromisePonyfill to be a function.")}S.displayName="PayPalButtons";(function e(t){var n=t.className,r=void 0===n?"":n,o=t.children,a=v(t,["className","children"]),c=O()[0],s=c.isResolved,l=c.options,f=Object(i.useRef)(null),h=Object(i.useState)(!0),b=h[0],E=h[1],w=Object(i.useState)(null)[1];return Object(i.useEffect)((function(){if(!1!==s){var t=y(l[d]);if(void 0===t||void 0===t.Marks)return w((function(){throw new Error(m({reactComponentName:e.displayName,sdkComponentKey:"marks",sdkRequestedComponents:l.components,sdkDataNamespace:l[d]}))}));!function(e){var t=f.current;if(!t||!e.isEligible())return E(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch((function(e){null!==t&&0!==t.children.length&&w((function(){throw new Error("Failed to render <PayPalMarks /> component. "+e)}))}))}(t.Marks(p({},a)))}}),[s,a.fundingSource]),u.a.createElement(u.a.Fragment,null,b?u.a.createElement("div",{ref:f,className:r}):o)}).displayName="PayPalMarks";var R=function(e){var t,n=e.options,a=void 0===n?{"client-id":"test"}:n,d=e.children,f=e.deferLoading,v=void 0!==f&&f,h=Object(i.useReducer)(E,{options:p(p({},a),(t={},t[c]=""+b(a),t[s]=l,t)),loadingStatus:v?r.INITIAL:r.PENDING}),y=h[0],m=h[1];return Object(i.useEffect)((function(){if(!1===v&&y.loadingStatus===r.INITIAL)return m({type:o.LOADING_STATUS,value:r.PENDING});if(y.loadingStatus===r.PENDING){var e=!0;return I(y.options).then((function(){e&&m({type:o.LOADING_STATUS,value:r.RESOLVED})})).catch((function(){e&&m({type:o.LOADING_STATUS,value:r.REJECTED})})),function(){e=!1}}}),[y.options,v,y.loadingStatus]),u.a.createElement(w.Provider,{value:p(p({},y),{dispatch:m})},d)}}}]);
//# sourceMappingURL=2.5c554f84.chunk.js.map