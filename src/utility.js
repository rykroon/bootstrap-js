//Breakpoint Mixin for Responsive Properties
let breakpointMixin = {
    get _breakpoints() {
        return [undefined, 'sm', 'md', 'lg', 'xl'];
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
    mSm(value)  {return this.m(value, 'sm')},
    mtSm(value) {return this.mt(value, 'sm')},
    mbSm(value) {return this.mb(value, 'sm')},
    mlSm(value) {return this.ml(value, 'sm')},
    mrSm(value) {return this.mr(value, 'sm')},
    mxSm(value) {return this.mx(value, 'sm')},
    mySm(value) {return this.my(value, 'sm')},

    pSm(value)  {return this.p(value, 'sm')},
    ptSm(value) {return this.pt(value, 'sm')},
    pbSm(value) {return this.pb(value, 'sm')},
    plSm(value) {return this.pl(value, 'sm')},
    prSm(value) {return this.pr(value, 'sm')},
    pxSm(value) {return this.px(value, 'sm')},
    pySm(value) {return this.py(value, 'sm')},

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

    d(value, bp)    {return this._updateDisplayProperty('d', bp, value)},

    dNone()         {return this.d('none')},
    dInline()       {return this.d('inline')},
    dInlineBlock()  {return this.d('inline-block')},
    dBlock()        {return this.d('block')},
    dTable()        {return this.d('table')},
    dTableRow()     {return this.d('table-row')},
    dTableCell()    {return this.d('table-cell')},
    dFlex()         {return this.d('flex')},
    dInlineFlex()   {return this.d('inline-flex')},

    dSmNone()           {return this.d('none', 'sm')},
    dSmInline()         {return this.d('inline', 'sm')},
    dSmInlineBlock()    {return this.d('inline-block', 'sm')},
    dSmBlock()          {return this.d('block', 'sm')},
    dSmTable()          {return this.d('table', 'sm')},
    dSmTableRow()       {return this.d('table-row', 'sm')},
    dSmTableCell()      {return this.d('table-cell', 'sm')},
    dSmFlex()           {return this.d('flex', 'sm')},
    dSmInlineFlex()     {return this.d('inline-flex', 'sm')},

    dMdNone()           {return this.d('none', 'md')},
    dMdInline()         {return this.d('inline', 'md')},
    dMdInlineBlock()    {return this.d('inline-block', 'md')},
    dMdBlock()          {return this.d('block', 'md')},
    dMdTable()          {return this.d('table', 'md')},
    dMdTableRow()       {return this.d('table-row', 'md')},
    dMdTableCell()      {return this.d('table-cell', 'md')},
    dMdFlex()           {return this.d('flex', 'md')},
    dMdInlineFlex()     {return this.d('inline-flex', 'md')},

    dLgNone()           {return this.d('none', 'lg')},
    dLgInline()         {return this.d('inline', 'lg')},
    dLgInlineBlock()    {return this.d('inline-block', 'lg')},
    dLgBlock()          {return this.d('block', 'lg')},
    dLgTable()          {return this.d('table', 'lg')},
    dLgTableRow()       {return this.d('table-row', 'lg')},
    dLgTableCell()      {return this.d('table-cell', 'lg')},
    dLgFlex()           {return this.d('flex', 'lg')},
    dLgInlineFlex()     {return this.d('inline-flex', 'lg')},

    dXlNone()           {return this.d('none', 'xl')},
    dXlInline()         {return this.d('inline', 'xl')},
    dXlInlineBlock()    {return this.d('inline-block', 'xl')},
    dXlBlock()          {return this.d('block', 'xl')},
    dXlTable()          {return this.d('table', 'xl')},
    dXlTableRow()       {return this.d('table-row', 'xl')},
    dXlTableCell()      {return this.d('table-cell', 'xl')},
    dXlFlex()           {return this.d('flex', 'xl')},
    dXlInlineFlex()     {return this.d('inline-flex', 'xl')},
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

    flex(value, bp) {return this._updateFlexProperty('flex', bp, value)},
    
    flexRow()           {return this.flex('row')},
    flexColumn()        {return this.flex('column')},
    flexRowReverse()    {return this.flex('row-reverse')},
    flexColumnReverse() {return this.flex('column-reverse')},
    flexWrap()          {return this.flex('wrap')},
    flexNoWrap()        {return this.flex('no-wrap')},
    flexWrapReverse()   {return this.flex('wrap-reverse')},
    flexFill()          {return this.flex('fill')},
    flexGrowZero()      {return this.flex('grow-0')},
    flexGrowOne()       {return this.flex('grow-1')},
    flexShrinkZero()    {return this.flex('shrink-0')},
    flexShrinkOne()     {return this.flex('shrink-1')},
    
    justifyContent(value, bp)   {return this._updateFlexProperty('justify-content', bp, value)},

    justifyContentStart()   {return this.justifyContent('start')},
    justifyContentEnd()     {return this.justifyContent('end')},
    justifyContentCenter()  {return this.justifyContent('center')},
    justifyContentBetween() {return this.justifyContent('between')},
    justifyContentAround()  {return this.justifyContent('around')},

    alignItems(value, bp)   {return this._updateFlexProperty('align-items', bp, value)},

    alignItemsStart()       {return this.alignItems('start')},
    alignItemsEnd()         {return this.alignItems('end')},
    alignItemsCenter()      {return this.alignItems('center')},
    alignItemsBaseline()    {return this.alignItems('baseline')},
    alignItemsStretch()     {return this.alignItems('stretch')},

    alignContent(value, bp)   {return this._updateFlexProperty('align-content', bp, value)},

    alignContentStart()     {return this.alignContent('start')},
    alignContentEnd()       {return this.alignContent('end')},
    alignContentCenter()    {return this.alignContent('center')},
    alignContentBetween()   {return this.alignContent('between')},
    alignContentAround()    {return this.alignContent('around')},
    alignContentStretch()   {return this.alignContent('stretch')},

    alignSelf(value, bp)   {return this._updateFlexProperty('align-self', bp, value)},

    alignSelfAuto()     {return this.alignSelf('auto')},
    alignSelfStart()    {return this.alignSelf('start')},
    alignSelfEnd()      {return this.alignSelf('end')},
    alignSelfCenter()   {return this.alignSelf('center')},
    alignSelfBaseline() {return this.alignSelf('baseline')},
    alignSelfStretch()  {return this.alignSelf('stretch')},

    //Small

    flexSmRow()           {return this.flex('row', 'sm')},
    flexSmColumn()        {return this.flex('column', 'sm')},
    flexSmRowReverse()    {return this.flex('row-reverse', 'sm')},
    flexSmColumnReverse() {return this.flex('column-reverse', 'sm')},
    flexSmWrap()          {return this.flex('wrap', 'sm')},
    flexSmNoWrap()        {return this.flex('no-wrap', 'sm')},
    flexSmWrapReverse()   {return this.flex('wrap-reverse', 'sm')},
    flexSmFill()          {return this.flex('fill', 'sm')},
    flexSmGrowZero()      {return this.flex('grow-0', 'sm')},
    flexSmGrowOne()       {return this.flex('grow-1', 'sm')},
    flexSmShrinkZero()    {return this.flex('shrink-0', 'sm')},
    flexSmShrinkOne()     {return this.flex('shrink-1', 'sm')},

    justifyContentSmStart()   {return this.justifyContent('start', 'sm')},
    justifyContentSmEnd()     {return this.justifyContent('end', 'sm')},
    justifyContentSmCenter()  {return this.justifyContent('center', 'sm')},
    justifyContentSmBetween() {return this.justifyContent('between', 'sm')},
    justifyContentSmAround()  {return this.justifyContent('around', 'sm')},

    alignItemsSmStart()       {return this.alignItems('start', 'sm')},
    alignItemsSmEnd()         {return this.alignItems('end', 'sm')},
    alignItemsSmCenter()      {return this.alignItems('center', 'sm')},
    alignItemsSmBaseline()    {return this.alignItems('baseline', 'sm')},
    alignItemsSmStretch()     {return this.alignItems('stretch', 'sm')},

    alignContentSmStart()     {return this.alignContent('start', 'sm')},
    alignContentSmEnd()       {return this.alignContent('end', 'sm')},
    alignContentSmCenter()    {return this.alignContent('center', 'sm')},
    alignContentSmBetween()   {return this.alignContent('between', 'sm')},
    alignContentSmAround()    {return this.alignContent('around', 'sm')},
    alignContentSmStretch()   {return this.alignContent('stretch', 'sm')},

    alignSelfSmAuto()     {return this.alignSelf('auto', 'sm')},
    alignSelfSmStart()    {return this.alignSelf('start', 'sm')},
    alignSelfSmEnd()      {return this.alignSelf('end', 'sm')},
    alignSelfSmCenter()   {return this.alignSelf('center', 'sm')},
    alignSelfSmBaseline() {return this.alignSelf('baseline', 'sm')},
    alignSelfSmStretch()  {return this.alignSelf('stretch', 'sm')},

    //Medium

    flexMdRow()           {return this.flex('row', 'md')},
    flexMdColumn()        {return this.flex('column', 'md')},
    flexMdRowReverse()    {return this.flex('row-reverse', 'md')},
    flexMdColumnReverse() {return this.flex('column-reverse', 'md')},
    flexMdWrap()          {return this.flex('wrap', 'md')},
    flexMdNoWrap()        {return this.flex('no-wrap', 'md')},
    flexMdWrapReverse()   {return this.flex('wrap-reverse', 'md')},
    flexMdFill()          {return this.flex('fill', 'md')},
    flexMdGrowZero()      {return this.flex('grow-0', 'md')},
    flexMdGrowOne()       {return this.flex('grow-1', 'md')},
    flexMdShrinkZero()    {return this.flex('shrink-0', 'md')},
    flexMdShrinkOne()     {return this.flex('shrink-1', 'md')},

    justifyContentMdStart()   {return this.justifyContent('start', 'md')},
    justifyContentMdEnd()     {return this.justifyContent('end', 'md')},
    justifyContentMdCenter()  {return this.justifyContent('center', 'md')},
    justifyContentMdBetween() {return this.justifyContent('between', 'md')},
    justifyContentMdAround()  {return this.justifyContent('around', 'md')},

    alignItemsMdStart()       {return this.alignItems('start', 'md')},
    alignItemsMdEnd()         {return this.alignItems('end', 'md')},
    alignItemsMdCenter()      {return this.alignItems('center', 'md')},
    alignItemsMdBaseline()    {return this.alignItems('baseline', 'md')},
    alignItemsMdStretch()     {return this.alignItems('stretch', 'md')},

    alignContentMdStart()     {return this.alignContent('start', 'md')},
    alignContentMdEnd()       {return this.alignContent('end', 'md')},
    alignContentMdCenter()    {return this.alignContent('center', 'md')},
    alignContentMdBetween()   {return this.alignContent('between', 'md')},
    alignContentMdAround()    {return this.alignContent('around', 'md')},
    alignContentMdStretch()   {return this.alignContent('stretch', 'md')},

    alignSelfMdAuto()     {return this.alignSelf('auto', 'md')},
    alignSelfMdStart()    {return this.alignSelf('start', 'md')},
    alignSelfMdEnd()      {return this.alignSelf('end', 'md')},
    alignSelfMdCenter()   {return this.alignSelf('center', 'md')},
    alignSelfMdBaseline() {return this.alignSelf('baseline', 'md')},
    alignSelfMdStretch()  {return this.alignSelf('stretch', 'md')},

    //Large

    flexLgRow()           {return this.flex('row', 'lg')},
    flexLgColumn()        {return this.flex('column', 'lg')},
    flexLgRowReverse()    {return this.flex('row-reverse', 'lg')},
    flexLgColumnReverse() {return this.flex('column-reverse', 'lg')},
    flexLgWrap()          {return this.flex('wrap', 'lg')},
    flexLgNoWrap()        {return this.flex('no-wrap', 'lg')},
    flexLgWrapReverse()   {return this.flex('wrap-reverse', 'lg')},
    flexLgFill()          {return this.flex('fill', 'lg')},
    flexLgGrowZero()      {return this.flex('grow-0', 'lg')},
    flexLgGrowOne()       {return this.flex('grow-1', 'lg')},
    flexLgShrinkZero()    {return this.flex('shrink-0', 'lg')},
    flexLgShrinkOne()     {return this.flex('shrink-1', 'lg')},

    justifyContentLgStart()   {return this.justifyContent('start', 'lg')},
    justifyContentLgEnd()     {return this.justifyContent('end', 'lg')},
    justifyContentLgCenter()  {return this.justifyContent('center', 'lg')},
    justifyContentLgBetween() {return this.justifyContent('between', 'lg')},
    justifyContentLgAround()  {return this.justifyContent('around', 'lg')},

    alignItemsLgStart()       {return this.alignItems('start', 'lg')},
    alignItemsLgEnd()         {return this.alignItems('end', 'lg')},
    alignItemsLgCenter()      {return this.alignItems('center', 'lg')},
    alignItemsLgBaseline()    {return this.alignItems('baseline', 'lg')},
    alignItemsLgStretch()     {return this.alignItems('stretch', 'lg')},

    alignContentLgStart()     {return this.alignContent('start', 'lg')},
    alignContentLgEnd()       {return this.alignContent('end', 'lg')},
    alignContentLgCenter()    {return this.alignContent('center', 'lg')},
    alignContentLgBetween()   {return this.alignContent('between', 'lg')},
    alignContentLgAround()    {return this.alignContent('around', 'lg')},
    alignContentLgStretch()   {return this.alignContent('stretch', 'lg')},

    alignSelfLgAuto()     {return this.alignSelf('auto', 'lg')},
    alignSelfLgStart()    {return this.alignSelf('start', 'lg')},
    alignSelfLgEnd()      {return this.alignSelf('end', 'lg')},
    alignSelfLgCenter()   {return this.alignSelf('center', 'lg')},
    alignSelfLgBaseline() {return this.alignSelf('baseline', 'lg')},
    alignSelfLgStretch()  {return this.alignSelf('stretch', 'lg')},

   //Extra Large

   flexXlRow()           {return this.flex('row', 'xl')},
   flexXlColumn()        {return this.flex('column', 'xl')},
   flexXlRowReverse()    {return this.flex('row-reverse', 'xl')},
   flexXlColumnReverse() {return this.flex('column-reverse', 'xl')},
   flexXlWrap()          {return this.flex('wrap', 'xl')},
   flexXlNoWrap()        {return this.flex('no-wrap', 'xl')},
   flexXlWrapReverse()   {return this.flex('wrap-reverse', 'xl')},
   flexXlFill()          {return this.flex('fill', 'xl')},
   flexXlGrowZero()      {return this.flex('grow-0', 'xl')},
   flexXlGrowOne()       {return this.flex('grow-1', 'xl')},
   flexXlShrinkZero()    {return this.flex('shrink-0', 'xl')},
   flexXlShrinkOne()     {return this.flex('shrink-1', 'xl')},

   justifyContentXlStart()   {return this.justifyContent('start', 'xl')},
   justifyContentXlEnd()     {return this.justifyContent('end', 'xl')},
   justifyContentXlCenter()  {return this.justifyContent('center', 'xl')},
   justifyContentXlBetween() {return this.justifyContent('between', 'xl')},
   justifyContentXlAround()  {return this.justifyContent('around', 'xl')},

   alignItemsXlStart()       {return this.alignItems('start', 'xl')},
   alignItemsXlEnd()         {return this.alignItems('end', 'xl')},
   alignItemsXlCenter()      {return this.alignItems('center', 'xl')},
   alignItemsXlBaseline()    {return this.alignItems('baseline', 'xl')},
   alignItemsXlStretch()     {return this.alignItems('stretch', 'xl')},

   alignContentXlStart()     {return this.alignContent('start', 'xl')},
   alignContentXlEnd()       {return this.alignContent('end', 'xl')},
   alignContentXlCenter()    {return this.alignContent('center', 'xl')},
   alignContentXlBetween()   {return this.alignContent('between', 'xl')},
   alignContentXlAround()    {return this.alignContent('around', 'xl')},
   alignContentXlStretch()   {return this.alignContent('stretch', 'xl')},

   alignSelfXlAuto()     {return this.alignSelf('auto', 'xl')},
   alignSelfXlStart()    {return this.alignSelf('start', 'xl')},
   alignSelfXlEnd()      {return this.alignSelf('end', 'xl')},
   alignSelfXlCenter()   {return this.alignSelf('center', 'xl')},
   alignSelfXlBaseline() {return this.alignSelf('baseline', 'xl')},
   alignSelfXlStretch()  {return this.alignSelf('stretch', 'xl')},

    //Order
    order(value, bp)    {return this._updateFlexProperty('order', bp, value)},
    orderSmall(value)   {return this.order(value, 'sm')},
    orderMedium(value)  {return this.order(value, 'md')},
    orderLarge(value)   {return this.order(value, 'lg')},
    orderMedium(value)  {return this.order(value, 'xl')},

    //Order First
    orderFirst(bp)      {return this.order('first', bp)},
    orderSmallFirst()   {return this.orderFirst('sm')},
    orderMediumFirst()  {return this.orderFirst('md')},
    orderLargeFirst()   {return this.orderFirst('lg')},
    orderMediumFirst()  {return this.orderFirst('xl')},

    //Order Last
    orderLast(bp)      {return this.order('last', bp)},
    orderSmallLast()   {return this.orderLast('sm')},
    orderMediumLast()  {return this.orderLast('md')},
    orderLargeLast()   {return this.orderLast('lg')},
    orderMediumLast()  {return this.orderLast('xl')},
}

Object.assign(HTMLElement.prototype, breakpointMixin);
Object.assign(HTMLElement.prototype, spacingMixin);
Object.assign(HTMLElement.prototype, displayMixin);
Object.assign(HTMLElement.prototype, flexMixin);