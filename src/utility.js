//Breakpoint Mixin for Responsive Properties
let breakpointMixin = {
    get _breakpoints() {
        return [undefined, 'sm', 'md', 'lg', 'xl'];
    },

    get _responsiveProperties() {
        return {}
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

    _searchForResponsiveProperty(prop, bp) {
        let classes = this.className.split(" ");
        let search = prop;
        if (bp !== undefined) search += '-' + bp;

        for (let idx in classes) {
            let _class = classes[idx];
            if (search == _class) return _class;

            let parts = _class.split('-');
            if (parts[0] != prop) continue;

            let validBp = this._isValidBreakpoint(parts[1]);
            if (bp === undefined && !validBp) return _class;
            if (bp == parts[1]) return _class;
        }

        return false;
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
        return className;
	},

	_removeResponsiveProperty(prop, bp) {
        //Search for class name that matches property and breakpoint
        let className = this._searchForResponsiveProperty(prop, bp);
        this.classList.remove(className);
        
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
            'm': [0, 1, 2, 3, 4, 5, 'auto'],
            'mt': [0, 1, 2, 3, 4, 5, 'auto'],
            'mb': [0, 1, 2, 3, 4, 5, 'auto'],
            'ml': [0, 1, 2, 3, 4, 5, 'auto'],
            'mr': [0, 1, 2, 3, 4, 5, 'auto'],
            'mx': [0, 1, 2, 3, 4, 5, 'auto'],
            'my': [0, 1, 2, 3, 4, 5, 'auto'],
            'p': [0, 1, 2, 3, 4, 5, 'auto'],
            'pt': [0, 1, 2, 3, 4, 5, 'auto'],
            'pb': [0, 1, 2, 3, 4, 5, 'auto'],
            'pl': [0, 1, 2, 3, 4, 5, 'auto'],
            'pr': [0, 1, 2, 3, 4, 5, 'auto'],
            'px': [0, 1, 2, 3, 4, 5, 'auto'],
            'py': [0, 1, 2, 3, 4, 5, 'auto']
        }
    },

    _updateSpacingProperty(prop, bp, value) {
        if (! (prop in this._responsiveProperties)) {
            this._responsiveProperties[prop] = this._spacingProperties[prop];
        }

        return this._updateResponsiveProperty(prop, bp, value);
    },

    //Margin
    margin(value, bp)       {return this._updateSpacingProperty('m', bp, value);},
    marginSmall(value)      {return this.margin(value, 'sm');},
    marginMedium(value)     {return this.margin(value, 'md');},
    marginLarge(value)      {return this.margin(value, 'lg');},
    marginExtraLarge(value) {return this.margin(value, 'xl');},
    
    //Margin Top
    marginTop(value, bp)        {return this._updateSpacingProperty('mt', bp, value);},
    marginTopSmall(value)       {return this.marginTop(value, 'sm');},
    marginTopMedium(value)      {return this.marginTop(value, 'md');},
    marginTopLarge(value)       {return this.marginTop(value, 'lg');},
    marginTopExtraLarge(value)  {return this.marginTop(value, 'xl');},

    //Margin Bottom
    marginBottom(value, bp)        {return this._updateSpacingProperty('mb', bp, value);},
    marginBottomSmall(value)       {return this.marginBottom(value, 'sm');},
    marginBottomMedium(value)      {return this.marginBottom(value, 'md');},
    marginBottomLarge(value)       {return this.marginBottom(value, 'lg');},
    marginBottomExtraLarge(value)  {return this.marginBottom(value, 'xl');},

    //Margin Left
    marginLeft(value, bp)        {return this._updateSpacingProperty('ml', bp, value);},
    marginLeftSmall(value)       {return this.marginLeft(value, 'sm');},
    marginLeftMedium(value)      {return this.marginLeft(value, 'md');},
    marginLeftLarge(value)       {return this.marginLeft(value, 'lg');},
    marginLeftExtraLarge(value)  {return this.marginLeft(value, 'xl');},

    //Margin Right
    marginRight(value, bp)        {return this._updateSpacingProperty('mr', bp, value);},
    marginRightSmall(value)       {return this.marginRight(value, 'sm');},
    marginRightMedium(value)      {return this.marginRight(value, 'md');},
    marginRightLarge(value)       {return this.marginRight(value, 'lg');},
    marginRightExtraLarge(value)  {return this.marginRight(value, 'xl');},

    //Margin X
    marginX(value, bp)        {return this._updateSpacingProperty('mx', bp, value);},
    marginXSmall(value)       {return this.marginX(value, 'sm');},
    marginXMedium(value)      {return this.marginX(value, 'md');},
    marginXLarge(value)       {return this.marginX(value, 'lg');},
    marginXExtraLarge(value)  {return this.marginX(value, 'xl');},

    //Margin Y
    marginY(value, bp)        {return this._updateSpacingProperty('my', bp, value);},
    marginYSmall(value)       {return this.marginY(value, 'sm');},
    marginYMedium(value)      {return this.marginY(value, 'md');},
    marginYLarge(value)       {return this.marginY(value, 'lg');},
    marginYExtraLarge(value)  {return this.marginY(value, 'xl');},

    //Padding
    padding(value, bp)       {return this._updateSpacingProperty('p', bp, value);},
    paddingSmall(value)      {return this.padding(value, 'sm');},
    paddingMedium(value)     {return this.padding(value, 'md');},
    paddingLarge(value)      {return this.padding(value, 'lg');},
    paddingExtraLarge(value) {return this.padding(value, 'xl');},
    
    //padding Top
    paddingTop(value, bp)        {return this._updateSpacingProperty('pt', bp, value);},
    paddingTopSmall(value)       {return this.paddingTop(value, 'sm');},
    paddingTopMedium(value)      {return this.paddingTop(value, 'md');},
    paddingTopLarge(value)       {return this.paddingTop(value, 'lg');},
    paddingTopExtraLarge(value)  {return this.paddingTop(value, 'xl');},

    //padding Bottom
    paddingBottom(value, bp)        {return this._updateSpacingProperty('pb', bp, value);},
    paddingBottomSmall(value)       {return this.paddingBottom(value, 'sm');},
    paddingBottomMedium(value)      {return this.paddingBottom(value, 'md');},
    paddingBottomLarge(value)       {return this.paddingBottom(value, 'lg');},
    paddingBottomExtraLarge(value)  {return this.paddingBottom(value, 'xl');},

    //padding Left
    paddingLeft(value, bp)        {return this._updateSpacingProperty('pl', bp, value);},
    paddingLeftSmall(value)       {return this.paddingLeft(value, 'sm');},
    paddingLeftMedium(value)      {return this.paddingLeft(value, 'md');},
    paddingLeftLarge(value)       {return this.paddingLeft(value, 'lg');},
    paddingLeftExtraLarge(value)  {return this.paddingLeft(value, 'xl');},

    //padding Right
    paddingRight(value, bp)        {return this._updateSpacingProperty('pr', bp, value);},
    paddingRightSmall(value)       {return this.paddingRight(value, 'sm');},
    paddingRightMedium(value)      {return this.paddingRight(value, 'md');},
    paddingRightLarge(value)       {return this.paddingRight(value, 'lg');},
    paddingRightExtraLarge(value)  {return this.paddingRight(value, 'xl');},

    //padding X
    paddingX(value, bp)        {return this._updateSpacingProperty('px', bp, value);},
    paddingXSmall(value)       {return this.paddingX(value, 'sm');},
    paddingXMedium(value)      {return this.paddingX(value, 'md');},
    paddingXLarge(value)       {return this.paddingX(value, 'lg');},
    paddingXExtraLarge(value)  {return this.paddingX(value, 'xl');},

    //padding Y
    paddingY(value, bp)        {return this._updateSpacingProperty('py', bp, value);},
    paddingYSmall(value)       {return this.paddingY(value, 'sm');},
    paddingYMedium(value)      {return this.paddingY(value, 'md');},
    paddingYLarge(value)       {return this.paddingY(value, 'lg');},
    paddingYExtraLarge(value)  {return this.paddingY(value, 'xl');},

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
                'table-cell',
                'table-row',
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

    display(value, bp)          {return this._updateDisplayProperty('d', bp, value);},
    displaySmall(value)         {return this.display(value, 'sm');},
    displayMedium(value)        {return this.display(value, 'md');},
    displayLarge(value)         {return this.display(value, 'lg');},
    displayExtraLarge(value)    {return this.display(value, 'xl');},

}

