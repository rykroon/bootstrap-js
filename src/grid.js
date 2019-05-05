class Container extends HTMLDivElement {

	constructor() {
		super();		
		this.className='container';
	}
	
	get fluid() {
		return this.classList.contains('container-fluid');
	}

	set fluid(value) {
		if (value) {
			this.classList.add('container-fluid');
		} else {
			this.classList.remove('container-fluid');
		}
	}

	appendToBody() {
		let body = document.getElementsByTagName('body')[0];
		if (body) {
			body.appendChild(this);
		}
	}
}


//Breakpoint Mixin for Responsive Properties
let breakpointMixin = {
    get _breakpoints() {
        return [undefined, 'sm', 'md', 'lg', 'xl'];
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

        for (let idx in classes) {
            let _class = classes[idx];
            let parts = _class.split('-');

            if (parts[0] != prop) continue;

            if (parts.length == 1 && bp === undefined) return _class;
            if (parts.length == 3 && bp == parts[1]) return _class;

            if (parts.length == 2) {
                let bpIsValid = this._isValidBreakpoint(parts[1]);

                if ((bp === undefined && !bpIsValid) || 
                    (bp == parts[1] && bpIsValid)) {
                        return _class;
                }
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
		//check for valid property
		if (! this._isValidResponsiveProperty(prop)) throw "Invalid property";

		//Check for valid breakpoint
		if (! this._isValidBreakpoint(bp)) throw "Invalid breakpoint";

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
	}
}


class Row extends HTMLDivElement {
	constructor() {
		super();
		this.className='row';

		this._responsiveProperties = {
			'justify-content': ['start', 'center', 'end', 'around', 'between'],
			'align-items': ['start', 'end', 'center', 'baseline', 'stretch']	
        };
	}

	//No Gutters

	get noGutters() {
		return this.classList.contains('no-gutters');
	}

	set noGutters(value) {
		if (value) {
			this.classList.add('no-gutters');
		} else {
			this.classList.remove('no-gutters');
		}
    }
    

	//Justify Content
	justify(value, bp) {
		const prop = 'justify-content';
        this._updateResponsiveProperty(prop, bp, value);
		return this;
	}

	justifySmall(value) {
		const bp = 'sm';
		return this.justify(value, bp);
	}

	justifyMedium(value) {
		const bp = 'md';
		return this.justify(value, bp);
	}

	justifyLarge(value) {
		const bp = 'lg';
		return this.justify(value, bp);
	}

	justifyExtraLarge(value) {
		const bp = 'xl';
		return this.justify(value, bp);
	}


	//Align Items
	align(value, bp) {
		const prop = 'align-items';
        this._updateResponsiveProperty(prop, bp, value);
		return this;
	}

	alignSmall(value) {
		const bp = 'sm';
		return this.align(value, bp);
	}

	alignMedium(value) {
		const bp = 'md';
		return this.align(value, bp);
	}

	alignLarge(value) {
		const bp = 'lg';
		return this.align(value, bp);
	}

	alignExtraLarge(value) {
		const bp = 'xl';
		return this.align(value, bp);
	}
}




class Col extends HTMLDivElement {
	constructor() {
		super();

		this._responsiveProperties = {
			col: [undefined, 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			order: ['first', 'last', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			offset: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }

		this.col();
	}

	//Column Classes
	col(value, bp) {
		const prop = 'col';
        this._updateResponsiveProperty(prop, bp, value);
		return this;
	}

	small(value) {
		const bp = 'sm';
		return this.col(value, bp);
	}

	medium(value) {
		const bp = 'md';
		return this.col(value, bp);
	}

	large(value) {
		const bp = 'lg';
		return this.col(value, bp);
	}

	extraLarge(value) {
		const bp = 'xl';
		return this.col(value, bp);
	}

	// Order Classes
	order(value, bp) {
		const prop = 'order';
        this._updateResponsiveProperty(prop, bp, value);
		return this;
	}

	orderSmall(value) {
		const bp = 'sm';
		return this.order(value, bp);
	}

	orderMedium(value) {
		const bp = 'md';
		return this.order(value, bp);
	}

	orderLarge(value) {
		const bp = 'lg';
		return this.order(value, bp);
	}

	orderExtraLarge(value) {
		const bp = 'xl';
		return this.order(value, bp);
	}

	// Offset
	offset(value, bp) {
		const prop = 'offset';
        this._updateResponsiveProperty(prop, bp, value);
		return this;
	}

	offsetSmall(value) {
		const bp = 'sm';
		return this.offset(value, bp);
	}

	offsetMedium(value) {
		const bp = 'md';
		return this.offset(value, bp);
	}

	offsetLarge(value) {
		const bp = 'lg';
		return this.offset(value, bp);
	}

	offsetExtraLarge(value) {
		const bp = 'xl';
		return this.offset(value, bp);
	}
}

Object.assign(Col.prototype, breakpointMixin);
Object.assign(Row.prototype, breakpointMixin);

window.customElements.define('bs-container', Container, {extends: 'div'});
window.customElements.define('bs-row', Row, {extends: 'div'});
window.customElements.define('bs-col', Col, {extends: 'div'});