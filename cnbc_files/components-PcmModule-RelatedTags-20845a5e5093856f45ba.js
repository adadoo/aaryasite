(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[90],{1512:function(e,a,t){e.exports={electricblue:"#1ff1c8",orange:"#f87121",relatedTags:"RelatedTags-relatedTags",wrapper:"RelatedTags-wrapper",header:"RelatedTags-header",tags:"RelatedTags-tags"}},947:function(e,a,t){"use strict";t.r(a),t.d(a,"RelatedTags",(function(){return c}));var r=t(0),l=t.n(r),n=t(1),s=t.n(n),d=t(80),i=t(1512),c=function(e){var a=e.data,t=e.dataCounter,r=e.dataTest,n=e.dataAnalytics;if(!a)return l.a.createElement(d.a,{data:{error:"Article query came back as null"},errorSource:"RelatedTags",errorProps:e});var s="RelatedTags-".concat(t);if(a.native)return null;if(!Array.isArray(a.relatedTags)||0===a.relatedTags.length)return null;var c=a.relatedTags.map((function(e,a){return e.url&&l.a.createElement("li",{key:a},l.a.createElement("a",{href:e.url},e.name))})).filter((function(e){return!!e}));return Array.isArray(c)&&0!==c.length?l.a.createElement("div",{className:i.relatedTags,id:s,"data-module":"RelatedTags","data-test":r,"data-analytics":n},l.a.createElement("div",{className:i.wrapper,style:{borderColor:a.section&&a.section.color||"#002f6c"}},l.a.createElement("div",{className:i.header},"Related Tags"),l.a.createElement("ul",{className:i.tags},c))):null};c.propTypes={data:s.a.object.isRequired,dataCounter:s.a.number,dataAnalytics:s.a.string.isRequired,dataTest:s.a.string.isRequired},c.defaultProps={dataCounter:0,dataTest:"",dataAnalytics:""},a.default=c}}]);