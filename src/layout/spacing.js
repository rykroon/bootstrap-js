let spacingMixin = {
    get _spacingProperties() {
        return {
            'm':    [0, 1, 2, 3, 4, 5, 'n1', 'n2', 'n3', 'n4', 'n5', 'auto'],
            'mt':   [0, 1, 2, 3, 4, 5, 'n1', 'n2', 'n3', 'n4', 'n5', 'auto'],
            'mb':   [0, 1, 2, 3, 4, 5, 'n1', 'n2', 'n3', 'n4', 'n5', 'auto'],
            'ml':   [0, 1, 2, 3, 4, 5, 'n1', 'n2', 'n3', 'n4', 'n5', 'auto'],
            'mr':   [0, 1, 2, 3, 4, 5, 'n1', 'n2', 'n3', 'n4', 'n5', 'auto'],
            'mx':   [0, 1, 2, 3, 4, 5, 'n1', 'n2', 'n3', 'n4', 'n5', 'auto'],
            'my':   [0, 1, 2, 3, 4, 5, 'n1', 'n2', 'n3', 'n4', 'n5', 'auto'],
            'p':    [0, 1, 2, 3, 4, 5],
            'pt':   [0, 1, 2, 3, 4, 5],
            'pb':   [0, 1, 2, 3, 4, 5],
            'pl':   [0, 1, 2, 3, 4, 5],
            'pr':   [0, 1, 2, 3, 4, 5],
            'px':   [0, 1, 2, 3, 4, 5],
            'py':   [0, 1, 2, 3, 4, 5]
        }
    },

    _updateSpacingProperty(prop, bp, value) {
        if (! (prop in this._responsiveProperties)) {
            this._responsiveProperties[prop] = this._spacingProperties[prop];
        }

        return this._updateResponsiveProperty(prop, bp, value);
    },

    //Margin

    //Margin Property
    m(value, bp)    {return this._updateSpacingProperty('m', bp, value)},

    //Margin Breakpoints
    mSm(value)  {return this.m(value, 'sm')},
    mMd(value)  {return this.m(value, 'md')},
    mLg(value)  {return this.m(value, 'lg')},
    mXl(value)  {return this.m(value, 'xl')},

    //Margin Auto
    mAuto()     {return this.m('auto')},
    mSmAuto()   {return this.mSm('auto')},
    mMdAuto()   {return this.mMd('auto')},
    mLgAuto()   {return this.mLg('auto')},
    mXlAuto()   {return this.mXl('auto')},

    //Margin Top Property
    mt(value, bp)   {return this._updateSpacingProperty('mt', bp, value)},

    //Margin Top Breakpoints
    mtSm(value)  {return this.mt(value, 'sm')},
    mtMd(value)  {return this.mt(value, 'md')},
    mtLg(value)  {return this.mt(value, 'lg')},
    mtXl(value)  {return this.mt(value, 'xl')},

    //Margin Top Auto
    mtAuto()    {return this.mt('auto')},
    mtSmAuto()  {return this.mtSm('auto')},
    mtMdAuto()  {return this.mtMd('auto')},
    mtLgAuto()  {return this.mtLg('auto')},
    mtXlAuto()  {return this.mtXl('auto')},

    //Margin Bottom Property
    mb(value, bp)   {return this._updateSpacingProperty('mb', bp, value)},

    //Margin Bottom Breakpoints
    mbSm(value)  {return this.mb(value, 'sm')},
    mbMd(value)  {return this.mb(value, 'md')},
    mbLg(value)  {return this.mb(value, 'lg')},
    mbXl(value)  {return this.mb(value, 'xl')},

    //Margin Bottom Auto
    mbAuto()    {return this.mb('auto')},
    mbSmAuto()  {return this.mbSm('auto')},
    mbMdAuto()  {return this.mbMd('auto')},
    mbLgAuto()  {return this.mbLg('auto')},
    mbXlAuto()  {return this.mbXl('auto')},

    //Margin Left Property
    ml(value, bp)   {return this._updateSpacingProperty('ml', bp, value)},

    //Margin Left Breakpoints
    mbSm(value)  {return this.mb(value, 'sm')},
    mbMd(value)  {return this.mb(value, 'md')},
    mbLg(value)  {return this.mb(value, 'lg')},
    mbXl(value)  {return this.mb(value, 'xl')},

    //Margin Left Auto
    mlAuto()    {return this.ml('auto')},
    mlSmAuto()  {return this.mlSm('auto')},
    mlMdAuto()  {return this.mlMd('auto')},
    mlLgAuto()  {return this.mlLg('auto')},
    mlXlAuto()  {return this.mlXl('auto')},

    //Margin Right Property
    mr(value, bp)   {return this._updateSpacingProperty('mr', bp, value)},

    //Margin Right Breakpoints
    mrSm(value)  {return this.mr(value, 'sm')},
    mrMd(value)  {return this.mr(value, 'md')},
    mrLg(value)  {return this.mr(value, 'lg')},
    mrXl(value)  {return this.mr(value, 'xl')},

    //Margin Right Auto
    mrAuto()    {return this.mr('auto')},
    mrSmAuto()  {return this.mrSm('auto')},
    mrMdAuto()  {return this.mrMd('auto')},
    mrLgAuto()  {return this.mrLg('auto')},
    mrXlAuto()  {return this.mrXl('auto')},

    //Margin X Property
    mx(value, bp)   {return this._updateSpacingProperty('mx', bp, value)},

    //Margin X Breakpoints
    mxSm(value)  {return this.mx(value, 'sm')},
    mxMd(value)  {return this.mx(value, 'md')},
    mxLg(value)  {return this.mx(value, 'lg')},
    mxXl(value)  {return this.mx(value, 'xl')},

    //Margin X Auto
    mxAuto()    {return this.mx('auto')},
    mxSmAuto()  {return this.mxSm('auto')},
    mxMdAuto()  {return this.mxMd('auto')},
    mxLgAuto()  {return this.mxLg('auto')},
    mxXlAuto()  {return this.mxXl('auto')},

    //Margin Y Property
    my(value, bp)   {return this._updateSpacingProperty('my', bp, value)},

    //Margin Y Breakpoints
    mySm(value)  {return this.my(value, 'sm')},
    myMd(value)  {return this.my(value, 'md')},
    myLg(value)  {return this.my(value, 'lg')},
    myXl(value)  {return this.my(value, 'xl')},

    //Margin Y Auto
    myAuto()    {return this.my('auto')},
    mySmAuto()  {return this.mySm('auto')},
    myMdAuto()  {return this.myMd('auto')},
    myLgAuto()  {return this.myLg('auto')},
    myXlAuto()  {return this.myXl('auto')},

    //Padding
    p(value, bp)    {return this._updateSpacingProperty('p', bp, value)},

    //Pading Breakpoints
    pSm(value) {return this.p(value, 'sm')},
    pMd(value) {return this.p(value, 'md')},
    pLg(value) {return this.p(value, 'lg')},
    pXl(value) {return this.p(value, 'xl')},

    //Padding Top Property
    pt(value, bp)   {return this._updateSpacingProperty('pt', bp, value)},

    //Padding Top Breakpoints
    ptSm(value) {return this.pt(value, 'sm')},
    ptMd(value) {return this.pt(value, 'md')},
    ptLg(value) {return this.pt(value, 'lg')},
    ptXl(value) {return this.pt(value, 'xl')},

    //Padding Bottom Property
    pb(value, bp)   {return this._updateSpacingProperty('pb', bp, value)},

    //Padding Bottom Breakpoints
    pbSm(value) {return this.pb(value, 'sm')},
    pbMd(value) {return this.pb(value, 'md')},
    pbLg(value) {return this.pb(value, 'lg')},
    pbXl(value) {return this.pb(value, 'xl')},

    //Padding Left Property
    pl(value, bp)   {return this._updateSpacingProperty('pl', bp, value)},

    //Padding Left Breakpoints
    plSm(value) {return this.pl(value, 'sm')},
    plMd(value) {return this.pl(value, 'md')},
    plLg(value) {return this.pl(value, 'lg')},
    plXl(value) {return this.pl(value, 'xl')},

    //Padding Right Property
    pr(value, bp)   {return this._updateSpacingProperty('pr', bp, value)},

    //Padding Right Breakpoints
    prSm(value) {return this.pr(value, 'sm')},
    prMd(value) {return this.pr(value, 'md')},
    prLg(value) {return this.pr(value, 'lg')},
    prXl(value) {return this.pr(value, 'xl')},

    //Padding X Property
    px(value, bp)   {return this._updateSpacingProperty('px', bp, value)},

    //Padding X Breakpoints
    pxSm(value) {return this.px(value, 'sm')},
    pxMd(value) {return this.px(value, 'md')},
    pxLg(value) {return this.px(value, 'lg')},
    pxXl(value) {return this.px(value, 'xl')},

    //Padding Y Property
    py(value, bp)   {return this._updateSpacingProperty('py', bp, value)},

    //Padding Y Breakpoints
    pySm(value) {return this.py(value, 'sm')},
    pyMd(value) {return this.py(value, 'md')},
    pyLg(value) {return this.py(value, 'lg')},
    pyXl(value) {return this.py(value, 'xl')},
}

Object.assign(HTMLElement.prototype, spacingMixin);