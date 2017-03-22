$( document ).ready(function() {
    alert('test');
});


var domListener = function() {
	chrome.extension.sendMessage({ foo: 'bar'}, function() {});
};
window.addEventListener('DOMContentLoaded', domListener, false);