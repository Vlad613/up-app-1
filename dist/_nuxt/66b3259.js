(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{344:function(t,e,o){"use strict";o.r(e);var n={name:"Content-btn",props:["title","place"]},r=(o(350),o(15)),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{class:["content-btn-text","content-btn",{"content-btn-jobs":"jobs"===this.place},{"start-bat-span":"start-span"===this.place}]},[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,"342eddb4",null);e.default=component.exports},346:function(t,e,o){var content=o(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("33f7b53a",content,!0,{sourceMap:!1})},350:function(t,e,o){"use strict";o(346)},351:function(t,e,o){(e=o(8)(!1)).push([t.i,'.content-btn[data-v-342eddb4]{position:relative;width:100%;height:100%;cursor:pointer}.content-btn[data-v-342eddb4]:after{content:"";position:absolute;top:100%;left:0;width:0;height:2px;background-color:#000;transition:width 0s}.content-btn[data-v-342eddb4]:hover:after{width:100%}@media screen and (max-width:428px){.content-btn-jobs[data-v-342eddb4]{font-size:14px}}',""]),t.exports=e},353:function(t,e,o){var content=o(371);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("e8dcd55a",content,!0,{sourceMap:!1})},358:function(t,e,o){"use strict";o.r(e);o(21),o(69),o(39);var n=o(7),r=o(343),c=o(344),l=(o(74),{name:"Projects",components:{ScrollAnimation:r.default,Content_btn:c.default},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://strapi-up.verodigital.site/projects-lists").then((function(t){return t.json()}));case 2:return t.projectsList=e.sent,e.next=5,fetch("https://strapi-up.verodigital.site/project").then((function(t){return t.json()}));case 5:t.projectsPage=e.sent;case 6:case"end":return e.stop()}}),e)})))()})),data:function(){return{projectsList:{},projectsPage:{}}},methods:{getUrl:function(t){return"https://strapi-up.verodigital.site".concat(t)},bigClass:function(t){return 0===t||5===t}},computed:{title:function(){return"/project"===this.$route.path?"projects":"featured projects"},checkProjectPage:function(){return"/project"===this.$route.path},contentBlockClasses:function(){return["content-block","main-content-margin-left-right",{"content-block-project-page-margin-top":this.checkProjectPage},{"content-block-project-page-margin-bottom":this.checkProjectPage}]}}}),m=(o(370),o(15)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["projects-block",{"projects-block_projects-page":"/project"===this.$route.path}]},["/project"===this.$route.path?o("div",{staticClass:"description pages-content-margin-left-big"},[o("div",{staticClass:"description-title"},[o("span",{staticClass:"content-title",domProps:{innerHTML:t._s(t.projectsPage.title_content)}})]),t._v(" "),o("p",{staticClass:"content-p",domProps:{innerHTML:t._s(t.projectsPage.description)}})]):t._e(),t._v(" "),o("div",{class:t.contentBlockClasses},t._l(t.projectsList,(function(e,n){return(t.checkProjectPage?e:n<4)?o("nuxt-link",{key:n,class:["content-img-wrap",{"content-img-wrap-big":t.bigClass(n)&&t.checkProjectPage}],attrs:{to:"/project/"+e.id}},[o("ScrollAnimation",{staticClass:"cover",attrs:{translate:"",opacity:!1}},[o("img",{attrs:{src:t.getUrl(e.preview.url),alt:""}})]),t._v(" "),o("div",{staticClass:"item-project-title"},[o("span",{staticClass:"item-project-title-text"},[t._v("\n          "+t._s(e.title_card)+"\n        ")]),t._v(" "),o("span",{staticClass:"item-project-title-text-2"},[t._v("\n          "+t._s(e.title)+"\n        ")])])],1):t._e()})),1),t._v(" "),"/project"!==this.$route.path?o("div",{staticClass:"project_btn_wrap"},[o("nuxt-link",{attrs:{to:"/project"}},[o("Content_btn",{attrs:{title:"Explore all projects"}})],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ScrollAnimation:o(343).default,Content_btn:o(344).default})},370:function(t,e,o){"use strict";o(353)},371:function(t,e,o){(e=o(8)(!1)).push([t.i,".projects-block{width:100%;display:flex;flex-direction:column;margin-bottom:210px}.projects-block .description{display:flex;flex-direction:column;margin-right:var(--main-mini-margin)}.projects-block .description .description-title{margin-top:83px;margin-bottom:35px}.projects-block .description .description-title br{display:none}@media(max-width:1440px){.projects-block .description .description-title br{display:block}}.projects-block .description .content-p{white-space:pre-line}.projects-block .content-block{margin-top:150px;margin-bottom:50px;display:flex;justify-content:space-between;flex-wrap:wrap}.projects-block .content-block .content-img-wrap{position:relative;width:calc(50% - var(--main-very-mini-margin)/2);height:840px;margin-bottom:var(--main-very-mini-margin);display:flex}.projects-block .content-block .content-img-wrap img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.projects-block .content-block .content-img-wrap .image-scale-block_wrap .image-scale-img{cursor:pointer}.projects-block .content-block .content-img-wrap .item-project-title{position:absolute;bottom:60px;left:60px;cursor:pointer;display:flex;flex-direction:column}.projects-block .content-block .content-img-wrap .item-project-title .item-project-title-text{font-family:SFProDisplay}.projects-block .content-block .content-img-wrap .item-project-title .item-project-title-text,.projects-block .content-block .content-img-wrap .item-project-title .item-project-title-text-2{cursor:pointer}.projects-block .content-block .content-img-wrap-big{width:100%;margin-bottom:100px;margin-top:40px}.projects-block .content-block .content-img-wrap-big>div{width:inherit}.projects-block .content-block .content-img-wrap-big img{width:100%}.projects-block .content-block-project-page-margin-top{margin-top:42px}.projects-block .content-block-project-page-margin-bottom{margin-bottom:2px}.projects-block .project_btn_wrap{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin-right:var(--main-big-margin);align-self:flex-end}.projects-block_projects-page{margin-bottom:100px}@media screen and (max-width:1280px){.projects-block .description .description-title{flex-direction:column;margin-bottom:19px;white-space:unset}.projects-block .content-block{margin-bottom:0}.projects-block .content-block .content-img-wrap{height:620px}.projects-block .content-block .content-img-wrap-big{width:100%;margin-bottom:100px;margin-top:60px}.content-block-project-page-margin-top{margin-top:40px!important}.projects-block_projects-page{margin-bottom:60px}}@media screen and (max-width:1024px){.projects-block{margin-bottom:111px}.projects-block .description .description-title{margin-bottom:40px}.projects-block .content-block{margin-top:57px}.projects-block .content-block .content-img-wrap{height:560px}.projects-block .content-block .content-img-wrap-big{width:100%;margin-bottom:100px;margin-top:60px;height:526px}.projects-block .content-block-project-page-margin-top{margin-top:40px!important}}@media screen and (max-width:768px){.projects-block{margin-bottom:84px}.projects-block .description .description-title{margin-top:50px}.projects-block .content-block{margin-top:124px}.projects-block .content-block .content-img-wrap{height:440px}.projects-block .content-block .content-img-wrap .item-project-title{bottom:30px;left:48px}.projects-block .content-block .content-img-wrap-big{width:100%;margin-bottom:50px;margin-top:50px}.projects-block .content-block-project-page-margin-top{margin-top:0!important}}@media screen and (max-width:428px){.projects-block{margin-bottom:131px}.projects-block .description .description-title{margin-top:82px;margin-bottom:30px}.projects-block .content-block{margin-top:30px!important;margin-left:0;margin-right:0}.projects-block .content-block .content-img-wrap{width:100%;margin-bottom:50px;height:470px}.projects-block .content-block .content-img-wrap .item-project-title{bottom:60px;left:60px;width:unset}.projects-block .content-block .content-img-wrap-big{width:100%;margin-bottom:50px;margin-top:0}.projects-block .project_btn_wrap{align-self:flex-start;margin-right:0;margin-left:var(--main-big-margin)}}",""]),t.exports=e},392:function(t,e,o){var content=o(442);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("4f354e8d",content,!0,{sourceMap:!1})},441:function(t,e,o){"use strict";o(392)},442:function(t,e,o){(e=o(8)(!1)).push([t.i,".project[data-v-3227266c]{width:100%;display:flex;flex-direction:column}.project .title-img-wrap[data-v-3227266c]{position:relative;width:100%;height:var(--winHeight);display:flex;align-items:center;transition:height .3s}.project .title-img-wrap .titles[data-v-3227266c]{margin-right:var(--main-mini-margin);margin-left:var(--main-mini-margin);position:absolute;display:flex;flex-direction:column;z-index:1}.project .title-img-wrap .arrow[data-v-3227266c]{position:absolute;bottom:50px;left:50%;transform:translatex(-50%);z-index:2;cursor:pointer}.project .title-img-wrap .arrow img[data-v-3227266c]{transition:transform .2s ease-in-out}@media(min-width:429px){.project .title-img-wrap .arrow img[data-v-3227266c]{width:36px;height:20px}}.project .title-img-wrap .arrow:hover img[data-v-3227266c]{transform:translateY(5px)}",""]),t.exports=e},468:function(t,e,o){"use strict";o.r(e);o(39);var n=o(7),r=o(348),c=o(358),l=o(345),m=o(165),d={name:"Project",components:{Image_Scale_Block:r.default,Projects:c.default,News:l.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.error,t.params,e.prev=1,e.next=4,m.a.getPage("projects-lists");case 4:return n=e.sent,e.next=7,m.a.getPage("project");case 7:return r=e.sent,e.abrupt("return",{projects:n.data,project:r.data});case 11:e.prev=11,e.t0=e.catch(1),o({statusCode:503,message:"Unable to fetch blogs at this time"});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},head:function(){return{title:this.project.SEO.seoTitle,meta:[{hid:"description",name:"description",content:this.project.SEO.seoDescription},{hid:"fb:app_id",property:"fb:app_id",content:988674798283826},{hid:"og:title",property:"og:title",content:this.project.SEO.seoTitle},{hid:"og:url",property:"og:url",content:"http://localhost:3000"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:description",property:"og:description",content:this.project.SEO.seoDescription},{hid:"og:site_name",property:"og:site_name",content:"up"},{hid:"og:image",property:"og:image",content:"https://strapi-up.verodigital.site/"+(this.project.SEO.seoImage?this.project.SEO.seoImage.url:"/uploads/28_s5_cam001_211541b7b2.jpg")},{name:"twitter:title",content:this.project.SEO.seoTitle},{name:"twitter:card",content:"summary"},{name:"twitter:description",content:this.project.SEO.seoDescription},{name:"twitter:site",content:"website"},{name:"twitter:image",content:"https://strapi-up.verodigital.site/"+(this.project.SEO.seoImage?this.project.SEO.seoImage.url:"/uploads/28_s5_cam001_211541b7b2.jpg")}]}},data:function(){return{projects:{},project:{}}},methods:{scrollTo:function(){var t=document.getElementsByClassName("projects-block")[0].offsetTop+100;scroll({top:t,behavior:"smooth"})},getUrl:function(t){return"https://strapi-up.verodigital.site".concat(t)}}},j=(o(441),o(15)),component=Object(j.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project"},[o("div",{staticClass:"title-img-wrap"},[o("div",{staticClass:"titles"},[o("span",{staticClass:"project-title main-page_start-text"},[t._v(t._s(t.project.title))]),t._v(" "),o("span",{staticClass:"main-page_small-text"},[t._v(t._s(t.project.undertitle))])]),t._v(" "),o("Image_Scale_Block",{attrs:{img:t.getUrl(t.project.background_image.url)}}),t._v(" "),o("div",{staticClass:"arrow",on:{click:t.scrollTo}},[o("img",{attrs:{src:"/arrow-down.svg",alt:""}})])],1),t._v(" "),o("Projects",{attrs:{projects:{projects:t.projects,project:t.project}}}),t._v(" "),o("News")],1)}),[],!1,null,"3227266c",null);e.default=component.exports;installComponents(component,{Image_Scale_Block:o(348).default,Projects:o(358).default,News:o(345).default})}}]);