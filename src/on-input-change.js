var onInputChange = (function($){
    
    /*
    ie9 doesn't trigger oninput event when content is removed with BACKSPACE, ctrl+x etc... 
    I will not bother with feature check.
    */
    var onInputSupport = (!$.browser.msie);

    function OnInputChange(element, callback, options) {
        this.element = element;
        this.$element = $(element);
        this.value = element.value;
        this._callback = callback;
        this.options = $.extend({
            time: 150
        }, options);        
        $(element).on('focus', $.proxy(this._listen, this));
        $(element).on('blur', $.proxy(this._unlisten, this));
    }

    OnInputChange.prototype = {
        
        _listen: function(){
            if(onInputSupport){
                this.$element.on('input', $.proxy(this._run, this));
            }
            else {
                this._interval = window.setInterval($.proxy(this._check, this), this.options.time);
            }
            return true;
        },
        
        _unlisten: function(){
            if(onInputSupport){
                this.$element.off('input', this._run);
            }
            else {
                window.clearInterval(this._interval);
            }
            return true;
        },
        
        _run: function(){
            this.value = this.element.value;
            this._callback(this.value, this.element);
        },
        
        _check: function(){
            if(this.element.value != this.value) {
                this._run();
            }
        }
    };
    
    $.fn.onInputChange = function(callback, options){
        return this.each(function(){
            new OnInputChange(this, callback, options);
        });
    };
    
    return {
        Constructor: OnInputChange,
        support:onInputSupport
    };
    
})(window.jQuery);

    
