(function(e){function t(t){for(var a,o,u=t[0],c=t[1],l=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={index:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue3-at/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("fe8f")},"300d":function(e,t,n){var a=n("3366");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("499e").default;r("25771fae",a,!0,{sourceMap:!1,shadowMode:!1})},3366:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}.editor{width:400px;height:200px;overflow:auto;white-space:pre-wrap;text-align:left;border:2px solid rgba(0,0,0,.5)}.list-item{text-align:left;height:50px;display:flex;flex-direction:row;align-items:center}.list-item>img{width:40px;margin:0 24px}",""]),e.exports=t},"880f":function(e,t,n){var a=n("cff1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("499e").default;r("7c4440b5",a,!0,{sourceMap:!1,shadowMode:!1})},cff1:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".at-wrapper{position:relative;display:inline-block}.at-list{top:100%;width:100%;box-shadow:0 2px 10px 0 rgba(0,0,0,.1),0 0 2px 0 rgba(0,0,0,.12);position:absolute;background:#fff}.at-list__item--active{background-color:#f5f5f5}.at-list__subject-title{text-align:left}",""]),e.exports=t},ddae:function(e,t,n){"use strict";n("300d")},fe8f:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r=Object(a["g"])("div",{class:"editor",contenteditable:""},null,-1),i={key:0},o={key:1,class:"list-item"},u={key:2,class:"list-item"},c=["src"];function l(e,t,n,l,s,d){var f=Object(a["o"])("vue3-at");return Object(a["k"])(),Object(a["d"])(f,{atMap:e.atMap,onAt:e.onAt,renderTagItem:e.renderTagItem},{listItem:Object(a["r"])((function(e){var t=e.item;return[t.isSubjectTitle?(Object(a["k"])(),Object(a["f"])("div",i,Object(a["p"])(t.title),1)):t.tag?(Object(a["k"])(),Object(a["f"])("div",o,Object(a["p"])(t.tag),1)):(Object(a["k"])(),Object(a["f"])("div",u,[Object(a["g"])("img",{src:t.avatar,alt:""},null,8,c),Object(a["h"])(Object(a["p"])(t.name),1)]))]})),default:Object(a["r"])((function(){return[r]})),_:1},8,["atMap","onAt","renderTagItem"])}function s(e,t,n,r,i,o){var u=Object(a["o"])("AtList");return Object(a["k"])(),Object(a["f"])("div",{class:"at-wrapper",onCompositionstart:t[1]||(t[1]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.onCompositionStart&&e.onCompositionStart.apply(e,t)}),onCompositionend:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.onCompositionEnd&&e.onCompositionEnd.apply(e,t)}),onKeydownCapture:t[3]||(t[3]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.onKeyDown&&e.onKeyDown.apply(e,t)}),onInput:t[4]||(t[4]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.onInput&&e.onInput.apply(e,t)})},[Object(a["n"])(e.$slots,"default"),e.atListVisible?(Object(a["k"])(),Object(a["d"])(u,{key:0,list:e.matchedAtList,curIndex:e.curIndex,"onUpdate:curIndex":t[0]||(t[0]=function(t){return e.curIndex=t}),class:"at-list",onClickItem:e.onClickItem},{default:Object(a["r"])((function(t){var n=t.item,r=t.index;return[Object(a["n"])(e.$slots,"listItem",{item:n,index:r})]})),_:3},8,["list","curIndex","onClickItem"])):Object(a["e"])("",!0)],32)}var d,f=n("9ab4");function p(){var e=window.getSelection();if(e&&e.rangeCount>0)return e.getRangeAt(0)}function v(){var e=p();if(e){var t=e.cloneRange();return t.collapse(!0),t.setStart(t.endContainer,0),t}}function b(e){var t=window.getSelection();t&&(t.removeAllRanges(),t.addRange(e))}function m(e){return e.nodeType===Node.TEXT_NODE}function g(e){var t=e.endContainer.parentElement;if(!t)return!1;if(t.getAttribute("is-tag"))return t;var n=t.parentElement;return!!n&&(!!n.getAttribute("is-tag")&&n)}(function(e){e[e["up"]=38]="up",e[e["down"]=40]="down",e[e["enter"]=13]="enter",e[e["esc"]=27]="esc",e[e["left"]=37]="left",e[e["right"]=39]="right",e[e["delete"]=8]="delete"})(d||(d={}));var j={class:"at-list"},O=["onClick","onMouseenter"],y={key:1,class:"at-list__subject-title"};function h(e,t,n,r,i,o){return Object(a["k"])(),Object(a["f"])("div",j,[(Object(a["k"])(!0),Object(a["f"])(a["a"],null,Object(a["m"])(e.list,(function(t,n){return Object(a["k"])(),Object(a["f"])(a["a"],{key:n},[t.isSubjectTitle?(Object(a["k"])(),Object(a["f"])("div",y,[Object(a["n"])(e.$slots,"default",{item:t,index:n,curIndex:e.curIndex},(function(){return[Object(a["h"])(Object(a["p"])(t.title),1)]}))])):(Object(a["k"])(),Object(a["f"])("div",{key:0,class:Object(a["j"])(["at-list__item",{"at-list__item--active":n===e.curIndex}]),onClick:function(n){return e.$emit("click-item",t)},onMouseenter:function(t){return e.onMouseEnter(n)}},[Object(a["n"])(e.$slots,"default",{item:t,index:n,curIndex:e.curIndex},(function(){return[Object(a["h"])(Object(a["p"])(t),1)]}))],42,O))],64)})),128))])}var x=Object(a["i"])({name:"AtList",emits:["update:curIndex","click-item"],props:{showSubjectTitle:{type:Boolean,default:!0},list:{type:Array,required:!0},curIndex:{type:Number,required:!0}},setup:function(e,t){return{onMouseEnter:function(e){t.emit("update:curIndex",e)}}}}),k=n("6b0d"),w=n.n(k),I=w()(x,[["render",h]]);n("880f");var C=Object(a["i"])({name:"App",components:{AtList:I},props:{atMap:{type:Object,default:function(){return{}}},renderTagItem:{type:Function,required:!1},disabledModifyTag:{type:Boolean,default:!0},showSubjectTitle:{type:Boolean,default:!0},allowSpaces:{type:Boolean,default:!1},filtersFn:{type:Function,default:function(e,t,n){return!(n&&!e.isSubjectTitle)||e[n].toLowerCase().includes(t.toLowerCase())}}},emits:["at","insert-tag","click-list-item","input"],setup:function(e,t){var n,r=Object(a["l"])(!1),i=Object(a["b"])((function(){return Object.keys(e.atMap)})),o=function(e){for(var t=0;t<i.value.length;t++){var n=e.indexOf(i.value[t]);if(-1!==n)return{at:i.value[t],index:n}}return!1},u=Object(a["l"])(1),c=!1,l=Object(a["l"])([]),s=function(e,t){t.deleteContents();var n=t.endContainer;if(m(n)){var a=t.endOffset;n.data=n.data.slice(0,a)+e+n.data.slice(a),t.setEnd(n,a+e.length)}else{var r=document.createTextNode(e);t.insertNode(r),t.setEndAfter(r)}t.collapse(!1),b(t)},p=function(e){document.execCommand("insertHTML",!1,'<span is-tag="true">'+e+"</span> ")},j="",O=-1,y=function(a){if(n){var r=n.cloneRange();if(-1!==O){if(r.setStart(r.endContainer,O),b(r),e.renderTagItem){var i=e.renderTagItem(a);i&&p(i)}else{var o=a[e.atMap[j].keyName];s(j+o,r)}t.emit("insert-tag",a)}}},h=function(e){if(r.value){var t=e===d.up?-1:1,n=u.value+t;n=Math.min(Math.max(n,0),l.value.length-1);while(l.value[n]&&l.value[n].isSubjectTitle)n+=t,n<0&&(n+=2);u.value=n}},x="",k=function(){var t=x?e.atMap[j].list.filter((function(t){return e.filtersFn(t,x,e.atMap[j].keyName)})):Object(f["a"])(e.atMap[j].list);t.length>0?(r.value=!0,l.value=Object(f["a"])(t)):r.value=!1};return Object(a["q"])(e.atMap,(function(){k()})),{atListVisible:r,matchedAtList:l,curIndex:u,onCompositionStart:function(){c=!0},onCompositionEnd:function(){c=!1},onKeyDown:function(t){if(!t.isComposing){var n=function(){if(e.disabledModifyTag){var n=v();if(n&&(t.key.length<=1||t.keyCode===d.enter||t.keyCode===d.delete)){var a=g(n);if(a){var r=document.getSelection();if(r){if(t.keyCode===d.delete){if(0===n.endOffset)return;return n.selectNode(a),r.removeAllRanges(),r.addRange(n),void document.execCommand("delete")}var i=document.createTextNode(" ");0===n.endOffset?a.parentElement&&a.parentElement.insertBefore(i,a):(a.nextSibling?a.parentElement.insertBefore(i,a.nextSibling):a.parentElement.append(i),n.setStart(i,1),r.removeAllRanges(),r.addRange(n))}}}}};if(n(),r.value)return t.keyCode===d.enter?(l.value[u.value]&&y(l.value[u.value]),r.value=!1,t.preventDefault(),void t.stopPropagation()):t.keyCode===d.up||t.keyCode===d.down?(h(t.keyCode),t.preventDefault(),void t.stopPropagation()):void 0}},onInput:function(){if(t.emit("input"),!c){var a=v();if(a){var i=g(a);if(!i){n=a.cloneRange();var u=a.toString(),l=o(u);l?(O=l.index,j=l.at,x=u.slice(O+j.length),e.allowSpaces||!/\s/.test(x)?(t.emit("at",{at:j,inputChunk:x}),k()):r.value=!1):r.value=!1}}}},onClickItem:function(e){t.emit("click-list-item",e),y(e)}}}}),M=w()(C,[["render",s]]),S=Object(a["i"])({name:"App",components:{Vue3At:M},setup:function(){var e=Object(a["l"])({"@":{keyName:"name",list:[{isSubjectTitle:!0,title:"最近联系人"},{name:"SHISME",userId:"",avatar:"https://avatars.githubusercontent.com/u/17661313?s=40&v=4"},{name:"CAYAHUANG",userId:"",avatar:"https://avatars.githubusercontent.com/u/18247969?s=100&v=4"},{isSubjectTitle:!0,title:"好友"},{name:"OuYang",userId:"",avatar:"https://avatars.githubusercontent.com/u/13029538?s=100&v=4"},{name:"SAGA",avatar:"https://avatars.githubusercontent.com/u/16740021?s=100&v=4",userId:""}]},"#":{keyName:"tag",list:[{tag:"666"}]}});return{atMap:e,onAt:function(e){var t=e.at,n=e.inputChunk;console.log("onAt:",t,n)},renderTagItem:function(e){return e.tag?'<span style="color: deepskyblue">'+e.tag+"</span>":'<span style="color:#003569;" data-user-id="'+e.userId+'">@'+e.name+"</span>"}}}}),A=(n("ddae"),w()(S,[["render",l]]));Object(a["c"])(A).mount("#app")}});
//# sourceMappingURL=index.a82a5889.js.map