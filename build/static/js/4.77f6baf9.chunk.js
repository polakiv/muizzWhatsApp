(this["webpackJsonpuberclone-app"]=this["webpackJsonpuberclone-app"]||[]).push([[4],{253:function(e,t,o){"use strict";o.r(t);var a=o(14),n=o.n(a),r=o(23),c=o(6),i=o(0),s=o.n(i),l=o(192),u=o(222),p=o(248),d=o(96),g=o(5),b=(o(39),o(193)),j=o(251),h=o(95),f=o.n(h),m=o(252),x=o(195),O=o(1),v=Object(x.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),S=function(e){var t=v(),o=s.a.useState(!1),a=Object(c.a)(o,2),i=a[0],l=a[1],p=s.a.useState(!1),d=Object(c.a)(p,2),g=d[0],h=d[1],x=s.a.useState(!1),S=Object(c.a)(x,2),y=S[0],I=S[1],k=s.a.useState(),C=Object(c.a)(k,2),w=C[0],z=(C[1],function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.get("https://taxi.bigdatamicrodata.pp.ua/index.php?route=api/cartreact/add").then((function(e){l(!0),console.log(e)}));case 3:e.sent,e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),h(!0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}());return Object(O.jsxs)("div",{className:t.root,children:[Object(O.jsx)(j.a,{in:g,style:{cursor:"pointer",backgroundColor:"red"},children:Object(O.jsx)(m.a,{style:{cursor:"pointer",backgroundColor:"red",color:"inherit"},action:Object(O.jsx)(b.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){h(!1)},children:Object(O.jsx)(f.a,{})}),children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0447\u0442\u043e-\u0442\u043e \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c, \u0432\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043d\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"})}),Object(O.jsx)(j.a,{in:i,style:{cursor:"pointer",backgroundColor:"blue"},children:Object(O.jsxs)(m.a,{action:Object(O.jsx)(b.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){l(!1)},children:Object(O.jsx)(f.a,{})}),children:["\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043f\u043e\u0434\u0430\u043d\u0430 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0441\u0435\u0442\u044c \u043d\u0430 \u0434\u043e\u0441\u043a\u0435 \u043e\u0431\u044c\u044f\u0432\u043b\u0435\u043d\u0438\u0439 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u0447\u0430\u0441\u0430.",Object(O.jsx)(b.a,{"aria-label":"menu",color:"inherit",size:"small",onClick:function(e){},children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c."})]})}),Object(O.jsx)(j.a,{in:y,style:{cursor:"pointer"},children:Object(O.jsxs)(m.a,{action:Object(O.jsx)(b.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){I(!1)},children:Object(O.jsx)(f.a,{})}),children:[w," "," ",Object(O.jsx)(b.a,{onClick:function(){z()},children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})})]})},y=void 0,I={suppressMapOpenBlock:!0};navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,o=e.coords.longitude,a=t+", "+o;localStorage.setItem("lat",t),localStorage.setItem("lng",o),localStorage.setItem("gps",a);var n=e.coords.accuracy;localStorage.setItem("accuracy",n)}));var k=localStorage.getItem("lat"),C=localStorage.getItem("lng"),w=localStorage.getItem("gps"),z={center:[k,C],zoom:12};console.log("gps DestinationSearch "+w);t.default=function(e){console.log("props",e);var t=Object(i.useState)(!1),o=Object(c.a)(t,2),a=o[0],u=o[1],b=s.a.useState(!1),j=Object(c.a)(b,2),h=j[0],f=(j[1],Object(i.useState)(null)),m=function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(c.a)(f,1),t[0]){e.next=3;break}return e.abrupt("return");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null===localStorage.getItem("userName")&&localStorage.setItem("userName"," \u0437\u0430\u043b\u043e\u0433\u0438\u043d\u044c\u0442\u0435\u0441\u044c");var x=Object(i.useState)([]),v=Object(c.a)(x,2),w=(v[0],v[1],Object(i.useState)(e.users)),R=Object(c.a)(w,2),A=R[0];R[1];console.log("props.users",e.users);var P=Object(i.useState)([]),L=Object(c.a)(P,2);L[0],L[1];return Object(O.jsxs)("div",{style:{flex:1,width:"70%",height:"100%",display:"flex",flexDirection:"column",position:"absolute",right:0,top:0,backgroundColor:"#e5ddd5",transform:"translateZ(456px)"},children:[Object(O.jsx)(d.a,{drawerLeft:a,setDrawerLeft:u,db:g.f,auth:g.b,storage:g.k}),Object(O.jsx)(p.e,{style:{flex:1,width:"100%",height:"100%",margin:100},query:{apikey:"77344b8e-1d6e-4ba9-be6c-dfe62831be7a"},children:Object(O.jsxs)(p.b,{options:I,modules:["templateLayoutFactory","layout.ImageWithContent"],state:z,width:"100%",height:500,onApiAvaliable:function(e){return y.onApiAvaliable(e)},children:[Object(O.jsx)(p.d,{instanceRef:function(e){if(e){e.routePanel.state.set({from:"",to:"",type:"auto"});var t=e.routePanel.getRouteAsync();t.then((function(e){return e.model.events.add("requestsuccess",(function(){var t=e.getActiveRoute();if(t){t.getPaths().each((function(e){var t=e.getSegments();console.log(t);var o="";t.each((function(e){console.log(" \u041c\u0430\u043d\u0435\u0432\u0440 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430: "+e.properties.get("action").text),o+=" \u041c\u0430\u043d\u0435\u0432\u0440 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430: "+e.properties.get("action").text,console.log(" \u0414\u043b\u0438\u043d\u0430 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430: "+e.properties.get("distance").text),o+=" \u0414\u043b\u0438\u043d\u0430 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430: "+e.properties.get("distance").text,console.log(" \u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430: "+e.properties.get("duration").text),o+=" \u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430: "+e.properties.get("duration").text,console.log(" \u041f\u043e \u043a\u0430\u043a\u043e\u0439 \u0443\u043b\u0438\u0446\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0441\u0435\u0433\u043c\u0435\u043d\u0442: "+e.properties.get("street")),o+=" \u041f\u043e \u043a\u0430\u043a\u043e\u0439 \u0443\u043b\u0438\u0446\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0441\u0435\u0433\u043c\u0435\u043d\u0442: "+e.properties.get("street")})),console.log("obje",o),localStorage.setItem("obje",o)}));var o=t.properties.get("distance").text;console.log("\u0414\u043b\u0438\u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430: ",o),console.log("\u041f\u0440\u0438\u043c\u0435\u0440\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0435\u0437\u0434\u0430: "+t.properties.get("duration").text),localStorage.setItem("distanceValue",t.properties.get("distance").value),localStorage.setItem("distance","\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435: "+t.properties.get("distance").text),localStorage.setItem("duration","\u041f\u0440\u0438\u043c\u0435\u0440\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0435\u0437\u0434\u0430: "+t.properties.get("duration").text),console.log(o)}})),e})).then((function(){return t})).catch(console.log.bind(console))}},options:{float:"right",size:"large",popupWidth:"210px",maxWidth:"210px"},state:{popupWidth:"210px"}}),Object(O.jsx)(p.a,{options:{float:"left"}}),Object(O.jsx)(p.c,{style:{width:10,transform:[{rotate:"90deg"}]},geometry:{type:"Point",coordinates:[k,C]},properties:{hintContent:"\u044f",balloonContent:"\u044f",iconCaption:"\u044f",iconImageRotation:50},modules:["geoObject.addon.hint"]},"fdsdfsdfhghf654gfd"),null===A||void 0===A?void 0:A.map((function(e){return Object(O.jsx)(p.c,{style:{width:10,transform:[{rotate:"90deg"}]},geometry:{type:"Point",coordinates:[e.latitude,e.longitude]},properties:{hintContent:e.name+" "+e.about,balloonContent:e.name+" "+e.about,iconCaption:e.name+" "+e.about,iconImageRotation:50},modules:["geoObject.addon.hint"],options:{iconLayout:"default#image",iconImageHref:e.photoURL,iconImageSize:[74,61],iconImageOffset:[-3,-42],iconImageRotation:50},onClick:function(t){localStorage.setItem("car.name ",e.name)}},e.userID)}))]})}),Object(O.jsx)(S,{typeState:f,onSubmit:m}),Object(O.jsx)(l.a,{style:{backgroundColor:"black",color:"white",padding:10,margin:10,alignItems:"center",cursor:"pointer"},disabled:h,variant:"outlined",onClick:function(){u(!0)},children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u0434\u043b\u044f \u0432\u0441\u0435\u0445"})]})}}}]);
//# sourceMappingURL=4.77f6baf9.chunk.js.map