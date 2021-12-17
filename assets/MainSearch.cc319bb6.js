/* empty css                                                               */import{_ as g,H as $}from"./Header.f251eaf5.js";import{o,c as a,b as r,F as y,g as S,h as M,t as p,p as b,f as I,n as L,r as m,a as k,i as w,d as v,j}from"./vendor.3220ec20.js";/* empty css                                                           */const C={name:"Sidebar",props:{categories:{type:Array},modelValue:{type:String,default:"",required:!0},searchInput:{type:String,default:"",required:!0}},methods:{getKeywordClass(e){return this.searchInput.includes(e)?{"search-highlight":!0}:{}}},mounted(){console.log("[Vue] -> Mounted Sidebar.vue")}},H={id:"vue",class:"sidebar"},F={class:"options"},N=["onClick"];function P(e,c,i,_,s,n){return o(),a("div",H,[r("div",F,[(o(!0),a(y,null,S(i.categories,(t,l)=>(o(),a("div",{class:"option",key:l},[r("span",{class:M(["pl-4 pt-3 pb-3 overline keyword",n.getKeywordClass(t)]),onClick:d=>e.$emit("update:modelValue",t)},p(t),11,N)]))),128))])])}var E=g(C,[["render",P],["__scopeId","data-v-2a838184"]]);const q={name:"Sidebar",props:{pages:{type:Array,required:!0}},methods:{getImageStyle(e){return`background-image: url('${e}');`},isPremium(e){return!!e.includes("premium")},updatePath(e){window.location.pathname=e}},mounted(){console.log("[Vue] -> Mounted Search.vue")}},z=e=>(b("data-v-2732d3b1"),e=e(),I(),e),B={id:"vue",class:"search"},D=["onClick"],U={class:"img-wrapper"},K={class:"details mr-2"},J={class:"name pl-4 grey--text text--lighten-4"},Q={class:"bolder grey--text subtitle-2 mt-2 pl-2"},W={class:"description pl-4 pt-4 grey--text text--lighten-2"},X={class:"keywords pl-4 pb-4 pr-4"},Z={class:"grey--text text--darken-1 subtitle-2"},T={key:0,class:"premium overline pa-2 mt-3 mr-3 bolder"},A={key:1,class:"free overline pa-2 mt-3 mr-3 bolder"},R=z(()=>r("div",{class:"empty-space"},null,-1));function O(e,c,i,_,s,n){return o(),a("div",B,[(o(!0),a(y,null,S(i.pages,(t,l)=>(o(),a("div",{class:"result",key:l,onClick:d=>n.updatePath(t.path)},[r("div",U,[r("div",{class:"img",style:L(n.getImageStyle(t.images[0]))},null,4)]),r("div",K,[r("div",J,[r("span",null,p(t.title),1),r("span",Q,"Author - "+p(t.author),1)]),r("div",W,p(t.description),1),r("div",X,[r("span",Z," Keywords: "+p(t.keywords.join(", ")),1)])]),n.isPremium(t.keywords)?(o(),a("div",T," $"+p(t.price),1)):(o(),a("div",A,"Free"))],8,D))),128)),R])}var Y=g(q,[["render",O],["__scopeId","data-v-2732d3b1"]]),f;(function(e){e.CLIENT="client",e.DATA="data",e.FREE="free",e.INTERFACE="interface",e.ITEM="item",e.PLAYER="player",e.PREMIUM="premium",e.SERVER="server",e.STREAMER="streamer",e.SYSTEM="system",e.TOOL="tool",e.UTILITY="utility",e.VEHICLE="vehicle",e.VOICE="voice"})(f||(f={}));function G(){return Object.values(f)}const ee={name:"MainSearch",components:{Header:$,Sidebar:E,Search:Y},data(){return{suggestions:[],search:"",pageToDisplay:!1}},props:{pages:{type:Array,required:!1}},computed:{fetchCategories(){return G()}},methods:{},watch:{search(e,c){if(e===""){this.suggestions=[];return}const i=e.split(" "),_=this.pages.filter(s=>{const n=s.title.replace(/ /g,"").toLowerCase(),t=s.description.replace(/ /g,"").toLowerCase(),l=s.keywords.join("").toLowerCase(),d=n+t+l;let u=!1;for(let h=0;h<i.length;h++){const x=i[h].toLowerCase();if(d.includes(x)){u=!0;break}}return u});this.suggestions=_}},mounted(){console.log("[Vue] -> Mounted App.vue")}},V=e=>(b("data-v-582fb382"),e=e(),I(),e),se={id:"vue",class:"main-wrapper stack"},te={class:"split"},re={key:2,class:"zero-result bolder pt-6"},oe=j(" 0 Results "),ae=V(()=>r("br",null,null,-1)),ne=V(()=>r("img",{class:"mt-6 rounded-lg",src:"https://thumbs.gfycat.com/HoarseInsidiousDachshund-size_restricted.gif",width:"200"},null,-1)),ie=[oe,ae,ne];function ce(e,c,i,_,s,n){const t=m("Header"),l=m("Sidebar"),d=m("Search");return o(),a("div",se,[k(t,{modelValue:s.search,"onUpdate:modelValue":c[0]||(c[0]=u=>s.search=u)},null,8,["modelValue"]),r("div",te,[k(l,{modelValue:s.search,"onUpdate:modelValue":c[1]||(c[1]=u=>s.search=u),categories:n.fetchCategories,searchInput:s.search},null,8,["modelValue","categories","searchInput"]),s.suggestions.length<=0&&s.search.length<=0?(o(),w(d,{key:0,pages:i.pages},null,8,["pages"])):v("v-if",!0),s.suggestions.length>=1?(o(),w(d,{key:1,pages:s.suggestions},null,8,["pages"])):v("v-if",!0),s.suggestions.length<=0&&s.search.length>=1?(o(),a("span",re,ie)):v("v-if",!0)])])}var _e=g(ee,[["render",ce],["__scopeId","data-v-582fb382"]]);export{_e as default};
