borderMixin = {
    border(value) {
        if (value || value === undefined) {
            this.classList.add(arguments.callee.name.toKebabCase());
        } else {
            this.classList.remove(arguments.callee.name.toKebabCase());
        }
    },

    borderTop(value) {
        if (value || value === undefined) {
            this.classList.add(arguments.callee.name.toKebabCase());
        } else {
            this.classList.remove(arguments.callee.name.toKebabCase());
        }
    },

    borderRight(value) {
        if (value || value === undefined) {
            this.classList.add(arguments.callee.name.toKebabCase());
        } else {
            this.classList.remove(arguments.callee.name.toKebabCase());
        }
    },

    borderBottom(value) {
        if (value || value === undefined) {
            this.classList.add(arguments.callee.name.toKebabCase());
        } else {
            this.classList.remove(arguments.callee.name.toKebabCase());
        }
    },

    borderLeft(value) {
        if (value || value === undefined) {
            this.classList.add(arguments.callee.name.toKebabCase());
        } else {
            this.classList.remove(arguments.callee.name.toKebabCase());
        }
    },

    //Border Color
    borderPrimary() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    borderSecondary() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    borderSuccess() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    borderDanger() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    borderWarning() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    borderInfo() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    borderLight() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    borderDark() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    borderWhite() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },
}

Object.assign(HTMLElement.prototype, borderMixin);