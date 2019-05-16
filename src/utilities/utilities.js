colorMixin = {
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

    textWarning() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },

    textDanger() {
        let x = this._getPropAndColorByFunctionName(arguments.callee.name);
        return this._updatePropertyColor(x['prop'], x['color']);
    },
}

Object.assign(HTMLElement.prototype, colorMixin);