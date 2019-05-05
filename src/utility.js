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
            let lastElement = parts.slice(-1)[0];

            if (! this._isValidBreakpoint(lastElement)) {
                parts.pop();
                if (search == parts.join('-')) return _class;
            }
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

Object.assign(HTMLElement.prototype, breakpointMixin);
Object.assign(HTMLElement.prototype, spacingMixin);