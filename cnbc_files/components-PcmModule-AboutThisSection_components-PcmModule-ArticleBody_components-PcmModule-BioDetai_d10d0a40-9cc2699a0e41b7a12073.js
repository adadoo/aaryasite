(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{1054:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(9),o=n(1),s=n.n(o),l=function(e){if(!e)return{date:null,time:null};var t=e.split("•");return{date:t[0].trim(),time:t.length>1?t[1].trim():null}},c=function(e){var t=e.datePublishedFormatted,n=e.dateLastPublishedFormatted,o=e.styles,s=e.brand,c=l(t),u=l(n);if(s===i.e){var d=u.date||c.date;return a.a.createElement("div",{className:o.time},d&&a.a.createElement("time",{"data-testid":"single-timestamp"},d))}return a.a.createElement("div",{className:o.time},c.date&&a.a.createElement("time",{"data-testid":"published-timestamp"},c.date,c.time&&a.a.createElement(r.Fragment,null,a.a.createElement("span",{className:o.datetimeDivider}),c.time)),u.date&&a.a.createElement(r.Fragment,null,a.a.createElement("span",{className:o.timestampDivider}),a.a.createElement("time",{"data-testid":"lastpublished-timestamp"},u.date,u.time&&a.a.createElement(r.Fragment,null,a.a.createElement("span",{className:o.datetimeDivider}),u.time))))};c.propTypes={styles:s.a.object,datePublishedFormatted:s.a.string,dateLastPublishedFormatted:s.a.string,brand:s.a.string.isRequired},c.defaultProps={datePublishedFormatted:null,dateLastPublishedFormatted:null,styles:{}};t.a=c},1077:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),i=n(66),o=n(408),s=Object(i.a)({chunkName:function(){return"components-PcmModule-Ads-BoxInline"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(38).then(n.bind(null,813))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 813}});function l(e,t,n){var r=e||{},i=r.brand,l=r.dataId;return a.a.createElement(o.a,{offset:50,key:n},a.a.createElement(s,{dataId:"BoxInline-".concat(l),brand:i}))}},1078:function(e,t,n){"use strict";var r=n(14),a=n.n(r),i=n(0),o=n.n(i),s=n(1),l=n.n(s),c=n(453),u=n(1054),d=n(9),m=n(1308),p=function(e){return Object(c.g)(e)/60>24?Object(c.d)(e):Object(c.c)(e)},f=function(e){var t=e.dateTime,n=e.isUpdatedTime,r=Object(i.useState)(p(t)),s=a()(r,2),l=s[0],f=s[1];return Object(i.useEffect)((function(){if(Object(c.g)(t)<60){var e=setInterval((function(){f(p(t))}),12e4);return function(){return clearInterval(e)}}})),o.a.createElement("div",{className:m.liveBlogTimeStamp},o.a.createElement(u.a,{brand:d.c,styles:m,dateLastPublishedFormatted:"".concat(n?"Updated ":"").concat(l)}))};f.propTypes={dateTime:l.a.string.isRequired,isUpdatedTime:l.a.bool},f.defaultProps={isUpdatedTime:!1},t.a=f},1079:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),s=n(823),l=n(77),c=function(e){var t=e.widgetSourceData,n="".concat(t,"?wmode=opaque");return a.a.createElement("div",{className:"videoResponsive"},a.a.createElement("iframe",{width:"100%",height:"315",src:n,frameBorder:"",allowFullScreen:"",title:"YoutubeEmbed"}))};c.propTypes={widgetSourceData:o.a.string.isRequired},t.a=Object(s.a)([l.a.SOCIAL_MEDIA],c)},1080:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),s=n(823),l=n(77),c=function(e){var t=e.widgetSourceData,n='<blockquote class="instagram-media" data-instgrm-captioned="" data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px;  max-width:658px; padding:0;"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="'.concat(t,'" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank"></a></p></div></blockquote>');return Object(r.useEffect)((function(){if(window&&window.instgrm)window.instgrm.Embeds.process();else{var e=document.createElement("script");e.src="//platform.instagram.com/en_US/embeds.js",e.async=!0,e.onload=function(){window&&window.instgrm&&window.instgrm.Embeds.process()},document.body.appendChild(e)}}),[]),a.a.createElement("div",{className:"instagramWrapper",dangerouslySetInnerHTML:{__html:n}})};c.propTypes={widgetSourceData:o.a.string.isRequired},t.a=Object(s.a)([l.a.SOCIAL_MEDIA],c)},1302:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),i=n(66),o=Object(i.a)({chunkName:function(){return"components-shared-Article-ArticleTable"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return Promise.all([n.e(1),n.e(3),n.e(119)]).then(n.bind(null,1215))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1215}}),s=Object(i.a)({chunkName:function(){return"components-shared-Article-InlineImage"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(15).then(n.bind(null,887))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 887}});function l(e,t,n){var r=e||{},i=r.brand,l=r.dataId,c=r.isKeyPoints,u=r.themeColor,d=(e||{}).styles||{},m=(t||{}).attributes,p=m||{},f=p.id,h=p.image,g=p.headline,y=p.chartType;if(c)return null;if("csv"===y)return a.a.createElement(o,{key:n,data:m,themeColor:u,dataId:l,brand:i,additionalHeaderClassName:d.tableHeader});if("stock"===y)return a.a.createElement(o,{key:n,isMarketTable:!0,themeColor:u,brand:i,data:m,dataId:l,additionalHeaderClassName:d.tableHeader});if("image"===y){var v={featuredMedia:{url:(h||{}).url,headline:g}};return a.a.createElement(s,{brand:i,key:n,data:v,dataId:"ArticleBody-ChartImage-".concat(f),shouldCrop:!1})}return null}o.displayName="LoadableArticleTable",s.displayName="LoadableInlineImage"},1303:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(66),o=Object(i.a)({chunkName:function(){return"components-Video-UniversalVideoPlayer-PlaceHolder"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(117).then(n.bind(null,807))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 807}});function s(e,t,n){var r=e||{},i=r.brand,s=r.isKeyPoints,l=t||{},c=l.attributes,u=l.data,d=(u||{}).id;if(!s)return a.a.createElement(o,{key:n,isPro:!1,isLive:!1,isPackage:!1,cardType:"featured-rectangle-media",brand:i,packageTitle:"",videoData:u,videoAttributes:c,inlineVideoPlayback:!0,inlineVideoComponent:!0,id:"ArticleBody-Video-".concat(d),dataId:"ArticleBody-Video-".concat(d)})}},1304:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(66),o=Object(i.a)({chunkName:function(){return"components-shared-SmallStockQuote"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(128).then(n.bind(null,906))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 906}});function s(e,t,n){var r=e||{},i=r.dataId,s=r.isKeyPoints,l=(t||{}).attributes||{},c=l.issueId,u=l.symbol,d=l.url;return s?null:u?a.a.createElement(o,{issueId:c,symbol:u,key:n,dataId:i,parentType:"article",url:d}):null}},1305:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(66),o=Object(i.a)({chunkName:function(){return"components-shared-CreditCard"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(123).then(n.bind(null,1212))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1212}});function s(e,t,n,r,i){var s=(e||{}).brand,l=Object.assign(t.data||{},{cardId:i});return a.a.createElement(o,{key:n,brand:s,data:l,dataId:"ArticleBody-CreditCard-".concat(i),pageData:e})}},1306:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(66),o=Object(i.a)({chunkName:function(){return"components-shared-Article-InlineImage"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(15).then(n.bind(null,887))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 887}});function s(e,t,n){var r=e||{},i=r.brand,s=r.isKeyPoints,l=(t||{}).attributes,c=(l||{}).id,u={featuredMedia:l};if(!s)return a.a.createElement(o,{brand:i,key:n,data:u,dataId:"ArticleBody-InlineImage-".concat(c),shouldCrop:!1})}},1307:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),i=n(66),o=n(408),s=Object(i.a)({chunkName:function(){return"components-PcmModule-Ads-MidResponsive"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(40).then(n.bind(null,854))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 854}});function l(e,t,n){var r=(e||{}).brand;return a.a.createElement(o.a,{offset:50,key:n},a.a.createElement(s,{brand:r,dataCounter:n}))}},1308:function(e,t,n){e.exports={electricblue:"#1ff1c8",orange:"#f87121",time:"LiveBlogTimestamp-time",liveBlogTimeStamp:"LiveBlogTimestamp-liveBlogTimeStamp",datetimeDivider:"LiveBlogTimestamp-datetimeDivider"}},1309:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(66),o=Object(i.a)({chunkName:function(){return"components-shared-Article-Pullquote"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(16).then(n.bind(null,1038))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1038}});function s(e,t,n){var r=e||{},i=r.brand,s=r.dataId,l=r.themeColor,c=(e||{}).styles||{},u=(t||{}).children;if(!Array.isArray(u)||!u.length)return null;var d,m,p;return a.a.createElement(o,{themeColor:l,key:n,quote:(p=u.filter((function(e){return"pullquote_quote"===e.tagName})),p.length?p[0].children[0]:""),title:(m=u.filter((function(e){return"pullquote_title"===e.tagName})),m.length?m[0].children[0]:""),attribution:(d=u.filter((function(e){return"pullquote_attribution"===e.tagName})),d.length?d[0].children[0]:""),dataId:s,brand:i,additionalClassName:c.pullquote})}o.displayName="LoadablePullquote"},1310:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(66),o=Object(i.a)({chunkName:function(){return"components-shared-Article-WebResource"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(120).then(n.bind(null,1102))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1102}});function s(e,t,n){if(!t)return null;var r=(e||{}).dataId,i=t.attributes||{},s=i.href,l=i.headline;return a.a.createElement(o,{key:n,href:s,title:l,dataId:r})}o.displayName="LoadableWebResource"},1311:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),i=n(66),o=Object(i.a)({chunkName:function(){return"components-PcmModule-MarketMovers"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(74).then(n.bind(null,857))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 857}}),s=Object(i.a)({chunkName:function(){return"components-shared-Article-WebService"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(121).then(n.bind(null,1103))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1103}});function l(e,t,n){if(!t)return null;var r=e||{},i=r.brand,l=r.dataId,c=t.attributes||{},u=c.id;return"market_movers_cnbc"===c.widgetName?a.a.createElement(o,{key:n,id:u,dataId:l}):a.a.createElement(s,{key:n,id:u,dataId:l,brand:i})}s.displayName="LoadableWebService",o.displayName="LoadableMarketMovers"},1312:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(66),o=Object(i.a)({chunkName:function(){return"components-shared-Article-WildcardEmbed"},isReady:function(e){return!!n.m[this.resolve(e)]},requireAsync:function(){return n.e(122).then(n.bind(null,996))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 996}});function s(e,t,n){var r=e||{},i=r.brand,s=r.dataId,l=r.isKeyPoints;if(!t||l)return null;var c=(t.attributes||{}).id;return a.a.createElement(o,{key:n,id:c,dataId:s,brand:i})}o.displayName="LoadableWildcardEmbed"},823:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(77),o=n(1),s=n.n(o),l=n(454),c=n(183),u=n(862),d=n.n(u),m=function(e){var t=e.style,n=e.className;return a.a.createElement("div",{style:t,className:Object(c.a)(n,d.a.container)},a.a.createElement(l.a,{showSpinner:!0}))};m.propTypes={style:s.a.object.isRequired,className:s.a.string},m.defaultProps={className:null};var p=m,f=n(863),h=n.n(f),g=function(e){var t=e.style,n=e.onShowOneTrustInfoDisplay,r=e.className;return a.a.createElement("div",{style:t,className:Object(c.a)(h.a.container,r)},a.a.createElement("div",{className:h.a.innerCopy},a.a.createElement("p",null,"This content is blocked because you are not allowing cookies."),a.a.createElement("p",null,"To view this content,"," ",a.a.createElement("span",{className:Object(c.a)(h.a.link,"test-click-here"),onClick:n,role:"button",tabIndex:0},"Click here")," ","to allow all cookies.")))};g.propTypes={style:s.a.object.isRequired,onShowOneTrustInfoDisplay:s.a.func.isRequired,className:s.a.string},g.defaultProps={className:null};var y=g,v=n(864),b=n.n(v);t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{useOneTrustContext:i.e};Object(i.f)(e);var o=function(o){var s=(0,r.useOneTrustContext)(),l=s.isClientSide,c=s.loadingState,u=s.userBlockedCategories,d=s.onShowOneTrustInfoDisplay;return s.enableOneTrust?c!==i.b.LOADING&&l?(c===i.b.ERROR&&console.warn("There was an error blocking this embed with OneTrust. TODO: Notify someone!"),u&&u.some((function(t){return e.includes(t)}))?a.a.createElement(y,{className:b.a.placeholderDimensions,style:n,onShowOneTrustInfoDisplay:d}):a.a.createElement(t,o)):a.a.createElement(p,{className:b.a.placeholderDimensions,style:n}):a.a.createElement(t,o)};return o}},839:function(e,t,n){"use strict";var r=n(236),a=n(0),i=n.n(a),o=n(408),s=n(1),l=n.n(s),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var u=[];var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"loadTweetForProps",value:function(e){var t=this,n=function(){window.twttr.ready().then((function(n){var r=n.widgets;t._div&&(t._div.innerHTML="");var a=e.options,i=e.onTweetLoadSuccess,o=e.onTweetLoadError;r.createTweetEmbed(t.props.id,t._div,a).then(i).catch(o)}))};window.twttr&&window.twttr.ready?n():function(e,t){if(0===u.length){u.push(t);var n=document.createElement("script");n.setAttribute("src",e),n.onload=function(){return u.forEach((function(e){return e()}))},document.body.appendChild(n)}else u.push(t)}((window.location.protocol.indexOf("file")>=0?this.props.protocol:"")+"//platform.twitter.com/widgets.js",n)}},{key:"componentDidMount",value:function(){this.loadTweetForProps(this.props)}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.id!==e.id}},{key:"componentWillUpdate",value:function(e,t){this.loadTweetForProps(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("span",{className:this.props.className,ref:function(t){e._div=t}})}}]),t}(i.a.Component);d.propTypes={id:l.a.string,options:l.a.object,protocol:l.a.string,onTweetLoadSuccess:l.a.func,onTweetLoadError:l.a.func,className:l.a.string},d.defaultProps={protocol:"https:",options:{},className:null};var m=d,p=n(823),f=n(77),h=Object(p.a)([f.a.SOCIAL_MEDIA],(function(e){return i.a.createElement(m,e)})),g=n(22),y=n(52);function v(e,t,n,a){var s=t||{},l=s.attributes,c=s.children,u=l||{},d=u.className,m=u.href,p=u.id,f=u.rel,v=u.target,b=u.type,k=(e||{}).dataId;if(m&&Object(r.b)(m)&&m.includes("https://twitter.com")){var x=/(\/+|[0-9]*)(?=\?|$)/g.exec(m);if(x&&x.length&&x[0])return i.a.createElement(o.a,{placeholder:i.a.createElement("span",null),key:n},i.a.createElement(h,{id:x[0]}))}return i.a.createElement(g.b,{to:m,target:v,rel:f,className:d,pageID:Number(p)||0,key:n,assetType:b,analyticsDataAttributes:Object(y.c)(m,k)},a(c))}function b(e,t,n,r){var a=(e||{}).styles,o=(t||{}).children;if(o.length)return i.a.createElement("div",{className:a.blockquote,key:n},r(o))}var k=n(1077),x=n(1302);function w(e,t,n){var r=e.styles,a=(t||{}).attributes||{},o=a.title,s=a.url,l=a.image,c=a.type;return i.a.createElement("div",{key:n,className:r.cnbcNewsStory},l&&l.url&&i.a.createElement(g.b,{to:s,assetType:c},i.a.createElement("img",{src:"".concat(l.url,"&w=160&h=90"),alt:l.caption})),i.a.createElement("div",{className:r.cnbcNewsStoryHeader},i.a.createElement(g.b,{to:s,assetType:c},o)))}var E=n(1303),A=n(1304),O=n(1305),S=n(14),T=n.n(S),N=n(183),I=n(172),C={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",enctype:"encType",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"};function P(e,t,n,r){var a=t||{},o=a.attributes,s=a.children,l=a.tagName,c=Object.assign({key:n},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).reduce((function(e,t){var n=T()(t,2),r=n[0],a=n[1];return e[C[r]||Object(I.b)({obj:C,value:r})||r.toLowerCase()]=a,e}),{})}(o));"href"in c&&(c.href=c.href?c.href:"#"),"className"in c&&(c.className=c.className?Object(N.a)(c.className):c.className);var u=(s||[]).length?r(s):void 0;return i.a.createElement("group"===l?"div":l,c,u)}var q=n(1306),j=n(1307),R=n(1078),L=n(453);function D(e,t,n,r,o){var s=(e||{}).styles||{},l=t||{},c=l.attributes,u=l.data,d=c||{},m=d.datePublished,p=d.id,f=u&&u.body&&u.body.content;if(Array.isArray(f)&&f.length){var h=1===o,g=(e||{}).firstPostRef,y=h?g:null,v=Object(L.b)(m);return i.a.createElement(a.Fragment,{key:"".concat(p,"-").concat(n)},i.a.createElement("div",{id:"".concat(p,"-post"),className:s.post},y&&i.a.createElement("div",{className:s.firstPostAnchor,ref:y}),i.a.createElement("div",{className:Object(N.a)("group",s.postTimestamp)},i.a.createElement(R.a,{dateTime:v})),r(f),i.a.createElement("div",{className:Object(N.a)("group",s.postDivider)})),h&&Object(k.a)(e))}}var z=n(1309),B=n(1079),M=n(1080),F=function(e,t,n){var r=t.attributes||{},a=r.type,s=r.src;switch(a){case"youtube":return i.a.createElement(B.a,{widgetSourceData:s,key:n});case"twitter":var l=/(\/+|[0-9]*)(?=\?|$)/g.exec(s);return l&&l.length&&l[0]&&i.a.createElement(o.a,{placeholder:i.a.createElement("span",null),key:n},i.a.createElement(h,{id:l[0]}));case"instagram":return i.a.createElement(M.a,{widgetSourceData:s,key:n});default:return null}};function _(e,t,n,r){var a=(e||{}).styles,o=void 0===a?{}:a,s=t||{},l=s.children,c="slideshow"===s.type?o.slideshowSubtitle:o.subtitle;return i.a.createElement("h2",{className:c,key:n},r(l))}var U=n(1310),H=n(1311),V=n(1312);function W(e,t){var n={a:v,blockquote:b,boxInline:k.a,chart:x.a,cnbcnewsstory:w,cnbcvideo:E.a,company:A.a,product_select:O.a,fallback:P,infographic:q.a,img:q.a,image:q.a,midResponsive:j.a,post:D,pullquote:z.a,security:A.a,socialEmbed:F,subtitle:_,webresource:U.a,webservice:H.a,wildcard:V.a},a={};return function e(i){return i&&Array.isArray(i)?i.map((function(i,o){if(Object(r.b)(i))return i;var s=(i||{}).tagName;"service-embed"===s&&(s="socialEmbed"),a[s]||(a[s]=1);var l=n[s]?n[s](t,i,o,e,a[s]):n.fallback(t,i,o,e,a[s]);return a[s]+=1,l})):null}(e)}n.d(t,"a",(function(){return W}))},862:function(e,t,n){e.exports={container:"OneTrustLoadingPlaceholder-container"}},863:function(e,t,n){e.exports={electricblue:"#1ff1c8",orange:"#f87121",container:"OneTrustBlockedPlaceholder-container",innerCopy:"OneTrustBlockedPlaceholder-innerCopy",link:"OneTrustBlockedPlaceholder-link"}},864:function(e,t,n){e.exports={placeholderDimensions:"withOneTrustPlaceholder-placeholderDimensions"}}}]);