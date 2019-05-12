//Breakpoint Mixin for Responsive Properties
let breakpointMixin = {
    get _breakpoints() {
        return [undefined, 'md', 'lg', 'xl'];
    },

    get _responsiveProperties() {
        return {}
    },

    get _responsiveClasses() {
        return {
            undefined: {},
            'sm': {},
            'md': {},
            'lg': {},
            'xl': {}
        }
    },

    _isValidResponsiveProperty(prop) {
        return prop in this._responsiveProperties;
    },

    _isValidBreakpoint(bp) {
        return this._breakpoints.includes(bp);
    },

    _isValidValueForResponsiveProperty(prop, value) {
        return this._responsiveProperties[prop].includes(value);
    },

    _addResponsiveProperty(prop, bp, value) {
		//check for valid property
		if (! this._isValidResponsiveProperty(prop)) throw "Invalid property";

		//Check for valid breakpoint
		if (! this._isValidBreakpoint(bp)) throw "Invalid breakpoint";

		//check for valid value
        if (! this._isValidValueForResponsiveProperty(prop, value)) throw "Invalid Value";

        //remove already existing property
        this._removeResponsiveProperty(prop, bp);

		//build className
		let className = prop;
		if (bp !== undefined) className += '-' + bp;
		if (value !== undefined) className += '-' + value;

        this.classList.add(className);
        this._responsiveClasses[bp][prop] = className;
        return className;
	},

	_removeResponsiveProperty(prop, bp) {
        let className = this._responsiveClasses[bp][prop];

        if (className) {
            this.classList.remove(className);
            this._responsiveClasses[bp][prop] = null;
        }
        
        return className;
	},

	_updateResponsiveProperty(prop, bp, value) {
		if (value === null) {
			this._removeResponsiveProperty(prop, bp);
		} else {
            this._addResponsiveProperty(prop, bp, value);
        }

        return this;
	}
}


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

    m(value, bp)    {return this._updateSpacingProperty('m', bp, value)},
    mAuto()         {return this.m('auto')},
    mt(value, bp)   {return this._updateSpacingProperty('mt', bp, value)},
    mtAuto()        {return this.mt('auto')},
    mb(value, bp)   {return this._updateSpacingProperty('mb', bp, value)},
    mbAuto()        {return this.mb('auto')},
    ml(value, bp)   {return this._updateSpacingProperty('ml', bp, value)},
    mlAuto()        {return this.ml('auto')},
    mr(value, bp)   {return this._updateSpacingProperty('mr', bp, value)},
    mrAuto()        {return this.mr('auto')},
    mx(value, bp)   {return this._updateSpacingProperty('mx', bp, value)},
    mxAuto()        {return this.mx('auto')},
    my(value, bp)   {return this._updateSpacingProperty('my', bp, value)},
    myAuto()        {return this.my('auto')},

    //Padding
    p(value, bp)    {return this._updateSpacingProperty('p', bp, value)},
    pt(value, bp)   {return this._updateSpacingProperty('pt', bp, value)},
    pb(value, bp)   {return this._updateSpacingProperty('pb', bp, value)},
    pl(value, bp)   {return this._updateSpacingProperty('pl', bp, value)},
    pr(value, bp)   {return this._updateSpacingProperty('pr', bp, value)},
    px(value, bp)   {return this._updateSpacingProperty('px', bp, value)},
    py(value, bp)   {return this._updateSpacingProperty('py', bp, value)},

    //Small
    mSm(value)  {return this.m(value)},
    mtSm(value) {return this.mt(value)},
    mbSm(value) {return this.mb(value)},
    mlSm(value) {return this.ml(value)},
    mrSm(value) {return this.mr(value)},
    mxSm(value) {return this.mx(value)},
    mySm(value) {return this.my(value)},

    pSm(value)  {return this.p(value)},
    ptSm(value) {return this.pt(value)},
    pbSm(value) {return this.pb(value)},
    plSm(value) {return this.pl(value)},
    prSm(value) {return this.pr(value)},
    pxSm(value) {return this.px(value)},
    pySm(value) {return this.py(value)},

    //Medium
    mMd(value)  {return this.m(value, 'md')},
    mtMd(value) {return this.mt(value, 'md')},
    mbMd(value) {return this.mb(value, 'md')},
    mlMd(value) {return this.ml(value, 'md')},
    mrMd(value) {return this.mr(value, 'md')},
    mxMd(value) {return this.mx(value, 'md')},
    myMd(value) {return this.my(value, 'md')},

    pMd(value)  {return this.p(value, 'md')},
    ptMd(value) {return this.pt(value, 'md')},
    pbMd(value) {return this.pb(value, 'md')},
    plMd(value) {return this.pl(value, 'md')},
    prMd(value) {return this.pr(value, 'md')},
    pxMd(value) {return this.px(value, 'md')},
    pyMd(value) {return this.py(value, 'md')},

    //Large
    mLg(value)  {return this.m(value, 'lg')},
    mtLg(value) {return this.mt(value, 'lg')},
    mbLg(value) {return this.mb(value, 'lg')},
    mlLg(value) {return this.ml(value, 'lg')},
    mrLg(value) {return this.mr(value, 'lg')},
    mxLg(value) {return this.mx(value, 'lg')},
    myLg(value) {return this.my(value, 'lg')},

    pLg(value)  {return this.p(value, 'lg')},
    ptLg(value) {return this.pt(value, 'lg')},
    pbLg(value) {return this.pb(value, 'lg')},
    plLg(value) {return this.pl(value, 'lg')},
    prLg(value) {return this.pr(value, 'lg')},
    pxLg(value) {return this.px(value, 'lg')},
    pyLg(value) {return this.py(value, 'lg')},

    //Extra Large
    mXl(value)  {return this.m(value, 'xl')},
    mtXl(value) {return this.mt(value, 'xl')},
    mbXl(value) {return this.mb(value, 'xl')},
    mlXl(value) {return this.ml(value, 'xl')},
    mrXl(value) {return this.mr(value, 'xl')},
    mxXl(value) {return this.mx(value, 'xl')},
    myXl(value) {return this.my(value, 'xl')},

    pXl(value)  {return this.p(value, 'xl')},
    ptXl(value) {return this.pt(value, 'xl')},
    pbXl(value) {return this.pb(value, 'xl')},
    plXl(value) {return this.pl(value, 'xl')},
    prXl(value) {return this.pr(value, 'xl')},
    pxXl(value) {return this.px(value, 'xl')},
    pyXl(value) {return this.py(value, 'xl')},
}

