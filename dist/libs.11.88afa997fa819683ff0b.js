webpackJsonp([11],{29:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(){var e={code:['\n      <template>\n        <div class="col-md-4">\n          <y-input params="placeholder: \'请输入文本..\', value: $root.value.base1"></y-input>\n          <hr class="hr-fix">\n          <y-input params="placeholder: \'请输入文本..\', value: $root.value.base2, class: \'setWidth\'"></y-input>\n        </div>\n      </template>\n      <script>\n        var viewmodel = {\n          value: {\n            base1: ko.observable(),\n            base2: ko.observable()\n          }\n        }\n      <\/script>\n      ',"\n      <template>\n        <div class=\"col-md-4\">\n          <y-input params=\"placeholder:'请输入文本',class:'y-inline-block',type:'integer',value:ko.observable('')\"></y-input>\n          <hr class=\"hr-fix\">\n          <y-input params=\"placeholder:'请输入文本',class:'y-inline-block',type:'positiveinteger',value:ko.observable('')\"></y-input>\n          <hr class=\"hr-fix\">\n          <y-input params=\"placeholder:'请输入文本',class:'y-inline-block',type:'positivenumber',value:ko.observable('')\"></y-input>\n        </div>\n      </template>\n      ","\n      <template>\n        <y-input params=\"placeholder: '请输入文本..', value: $root.value.icon, iconClass:'fa fa-search', onIconClick: $root.onIconClick\"></y-input>\n      </template>\n      <script>\n        var viewmodel = {\n          value: {\n            icon: ko.observable()\n          },\n          onIconClick: () => {\n            alert('Don't touch me!')\n          }\n        }\n      <\/script>\n      ","\n      <template>\n        <y-input params=\"placeholder: '请输入文本..', value: $root.value.disabled, disabled: $root.disabled\"></y-input>\n      </template>\n      <script>\n        var viewmodel = {\n          value: {\n            disabled: ko.observable()\n          },\n          disabled: ko.observable(true)\n        }\n      <\/script>\n      ","\n      <template>\n        <y-input params=\"placeholder: '请输入文本..', value: $root.value.input, iconClass:'fa fa-search', onIconClick: $root.onIconClick, onInput: $root.onInput, onBlur: $root.onBlur, onFocus: $root.onFocus, onSubmit: $root.onSubmit\"></y-input>\n      </template>\n      <script>\n        var viewmodel = {\n          value: {\n            input: ko.observable()\n          },\n          eventText: ko.observable(),\n          onIconClick: () => {\n            alert(' Don't touch me!')\n          },\n          onInput: () => {\n            viewmodel.eventText('onInput: <br>正在输入..')\n          },\n          onFocus: () => {\n            viewmodel.eventText('onFocus: <br>I am shy, don't look at me!')\n          },\n          onBlur: () => {\n            viewmodel.eventText('onBlur: <br>Don't leave me alone!')\n          },\n          onSubmit: () => {\n            viewmodel.eventText('onSubmit: <br>enter触发!')\n          }\n        }\n      <\/script>\n      "],value:{base1:a.default.observable(),base2:a.default.observable(),icon:a.default.observable(),disabled:a.default.observable(),input:a.default.observable()},eventText:a.default.observable(),disabled:a.default.observable(!0),onIconClick:function(){alert("Don't touch me!")},onInput:function(){e.eventText("onInput: <br>正在输入..")},onFocus:function(){e.eventText("onFocus: <br>I am shy, don't look at me!")},onBlur:function(){e.eventText("onBlur: <br>Don't leave me alone!")},onSubmit:function(){e.eventText("onSubmit: <br>enter触发!")}};a.default.applyBindings(e,document.getElementById("app"))}Object.defineProperty(t,"__esModule",{value:!0});var o=n(70),i=_interopRequireDefault(o),r=n(0),a=_interopRequireDefault(r);n(38),t.default={template:i.default,init:init}},38:function(e,t,n){"use strict";n(39),n(54)},39:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.code=e.code,this.isShowAll=a.default.observable(!1),this.toggle=function(){this.isShowAll(!this.isShowAll())}.bind(this)}var o=n(40),i=_interopRequireDefault(o);n(41),n(42);var r=n(0),a=_interopRequireDefault(r);a.default.components.register("demo",{viewModel:init,template:i.default})},40:function(e,t){e.exports='<div class="demo">\n  <div class="demo-show">\n  \x3c!-- ko template: { nodes: $componentTemplateNodes } --\x3e\x3c!-- /ko --\x3e\n  </div>\n  <div class="demo-split"></div>\n  <div class="demo-code" data-bind="css:{\'demo-hideCode\':!isShowAll()}">\n    <y-code params="code:code"></y-code>\n  </div>\n  <div class="demo-toggle" data-bind="click:toggle"><span class="fa" data-bind="css:{\'fa-angle-double-down\':!isShowAll(),\'fa-angle-double-up\':isShowAll()}"></span></div>\n</div>\n'},41:function(e,t){},42:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Init(e,t){var n=this;this.$el=t.childNodes[0].childNodes[3],this.code=e.code,this.copy=function(){var t=new u.default(".copy",{text:function(){return e.code}});t.on("success",function(e){e.clearSelection(),t.destroy(),window.alert("代码已复制到剪贴板")})},setTimeout(function(){s.default.highlightBlock(n.$el)})}var o=n(43),i=_interopRequireDefault(o);n(44);var r=n(0),a=_interopRequireDefault(r),l=n(3),s=_interopRequireDefault(l),c=n(45),u=_interopRequireDefault(c);n(53),a.default.components.register("y-code",{viewModel:{createViewModel:function(e,t){return new Init(e,t.element)}},template:i.default})},43:function(e,t){e.exports='<div class="code">\n  <div class="tools">\n    <i class="fa fa-clipboard copy" data-bind="click: copy"></i>\n  </div>\n  <pre><code class="html" data-bind="text: code"></code></pre>\n</div>\n'},44:function(e,t){},45:function(e,t,n){var o,i,r;!function(a,l){i=[e,n(46),n(48),n(49)],o=l,void 0!==(r="function"==typeof o?o.apply(t,i):o)&&(e.exports=r)}(0,function(e,t,n,o){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function getAttributeValue(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var i=_interopRequireDefault(t),r=_interopRequireDefault(n),a=_interopRequireDefault(o),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),c=function(e){function Clipboard(e,t){_classCallCheck(this,Clipboard);var n=_possibleConstructorReturn(this,(Clipboard.__proto__||Object.getPrototypeOf(Clipboard)).call(this));return n.resolveOptions(t),n.listenClick(e),n}return _inherits(Clipboard,e),s(Clipboard,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===l(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,a.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return getAttributeValue("action",e)}},{key:"defaultTarget",value:function(e){var t=getAttributeValue("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return getAttributeValue("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),Clipboard}(r.default);e.exports=c})},46:function(e,t,n){var o,i,r;!function(a,l){i=[e,n(47)],o=l,void 0!==(r="function"==typeof o?o.apply(t,i):o)&&(e.exports=r)}(0,function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(e){return e&&e.__esModule?e:{default:e}}(t),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function(){function ClipboardAction(e){_classCallCheck(this,ClipboardAction),this.resolveOptions(e),this.initSelection()}return i(ClipboardAction,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),ClipboardAction}();e.exports=r})},47:function(e,t){function select(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}e.exports=select},48:function(e,t){function E(){}E.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function listener(){o.off(e,listener),t.apply(n,arguments)}var o=this;return listener._=t,this.on(e,listener,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var r=0,a=o.length;r<a;r++)o[r].fn!==t&&o[r].fn._!==t&&i.push(o[r]);return i.length?n[e]=i:delete n[e],this}},e.exports=E},49:function(e,t,n){function listen(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return listenNode(e,t,n);if(o.nodeList(e))return listenNodeList(e,t,n);if(o.string(e))return listenSelector(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function listenNode(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function listenNodeList(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function listenSelector(e,t,n){return i(document.body,e,t,n)}var o=n(50),i=n(51);e.exports=listen},50:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},51:function(e,t,n){function _delegate(e,t,n,o,i){var r=listener.apply(this,arguments);return e.addEventListener(n,r,i),{destroy:function(){e.removeEventListener(n,r,i)}}}function delegate(e,t,n,o,i){return"function"==typeof e.addEventListener?_delegate.apply(null,arguments):"function"==typeof n?_delegate.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return _delegate(e,t,n,o,i)}))}function listener(e,t,n,i){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&i.call(e,n)}}var o=n(52);e.exports=delegate},52:function(e,t){function closest(e,t){for(;e&&e.nodeType!==n;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=closest},53:function(e,t){},54:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.name=e.name||"",this.link=e.link||""}var o=n(55),i=_interopRequireDefault(o);_interopRequireDefault(n(0)).default.components.register("y-title",{viewModel:init,template:i.default})},55:function(e,t){e.exports='<h1>\n  <span data-bind="text: name"></span>组件\n</h1>\n\x3c!-- ko if: link--\x3e\n<h2>\n  <a data-bind="attr: {href: link}" target="_blank" style="color: #2baee9">\n    <span data-bind="text: name"></span>组件API文档\n  </a>\n</h2>\n\x3c!-- /ko --\x3e\n<h2>代码示例</h2>\n'},70:function(e,t){e.exports='<div class="y-box">\n  <y-title params="name: \'Input标签\'"></y-title>\n  <demo params="code:code[0]">\n    <div class="code-top row">\n      <div class="col-md-4">\n        <y-input params="placeholder: \'请输入文本..\', value: $root.value.base1"></y-input>\n        <hr class="hr-fix">\n        <y-input params="placeholder: \'请输入文本..\', value: $root.value.base2, class: \'setWidth\'"></y-input>\n      </div>\n    </div>\n    <div class="code-split">\n      <span>基础用法</span>\n    </div>\n    <div class="code-bottom">\n      基本用法，可以使用value实现数据的双向绑定。\n      可以设置class来改变输入框的宽度及其他样式，默认 100%。\n    </div>\n  </demo>\n  \n  <demo params="code:code[1]">\n    <div class="code-top">\n      <y-form params="labelWidth:\'100px\'">\n        <y-formitem params="label:\'整数输入框\'">\n          <y-input params="placeholder:\'请输入文本\',class:\'y-inline-block\',type:\'integer\',value:ko.observable(\'\')"></y-input>\n        </y-formitem>\n        <y-formitem params="label:\'正整数输入框\'">\n          <y-input params="placeholder:\'请输入文本\',class:\'y-inline-block\',type:\'positiveinteger\',value:ko.observable(\'\')"></y-input>\n        </y-formitem>\n        <y-formitem params="label:\'正数输入框\'">\n          <y-input params="placeholder:\'请输入文本\',class:\'y-inline-block\',type:\'positivenumber\',value:ko.observable(\'\')"></y-input>\n        </y-formitem>\n      </y-form>\n    </div>\n    <div class="code-split">\n      <span>输入框类型</span>\n    </div>\n    <div class="code-bottom">\n      除支持input输入框的基本类型，还支持设置<br><code>type</code>为<code>integer</code>(整数)、<code>positiveinteger</code>(正整数)、<code>positivenumber</code>(正数)。\n    </div>\n  </demo>\n\n  <demo params="code:code[2]">\n    <div class="code-top row">\n      <div class="col-md-4">\n        <y-input params="placeholder: \'请输入文本..\', value: $root.value.icon, iconClass:\'fa fa-search\', onIconClick: $root.onIconClick"></y-input>\n      </div>\n    </div>\n    <div class="code-split">\n      <span>带Icon的输入框</span>\n    </div>\n    <div class="code-bottom">\n      通过iconClass属性添加类(例如fa图标集)可以在输入框右边加一个图标。\n      点击图标，会触发onIconClick事件。\n    </div>\n  </demo>\n\n  <demo params="code:code[3]">\n    <div class="code-top row">\n      <div class="col-md-4">\n        <y-input params="placeholder: \'请输入文本..\', value: $root.value.disabled, disabled: $root.disabled"></y-input>\n      </div>\n    </div>\n    <div class="code-split">\n      <span>禁用状态</span>\n    </div>\n    <div class="code-bottom">\n      通过添加disabled属性可设置为不可用状态。\n    </div>\n  </demo>\n\n  <demo params="code:code[4]">\n    <div class="code-top row">\n      <div class="col-md-4">\n        <y-input params="placeholder: \'请输入文本..\', value: $root.value.input, iconClass:\'fa fa-search\', onIconClick: $root.onIconClick, onInput: $root.onInput, onBlur: $root.onBlur, onFocus: $root.onFocus, onSubmit: $root.onSubmit"></y-input>\n        <hr class="hr-fix">\n        <span data-bind="html: $root.eventText"></span>\n      </div>\n    </div>\n    <div class="code-split">\n      <span>所有事件</span>\n    </div>\n    <div class="code-bottom">\n      点击图标时触发onIconClick事件，输入时触发onInput事件，获得焦点时触发onFocus事件，<br>失去焦点时触发onBlur事件，回车触发onSubmit事件。\n    </div>\n  </demo>\n</div>\n<style>\n  .setWidth {\n    width: 180px;\n  }\n</style>\n'}});
//# sourceMappingURL=libs.11.88afa997fa819683ff0b.js.map