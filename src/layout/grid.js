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
    
    newRow() {
        let row = new Row();
        this.appendChild(row);
        return row;
    }

	appendToBody() {
		let body = document.getElementsByTagName('body')[0];
		if (body) {
			body.appendChild(this);
		}
    }
    
    static fromDOM() {
        let container = document.querySelector('.container');
        if (container instanceof Container) return container;
        return Object.setPrototypeOf(container, Container.prototype);
    }
}


class Row extends HTMLDivElement {
	constructor() {
		super();
		this.className='row';
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

    newCol() {
        let col = new Col();
        this.appendChild(col);
        return col;
    }

    newRowBefore() {
        let row = new Row();
        this.before(row);
        return row;
    }

    newRowAfter() {
        let row = new Row();
        this.after(row);
        return row;
    }

    static getRows() {
        return document.getElementsByClassName('row');
    }
}


class Col extends HTMLDivElement {
	constructor(value, bp) {
		super();

		this._responsiveProperties = {
			col: [undefined, 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			offset: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }

		this.col(value, bp);
    }
    
    newRow() {
        let row = new Row();
        this.appendChild(row);
        return row;
    }

    newColBefore() {
        let col = new Col();
        this.before(col);
        return col;
    }

    newColAfter() {
        let col = new Col();
        this.after(col);
        return col;
    }

	//Column Property
    col(value, bp)      {return this._updateResponsiveProperty('col', bp, value)}
    
    //Column Breakpoints
	colSm(value)    {return this.col(value, 'sm')}
	colMd(value)    {return this.col(value, 'md')}
	colLg(value)    {return this.col(value, 'lg')}
    colXl(value)    {return this.col(value, 'xl')}
    
    //Column Auto
	colSmAuto()    {return this.colSm('auto')}
	colMdAuto()    {return this.colMd('auto')}
	colLgAuto()    {return this.colLg('auto')}
	colXlAuto()    {return this.colXl('auto')}

	// Offset
    offset(value, bp)       {return this._updateResponsiveProperty('offset', bp, value)}
    
    //Offset Breakpoints
	offsetSm(value) {return this.offset(value, 'sm')}
	offsetMd(value) {return this.offset(value, 'md')}
	offsetLg(value) {return this.offset(value, 'lg')}
	offsetXl(value) {return this.offset(value, 'xl')}
}


window.customElements.define('bs-container', Container, {extends: 'div'});
window.customElements.define('bs-row', Row, {extends: 'div'});
window.customElements.define('bs-col', Col, {extends: 'div'});