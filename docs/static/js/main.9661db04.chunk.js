(window["webpackJsonpevaluacion-final"]=window["webpackJsonpevaluacion-final"]||[]).push([[0],{23:function(e,a,t){e.exports=t(39)},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=(t(28),t(16)),s=t(17),m=t(21),u=t(18),o=t(9),p=t(22),h=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e}))},E=t(5),d=(t(29),function(){return r.a.createElement(E.b,{to:"/"},r.a.createElement("img",{className:"home-logo",src:"./official-logo.png",alt:"Evaluaci\xf3n final"}))}),f=(t(35),function(e){var a=e.inputSearch;return r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{className:"input",type:"search",placeholder:"busca tu personaje favorito",onChange:a}))}),v=(t(36),function(e){var a=e.character;return r.a.createElement("li",{className:"App__List--c",key:a.id},r.a.createElement("img",{className:"App__List--c-photo",src:a.image,alt:a.name}),r.a.createElement("div",{className:"App__List--c-card"},r.a.createElement("h2",{className:"App__List--c-name"},a.name),r.a.createElement("p",{className:"App__List--c-specie"},a.species)))}),g=function(e){var a=e.character,t=e.query;return r.a.createElement("ul",{className:"App__List"},a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,a){return r.a.createElement(E.b,{key:a,to:"/character-detail/".concat(e.id),className:"character__link"},r.a.createElement(v,{key:a,character:e}))})))},N=function(e){var a=e.data,t=e.query,n=e.inputSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(f,{inputSearch:n}),r.a.createElement(g,{character:a,query:t}))},b=(t(37),function(e){var a=e.routerProps,t=e.data,n=parseInt(a.match.params.id),c=t.filter((function(e){return e.id===n}));if(c[0]){var l=c[0],i=l.name,s=l.image,m=l.species,u=l.origin,o=l.episode,p=l.status;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"details-links"},r.a.createElement(d,null),r.a.createElement(E.b,{to:"/",className:"app__back"},r.a.createElement("div",{className:"back-container"},r.a.createElement("img",{className:"logo-home",src:"./home-photo.png",alt:"Volver a la home"}),r.a.createElement("h2",null,"Volver")))),r.a.createElement("div",{className:"character-details--card"},r.a.createElement("div",{className:"character-img_container"},r.a.createElement("img",{className:"character-img",src:s,alt:i})),r.a.createElement("div",{className:"character-details"},r.a.createElement("h2",null,i),r.a.createElement("p",null,"Status: ",p),r.a.createElement("p",null,"Species: ",m),r.a.createElement("p",null,"Origin: ",u.name),r.a.createElement("p",null,"Episodes: ",o.length))))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"details-links"},r.a.createElement(d,null),r.a.createElement(E.b,{to:"/",className:"app__back"},r.a.createElement("div",{className:"back-container"},r.a.createElement("img",{className:"logo-home",src:"./home-photo.png",alt:"Volver a la home"}),r.a.createElement("h2",null,"Volver")))),r.a.createElement("div",null,r.a.createElement("img",{className:"facepalm-gif",src:"./facepalm.gif",alt:"Error"}),r.a.createElement("p",null,"Ese personaje no existe")))}),y=t(6),_=(t(38),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={data:[],query:""},t.inputSearch=t.inputSearch.bind(Object(o.a)(t)),t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;h().then((function(a){e.setState({data:a.results})}))}},{key:"inputSearch",value:function(e){var a=e.currentTarget.value;this.setState({query:a})}},{key:"render",value:function(){var e=this,a=this.state,t=a.data,n=a.query;return r.a.createElement("div",{className:"App"},r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",render:function(){return r.a.createElement(N,{inputSearch:e.inputSearch,query:n,data:t})}}),r.a.createElement(y.a,{path:"/character-detail/:id",render:function(e){return r.a.createElement(b,{routerProps:e,data:t})}})))}}]),a}(r.a.Component));l.a.render(r.a.createElement(E.a,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9661db04.chunk.js.map