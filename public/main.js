(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{16:function(e,t,a){"use strict";var l=i(a(0)),n=a(14),r=i(a(6));function i(e){return e&&e.__esModule?e:{default:e}}var s=document.getElementById("root");s&&(0,n.render)(l.default.createElement(r.default,null),s)},22:function(e,t){e.exports={me:"styleApp__me",row:"styleApp__row",sideBar:"styleApp__sideBar",sidebar:"styleApp__sidebar",image:"styleApp__image",big:"styleApp__big",details:"styleApp__details",cv:"styleApp__cv",button:"styleApp__button",listTitle:"styleApp__listTitle",listItem:"styleApp__listItem",vis:"styleApp__vis",visRow:"styleApp__visRow",thumb:"styleApp__thumb"}},5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),r=s(n),i=s(a(22));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.url,a=e.title,l=e.coauthor,n=e.journal,i=e.year;return r.default.createElement("p",null,i," ",r.default.createElement("a",{href:t},a)," ",l," ",r.default.createElement("span",null,n))},o=function(e){var t=e.url,a=e.imgUrl,l=e.title;return r.default.createElement("div",{className:i.default.vis},r.default.createElement("div",{style:{width:"80%"}},r.default.createElement("a",{href:t,target:"__blank"},r.default.createElement("div",{className:i.default.thumb,style:{backgroundImage:a}}))),r.default.createElement("div",null,l))},c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"render",value:function(){return r.default.createElement("div",{className:i.default.main},r.default.createElement("div",{className:i.default.row},r.default.createElement("div",{className:i.default.sideBar},r.default.createElement("div",{className:i.default.image},r.default.createElement("img",{src:"./me.jpg"})),r.default.createElement("div",{className:i.default.details},r.default.createElement("div",null,"Lewis Lehe"),r.default.createElement("div",null,"Berkeley, CA"),r.default.createElement("div",null,"lewis500 at berkeley dot edu"),r.default.createElement("a",{href:"./cv.pdf",target:"__blank",className:i.default.cv},"Cirriculum Vitae"))),r.default.createElement("div",{className:i.default.big},r.default.createElement("div",{className:i.default.listItem},r.default.createElement("p",{className:i.default.me},"In October 2018, I'll be starting as assistant professor in the department of Civil and Environmental Engineering at University of Illinois, Urbana-Champaign. I study transportation economics and engineering. I'm from Birmingham, Alabama.")),r.default.createElement("div",{className:i.default.listItem},r.default.createElement("div",{className:i.default.listTitle},"Publications"),r.default.createElement(u,{journal:"Transportation Research Part B",title:"Distance-dependent congestion pricing for downtown zones",url:"https://www.sciencedirect.com/science/article/pii/S0191261515000387",coauthor:"(w/ Carlos Daganzo)",year:2015}),r.default.createElement(u,{journal:"Transportation Research Part B",title:"Traffic on signalized streets",url:"https://www.sciencedirect.com/science/article/pii/S0191261515302423",coauthor:"(w/ Carlos Daganzo)",year:"2016"}),r.default.createElement(u,{journal:"Transportation Research Part B",title:"Adaptive offsets for signalized streets",url:"https://www.sciencedirect.com/science/article/pii/S2352146517303125",coauthor:"(w/ Carlos Daganzo & Juan Argote-Cabanero)",year:"2017"}),r.default.createElement(u,{journal:"Journal of Transport and Land Use",title:"Feedback and the use of land for parking",url:"https://www.jtlu.org/index.php/jtlu/article/view/835",coauthor:"",year:"2017"}),r.default.createElement(u,{journal:"Economics of Transportation",title:"Downtown tolls and the distribution of trip lengths",url:"https://www.sciencedirect.com/science/article/pii/S2212012217300679",coauthor:"",year:"2017"})),r.default.createElement("div",{className:i.default.listItem},r.default.createElement("div",{className:i.default.listTitle},"In-progress research"),r.default.createElement("p",null,"A technical history of downtown congestion pricing"),r.default.createElement("p",null,"Downtown congestion pricing and equity"),r.default.createElement("p",null,"How minimum parking requirements make housing more expensive (resubmit at ",r.default.createElement("span",null,"Journal of Transport and Land Use"),")")),r.default.createElement("div",{className:i.default.listItem},r.default.createElement("div",{className:i.default.listTitle},"Visualizations"),r.default.createElement("div",{className:i.default.visRow},r.default.createElement(o,{url:"https://ww2.kqed.org/lowdown/2013/11/12/traffic-waves/",imgUrl:"url(./thumbs/waves.png)",title:"Traffic Waves"}),r.default.createElement(o,{url:"http://setosa.io/bus",imgUrl:"url(./thumbs/bus.png)",title:"Bus Bunching"})),r.default.createElement("div",{className:i.default.visRow},r.default.createElement(o,{url:"http://setosa.io/blog/2014/09/02/gridlock/",imgUrl:"url(./thumbs/gridlock.png)",title:"Gridlock vs. Bottlenecks"}),r.default.createElement(o,{url:"http://lewis500.github.io/macro",imgUrl:"url(./thumbs/fed.png)",title:"Federal Reserve"})),r.default.createElement("div",{className:i.default.visRow},r.default.createElement(o,{url:"http://lewis500.github.io/diffeq/",imgUrl:"url(./thumbs/odes.png)",title:"Differential Equations"}),r.default.createElement(o,{url:"http://lewis500.github.io/socialsecurity",imgUrl:"url(./thumbs/ss.png)",title:"Social Security"}))),r.default.createElement("div",{className:i.default.listItem},r.default.createElement("div",{className:i.default.listTitle},"Education"),r.default.createElement("p",null,"2010 B.S. Mathematics-Economics, U. Pittsburgh"),r.default.createElement("p",null,"2012 M.A. Transport Economics, U. Leeds"),r.default.createElement("p",null,"2013 M.S. Civil & Environmental Engineering, UC Berkeley"),r.default.createElement("p",null,"2016 Ph.D. Civil & Environmental Engineering, UC Berkeley")))))}}]),t}();t.default=c},6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(5);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=l,e&&e.__esModule?e:{default:e}).default;var e}})}},[[16,0,1]]]);
//# sourceMappingURL=main.js.map