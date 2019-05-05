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
	justify(value, bp)          {return this._updateResponsiveProperty('justify-content', bp, value);}
	justifySmall(value)         {return this.justify(value, 'sm');}
	justifyMedium(value)        {return this.justify(value, 'md');}
	justifyLarge(value)         {return this.justify(value, 'lg');}
	justifyExtraLarge(value)    {return this.justify(value, 'xl');}

	//Align Items
	align(value, bp)        {return this._updateResponsiveProperty('align-items', bp, value);}
	alignSmall(value)       {return this.align(value, 'sm');}
	alignMedium(value)      {return this.align(value, 'md');}
	alignLarge(value)       {return this.align(value, 'lg');}
	alignExtraLarge(value)  {return this.align(value, 'xl');}
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
	col(value, bp)      {return this._updateResponsiveProperty('col', bp, value);}
	small(value)        {return this.col(value, 'sm');}
	medium(value)       {return this.col(value, 'md');}
	large(value)        {return this.col(value, 'lg');}
	extraLarge(value)   {return this.col(value, 'xl');}

	// Order Classes
	order(value, bp)        {return this._updateResponsiveProperty('order', bp, value);}    
	orderSmall(value)       {return this.order(value, 'sm');}
	orderMedium(value)      {return this.order(value, 'md');}
	orderLarge(value)       {return this.order(value, 'lg');}
	orderExtraLarge(value)  {return this.order(value, 'xl');}

	// Offset
	offset(value, bp)       {return this._updateResponsiveProperty('offset', bp, value);}
	offsetSmall(value)      {return this.offset(value, 'sm');}
	offsetMedium(value)     {return this.offset(value, 'md');}
	offsetLarge(value)      {return this.offset(value, 'lg');}
	offsetExtraLarge(value) {return this.offset(value, 'xl');}
}


window.customElements.define('bs-container', Container, {extends: 'div'});
window.customElements.define('bs-row', Row, {extends: 'div'});
window.customElements.define('bs-col', Col, {extends: 'div'});