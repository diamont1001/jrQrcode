/**
 * Loading模块
 * Created by Chenjr on 2015/7/7.
 */

require('./loading.less');

module.exports = (function() {
    var _e = {},
        _loadingMainID = 'loadingMain';

    _e.start = function() {
        var handle = document.getElementById(_loadingMainID);
        if(handle) {
            handle.style.display = 'block';
        } else {
            var el = document.createElement('div');
            el.id = _loadingMainID;
            el.innerHTML = '<div class="spinner"><div class="spinner1"></div><div class="spinner2"></div></div>';
            document.body.appendChild(el);
        }
    };

    _e.end = function(callback) {
        var handle = document.getElementById(_loadingMainID);

        if(handle) {
            handle.style.display = 'none';
        }
        if(typeof callback === 'function') {
            callback();
        }
    };

    // 局部loading
    _e.subloading = function(dom, outerHeight) {
        if(!dom) return ;

        dom = (dom.length > 0) ? dom[0] : dom;

        var height = outerHeight ? outerHeight : dom.offsetHeight;

        var el = document.createElement('div');
        el.className = 'loading-sub';
        el.innerHTML = '<div class="wheel"></div>';
        dom.innerHTML = '';
        dom.appendChild(el);

        window.setTimeout(function() {
            el.style.height = height + 'px';
            el.style.display = 'block';
        }, 50);
    };

    return _e;
})();
