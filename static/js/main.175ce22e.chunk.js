(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{46:function(e){e.exports=JSON.parse('[{"id":"1","classes":"a","url":"https://zakariahn.github.io/zamagana-synthesizer/"},{"id":"2","classes":"b","url":"https://zakariahn.github.io/Rosetta-books-finder/"},{"id":"3","classes":"c","url":"https://zakariahn.github.io/css-draws/"},{"id":"4","classes":"d","url":"https://zakariahn.github.io/you-tube-mockup/"},{"id":"5","classes":"e","url":"https://zakariahn.github.io/instagram-mockup_react/"},{"id":"6","classes":"f","url":""},{"id":"7","classes":"g","url":"https://zakariahn.github.io/movies-list/"},{"id":"8","classes":"h","url":"https://zakariahn.github.io/to-do-list-react/"}]')},52:function(e,a,t){e.exports=t(84)},83:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(44),l=t.n(i),r=t(4),s=function(){return c.a.createElement("div",{className:"logo"},c.a.createElement("h4",null,"Z H"))},o=function(){var e,a=new Date,t=a.getHours()+":"+a.getMinutes(),n=a.getHours();n<12?e="Good Morning":n>=12&&n<17?e="Good Afternoon":n>=17&&n<=24&&(e="Good Evening");return c.a.createElement("div",{className:"circles"},c.a.createElement("div",{className:"greeting"},c.a.createElement("div",{id:"lblGreetings"},e.split("").map((function(e,a){return c.a.createElement("span",{key:a,className:"fast-flicker"},e)})))),c.a.createElement("div",{className:"row big-circle"},c.a.createElement("div",{className:"row small-circle"},t)))},m=function(){return c.a.createElement("div",{className:"nameArea"},c.a.createElement("div",{className:"name-info"},"I'm Zakaria Hamdan"),c.a.createElement("p",{className:"job-info"},"Full-Stack Web Developer currenlty living in Germany."))},u=t(7),d=function(){return c.a.createElement("div",{className:"navLeft"},c.a.createElement(u.b,{to:"/about",className:"z lblAbout"},"About"))},E=t(13),p=function(){var e=Object(n.useState)({pageVariants:{initial:{opacity:0,x:"-100vw",scale:.8},in:{opacity:1,x:0,scale:1},out:{opacity:0,x:"100vw",scale:1.2}},pageTransition:{type:"tween",ease:"anticipate",duration:1},pageStyle:{position:"absolute"}}),a=Object(r.a)(e,1)[0],t=a.pageStyle,i=a.pageVariants,l=a.pageTransition;return c.a.createElement(E.b.div,{style:t,initial:"initial",animate:"in",exit:"out",variants:i,transition:l,className:"homePage"},c.a.createElement(d,null),c.a.createElement("div",{className:"homePageBody"},c.a.createElement(s,null),c.a.createElement(o,null),c.a.createElement(m,null)))},v=function(){return c.a.createElement("div",{className:"navBar"},c.a.createElement(u.b,{className:"z",to:"/home"},"HOME"),c.a.createElement(u.b,{className:"z",to:"/about"},"ABOUT"),c.a.createElement(u.b,{className:"z",to:"/services"},"SERVICES"),c.a.createElement(u.b,{className:"z",to:"/contact"},"CONTACT"))},b=t(46),f=function(){return c.a.createElement("div",{className:"gallery"},b.map((function(e){var a=e.id,t=e.classes,n=e.url;return c.a.createElement("div",{className:t,key:a,onClick:function(){window.open(n)}},c.a.createElement("div",{className:"overlay z"}))})))},g=t(14),h=t(8),y=t(18),N=t(21),w=c.a.createContext();function S(e){var a=e.children,t=Object(n.useState)((function(){return new y.World})),i=Object(r.a)(t,1)[0];return Object(n.useEffect)((function(){i.broadphase=new y.NaiveBroadphase,i.solver.iterations=10,i.gravity.set(0,0,-25)}),[i]),Object(N.b)((function(){return i.step(1/60)})),c.a.createElement(w.Provider,{value:i,children:a})}function O(e,a){var t=Object.assign({},e),c=Object(n.useRef)(),i=Object(n.useContext)(w),l=Object(n.useState)((function(){return new y.Body(t)})),s=Object(r.a)(l,1)[0];return Object(n.useEffect)((function(){return a(s),i.addBody(s),function(){return i.removeBody(s)}}),[s,i,a]),Object(N.b)((function(){c.current&&(c.current.position.copy(s.position),c.current.quaternion.copy(s.quaternion))})),c}function j(e){var a=e.position,t=O({mass:0},(function(e){var t;e.addShape(new y.Plane),(t=e.position).set.apply(t,Object(g.a)(a))}));return c.a.createElement("mesh",{ref:t,receiveShadow:!0})}function k(e){var a=e.position,t=O({mass:1e5},(function(e){var t;e.addShape(new y.Box(new y.Vec3(1,1,1))),(t=e.position).set.apply(t,Object(g.a)(a))}));return c.a.createElement("mesh",{ref:t,castShadow:!0,receiveShadow:!0},c.a.createElement("boxGeometry",{attach:"geometry",args:[2,2,2]}),c.a.createElement("meshStandardMaterial",{attach:"material",roughness:.5,color:"#c2363d"}))}function T(){var e=Object(n.useState)(!0),a=Object(r.a)(e,2),t=a[0],i=a[1];return Object(n.useEffect)((function(){setTimeout((function(){return i(!1)}),1e3)}),[]),c.a.createElement("div",{className:"cubesContainer"},c.a.createElement(N.a,{shadowMap:!0,camera:{position:[0,0,15]},onCreated:function(e){var a=e.gl;a.toneMapping=h.ACESFilmicToneMapping,a.outputEncoding=h.sRGBEncoding}},c.a.createElement("pointLight",{position:[-10,-10,30],intensity:.2}),c.a.createElement("spotLight",{intensity:1,position:[100,100,80],angle:.1,penumbra:.1,castShadow:!0}),c.a.createElement(S,null,c.a.createElement(j,{position:[-20,10,-20]}),t&&c.a.createElement(j,{position:[0,0,0]}),c.a.createElement(k,{position:[1,0,42]}),c.a.createElement(k,{position:[2,1,22]}),c.a.createElement(k,{position:[-20,-10,10]}),c.a.createElement(k,{position:[-25,12,50]}),c.a.createElement(k,{position:[-26,11.9,10]}),c.a.createElement(k,{position:[-8,6,40]}),c.a.createElement(k,{position:[3,4,30]}),c.a.createElement(k,{position:[-20,-9,20]}))))}var x=function(){var e=Object(n.useState)({pageVariants:{initial:{opacity:0,y:"-100vh",scale:.8},in:{opacity:1,y:0,scale:1},out:{opacity:0,y:"100vh",scale:1.2}},pageTransition:{type:"tween",ease:"anticipate",duration:1},pageStyle:{position:"absolute"}}),a=Object(r.a)(e,1)[0],t=a.pageStyle,i=a.pageVariants,l=a.pageTransition;return c.a.createElement(E.b.div,{exit:"out",animate:"in",initial:"out",className:"works-page",style:t,variants:i,transition:l},c.a.createElement(v,null),c.a.createElement(f,null),c.a.createElement(T,null))},C=function(){return c.a.createElement("div",{className:"bio"},c.a.createElement("p",{className:"first"},"My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavor. Passionate about writing clean, quality, high-performance codes and making food and music."),c.a.createElement("p",{className:"seconde"},"I create successful websites that are fast, easy to use, and built with best practices plus helping designers, small agencies and businesses bring their ideas to life."))},z=function(){return c.a.createElement("div",{className:"navigator"},c.a.createElement("div",{className:"imagedCircle"}),c.a.createElement("div",{className:"navBar"},c.a.createElement(u.b,{className:"z",to:"/home"},"HOME"),c.a.createElement(u.b,{className:"z",to:"/services"},"SERVICES"),c.a.createElement(u.b,{className:"z",to:"/work"},"WORK"),c.a.createElement(u.b,{className:"z",to:"/contact"},"CONTACT")))},B=function(){var e=Object(n.useState)({pageVariants:{initial:{opacity:0,scale:.2},in:{opacity:1,scale:1},out:{opacity:0,scale:2}},pageTransition:{type:"tween",ease:"anticipate",duration:1},pageStyle:{position:"absolute"}}),a=Object(r.a)(e,1)[0],t=a.pageStyle,i=a.pageVariants,l=a.pageTransition;return c.a.createElement(E.b.div,{style:t,initial:"out",animate:"in",exit:"out",variants:i,transition:l,className:"about-page"},c.a.createElement(C,null),c.a.createElement(z,null))},A=t(6),L=t.n(A),V=function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)({x:0,y:0}),s=Object(r.a)(l,2),o=s[0],m=s[1],u=Object(n.useState)(!1),d=Object(r.a)(u,2),E=d[0],p=d[1],v=Object(n.useState)(!1),b=Object(r.a)(v,2),f=b[0],g=b[1];Object(n.useEffect)((function(){return y(),h(),function(){return N()}}));var h=function(){document.querySelectorAll(".z").forEach((function(e){e.addEventListener("mouseover",(function(){return g(!0)})),e.addEventListener("mouseout",(function(){return g(!1)}))}))},y=function(){document.addEventListener("mouseup",S),document.addEventListener("mousedown",w),document.addEventListener("mousemove",O),document.addEventListener("mouseenter",k),document.addEventListener("mouseleave",j)},N=function(){document.removeEventListener("mouseup",S),document.removeEventListener("mousedown",w),document.removeEventListener("mousemove",O),document.removeEventListener("mouseenter",k),document.removeEventListener("mouseleave",j)},w=function(){i(!0)},S=function(){i(!1)},O=function(e){m({x:e.clientX,y:e.clientY})},j=function(){p(!0)},k=function(){p(!1)},T=L()("cursor",{"cursor--hidden":E,"cursor--clicked":t,"cursor--link-hovered":f});return c.a.createElement("div",{className:T,style:{left:"".concat(o.x,"px"),top:"".concat(o.y,"px")}},c.a.createElement("div",{className:"right"}),c.a.createElement("div",{className:"inner"}),c.a.createElement("div",{className:"left"}))},M=t(5),I=t(27),R=t(51),H=t.n(R),G=function(){var e=Object(n.useState)({name:"",email:"",message:"",disabled:!1,emailSent:null}),a=Object(r.a)(e,2),t=a[0],i=a[1],l=function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;i(Object(M.a)({},n,t))},s=new Date,o=new Array(7);o[0]="Sunday",o[1]="Monday",o[2]="Tuesday",o[3]="Wednesday",o[4]="Thursday",o[5]="Friday",o[6]="Saturday";var m="Have a good ".concat(o[s.getDay()]);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i({disabled:!0}),H.a.post("http://localhost:3000/api/email",t).then((function(e){e.data.success?i({disabled:!1,emailSent:!0}):i({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),i({disabled:!1,emailSent:!1})}))}},c.a.createElement("h5",null,"Full Name"),c.a.createElement(I.a.Control,{className:"full-name",id:"full-name",name:"name",type:"text",value:t.name,onChange:l}),c.a.createElement("h5",null,"Email"),c.a.createElement(I.a.Control,{className:"email",id:"email",name:"email",type:"email",value:t.email,onChange:l}),c.a.createElement("h5",null,"Hello Zakaria,"),c.a.createElement(I.a.Control,{className:"message",id:"message",name:"message",as:"textarea",rows:"3",value:t.message,placeholder:"and continue here...",onChange:l}),c.a.createElement("button",{className:"submit-button",variant:"primary",type:"submit",disabled:t.disabled},"SUBMIT"),c.a.createElement("p",{className:"goodBey"},m),!0===t.emailSent&&c.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===t.emailSent&&c.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))},P=function(){return c.a.createElement("div",{className:"navBar"},c.a.createElement(u.b,{className:"z",to:"/home"},"HOME"),c.a.createElement(u.b,{className:"z",to:"/about"},"ABOUT"),c.a.createElement(u.b,{className:"z",to:"/services"},"SERVICES"),c.a.createElement(u.b,{className:"z",to:"/work"},"WORK"))},W=function(){var e=Object(n.useState)({pageVariants:{initial:{opacity:0,x:"-100vw",scale:.8},in:{opacity:1,x:0,scale:1},out:{opacity:0,x:"100vw",scale:1.2}},pageTransition:{type:"tween",ease:"anticipate",duration:1},pageStyle:{position:"absolute"}}),a=Object(r.a)(e,1)[0],t=a.pageStyle,i=a.pageVariants,l=a.pageTransition;return c.a.createElement(E.b.div,{style:t,initial:"out",animate:"in",exit:"out",variants:i,transition:l,className:"contact-page"},c.a.createElement("div",{className:"a"},c.a.createElement("p",null,"LET'S COMUNICATE")),c.a.createElement("div",{className:"b"},c.a.createElement(G,null)),c.a.createElement("div",{className:"c"}),c.a.createElement(P,null))},D=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container design"},c.a.createElement("div",{className:"sec-row-line-top1"}),c.a.createElement("div",{className:"sec-row-line-mid1"}),c.a.createElement("div",{className:"sec-row-line-down1"})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,"WEB DESIGN"),c.a.createElement("p",null,"Working with you to develop a website strategy so that your website not only looks great, but works great too.")))},U=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container thethird"},c.a.createElement("div",{className:"earth"}),c.a.createElement("div",{className:"moon"})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,"RESPONSIVE"),c.a.createElement("p",null,"All of my websites are developed to look and perform beautifully on every device you are viewing it from.")))},q=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container fifth"},c.a.createElement("div",{className:"a"}),c.a.createElement("div",{className:"b"}),c.a.createElement("div",{className:"c"}),c.a.createElement("div",{className:"d"})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,"SEO"),c.a.createElement("p",null,"Just that you have a website doesn't mean anyone will find it. I can help your website get found in the search engines.")))},F=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container third"},c.a.createElement("div",{className:"sec-row-line-top3"}),c.a.createElement("div",{className:"sec-row-line-mid3"}),c.a.createElement("div",{className:"sec-row-line-bottom3"})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,"ARCHITECTURE"),c.a.createElement("p",null,"Easy to navigate and logical page structure helps you find what you are looking for.")))},J=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container five"},c.a.createElement("div",{className:"a"}),c.a.createElement("div",{className:"b"}),c.a.createElement("div",{className:"c"}),c.a.createElement("div",{className:"d"})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,"SUPPORT"),c.a.createElement("p",null,'Your website needs ongoing care to perform at its best. Don\'t make the "set it and forget it" mistake.')))},K=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container thesecond"},c.a.createElement("div",null,c.a.createElement("div",{className:"little"}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,"HOSTING"),c.a.createElement("p",null,"As your provider,taking care of all daily hosting operations: software updates, server management and email hosting.")))},Z=function(){return c.a.createElement("div",{className:"navBar"},c.a.createElement(u.b,{to:"/home"},"HOME"),c.a.createElement(u.b,{to:"/about"},"ABOUT"),c.a.createElement(u.b,{to:"/work"},"WORK"),c.a.createElement(u.b,{to:"/contact"},"CONTACT"))},X=function(){var e=Object(n.useState)({pageVariants:{initial:{opacity:0,y:"100vh",scale:.8},in:{opacity:1,y:0,scale:1},out:{opacity:0,y:"-100vh",scale:1.2}},pageTransition:{type:"tween",ease:"anticipate",duration:1},pageStyle:{position:"absolute"}}),a=Object(r.a)(e,1)[0],t=a.pageStyle,i=a.pageVariants,l=a.pageTransition;return c.a.createElement(E.b.div,{style:t,initial:"out",animate:"in",exit:"out",variants:i,transition:l,className:"services-page"},c.a.createElement("div",{className:"row-up"},c.a.createElement(D,null),c.a.createElement(U,null),c.a.createElement(F,null)),c.a.createElement("div",{className:"row-down"},c.a.createElement(q,null),c.a.createElement(J,null),c.a.createElement(K,null)),c.a.createElement(Z,null))},Y=t(9),_=function(){var e=Object(Y.f)();return c.a.createElement("main",{style:{overflowX:"hidden"}},c.a.createElement(E.a,{exitBeforeEnter:!0},c.a.createElement(Y.c,{location:e,key:e.pathname},c.a.createElement(Y.a,{path:"/contact",component:W}),c.a.createElement(Y.a,{path:"/about",component:B}),c.a.createElement(Y.a,{path:"/work",component:x}),c.a.createElement(Y.a,{path:"/services",component:X}),c.a.createElement(Y.a,{path:"/",component:p}))),c.a.createElement(V,null))};t(83);l.a.render(c.a.createElement(u.a,null,c.a.createElement(_,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.175ce22e.chunk.js.map