# Array manipulation in JS

## .filter() : ``` Array.prototype.fiter(function) ```
Evaluate *function()* for each element of the array and keep the element if it returns *true*.

## .map() : ```Array.prototype.map(function)```
Evaluate *function()* for each element of the array and create a new array based on the manipulation returned by *function()*.

## .sort() : ```Array.prototype.sort(function)```
The function has generally the following structure :
```
function(a, b) {
  return ...;
}
```
If ```...``` returns a negative value, that means ```a``` comes before ```b``` in the array, and vice-versa.

## .reduce() : ```Array.prototype.reduce(function(finalReturn, element) { ... })```
Keeps changing ```finalReturn``` (which can be a number, an array, an object) by evaluating ```function()``` for each ```element```. 
