webpackJsonp([14],{33:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(){var e={code:["\n      <template>\n        <y-datepicker params='placeholder:\"请选择日期\", data: $root.datepicker'>\n        </y-datepicker>\n      </template>\n      <script>\n        var viewmodel = {\n          datepicker: ko.observable()\n        }\n        viewmodel.datepicker.subscribe((val) => {\n          console.log(val)\n        })\n      <\/script>\n      ","\n      <template>\n        <y-datetimepicker params='placeholder:\"请选择时间\", data: $root.datetimepicker'>\n        </y-datetimepicker>\n      </template>\n      <script>\n        var viewmodel = {\n          datetimepicker: ko.observable()\n        }\n      <\/script>\n      "],datepicker:a.default.observable(new Date),datetimepicker:a.default.observable(),minDate:a.default.observable("2010-01-01"),maxDate:a.default.observable("2020-12-31")};e.datepicker.subscribe(function(e){console.log(e)}),e.datetimepicker.subscribe(function(e){console.log(e)}),a.default.applyBindings(e,document.getElementById("app"))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(72),r=_interopRequireDefault(i),o=n(0),a=_interopRequireDefault(o);n(36),t.default={template:r.default,init:init}},36:function(e,t,n){"use strict";n(37),n(52)},37:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.code=e.code,this.isShowAll=a.default.observable(!1),this.toggle=function(){this.isShowAll(!this.isShowAll())}.bind(this)}var i=n(38),r=_interopRequireDefault(i);n(39),n(40);var o=n(0),a=_interopRequireDefault(o);a.default.components.register("demo",{viewModel:init,template:r.default})},38:function(e,t){e.exports='<div class="demo">\r\n  <div class="demo-show">\r\n  \x3c!-- ko template: { nodes: $componentTemplateNodes } --\x3e\x3c!-- /ko --\x3e\r\n  </div>\r\n  <div class="demo-split"></div>\r\n  <div class="demo-code" data-bind="css:{\'demo-hideCode\':!isShowAll()}">\r\n    <y-code params="code:code"></y-code>\r\n  </div>\r\n  <div class="demo-toggle" data-bind="click:toggle"><span class="fa" data-bind="css:{\'fa-angle-double-down\':!isShowAll(),\'fa-angle-double-up\':isShowAll()}"></span></div>\r\n</div>\r\n'},39:function(e,t){},40:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Init(e,t){var n=this;this.$el=t.childNodes[0].childNodes[3],this.code=e.code,this.copy=function(){var t=new u.default(".copy",{text:function(){return e.code}});t.on("success",function(e){e.clearSelection(),t.destroy(),window.alert("代码已复制到剪贴板")})},setTimeout(function(){c.default.highlightBlock(n.$el)})}var i=n(41),r=_interopRequireDefault(i);n(42);var o=n(0),a=_interopRequireDefault(o),l=n(3),c=_interopRequireDefault(l),s=n(43),u=_interopRequireDefault(s);n(51),a.default.components.register("y-code",{viewModel:{createViewModel:function(e,t){return new Init(e,t.element)}},template:r.default})},41:function(e,t){e.exports='<div class="code">\r\n  <div class="tools">\r\n    <i class="fa fa-clipboard copy" data-bind="click: copy"></i>\r\n  </div>\r\n  <pre><code class="html" data-bind="text: code"></code></pre>\r\n</div>\r\n'},42:function(e,t){},43:function(e,t,n){var i,r,o;!function(a,l){r=[e,n(44),n(46),n(47)],i=l,void 0!==(o="function"==typeof i?i.apply(t,r):i)&&(e.exports=o)}(0,function(e,t,n,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function getAttributeValue(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var r=_interopRequireDefault(t),o=_interopRequireDefault(n),a=_interopRequireDefault(i),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),s=function(e){function Clipboard(e,t){_classCallCheck(this,Clipboard);var n=_possibleConstructorReturn(this,(Clipboard.__proto__||Object.getPrototypeOf(Clipboard)).call(this));return n.resolveOptions(t),n.listenClick(e),n}return _inherits(Clipboard,e),c(Clipboard,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===l(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,a.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return getAttributeValue("action",e)}},{key:"defaultTarget",value:function(e){var t=getAttributeValue("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return getAttributeValue("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),Clipboard}(o.default);e.exports=s})},44:function(e,t,n){var i,r,o;!function(a,l){r=[e,n(45)],i=l,void 0!==(o="function"==typeof i?i.apply(t,r):i)&&(e.exports=o)}(0,function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(e){return e&&e.__esModule?e:{default:e}}(t),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function(){function ClipboardAction(e){_classCallCheck(this,ClipboardAction),this.resolveOptions(e),this.initSelection()}return r(ClipboardAction,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),ClipboardAction}();e.exports=o})},45:function(e,t){function select(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var i=window.getSelection(),r=document.createRange();r.selectNodeContents(e),i.removeAllRanges(),i.addRange(r),t=i.toString()}return t}e.exports=select},46:function(e,t){function E(){}E.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function listener(){i.off(e,listener),t.apply(n,arguments)}var i=this;return listener._=t,this.on(e,listener,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,r=n.length;for(i;i<r;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],r=[];if(i&&t)for(var o=0,a=i.length;o<a;o++)i[o].fn!==t&&i[o].fn._!==t&&r.push(i[o]);return r.length?n[e]=r:delete n[e],this}},e.exports=E},47:function(e,t,n){function listen(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!i.string(t))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(e))return listenNode(e,t,n);if(i.nodeList(e))return listenNodeList(e,t,n);if(i.string(e))return listenSelector(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function listenNode(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function listenNodeList(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function listenSelector(e,t,n){return r(document.body,e,t,n)}var i=n(48),r=n(49);e.exports=listen},48:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},49:function(e,t,n){function _delegate(e,t,n,i,r){var o=listener.apply(this,arguments);return e.addEventListener(n,o,r),{destroy:function(){e.removeEventListener(n,o,r)}}}function delegate(e,t,n,i,r){return"function"==typeof e.addEventListener?_delegate.apply(null,arguments):"function"==typeof n?_delegate.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return _delegate(e,t,n,i,r)}))}function listener(e,t,n,r){return function(n){n.delegateTarget=i(n.target,t),n.delegateTarget&&r.call(e,n)}}var i=n(50);e.exports=delegate},50:function(e,t){function closest(e,t){for(;e&&e.nodeType!==n;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}e.exports=closest},51:function(e,t){},52:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.name=e.name||"",this.link=e.link||""}var i=n(53),r=_interopRequireDefault(i);_interopRequireDefault(n(0)).default.components.register("y-title",{viewModel:init,template:r.default})},53:function(e,t){e.exports='<h1>\r\n  <span data-bind="text: name"></span>组件\r\n  <y-select params="dataList:$root.selectList,value:$root.singleselect.base,onChange:$root.onSelectChange"></y-select>\r\n</h1>\r\n\x3c!-- ko if: link--\x3e\r\n<h2>\r\n  <a data-bind="attr: {href: link}" target="_blank" style="color: #2baee9">\r\n    <span data-bind="text: name"></span>组件API文档\r\n  </a>\r\n</h2>\r\n\x3c!-- /ko --\x3e\r\n<h2>代码示例</h2>'},72:function(e,t){e.exports='<div class="y-box">\r\n  <y-title params="name: \'datepicker时间选择\'"></y-title>\r\n  <demo params="code:code[0]">\r\n    <div class="code-top row">\r\n      <div class="col-md-6">\r\n        <y-datepicker params=\'placeholder:"请选择日期", data: $root.datepicker\'>\r\n        </y-datepicker>\r\n      </div>\r\n    </div>\r\n    <div class="code-split">\r\n      <span>日期选择器</span>\r\n    </div>\r\n    <div class="code-bottom">\r\n      data绑定日期，可以是 JavaScript 的 Date，例如 new Date()，可以是空，也可以是标准的日期格式。<br>\r\n      可以通过对data显示订阅subscribe自定义事件。\r\n    </div>\r\n  </demo>\r\n\r\n  <demo params="code:code[1]">\r\n    <div class="code-top row">\r\n      <div class="col-md-6">\r\n        <y-datetimepicker params=\'placeholder:"请选择时间", data: $root.datetimepicker\'>\r\n        </y-datetimepicker>\r\n      </div>\r\n    </div>\r\n    <div class="code-split">\r\n      <span>时间选择器</span>\r\n    </div>\r\n    <div class="code-bottom">\r\n      与日期选择器使用相同。\r\n    </div>\r\n  </demo>\r\n</div>\r\n'}});
//# sourceMappingURL=libs.14.554a8b52e1c60c19a36c.js.map