let displayMixin = {
    get _displayProperties() {
        return {
            'd': [
                'none',
                'inline',
                'inline-block',
                'block',
                'table',
                'table-row',
                'table-cell',
                'flex',
                'inline-flex'
            ]
        }
    },
    _updateDisplayProperty(prop, bp, value) {
        if (! (prop in this._responsiveProperties)) {
            this._responsiveProperties[prop] = this._displayProperties[prop];
        }

        return this._updateResponsiveProperty(prop, bp, value);
    },


    //Display Porperty
    d(value, bp)    {return this._updateDisplayProperty('d', bp, value)},

    //Display Breakpoints
    dSm(value)  {return this.d(value, 'sm')},
    dMd(value)  {return this.d(value, 'md')},
    dLg(value)  {return this.d(value, 'lg')},
    dXl(value)  {return this.d(value, 'xl')},

    //Display None
    dNone()     {return this.d('none')},
    dSmNone()   {return this.dSm('none')},
    dMdNone()   {return this.dMd('none')},
    dLgNone()   {return this.dLg('none')},
    dXlNone()   {return this.dXl('none')},

    //Display Inline
    dInline()   {return this.d('inline')},
    dSmInline() {return this.dSm('inline')},
    dMdInline() {return this.dMd('inline')},
    dLgInline() {return this.dLg('inline')},
    dXlInline() {return this.dXl('inline')},

    //Display Inline Block
    dInlineBlock()      {return this.d('inline-block')},
    dSmInlineBlock()    {return this.dSm('inline-block')},
    dMdInlineBlock()    {return this.dMd('inline-block')},
    dLgInlineBlock()    {return this.dLg('inline-block')},
    dXlInlineBlock()    {return this.dXl('inline-block')},

    //Display Block
    dBlock()    {return this.d('block')},
    dSmBlock()  {return this.dSm('block')},
    dMdBlock()  {return this.dMd('block')},
    dLgBlock()  {return this.dLg('block')},
    dXlBlock()  {return this.dXl('block')},

    //Display Table
    dTable()    {return this.d('table')},
    dSmTable()  {return this.dSm('table')},
    dMdTable()  {return this.dMd('table')},
    dLgTable()  {return this.dLg('table')},
    dXlTable()  {return this.dXl('table')},

    //Display Table Row
    dTableRow()     {return this.d('table-row')},
    dSmTableRow()   {return this.dSm('table-row')},
    dMdTableRow()   {return this.dMd('table-row')},
    dLgTableRow()   {return this.dLg('table-row')},
    dXlTableRow()   {return this.dXl('table-row')},

    //Display Table Cell
    dTableCell()    {return this.d('table-cell')},
    dSmTableCell()  {return this.dSm('table-cell')},
    dMdTableCell()  {return this.dMd('table-cell')},
    dLgTableCell()  {return this.dLg('table-cell')},
    dXlTableCell()  {return this.dXl('table-cell')},

    //Display Flex
    dFlex()     {return this.d('flex')},
    dSmFlex()   {return this.dSm('flex')},
    dMdFlex()   {return this.dMd('flex')},
    dLgFlex()   {return this.dLg('flex')},
    dXlFlex()   {return this.dXl('flex')},

    //Display Inline Flex
    dInlineFlex()   {return this.d('inline-flex')},
    dSmInlineFlex() {return this.dSm('inline-flex')},
    dMdInlineFlex() {return this.dMd('inline-flex')},
    dLgInlineFlex() {return this.dLg('inline-flex')},
    dXlInlineFlex() {return this.dXl('inline-flex')},
}

