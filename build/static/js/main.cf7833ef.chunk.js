(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(e,a,t){e.exports=t(67)},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(32),i=t.n(c),r=t(6),s=function(){return l.a.createElement("div",{className:"logo"},l.a.createElement("h4",null,"Z H"))},o=function(){var e,a=new Date,t=a.getHours()+":"+a.getMinutes(),n=a.getHours();n<12?e="Good Morning":n>=12&&n<17?e="Good Afternoon":n>=17&&n<=24&&(e="Good Evening");return l.a.createElement("div",{className:"circles"},l.a.createElement("div",{className:"greeting"},l.a.createElement("div",{id:"lblGreetings"},e.split("").map((function(e,a){return l.a.createElement("span",{key:a,className:"fast-flicker"},e)})))),l.a.createElement("div",{className:"row big-circle"},l.a.createElement("div",{className:"row small-circle"},t)))},m=function(){return l.a.createElement("div",{className:"nameArea"},l.a.createElement("h5",{className:"name-info"},"I'm Zakaria Hamdan"),l.a.createElement("p",{className:"job-info"},"Front/ Back-End Developer currenlty living in Germany."))},u=t(4),d=function(){return l.a.createElement("div",{className:"navLeft"},l.a.createElement(u.b,{to:"/portfolio-React/about",className:"z lblAbout"},"About"))},E=t(10),v=function(){var e=Object(n.useState)({pageVariants:{initial:{opacity:0,x:"-100vw",scale:.8},in:{opacity:1,x:0,scale:1},out:{opacity:0,x:"100vw",scale:1.2}},pageTransition:{type:"tween",ease:"anticipate",duration:1},pageStyle:{position:"absolute"}}),a=Object(r.a)(e,1)[0],t=a.pageStyle,c=a.pageVariants,i=a.pageTransition;return l.a.createElement(E.b.div,{style:t,initial:"initial",animate:"in",exit:"out",variants:c,transition:i},l.a.createElement("div",{className:"homePage"},l.a.createElement(d,null),l.a.createElement("div",{className:"homePageBody"},l.a.createElement(s,null),l.a.createElement(o,null),l.a.createElement(m,null))))},p=function(){var e=Object(n.useState)({pageVariants:{initial:{opacity:0,y:"-100vh",scale:.8},in:{opacity:1,y:0,scale:1},out:{opacity:0,y:"100vh",scale:1.2}},pageTransition:{type:"tween",ease:"anticipate",duration:1},pageStyle:{position:"absolute"}}),a=Object(r.a)(e,1)[0],t=a.pageStyle,c=a.pageVariants,i=a.pageTransition;return l.a.createElement(E.b.div,{style:t,initial:"out",animate:"in",exit:"out",variants:c,transition:i},l.a.createElement("div",{className:"works-page"},l.a.createElement("div",{className:"navBar"},l.a.createElement(u.b,{className:"z",to:"/home"},"HOME"),l.a.createElement(u.b,{className:"z",to:"/about"},"ABOUT"),l.a.createElement(u.b,{className:"z",to:"/services"},"SERVICES"),l.a.createElement(u.b,{className:"z",to:"/contact"},"CONTACT")),l.a.createElement("div",{className:"gallery"},["a","b","c","d","e","f","g","h","i"].map((function(e){return l.a.createElement("div",{className:e})})))))},b=function(){return l.a.createElement("div",{className:"bio"},l.a.createElement("p",{className:"first"},"My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavor. Passionate about writing clean, quality, high-performance codes, making food and music."),l.a.createElement("p",{className:"seconde"},"I create successful websites that are fast, easy to use, and built with best practices plus helping designers, small agencies and businesses bring their ideas to life."))},f=function(){return l.a.createElement("div",{className:"navigator"},l.a.createElement("div",{className:"imagedCircle"}),l.a.createElement("div",{className:"navBar"},l.a.createElement(u.b,{className:"z",to:"/portfolio-React/home"},"HOME"),l.a.createElement(u.b,{className:"z",to:"/portfolio-React/services"},"SERVICES"),l.a.createElement(u.b,{className:"z",to:"/portfolio-React/work"},"WORK"),l.a.createElement(u.b,{className:"z",to:"/portfolio-React/contact"},"CONTACT")))},y=function(){var e=Object(n.useState)({pageVariants:{initial:{opacity:0,scale:.2},in:{opacity:1,scale:1},out:{opacity:0,scale:2}},pageTransition:{type:"tween",ease:"anticipate",duration:1},pageStyle:{position:"absolute"}}),a=Object(r.a)(e,1)[0],t=a.pageStyle,c=a.pageVariants,i=a.pageTransition;return l.a.createElement(E.b.div,{style:t,initial:"out",animate:"in",exit:"out",variants:c,transition:i},l.a.createElement("div",{className:"about-page"},l.a.createElement(b,null),l.a.createElement(f,null)))},g=t(3),N=t.n(g),h=function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)({x:0,y:0}),s=Object(r.a)(i,2),o=s[0],m=s[1],u=Object(n.useState)(!1),d=Object(r.a)(u,2),E=d[0],v=d[1],p=Object(n.useState)(!1),b=Object(r.a)(p,2),f=b[0],y=b[1];Object(n.useEffect)((function(){return h(),g(),function(){return w()}}),[]);var g=function(){document.querySelectorAll(".z").forEach((function(e){e.addEventListener("mouseover",(function(){return y(!0)})),e.addEventListener("mouseout",(function(){return y(!1)}))}))},h=function(){document.addEventListener("mousedown",S),document.addEventListener("mouseup",O),document.addEventListener("mousemove",R),document.addEventListener("mouseenter",k),document.addEventListener("mouseleave",T)},w=function(){document.removeEventListener("mousemove",R),document.removeEventListener("mouseenter",k),document.removeEventListener("mouseleave",T),document.removeEventListener("mousedown",S),document.removeEventListener("mouseup",O)},S=function(){c(!0)},O=function(){c(!1)},R=function(e){m({x:e.clientX,y:e.clientY})},T=function(){v(!0)},k=function(){v(!1)},j=N()("cursor",{"cursor--hidden":E,"cursor--clicked":t,"cursor--link-hovered":f});return l.a.createElement("div",{className:j,style:{left:"".concat(o.x,"px"),top:"".concat(o.y,"px")}},l.a.createElement("div",{className:"right"}),l.a.createElement("div",{className:"inner"}),l.a.createElement("div",{className:"left"}))},w=t(34),S=t(14),O=t(35),R=t.n(O),T=function(){var e=Object(n.useState)({name:"",email:"",message:"",disabled:!1,emailSent:null}),a=Object(r.a)(e,2),t=a[0],c=a[1],i=function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;c(Object(w.a)({},n,t))},s=new Date,o=new Array(7);o[0]="Sunday",o[1]="Monday",o[2]="Tuesday",o[3]="Wednesday",o[4]="Thursday",o[5]="Friday",o[6]="Saturday";var m="Have a good ".concat(o[s.getDay()]);return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c({disabled:!0}),R.a.post("http://localhost:3000/api/email",t).then((function(e){e.data.success?c({disabled:!1,emailSent:!0}):c({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),c({disabled:!1,emailSent:!1})}))}},l.a.createElement("h5",null,"Full Name"),l.a.createElement(S.a.Control,{className:"full-name",id:"full-name",name:"name",type:"text",value:t.name,onChange:i}),l.a.createElement("h5",null,"Email"),l.a.createElement(S.a.Control,{className:"email",id:"email",name:"email",type:"email",value:t.email,onChange:i}),l.a.createElement("h5",null,"Hello Zakaria,"),l.a.createElement(S.a.Control,{className:"message",id:"message",name:"message",as:"textarea",rows:"3",value:t.message,placeholder:"and continue here...",onChange:i}),l.a.createElement("button",{className:"submit-button",variant:"primary",type:"submit",disabled:t.disabled},"SUBMIT"),l.a.createElement("p",{className:"goodBey"},m),!0===t.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===t.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))},k=function(){return l.a.createElement("div",{className:"navBar"},l.a.createElement(u.b,{className:"z",to:"/portfolio-React/home"},"HOME"),l.a.createElement(u.b,{className:"z",to:"/portfolio-React/about"},"ABOUT"),l.a.createElement(u.b,{className:"z",to:"/portfolio-React/services"},"SERVICES"),l.a.createElement(u.b,{className:"z",to:"/portfolio-React/work"},"WORK"))},j=function(){var e=Object(n.useState)({pageVariants:{initial:{opacity:0,x:"-100vw",scale:.8},in:{opacity:1,x:0,scale:1},out:{opacity:0,x:"100vw",scale:1.2}},pageTransition:{type:"tween",ease:"anticipate",duration:1},pageStyle:{position:"absolute"}}),a=Object(r.a)(e,1)[0],t=a.pageStyle,c=a.pageVariants,i=a.pageTransition;return l.a.createElement(E.b.div,{style:t,initial:"out",animate:"in",exit:"out",variants:c,transition:i},l.a.createElement("div",{className:"contact-page"},l.a.createElement("div",{className:"a"},l.a.createElement("p",null,"LET'S COMUNICATE")),l.a.createElement("div",{className:"b"},l.a.createElement(T,null)),l.a.createElement("div",{className:"c"},l.a.createElement("div",null)),l.a.createElement(k,null)))},x=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{class:"container design"},l.a.createElement("div",{class:"sec-row-line-top1"}),l.a.createElement("div",{class:"sec-row-line-mid1"}),l.a.createElement("div",{class:"sec-row-line-down1"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"WEB DESIGN"),l.a.createElement("p",null,"Working with you to develop a website strategy so that your website not only looks great, but works great too.")))},C=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{class:"container thethird"},l.a.createElement("div",{class:"earth"}),l.a.createElement("div",{class:"moon"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"RESPONSIVE"),l.a.createElement("p",null,"All of my websites are developed to look and perform beautifully on every device you are viewing it from.")))},A=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"container fifth"},l.a.createElement("div",{className:"a"}),l.a.createElement("div",{className:"b"}),l.a.createElement("div",{className:"c"}),l.a.createElement("div",{className:"d"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"SEO "),l.a.createElement("p",null,"Just that you have a website doesn't mean anyone will find it. I can help your website get found in the search engines.")))},z=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{class:"container third"},l.a.createElement("div",{class:"sec-row-line-top3"}),l.a.createElement("div",{class:"sec-row-line-mid3"}),l.a.createElement("div",{class:"sec-row-line-bottom3"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"ARCHITECTURE"),l.a.createElement("p",null,"Easy to navigate and logical page structure helps you find what you are looking for.")))},B=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{class:"container five"},l.a.createElement("div",{class:"a"}),l.a.createElement("div",{class:"b"}),l.a.createElement("div",{class:"c"}),l.a.createElement("div",{class:"d"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"SUPPORT"),l.a.createElement("p",null,'Your website needs ongoing care to perform at its best. Don\'t make the "set it and forget it" mistake.')))},L=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{class:"container thesecond"},l.a.createElement("div",null,l.a.createElement("div",{class:"little"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,"HOSTING"),l.a.createElement("p",null,"As your provider,taking care of all daily hosting operations: software updates, server management and email hosting.")))},V=function(){return l.a.createElement("div",{className:"navBar"},l.a.createElement(u.b,{to:"/portfolio-React/home"},"HOME"),l.a.createElement(u.b,{to:"/portfolio-React/about"},"ABOUT"),l.a.createElement(u.b,{to:"/portfolio-React/work"},"WORK"),l.a.createElement(u.b,{to:"/portfolio-React/contact"},"CONTACT"))},H=function(){var e=Object(n.useState)({pageVariants:{initial:{opacity:0,y:"100vh",scale:.8},in:{opacity:1,y:0,scale:1},out:{opacity:0,y:"-100vh",scale:1.2}},pageTransition:{type:"tween",ease:"anticipate",duration:1},pageStyle:{position:"absolute"}}),a=Object(r.a)(e,1)[0],t=a.pageStyle,c=a.pageVariants,i=a.pageTransition;return l.a.createElement(E.b.div,{style:t,initial:"out",animate:"in",exit:"out",variants:c,transition:i},l.a.createElement("div",{className:"services-page"},l.a.createElement("div",{className:"row-up"},l.a.createElement(x,null),l.a.createElement(C,null),l.a.createElement(z,null)),l.a.createElement("div",{className:"row-down"},l.a.createElement(A,null),l.a.createElement(B,null),l.a.createElement(L,null)),l.a.createElement(V,null)))},I=t(5),M=t(36),D=t(37),G=t(19);M.a.add(D.a,G.a,G.b);var U=function(){var e=Object(I.f)();return l.a.createElement("main",{style:{overflowX:"hidden"}},l.a.createElement(E.a,{exitBeforeEnter:!0},l.a.createElement(I.c,{location:e,key:e.pathname},l.a.createElement(I.a,{path:"/portfolio-React/contact",component:j}),l.a.createElement(I.a,{path:"/portfolio-React/about",component:y}),l.a.createElement(I.a,{path:"/portfolio-React/work",component:p}),l.a.createElement(I.a,{path:"/portfolio-React/services",component:H}),l.a.createElement(I.a,{path:"/portfolio-React/",component:v}))),l.a.createElement(h,null))};t(66);i.a.render(l.a.createElement(u.a,{history:window.hashHistory},l.a.createElement(U,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.cf7833ef.chunk.js.map