!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var o in t)("object"==typeof exports?exports:n)[o]=t[o]}}("undefined"!=typeof self?self:this,function(){return webpackJsonp([21],[,,,,,,,,,function(n,e,t){"use strict";var o=t(1),a=function(n){return n&&n.__esModule?n:{default:n}}(o);t(10),t(11),t(12),t(14),window.ycloud=a.default},function(n,e){},function(n,e){},function(n,e,t){"use strict";function _interopRequireDefault(n){return n&&n.__esModule?n:{default:n}}var o=t(0),a=_interopRequireDefault(o),i=t(13),c=_interopRequireDefault(i),u={componentsList:c.default,hash:a.default.observable(window.location.hash)};"onhashchange"in window&&(void 0===document.documentMode||8===document.documentMode)&&window.addEventListener("hashchange",function(){u.hash(window.location.hash)}),a.default.applyBindings(u,document.getElementById("side-menu"))},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{name:"box",icon:"fa-inbox",showName:"容器"},{name:"button",icon:"fa-youtube-play",showName:"按钮"},{name:"grid",icon:"fa-table",showName:"表格"},{name:"modal",icon:"fa-comment-o",showName:"对话框"},{name:"tree",icon:"fa-list",showName:"树"},{name:"pagination",icon:"fa-angel-right",showName:"分页"},{name:"switch",icon:"fa-eye-slash",showName:"开关"},{name:"select",icon:"fa-sort-desc",showName:"下拉选择"},{name:"radio",icon:"fa-dot-circle-o",showName:"单选框"},{name:"checkbox",icon:"fa-clone",showName:"多选框"},{name:"tag",icon:"fa-tags",showName:"标签"},{name:"boxsticky",icon:"fa-cloud",showName:"吸顶菜单"},{name:"icon",icon:"fa-subscript",showName:"图标"},{name:"input",icon:"fa-pencil-square-o",showName:"输入框"},{name:"notice",icon:"fa-info-circle",showName:"提示消息"},{name:"form",icon:"fa-file-text-o",showName:"表单"},{name:"statetabs",icon:"fa-info-circle",showName:"状态切换"},{name:"cascader",icon:"fa-ellipsis-h",showName:"级联选择"},{name:"datepicker",icon:"fa-calendar",showName:"时间选择器"},{name:"tooltip",icon:"fa-commenting-o",showName:"文字提示"},{name:"breadcrumb",icon:"fa-newspaper-o",showName:"面包屑"}]},function(n,e,t){"use strict";function _interopRequireDefault(n){return n&&n.__esModule?n:{default:n}}function initPage(n){n(function(n){console.log(n),a.default.cleanNode(document.getElementById("bodycontent")),(0,c.default)("#app").hide(),(0,c.default)("#app").html(n.default.template),n.default.init(),(0,c.default)("#app").fadeIn()})}var o=t(0),a=_interopRequireDefault(o),i=t(2),c=_interopRequireDefault(i),u={};u["/box"]=function(n){t.e(20).then(function(){var e=t(15);n(e)}.bind(null,t)).catch(t.oe)},u["/button"]=function(n){t.e(17).then(function(){var e=t(16);n(e)}.bind(null,t)).catch(t.oe)},u["/grid"]=function(n){t.e(12).then(function(){var e=t(17);n(e)}.bind(null,t)).catch(t.oe)},u["/modal"]=function(n){t.e(9).then(function(){var e=t(18);n(e)}.bind(null,t)).catch(t.oe)},u["/tree"]=function(n){t.e(0).then(function(){var e=t(19);n(e)}.bind(null,t)).catch(t.oe)},u["/pagination"]=function(n){t.e(7).then(function(){var e=t(20);n(e)}.bind(null,t)).catch(t.oe)},u["/switch"]=function(n){t.e(3).then(function(){var e=t(21);n(e)}.bind(null,t)).catch(t.oe)},u["/select"]=function(n){t.e(5).then(function(){var e=t(22);n(e)}.bind(null,t)).catch(t.oe)},u["/radio"]=function(n){t.e(6).then(function(){var e=t(23);n(e)}.bind(null,t)).catch(t.oe)},u["/checkbox"]=function(n){t.e(15).then(function(){var e=t(24);n(e)}.bind(null,t)).catch(t.oe)},u["/tag"]=function(n){t.e(2).then(function(){var e=t(25);n(e)}.bind(null,t)).catch(t.oe)},u["/boxsticky"]=function(n){t.e(19).then(function(){var e=t(26);n(e)}.bind(null,t)).catch(t.oe)},u["/icon"]=function(n){t.e(11).then(function(){var e=t(27);n(e)}.bind(null,t)).catch(t.oe)},u["/input"]=function(n){t.e(10).then(function(){var e=t(28);n(e)}.bind(null,t)).catch(t.oe)},u["/notice"]=function(n){t.e(8).then(function(){var e=t(29);n(e)}.bind(null,t)).catch(t.oe)},u["/form"]=function(n){t.e(13).then(function(){var e=t(30);n(e)}.bind(null,t)).catch(t.oe)},u["/statetabs"]=function(n){t.e(4).then(function(){var e=t(31);n(e)}.bind(null,t)).catch(t.oe)},u["/cascader"]=function(n){t.e(16).then(function(){var e=t(32);n(e)}.bind(null,t)).catch(t.oe)},u["/datepicker"]=function(n){t.e(14).then(function(){var e=t(33);n(e)}.bind(null,t)).catch(t.oe)},u["/tooltip"]=function(n){t.e(1).then(function(){var e=t(34);n(e)}.bind(null,t)).catch(t.oe)},u["/breadcrumb"]=function(n){t.e(18).then(function(){var e=t(35);n(e)}.bind(null,t)).catch(t.oe)};var f={};Object.keys(u).forEach(function(n){f[n]=function(){initPage(u[n])}}),window.Router(f).init()}],[9])});
//# sourceMappingURL=libs.app.554a8b52e1c60c19a36c.js.map