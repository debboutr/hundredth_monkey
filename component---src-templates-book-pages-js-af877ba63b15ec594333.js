(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});n(73);var a=n(0),r=n.n(a),o=n(148),l=n(151),i=n(162);n(178);t.default=function(e){var t,n=e.data.markdownRemark;t=""!==n.frontmatter.monkey_msg?r.a.createElement(l.a,{msg:n.frontmatter.monkey_msg}):r.a.createElement("div",null);var a=parseInt(n.frontmatter.next.split("-")[1])-1;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("div",{style:{textDecoration:"none",color:"black",fontFamily:"Gentium Book Basic"},dangerouslySetInnerHTML:{__html:n.html}})),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(o.Link,{to:n.frontmatter.previous},r.a.createElement("div",{className:"arrow_box_left",style:{position:"absolute",top:"50%vh",left:70,color:"black",fontSize:"1.5rem",fontFamily:"Gentium Book Basic",textAlign:"center"}},"prev")),r.a.createElement("div",{style:{textAlign:"center",color:"black",flex:1,fontSize:"2rem",fontFamily:"Gentium Book Basic"}},a),r.a.createElement(o.Link,{to:n.frontmatter.next},r.a.createElement("div",{className:"arrow_box_right",style:{position:"absolute",top:"50%vh",right:70,color:"black",fontSize:"1.5rem",fontFamily:"Gentium Book Basic",textAlign:"center"}},"next"))),t)};var c="3306101301"},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(147),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var u=n(149),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},149:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(52),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(152),l=n.n(o),i=n(153),c=n.n(i);t.a=function(e){return r.a.createElement("div",{className:l.a.container},r.a.createElement("img",{src:c.a,alt:"logo"}),r.a.createElement("b",{className:l.a.mono},"NUCLEAR WAR IS BAD FOR ",e.msg))}},152:function(e,t,n){e.exports={container:"monkey_msg-module--container--10l3x",mono:"monkey_msg-module--mono--39kff"}},153:function(e,t,n){e.exports=n.p+"static/monkey-4fe313ac03179686a8a4b31e0de107f9.png"},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(155),l=n.n(o);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:l.a.container},t)}},155:function(e,t,n){e.exports={container:"container-module--container--3C57J"}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"the hundredth monkey",author:"ken keyes, jr."}}}}},160:function(e,t,n){},161:function(e,t,n){e.exports=n.p+"static/title_monkey-82bd768ad984846d7f04a0f7e6e5e8ad.png"},162:function(e,t,n){"use strict";var a=n(159),r=n(0),o=n.n(r),l=n(163),i=n(148),c=n(154),u=(n(73),n(16)),s=n(7),m=n.n(s),d=n(51),f=n.n(d),p=n(164),h=n.n(p),v=(n(165),function(e){function t(t,n){var a;return(a=e.call(this,t,n)||this).handleChangeStart=function(){},a.handleChange=function(e){a.setState({value:e})},a.handleChangeComplete=function(){var e=a.state.value;a.setState({value:e}),Object(i.navigate)("/page-"+e)},a.cleanValue=function(e){return isNaN(e)?0:e},a.state={value:a.props.path},a.cleanValue=a.cleanValue.bind(f()(f()(a))),a}return m()(t,e),t.prototype.render=function(){var e=this.state.value;return e=this.cleanValue(e),o.a.createElement("div",{className:"slider"},o.a.createElement(h.a,{min:0,max:167,value:e,onChangeStart:this.handleChangeStart,onChange:this.handleChange,onChangeComplete:this.handleChangeComplete}))},t}(r.Component)),g=(n(160),function(e){return o.a.createElement("header",{className:"toolbar"},o.a.createElement("nav",{className:"toolbar__navigation"},o.a.createElement("div",null),o.a.createElement("div",{className:"toolbar__logo"},o.a.createElement(i.Link,{to:"/"},o.a.createElement("u",null,"the hundredth monkey"))),o.a.createElement("div",{className:"spacer"},o.a.createElement(u.Location,null,function(e){var t=e.location;return o.a.createElement(v,{path:parseInt(t.pathname.split("-").pop())})})),o.a.createElement("div",{className:"toolbar__navigation-items"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.Link,{to:"/"},"ken keyes, jr."))))))}),y=n(161),E=n.n(y);t.a=function(e){var t=e.children;return o.a.createElement(i.StaticQuery,{query:"3497927624",render:function(e){return o.a.createElement("div",null,o.a.createElement(l.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Hundredth Monkey"),o.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:E.a})),o.a.createElement(g,null),o.a.createElement("main",{style:{marginTop:"64px"}},o.a.createElement(c.a,null,t)))},data:a})}},178:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-book-pages-js-af877ba63b15ec594333.js.map