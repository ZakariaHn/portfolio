(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(e,a,t){e.exports=t(67)},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(32),i=t.n(c),r=function(){return l.a.createElement("div",{className:"logo"},l.a.createElement("h4",null,"Z H"))},s=function(e){var a,t=new Date,n=t.getHours()+":"+t.getMinutes(),c=t.getHours();c<12?a="Good Morning":c>=12&&c<17?a="Good Afternoon":c>=17&&c<=24&&(a="Good Evening");return l.a.createElement("div",{className:"circles"},l.a.createElement("div",{className:"greeting"},l.a.createElement("div",{id:"lblGreetings"},a.split("").map((function(e,a){return l.a.createElement("span",{key:a,className:"fast-flicker"},e)})))),l.a.createElement("div",{className:"row big-circle"},l.a.createElement("div",{className:"row small-circle"},n)))},o=function(){return l.a.createElement("div",{className:"nameArea"},l.a.createElement("h5",{className:"name-info"},"I'm Zakaria Hamdan"),l.a.createElement("p",{className:"job-info"},"Front/ Back-End Developer currenlty living in Germany."))},m=t(4),u=function(){return l.a.createElement("div",{className:"navLeft"},l.a.createElement(m.b,{to:"/about",className:"lblAbout"},"About"))},d=t(9),E=function(){return l.a.createElement(d.b.div,{style:{position:"absolute"},initial:"initial",animate:"in",exit:"out",variants:{initial:{opacity:0,x:"-100vw",scale:.8},in:{opacity:1,x:0,scale:1},out:{opacity:0,x:"100vw",scale:1.2}},transition:{type:"tween",ease:"anticipate",duration:1}},l.a.createElement("div",{className:"homePage"},l.a.createElement(u,null),l.a.createElement("div",{className:"homePageBody"},l.a.createElement(r,null),l.a.createElement(s,null),l.a.createElement(o,null))))},v=function(){return l.a.createElement(d.b.div,{style:{position:"absolute"},initial:"out",animate:"in",exit:"out",variants:{initial:{opacity:0,y:"-100vh",scale:.8},in:{opacity:1,y:0,scale:1},out:{opacity:0,y:"100vh",scale:1.2}},transition:{type:"tween",ease:"anticipate",duration:1}},l.a.createElement("div",{className:"works-page"},l.a.createElement("div",{className:"navBar"},l.a.createElement(m.b,{to:"/home"},"HOME"),l.a.createElement(m.b,{to:"/about"},"ABOUT"),l.a.createElement(m.b,{to:"/services"},"SERVICES"),l.a.createElement(m.b,{to:"/contact"},"CONTACT")),l.a.createElement("div",{className:"gallery"},["a","b","c","d","e","f","g","h","i"].map((function(e){return l.a.createElement("div",{className:e})})))))},p=function(){return l.a.createElement(d.b.div,{style:{position:"absolute"},initial:"out",animate:"in",exit:"out",variants:{initial:{opacity:0,scale:.2},in:{opacity:1,scale:1},out:{opacity:0,scale:2}},transition:{type:"tween",ease:"anticipate",duration:1}},l.a.createElement("div",{className:"about-page"},l.a.createElement("div",{className:"bio"},l.a.createElement("p",{className:"first"},"My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavor. Passionate about writing clean, quality, high-performance codes, making food and music."),l.a.createElement("p",{className:"seconde"},"I create successful websites that are fast, easy to use, and built with best practices plus helping designers, small agencies and businesses bring their ideas to life.")),l.a.createElement("div",{className:"navigator"},l.a.createElement("div",{className:"imagedCircle"}),l.a.createElement("div",{className:"navBar"},l.a.createElement(m.b,{to:"/home"},"HOME"),l.a.createElement(m.b,{to:"/services"},"SERVICES"),l.a.createElement(m.b,{to:"/work"},"WORK"),l.a.createElement(m.b,{to:"/contact"},"CONTACT")))))},b=t(12),y=t(3),f=t.n(y),h=function(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)({x:0,y:0}),r=Object(b.a)(i,2),s=r[0],o=r[1],m=Object(n.useState)(!1),u=Object(b.a)(m,2),d=u[0],E=u[1],v=Object(n.useState)(!1),p=Object(b.a)(v,2),y=p[0],h=p[1];Object(n.useEffect)((function(){return g(),N(),function(){return w()}}),[]);var N=function(){document.querySelectorAll("a").forEach((function(e){e.addEventListener("mouseover",(function(){return h(!0)})),e.addEventListener("mouseout",(function(){return h(!1)}))}))},g=function(){document.addEventListener("mousedown",O),document.addEventListener("mouseup",S),document.addEventListener("mousemove",k),document.addEventListener("mouseenter",C),document.addEventListener("mouseleave",x)},w=function(){document.removeEventListener("mousemove",k),document.removeEventListener("mouseenter",C),document.removeEventListener("mouseleave",x),document.removeEventListener("mousedown",O),document.removeEventListener("mouseup",S)},O=function(){c(!0)},S=function(){c(!1)},k=function(e){o({x:e.clientX,y:e.clientY})},x=function(){E(!0)},C=function(){E(!1)},T=f()("cursor",{"cursor--hidden":d,"cursor--clicked":t,"cursor--link-hovered":y});return l.a.createElement("div",{className:T,style:{left:"".concat(s.x,"px"),top:"".concat(s.y,"px")}},l.a.createElement("div",{className:"right"}),l.a.createElement("div",{className:"inner"}),l.a.createElement("div",{className:"left"}))},N=t(34),g=t(35),w=t.n(g),O=t(14),S=function(){var e=Object(n.useState)({name:"",email:"",message:"",disabled:!1,emailSent:null}),a=Object(b.a)(e,2),t=a[0],c=a[1],i=function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;c(Object(N.a)({},n,t))},r=new Date,s=new Array(7);s[0]="Sunday",s[1]="Monday",s[2]="Tuesday",s[3]="Wednesday",s[4]="Thursday",s[5]="Friday",s[6]="Saturday";var o="Have a good ".concat(s[r.getDay()]);return l.a.createElement(d.b.div,{style:{position:"absolute"},initial:"out",animate:"in",exit:"out",variants:{initial:{opacity:0,x:"-100vw",scale:.8},in:{opacity:1,x:0,scale:1},out:{opacity:0,x:"100vw",scale:1.2}},transition:{type:"tween",ease:"anticipate",duration:1}},l.a.createElement("div",{className:"contact-page"},l.a.createElement("div",{className:"a"},l.a.createElement("p",null,"LET'S COMUNICATE")),l.a.createElement("div",{className:"b"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c({disabled:!0}),w.a.post("http://localhost:3000/api/email",t).then((function(e){e.data.success?c({disabled:!1,emailSent:!0}):c({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),c({disabled:!1,emailSent:!1})}))}},l.a.createElement("h5",null,"Full Name"),l.a.createElement(O.a.Control,{className:"full-name",id:"full-name",name:"name",type:"text",value:t.name,onChange:i}),l.a.createElement("h5",null,"Email"),l.a.createElement(O.a.Control,{className:"email",id:"email",name:"email",type:"email",value:t.email,onChange:i}),l.a.createElement("h5",null,"Hello Zakaria,"),l.a.createElement(O.a.Control,{className:"message",id:"message",name:"message",as:"textarea",rows:"3",value:t.message,placeholder:"and continue here...",onChange:i}),l.a.createElement("button",{className:"submit-button",variant:"primary",type:"submit",disabled:t.disabled},"SUBMIT"),l.a.createElement("p",{className:"goodBey"},o),!0===t.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===t.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))),l.a.createElement("div",{className:"c"},l.a.createElement("div",null)),l.a.createElement("div",{className:"navBar"},l.a.createElement(m.b,{to:"/home"},"HOME"),l.a.createElement(m.b,{to:"/about"},"ABOUT"),l.a.createElement(m.b,{to:"/services"},"SERVICES"),l.a.createElement(m.b,{to:"/work"},"WORK"))))},k=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{class:"container design"},l.a.createElement("div",{class:"sec-row-line-top1"}),l.a.createElement("div",{class:"sec-row-line-mid1"}),l.a.createElement("div",{class:"sec-row-line-down1"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"WEB DESIGN"),l.a.createElement("p",null,"W orking with you to develop a website strategy so that your website not only looks great, but works great too.")))},x=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{class:"container thethird"},l.a.createElement("div",{class:"earth"}),l.a.createElement("div",{class:"moon"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"RESPONSIVE"),l.a.createElement("p",null,"All of my websites are developed to look and perform beautifully on every device you are viewing it from.")))},C=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"container fifth"},l.a.createElement("div",{className:"a"}),l.a.createElement("div",{className:"b"}),l.a.createElement("div",{className:"c"}),l.a.createElement("div",{className:"d"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"SEO "),l.a.createElement("p",null,"Just that you have a website doesn't mean anyone will find it. I can help your website get found in the search engines.")))},T=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{class:"container third"},l.a.createElement("div",{class:"sec-row-line-top3"}),l.a.createElement("div",{class:"sec-row-line-mid3"}),l.a.createElement("div",{class:"sec-row-line-bottom3"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"ARCHITECTURE"),l.a.createElement("p",null,"Easy to navigate and logical page structure helps you find what you are looking for.")))},A=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{class:"container five"},l.a.createElement("div",{class:"a"}),l.a.createElement("div",{class:"b"}),l.a.createElement("div",{class:"c"}),l.a.createElement("div",{class:"d"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"SUPPORT"),l.a.createElement("p",null,'Your website needs ongoing care to perform at its best. Don\'t make the "set it and forget it" mistake.')))},j=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{class:"container thesecond"},l.a.createElement("div",null,l.a.createElement("div",{class:"little"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"HOSTING"),l.a.createElement("p",null,"As your provider,taking care of all daily hosting operations: software updates, server management and email hosting.")))},B=function(){return l.a.createElement(d.b.div,{style:{position:"absolute"},initial:"out",animate:"in",exit:"out",variants:{initial:{opacity:0,y:"100vh",scale:.8},in:{opacity:1,y:0,scale:1},out:{opacity:0,y:"-100vh",scale:1.2}},transition:{type:"tween",ease:"anticipate",duration:1}},l.a.createElement("div",{className:"services-page"},l.a.createElement("div",{className:"row-up"},l.a.createElement(k,null),l.a.createElement(x,null),l.a.createElement(T,null)),l.a.createElement("div",{className:"row-down"},l.a.createElement(C,null),l.a.createElement(A,null),l.a.createElement(j,null)),l.a.createElement("div",{className:"navBar"},l.a.createElement(m.b,{to:"/home"},"HOME"),l.a.createElement(m.b,{to:"/about"},"ABOUT"),l.a.createElement(m.b,{to:"/work"},"WORK"),l.a.createElement(m.b,{to:"/contact"},"CONTACT"))))},L=t(5),I=t(36),H=t(37),M=t(19);I.a.add(H.a,M.a,M.b);var R=function(){var e=Object(L.f)();return l.a.createElement("main",{style:{overflowX:"hidden"}},l.a.createElement(d.a,{exitBeforeEnter:!0},l.a.createElement(L.c,{location:e,key:e.pathname},l.a.createElement(L.a,{path:"/contact",component:S}),l.a.createElement(L.a,{path:"/about",component:p}),l.a.createElement(L.a,{path:"/work",component:v}),l.a.createElement(L.a,{path:"/services",component:B}),l.a.createElement(L.a,{path:"/",component:E}))),l.a.createElement(h,null))};t(66);i.a.render(l.a.createElement(m.a,null,l.a.createElement(R,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.7170baec.chunk.js.map