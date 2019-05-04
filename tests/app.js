//test


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

class Row extends HTMLDivElement {
	constructor() {
		super();
		this.className='row';

		this._breakpoints = [undefined, 'sm', 'md', 'lg', 'xl']
		this._attributes = {
			'justify-content': {
				'classes': {
					undefined: null,
					'sm': null,
					'md': null,
					'lg': null,
					'xl': null
				},
				values: ['start', 'center', 'end', 'around', 'between']		
			},
			'align-items': {
				classes: {
					undefined: null,
					'sm': null,
					'md': null,
					'lg': null,
					'xl': null
				},
				values: ['start', 'end', 'center', 'baseline', 'stretch']
			}		
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

	_addAttribute(attr, bp, value) {
		//check for valid attribute
		if (! attr in this._attributes) throw "Invalid attribute";

		//Check for valid breakpoint
		if (!this._breakpoints.includes(bp)) throw "Invalid breakpoint";

		//check for valid value
		let values = this._attributes[attr]['values'];
		if (!values.includes(value)) throw "Invalid value";

		//build className
		let className = attr;
		if (bp !== undefined) className += '-' + bp;
		if (value !== undefined) className += '-' + value;

		this.classList.add(className);
		this._attributes[attr]['classes'][bp] = className;
	}

	_removeAttribute(attr, bp) {
		//Check for valid attribute
		if (! attr in this._attributes) throw "Invalid attribute";

		//Check for valid breakpoint
		if (!this._breakpoints.includes(bp)) throw "Invalid breakpoint";

		//get current className
		let className = this._attributes[attr]['classes'][bp];

		this.classList.remove(className);
		this._attributes[attr]['classes'][bp] = null;
	}

	_updateAttribute(attr, bp, value) {
		this._removeAttribute(attr, bp);

		if (value !== null) {
			this._addAttribute(attr, bp, value);
		}
	}

	//Justify Content

	justify(value, bp) {
		const attr = 'justify-content';
		this._updateAttribute(attr, bp, value);
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
		const attr = 'align-items';
		this._updateAttribute(attr, bp, value);
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

		this._breakpoints = [undefined, 'sm', 'md', 'lg', 'xl']

		this._attributes = {
			'col': {
				'classes': {
					undefined: null,
					'sm': null,
					'md': null,
					'lg': null,
					'xl': null
				},
				values: [undefined, 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
			},
			'order': {
				'classes': {
					undefined: null,
					'sm': null,
					'md': null,
					'lg': null,
					'xl': null
				},
				values: ['first', 'last', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
			},
			'offset': {
				'classes': {
					undefined: null,
					'sm': null,
					'md': null,
					'lg': null,
					'xl': null
				},
				values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
			}
		}

		this.col();
	}

	_addAttribute(attr, bp, value) {
		//check for valid attribute
		if (! attr in this._attributes) throw "Invalid attribute";

		//Check for valid breakpoint
		if (!this._breakpoints.includes(bp)) throw "Invalid breakpoint";

		//check for valid value
		let values = this._attributes[attr]['values'];
		if (!values.includes(value)) throw "Invalid value";

		//build className
		let className = attr;
		if (bp !== undefined) className += '-' + bp;
		if (value !== undefined) className += '-' + value;

		this.classList.add(className);
		this._attributes[attr]['classes'][bp] = className;
	}

	_removeAttribute(attr, bp) {
		//Check for valid attribute
		if (! attr in this._attributes) throw "Invalid attribute";

		//Check for valid breakpoint
		if (!this._breakpoints.includes(bp)) throw "Invalid breakpoint";

		//get current className
		let className = this._attributes[attr]['classes'][bp];

		this.classList.remove(className);
		this._attributes[attr]['classes'][bp] = null;
	}

	_updateAttribute(attr, bp, value) {
		this._removeAttribute(attr, bp);

		if (value !== null) {
			this._addAttribute(attr, bp, value);
		}
	}

	//Column Classes
	col(value, bp) {
		const attr = 'col';
		this._updateAttribute(attr, bp, value);
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
		const attr = 'order';
		this._updateAttribute(attr, bp, value);
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
		const attr = 'offset';
		this._updateAttribute(attr, bp, value);
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

window.customElements.define('bs-container', Container, {extends: 'div'});
window.customElements.define('bs-row', Row, {extends: 'div'});
window.customElements.define('bs-col', Col, {extends: 'div'});

container = new Container();
row = new Row();

col1 = new Col();
col1.classList.add('bg-primary');
col1.classList.add('p-5');

col2 = new Col();
col2.classList.add('bg-secondary');
col2.classList.add('p-5');

col3 = new Col();
col3.classList.add('bg-success');
col3.classList.add('p-5');

row.appendChild(col1);
row.appendChild(col2)
row.appendChild(col3)
container.appendChild(row)
container.appendToBody();



