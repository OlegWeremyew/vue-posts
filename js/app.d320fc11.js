(function(){"use strict";var t={6545:function(t,e,o){var s=o(9963),a=o(6252);const n={class:"app"},i={class:"container"};function r(t,e,o,s,r,l){const d=(0,a.up)("Navbar"),p=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(d),(0,a._)("div",i,[(0,a.Wm)(p)])])}const l={class:"nav"};function d(t,e,o,s,n,i){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",l,[(0,a.Wm)(r,{class:"link",to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Wm)(r,{class:"link",to:"/posts"},{default:(0,a.w5)((()=>[(0,a.Uk)("Posts")])),_:1}),(0,a.Wm)(r,{class:"link",to:"/store"},{default:(0,a.w5)((()=>[(0,a.Uk)("Posts Store")])),_:1}),(0,a.Wm)(r,{class:"link",to:"/images"},{default:(0,a.w5)((()=>[(0,a.Uk)("Images")])),_:1})])}var p={name:"Navbar"},c=o(3744);const u=(0,c.Z)(p,[["render",d],["__scopeId","data-v-555971dc"]]);var m=u,h={name:"App",components:{Navbar:m}};const g=(0,c.Z)(h,[["render",r]]);var v=g;const f={class:"btn"};function y(t,e,o,s,n,i){return(0,a.wg)(),(0,a.iD)("button",f,[(0,a.WI)(t.$slots,"default",{},void 0,!0)])}var P={name:"MyButton"};const w=(0,c.Z)(P,[["render",y],["__scopeId","data-v-3bb8ebcf"]]);var _=w;const b=["value"];function S(t,e,o,s,n,i){return(0,a.wg)(),(0,a.iD)("input",{class:"input",value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>i.updateInput&&i.updateInput(...t))},null,40,b)}var k={name:"MyInput",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const D=(0,c.Z)(k,[["render",S],["__scopeId","data-v-b3d1ee26"]]);var M=D;function V(t,e,o,n,i,r){return t.show?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:e[1]||(e[1]=(...e)=>t.hideDialog&&t.hideDialog(...e)),class:"dialog"},[(0,a._)("div",{onClick:e[0]||(e[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,a.WI)(t.$slots,"default",{},void 0,!0)])])):(0,a.kq)("",!0)}var C={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}},mounted(){}},I={name:"MyDialog",mixins:[C]};const O=(0,c.Z)(I,[["render",V],["__scopeId","data-v-75654906"]]);var L=O,W=[_,M,L,L];function U(t,e,o,s,n,i){return(0,a.wg)(),(0,a.iD)("div",null,"dfdfgdfg")}var Q={name:"MainPage"};const x=(0,c.Z)(Q,[["render",U]]);var Z=x,$=o(2201);const j=t=>((0,a.dD)("data-v-c5050b72"),t=t(),(0,a.Cn)(),t),A={class:"app"},B=j((()=>(0,a._)("h1",null,"Page with posts",-1))),E={class:"app__btns"},F={key:1},R={class:"observer"};function T(t,e,o,s,n,i){const r=(0,a.up)("MyInput"),l=(0,a.up)("MyButton"),d=(0,a.up)("MySelect"),p=(0,a.up)("PostForm"),c=(0,a.up)("MyDialog"),u=(0,a.up)("PostList"),m=(0,a.Q2)("focus"),h=(0,a.Q2)("intersections");return(0,a.wg)(),(0,a.iD)("div",A,[B,(0,a.wy)((0,a.Wm)(r,{modelValue:t.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=e=>t.searchQuery=e),placeholder:"Search...",type:"text"},null,8,["modelValue"]),[[m]]),(0,a._)("div",E,[(0,a.Wm)(l,{onClick:i.showDialog,style:{"margin-left":"-10px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Create Post ")])),_:1},8,["onClick"]),(0,a.Wm)(d,{modelValue:t.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=e=>t.selectedSort=e),options:t.sortOptions},null,8,["modelValue","options"])]),(0,a.Wm)(c,{show:t.dialogVisible,"onUpdate:show":e[2]||(e[2]=e=>t.dialogVisible=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{onCreate:i.createPost},null,8,["onCreate"])])),_:1},8,["show"]),t.isPostLoading?((0,a.wg)(),(0,a.iD)("div",F,"Loading in process...")):((0,a.wg)(),(0,a.j4)(u,{key:0,posts:i.sortedAndSearchedPosts,onRemove:i.removePost},null,8,["posts","onRemove"])),(0,a.wy)((0,a._)("div",R,null,512),[[h,i.loadMorePosts]])])}o(7658);const z=t=>((0,a.dD)("data-v-31fd2a20"),t=t(),(0,a.Cn)(),t),N={key:0},q=z((()=>(0,a._)("h3",null,"Posts List",-1))),H={key:1,class:"empty"};function K(t,e,o,n,i,r){const l=(0,a.up)("PostItem");return o.posts.length?((0,a.wg)(),(0,a.iD)("div",N,[q,(0,a.Wm)(s.W3,{name:"post-list"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.posts,(e=>((0,a.wg)(),(0,a.j4)(l,{key:e.id,post:e,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,a.wg)(),(0,a.iD)("h3",H,"List is empty"))}var Y=o(3577);const G=t=>((0,a.dD)("data-v-a0391af0"),t=t(),(0,a.Cn)(),t),J={class:"post"},X=G((()=>(0,a._)("strong",null,"Название:",-1))),tt=G((()=>(0,a._)("strong",null,"Описание: ",-1))),et={class:"post__btns"};function ot(t,e,o,s,n,i){const r=(0,a.up)("MyButton");return(0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("div",null,[(0,a._)("div",null,[(0,a._)("strong",null,"Номер поста "+(0,Y.zw)(o.post.id),1)]),(0,a._)("div",null,[X,(0,a.Uk)(" "+(0,Y.zw)(o.post.title),1)]),(0,a._)("div",null,[tt,(0,a.Uk)(" "+(0,Y.zw)(o.post.body),1)])]),(0,a._)("div",et,[(0,a.Wm)(r,{onClick:e[0]||(e[0]=e=>t.$router.push(`/posts/${o.post.id}`))},{default:(0,a.w5)((()=>[(0,a.Uk)("Open")])),_:1}),(0,a.Wm)(r,{onClick:e[1]||(e[1]=e=>t.$emit("remove",this.post))},{default:(0,a.w5)((()=>[(0,a.Uk)("Удалить")])),_:1})])])}var st={name:"PostItem",props:{post:{type:Object,required:!0}}};const at=(0,c.Z)(st,[["render",ot],["__scopeId","data-v-a0391af0"]]);var nt=at,it={components:{PostItem:nt},props:{posts:{type:Array,required:!0}},name:"PostList"};const rt=(0,c.Z)(it,[["render",K],["__scopeId","data-v-31fd2a20"]]);var lt=rt;const dt=t=>((0,a.dD)("data-v-0e3e5fda"),t=t(),(0,a.Cn)(),t),pt=dt((()=>(0,a._)("h4",null,"create post",-1)));function ct(t,e,o,n,i,r){const l=(0,a.up)("MyInput"),d=(0,a.up)("MyButton"),p=(0,a.Q2)("focus");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:e[2]||(e[2]=(0,s.iM)((()=>{}),["prevent"]))},[pt,(0,a.wy)((0,a.Wm)(l,{type:"text",modelValue:t.post.title,"onUpdate:modelValue":e[0]||(e[0]=e=>t.post.title=e),placeholder:"title"},null,8,["modelValue"]),[[p]]),(0,a.Wm)(l,{type:"text",modelValue:t.post.body,"onUpdate:modelValue":e[1]||(e[1]=e=>t.post.body=e),placeholder:"description"},null,8,["modelValue"]),(0,a.Wm)(d,{type:"submit",style:{"align-self":"flex-end","margin-top":"15px"},onClick:r.createPost},{default:(0,a.w5)((()=>[(0,a.Uk)(" Add new ")])),_:1},8,["onClick"])],32)}var ut={name:"PostForm",data:()=>({post:{title:"",body:""}}),methods:{createPost(){this.post.id=Date.now(),this.$emit("create",{...this.post}),this.post.title="",this.post.body=""}}};const mt=(0,c.Z)(ut,[["render",ct],["__scopeId","data-v-0e3e5fda"]]);var ht=mt,gt=o(594);const vt=(0,a._)("option",{disabled:"",value:""},"Choose from list",-1),ft=["value"];function yt(t,e,o,s,n,i){return(0,a.wg)(),(0,a.iD)("select",{value:"modelValue",onChange:e[0]||(e[0]=(...t)=>i.changeOption&&i.changeOption(...t))},[vt,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.options,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t.value,value:t.value},(0,Y.zw)(t.name),9,ft)))),128))],32)}var Pt={name:"MySelect",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const wt=(0,c.Z)(Pt,[["render",yt]]);var _t=wt,bt={name:"PostsPage",components:{MyInput:M,MySelect:_t,MyButton:_,MyDialog:L,PostForm:ht,PostList:lt},data:()=>({posts:[],dialogVisible:!1,isPostLoading:!1,selectedSort:"",sortOptions:[{value:"title",name:"On title"},{value:"body",name:"On description"}],searchQuery:"",page:1,limit:10,totalPages:0}),methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},async fetchPosts(){try{this.isPostLoading=!0;const t=await gt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data,this.isPostLoading=!1}catch(t){alert(`Error: ${t.message}`)}},async loadMorePosts(){try{this.page+=1;const t=await gt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=[...this.posts,...t.data]}catch(t){alert(`Error: ${t.message}`)}}},mounted(){this.fetchPosts()},computed:{sortedPost(){return[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortedPost.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{}};const St=(0,c.Z)(bt,[["render",T],["__scopeId","data-v-c5050b72"]]);var kt=St;function Dt(t,e,o,s,n,i){return(0,a.wg)(),(0,a.iD)("div",null," imsges ")}var Mt={name:"Images"};const Vt=(0,c.Z)(Mt,[["render",Dt]]);var Ct=Vt;function It(t,e,o,s,n,i){return(0,a.wg)(),(0,a.iD)("div",null,"post page with ID : "+(0,Y.zw)(t.$route.params.id),1)}var Ot={name:"Post"};const Lt=(0,c.Z)(Ot,[["render",It]]);var Wt=Lt;const Ut=t=>((0,a.dD)("data-v-f9144fec"),t=t(),(0,a.Cn)(),t),Qt={class:"app"},xt=Ut((()=>(0,a._)("h2",null,"Page with posts",-1))),Zt={class:"app__btns"},$t={key:1},jt={class:"observer"};function At(t,e,o,s,n,i){const r=(0,a.up)("MyInput"),l=(0,a.up)("MyButton"),d=(0,a.up)("MySelect"),p=(0,a.up)("PostForm"),c=(0,a.up)("MyDialog"),u=(0,a.up)("PostList"),m=(0,a.Q2)("focus"),h=(0,a.Q2)("intersections");return(0,a.wg)(),(0,a.iD)("div",Qt,[xt,(0,a.wy)((0,a.Wm)(r,{"model-value":t.searchQuery,"onUpdate:modelValue":t.setSearchQuery,placeholder:"Search...",type:"text"},null,8,["model-value","onUpdate:modelValue"]),[[m]]),(0,a._)("div",Zt,[(0,a.Wm)(l,{onClick:i.showDialog,style:{"margin-left":"-10px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Create Post ")])),_:1},8,["onClick"]),(0,a.Wm)(d,{"model-value":t.selectedSort,"onUpdate:modelValue":t.setSelectedSort,options:t.sortOptions},null,8,["model-value","onUpdate:modelValue","options"])]),(0,a.Wm)(c,{show:t.dialogVisible,"onUpdate:show":e[0]||(e[0]=e=>t.dialogVisible=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{onCreate:i.createPost},null,8,["onCreate"])])),_:1},8,["show"]),t.isPostLoading?((0,a.wg)(),(0,a.iD)("div",$t,"Loading in process...")):((0,a.wg)(),(0,a.j4)(u,{key:0,posts:t.sortedAndSearchedPosts,onRemove:i.removePost},null,8,["posts","onRemove"])),(0,a.wy)((0,a._)("div",jt,null,512),[[h,t.loadMorePosts]])])}var Bt=o(3907),Et={name:"PostsPage",components:{MyInput:M,MySelect:_t,MyButton:_,MyDialog:L,PostForm:ht,PostList:lt},data:()=>({dialogVisible:!1}),methods:{...(0,Bt.OI)({setPage:"post/setPage",setSearchQuery:"post/setSearchQuery",setSelectedSort:"post/setSelectedSort"}),...(0,Bt.nv)({loadMorePosts:"post/loadMorePosts",fetchPosts:"post/fetchPosts"}),createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0}},mounted(){this.fetchPosts()},computed:{...(0,Bt.rn)({posts:t=>t.post.posts,isPostLoading:t=>t.post.isPostLoading,selectedSort:t=>t.post.selectedSort,sortOptions:t=>t.post.sortOptions,searchQuery:t=>t.post.searchQuery,page:t=>t.post.page,limit:t=>t.post.limit,totalPages:t=>t.post.totalPages}),...(0,Bt.Se)({sortedPost:"post/sortedPost",sortedAndSearchedPosts:"post/sortedAndSearchedPosts"})},watch:{}};const Ft=(0,c.Z)(Et,[["render",At],["__scopeId","data-v-f9144fec"]]);var Rt=Ft;const Tt=[{path:"/",component:Z},{path:"/posts",component:kt},{path:"/images",component:Ct},{path:"/posts/:id",component:Wt},{path:"/store",component:Rt}],zt=(0,$.p7)({routes:Tt,history:(0,$.PO)("/vue-posts/")});var Nt=zt,qt={mounted(t){t.focus()},name:"focus"},Ht={mounted(t,e){console.log(t);const o={rootMargin:"0px",threshold:1},s=(t,o)=>{t[0].isIntersecting&&e.value()},a=new IntersectionObserver(s,o);a.observe(t)},name:"intersections"},Kt=[qt,Ht];const Yt={state:()=>({posts:[],isPostLoading:!1,selectedSort:"",sortOptions:[{value:"title",name:"On title"},{value:"body",name:"On description"}],searchQuery:"",page:1,limit:10,totalPages:0}),getters:{sortedPost(t){return[...t.posts].sort(((e,o)=>e[t.selectedSort]?.localeCompare(o[t.selectedSort])))},sortedAndSearchedPosts(t,e){return e.sortedPost.filter((e=>e.title.toLowerCase().includes(t.searchQuery.toLowerCase())))}},mutations:{setPosts(t,e){t.posts=e},setLoading(t,e){t.isPostLoading=e},setPage(t,e){t.page=e},setSelectedSort(t,e){t.selectedSort=e},setSearchQuery(t,e){t.searchQuery=e},setTotalPages(t,e){t.totalPages=e}},actions:{async fetchPosts({state:t,commit:e}){try{e("setLoading",!0);const o=await gt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});e("setTotalPages",Math.ceil(o.headers["x-total-count"]/t.limit)),e("setPosts",o.data),e("setLoading",!1)}catch(o){alert(`Error: ${o.message}`)}},async loadMorePosts({state:t,commit:e}){try{e("setPage",t.page+1);const o=await gt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});e("setTotalPages",Math.ceil(o.headers["x-total-count"]/t.limit)),e("setPosts",[...t.posts,...o.data])}catch(o){alert(`Error: ${o.message}`)}}},namespaced:!0};var Gt=(0,Bt.MT)({modules:{post:Yt}});const Jt=(0,s.ri)(v);W.forEach((t=>{Jt.component(t.name,t)})),Kt.forEach((t=>{Jt.directive(t.name,t)})),Jt.use(Gt).use(Nt).mount("#app")}},e={};function o(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,s,a,n){if(!s){var i=1/0;for(p=0;p<t.length;p++){s=t[p][0],a=t[p][1],n=t[p][2];for(var r=!0,l=0;l<s.length;l++)(!1&n||i>=n)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(r=!1,n<i&&(i=n));if(r){t.splice(p--,1);var d=a();void 0!==d&&(e=d)}}return e}n=n||0;for(var p=t.length;p>0&&t[p-1][2]>n;p--)t[p]=t[p-1];t[p]=[s,a,n]}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,n,i=s[0],r=s[1],l=s[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(l)var p=l(o)}for(e&&e(s);d<i.length;d++)n=i[d],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(p)},s=self["webpackChunkvue_posts"]=self["webpackChunkvue_posts"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(6545)}));s=o.O(s)})();
//# sourceMappingURL=app.d320fc11.js.map