//functions that are out of the scope of how this realates to Bootstrap but are helpful in all modules

Element.prototype.addClass = function(value) {
    this.classList.add(value);
}

Element.prototype.removeClass = function(value) {
    this.classList.remove(value);
}

Element.prototype.containsClass = function(value) {
    return this.classList.contains(value);
}

Element.prototype.toggleClass = function(value) {
    if (this.containsClass(value)) {
        this.removeClass(value);

    } else {
        this.addClass(value);
    }
}

Element.prototype._updateClass = function(value, _class) {
    if (value === undefined) {
        this.toggleClass(_class);

    } else if (value) {
        this.addClass(_class);

    } else {
        this.removeClass(_class);
    }
}

String.prototype.toKebabCase = function() {
    return this.replace(/[A-Z]/g, x => '-' + x.toLowerCase());
}

//The calling method should pass in it's 'arguments' variable.
function _methodAsClass(args) {
    console.log(args.callee.name.toKebabCase());
}

