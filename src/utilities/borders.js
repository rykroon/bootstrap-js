borderMixin = {
    border(value) {
        this._toggleClass('border', value);
        return this;
    },

    borderTop(value) {
        this._toggleClass('border-top', value);
        return this;
    },

    borderRight(value) {
        this._toggleClass('border-right', value);
        return this;
    },

    borderBottom(value) {
        this._toggleClass('border-bottom', value);
        return this;
    },

    borderLeft(value) {
        this._toggleClass('border-left', value);
        return this;
    },

    //Border Color
    borderPrimary() {
        return this._primary('border');
    },

    borderSecondary() {
        return this._secondary('border');
    },

    borderSuccess() {
        return this._success('border');
    },

    borderDanger() {
        return this._danger('border');
    },

    borderWarning() {
        return this._warning('border');
    },

    borderInfo() {
        return this._info('border');
    },

    borderLight() {
        return this._light('border');
    },

    borderDark() {
        return this._dark('border');
    },

    borderWhite() {
        return this._updatePropertyColor('border', 'white');
    },
}

Object.assign(HTMLElement.prototype, borderMixin);