//Breakpoint Mixin for Responsive Properties
let breakpointMixin = {
    get _breakpoints() {
        return [undefined, ,'sm', 'md', 'lg', 'xl'];
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

Object.assign(HTMLElement.prototype, breakpointMixin);
