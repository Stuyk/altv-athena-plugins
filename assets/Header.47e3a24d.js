/* empty css                                                           */import{o as d,c as o,b as c,d as i,g as n}from"./vendor.7d2999dd.js";var p=(a,t)=>{const e=a.__vccOpts||a;for(const[s,r]of t)e[s]=r;return e};const h={name:"Header",props:{modelValue:{type:String,default:"",required:!1},hideSearch:{type:Boolean,required:!1,default:!1}},data(){return{}},methods:{},mounted(){console.log("[Vue] -> Mounted Header.vue")}},f={id:"header",class:"header-wrapper"},u=n('<div class="top split space-between" data-v-6fe98885><a class="header-text bolder pl-4" href="/search" data-v-6fe98885><img src="/favicon-32x32.png" height="25" width="25" class="pr-3" data-v-6fe98885><span data-v-6fe98885>Athena Plugins</span></a><div class="header-right pr-4" data-v-6fe98885><a class="header-link pr-4" href="https://athenaframework.com/" title="Home" data-v-6fe98885>Home</a><a class="header-link pr-4" href="https://docs.athenaframework.com/" title="Docs" data-v-6fe98885>Docs</a><a class="header-link pr-4" href="https://discord.com/invite/pZvbJmKN8Y" title="Discord" data-v-6fe98885>Discord</a><a class="header-link" href="https://github.com/Stuyk/altv-athena-plugins-md" title="Post" data-v-6fe98885> Post Plugin </a></div></div>',1),v={key:0,class:"bottom pb-4 pl-3 pr-3"},m=["value"];function _(a,t,e,s,r,g){return d(),o("div",f,[u,e.hideSearch?i("v-if",!0):(d(),o("div",v,[c("input",{type:"text",value:e.modelValue,onInput:t[0]||(t[0]=l=>a.$emit("update:modelValue",l.target.value)),placeholder:"Search for title, keywords, description, etc.",class:"pa-2"},null,40,m)]))])}var b=p(h,[["render",_],["__scopeId","data-v-6fe98885"]]);export{b as H,p as _};