let flexMixin = {
    get _flexProperties() {
        return {
            'flex': [
                'row', 
                'row-reverse',
                'column', 
                'column-reverse', 
                'fill',
                'grow-0',
                'grow-1',
                'shrink-0',
                'shrink-1',
                'wrap',
                'nowrap',
                'wrap-reverse'
            ],
            'justify-content': ['start', 'end', 'center', 'between', 'around'],
            'align-items': ['start', 'end', 'center', 'baseline', 'stretch'],
            'align-self': ['start', 'end', 'center', 'baseline', 'stretch'],
            'order': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
    },

    _updateFlexProperty(prop, bp, value) {
        if (! (prop in this._responsiveProperties)) {
            this._responsiveProperties[prop] = this._flexProperties[prop];
        }

        return this._updateResponsiveProperty(prop, bp, value);
    },

    //Flex
    flex(value, bp)         {return this._updateFlexProperty('flex', bp, value);},
    flexSmall(value)        {return this.flex(value, 'sm');},
    flexMedium(value)       {return this.flex(value, 'md');},
    flexLarge(value)        {return this.flex(value, 'lg');},
    flexExtraLarge(value)   {return this.flex(value, 'xl');},

    //Flex Row
    flexRow(bp)         {return this.flex('row', bp);},
    flexSmallRow()      {return this.flexRow('sm');},
    flexMediumRow()     {return this.flexRow('md');},
    flexLargeRow()      {return this.flexRow('lg');},
    flexExtraLargeRow() {return this.flexRow('xl');},

    //Row Reverse
    flexRowReverse(bp)         {return this.flex('row-reverse', bp);},
    flexSmallRowReverse()      {return this.flexRowReverse('sm');},
    flexMediumRowReverse()     {return this.flexRowReverse('md');},
    flexLargeRowReverse()      {return this.flexRowReverse('lg');},
    flexExtraLargeRowReverse() {return this.flexRowReverse('xl');},

    //Flex Column
    flexColumn(bp)         {return this.flex('column', bp);},
    flexSmallColumn()      {return this.flexColumn('sm');},
    flexMediumColumn()     {return this.flexColumn('md');},
    flexLargeColumn()      {return this.flexColumn('lg');},
    flexExtraLargeColumn() {return this.flexColumn('xl');},

    //Column Reverse
    flexColumnReverse(bp)         {return this.flex('column-reverse', bp);},
    flexSmallColumnReverse()      {return this.flexColumnReverse('sm');},
    flexMediumColumnReverse()     {return this.flexColumnReverse('md');},
    flexLargeColumnReverse()      {return this.flexColumnReverse('lg');},
    flexExtraLargeColumnReverse() {return this.flexColumnReverse('xl');},

    //Flex Fill
    flexFill(bp)         {return this.flex('fill', bp);},
    flexSmallFill()      {return this.flexFill('sm');},
    flexMediumFill()     {return this.flexFill('md');},
    flexLargeFill()      {return this.flexFill('lg');},
    flexExtraLargeFill() {return this.flexFill('xl');},

    //Flex Grow Off
    flexGrowOff(bp)         {return this.flex('grow-0', bp);},
    flexSmallGrowOff()      {return this.flexGrowOff('sm');},
    flexMediumGrowOff()     {return this.flexGrowOff('md');},
    flexLargeGrowOff()      {return this.flexGrowOff('lg');},
    flexExtraLargeGrowOff() {return this.flexGrowOff('xl');},
    
    //Flex Grow On
    flexGrowOn(bp)         {return this.flex('grow-1', bp);},
    flexSmallGrowOn()      {return this.flexGrowOn('sm');},
    flexMediumGrowOn()     {return this.flexGrowOn('md');},
    flexLargeGrowOn()      {return this.flexGrowOn('lg');},
    flexExtraLargeGrowOn() {return this.flexGrowOn('xl');},

    //Flex Shrink Off
    flexShrinkOff(bp)         {return this.flex('shrink-0', bp);},
    flexSmallShrinkOff()      {return this.flexShrinkOff('sm');},
    flexMediumShrinkOff()     {return this.flexShrinkOff('md');},
    flexLargeShrinkOff()      {return this.flexShrinkOff('lg');},
    flexExtraLargeShrinkOff() {return this.flexShrinkOff('xl');},
    
    //Flex Shrink On
    flexShrinkOn(bp)         {return this.flex('shrink-1', bp);},
    flexSmallShrinkOn()      {return this.flexShrinkOn('sm');},
    flexMediumShrinkOn()     {return this.flexShrinkOn('md');},
    flexLargeShrinkOn()      {return this.flexShrinkOn('lg');},
    flexExtraLargeShrinkOn() {return this.flexShrinkOn('xl');},

    //Flex Wrap
    flexWrap(bp)         {return this.flex('wrap', bp);},
    flexSmallWrap()      {return this.flexWrap('sm');},
    flexMediumWrap()     {return this.flexWrap('md');},
    flexLargeWrap()      {return this.flexWrap('lg');},
    flexExtraLargeWrap() {return this.flexWrap('xl');},

    //Flex No Wrap
    flexNoWrap(bp)         {return this.flex('nowrap', bp);},
    flexSmallNoWrap()      {return this.flexNoWrap('sm');},
    flexMediumNoWrap()     {return this.flexNoWrap('md');},
    flexLargeNoWrap()      {return this.flexNoWrap('lg');},
    flexExtraLargeNoWrap() {return this.flexNoWrap('xl');},

    //Flex Wrap Reverse
    flexWrapReverse(bp)         {return this.flex('wrap-reverse', bp);},
    flexSmallWrapReverse()      {return this.flexWrapReverse('sm');},
    flexMediumWrapReverse()     {return this.flexWrapReverse('md');},
    flexLargeWrapReverse()      {return this.flexWrapReverse('lg');},
    flexExtraLargeWrapReverse() {return this.flexWrapReverse('xl');},

    //Justify Content
    justifyContent(value, bp)       {return this._updateFlexProperty('justify-content', bp, value);},
    justifyContentSmall(value)      {return this.justifyContent(value, 'sm')},
    justifyContentMedium(value)     {return this.justifyContent(value, 'md')},
    justifyContentLarge(value)      {return this.justifyContent(value, 'lg')},
    justifyContentExtraLarge(value) {return this.justifyContent(value, 'xl')},

    //Justify Content Start
    justifyContentStart(bp)         {return this.justifyContent('start', bp);},
    justifyContentSmallStart()      {return this.justifyContentStart('sm')},
    justifyContentMediumStart()     {return this.justifyContentStart('md')},
    justifyContentLargeStart()      {return this.justifyContentStart('lg')},
    justifyContentExtraLargeStart() {return this.justifyContentStart('xl')},

    //Justify Content End
    justifyContentEnd(bp)         {return this.justifyContent('end', bp);},
    justifyContentSmallEnd()      {return this.justifyContentEnd('sm')},
    justifyContentMediumEnd()     {return this.justifyContentEnd('md')},
    justifyContentLargeEnd()      {return this.justifyContentEnd('lg')},
    justifyContentExtraLargeEnd() {return this.justifyContentEnd('xl')},

    //Justify Content Center
    justifyContentCenter(bp)         {return this.justifyContent('center', bp);},
    justifyContentSmallCenter()      {return this.justifyContentCenter('sm')},
    justifyContentMediumCenter()     {return this.justifyContentCenter('md')},
    justifyContentLargeCenter()      {return this.justifyContentCenter('lg')},
    justifyContentExtraLargeCenter() {return this.justifyContentCenter('xl')},

    //Justify Content Center
    justifyContentBetween(bp)         {return this.justifyContent('between', bp);},
    justifyContentSmallBetween()      {return this.justifyContentBetween('sm')},
    justifyContentMediumBetween()     {return this.justifyContentBetween('md')},
    justifyContentLargeBetween()      {return this.justifyContentBetween('lg')},
    justifyContentExtraLargeBetween() {return this.justifyContentBetween('xl')},

    //Justify Content Around
    justifyContentAround(bp)         {return this.justifyContent('around', bp);},
    justifyContentSmallAround()      {return this.justifyContentAround('sm')},
    justifyContentMediumAround()     {return this.justifyContentAround('md')},
    justifyContentLargeAround()      {return this.justifyContentAround('lg')},
    justifyContentExtraLargeAround() {return this.justifyContentAround('xl')},

    //Align Items
    alignItems(value, bp)       {return this._updateFlexProperty('align-items', bp, value);},
    alignItemsSmall(value)      {return this.alignItems(value, 'sm')},
    alignItemsMedium(value)     {return this.alignItems(value, 'md')},
    alignItemsLarge(value)      {return this.alignItems(value, 'lg')},
    alignItemsExtraLarge(value) {return this.alignItems(value, 'xl')},

    //Align Items Start
    alignItemsStart(bp)         {return this.alignItems('start', bp);},
    alignItemsSmallStart()      {return this.alignItemsStart('sm')},
    alignItemsMediumStart()     {return this.alignItemsStart('md')},
    alignItemsLargeStart()      {return this.alignItemsStart('lg')},
    alignItemsExtraLargeStart() {return this.alignItemsStart('xl')},

    //Align Items End
    alignItemsEnd(bp)           {return this.alignItems('end', bp);},
    alignItemsSmallEnd()        {return this.alignItemsEnd('sm')},
    alignItemsMediumEnd()       {return this.alignItemsEnd('md')},
    alignItemsLargeEnd()        {return this.alignItemsEnd('lg')},
    alignItemsExtraLargeEnd()   {return this.alignItemsEnd('xl')},

    //Align Items Center
    alignItemsCenter(bp)            {return this.alignItems('center', bp);},
    alignItemsSmallCenter()         {return this.alignItemsCenter('sm')},
    alignItemsMediumCenter()        {return this.alignItemsCenter('md')},
    alignItemsLargeCenter()         {return this.alignItemsCenter('lg')},
    alignItemsExtraLargeCenter()    {return this.alignItemsCenter('xl')},

    //Align Items Baseline
    alignItemsBaseline(bp)          {return this.alignItems('baseline', bp);},
    alignItemsSmallBaseline()       {return this.alignItemsBaseline('sm')},
    alignItemsMediumBaseline()      {return this.alignItemsBaseline('md')},
    alignItemsLargeBaseline()       {return this.alignItemsBaseline('lg')},
    alignItemsExtraLargeBaseline()  {return this.alignItemsBaseline('xl')},

    //Align Items Stretch
    alignItemsStretch(bp)       {return this.alignItems('stretch', bp);},
    alignItemsSmallStretch()      {return this.alignItemsStretch('sm')},
    alignItemsMediumStretch()     {return this.alignItemsStretch('md')},
    alignItemsLargeStretch()      {return this.alignItemsStretch('lg')},
    alignItemsExtraLargeStretch() {return this.alignItemsStretch('xl')},

    //Align Self
    alignSelf(bp)       {return this._updateFlexProperty('align-self', bp, );},
    alignSelfSmall()      {return this.alignSelf('sm')},
    alignSelfMedium()     {return this.alignSelf('md')},
    alignSelfLarge()      {return this.alignSelf('lg')},
    alignSelfExtraLarge() {return this.alignSelf('xl')},

    //Align Self Start
    alignSelfStart(bp)       {return this.alignSelf('start', bp);},
    alignSelfSmallStart()      {return this.alignSelfStart('sm')},
    alignSelfMediumStart()     {return this.alignSelfStart('md')},
    alignSelfLargeStart()      {return this.alignSelfStart('lg')},
    alignSelfExtraLargeStart() {return this.alignSelfStart('xl')},

    //Align Self End
    alignSelfEnd(bp)       {return this.alignSelf('end', bp);},
    alignSelfSmallEnd()      {return this.alignSelfEnd('sm')},
    alignSelfMediumEnd()     {return this.alignSelfEnd('md')},
    alignSelfLargeEnd()      {return this.alignSelfEnd('lg')},
    alignSelfExtraLargeEnd() {return this.alignSelfEnd('xl')},

    //Align Self Center
    alignSelfCenter(bp)       {return this.alignSelf('center', bp);},
    alignSelfSmallCenter()      {return this.alignSelfCenter('sm')},
    alignSelfMediumCenter()     {return this.alignSelfCenter('md')},
    alignSelfLargeCenter()      {return this.alignSelfCenter('lg')},
    alignSelfExtraLargeCenter() {return this.alignSelfCenter('xl')},

    //Align Self Baseline
    alignSelfBaseline(bp)       {return this.alignSelf('baseline', bp);},
    alignSelfSmallBaseline()      {return this.alignSelfBaseline('sm')},
    alignSelfMediumBaseline()     {return this.alignSelfBaseline('md')},
    alignSelfLargeBaseline()      {return this.alignSelfBaseline('lg')},
    alignSelfExtraLargeBaseline() {return this.alignSelfBaseline('xl')},

    //Align Self Stretch
    alignSelfStretch(bp)       {return this.alignSelf('stretch', bp);},
    alignSelfSmallStretch()      {return this.alignSelfStretch('sm')},
    alignSelfMediumStretch()     {return this.alignSelfStretch('md')},
    alignSelfLargeStretch()      {return this.alignSelfStretch('lg')},
    alignSelfExtraLargeStretch() {return this.alignSelfStretch('xl')},

    
}


Object.assign(HTMLElement.prototype, breakpointMixin);
Object.assign(HTMLElement.prototype, spacingMixin);
Object.assign(HTMLElement.prototype, displayMixin);
Object.assign(HTMLElement.prototype, flexMixin);