/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */
  
  
  
 
    // I din't find a way to trigger input change event. I will test methods.
    module('on input change', {
        // This will run before each test in this module.
        setup: function() {

        }
    });
  
    test("functionality", function() {
        
        var element = $('#textInput')[0];
        var self = this;
        var instance = new onInputChange.Constructor(element, function(value, element) {
            self.resultValue = value;
            self.resultElement = element;
        }, {time:100});
        
        equal(instance.options.time, 100, 'time option passed');
        
        element.value = 'hello world';
        var listening = instance._listen();
        
        ok(listening, 'assume listening');
        
        instance._check();
        
        equal(this.resultValue, 'hello world', 'result should be passed and has new value');
        equal(this.resultElement, element, 'element passed');
        
        element.value = 'hello mars';
        
        instance._check();
        
        equal(this.resultValue, 'hello mars', 'result has new value');
            
        var unlistening = instance._unlisten();
        
        equal(unlistening, true, 'assume unlistening');
    });
    
    // Test interval version
    if (!onInputChange.support) {
        
        test("interval", function() {

            var element = $('#textInput')[0];
            var self = this;
            var instance = new onInputChange.Constructor(element, function(value, element) {
                self.resultValue = value;
                self.resultElement = element;
            }, {time:100});

            equal(instance.options.time, 100, 'time option passed');
            
            element.focus();

            element.value = 'hello world';
            
            stop();
            
            setTimeout(function () {
                equal(self.resultValue, 'hello world', 'result should be passed and has new value');
                equal(self.resultElement, element, 'element passed');
                
                element.value = 'hello mars';
                
                setTimeout(function () {
                    equal(self.resultValue, 'hello mars', 'result should have a new value');
                    
                    element.blur();
                    element.value = 'hello there';
                    
                    setTimeout(function () {
                        equal(self.resultValue, 'hello mars', 'result should not change');
                        start();
                    }, 150);
                }, 150);
            }, 150);
        });        
        
    }
    


}(jQuery));
