//functions that are out of the scope of how this realates to Bootstrap but are helpful in all modules

// Element.prototype.addClass = function(value) {
//     this.classList.add(value);
// }

// Element.prototype.removeClass = function(value) {
//     this.classList.remove(value);
// }

// Element.prototype.containsClass = function(value) {
//     return this.classList.contains(value);
// }

// Element.prototype.toggleClass = function(value) {
//     if (this.containsClass(value)) {
//         this.removeClass(value);

//     } else {
//         this.addClass(value);
//     }
// }

Element.prototype._toggleClass = function(className, state) {
    if (state === undefined) {
        if (this.classList.contains(className)) {
            this.classList.remove(className);
            return false;
        } else {
            this.classList.add(className);
            return true;
        }

    } else if (state) {
        this.classList.add(className);
        return true;

    } else {
        this.classList.remove(className);
        return false;
    }

    return this;
}

