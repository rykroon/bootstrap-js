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

Object.assign(HTMLElement.prototype, borderMixin);colorMixin = {
    get _colors() {
        return ['primary', 'secondary', 'success', 'danger','warning', 'info', 'light', 'dark']
    },

    get _colorClasses() {
        return {}
    },

    _addPropertyColor(prop, color) {
        let _class = prop +'-' + color;

        this._removePropertyColor(prop);
        this._colorClasses[prop] = _class;
        this.classList.add(_class);
    },

    _removePropertyColor(prop) {
        let _class = this._colorClasses[prop];
        this.classList.remove(_class);
    },

    _updatePropertyColor(prop, color) {
        if (color) {
            this._addPropertyColor(prop, color);
        } else {
            this._removePropertyColor(prop);
        }

        return this;
    },

    _getPropertyColor(prop) {
        if (this._colorClasses[prop]) {
            return this._colorClasses[prop].split('-').slice(-1)[0];
        }

        return null;
    },

    _getPropAndColorByFunctionName(functionName) {
        let prop = functionName.toKebabCase().split('-').slice(0, -1).join('-');
        let color = functionName.toKebabCase().split('-').slice(-1)[0];
        
        return {
            prop: prop,
            color: color
        }
    },

    textPrimary() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    textSecondary() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    textSuccess() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    textDanger() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    textWarning() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    textInfo() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    textLight() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    textDark() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    textBody() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    textMuted() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    //Background Color
    bgPrimary() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    bgSecondary() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    bgSuccess() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    bgDanger() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    bgWarning() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    bgInfo() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    bgLight() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    bgDark() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    bgWhite() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    bgTransparent() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },
}

Object.assign(HTMLElement.prototype, colorMixin);