let flexMixin = {
    get _flexProperties() {
        return {
            'flex': [
                'row', 
                'column',
                'row-reverse',
                'column-reverse', 
                'wrap',
                'nowrap',
                'wrap-reverse',
                'fill',
                'grow-0',
                'grow-1',
                'shrink-0',
                'shrink-1',

            ],
            'justify-content': ['start', 'end', 'center', 'between', 'around'],
            'align-items': ['start', 'end', 'center', 'baseline', 'stretch'],
            'align-content': ['start', 'end', 'center', 'between', 'around', 'stretch'],
            'align-self': ['auto', 'start', 'end', 'center', 'baseline', 'stretch'],
            'order': ['first', 'last', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
    },

    _updateFlexProperty(prop, bp, value) {
        if (! (prop in this._responsiveProperties)) {
            this._responsiveProperties[prop] = this._flexProperties[prop];
        }

        return this._updateResponsiveProperty(prop, bp, value);
    },

    //Flex Property
    flex(value, bp) {return this._updateFlexProperty('flex', bp, value)},

    //Flex Breakpoints
    flexSm(value)   {return this.flex(value, 'sm')},
    flexMd(value)   {return this.flex(value, 'md')},
    flexLg(value)   {return this.flex(value, 'lg')},
    flexXl(value)   {return this.flex(value, 'xl')},

    //Flex Row
    flexRow()   {return this.flex('row')},
    flexSmRow() {return this.flexSm('row')},
    flexMdRow() {return this.flexMd('row')},
    flexLgRow() {return this.flexLg('row')},
    flexXlRow() {return this.flexXl('row')},

    //Flex Column
    flexColumn()    {return this.flex('column')},
    flexSmColumn()  {return this.flexSm('column')},
    flexMdColumn()  {return this.flexMd('column')},
    flexLgColumn()  {return this.flexLg('column')},
    flexXlColumn()  {return this.flexXl('column')},

    //Flex Row Reverse
    flexRowReverse()    {return this.flex('row-reverse')},
    flexSmRowReverse()  {return this.flexSm('row-reverse')},
    flexMdRowReverse()  {return this.flexMd('row-reverse')},
    flexLgRowReverse()  {return this.flexLg('row-reverse')},
    flexXlRowReverse()  {return this.flexXl('row-reverse')},

    //Flex Column Reverse
    flexColumnReverse()     {return this.flex('column-reverse')},
    flexSmColumnReverse()   {return this.flexSm('column-reverse')},
    flexMdColumnReverse()   {return this.flexMd('column-reverse')},
    flexLgColumnReverse()   {return this.flexLg('column-reverse')},
    flexXlColumnReverse()   {return this.flexXl('column-reverse')},

    //Flex Wrap
    flexWrap()      {return this.flex('wrap')},
    flexSmWrap()    {return this.flexSm('wrap')},
    flexMdWrap()    {return this.flexMd('wrap')},
    flexLgWrap()    {return this.flexLg('wrap')},
    flexXlWrap()    {return this.flexXl('wrap')},

    //Flex No Wrap
    flexNoWrap()    {return this.flex('no-wrap')},
    flexSmNoWrap()  {return this.flexSm('no-wrap')},
    flexMdNoWrap()  {return this.flexMd('no-wrap')},
    flexLgNoWrap()  {return this.flexLg('no-wrap')},
    flexXlNoWrap()  {return this.flexXl('no-wrap')},

    //Flex Wrap Reverse
    flexWrapReverse()   {return this.flex('wrap-reverse')},
    flexSmWrapReverse() {return this.flexSm('wrap-reverse')},
    flexMdWrapReverse() {return this.flexMd('wrap-reverse')},
    flexLgWrapReverse() {return this.flexLg('wrap-reverse')},
    flexXlWrapReverse() {return this.flexXl('wrap-reverse')},

    //Flex Fill
    flexFill()      {return this.flex('fill')},
    flexSmFill()    {return this.flexSm('fill')},
    flexMdFill()    {return this.flexMd('fill')},
    flexLgFill()    {return this.flexLg('fill')},
    flexXlFill()    {return this.flexXl('fill')},

    //Flex Grow 0
    flexGrowZero()      {return this.flex('grow-0')},
    flexSmGrowZero()    {return this.flexSm('grow-0')},
    flexMdGrowZero()    {return this.flexMd('grow-0')},
    flexLgGrowZero()    {return this.flexLg('grow-0')},
    flexXlGrowZero()    {return this.flexXl('grow-0')},

    //Flex Grow 1
    flexGrowOne()   {return this.flex('grow-1')},
    flexSmGrowOne() {return this.flexSm('grow-1')},
    flexMdGrowOne() {return this.flexMd('grow-1')},
    flexLgGrowOne() {return this.flexLg('grow-1')},
    flexXlGrowOne() {return this.flexXl('grow-1')},

    //Flex Shrink 0
    flexShrinkZero()    {return this.flex('shrink-0')},
    flexSmShrinkZero()  {return this.flexSm('shrink-0')},
    flexMdShrinkZero()  {return this.flexMd('shrink-0')},
    flexLgShrinkZero()  {return this.flexLg('shrink-0')},
    flexXlShrinkZero()  {return this.flexXl('shrink-0')},

    //Flex Shrink 1
    flexShrinkOne()     {return this.flex('shrink-1')},
    flexSmShrinkOne()   {return this.flexSm('shrink-1')},
    flexMdShrinkOne()   {return this.flexMd('shrink-1')},
    flexLgShrinkOne()   {return this.flexLg('shrink-1')},
    flexXlShrinkOne()   {return this.flexXl('shrink-1')},
    
    //Justify Content Property
    justifyContent(value, bp)   {return this._updateFlexProperty('justify-content', bp, value)},

    //Justify Content Breakpoints
    justifyContentSm(value) {return justifyContent(value, 'sm')},
    justifyContentMd(value) {return justifyContent(value, 'md')},
    justifyContentLg(value) {return justifyContent(value, 'lg')},
    justifyContentXl(value) {return justifyContent(value, 'xl')},

    //Justify Content Start
    justifyContentStart()   {return this.justifyContent('start')},
    justifyContentSmStart() {return this.justifyContentSm('start')},
    justifyContentMdStart() {return this.justifyContentMd('start')},
    justifyContentLgStart() {return this.justifyContentLg('start')},
    justifyContentXlStart() {return this.justifyContentXl('start')},

    //Justify Content End
    justifyContentEnd()     {return this.justifyContent('end')},
    justifyContentSmEnd()   {return this.justifyContentSm('end')},
    justifyContentMdEnd()   {return this.justifyContentMd('end')},
    justifyContentLgEnd()   {return this.justifyContentLg('end')},
    justifyContentXlEnd()   {return this.justifyContentXl('end')},

    //Justify Content Center
    justifyContentCenter()      {return this.justifyContent('center')},
    justifyContentSmCenter()    {return this.justifyContentSm('center')},
    justifyContentMdCenter()    {return this.justifyContentMd('center')},
    justifyContentLgCenter()    {return this.justifyContentLg('center')},
    justifyContentXlCenter()    {return this.justifyContentXl('center')},

    //Justify Content Between
    justifyContentBetween()     {return this.justifyContent('between')},
    justifyContentSmBetween()   {return this.justifyContentSm('between')},
    justifyContentMdBetween()   {return this.justifyContentMd('between')},
    justifyContentLgBetween()   {return this.justifyContentLg('between')},
    justifyContentXlBetween()   {return this.justifyContentXl('between')},

    //Justify Content Around
    justifyContentAround()      {return this.justifyContent('around')},
    justifyContentSmAround()    {return this.justifyContentSm('around')},
    justifyContentMdAround()    {return this.justifyContentMd('around')},
    justifyContentLgAround()    {return this.justifyContentLg('around')},
    justifyContentXlAround()    {return this.justifyContentXl('around')},

    //Align Items Property
    alignItems(value, bp)   {return this._updateFlexProperty('align-items', bp, value)},

    //Align Items Breakpoints
    alignItemsSm(value) {return this.alignItems(value, 'sm')},
    alignItemsMd(value) {return this.alignItems(value, 'md')},
    alignItemsLg(value) {return this.alignItems(value, 'lg')},
    alignItemsXl(value) {return this.alignItems(value, 'xl')},

    //Align Items Start
    alignItemsStart()   {return this.alignItems('start')},
    alignItemsSmStart() {return this.alignItemsSm('start')},
    alignItemsMdStart() {return this.alignItemsMd('start')},
    alignItemsLgStart() {return this.alignItemsLg('start')},
    alignItemsXlStart() {return this.alignItemstXl('start')},

    //Align Items End
    alignItemsEnd()     {return this.alignItems('end')},
    alignItemsSmEnd()   {return this.alignItemsSm('end')},
    alignItemsMdEnd()   {return this.alignItemsMd('end')},
    alignItemsLgEnd()   {return this.alignItemsLg('end')},
    alignItemsXlEnd()   {return this.alignItemsXl('end')},

    //Align Items Center
    alignItemsCenter()      {return this.alignItems('center')},
    alignItemsSmCenter()    {return this.alignItemsSm('center')},
    alignItemsMdCenter()    {return this.alignItemsMd('center')},
    alignItemsLgCenter()    {return this.alignItemsLg('center')},
    alignItemsXlCenter()    {return this.alignItemsXl('center')},

    alignItemsBaseline()    {return this.alignItems('baseline')},
    alignItemsSmBaseline()  {return this.alignItemsSm('baseline')},
    alignItemsMdBaseline()  {return this.alignItemsMd('baseline')},
    alignItemsLgBaseline()  {return this.alignItemsLg('baseline')},
    alignItemsXlBaseline()  {return this.alignItemsXl('baseline')},

    alignItemsStretch()     {return this.alignItems('stretch')},
    alignItemsSmStretch()   {return this.alignItemsSm('stretch')},
    alignItemsMdStretch()   {return this.alignItemsMd('stretch')},
    alignItemsLgStretch()   {return this.alignItemsLg('stretch')},
    alignItemsXlStretch()   {return this.alignItemsXl('stretch')},

    //Align Content Property
    alignContent(value, bp) {return this._updateFlexProperty('align-content', bp, value)},

    //Align Content Breakpoints
    alignContentSm(value)   {return this.alignContent(value, 'sm')},
    alignContentMd(value)   {return this.alignContent(value, 'md')},
    alignContentLg(value)   {return this.alignContent(value, 'lg')},
    alignContentXl(value)   {return this.alignContent(value, 'xl')},

    //Align Content Start
    alignContentStart()     {return this.alignContent('start')},
    alignContentSmStart()   {return this.alignContentSm('start')},
    alignContentMdStart()   {return this.alignContentMd('start')},
    alignContentLgStart()   {return this.alignContentLg('start')},
    alignContentXlStart()   {return this.alignContentXl('start')},

    //Align Content End
    alignContentEnd()   {return this.alignContent('end')},
    alignContentSmEnd() {return this.alignContentSm('end')},
    alignContentMdEnd() {return this.alignContentMd('end')},
    alignContentLgEnd() {return this.alignContentLg('end')},
    alignContentXlEnd() {return this.alignContentXl('end')},

    //Align Content Center
    alignContentCenter()    {return this.alignContent('center')},
    alignContentSmCenter()  {return this.alignContentSm('center')},
    alignContentMdCenter()  {return this.alignContentMd('center')},
    alignContentLgCenter()  {return this.alignContentLg('center')},
    alignContentXlCenter()  {return this.alignContentXl('center')},

    //Align Content Between
    alignContentBetween()   {return this.alignContent('between')},
    alignContentSmBetween() {return this.alignContentSm('between')},
    alignContentMdBetween() {return this.alignContentMd('between')},
    alignContentLgBetween() {return this.alignContentLg('between')},
    alignContentXlBetween() {return this.alignContentXl('between')},

    //Align Content Around
    alignContentAround()    {return this.alignContent('around')},
    alignContentSmAround()  {return this.alignContentSm('around')},
    alignContentMdAround()  {return this.alignContentMd('around')},
    alignContentLgAround()  {return this.alignContentLg('around')},
    alignContentXlAround()  {return this.alignContentXl('around')},

    //Align Content Stretch
    alignContentStretch()   {return this.alignContent('stretch')},
    alignContentSmStretch() {return this.alignContentSm('stretch')},
    alignContentMdStretch() {return this.alignContentMd('stretch')},
    alignContentLgStretch() {return this.alignContentLg('stretch')},
    alignContentXlStretch() {return this.alignContentXl('stretch')},

    //Align Self
    alignSelf(value, bp)    {return this._updateFlexProperty('align-self', bp, value)},

    //Align Self Breakpoints
    alignSelfSm(value)  {return this.alignSelf(value, 'sm')},
    alignSelfMd(value)  {return this.alignSelf(value, 'md')},
    alignSelfLg(value)  {return this.alignSelf(value, 'lg')},
    alignSelfXl(value)  {return this.alignSelf(value, 'xl')},

    //Align Self Auto
    alignSelfAuto()     {return this.alignSelf('auto')},
    alignSelfSmAuto()   {return this.alignSelfSm('auto')},
    alignSelfMdAuto()   {return this.alignSelfMd('auto')},
    alignSelfLgAuto()   {return this.alignSelfLg('auto')},
    alignSelfXlAuto()   {return this.alignSelfXl('auto')},

    //Align Self Start
    alignSelfStart()    {return this.alignSelf('start')},
    alignSelfSmStart()  {return this.alignSelfSm('start')},
    alignSelfMdStart()  {return this.alignSelfMd('start')},
    alignSelfLgStart()  {return this.alignSelfLg('start')},
    alignSelfXlStart()  {return this.alignSelfXl('start')},

    //Align Self End
    alignSelfEnd()      {return this.alignSelf('end')},
    alignSelfSmEnd()    {return this.alignSelfSm('end')},
    alignSelfMdEnd()    {return this.alignSelfMd('end')},
    alignSelfLgEnd()    {return this.alignSelfLg('end')},
    alignSelfXlEnd()    {return this.alignSelfXl('end')},

    //Align Self Center
    alignSelfCenter()   {return this.alignSelf('center')},
    alignSelfSmCenter() {return this.alignSelfSm('center')},
    alignSelfMdCenter() {return this.alignSelfMd('center')},
    alignSelfLgCenter() {return this.alignSelfLg('center')},
    alignSelfXlCenter() {return this.alignSelfXl('center')},

    //Align Self Baseline
    alignSelfBaseline()     {return this.alignSelf('baseline')},
    alignSelfSmBaseline()   {return this.alignSelfSm('baseline')},
    alignSelfMdBaseline()   {return this.alignSelfMd('baseline')},
    alignSelfLgBaseline()   {return this.alignSelfLg('baseline')},
    alignSelfXlBaseline()   {return this.alignSelfXl('baseline')},

    //Align Self Stretch
    alignSelfStretch()      {return this.alignSelf('stretch')},
    alignSelfSmStretch()    {return this.alignSelfSm('stretch')},
    alignSelfMdStretch()    {return this.alignSelfMd('stretch')},
    alignSelfLgStretch()    {return this.alignSelfLg('stretch')},
    alignSelfXlStretch()    {return this.alignSelfXl('stretch')},

    //Order Property
    order(value, bp)    {return this._updateFlexProperty('order', bp, value)},
    
    //Order breakpoints
    orderSm(value)  {return this.order(value, 'sm')},
    orderMd(value)  {return this.order(value, 'md')},
    orderLg(value)  {return this.order(value, 'lg')},
    orderXl(value)  {return this.order(value, 'xl')},

    //Order First
    orderFirst()    {return this.order('first')},
    orderSmFirst()  {return this.orderSm('first')},
    orderMdFirst()  {return this.orderMd('first')},
    orderLgFirst()  {return this.orderLg('first')},
    orderXlFirst()  {return this.orderXl('first')},

    //Order Last
    orderLast()     {return this.order('last')},
    orderSmLast()   {return this.orderSm('last')},
    orderMdLast()   {return this.orderMd('last')},
    orderLgLast()   {return this.orderLg('last')},
    orderXlLast()   {return this.orderXl('last')},
}

Object.assign(HTMLElement.prototype, breakpointMixin);
Object.assign(HTMLElement.prototype, spacingMixin);
Object.assign(HTMLElement.prototype, displayMixin);
Object.assign(HTMLElement.prototype, flexMixin);

String.prototype.toKebabCase = function() {
    return this.replace(/[A-Z]/g, x => '-' + x.toLowerCase());
}