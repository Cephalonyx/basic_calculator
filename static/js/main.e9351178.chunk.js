(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_School_Website_react_stuff_basic_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),D_School_Website_react_stuff_basic_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),D_School_Website_react_stuff_basic_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),D_School_Website_react_stuff_basic_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),D_School_Website_react_stuff_basic_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Items_Screen__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_Items_Numberpad__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8),Calculator=function(_React$Component){function Calculator(){var _getPrototypeOf2,_this;Object(D_School_Website_react_stuff_basic_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(D_School_Website_react_stuff_basic_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(D_School_Website_react_stuff_basic_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={equation:"",result:0},_this.onButtonPress=function(event){var equation=_this.state.equation,pressedButton=event.target.innerHTML;if("C"===pressedButton)return _this.clear();if(pressedButton>="0"&&pressedButton<="9"||"."===pressedButton)equation+=pressedButton;else if(-1!==["+","-","*","/","%"].indexOf(pressedButton))equation+=" "+pressedButton+" ";else if("="===pressedButton)try{var evalResult=eval(equation),result=Number.isInteger(evalResult)?evalResult:evalResult.toFixed(2);_this.setState({result:result})}catch(error){alert("Error! You entered an invalid equation. Resetting.")}else equation=equation.trim(),equation=equation.substr(0,equation.length-1);_this.setState({equation:equation})},_this}return Object(D_School_Website_react_stuff_basic_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_React$Component),Object(D_School_Website_react_stuff_basic_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"clear",value:function(){this.setState({equation:"",result:0})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Items_Screen__WEBPACK_IMPORTED_MODULE_6__.a,{equation:this.state.equation,result:this.state.result})," ",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Items_Numberpad__WEBPACK_IMPORTED_MODULE_7__.a,{onButtonPress:this.onButtonPress}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calculator},,,,,function(e,t,_){"use strict";var n=_(0),a=_.n(n),r=function(e){return a.a.createElement("div",{className:"numberrow"},e.children)},s=function(e){return a.a.createElement("button",{className:"button",onClick:e.onButtonPress},e.children)};t.a=function(e){return a.a.createElement("section",{className:"numberpad"},a.a.createElement(r,null,a.a.createElement(s,{onButtonPress:e.onButtonPress},"C"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"\u21d0"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"%"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"/")),a.a.createElement(r,null,a.a.createElement(s,{onButtonPress:e.onButtonPress},"7"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"8"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"9"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"*")),a.a.createElement(r,null,a.a.createElement(s,{onButtonPress:e.onButtonPress},"4"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"5"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"6"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"-")),a.a.createElement(r,null,a.a.createElement(s,{onButtonPress:e.onButtonPress},"1"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"2"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"3"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"+")),a.a.createElement(r,null,a.a.createElement(s,null,a.a.createElement("span",{role:"img","aria-label":"Pineapple"},"\ud83c\udf4d")),a.a.createElement(s,{onButtonPress:e.onButtonPress},"0"),a.a.createElement(s,{onButtonPress:e.onButtonPress},"."),a.a.createElement(s,{onButtonPress:e.onButtonPress},"=")))}},function(e,t,_){"use strict";var n=_(0),a=_.n(n),r=function(e){return a.a.createElement("div",{className:"result"},e.children)},s=function(e){return a.a.createElement("div",{className:"equation"},e.children)};t.a=function(e){return a.a.createElement("section",{className:"screen"},a.a.createElement(r,null,e.result),a.a.createElement(s,null,e.equation))}},,function(e,t,_){e.exports=_(18)},,,,,,function(e,t,_){},function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),r=_(2),s=_.n(r),o=(_(17),_(3)),u=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(o.a,null))};s.a.render(a.a.createElement(u,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.e9351178.chunk.js.map