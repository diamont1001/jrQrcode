/**
 * Created by Chenjr on 2015/7/7.
 */

require('./header2.less');

var $ = require('lib2/zepto/main'),
    artT = require('lib2/artTemplate/artTemplate');

module.exports = (function() {
    var _e = {};

    /**
     * 显示二级页面头部
     * @param dom
     * @param opt.css - 自定义头部样式
     */
    _e.render = function(dom, opt) {
        var render = artT.compile(require('./header2.tpl')());

        dom.innerHTML = render({opt: opt});

        window.setTimeout(function() {
            bindEvent();
        }, 50);
    };

    // 绑定事件
    function bindEvent() {
        document.getElementById('header2').addEventListener('click', function(ev){
            var ev = ev || window.event,
                target = ev.target || ev.srcElement;
            ev.stopPropagation();
            ev.preventDefault();

            if($(target).hasClass('header2-back')) {
                window.history.back();
            }
        }, false);
    }

    _e.setTitle = function(title) {
        $('#header2').find('.header2-title').text(title);
    };

    return _e;
})();
