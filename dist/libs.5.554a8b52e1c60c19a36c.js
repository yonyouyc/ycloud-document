webpackJsonp([5],{22:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(){var e={code:{base:"\n      <template>\n        <y-select params=\"dataList:$root.selectList,value:$root.base,onChange:$root.onSelectChange\"></y-select>\n      </template>\n      <script>\n        var viewmodel = {\n          selectList: ko.observableArray([\n            {value: 1, label: '北京'},\n            {value: 6, label: '北平'},\n            {value: 2, label: '上海'},\n            {value: 3, label: '广州'},\n            {value: 4, label: '杭州'},\n            {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]\n          ),\n          base: ko.observable(),\n          onSelectChange: (data) => {\n            console.log('change:' + JSON.stringify(data))\n          }\n        }\n      <\/script>\n      ",multiple:"\n      <template>\n      <y-select\n        params=\"dataList:$root.selectList,multiValue:$root.multiselect,multiple:true\"></y-select>\n      </template>\n      <script>\n      var viewmodel = {\n        selectList: ko.observableArray([\n          {value: 1, label: '北京'},\n          {value: 6, label: '北平'},\n          {value: 2, label: '上海'},\n          {value: 3, label: '广州'},\n          {value: 4, label: '杭州'},\n          {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]\n        ),\n        multiselect: ko.observableArray()\n      }\n      <\/script>\n      ",default:"\n      <template>\n        <y-select params=\"dataList:$root.selectList,value:$root.singleselect.default\"></y-select>\n        <y-select\n          params=\"dataList:$root.selectList,multiValue:$root.multiselectDefault,multiple:true\">\n        </y-select>\n      </template>\n      <script>\n        var viewmodel = {\n          selectList: ko.observableArray([\n            {value: 1, label: '北京'},\n            {value: 6, label: '北平'},\n            {value: 2, label: '上海'},\n            {value: 3, label: '广州'},\n            {value: 4, label: '杭州'},\n            {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]\n          ),\n          default: ko.observable({value: 1, label: '北京'}),\n          multiselectDefault: ko.observableArray([\n            {value: 1, label: '北京'},\n            {value: 6, label: '北平'}\n          ])\n        }\n      <\/script>\n      ",clearable:"\n      <template>\n        <y-select params=\"dataList:$root.selectList,value:$root.clearable,clearable:true\"></y-select>\n      </template>\n      <script>\n      var viewmodel = {\n        selectList: ko.observableArray([\n          {value: 1, label: '北京'},\n          {value: 6, label: '北平'},\n          {value: 2, label: '上海'},\n          {value: 3, label: '广州'},\n          {value: 4, label: '杭州'},\n          {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]\n        ),\n        clearable: ko.observable()\n      }\n      <\/script>\n      ",filterable:"\n      <template>\n        <y-select params=\"dataList:$root.selectList,value:$root.filterable,clearable:true,filterable:true\"></y-select>\n      </template>\n      <script>\n      var viewmodel = {\n        selectList: ko.observableArray([\n          {value: 1, label: '北京'},\n          {value: 6, label: '北平'},\n          {value: 2, label: '上海'},\n          {value: 3, label: '广州'},\n          {value: 4, label: '杭州'},\n          {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]\n        ),\n        filterable: ko.observable()\n      }\n      <\/script>\n      ",onmore:"\n      <template>\n        <y-select params=\"valuekey:'id',labelkey: 'personName',hasmore:true, onmore:$root.showModal,value:$root.singleselect.onmore,loadData: $root.loadSelectData,clearable:true\"></y-select>\n        <y-modal params=\"visible: $root.modalVisible, width:'700px',title:'请选择！'\">\n          自定义内容\n        </y-modal>\n      </template>\n      <script>\n      var viewmodel = {\n        selectList: ko.observableArray([\n          {value: 1, label: '北京'},\n          {value: 6, label: '北平'},\n          {value: 2, label: '上海'},\n          {value: 3, label: '广州'},\n          {value: 4, label: '杭州'},\n          {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]\n        ),\n        onmore: ko.observable(),\n        modalVisible: ko.observable(false),\n        showModal: () => {\n          viewmodel.modalVisible(true)\n        }\n      }\n      <\/script>\n      "},selectList:o.default.observableArray([{value:1,label:"北京"},{value:6,label:"北平"},{value:2,label:"上海"},{value:3,label:"广州"},{value:4,label:"杭州"},{value:5,label:"超过二十个字的参照超过二十个字的参照超过二十个字的参照"}]),loadSelectData:function(e,t){setTimeout(function(){t([{email:"",enterpriseId:30,id:31703,moblie:"",organizationId:41,organizationName:"北京采购部",personCode:"kbczy",personName:"开标操作员",suporgCode:"p01",suporgName:"1网上商城运营方",userId:889,userName:"newtest"}])},0)},singleselect:{base:o.default.observable(),clearable:o.default.observable(),loadData:o.default.observable(),onmore:o.default.observable(),default:o.default.observable({value:1,label:"北京"})},multiselect:o.default.observableArray(),multiselectDefault:o.default.observableArray([{value:1,label:"北京"},{value:6,label:"北平"}]),onSelectChange:function(e){console.log("change:"+JSON.stringify(e))},disabled:o.default.observable(!0),modalVisible:o.default.observable(!1),showModal:function(){e.modalVisible(!0)}};o.default.applyBindings(e,document.getElementById("app"))}Object.defineProperty(t,"__esModule",{value:!0});var l=n(61),r=_interopRequireDefault(l),a=n(0),o=_interopRequireDefault(a);n(36),t.default={template:r.default,init:init}},36:function(e,t,n){"use strict";n(37),n(52)},37:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.code=e.code,this.isShowAll=o.default.observable(!1),this.toggle=function(){this.isShowAll(!this.isShowAll())}.bind(this)}var l=n(38),r=_interopRequireDefault(l);n(39),n(40);var a=n(0),o=_interopRequireDefault(a);o.default.components.register("demo",{viewModel:init,template:r.default})},38:function(e,t){e.exports='<div class="demo">\r\n  <div class="demo-show">\r\n  \x3c!-- ko template: { nodes: $componentTemplateNodes } --\x3e\x3c!-- /ko --\x3e\r\n  </div>\r\n  <div class="demo-split"></div>\r\n  <div class="demo-code" data-bind="css:{\'demo-hideCode\':!isShowAll()}">\r\n    <y-code params="code:code"></y-code>\r\n  </div>\r\n  <div class="demo-toggle" data-bind="click:toggle"><span class="fa" data-bind="css:{\'fa-angle-double-down\':!isShowAll(),\'fa-angle-double-up\':isShowAll()}"></span></div>\r\n</div>\r\n'},39:function(e,t){},40:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Init(e,t){var n=this;this.$el=t.childNodes[0].childNodes[3],this.code=e.code,this.copy=function(){var t=new u.default(".copy",{text:function(){return e.code}});t.on("success",function(e){e.clearSelection(),t.destroy(),window.alert("代码已复制到剪贴板")})},setTimeout(function(){s.default.highlightBlock(n.$el)})}var l=n(41),r=_interopRequireDefault(l);n(42);var a=n(0),o=_interopRequireDefault(a),i=n(3),s=_interopRequireDefault(i),c=n(43),u=_interopRequireDefault(c);n(51),o.default.components.register("y-code",{viewModel:{createViewModel:function(e,t){return new Init(e,t.element)}},template:r.default})},41:function(e,t){e.exports='<div class="code">\r\n  <div class="tools">\r\n    <i class="fa fa-clipboard copy" data-bind="click: copy"></i>\r\n  </div>\r\n  <pre><code class="html" data-bind="text: code"></code></pre>\r\n</div>\r\n'},42:function(e,t){},43:function(e,t,n){var l,r,a;!function(o,i){r=[e,n(44),n(46),n(47)],l=i,void 0!==(a="function"==typeof l?l.apply(t,r):l)&&(e.exports=a)}(0,function(e,t,n,l){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function getAttributeValue(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var r=_interopRequireDefault(t),a=_interopRequireDefault(n),o=_interopRequireDefault(l),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),c=function(e){function Clipboard(e,t){_classCallCheck(this,Clipboard);var n=_possibleConstructorReturn(this,(Clipboard.__proto__||Object.getPrototypeOf(Clipboard)).call(this));return n.resolveOptions(t),n.listenClick(e),n}return _inherits(Clipboard,e),s(Clipboard,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===i(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,o.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return getAttributeValue("action",e)}},{key:"defaultTarget",value:function(e){var t=getAttributeValue("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return getAttributeValue("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),Clipboard}(a.default);e.exports=c})},44:function(e,t,n){var l,r,a;!function(o,i){r=[e,n(45)],l=i,void 0!==(a="function"==typeof l?l.apply(t,r):l)&&(e.exports=a)}(0,function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(e){return e&&e.__esModule?e:{default:e}}(t),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=function(){function ClipboardAction(e){_classCallCheck(this,ClipboardAction),this.resolveOptions(e),this.initSelection()}return r(ClipboardAction,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var l=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=l+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":l(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),ClipboardAction}();e.exports=a})},45:function(e,t){function select(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var l=window.getSelection(),r=document.createRange();r.selectNodeContents(e),l.removeAllRanges(),l.addRange(r),t=l.toString()}return t}e.exports=select},46:function(e,t){function E(){}E.prototype={on:function(e,t,n){var l=this.e||(this.e={});return(l[e]||(l[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function listener(){l.off(e,listener),t.apply(n,arguments)}var l=this;return listener._=t,this.on(e,listener,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),l=0,r=n.length;for(l;l<r;l++)n[l].fn.apply(n[l].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),l=n[e],r=[];if(l&&t)for(var a=0,o=l.length;a<o;a++)l[a].fn!==t&&l[a].fn._!==t&&r.push(l[a]);return r.length?n[e]=r:delete n[e],this}},e.exports=E},47:function(e,t,n){function listen(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!l.string(t))throw new TypeError("Second argument must be a String");if(!l.fn(n))throw new TypeError("Third argument must be a Function");if(l.node(e))return listenNode(e,t,n);if(l.nodeList(e))return listenNodeList(e,t,n);if(l.string(e))return listenSelector(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function listenNode(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function listenNodeList(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function listenSelector(e,t,n){return r(document.body,e,t,n)}var l=n(48),r=n(49);e.exports=listen},48:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},49:function(e,t,n){function _delegate(e,t,n,l,r){var a=listener.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function delegate(e,t,n,l,r){return"function"==typeof e.addEventListener?_delegate.apply(null,arguments):"function"==typeof n?_delegate.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return _delegate(e,t,n,l,r)}))}function listener(e,t,n,r){return function(n){n.delegateTarget=l(n.target,t),n.delegateTarget&&r.call(e,n)}}var l=n(50);e.exports=delegate},50:function(e,t){function closest(e,t){for(;e&&e.nodeType!==n;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var l=Element.prototype;l.matches=l.matchesSelector||l.mozMatchesSelector||l.msMatchesSelector||l.oMatchesSelector||l.webkitMatchesSelector}e.exports=closest},51:function(e,t){},52:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.name=e.name||"",this.link=e.link||""}var l=n(53),r=_interopRequireDefault(l);_interopRequireDefault(n(0)).default.components.register("y-title",{viewModel:init,template:r.default})},53:function(e,t){e.exports='<h1>\r\n  <span data-bind="text: name"></span>组件\r\n  <y-select params="dataList:$root.selectList,value:$root.singleselect.base,onChange:$root.onSelectChange"></y-select>\r\n</h1>\r\n\x3c!-- ko if: link--\x3e\r\n<h2>\r\n  <a data-bind="attr: {href: link}" target="_blank" style="color: #2baee9">\r\n    <span data-bind="text: name"></span>组件API文档\r\n  </a>\r\n</h2>\r\n\x3c!-- /ko --\x3e\r\n<h2>代码示例</h2>'},61:function(e,t){e.exports='<div class="y-box">\r\n  <y-title params="name: \'Select下拉\'"></y-title>\r\n  <demo params="code:code.base">\r\n    <div class="code-top">\r\n      <div class="row">\r\n        <div class="col-md-5">\r\n          <y-select params="dataList:$root.selectList,value:$root.singleselect.base,onChange:$root.onSelectChange"></y-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="code-split">\r\n      <span>基本用法</span>\r\n    </div>\r\n    <div class="code-bottom">\r\n      基本用法。dataList绑定可选择的数据，value绑定已选择的数据，onChange可绑定自定义事件<br>(当点击item时，已选数据发生变化时触发)。\r\n    </div>\r\n  </demo>\r\n\r\n  <demo params="code:code.multiple">\r\n    <div class="code-top">\r\n      <div class="row">\r\n        <div class="col-md-5">\r\n            <y-select\r\n            params="dataList:$root.selectList,multiValue:$root.multiselect,multiple:true"></y-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="code-split">\r\n      <span>多选</span>\r\n    </div>\r\n    <div class="code-bottom">\r\n      通过设置属性multiple可以开启多选模式。多选模式下，multiValue接受数组类型的数据，所返回的也是数组。\r\n    </div>\r\n  </demo>\r\n\r\n  <demo params="code:code.default">\r\n    <div class="code-top">\r\n      <div class="row">\r\n        <div class="col-md-5">\r\n          <y-select params="dataList:$root.selectList,value:$root.singleselect.default"></y-select>\r\n        </div>\r\n        <div class="col-md-5">\r\n          <y-select\r\n            params="dataList:$root.selectList,multiValue:$root.multiselectDefault,multiple:true">\r\n          </y-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="code-split">\r\n      <span>默认值</span>\r\n    </div>\r\n    <div class="code-bottom">\r\n      单选模式设置属性value初始化默认值(基本格式：例{value: 1, label: \'北京\'})，<br>多选模式设置属性multiValue初始化默认值(基本格式：例{value: 1, label: \'北京\'}, {value: 6, label: \'北平\'})。\r\n    </div>\r\n  </demo>\r\n\r\n  <demo params="code:code.clearable">\r\n    <div class="code-top">\r\n      <div class="row">\r\n        <div class="col-md-5">\r\n          <y-select params="dataList:$root.selectList,value:$root.singleselect.clearable,clearable:true"></y-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="code-split">\r\n      <span>可清空</span>\r\n    </div>\r\n    <div class="code-bottom">\r\n      通过设置属性clearable可以清空已选项。\r\n    </div>\r\n  </demo>\r\n\r\n  <demo params="code:code.filterable">\r\n    <div class="code-top">\r\n      <div class="row">\r\n        <div class="col-md-5">\r\n            <y-select params="dataList:$root.selectList,value:$root.singleselect.filterable,clearable:true,filterable:true"></y-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="code-split">\r\n      <span>可搜索</span>\r\n    </div>\r\n    <div class="code-bottom">\r\n        通过设置属性filterable可以开启搜索模式。仅适用于单选模式。\r\n    </div>\r\n  </demo>\r\n\r\n  <demo params="code:code.onmore">\r\n    <div class="code-top">\r\n      <div class="row">\r\n        <div class="col-md-5">\r\n          <y-select params="valuekey:\'id\',labelkey: \'personName\',hasmore:true, onmore:$root.showModal,value:$root.singleselect.onmore,loadData: $root.loadSelectData,clearable:true,filterable:true"></y-select>\r\n          <y-modal params="visible: $root.modalVisible, width:\'700px\',errormsg:\'请选择！\',title:\'请选择！\'">\r\n            自定义内容\r\n          </y-modal>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="code-split">\r\n      <span>自定义内容</span>\r\n    </div>\r\n    <div class="code-bottom">\r\n      通过设置属性hasmore可以开启更多模式，onmore用于绑定点击更多触发的事件。\r\n    </div>\r\n  </demo>\r\n</div>'}});
//# sourceMappingURL=libs.5.554a8b52e1c60c19a36c.js.map