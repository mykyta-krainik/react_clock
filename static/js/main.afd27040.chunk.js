(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n(0),m=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={date:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({date:new Date}),window.console.info(e.getCurrentTime())}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=e.clockName,n=this.props.clockName;t!==n&&window.console.debug("Renamed from ".concat(t," to ").concat(n))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"getCurrentTime",value:function(){return this.state.date.toUTCString().slice(-12,-4)}},{key:"render",value:function(){var e=this.props.clockName;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.getCurrentTime()})]})}}]),n}(l.Component);n(13);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.hideClock=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.showClock=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.hideClock),document.addEventListener("click",this.showClock),this.timerId=window.setInterval((function(){e.setState({clockName:d()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.hideClock),document.removeEventListener("click",this.showClock),clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(m,{clockName:n})]})}}]),n}(l.Component);o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.afd27040.chunk.js.map