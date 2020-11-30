!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Alert=t(e.jQuery,e.Util)}(this,function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),l=n(t);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=r.default.fn.alert,o=function(){function e(e){this._element=e}var t,n,u,o=e.prototype;return o.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},o.dispose=function(){r.default.removeData(this._element,"bs.alert"),this._element=null},o._getRootElement=function(e){var t=l.default.getSelectorFromElement(e),n=!1;return t&&(n=document.querySelector(t)),n||(n=r.default(e).closest(".alert")[0]),n},o._triggerCloseEvent=function(e){var t=r.default.Event("close.bs.alert");return r.default(e).trigger(t),t},o._removeElement=function(e){var t=this;if(r.default(e).removeClass("show"),r.default(e).hasClass("fade")){var n=l.default.getTransitionDurationFromElement(e);r.default(e).one(l.default.TRANSITION_END,function(n){return t._destroyElement(e,n)}).emulateTransitionEnd(n)}else this._destroyElement(e)},o._destroyElement=function(e){r.default(e).detach().trigger("closed.bs.alert").remove()},e._jQueryInterface=function(t){return this.each(function(){var n=r.default(this),l=n.data("bs.alert");l||(l=new e(this),n.data("bs.alert",l)),"close"===t&&l[t](this)})},e._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},t=e,u=[{key:"VERSION",get:function(){return"4.5.3"}}],(n=null)&&a(t.prototype,n),u&&a(t,u),e}();return r.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',o._handleDismiss(new o)),r.default.fn.alert=o._jQueryInterface,r.default.fn.alert.Constructor=o,r.default.fn.alert.noConflict=function(){return r.default.fn.alert=u,o._jQueryInterface},o});
