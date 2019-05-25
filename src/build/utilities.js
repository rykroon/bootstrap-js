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
        return this._toggleClass(value, 'border-bottom');
    },

    borderLeft(value) {
        return this._toggleClass(value, 'border-left');
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

Object.assign(HTMLElement.prototype, borderMixin);colorMixin = {
    get _colors() {
        return ['primary', 'secondary', 'success', 'info','warning', 'danger', 'light', 'dark']
    },

    get _colorClasses() {
        return {}
    },

    _addPropertyColor(prop, color) {
        let _class = prop + '-' + color;

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

    _primary(prop)      {return this._updatePropertyColor(prop, 'primary')},
    _secondary(prop)    {return this._updatePropertyColor(prop, 'secondary')},
    _success(prop)      {return this._updatePropertyColor(prop, 'success')},
    _info(prop)         {return this._updatePropertyColor(prop, 'info')},
    _warning(prop)      {return this._updatePropertyColor(prop, 'warning')},
    _danger(prop)       {return this._updatePropertyColor(prop, 'danger')},
    _light(prop)        {return this._updatePropertyColor(prop, 'light')},
    _dark(prop)         {return this._updatePropertyColor(prop, 'dark')},

    //Text Color
    textPrimary()   {return this._primary('text')},
    textSecondary() {return this._secondary('text')},
    textSuccess()   {return this._success('text')},
    textInfo()      {return this._info('text')},
    textWarning()   {return this._warning('text')},
    textDanger()    {return this._danger('text')},
    textLight()     {return this._light('text')},
    textDark()      {return this._dark('text')},

    textBody()      {return this._updatePropertyColor('text', 'body')},
    textMuted()     {return this._updatePropertyColor('text', 'muted')},

    //Background Color
    bgPrimary()     {return this._primary('bg')},
    bgSecondary()   {return this._secondary('bg')},
    bgSuccess()     {return this._success('bg')},
    bgInfo()        {return this._info('bg')},
    bgWarning()     {return this._warning('bg')},
    bgDanger()      {return this._danger('bg')},
    bgLight()       {return this._light('bg')},
    bgDark()        {return this._dark('bg')},

    bgWhite()       {return this._updatePropertyColor('bg', 'white')},
    bgTransparent() {return this._updatePropertyColor('bg', 'transparent')},
}

Object.assign(HTMLElement.prototype, colorMixin);