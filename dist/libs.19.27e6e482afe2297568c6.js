webpackJsonp([19],[,,,,,,,,,,,,,,,function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function init(){var t={code:["\n      <template>\n        <y-box>\n          <y-boxfilter params=\"title:'boxfilter'\"></y-boxfilter>\n          <y-boxcontent params=\"title: 'boxcontent'\">\n            基本布局\n          </y-boxcontent>\n        </y-box>\n      </template>\n      ","\n      <template>\n        <y-box>\n          <y-boxfilter params=\"title:'boxfilter'\">\n          </y-boxfilter>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <y-boxcontent params=\"style:{minHeight:'500px'},title:'左侧导航'\"></y-boxcontent>\n            </div>\n            <div class=\"col-md-10\">\n              <y-boxcontent params=\"title:'右侧内容',style:{marginLeft:'-20px',minHeight:'500px'}\"></y-boxcontent>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <y-boxcontent params=\"title:'左侧内容',style:{marginRight:'-20px',minHeight:'300px'}\"></y-boxcontent>\n            </div>\n            <div class=\"col-md-4\">\n              <y-boxcontent params=\"style:{minHeight:'300px'},title:'右侧导航'\"></y-boxcontent>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <y-boxcontent params=\"title:'左侧',style:{marginRight:'-3%',minHeight:'300px'}\"></y-boxcontent>\n            </div>\n            <div class=\"col-md-4\">\n              <y-boxcontent params=\"style:{minHeight:'300px',marginLeft:'-7px',marginRight:'-7px'},title:'中间'\"></y-boxcontent>\n            </div>\n            <div class=\"col-md-4\">\n              <y-boxcontent params=\"style:{minHeight:'300px',marginLeft:'-3%'},title:'右侧'\"></y-boxcontent>\n            </div>\n          </div>\n        </y-box>\n      </template>\n      "]};a.default.applyBindings(t,document.getElementById("app"))}Object.defineProperty(e,"__esModule",{value:!0});var i=n(53),o=_interopRequireDefault(i),r=n(0),a=_interopRequireDefault(r);n(35),e.default={template:o.default,init:init}},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(36),n(51)},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function init(t){this.code=t.code,this.isShowAll=a.default.observable(!1),this.toggle=function(){this.isShowAll(!this.isShowAll())}.bind(this)}var i=n(37),o=_interopRequireDefault(i);n(38),n(39);var r=n(0),a=_interopRequireDefault(r);a.default.components.register("demo",{viewModel:init,template:o.default})},function(t,e){t.exports='<div class="demo">\r\n  <div class="demo-show">\r\n  \x3c!-- ko template: { nodes: $componentTemplateNodes } --\x3e\x3c!-- /ko --\x3e\r\n  </div>\r\n  <div class="demo-split"></div>\r\n  <div class="demo-code" data-bind="css:{\'demo-hideCode\':!isShowAll()}">\r\n    <y-code params="code:code"></y-code>\r\n  </div>\r\n  <div class="demo-toggle" data-bind="click:toggle"><span class="fa" data-bind="css:{\'fa-angle-double-down\':!isShowAll(),\'fa-angle-double-up\':isShowAll()}"></span></div>\r\n</div>\r\n'},function(t,e){},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function Init(t,e){var n=this;this.$el=e.childNodes[0].childNodes[3],this.code=t.code,this.copy=function(){var e=new u.default(".copy",{text:function(){return t.code}});e.on("success",function(t){t.clearSelection(),e.destroy(),window.alert("代码已复制到剪贴板")})},setTimeout(function(){s.default.highlightBlock(n.$el)})}var i=n(40),o=_interopRequireDefault(i);n(41);var r=n(0),a=_interopRequireDefault(r),l=n(3),s=_interopRequireDefault(l),c=n(42),u=_interopRequireDefault(c);n(50),a.default.components.register("y-code",{viewModel:{createViewModel:function(t,e){return new Init(t,e.element)}},template:o.default})},function(t,e){t.exports='<div class="code">\r\n  <div class="tools">\r\n    <i class="fa fa-clipboard copy" data-bind="click: copy"></i>\r\n  </div>\r\n  <pre><code class="html" data-bind="text: code"></code></pre>\r\n</div>\r\n'},function(t,e){},function(t,e,n){var i,o,r;!function(a,l){o=[t,n(43),n(45),n(46)],i=l,void 0!==(r="function"==typeof i?i.apply(e,o):i)&&(t.exports=r)}(0,function(t,e,n,i){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function getAttributeValue(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var o=_interopRequireDefault(e),r=_interopRequireDefault(n),a=_interopRequireDefault(i),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),c=function(t){function Clipboard(t,e){_classCallCheck(this,Clipboard);var n=_possibleConstructorReturn(this,(Clipboard.__proto__||Object.getPrototypeOf(Clipboard)).call(this));return n.resolveOptions(e),n.listenClick(t),n}return _inherits(Clipboard,t),s(Clipboard,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===l(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,a.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return getAttributeValue("action",t)}},{key:"defaultTarget",value:function(t){var e=getAttributeValue("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return getAttributeValue("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),Clipboard}(r.default);t.exports=c})},function(t,e,n){var i,o,r;!function(a,l){o=[t,n(44)],i=l,void 0!==(r="function"==typeof i?i.apply(e,o):i)&&(t.exports=r)}(0,function(t,e){"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(t){return t&&t.__esModule?t:{default:t}}(e),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),r=function(){function ClipboardAction(t){_classCallCheck(this,ClipboardAction),this.resolveOptions(t),this.initSelection()}return o(ClipboardAction,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),ClipboardAction}();t.exports=r})},function(t,e){function select(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}t.exports=select},function(t,e){function E(){}E.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function listener(){i.off(t,listener),e.apply(n,arguments)}var i=this;return listener._=e,this.on(t,listener,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,a=i.length;r<a;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},t.exports=E},function(t,e,n){function listen(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return listenNode(t,e,n);if(i.nodeList(t))return listenNodeList(t,e,n);if(i.string(t))return listenSelector(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function listenNode(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function listenNodeList(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function listenSelector(t,e,n){return o(document.body,t,e,n)}var i=n(47),o=n(48);t.exports=listen},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){function _delegate(t,e,n,i,o){var r=listener.apply(this,arguments);return t.addEventListener(n,r,o),{destroy:function(){t.removeEventListener(n,r,o)}}}function delegate(t,e,n,i,o){return"function"==typeof t.addEventListener?_delegate.apply(null,arguments):"function"==typeof n?_delegate.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return _delegate(t,e,n,i,o)}))}function listener(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&o.call(t,n)}}var i=n(49);t.exports=delegate},function(t,e){function closest(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}t.exports=closest},function(t,e){},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function init(t){this.name=t.name||"",this.link=t.link||""}var i=n(52),o=_interopRequireDefault(i);_interopRequireDefault(n(0)).default.components.register("y-title",{viewModel:init,template:o.default})},function(t,e){t.exports='<h1>\r\n  <span data-bind="text: name"></span>组件\r\n  <y-select params="dataList:$root.selectList,value:$root.singleselect.base,onChange:$root.onSelectChange"></y-select>\r\n</h1>\r\n\x3c!-- ko if: link--\x3e\r\n<h2>\r\n  <a data-bind="attr: {href: link}" target="_blank" style="color: #2baee9">\r\n    <span data-bind="text: name"></span>组件API文档\r\n  </a>\r\n</h2>\r\n\x3c!-- /ko --\x3e\r\n<h2>代码示例</h2>'},function(t,e){t.exports='<div class="y-box">\r\n  <y-title params="name: \'Box容器\'"></y-title>\r\n  <demo params="code:code[0]">\r\n    <div class="code-top">\r\n      <y-box>\r\n        <y-boxfilter params="title:\'boxfilter\'"></y-boxfilter>\r\n        <y-boxcontent params="title: \'boxcontent\'">\r\n          基本布局\r\n        </y-boxcontent>\r\n      </y-box>\r\n    </div>\r\n    <div class="code-split">\r\n      <span>基本用法</span>\r\n    </div>\r\n    <div class="code-bottom">\r\n      y-box组件作为最外层容器包裹，y-boxfilter为标题栏，y-boxcontent为内容区(通过添加<code>title</code>设置标题，可添加<code>style</code>设置样式，与knockout语法保持一致)。\r\n    </div>\r\n  </demo>\r\n\r\n  <demo params="code:code[1]">\r\n    <div class="code-top">\r\n      <y-box>\r\n        <y-boxfilter params="title:\'boxfilter\'">\r\n        </y-boxfilter>\r\n        <div class="row">\r\n          <div class="col-md-2">\r\n            <y-boxcontent params="style:{minHeight:\'500px\'},title:\'左侧导航\'"></y-boxcontent>\r\n          </div>\r\n          <div class="col-md-10">\r\n            <y-boxcontent params="title:\'右侧内容\',style:{marginLeft:\'-20px\',minHeight:\'500px\'}"></y-boxcontent>\r\n          </div>\r\n        </div>\r\n        <div class="row">\r\n          <div class="col-md-8">\r\n            <y-boxcontent params="title:\'左侧内容\',style:{marginRight:\'-20px\',minHeight:\'300px\'}"></y-boxcontent>\r\n          </div>\r\n          <div class="col-md-4">\r\n            <y-boxcontent params="style:{minHeight:\'300px\'},title:\'右侧导航\'"></y-boxcontent>\r\n          </div>\r\n        </div>\r\n        <div class="row">\r\n          <div class="col-md-4">\r\n            <y-boxcontent params="title:\'左侧\',style:{marginRight:\'-3%\',minHeight:\'300px\'}"></y-boxcontent>\r\n          </div>\r\n          <div class="col-md-4">\r\n            <y-boxcontent params="style:{minHeight:\'300px\',marginLeft:\'-7px\',marginRight:\'-7px\'},title:\'中间\'"></y-boxcontent>\r\n          </div>\r\n          <div class="col-md-4">\r\n            <y-boxcontent params="style:{minHeight:\'300px\',marginLeft:\'-3%\'},title:\'右侧\'"></y-boxcontent>\r\n          </div>\r\n        </div>\r\n      </y-box>\r\n    </div>\r\n    <div class="code-split">\r\n      <span>配合栅格系统灵活布局</span>\r\n    </div>\r\n    <div class="code-bottom">\r\n      以上基本布局容器，配合bootstrap的栅格系统可按需灵活布局。\r\n    </div>\r\n  </demo>\r\n</div>\r\n'}]);
//# sourceMappingURL=libs.19.27e6e482afe2297568c6.js.map