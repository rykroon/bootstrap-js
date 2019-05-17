//functions that are out of the scope of how this realates to Bootstrap but are helpful in all modules

Element.prototype.addClass = function(value) {
    this.classList.add(value);
}

Element.prototype.removeClass = function(value) {
    this.classList.remove(value);
}

Element.prototype.containsClass = function(value) {
    this.classList.contains(value);
}

String.prototype.toKebabCase = function() {
    return this.replace(/[A-Z]/g, x => '-' + x.toLowerCase());
}

//The calling method should pass in it's 'arguments' variable.
function _methodAsClass(args) {
    console.log(args.callee.name.toKebabCase());
}

