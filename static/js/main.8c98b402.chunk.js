(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),h=n.n(l),u=(n(12),n(0)),m=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:(new Date).toLocaleTimeString()},t.timerId=void 0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({date:(new Date).toLocaleTimeString()}),console.log(t.state.date)}),1e3)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(u.jsxs)("p",{"data-cy":"time",children:["Current time:"," ",this.state.date]})}}]),n}(h.a.Component),d=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:Math.floor(7*Math.random())},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.changeName=function(){t.setState({clockName:Math.floor(7*Math.random())})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:this.state.clockName}),this.state.isClockVisible&&Object(u.jsx)(m,{name:this.state.clockName}),Object(u.jsx)("button",{type:"button",onClick:this.showClock,children:"Show Clock"}),Object(u.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide Clock"}),Object(u.jsx)("button",{type:"button",onClick:this.changeName,children:"ChangeName"})]})}}]),n}(h.a.Component),b=d;a.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8c98b402.chunk.js.map