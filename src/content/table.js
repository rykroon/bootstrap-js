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

    striped(value) {
        return this._updateClass(value, 'thead-striped');
    }

    bordered(value) {
        this.classList.remove('thead-borderless')
        return this._updateClass(value, 'thead-bordered');
    }

    borderless(value) {
        this.classList.remove('thead-bordered');
        return this._updateClass(value, 'thead-borderless');
    }

    hover(value) {
        return this._updateClass(value, 'thead-hover');
    }

    sm(value) {
        return this._updateClass(value, 'thead-sm');
    }

    //responsive
    //
    //

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

    light() {
        return this._light('thead');
    }

    dark() {
        return this._dark('thead');
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