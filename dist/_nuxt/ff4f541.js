(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{232:function(t,e,n){"use strict";n.r(e);var o=n(12),r=n(7);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Image_Scale_Block",props:{img:String,appointment:{validator:function(t){return["project","news","people","process","spinner"]}}},data:function(){return{scaleStartScroll:0,scaleStartScrollActive:!1}},computed:c(c({},Object(r.c)("app",["APP_SCROLL_VALUE","APP_WINDOW_SIZE"])),{},{imgScale:function(){var t=this.scaleStartScroll;return this.APP_SCROLL_VALUE>t&&this.scaleStartScrollActive?this.APP_SCROLL_VALUE>t+this.APP_WINDOW_SIZE.height+this.$refs.imageScaleElement.offsetHeight?1.2:1+(this.APP_SCROLL_VALUE-t)/((this.APP_WINDOW_SIZE.height+this.$refs.imageScaleElement.offsetHeight)/100)*.002:1},imageScaleImgClasses:function(){return["image-scale-img",{"image-scale-img-width-hover":"project"===this.appointment||"news"===this.appointment||"people"===this.appointment||"process"===this.appointment},{"image-scale-img-width-hover-no-cursor":"news"===this.appointment}]}})},m=(n(243),n(9)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"imageScaleElement",staticClass:"image-scale-block_wrap"},[n("client-only",[n("intersect",{on:{"~enter":function(e){t.scaleStartScroll=t.APP_SCROLL_VALUE,t.scaleStartScrollActive=!0}}},[n("div",{class:t.imageScaleImgClasses,style:"transform: scale("+this.imgScale+"); background: url("+t.img+"); background-size: cover; background-repeat: no-repeat"})])],1)],1)}),[],!1,null,"e3677b66",null);e.default=component.exports},234:function(t,e,n){"use strict";n.r(e);n(68);var o=n(12),r=n(7),l=n(287),c=n(296),d=n.n(c),m=n(297),f=n.n(m),h=n(298),w=n.n(h),C=n(299),v=n.n(C),_=n(300),x=n.n(_),y=n(301),k=n.n(y),O=n(302),S=n.n(O),L=n(303),P=n.n(L);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A={name:"News",components:{Gallery:l.default},data:function(){return{galleryData:[{img:d.a,title:"We work with an open mind",date:"11.04.2020"},{img:f.a,title:"We work with an open mind",date:"11.04.2020"},{img:w.a,title:"We work with an open mind",date:"11.04.2020"},{img:v.a,title:"We work with an open mind",date:"11.04.2020"},{img:x.a,title:"We work with an open mind",date:"11.04.2020"},{img:k.a,title:"We work with an open mind",date:"11.04.2020"},{img:S.a,title:"We work with an open mind",date:"11.04.2020"},{img:P.a,title:"We work with an open mind",date:"11.04.2020"}]}},computed:E(E({},Object(r.c)("app",["GALLERY_CURSOR_ACTIVE","WINDOW_CURSOR"])),{},{cursorCircle:function(){return"transform: translateX(".concat(this.WINDOW_CURSOR.x,"px) translateY(").concat(this.WINDOW_CURSOR.y,"px);")}}),methods:E({},Object(r.b)("app",["setGalleryCursorActive"]))},H=(n(304),n(9)),component=Object(H.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["news-block",{"people__news-block":"/People"===this.$route.path}],on:{mouseover:function(e){return t.setGalleryCursorActive(!0)},mouseout:function(e){return t.setGalleryCursorActive(!1)}}},[t.GALLERY_CURSOR_ACTIVE?n("div",{staticClass:"custom-cursor",style:t.cursorCircle},[n("svg",{attrs:{viewBox:"0 0 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("rect",{attrs:{width:"200",height:"200",rx:"100",fill:"black"}}),t._v(" "),n("path",{attrs:{d:"M180.707 102.707C181.098 102.317 181.098 101.683 180.707 101.293L174.343 94.9289C173.953 94.5384 173.319 94.5384 172.929 94.9289C172.538 95.3195 172.538 95.9526 172.929 96.3431L178.586 102L172.929 107.657C172.538 108.047 172.538 108.681 172.929 109.071C173.319 109.462 173.953 109.462 174.343 109.071L180.707 102.707ZM160 103L180 103L180 101L160 101L160 103Z",fill:"#E5E5E5"}}),t._v(" "),n("path",{attrs:{d:"M19.2929 101.293C18.9024 101.683 18.9024 102.317 19.2929 102.707L25.6569 109.071C26.0474 109.462 26.6805 109.462 27.0711 109.071C27.4616 108.681 27.4616 108.047 27.0711 107.657L21.4142 102L27.0711 96.3431C27.4616 95.9526 27.4616 95.3195 27.0711 94.9289C26.6805 94.5384 26.0474 94.5384 25.6569 94.9289L19.2929 101.293ZM40 101L20 101L20 103L40 103L40 101Z",fill:"#E5E5E5"}}),t._v(" "),n("path",{attrs:{d:"M61.6777 110C61.5177 110 61.3817 109.944 61.2697 109.832C61.1577 109.72 61.1017 109.584 61.1017 109.424V93.8C61.1017 93.624 61.1497 93.48 61.2457 93.368C61.3577 93.256 61.5017 93.2 61.6777 93.2H67.5337C72.2377 93.2 74.6377 95.376 74.7337 99.728C74.7657 100.656 74.7817 101.28 74.7817 101.6C74.7817 101.904 74.7657 102.52 74.7337 103.448C74.6697 105.688 74.0697 107.344 72.9337 108.416C71.7977 109.472 70.0377 110 67.6537 110H61.6777ZM67.5337 107.24C68.8777 107.24 69.8457 106.944 70.4377 106.352C71.0297 105.744 71.3417 104.752 71.3737 103.376C71.4057 102.416 71.4217 101.816 71.4217 101.576C71.4217 101.32 71.4057 100.728 71.3737 99.8C71.3417 98.488 71.0057 97.52 70.3657 96.896C69.7417 96.272 68.7577 95.96 67.4137 95.96H64.4377V107.24H67.5337ZM83.3527 110C83.1927 110 83.0567 109.944 82.9447 109.832C82.8327 109.72 82.7767 109.584 82.7767 109.424V93.8C82.7767 93.624 82.8247 93.48 82.9207 93.368C83.0327 93.256 83.1767 93.2 83.3527 93.2H89.5687C91.5207 93.2 93.0487 93.656 94.1527 94.568C95.2727 95.48 95.8327 96.776 95.8327 98.456C95.8327 99.624 95.5447 100.608 94.9687 101.408C94.4087 102.192 93.6247 102.76 92.6167 103.112L96.1207 109.232C96.1687 109.328 96.1927 109.416 96.1927 109.496C96.1927 109.64 96.1367 109.76 96.0247 109.856C95.9287 109.952 95.8167 110 95.6887 110H93.5047C93.2487 110 93.0487 109.944 92.9047 109.832C92.7767 109.72 92.6567 109.56 92.5447 109.352L89.4487 103.664H86.1127V109.424C86.1127 109.584 86.0567 109.72 85.9447 109.832C85.8487 109.944 85.7127 110 85.5367 110H83.3527ZM89.4967 100.952C90.4567 100.952 91.1767 100.736 91.6567 100.304C92.1527 99.872 92.4007 99.248 92.4007 98.432C92.4007 97.616 92.1527 96.984 91.6567 96.536C91.1767 96.088 90.4567 95.864 89.4967 95.864H86.1127V100.952H89.4967ZM102.693 110C102.565 110 102.445 109.952 102.333 109.856C102.237 109.76 102.189 109.64 102.189 109.496L102.237 109.28L108.021 93.8C108.133 93.4 108.413 93.2 108.861 93.2H111.477C111.893 93.2 112.173 93.4 112.317 93.8L118.101 109.28C118.117 109.328 118.125 109.4 118.125 109.496C118.125 109.64 118.077 109.76 117.981 109.856C117.885 109.952 117.773 110 117.645 110H115.557C115.349 110 115.189 109.952 115.077 109.856C114.965 109.76 114.893 109.656 114.861 109.544L113.733 106.616H106.605L105.477 109.544C105.349 109.848 105.117 110 104.781 110H102.693ZM112.893 103.856L110.157 96.44L107.445 103.856H112.893ZM131.366 110.24C129.174 110.24 127.462 109.672 126.23 108.536C125.014 107.4 124.366 105.816 124.286 103.784C124.27 103.32 124.262 102.576 124.262 101.552C124.262 100.528 124.27 99.784 124.286 99.32C124.366 97.336 125.022 95.784 126.254 94.664C127.502 93.528 129.206 92.96 131.366 92.96C132.838 92.96 134.102 93.208 135.158 93.704C136.214 94.2 137.014 94.824 137.558 95.576C138.102 96.312 138.39 97.04 138.422 97.76V97.808C138.422 97.936 138.374 98.048 138.278 98.144C138.182 98.224 138.062 98.264 137.918 98.264H135.446C135.286 98.264 135.166 98.24 135.086 98.192C135.006 98.128 134.934 98.024 134.87 97.88C134.646 97.288 134.254 96.784 133.694 96.368C133.134 95.936 132.358 95.72 131.366 95.72C130.246 95.72 129.366 96.024 128.726 96.632C128.102 97.24 127.766 98.176 127.718 99.44C127.702 99.904 127.694 100.608 127.694 101.552C127.694 102.48 127.702 103.184 127.718 103.664C127.814 106.208 129.046 107.48 131.414 107.48C132.55 107.48 133.462 107.176 134.15 106.568C134.838 105.944 135.182 105.024 135.182 103.808V103.064H132.254C132.078 103.064 131.934 103.008 131.822 102.896C131.726 102.784 131.678 102.64 131.678 102.464V101.192C131.678 101.016 131.726 100.872 131.822 100.76C131.934 100.648 132.078 100.592 132.254 100.592H137.99C138.166 100.592 138.302 100.648 138.398 100.76C138.51 100.872 138.566 101.016 138.566 101.192V103.712C138.566 105.04 138.27 106.2 137.678 107.192C137.102 108.168 136.27 108.92 135.182 109.448C134.094 109.976 132.822 110.24 131.366 110.24Z",fill:"#E5E5E5"}})])]):t._e(),t._v(" "),n("span",{staticClass:"main-page__content-title-position block-title title"},[t._v("news")]),t._v(" "),"/People"===this.$route.path?n("div",{staticClass:"content-title"},[t._v("Publications")]):t._e(),t._v(" "),n("Gallery",{attrs:{data:t.galleryData}})],1)}),[],!1,null,"02245854",null);e.default=component.exports;installComponents(component,{Gallery:n(287).default})},236:function(t,e,n){var content=n(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("726251bc",content,!0,{sourceMap:!1})},243:function(t,e,n){"use strict";n(236)},244:function(t,e,n){(e=n(10)(!1)).push([t.i,".image-scale-block_wrap[data-v-e3677b66]{position:relative;width:100%;height:100%;overflow:hidden}.image-scale-block_wrap .image-scale-img[data-v-e3677b66]{position:absolute;top:0;left:0;width:100%;height:100%;transition:transform 1s}.image-scale-block_wrap .image-scale-img-width-hover[data-v-e3677b66]:hover{transform:scale(1.4)!important;cursor:pointer}.image-scale-block_wrap .image-scale-img-width-hover-no-cursor[data-v-e3677b66]:hover{cursor:none}",""]),t.exports=e},258:function(t,e,n){var content=n(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("36993734",content,!0,{sourceMap:!1})},259:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("0863c880",content,!0,{sourceMap:!1})},260:function(t,e,n){var content=n(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("da2f2eac",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";n.r(e);var o={name:"Gallery",props:["data"],data:function(){return{slickOptions:{slidesToShow:4.8,pauseOnHover:!1,swipeToSlide:!0,arrows:!1,autoplay:!1,autoplaySpeed:2e3,speed:500,infinite:!0,responsive:[{breakpoint:1810,settings:{slidesToShow:4}},{breakpoint:1470,settings:{slidesToShow:3.5}},{breakpoint:1285,settings:{slidesToShow:3.2}},{breakpoint:1280,settings:{slidesToShow:3.5}},{breakpoint:1070,settings:{slidesToShow:3}},{breakpoint:1024,settings:{slidesToShow:3.2}},{breakpoint:940,settings:{slidesToShow:2.4}},{breakpoint:750,settings:{slidesToShow:2.2}},{breakpoint:650,settings:{slidesToShow:1.8}},{breakpoint:550,settings:{slidesToShow:1.5}},{breakpoint:428,settings:{slidesToShow:1.3}},{breakpoint:400,settings:{slidesToShow:1.1}}]}}},components:{Gallery_item:n(289).default}},r=(n(294),n(9)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"carousel-wrapper",attrs:{id:"spinnerBlock"}},[e("client-only",[e("VueSlickCarousel",this._b({},"VueSlickCarousel",this.slickOptions,!1),this._l(this.data,(function(t,n){return e("div",{key:n,staticClass:"img-wrapper"},[e("Gallery_item",{attrs:{imgProps:t.img,titleProps:t.title,dateProps:t.date}})],1)})),0)],1)],1)}),[],!1,null,"64a0714e",null);e.default=component.exports;installComponents(component,{Gallery_item:n(289).default})},289:function(t,e,n){"use strict";n.r(e);var o={name:"Gallery_item",components:{Image_Scale_Block:n(232).default},props:["imgProps","titleProps","dateProps"]},r=(n(292),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:"/Item_News"}},[n("div",{staticClass:"gallery-item"},[n("div",{staticClass:"gallery-item-img-wrap"},[n("Image_Scale_Block",{attrs:{img:t.imgProps,appointment:"news"}})],1),t._v(" "),n("span",{staticClass:"date-text"},[t._v(t._s(t.dateProps))]),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(t.titleProps))]),t._v(" "),n("div",{staticClass:"teg-container"},[n("span",{staticClass:"text-very-small"},[t._v("Office")]),t._v(" "),n("span",{staticClass:"text-very-small"},[t._v("Healthcare")]),t._v(" "),n("span",{staticClass:"text-very-small"},[t._v("Laboratory")]),t._v(" "),n("span",{staticClass:"text-very-small"},[t._v("Atrium")])])])])}),[],!1,null,"2fddb60e",null);e.default=component.exports;installComponents(component,{Image_Scale_Block:n(232).default})},292:function(t,e,n){"use strict";n(258)},293:function(t,e,n){(e=n(10)(!1)).push([t.i,".gallery-item[data-v-2fddb60e]{position:relative;width:375px;height:440px;display:flex;flex-direction:column;cursor:none}.gallery-item .gallery-item-img-wrap[data-v-2fddb60e]{width:100%;height:340px}.gallery-item .title[data-v-2fddb60e]{font-family:Garamond;font-style:normal;font-weight:700;font-size:24px;line-height:141%;letter-spacing:-.04em;color:#000;margin-top:14px;cursor:none}.gallery-item .teg-container[data-v-2fddb60e]{max-width:280px;display:flex;margin-top:2px;justify-content:space-between;cursor:none}.gallery-item .teg-container .text-very-small[data-v-2fddb60e]{cursor:none}.classNoMargin[data-v-2fddb60e]{margin-right:0}@media screen and (max-width:1280px){.gallery-item[data-v-2fddb60e]{width:300px;height:340px}.gallery-item .gallery-item-img-wrap[data-v-2fddb60e]{height:240px}}@media screen and (max-width:1024px){.gallery-item[data-v-2fddb60e]{width:290px;height:330px}.gallery-item .gallery-item-img-wrap[data-v-2fddb60e]{height:230px}}",""]),t.exports=e},294:function(t,e,n){"use strict";n(259)},295:function(t,e,n){(e=n(10)(!1)).push([t.i,".carousel-wrapper[data-v-64a0714e]{width:100%;overflow:hidden;cursor:none}.img-wrapper[data-v-64a0714e]{min-height:300px;outline:0}.img-wrapper img[data-v-64a0714e]{pointer-events:none}",""]),t.exports=e},296:function(t,e,n){t.exports=n.p+"img/News1.eb5b704.jpg"},297:function(t,e,n){t.exports=n.p+"img/News2.b2d8bab.jpg"},298:function(t,e,n){t.exports=n.p+"img/News3.b2ca671.jpg"},299:function(t,e,n){t.exports=n.p+"img/News4.72813a8.jpg"},300:function(t,e,n){t.exports=n.p+"img/News5.b21a91f.jpg"},301:function(t,e,n){t.exports=n.p+"img/News6.8d517fb.jpg"},302:function(t,e,n){t.exports=n.p+"img/News7.b2ca671.jpg"},303:function(t,e,n){t.exports=n.p+"img/News8.a18e009.jpg"},304:function(t,e,n){"use strict";n(260)},305:function(t,e,n){(e=n(10)(!1)).push([t.i,".news-block[data-v-02245854]{display:flex;flex-direction:column;background:#e8e8e8;padding-bottom:103px;cursor:none}.news-block .title[data-v-02245854]{cursor:none}.news-block .custom-cursor[data-v-02245854]{position:absolute;top:0;left:0;width:200px;height:200px;pointer-events:none;z-index:1500;opacity:1}.news-block .custom-cursor svg[data-v-02245854]{position:relative;left:-50%;top:-50%;width:100%;height:100%}.news-block .title[data-v-02245854]{margin-bottom:102px;margin-top:78px}.people__news-block[data-v-02245854]{margin-top:323px;background:#fff}.people__news-block .title[data-v-02245854]{margin-bottom:83px}.people__news-block .content-title[data-v-02245854]{margin-left:var(--main-big-margin);margin-bottom:32px}@media screen and (max-width:1280px){.news-block[data-v-02245854]{padding-bottom:56px}.news-block .title[data-v-02245854]{margin-bottom:52px;margin-top:32px}.people__news-block[data-v-02245854]{margin-top:158px}}@media screen and (max-width:1024px){.news-block[data-v-02245854]{padding-bottom:70px}.news-block .title[data-v-02245854]{margin-bottom:66px;margin-top:18px}.people__news-block[data-v-02245854]{margin-top:90px}}@media screen and (max-width:768px){.people__news-block[data-v-02245854]{margin-top:108px}.people__news-block .content-title[data-v-02245854]{margin-bottom:44px}}@media screen and (max-width:428px){.news-block[data-v-02245854]{padding-bottom:77px}}",""]),t.exports=e}}]);