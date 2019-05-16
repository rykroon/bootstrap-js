class Table extends HTMLTableElement {
    constructor() {
        super();
        this.classList.add('table');

        this._thead = null;
        this._tbody = null;
        this._tfoot = null;

        this.thead = true;
        this.tbody = true;
    }

    _toggleProperty(prop, value) {
        if (value) {
            this.classList.add(prop);
        } else {
            this.classList.remove(prop);
        }
    }

    //Striped
    get striped() {
        return this.classList.contains('table-striped');
    }

    set striped(value) {
        this._toggleProperty('table-striped', value);
    }

    //Bordered
    get bordered() {
        return this.classList.contains('table-bordered');
    }

    set bordered(value) {
        if (value) this.borderless = false;
       this._toggleProperty('table-bordered', value);
    }

    //Borderless
    get borderless() {
        return this.classList.contains('table-borderless');
    }

    set borderless(value) {
        if (value)  this.bordered = false;
        this._toggleProperty('table-borderless', value);
    }

    //Hover
    get hover() {
        return this.classList.contains('table-hover');
    }

    set hover(value) {
        this._toggleProperty('table-hover', value);
    }

    //Small
    get small() {
        return this.classList.contains('table-sm');
    }

    set small(value) {
        this._toggleProperty('table-sm', value);
    }

    //responsive

    get thead() {
        return this._thead;
    }

    set thead(value) {
        if (value === true && this._thead === null) {
            this._thead = new TableHead();
            if (this.firstElementChild) {
                this.firstElementChild.before(this._thead);
            } else {
                this.appendChild(this._thead);
            }
        }

        if (value === false && this._thead !== null) {
            this._thead.remove();
            this._thead = null;
        }
    }

    get tbody() {
        return this._tbody;
    }

    set tbody(value) {
        if (value === true && this._tbody === null) {
            this._tbody = new TableBody();

            if (this._thead) {
                this._thead.after(this._tbody);

            } else if (this._tfoot) {
                this._tfoot.before(this._tbody);

            } else {
                this.appendChild(this._tbody);
            }
        } 

        if (value === false && this._tbody !== null) {
            this._tbody.remove();
            this._tbody = null;
        }
    }

    get tfoot() {
        return this._tfoot;
    }

    set tfoot(value) {
        if (value === true && this._tfoot === null) {
            this._tfoot = new TableFoot();

            if (this.lastElementChild) {
                this.lastElementChild.after(this._tfoot);
            } else {
                this.appendChild(this._tfoot);
            }
        } 

        if (value === false && this._tfoot !== null) {
            this._tfoot.remove();
            this._tfoot = null;
        }
    }
}


class TableSection extends HTMLTableSectionElement {
    constructor() {
        super();
    }

    newRow() {
        let row = new TableRow();
        this.appendChild(row);
        return row;
    }
}


class TableHead extends TableSection {
    constructor() {
        super();
    }

    get light() {
        return this.classList.contains('thead-light');
    }

    set light(value) {
        if (value) {
            this.classList.remove('thead-dark');
            this.classList.add('thead-light');
        } else {
            this.classList.remove('thead-light');
        }
    }

    get dark() {
        return this.classList.contains('thead-dark');
    }

    set dark(value) {
        if (value) {
            this.classList.remove('thead-light');
            this.classList.add('thead-dark');
        } else {
            this.classList.remove('thead-dark');
        }
    }
}


class TableBody extends TableSection {
    constructor() {
        super();
    }
}


class TableFoot extends TableSection {
    constructor() {
        super();
    }
}


class TableRow extends HTMLTableRowElement {
    constructor() {
        super();
    }

    newCell(text) {
        let cell = null;

        if (this.parentElement instanceof TableHead) {
            cell = new TableHeaderCell(text);
        } else {
            cell = new TableDataCell(text);
        }

        this.appendChild(cell)
        return cell;
    }

    newRowBefore() {
        let row = new TableRow();
        this.before(row);
        return row;
    }

    newRowAfter() {
        let row = new TableRow();
        this.after(row);
        return row;
    }
}

class TableCell extends HTMLTableCellElement {
    constructor(text) {
        super();

        if (text) {
            this.textContent = text;
        }
    }

    newCellBefore(text) {
        if (this instanceof TableDataCell) {
            let cell = new TableDataCell(text);
            this.before(cell);
            return cell;
        } 

        if (this instanceof TableHeaderCell) {
            let cell = new TableHeaderCell(text);
            this.before(cell);
            return cell;
        }

        let cell = new TableCell();
        this.before(cell);
        return cell;
    }

    newCellAfter(text) {
        if (this instanceof TableDataCell) {
            let cell = new TableDataCell(text);
            this.after(cell);
            return cell;
        } 

        if (this instanceof TableHeaderCell) {
            let cell = new TableHeaderCell(text);
            this.after(cell);
            return cell;
        }

        let cell = new TableCell();
        this.after(cell);
        return cell;
    }
}

class TableDataCell extends TableCell {
    constructor(text) {
        super(text);
    }
}

class TableHeaderCell extends TableCell {
    constructor(text) {
        super(text);
    }
}

window.customElements.define('bs-table', Table, {extends: 'table'});
window.customElements.define('bs-table-head', TableHead, {extends: 'thead'});
window.customElements.define('bs-table-body', TableBody, {extends: 'tbody'});
window.customElements.define('bs-table-foot', TableFoot, {extends: 'tfoot'});
window.customElements.define('bs-table-row', TableRow, {extends: 'tr'});
window.customElements.define('bs-table-data-cell', TableDataCell, {extends: 'td'});
window.customElements.define('bs-table-header-cell', TableHeaderCell, {extends: 'th'});