!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var t in o)("object"==typeof exports?exports:n)[t]=o[t]}}("undefined"!=typeof self?self:this,function(){return webpackJsonp([23],[,,,,,,,,,function(n,e,o){"use strict";var t=o(1),a=function(n){return n&&n.__esModule?n:{default:n}}(t);o(10),o(11),o(12),o(14),window.ycloud=a.default},function(n,e){},function(n,e){},function(n,e,o){"use strict";function _interopRequireDefault(n){return n&&n.__esModule?n:{default:n}}var t=o(0),a=_interopRequireDefault(t),i=o(13),c=_interopRequireDefault(i),u={componentsList:c.default,hash:a.default.observable(window.location.hash)};"onhashchange"in window&&(void 0===document.documentMode||8===document.documentMode)&&window.addEventListener("hashchange",function(){u.hash(window.location.hash)}),a.default.applyBindings(u,document.getElementById("side-menu"))},function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{name:"box",icon:"fa-inbox",showName:"容器"},{name:"button",icon:"fa-youtube-play",showName:"按钮"},{name:"grid",icon:"fa-table",showName:"表格"},{name:"complexgrid",icon:"fa-table",showName:"复杂表格"},{name:"modal",icon:"fa-comment-o",showName:"对话框"},{name:"tree",icon:"fa-list",showName:"树"},{name:"pagination",icon:"fa-angel-right",showName:"分页"},{name:"switch",icon:"fa-eye-slash",showName:"开关"},{name:"select",icon:"fa-sort-desc",showName:"下拉选择"},{name:"radio",icon:"fa-dot-circle-o",showName:"单选框"},{name:"checkbox",icon:"fa-clone",showName:"多选框"},{name:"tag",icon:"fa-tags",showName:"标签"},{name:"boxsticky",icon:"fa-cloud",showName:"吸顶菜单"},{name:"icon",icon:"fa-subscript",showName:"图标"},{name:"input",icon:"fa-pencil-square-o",showName:"输入框"},{name:"notice",icon:"fa-info-circle",showName:"提示消息"},{name:"form",icon:"fa-file-text-o",showName:"表单"},{name:"statetabs",icon:"fa-info-circle",showName:"状态切换"},{name:"cascader",icon:"fa-ellipsis-h",showName:"级联选择"},{name:"datepicker",icon:"fa-calendar",showName:"时间选择器"},{name:"tooltip",icon:"fa-commenting-o",showName:"文字提示"},{name:"showdetail",icon:"fa-commenting-o",showName:"超长提示"},{name:"breadcrumb",icon:"fa-newspaper-o",showName:"面包屑"}]},function(n,e,o){"use strict";function _interopRequireDefault(n){return n&&n.__esModule?n:{default:n}}function initPage(n){n(function(n){console.log(n),a.default.cleanNode(document.getElementById("bodycontent")),(0,c.default)("#app").hide(),(0,c.default)("#app").html(n.default.template),n.default.init(),(0,c.default)("#app").fadeIn()})}var t=o(0),a=_interopRequireDefault(t),i=o(2),c=_interopRequireDefault(i),u={};u["/box"]=function(n){o.e(22).then(function(){var e=o(15);n(e)}.bind(null,o)).catch(o.oe)},u["/button"]=function(n){o.e(19).then(function(){var e=o(16);n(e)}.bind(null,o)).catch(o.oe)},u["/grid"]=function(n){o.e(13).then(function(){var e=o(17);n(e)}.bind(null,o)).catch(o.oe)},u["/complexgrid"]=function(n){o.e(16).then(function(){var e=o(18);n(e)}.bind(null,o)).catch(o.oe)},u["/modal"]=function(n){o.e(10).then(function(){var e=o(19);n(e)}.bind(null,o)).catch(o.oe)},u["/tree"]=function(n){o.e(0).then(function(){var e=o(20);n(e)}.bind(null,o)).catch(o.oe)},u["/pagination"]=function(n){o.e(8).then(function(){var e=o(21);n(e)}.bind(null,o)).catch(o.oe)},u["/switch"]=function(n){o.e(3).then(function(){var e=o(22);n(e)}.bind(null,o)).catch(o.oe)},u["/select"]=function(n){o.e(6).then(function(){var e=o(23);n(e)}.bind(null,o)).catch(o.oe)},u["/radio"]=function(n){o.e(7).then(function(){var e=o(24);n(e)}.bind(null,o)).catch(o.oe)},u["/checkbox"]=function(n){o.e(17).then(function(){var e=o(25);n(e)}.bind(null,o)).catch(o.oe)},u["/tag"]=function(n){o.e(2).then(function(){var e=o(26);n(e)}.bind(null,o)).catch(o.oe)},u["/boxsticky"]=function(n){o.e(21).then(function(){var e=o(27);n(e)}.bind(null,o)).catch(o.oe)},u["/icon"]=function(n){o.e(12).then(function(){var e=o(28);n(e)}.bind(null,o)).catch(o.oe)},u["/input"]=function(n){o.e(11).then(function(){var e=o(29);n(e)}.bind(null,o)).catch(o.oe)},u["/notice"]=function(n){o.e(9).then(function(){var e=o(30);n(e)}.bind(null,o)).catch(o.oe)},u["/form"]=function(n){o.e(14).then(function(){var e=o(31);n(e)}.bind(null,o)).catch(o.oe)},u["/statetabs"]=function(n){o.e(4).then(function(){var e=o(32);n(e)}.bind(null,o)).catch(o.oe)},u["/cascader"]=function(n){o.e(18).then(function(){var e=o(33);n(e)}.bind(null,o)).catch(o.oe)},u["/datepicker"]=function(n){o.e(15).then(function(){var e=o(34);n(e)}.bind(null,o)).catch(o.oe)},u["/tooltip"]=function(n){o.e(1).then(function(){var e=o(35);n(e)}.bind(null,o)).catch(o.oe)},u["/breadcrumb"]=function(n){o.e(20).then(function(){var e=o(36);n(e)}.bind(null,o)).catch(o.oe)},u["/showdetail"]=function(n){o.e(5).then(function(){var e=o(37);n(e)}.bind(null,o)).catch(o.oe)};var f={};Object.keys(u).forEach(function(n){f[n]=function(){initPage(u[n])}}),window.Router(f).init()}],[9])});
//# sourceMappingURL=libs.app.7d6ef013e6bf2bc8e650.js.map