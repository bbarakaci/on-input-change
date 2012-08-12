#On Input Change

oninput event is not supported by ie lt 9 and is partially supported by ie9, in a funny way.

This jQuery plugin will use the native oninput event, will fallback to setInterval method on Internet Explorer.

This is a first draft. It has no tests. It is manually tested with modern browsers and ie 7,8,9. It should work in ie6 but not tested.

##Usage
    $('input').onInputChange(function(value, element){
        console.log(value);
        console.log(element);
    });
    
##Options

###time

Set time in milliseconds for the setInterval method. Default is 150.

    $('input').onInputChange(anyfunction, {time:200});