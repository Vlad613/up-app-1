(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{236:function(t,e,o){"use strict";o.r(e);var n={name:"Content-btn",props:["title","place"]},r=(o(240),o(9)),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{class:["content-btn-text","content-btn",{"content-btn-jobs":"jobs"===this.place},{"start-bat-span":"start-span"===this.place}]},[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,"6b7fb382",null);e.default=component.exports},238:function(t,e,o){var content=o(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("47da6e5a",content,!0,{sourceMap:!1})},240:function(t,e,o){"use strict";o(238)},241:function(t,e,o){(e=o(10)(!1)).push([t.i,'.content-btn[data-v-6b7fb382]{position:relative;width:100%;height:100%;cursor:pointer}.content-btn[data-v-6b7fb382]:after{content:"";position:absolute;top:100%;left:0;width:50%;height:4px;background-color:#000;transition:width .3s}.content-btn[data-v-6b7fb382]:hover:after{width:100%}@media screen and (max-width:428px){.content-btn-jobs[data-v-6b7fb382]{font-size:14px}}',""]),t.exports=e},242:function(t,e,o){var content=o(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("86bb57d0",content,!0,{sourceMap:!1})},243:function(t,e,o){var content=o(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("c46b7bfc",content,!0,{sourceMap:!1})},244:function(t,e,o){"use strict";o.r(e);var n=o(235),r=o(236),content=o(248),c=o.n(content),l={name:"Studio",components:{Image_Scale_Block:n.default,Content_btn:r.default},data:function(){return{ContentImg:c.a}}},d=(o(249),o(9)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"studio-block"},[o("span",{staticClass:"main-page__content-title-position block-title"},[t._v("studio")]),t._v(" "),o("div",{staticClass:"studio_content-block"},[o("div",{staticClass:"studio_img-wrap"},[o("Image_Scale_Block",{attrs:{opacity:!0,img:t.ContentImg}})],1),t._v(" "),o("div",{staticClass:"studio_text-block__wrap"},[o("div",{class:["studio_text-block",{"studio-people_text-block":"/People"===this.$route.path}]},[o("span",{staticClass:"content-title"},[t._v("About")]),t._v(" "),o("p",{staticClass:"studio__text_p content-p"},[t._v("\n          Founded in 2018 by Anne Boonstra\n          UP works on both architecture\n          and interior projects in the Netherlands as well as international. UP is unique projects. Every client,\n          corporate\n          or private, is unique. It is our ambition to create distinctive designs that reflect\n          the soul and personal identity\n          of our clients.\n        ")]),t._v(" "),"/"===this.$route.path?o("div",{staticClass:"studio_btn_wrap"},[o("nuxt-link",{attrs:{to:"/People"}},[o("Content_btn",{attrs:{title:"Learn more"}})],1)],1):t._e()])])])])}),[],!1,null,"81fb3266",null);e.default=component.exports;installComponents(component,{Image_Scale_Block:o(235).default,Content_btn:o(236).default})},245:function(t,e,o){"use strict";o.r(e);o(251);var n=o(235),r=o(236),c=o(254),l=o.n(c),d=o(255),m=o.n(d),_=o(256),f=o.n(_),h=o(257),x=o.n(h),v={name:"Projects",components:{Image_Scale_Block:n.default,Content_btn:r.default},data:function(){return{contentImgs:[{img:l.a,title:"RB",big:!0},{img:m.a,title:"Nyenrode",big:!1},{img:f.a,title:"5CA int.",big:!1},{img:x.a,title:"OG",big:!1},{img:f.a,title:"5CA int.",big:!1},{img:l.a,title:"RB",big:!0},{img:m.a,title:"Nyenrode",big:!1},{img:f.a,title:"5CA int.",big:!1}]}},computed:{title:function(){return"/project"===this.$route.path?"projects":"featured projects"},checkProjectPage:function(){return"/project"===this.$route.path},contentBlockClasses:function(){return["content-block","main-content-margin-left-right",{"content-block-project-page-margin-top":this.checkProjectPage&&this.contentImgs[0].big},{"content-block-project-page-margin-bottom":this.checkProjectPage&&this.contentImgs[this.contentImgs.length-1].big}]}}},k=(o(258),o(9)),component=Object(k.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["projects-block",{"projects-block_projects-page":"/project"===this.$route.path}]},[o("span",{staticClass:"main-page__content-title-position block-title"},[t._v(t._s(t.title))]),t._v(" "),"/project"===this.$route.path?o("div",{staticClass:"description pages-content-margin-left-big"},[t._m(0),t._v(" "),o("p",{staticClass:"content-p"},[t._v(t._s("up architecture makes unique projects. Every client, corporate or private isunique.\nIt is our ambition to create distinctive design that reflect the sould and personal identity ofour clients."))])]):t._e(),t._v(" "),o("div",{class:t.contentBlockClasses},t._l(t.contentImgs,(function(e,n){return(t.checkProjectPage?e:n<4)?o("nuxt-link",{key:n,class:["content-img-wrap",{"content-img-wrap-big":e.big&&t.checkProjectPage}],attrs:{to:"/project/"+e.title}},[o("Image_Scale_Block",{attrs:{img:e.img,appointment:"project",opacity:{offset:n===(t.checkProjectPage?2:1)||n===(t.checkProjectPage?4:3)?400:0}}}),t._v(" "),o("div",{staticClass:"item-project-title item-project-title-text"},[t._v("\n          "+t._s(e.title)+"\n        ")])],1):t._e()})),1),t._v(" "),"/project"!==this.$route.path?o("div",{staticClass:"project_btn_wrap"},[o("nuxt-link",{attrs:{to:"/project"}},[o("Content_btn",{attrs:{title:"Explore all projects"}})],1)],1):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"description-title"},[e("span",{staticClass:"content-title"},[e("b",[this._v("up")]),this._v(" architecture "),e("br"),this._v("makes unique projects.")])])}],!1,null,"43f4c7da",null);e.default=component.exports;installComponents(component,{Image_Scale_Block:o(235).default,Content_btn:o(236).default})},248:function(t,e,o){t.exports=o.p+"img/content.0cddd71.jpg"},249:function(t,e,o){"use strict";o(242)},250:function(t,e,o){(e=o(10)(!1)).push([t.i,".studio-block[data-v-81fb3266]{position:relative;width:100%;display:flex;flex-direction:column;overflow:hidden}.studio-block .studio_content-block[data-v-81fb3266]{width:100%;margin-top:82px;height:660px;display:flex;justify-content:space-between}.studio-block .studio_content-block .studio_img-wrap[data-v-81fb3266],.studio-block .studio_content-block .studio_text-block__wrap[data-v-81fb3266]{display:flex;width:calc(50% - var(--main-very-mini-margin)/2)}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block[data-v-81fb3266]{max-width:375px;margin-right:var(--main-mini-margin);display:flex;flex-direction:column}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio__text_p[data-v-81fb3266]{margin-top:35px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-81fb3266]{width:123px;height:40px;margin-top:60px}.studio-block .studio_content-block .studio_text-block__wrap .studio-people_text-block[data-v-81fb3266]{width:unset;margin-right:var(--main-mini-margin)}@media screen and (max-width:1280px){.studio-block .studio_content-block[data-v-81fb3266]{height:580px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block[data-v-81fb3266]{max-width:unset}}@media screen and (max-width:1024px){.studio-block .studio_content-block[data-v-81fb3266]{height:unset}.studio-block .studio_content-block .studio_img-wrap[data-v-81fb3266]{height:470px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio__text_p[data-v-81fb3266]{margin-top:40px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-81fb3266]{width:103px;height:33px;margin-top:80px}}@media screen and (max-width:768px){.studio-block .studio_content-block[data-v-81fb3266]{margin-top:80px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-81fb3266]{margin-top:40px}}@media screen and (max-width:428px){.studio-block .studio_content-block[data-v-81fb3266]{margin-top:80px;flex-direction:column}.studio-block .studio_content-block .studio_text-block__wrap[data-v-81fb3266]{order:1;width:unset;margin-left:var(--main-big-margin);margin-right:var(--main-mini-margin)}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio__text_p[data-v-81fb3266],.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-81fb3266]{margin-top:30px}.studio-block .studio_content-block .studio_img-wrap[data-v-81fb3266]{margin-top:87px;width:unset;order:2}}",""]),t.exports=e},251:function(t,e,o){"use strict";var n=o(2),r=o(252);n({target:"String",proto:!0,forced:o(253)("big")},{big:function(){return r(this,"big","","")}})},252:function(t,e,o){var n=o(18),r=/"/g;t.exports=function(t,e,o,c){var l=String(n(t)),d="<"+e;return""!==o&&(d+=" "+o+'="'+String(c).replace(r,"&quot;")+'"'),d+">"+l+"</"+e+">"}},253:function(t,e,o){var n=o(5);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},254:function(t,e,o){t.exports=o.p+"img/content1.2cd48c1.jpg"},255:function(t,e,o){t.exports=o.p+"img/content2.e4d2ec0.jpg"},256:function(t,e,o){t.exports=o.p+"img/content3.9aad1b9.jpg"},257:function(t,e,o){t.exports=o.p+"img/content4.6a21be5.jpg"},258:function(t,e,o){"use strict";o(243)},259:function(t,e,o){(e=o(10)(!1)).push([t.i,".projects-block[data-v-43f4c7da]{width:100%;display:flex;flex-direction:column;margin-bottom:210px}.projects-block .description[data-v-43f4c7da]{display:flex;flex-direction:column;margin-right:var(--main-mini-margin)}.projects-block .description .description-title[data-v-43f4c7da]{margin-top:83px;margin-bottom:35px}.projects-block .description .description-title br[data-v-43f4c7da]{display:none}@media(max-width:1440px){.projects-block .description .description-title br[data-v-43f4c7da]{display:block}}.projects-block .description .content-p[data-v-43f4c7da]{white-space:pre-line}.projects-block .content-block[data-v-43f4c7da]{margin-top:82px;margin-bottom:50px;display:flex;justify-content:space-between;flex-wrap:wrap}.projects-block .content-block .content-img-wrap[data-v-43f4c7da]{position:relative;width:calc(50% - var(--main-very-mini-margin)/2);height:840px;margin-bottom:var(--main-very-mini-margin);display:flex}.projects-block .content-block .content-img-wrap .item-project-title[data-v-43f4c7da]{position:absolute;bottom:60px;left:60px;align-self:flex-end;cursor:pointer}.projects-block .content-block .content-img-wrap-big[data-v-43f4c7da]{width:100%;margin-bottom:100px;margin-top:40px}.projects-block .content-block-project-page-margin-top[data-v-43f4c7da]{margin-top:42px}.projects-block .content-block-project-page-margin-bottom[data-v-43f4c7da]{margin-bottom:2px}.projects-block .project_btn_wrap[data-v-43f4c7da]{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin-right:var(--main-big-margin);align-self:flex-end}.projects-block_projects-page[data-v-43f4c7da]{margin-bottom:100px}@media screen and (max-width:1280px){.projects-block .description .description-title[data-v-43f4c7da]{flex-direction:column;margin-bottom:19px;white-space:unset}.projects-block .content-block[data-v-43f4c7da]{margin-bottom:0}.projects-block .content-block .content-img-wrap[data-v-43f4c7da]{height:620px}.projects-block .content-block .content-img-wrap-big[data-v-43f4c7da]{width:100%;margin-bottom:100px;margin-top:60px}.content-block-project-page-margin-top[data-v-43f4c7da]{margin-top:40px!important}.projects-block_projects-page[data-v-43f4c7da]{margin-bottom:60px}}@media screen and (max-width:1024px){.projects-block[data-v-43f4c7da]{margin-bottom:111px}.projects-block .description .description-title[data-v-43f4c7da]{margin-bottom:40px}.projects-block .content-block[data-v-43f4c7da]{margin-top:57px}.projects-block .content-block .content-img-wrap[data-v-43f4c7da]{height:560px}.projects-block .content-block .content-img-wrap-big[data-v-43f4c7da]{width:100%;margin-bottom:100px;margin-top:60px;height:526px}.projects-block .content-block-project-page-margin-top[data-v-43f4c7da]{margin-top:40px!important}}@media screen and (max-width:768px){.projects-block[data-v-43f4c7da]{margin-bottom:84px}.projects-block .description .description-title[data-v-43f4c7da]{margin-top:50px}.projects-block .content-block[data-v-43f4c7da]{margin-top:124px}.projects-block .content-block .content-img-wrap[data-v-43f4c7da]{height:440px}.projects-block .content-block .content-img-wrap .item-project-title[data-v-43f4c7da]{bottom:30px;left:48px}.projects-block .content-block .content-img-wrap-big[data-v-43f4c7da]{width:100%;margin-bottom:50px;margin-top:50px}.projects-block .content-block-project-page-margin-top[data-v-43f4c7da]{margin-top:0!important}}@media screen and (max-width:428px){.projects-block[data-v-43f4c7da]{margin-bottom:131px}.projects-block .description .description-title[data-v-43f4c7da]{margin-top:82px;margin-bottom:30px}.projects-block .content-block[data-v-43f4c7da]{margin-top:30px!important;margin-left:0;margin-right:0}.projects-block .content-block .content-img-wrap[data-v-43f4c7da]{width:100%;margin-bottom:50px;height:470px}.projects-block .content-block .content-img-wrap .item-project-title[data-v-43f4c7da]{bottom:60px;left:60px}.projects-block .content-block .content-img-wrap-big[data-v-43f4c7da]{width:100%;margin-bottom:50px;margin-top:0}.projects-block .project_btn_wrap[data-v-43f4c7da]{align-self:flex-start;margin-right:0;margin-left:var(--main-big-margin)}}",""]),t.exports=e},277:function(t,e,o){var content=o(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("24b44c34",content,!0,{sourceMap:!1})},278:function(t,e,o){var content=o(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("fa38f568",content,!0,{sourceMap:!1})},279:function(t,e,o){var content=o(342);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("28f1127f",content,!0,{sourceMap:!1})},280:function(t,e,o){"use strict";o.r(e);o(51);var n=o(12),r=o(7);o(157),o(334);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"start-span-item",components:{Content_btn:o(236).default},props:{text:String,startTransformScroll:Number,finishTransformScroll:Number,startOpacityZero:Boolean,textStyleClass:{validator:function(t){return-1!==["start-text","start-text","small-text"].indexOf(t)}},buttonActive:Boolean},computed:l(l({},Object(r.c)("app",["APP_SCROLL_VALUE","APP_WINDOW_SIZE"])),{},{spanTranslate:function(){var t=this.startTransformScroll,e=this.finishTransformScroll;return this.APP_SCROLL_VALUE>t?this.APP_SCROLL_VALUE>e?0:100-(this.APP_SCROLL_VALUE-t)/((e-t)/100):100},spanOpacity:function(){return this.startOpacityZero?1-this.spanTranslate/100:0+this.spanTranslate/100}})},m=(o(337),o(9));function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"Title_imgs",data:function(){return{TitleImg_1:"/images/Home/Title-imgs/title-img-1.jpg",TitleImg_2:"/images/Home/Title-imgs/title-img-2.jpg",TitleImg_3:"/images/Home/Title-imgs/title-img-3.jpg",TitleImg_4:"/images/Home/Title-imgs/title-img-4.jpg",startSpanWithLogoWrapHeight:0,trGroup:!1}},components:{start_span_item:Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"start-span-block"},[t.buttonActive?t._e():o("span",{class:"main-page_"+t.textStyleClass,style:"transform: translateY("+this.spanTranslate+"%); opacity: "+this.spanOpacity+";"},[t._v(t._s(t.text))]),t._v(" "),t.buttonActive?o("div",{staticClass:"btn-wrap",style:"transform: translateY("+this.spanTranslate+"%); opacity: "+this.spanOpacity+";"},[o("span",{staticClass:"main-page_small-text"},[t._v(t._s(t.text))])]):t._e()])}),[],!1,null,"d1194ba8",null).exports},computed:f(f({},Object(r.c)("app",["APP_SCROLL_VALUE","APP_WINDOW_SIZE","LOGO_START_HEIGHT"])),{},{imgScale_1:function(){return this.APP_SCROLL_VALUE>1e3?1+(this.APP_SCROLL_VALUE-1e3)/(this.APP_WINDOW_SIZE.height/100)*.002:1},imgScale_2:function(){var t=this.APP_WINDOW_SIZE.height+2e3;return this.APP_SCROLL_VALUE>t?1+(this.APP_SCROLL_VALUE-t)/(this.APP_WINDOW_SIZE.height/100)*.002:1},imgScale_3:function(){var t=2*this.APP_WINDOW_SIZE.height+3e3;return this.APP_SCROLL_VALUE>t?1+(this.APP_SCROLL_VALUE-t)/(this.APP_WINDOW_SIZE.height/100)*.002:1},imgScale_4:function(){var t=3*this.APP_WINDOW_SIZE.height+4e3;return this.APP_SCROLL_VALUE>t?1+(this.APP_SCROLL_VALUE-t)/(this.APP_WINDOW_SIZE.height/100)*.002:1}}),mounted:function(){this.setStartSpanWithLogoWrapHeight();var t=this;setInterval((function(){t.trGroup=!t.trGroup}),3e3)},methods:{setStartSpanWithLogoWrapHeight:function(){var t=this.$refs.startSpanWithLogoWrap.clientHeight;this.startSpanWithLogoWrapHeight=t}}},x=(o(339),Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-page_title-imgs__container"},[o("div",{staticClass:"block-wrap",style:"opacity: "+(t.APP_SCROLL_VALUE>3*t.APP_WINDOW_SIZE.height?0:1)},[o("div",{class:"block block-fixed"},[o("div",{ref:"startSpanWithLogoWrap",staticClass:"start-span_with-logo_wrap",style:"top: calc(("+(t.APP_WINDOW_SIZE.width>1024?93:95)+"% / 2) + "+(t.LOGO_START_HEIGHT/2-t.startSpanWithLogoWrapHeight/2)+"px);"},[o("transition-group",{staticClass:"translateY-group",attrs:{tag:"div",name:"translateY-opacity"}},[t.trGroup?o("start_span_item",{key:"1",attrs:{text:"architecture",textStyleClass:"start-text"}}):t._e(),t._v(" "),t.trGroup?t._e():o("start_span_item",{key:"2",attrs:{text:"interior",textStyleClass:"start-text"}})],1)],1),t._v(" "),o("img",{staticClass:"title-imgs_img",style:"transform: scale("+this.imgScale_1+")",attrs:{src:t.TitleImg_1}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.APP_WINDOW_SIZE.width>1024,expression:"APP_WINDOW_SIZE.width > 1024"}],staticClass:"block-wrap"},[o("div",{class:["block",{"block-fixed":this.APP_SCROLL_VALUE>this.APP_WINDOW_SIZE.height+2e3-100}]},[o("div",{staticClass:"start-span_with-logo_wrap start-span_wrap"},[o("start_span_item",{attrs:{text:"We are up.",startTransformScroll:Number(this.APP_WINDOW_SIZE.height+1e3+200),finishTransformScroll:Number(this.APP_WINDOW_SIZE.height+1e3+400),startOpacityZero:!0,textStyleClass:"start-text"}}),t._v(" "),o("start_span_item",{attrs:{text:"We create architecture",startTransformScroll:Number(this.APP_WINDOW_SIZE.height+1e3+400),finishTransformScroll:Number(this.APP_WINDOW_SIZE.height+1e3+600),startOpacityZero:!0,textStyleClass:"start-text"}}),t._v(" "),o("start_span_item",{attrs:{text:"and interiors",startTransformScroll:Number(this.APP_WINDOW_SIZE.height+1e3+600),finishTransformScroll:Number(this.APP_WINDOW_SIZE.height+1e3+800),startOpacityZero:!0,textStyleClass:"start-text"}}),t._v(" "),o("nuxt-link",{attrs:{to:"/Project"}},[o("start_span_item",{attrs:{text:"explore our projects ",startTransformScroll:Number(this.APP_WINDOW_SIZE.height+1e3+800),finishTransformScroll:Number(this.APP_WINDOW_SIZE.height+1e3+1e3),startOpacityZero:!0,"button-active":!0,textStyleClass:"small-text"}})],1)],1),t._v(" "),o("img",{staticClass:"title-imgs_img",style:"transform: scale("+this.imgScale_2+")",attrs:{src:t.TitleImg_2}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.APP_WINDOW_SIZE.width>1024,expression:"APP_WINDOW_SIZE.width > 1024"}],staticClass:"block-wrap"},[o("div",{class:["block",{"block-fixed":this.APP_SCROLL_VALUE>2*this.APP_WINDOW_SIZE.height+3e3-100}]},[o("div",{staticClass:"start-span_with-logo_wrap start-span_wrap"},[o("start_span_item",{attrs:{text:"We are uptimists.",startTransformScroll:Number(2*this.APP_WINDOW_SIZE.height+2e3+1e3/6),finishTransformScroll:Number(2*this.APP_WINDOW_SIZE.height+2e3+1e3/6*2),startOpacityZero:!0,textStyleClass:"start-text"}}),t._v(" "),o("start_span_item",{attrs:{text:"We create a positive",startTransformScroll:Number(2*this.APP_WINDOW_SIZE.height+2e3+1e3/6*2),finishTransformScroll:Number(2*this.APP_WINDOW_SIZE.height+2e3+500),startOpacityZero:!0,textStyleClass:"start-text"}}),t._v(" "),o("start_span_item",{attrs:{text:"design process,",startTransformScroll:Number(2*this.APP_WINDOW_SIZE.height+2e3+500),finishTransformScroll:Number(2*this.APP_WINDOW_SIZE.height+2e3+1e3/6*4),startOpacityZero:!0,textStyleClass:"start-text"}}),t._v(" "),o("start_span_item",{attrs:{text:"building is fun",startTransformScroll:Number(2*this.APP_WINDOW_SIZE.height+2e3+1e3/6*4),finishTransformScroll:Number(2*this.APP_WINDOW_SIZE.height+2e3+1e3/6*5),startOpacityZero:!0,textStyleClass:"start-text"}}),t._v(" "),o("nuxt-link",{attrs:{to:"/People"}},[o("start_span_item",{attrs:{text:"meet up",startTransformScroll:Number(2*this.APP_WINDOW_SIZE.height+2e3+1e3/6*5),finishTransformScroll:Number(2*this.APP_WINDOW_SIZE.height+2e3+1e3),startOpacityZero:!0,"button-active":!0,textStyleClass:"small-text"}})],1)],1),t._v(" "),o("img",{staticClass:"title-imgs_img",style:"transform: scale("+this.imgScale_3+")",attrs:{src:t.TitleImg_3}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.APP_WINDOW_SIZE.width>1024,expression:"APP_WINDOW_SIZE.width > 1024"}],staticClass:"block-wrap"},[o("div",{class:["block"]},[o("div",{staticClass:"start-span_with-logo_wrap start-span_wrap"},[o("start_span_item",{attrs:{text:"We see unlimited posibilities",startTransformScroll:Number(3*this.APP_WINDOW_SIZE.height+3e3+200),finishTransformScroll:Number(3*this.APP_WINDOW_SIZE.height+3e3+400),startOpacityZero:!0,textStyleClass:"start-text"}}),t._v(" "),o("start_span_item",{attrs:{text:"We work with an open mind",startTransformScroll:Number(3*this.APP_WINDOW_SIZE.height+3e3+400),finishTransformScroll:Number(3*this.APP_WINDOW_SIZE.height+3e3+600),startOpacityZero:!0,textStyleClass:"start-text"}}),t._v(" "),o("start_span_item",{attrs:{text:"Everything is possible ",startTransformScroll:Number(3*this.APP_WINDOW_SIZE.height+3e3+600),finishTransformScroll:Number(3*this.APP_WINDOW_SIZE.height+3e3+800),startOpacityZero:!0,textStyleClass:"start-text"}}),t._v(" "),o("nuxt-link",{attrs:{to:"/Process"}},[o("start_span_item",{attrs:{text:"learn more about our process",startTransformScroll:Number(3*this.APP_WINDOW_SIZE.height+3e3+800),finishTransformScroll:Number(3*this.APP_WINDOW_SIZE.height+3e3+1e3),startOpacityZero:!0,"button-active":!0,textStyleClass:"small-text"}})],1)],1),t._v(" "),o("img",{staticClass:"title-imgs_img",style:"transform: scale("+this.imgScale_4+")",attrs:{src:t.TitleImg_4}})])])])}),[],!1,null,"44effa6d",null));e.default=x.exports},334:function(t,e,o){"use strict";var n=o(16),r=o(4),c=o(69),l=o(19),d=o(17),m=o(32),_=o(158),f=o(68),h=o(5),x=o(70),v=o(108).f,k=o(38).f,w=o(22).f,P=o(335).trim,S=r.Number,j=S.prototype,I="Number"==m(x(j)),O=function(t){var e,o,n,r,c,l,d,code,m=f(t,!1);if("string"==typeof m&&m.length>2)if(43===(e=(m=P(m)).charCodeAt(0))||45===e){if(88===(o=m.charCodeAt(2))||120===o)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+m}for(l=(c=m.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>r)return NaN;return parseInt(c,n)}return+m};if(c("Number",!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var y,W=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof W&&(I?h((function(){j.valueOf.call(o)})):"Number"!=m(o))?_(new S(O(e)),o,W):O(e)},N=n?v(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;N.length>A;A++)d(S,y=N[A])&&!d(W,y)&&w(W,y,k(S,y));W.prototype=j,j.constructor=W,l(r,"Number",W)}},335:function(t,e,o){var n=o(18),r="["+o(336)+"]",c=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),d=function(t){return function(e){var o=String(n(e));return 1&t&&(o=o.replace(c,"")),2&t&&(o=o.replace(l,"")),o}};t.exports={start:d(1),end:d(2),trim:d(3)}},336:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},337:function(t,e,o){"use strict";o(277)},338:function(t,e,o){(e=o(10)(!1)).push([t.i,'.start-span-block[data-v-d1194ba8]{width:100%;display:flex}.start-span-block .btn-wrap[data-v-d1194ba8]{margin-top:15px}.start-span-block .btn-wrap[data-v-d1194ba8]:after{content:"";position:absolute;top:calc(100% + 5px);left:0;width:0;height:4px;background-color:#fff;transition:width .3s}.start-span-block .btn-wrap[data-v-d1194ba8]:hover:after{width:100%}.start-span-block .btn-wrap .content-btn-text[data-v-d1194ba8]{color:#fff}@media screen and (max-width:1280px){.start-span-block[data-v-d1194ba8]{min-height:52px}}@media screen and (max-width:400px){.start-span-block[data-v-d1194ba8]{margin-right:var(--main-mini-margin)}}',""]),t.exports=e},339:function(t,e,o){"use strict";o(278)},340:function(t,e,o){(e=o(10)(!1)).push([t.i,".main-page_title-imgs__container[data-v-44effa6d]{position:relative;display:flex;flex-direction:column;z-index:500}.main-page_title-imgs__container .block-wrap[data-v-44effa6d]{position:relative;height:calc(var(--winHeight) + 1000px);transition:height .3s}.main-page_title-imgs__container .block-wrap .block[data-v-44effa6d]{top:0;left:0;width:100%;height:var(--winHeight);overflow:hidden;display:flex;align-items:center;position:-webkit-sticky;position:sticky;transition:height .3s}.main-page_title-imgs__container .block-wrap .block .title-imgs_img[data-v-44effa6d]{position:absolute;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-44effa6d]{position:absolute;left:120px;display:flex;flex-direction:column;z-index:10}.main-page_title-imgs__container .block-wrap .block .start-span_wrap[data-v-44effa6d]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.main-page_title-imgs__container .block-wrap .block-fixed[data-v-44effa6d]{position:fixed}@media screen and (max-width:1024px){.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-44effa6d]{left:110px}}@media screen and (max-width:768px){.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-44effa6d]{left:88px}}@media screen and (max-width:428px){.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-44effa6d]{left:72px}}.translateY-opacity-enter-active[data-v-44effa6d],.translateY-opacity-leave-active[data-v-44effa6d]{transition:all 1s}.translateY-opacity-enter[data-v-44effa6d],.translateY-opacity-leave-to[data-v-44effa6d]{opacity:0;position:absolute}.translateY-opacity-leave-to[data-v-44effa6d]{transform:translateY(-70px)}.translateY-opacity-enter[data-v-44effa6d]{transform:translateY(70px)}",""]),t.exports=e},341:function(t,e,o){"use strict";o(279)},342:function(t,e,o){(e=o(10)(!1)).push([t.i,".app{position:relative;width:100%;height:100%}.app .main-page,.app .main-page .main-page_content-wrap{width:100%;display:flex;flex-direction:column}.app .main-page .main-page_content-wrap{background-color:#fff;align-items:center;z-index:800;overflow:hidden}.app .main-page .main-page_content-wrap .main-page_content{width:100%;display:flex;flex-direction:column;background-color:#fff}",""]),t.exports=e},348:function(t,e,o){"use strict";o.r(e);var n=o(280),r=o(244),c=o(245),l=o(237),d={name:"App",components:{Title_imgs:n.default,Studio:r.default,Projects:c.default,News:l.default}},m=(o(341),o(9)),component=Object(m.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("div",{staticClass:"main-page"},[e("Title_imgs"),this._v(" "),e("div",{staticClass:"main-page_content-wrap"},[e("div",{staticClass:"main-page_content"},[e("Studio"),this._v(" "),e("Projects"),this._v(" "),e("News")],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title_imgs:o(280).default,Studio:o(244).default,Projects:o(245).default,News:o(237).default})}}]);