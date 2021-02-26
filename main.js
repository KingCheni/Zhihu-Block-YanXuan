// ==UserScript==
// @name         知乎屏蔽盐选
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  一键屏蔽知乎的盐选内容
// @author       KingChen
// @match        https://*.zhihu.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    let zhihu = {};
    zhihu.clear = ()=>{
        $(".Card").find(".List-item").each(function(){
            //let that=this;
            if($(this).find(".KfeCollection-OrdinaryLabel-content").text().indexOf("盐选")!=-1){
                $(this).hide()
            }
        })
    }
    zhihu.timer = setInterval(function(){
        if($(".Card").find(".List-item").length>0){
            zhihu.clear();
            clearInterval(zhihu.timer);
        }
    },1000)
    zhihu.onMouseScroll = (e)=>{
        //e.preventDefault();
        var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var delta = Math.max(-1, Math.min(1, wheel) );
        if(delta<0){
            //console.log('向下滚动');
            zhihu.clear();
        }else{
            //console.log('向上滚动');
        }
    }
    $(document).on('mousewheel DOMMouseScroll', zhihu.onMouseScroll);
    // Your code here...
})();
