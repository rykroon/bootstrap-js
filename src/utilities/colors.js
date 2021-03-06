colorMixin = {
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