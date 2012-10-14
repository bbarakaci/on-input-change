#On Input Change

oninput event is not supported by ie lt 9 and is buggy on ie9.

This jQuery plugin will use the native oninput event, will fallback to setInterval method on Internet Explorer.

There is a simple [demo/development](http://bbarakaci.github.com/on-input-change/) page to see it in action.

##Download

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/bbarakaci/on-input-change/master/dist/fixto.min.js
[max]: https://raw.github.com/bbarakaci/on-input-change/master/dist/fixto.js

##Usage
    $('input').onInputChange(function(value, element){
        console.log(value);
        console.log(element);
    });
    
##Options

###time

Set time in milliseconds for the setInterval method. Default is 150.

    $('input').onInputChange(anyfunction, {time:200});