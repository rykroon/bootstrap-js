class Table extends HTMLTableElement {
    constructor() {
        super();
        this.classList.add('table');

        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');
        this.tfoot = null;

        this.appendChild(this.thead);
        this.appendChild(this.tbody);
    }

    striped(value) {
        return this._updateClass(value, 'table-striped');
    }

    bordered(value) {
        this.classList.remove('table-borderless')
        return this._updateClass(value, 'table-bordered');
    }

    borderless(value) {
        this.classList.remove('table-bordered');
        return this._updateClass(value, 'table-borderless');
    }

    hover(value) {
        return this._updateClass(value, 'table-hover');
    }

    sm(value) {
        return this._updateClass(value, 'table-sm');
    }

    active() {
        return this._updatePropertyColor('table', 'active');
    }

    primary() {
        return this._primary('table')
    }

    secondary() {
        return this._secondary('table')
    }

    success() {
        return this._success('table')
    }

    danger() {
        return this._danger('table')
    }

    warning() {
        return this._warning('table')
    }

    info() {
        return this._info('table')
    }

    light() {
        return this._light('table');
    }

    dark() {
        return this._dark('table');
    }

    //responsive
    //
    //

}

//Table Sections
HTMLTableSectionElement.prototype.newRow = function() {
    let row = document.createElement('tr');
    this.appendChild(row);
    return row;
}

HTMLTableSectionElement.prototype.light = function() {
    if (this.tagName == 'THEAD') {
        return this._light('thead');
    }

    return this;
}

HTMLTableSectionElement.prototype.dark = function() {
    if (this.tagName == 'THEAD') {
        return this._dark('thead');
    }

    return this;
}


//Table Rows
HTMLTableRowElement.prototype.newCell = function(text) {
    let cell = null;

    if (this.parentElement.tagName == 'THEAD') {
        cell = document.createElement('th');
    } else {
        cell = document.createElement('td');
    }

    cell.textContent = text;
    this.appendChild(cell);
    return cell;
}

HTMLTableRowElement.prototype.newRowBefore = function() {
    let row = document.createElement('tr');
    this.before(row);
    return row;
}

HTMLTableRowElement.prototype.newRowAfter = function() {
    let row = document.createElement('tr');
    this.after(row);
    return row;
}

//Table Cells
HTMLTableCellElement.prototype.newCellBefore = function(text) {
        let cell = document.createElement(this.tagName);
        cell.textContent = text;
        this.before(cell);
        return cell;
}

HTMLTableCellElement.prototype.newCellAfter = function(text) {
    let cell = document.createElement(this.tagName);
    cell.textContent = text;
    this.after(cell);
    return cell;
}


window.customElements.define('bs-table', Table, {extends: 'table'});