(this.webpackJsonpffbooker=this.webpackJsonpffbooker||[]).push([[0],{158:function(e,t,a){e.exports=a(379)},163:function(e,t,a){},168:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(17),o=a.n(l),s=(a(163),a(14)),u=a(11),i=a(437),m=a(432),f=a(436),d=a(435),p=a(431),b=a(433),g=a(434),v=a(427),E=a(95),y=a(19),h=a.n(y),C=a(38),O=a(66),k=a.n(O),j=0;function S(e){return x.apply(this,arguments)}function x(){return(x=Object(C.a)(h.a.mark((function e(t){var a,n,r,c,l,o,s,u=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=function(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(1e3*e).getDay()]},l=function(e){return new Date(1e3*e).toLocaleDateString()},c=function(e){return new Date(1e3*e).toTimeString().substring(0,5)},a=u.length>1&&void 0!==u[1]?u[1]:1,n={programIds:t.paramClasses,fromDate:t.fromDate?t.fromDate:parseInt(Date.now()/1e3+t.fromDateAdj),toDate:t.toDate?t.toDate:parseInt(Date.now()/1e3+t.toDateAdj),pageSize:100,pageNumber:a,distance:2147483647,latitude:0,longitude:0},"FFP"!==(null===t||void 0===t?void 0:t.paramClub)&&(n.clubId=t.paramClub),console.log("Search Start"),console.log(n),e.next=10,k.a.ajax({type:"GET",url:"https://api-mobile.circuithq.com/api/v2/class/search",dataType:"json",headers:{Authorization:t.accessToken,"User-Country-Code":t.country},data:n});case 10:return r=e.sent,s=(s=r.data).map((function(e){var a,n,r,s,u,i;return{classId:e.classId,class:e.name,club:null===(a=t.clubTypes)||void 0===a||null===(n=a[e.club.clubId])||void 0===n?void 0:n.fullname,clubTier:null===(r=t.clubTypes)||void 0===r||null===(s=r[e.club.clubId])||void 0===s?void 0:s.type,clubId:e.club.clubId,date:l(e.timeStart),day:o(e.timeStart),timestamp:e.timeStart,duration:e.timeEnd-e.timeStart,start:c(e.timeStart),end:c(e.timeEnd),capacity:e.capacity,address:null===(u=t.clubTypes)||void 0===u||null===(i=u[e.club.clubId])||void 0===i?void 0:i.address}})).filter((function(e){return e.capacity>0||!t.accessToken||t.paramShowFull})),"FFP"===t.paramClub&&(s=s.filter((function(e){return"Platinum"===e.clubTier}))),"No Work"===t.paramTime&&(s=s.filter((function(e){return"Sat"===e.day||"Sun"===e.day||parseInt(e.end)<=11||parseInt(e.start)>=20}))),e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){n()}function w(e){return e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"."+e.getMilliseconds()}function I(){return(I=Object(C.a)(h.a.mark((function e(t,a,n,r,c){var l,o,s,u,i,m,f;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Booking... "+t+" ("+w(new Date)+")"),l=(new Date).getTime(),e.prev=2,!r){e.next=13;break}return console.log("DEBUG"),o=Math.random()*Math.random()*Math.random(),s=Math.random()*Math.random()*Math.random(),e.next=9,new Promise((function(e){return setTimeout(e,50+o*s*2e4)}));case 9:if(!(Math.random()>.01)){e.next=11;break}throw{responseText:'{"error":{"messages":["Debug_Error"]}}'};case 11:e.next=18;break;case 13:return e.next=15,k.a.ajax({type:"POST",url:"https://api-mobile.circuithq.com/api/v2/class/book",dataType:"json",headers:{Authorization:a,"User-Country-Code":n},data:{class_id:t}});case 15:u=e.sent,console.table(u),c(null);case 18:return i=(new Date).getTime(),console.log("["+(i-l)+"ms] Success... "+t+" ("+w(new Date)+")"),e.abrupt("return",!0);case 23:return e.prev=23,e.t0=e.catch(2),(m=JSON.parse(e.t0.responseText))&&m.message?console.error(m.message):m&&m.error&&m.error.messages?m.error.messages.forEach((function(e){return console.error(null===e||void 0===e?void 0:e.message)})):console.error(m),f=(new Date).getTime(),console.log("["+(f-l)+"ms] Failed... "+t+" ("+w(new Date)+")"),e.abrupt("return",!1);case 30:case"end":return e.stop()}}),e,null,[[2,23]])})))).apply(this,arguments)}function D(e,t,a,n,r,c){var l=function(e,t,a,n,r){return I.apply(this,arguments)}(e,t,a,n,c).then((function(e){return Promise.resolve((function(t){return new Promise((function(t){return t(e)}))}))})),o=new Promise((function(e){return setTimeout(e,r)})).then((function(e){return function(e){return Promise.resolve(l.then((function(e){return Promise.resolve(e())})))}}));return Promise.race([l,o])}var A=Object(i.a)({tableWrapper:{maxWidth:1e3,margin:"5px 0",backgroundColor:"#ffffffe0"},tableContainer:{maxHeight:"calc(100vh - 20px)",transition:"max-height 0.5s"},table:{minWidth:650,userSelect:"none"},thead:{"& th":{fontWeight:"bold",backgroundColor:"#b6ccdd"}}}),P=function(e){var t=function(e){var t=Object(r.useState)([]),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(r.useReducer)((function(e){return e+1}),0),s=Object(u.a)(o,2),i=s[0],m=s[1];return n=m,Object(r.useEffect)((function(){e.paramClasses&&Object.keys(e.clubTypes).length&&Object.keys(e.classTypes).length&&function(){var t=Object(C.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l([]),t.next=3,S(e);case 3:if(n=t.sent,a!==j){t.next=11;break}if(l(n),!(n.length<30)){t.next=11;break}return t.next=9,S(e,2);case 9:r=t.sent,a===j&&l([].concat(Object(E.a)(n),Object(E.a)(r)));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(++j)}),[e.fromDateAdj,e.toDateAdj,e.paramClub,e.paramClasses,e.paramTime,e.accessToken,i,e.clubTypes,e.classTypes]),c}(e),a=A(),l=null;return c.a.createElement(v.a,{elevation:3,className:a.tableWrapper},c.a.createElement(p.a,{className:a.tableContainer,style:{maxHeight:t.length?"":36}},c.a.createElement(m.a,{stickyHeader:!0,className:a.table,size:"small"},c.a.createElement(b.a,{className:a.thead},c.a.createElement(g.a,null,c.a.createElement(d.a,null,"ID"),c.a.createElement(d.a,null,"Club"),c.a.createElement(d.a,null,"Class"),c.a.createElement(d.a,null,"Date"),c.a.createElement(d.a,null,"Time"),c.a.createElement(d.a,null,"Capacity"))),c.a.createElement(f.a,null,t.sort((function(e,t){return e.timestamp-t.timestamp})).map((function(t){var a,n=l;return l=t.date,c.a.createElement(g.a,{key:t.classId,onClick:function(){return function(t){e.handleSelection(t)}(t)},style:{backgroundColor:(null===(a=e.selected)||void 0===a?void 0:a.classId)===t.classId?"#00d8f57d":"",boxShadow:null==n||t.date===n?"":"#b6ccdd 0 2px 0 0 inset"},hover:!0},c.a.createElement(d.a,null,t.classId),c.a.createElement(d.a,{style:{fontStretch:t.club.length>25?"condensed":""}},t.club),c.a.createElement(d.a,{style:{fontStretch:t.class.length>15?"condensed":""}},t.class),c.a.createElement(d.a,null,t.date," (",t.day,")"),c.a.createElement(d.a,null,t.start," - ",t.end),c.a.createElement(d.a,null,t.capacity))}))))))},N=a(36),F=a(439),z=a(380),W=a(438),M=a(442),U=a(443),R=a(444),_=a(445),J=a(461),B=Object(r.createContext)(!1),G=null;var q=function(e){var t,a,n,l,o,i,m,f,d,p=Object(r.useState)(parseInt(Date.now()/1e3)),b=Object(u.a)(p,2),g=b[0],E=b[1],y=Object(r.useReducer)((function(t,a){var n={};if("ADD"===a.action||"UPDATE"===a.action)n=Object(s.a)(Object(s.a)({},t),{},Object(N.a)({},a.target.classId,a.target));else if("REMOVE"===a.action){var r=Object(s.a)({},t);delete r[a.target.classId],n=r}else"EXECUTE"===a.action&&(a.target.timestamp=g+e.bookOpen+e.bookOffset+3,n=Object(s.a)(Object(s.a)({},t),{},Object(N.a)({},a.target.classId,a.target)));return localStorage.setItem("watches",JSON.stringify(n)),n}),{},(function(e){var t=localStorage.getItem("watches");return t?JSON.parse(t):{}})),O=Object(u.a)(y,2),k=O[0],j=O[1],x=Object(r.useReducer)((function(e,t){return G=t,t}),null),T=Object(u.a)(x,2),w=T[0],I=T[1],A=L(),P=Object(r.useContext)(B);Object(r.useEffect)((function(){Object(C.a)(h.a.mark((function t(){var a,n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=0,n=0;case 2:if(null===w||null===G){t.next=11;break}return t.next=6,D(w,e.accessToken,e.country,P,e.bookWait,I);case 6:r=t.sent,console.log(r()),r().then((function(e){e?(j({action:"UPDATE",target:Object(s.a)(Object(s.a)({},k[w]),{},{success:++a,fail:n})}),I(null)):j({action:"UPDATE",target:Object(s.a)(Object(s.a)({},k[w]),{},{success:a,fail:++n})})})),t.next=12;break;case 11:return t.abrupt("break",14);case 12:t.next=2;break;case 14:case"end":return t.stop()}}),t)})))()}),[w]),Object(r.useEffect)((function(){setInterval((function(e){E(parseInt(Date.now()/1e3))}),100)}),[]),Object(r.useEffect)((function(){Object.keys(k).forEach(function(){var t=Object(C.a)(h.a.mark((function t(a){var n,r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=k[a]).lastSeen&&!(g-n.lastSeen>=43200)){t.next=20;break}return n.seenStatus=!1,t.prev=3,t.next=6,S({fromDate:n.timestamp-900,toDate:n.timestamp+n.duration+900,paramClub:n.clubId,paramClasses:"[]",paramTime:"All",paramShowFull:!0,accessToken:e.accessToken,country:e.country});case 6:r=t.sent,c=r.filter((function(e){return e.classId==a}))[0],n.seenStatus=!!c,n.seenCapacity=null===c||void 0===c?void 0:c.capacity,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),delete n.seenStatus,console.error(t.t0);case 16:return t.prev=16,n.lastSeen=parseInt(Date.now()/1e3),j({action:"UPDATE",target:n}),t.finish(16);case 20:case"end":return t.stop()}}),t,null,[[3,12,16,20]])})));return function(e){return t.apply(this,arguments)}}())}),[parseInt(g/10)]);var q=function(e){return e.toISOString().replace(/[-:]/g,"").replace(/\d\d\.\d\d\d/,"00")},Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=parseInt(e/60/60/24);if(t&&a>0)return a+"d";var n=parseInt(e/60/60%24);if(t&&n>0)return n+"h";var r=parseInt(e/60%60);if(t&&r>0)return r+"m";var c=parseInt(e%60);if(t&&c>0)return c+"s";var l=(a?a+"d ":"")+(n?n+"h ":"")+(r?r+"m ":"")+(c?c+"s ":"");return l},Y=c.a.createElement("div",{style:H},c.a.createElement(v.a,{elevation:3,style:{backgroundColor:e.targetClass?k[e.targetClass.classId]?"#fdc4d2":"#c4f6fd":"",padding:5},className:A.preview},c.a.createElement("div",{style:Object(s.a)(Object(s.a)({},Z),{},{margin:"auto"})},e.targetClass&&c.a.createElement(z.a,{onClick:function(t){return a=e.targetClass,void window.open("http://google.com/maps/dir//".concat(escape(a.address)),"_blank");var a}},c.a.createElement(W.a,{color:"action",fontSize:"small"}))),c.a.createElement("strong",null,"Class ID: ")," ",null===(t=e.targetClass)||void 0===t?void 0:t.classId," ",c.a.createElement("br",null),c.a.createElement("strong",null,"Club: ")," ",null===(a=e.targetClass)||void 0===a?void 0:a.club," (",null===(n=e.targetClass)||void 0===n?void 0:n.clubId,") ",c.a.createElement("br",null),c.a.createElement("strong",null,"Class: ")," ",null===(l=e.targetClass)||void 0===l?void 0:l.class," ",c.a.createElement("br",null),c.a.createElement("strong",null,"Date: ")," ",null===(o=e.targetClass)||void 0===o?void 0:o.date," (",null===(i=e.targetClass)||void 0===i?void 0:i.day,") ",c.a.createElement("br",null),c.a.createElement("strong",null,"Time: ")," ",null===(m=e.targetClass)||void 0===m?void 0:m.start," - ",null===(f=e.targetClass)||void 0===f?void 0:f.end," ",c.a.createElement("br",null),c.a.createElement("strong",null,"Capacity: ")," ",null===(d=e.targetClass)||void 0===d?void 0:d.capacity," ",c.a.createElement("br",null),c.a.createElement("div",{style:Z},e.targetClass&&!k[e.targetClass.classId]&&c.a.createElement(F.a,{component:v.a,style:{backgroundColor:"#1c94f3b5"},onClick:function(){return j({action:"ADD",target:e.targetClass})}},"Add"),P&&e.targetClass&&k[e.targetClass.classId]&&c.a.createElement(F.a,{component:v.a,style:{backgroundColor:"#d21cf3"},onClick:function(){return j({action:"EXECUTE",target:e.targetClass})}},"Execute"),e.targetClass&&k[e.targetClass.classId]&&c.a.createElement(F.a,{component:v.a,style:{backgroundColor:"#f31c68b5"},onClick:function(){return j({action:"REMOVE",target:e.targetClass})}},"Remove")))),$=c.a.createElement("div",{style:Object(s.a)(Object(s.a)({},H),{},{overflowX:"hidden",overflowY:"overlay"})},c.a.createElement(v.a,{elevation:3,style:{padding:"1px 5px 1px 5px",backgroundColor:"#ffffffd0"}},c.a.createElement("div",{style:{marginBottom:-6}},c.a.createElement("strong",null,"Execution Queue")),Object.keys(k).map((function(t){var a,n;return c.a.createElement("div",{key:t,style:X},c.a.createElement(v.a,{elevation:2,className:A.hoverPaper,onClick:function(a){return e.handleSelection(k[t])},style:{backgroundColor:(null===(a=e.targetClass)||void 0===a?void 0:a.classId)==t?"#99f3ff":"",padding:3}},c.a.createElement("div",{style:Object(s.a)(Object(s.a)({},V),{},{backgroundColor:w==t?"#d07dff":k[t].success?"#7dff84":k[t].fail?"#ff7daa":"#d0d0d0",boxShadow:(null===(n=e.targetClass)||void 0===n?void 0:n.classId)==t?"#00c4ffbf 0 0 99px 0 inset":"",margin:"-3px -3px 0",padding:"0 3px"})},c.a.createElement("strong",{style:{textDecoration:"underline"}},k[t].club),c.a.createElement("strong",null,": ",k[t].class),c.a.createElement(J.a,{title:function(e){k[t].classId;var a,n=!1===k[t].seenStatus?"[INVALID]":"",r=(null!==(a=k[t].seenCapacity)&&void 0!==a?a:"?")+" / "+k[t].capacity,c=k[t].lastSeen&&"("+Q(parseInt(Date.now()/1e3)-k[t].lastSeen,!0)+" ago)"||"";return"".concat(n," Cap: ").concat(r," ").concat(c)}(),placement:"top",classes:{tooltip:A.tooltip},arrow:!0},c.a.createElement("span",{onClick:function(){delete k[t].lastSeen,delete k[t].seenStatus,j({action:"UPDATE",target:k[t]})}},!0===k[t].seenStatus?c.a.createElement(M.a,{fontSize:"small",style:{color:"green",marginBottom:-3}}):!1===k[t].seenStatus?c.a.createElement(U.a,{fontSize:"small",style:{color:"red",marginBottom:-3}}):c.a.createElement(R.a,{fontSize:"small",style:{color:"gray",marginBottom:-3}}))),c.a.createElement("span",{style:{color:"gray"}})),c.a.createElement("strong",null,k[t].date," (",k[t].day,")"),c.a.createElement("span",null," (",k[t].start," - ",k[t].end,")"),c.a.createElement("br",null),function(t){var a=t.timestamp-g-e.bookOpen-e.bookOffset,n=t.success?c.a.createElement("span",null,"SUCCESS: ",c.a.createElement("strong",{style:{color:"green"}},t.success)," "):"",r=t.fail?c.a.createElement("span",null,"FAILED: ",c.a.createElement("strong",{style:{color:"red"}},t.fail)):"",l=(n||r)&&c.a.createElement("div",null,n,r);if(a<=0&&a+e.bookDuration>=0&&null==w&&!l&&I(t.classId),w===t.classId){if((a+=e.bookDuration)>=0)return c.a.createElement("strong",null,c.a.createElement("span",{style:{color:"red"}},"...EXECUTING...")," (finish in ",parseInt(a)," s)",c.a.createElement("br",null),l);I(null)}else{if(a>=0){var o={color:a>10800?"black":a>3600?"orange":"red"},s=Q(a);return c.a.createElement("span",null,"Start Booking in ",c.a.createElement("strong",{style:o},s))}if(l)return c.a.createElement("span",null,l)}return c.a.createElement("span",null,"Invalid")}(k[t]),c.a.createElement("div",{style:Z},!!k[t].success&&c.a.createElement(z.a,{onClick:function(e){return(a=k[t]).calendarSaved=!0,j({action:"UPDATE",target:a}),void window.open("http://www.google.com/calendar/render?"+"action=TEMPLATE\n&text=".concat(a.class,"\n&dates=").concat(q(new Date(1e3*a.timestamp)),"/").concat(q(new Date(1e3*a.timestamp+1e3*(a.duration||5400))),"\n&details=").concat(a.club+": "+a.class,"\n&location=").concat(escape(a.address),"\n&trp=false\n&sprop=\n&sprop=name:"),"_blank");var a}},c.a.createElement(_.a,{color:k[t].calendarSaved?"disabled":void 0,fontSize:"small"})))))}))));return c.a.createElement(c.a.Fragment,null,Y,!!Object.keys(k).length&&$)},L=Object(i.a)({hoverPaper:{"&:hover":{backgroundColor:"#ffffffff",transform:"scale(1.03)"},transition:"transform 0.1s",backgroundColor:"#ffffff80"},preview:{"&:hover":{backgroundColor:"#fffffff0",transition:"background-color 0.1s"},transition:"",backgroundColor:"#ffffffd0"},tooltip:{top:"8px",color:"#efefef",fontSize:"small",backgroundColor:"#333333","&>span.MuiTooltop-arrow":{backgroundColor:"#333333"}}}),H={margin:"5px 0",flexGrow:1,userSelect:"none"},X={margin:"8px 0px",flexGrow:1},V={borderRadius:"5px 5px 0px 0px "},Z={float:"right",margin:"-40px 5px",gap:5,display:"grid",gridTemplateColumns:"auto auto"},Q=a(460),Y=a(458),$=a(456),K=a(454),ee=a(455),te=a(462),ae=a(446),ne=a(447),re=a(448),ce=a(449),le=a(383),oe=a(387),se=a(386),ue=a(463),ie=a(384),me=a(450);var fe=function(e){var t=Object(r.useState)(e.accessToken),a=Object(u.a)(t,2),n=a[0],l=a[1],o=Object(r.useState)(e.country),s=Object(u.a)(o,2),i=s[0],m=s[1],f=function(t){l(e.accessToken),m(e.country),e.setOpen(!1)};return c.a.createElement(te.a,{open:e.open,onClose:f},c.a.createElement(ae.a,null,"Settings"),c.a.createElement(ne.a,null,c.a.createElement(re.a,null,"Access Token is required for getting class capacity and booking classes."),c.a.createElement(ce.a,{label:"Access Token",placeholder:"Bearer 58f7GciOiJIUzI1NiJ9.eyJpc3MiOiJodHRw3...",multiline:!0,fullWidth:!0,rows:8,variant:"outlined",InputLabelProps:{shrink:!0},value:n,onChange:function(e){return l(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(re.a,null,"Choose your country:"),c.a.createElement(le.a,{variant:"outlined"},c.a.createElement(oe.a,{htmlFor:"country-select"},"Country"),c.a.createElement(se.a,{label:"Country",value:i,variant:"outlined",onChange:function(e){return m(e.target.value)},notched:!0,inputProps:{id:"country-select"}},c.a.createElement(ue.a,{value:"sg"},"Singapore"),c.a.createElement(ue.a,{value:"th"},"Thailand")),e.country!==i&&c.a.createElement(ie.a,null,"Execution Queue and Favorites will be reset"))),c.a.createElement(me.a,null,c.a.createElement(F.a,{onClick:f,color:"primary"},"Cancel"),c.a.createElement(F.a,{onClick:function(t){e.setAccessToken(n),localStorage.setItem("accessToken",n),e.country!==i&&(localStorage.setItem("country",i),localStorage.setItem("watches","{}"),localStorage.setItem("favClasses","{}"),localStorage.setItem("favClubs","{}"),window.location.reload()),e.setOpen(!1)},color:"primary"},"Save")))},de=a(457),pe=a(451),be=a(452),ge=a(453);var ve=function(e){var t=Object(r.useState)(null),a=Object(u.a)(t,2),n=a[0],l=a[1],o=Object(r.useState)(e.favs),i=Object(u.a)(o,2),m=i[0],f=i[1];Object(r.useEffect)((function(){return f(e.favs)}),[e.favs,e.open]);var d=Ee(),p=function(t){e.setOpen(!1),f({}),l(null)},b={};return Object.keys(e.favChoices||{}).forEach((function(t){return b[e.favChoices[t].type]=!0})),c.a.createElement(te.a,{open:e.open,onClose:p,fullWidth:!0},c.a.createElement(ae.a,null,"Favorite ",e.favTypeText),c.a.createElement(ne.a,null,c.a.createElement(de.a,{TabIndicatorProps:{style:{backgroundColor:"#0000"}},value:n,textColor:"secondary",onChange:function(e,t){return l(t)},className:d.tab},c.a.createElement(pe.a,{value:null,label:"All",wrapped:!0}),Object.keys(b).map((function(e){return c.a.createElement(pe.a,{key:e,value:e,label:e})}))),c.a.createElement(v.a,{className:d.list},Object.keys(e.favChoices||{}).filter((function(t){return null==n||e.favChoices[t].type===n})).sort((function(t,a){return(e.favChoices[t].fullname||e.favChoices[t].name).localeCompare(e.favChoices[a].fullname||e.favChoices[a].name)})).map((function(t){return c.a.createElement(v.a,{className:"".concat(d.item," ").concat(m[t]?d.selectedItem:""),onClick:function(){return f(Object(s.a)(Object(s.a)({},m),{},Object(N.a)({},t,!m[t])))},key:t},m[t]?c.a.createElement(be.a,{color:"secondary",className:d.star}):c.a.createElement(ge.a,{color:"action",className:d.star}),e.favChoices[t].fullname||e.favChoices[t].name)})))),c.a.createElement(me.a,null,c.a.createElement(F.a,{onClick:p,color:"primary"},"Cancel"),c.a.createElement(F.a,{onClick:function(t){localStorage.setItem(e.favType,JSON.stringify(m)),e.updateFavs(),p()},color:"primary"},"Save")))},Ee=Object(i.a)({tab:{backgroundColor:"whitesmoke",borderRadius:"10px 10px 0px 0px","& [role=tablist]":{flexFlow:"wrap"},"& [role=tablist]>.Mui-selected":{backgroundColor:"#f7d7e1",borderRadius:"10px 10px 0px 0px",border:"2px #f7d7e6 solid"},"& [role=tablist]>button":{backgroundColor:"#00000008",borderRadius:"10px 10px 0px 0px",borderTop:"2px #f5f5f5 solid"}},list:{height:"50vh",overflow:"auto",backgroundColor:"#f5f5f5",position:"relative"},item:{padding:8,margin:5,paddingLeft:35,userSelect:"none","&:hover":{transform:"scale(1.02)"}},selectedItem:{backgroundColor:"#f66497",fontWeight:"bold"},star:{position:"absolute",left:10}});var ye=function(e){var t=Object(r.useState)({}),a=Object(u.a)(t,2),n=a[0],l=a[1],o=Object(r.useState)({}),i=Object(u.a)(o,2),m=i[0],f=i[1],d=Object(r.useState)({}),p=Object(u.a)(d,2),b=p[0],g=p[1],E=Object(r.useState)(null),y=Object(u.a)(E,2),h=y[0],C=y[1],O=Object(r.useState)(null),k=Object(u.a)(O,2),j=k[0],S=k[1],x=Object(r.useState)(null),w=Object(u.a)(x,2),I=w[0],D=w[1],A=function(){l(JSON.parse(localStorage.getItem("favClubs")||"{}")),f(JSON.parse(localStorage.getItem("favClasses")||"{}"))};Object(r.useEffect)(A,[]);var P=Object(r.useState)(!1),W=Object(u.a)(P,2),M=W[0],U=W[1],R=Object(r.useState)(!1),_=Object(u.a)(R,2),J=_[0],B=_[1],G=Object(s.a)({All:null,Platinum:"FFP"},Object.keys(n).filter((function(e){return n[e]})).reduce((function(t,a){var n;return t[null===(n=e.clubTypes[a])||void 0===n?void 0:n.shortname]=a,t}),{})),q=Object(s.a)({Access:[183,184,185,182]},Object.keys(m).filter((function(e){return m[e]})).reduce((function(t,a){var n;return t[null===(n=e.classTypes[a])||void 0===n?void 0:n.shortname]=[a],t}),{})),L=Object(r.useReducer)((function(e,t){return localStorage.setItem("selClub",t),t}),null,(function(){var e=localStorage.getItem("selClub");return"null"==e?null:e})),H=Object(u.a)(L,2),X=H[0],V=H[1],Z=Object(r.useReducer)((function(e,t){return localStorage.setItem("selClasses",JSON.stringify(t)),t}),{},(function(){return JSON.parse(localStorage.getItem("selClasses")||"{}")})),te=Object(u.a)(Z,2),ae=te[0],ne=te[1],re=Object(r.useReducer)((function(e,t){return localStorage.setItem("selTime",t),t}),"All",(function(){return localStorage.getItem("selTime")||"All"})),ce=Object(u.a)(re,2),le=ce[0],oe=ce[1];Object(r.useEffect)((function(){e.setParamClub(X),e.setParamClasses("["+Object.keys(ae).filter((function(e){return ae[e]})).map((function(e){return q[e]})).flat().filter((function(e){return e}))+"]"),e.setParamTime(le)}));var se=Ce();return c.a.createElement("div",{style:he},c.a.createElement(v.a,{elevation:3,style:{padding:5},className:se.filter},c.a.createElement("span",{style:{float:"right"}},c.a.createElement(z.a,{onClick:function(e){return B(!0)}},c.a.createElement(K.a,{color:"action",fontSize:"small"})),c.a.createElement(fe,{open:J,setOpen:B,accessToken:e.accessToken,setAccessToken:e.setAccessToken,country:e.country}),c.a.createElement(ve,Object.assign({open:M,setOpen:U},{favs:b,favType:h,favTypeText:j,favChoices:I,updateFavs:A}))),c.a.createElement("strong",null,"Club: "),c.a.createElement(z.a,{style:{position:"absolute",margin:-10},onClick:function(t){C("favClubs"),S("Clubs"),D(e.clubTypes),g(n),U(!0)}},c.a.createElement(ee.a,{color:"action",fontSize:"small"})),c.a.createElement("br",null),Object.keys(G).map((function(e){return c.a.createElement("span",{key:e},c.a.createElement($.a,{control:c.a.createElement(Y.a,{checked:X==G[e],onChange:function(t){return V(G[e])}}),label:e}))})),c.a.createElement("br",null),c.a.createElement("strong",null,"Class: "),c.a.createElement(z.a,{style:{position:"absolute",margin:-10},onClick:function(t){C("favClasses"),S("Classes"),D(e.classTypes),g(m),U(!0)}},c.a.createElement(ee.a,{color:"action",fontSize:"small"})),c.a.createElement("br",null),Object.keys(q).map((function(e){return c.a.createElement("span",{key:e},c.a.createElement($.a,{control:c.a.createElement(Q.a,{checked:ae[e]||!1,onChange:function(t){return ne(Object(s.a)(Object(s.a)({},ae),{},Object(N.a)({},e,!ae[e])))}}),label:e}))})),c.a.createElement("br",null),c.a.createElement("strong",null,"Time: "),c.a.createElement("br",null),["All","No Work"].map((function(e){return c.a.createElement("span",{key:e},c.a.createElement($.a,{control:c.a.createElement(Y.a,{checked:le==e,onChange:function(t){return oe(e)}}),label:e}))})),c.a.createElement("br",null),c.a.createElement("div",{style:Oe},c.a.createElement(F.a,{component:v.a,style:{backgroundColor:"#ff4571"},onClick:T},"Search"))))},he={margin:"5px 0",flexGrow:1,userSelect:"none"},Ce=Object(i.a)({filter:{"&:hover":{backgroundColor:"#fffffff0"},transition:"background-color 0.1s",backgroundColor:"#ffffffd0"}}),Oe={float:"right",margin:"-40px 5px",gap:5,display:"grid",gridTemplateColumns:"auto auto"},ke=(a(168),a(140)),je=a.n(ke),Se={particles:{number:{value:80,density:{enable:!0,value_area:2e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#ffffff"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1.7582417582417584,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:1,size_min:2,sync:!1}},line_linked:{enable:!0,distance:175,color:"#ffffff",opacity:.9,width:2},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:881.8766334760375,rotateY:801.7060304327614}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"bubble"},resize:!0},modes:{grab:{distance:299.7002997002997,line_linked:{opacity:1}},bubble:{distance:523.7898019343676,size:4.060386061506726,duration:.08120772123013452,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1};var xe=function(){var e=Object(r.useState)((function(e){return localStorage.getItem("accessToken")||""})),t=Object(u.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)((function(e){return localStorage.getItem("country")||"sg"})),o=Object(u.a)(l,2),i=o[0],m=(o[1],Object(r.useReducer)((function(e,t){return(null===e||void 0===e?void 0:e.classId)!==(null===t||void 0===t?void 0:t.classId)?t:null}),null)),f=Object(u.a)(m,2),d=f[0],p=f[1],b=function(e){var t=Object(r.useState)({}),a=Object(u.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){function t(){return(t=Object(C.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.ajax({type:"GET",url:"https://api-mobile.circuithq.com/api/v2/club/"+e.country,dataType:"json",headers:{Authorization:e.accessToken,"User-Country-Code":e.country}});case 2:a=t.sent,c(a.data.reduce((function(e,t){return e[t.clubId]={name:t.name,address:t.address,fullname:t.clubWebsiteName,shortname:t.name.replace(/^FFP?\s*/,""),type:t.name.indexOf("FFP")>=0||t.clubWebsiteName.match(/^platinum /i)?"Platinum":t.clubWebsiteName.match(/^(zone |icon siam)/i)?"Zone":t.clubWebsiteName.match(/^club /i)?"Club":"Premium"},e}),{}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.accessToken]),n}({accessToken:a,country:i}),g=function(e){var t=Object(r.useState)({}),a=Object(u.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){function t(){return(t=Object(C.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.ajax({type:"GET",url:"https://api-mobile.circuithq.com/api/v2/topic/"+e.country,dataType:"json",headers:{Authorization:e.accessToken,"User-Country-Code":e.country}});case 2:a=t.sent,n={},c(a.data.flatMap((function(e){return n[e.programTypeId]=e.name,e.subTopics})).reduce((function(e,t){return e[t.programId]={name:t.name,shortname:t.name.replace(/([A-Za-z0-9])([A-Za-z0-9]*)/g,(function(e,t,a){return t.toUpperCase()+a.toLowerCase()})),type:n[t.programTypeId]},e}),{}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.accessToken]),n}({accessToken:a,country:i}),v=Object(r.useState)(null),E=Object(u.a)(v,2),y=E[0],O=E[1],j=Object(r.useState)(null),S=Object(u.a)(j,2),x=S[0],T=S[1],w=Object(r.useState)(null),I=Object(u.a)(w,2),D=I[0],A=I[1];function N(e){e.target===e.currentTarget&&p(null)}return Object(r.useEffect)((function(){Notification.requestPermission().then((function(){var e=!1,t=null;setInterval((function(){if(document.hidden){if(!e){e=!0;var a=new Notification("The FF Booker tab is not active!",{body:"Click here to return to the tab",requireInteraction:!0});a.onclick=function(){window.focus(),window.parent.focus(),a.close()},t=a}}else e=!1,t&&t.close()}),100),window.onbeforeunload=function(){t&&t.close()}}))}),[]),c.a.createElement(B.Provider,{value:!1},c.a.createElement("div",{style:Object(s.a)(Object(s.a)({},Te),{},{display:"flex"}),onClick:N},c.a.createElement("div",{style:Object(s.a)(Object(s.a)({},we),{},{maxWidth:1e3}),onClick:N},c.a.createElement(P,Object.assign({handleSelection:function(e){return p(e)},fromDateAdj:165600,toDateAdj:511200,selected:d,accessToken:a,country:i},{paramClub:y,paramClasses:x,paramTime:D},{clubTypes:b,classTypes:g}))),c.a.createElement("div",{style:Object(s.a)(Object(s.a)({},we),{},{minWidth:"325px",maxWidth:"400px",flexGrow:0}),onClick:N},c.a.createElement("div",{style:{display:"flex",flexDirection:"column",maxHeight:"100%"}},c.a.createElement(ye,Object.assign({setParamClub:O,setParamClasses:T,setParamTime:A},{accessToken:a,setAccessToken:n},{country:i},{clubTypes:b,classTypes:g})),c.a.createElement(q,Object.assign({handleSelection:function(e){return p(e)},targetClass:d,bookOpen:165600,bookOffset:1,bookDuration:10,bookWait:150,accessToken:a,country:i},{clubTypes:b,classTypes:g}))))),c.a.createElement(je.a,{width:"100vw",height:"100vh",params:Se}))},Te={position:"absolute",top:0,bottom:0,left:0,right:0,padding:"0 5px"},we={margin:"5px 5px",flexGrow:1};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[158,1,2]]]);
//# sourceMappingURL=main.3f47137b.chunk.js.map