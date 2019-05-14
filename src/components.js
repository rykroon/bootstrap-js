class Btn extends HTMLButtonElement {
    constructor() {
        super();
        this.className = 'btn'; 
    }

    get large() {
        return this.classList.contains('btn-lg');
    }

    set large(value) {
        if (value) {
            this.small = false;
            this.classList.add('btn-lg');
        } else {
            this.classList.remove('btn-lg');
        }
    }

    get small() {
        return this.classList.contains('btn-sm');
    }

    set small(value) {
        if (value) {
            this.large = false;
            this.classList.add('btn-sm');
        } else {
            this.classList.remove('btn-sm');
        }
    }

    get block() {
        return this.classList.contains('btn-block');
    }

    set block(value) {
        if (value) {
            this.classList.add('btn-block');
        } else {
            this.classList.remove('btn-block');
        }
    }
}


class Card extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add('card');

        this.body = document.createElement('div');
        this.body.classList.add('card-body');
        this.appendChild(this.body);
    }

    get headerElement() {
        return this._header;
    }

    get header() {
        if (this._header) return this._header.textContent;
        return "";
    }

    set header(value) {
        if (value || typeof(value) == 'string') {
            if (! this._header) {
                this._header = document.createElement('div');
                this._header.classList.add('card-header');
                this.body.before(this._header);
            }

            if (typeof(value) == 'string') this._header.textContent = value;
        } else {
            if (this._header) {
                this._header.remove();
                this._header = null;
            }
        }
    }

    get titleElement() {
        return this._title;
    }

    get title() {
        if (this._title) return this._title.textContent;
        return "";
    }

    set title(value) {
        if (value) {
            if (! this._title) {
                this._title = document.createElement('h5');
                this._title.classList.add('card-title');
                this.body.insertBefore(this._title, this.body.firstElementChild);
            }

            this._title.textContent = value;
        } else {
            if (this._title) {
                this._title.remove();
                this._title = null;
            }
        }
    }

    get subtitleElement() {
        return this._subtitle;
    }

    get subtitle() {
        if (this._subtitle) return this._subtitle.textContent;
        return "";
    }

    set subtitle(value) {
        if (value) {
            if (! this._subtitle) {
                this._subtitle = document.createElement('h6');
                this._subtitle.classList.add('card-subtitle');
                
                if (this._title) {
                    this._title.after(this._subtitle);
                    
                } else {
                    this.body.insertBefore(this._subtitle, this.body.firstElementChild);
                }
            }

            this._subtitle.textContent = value;
        } else {
            if (this._subtitle) {
                this._subtitle.remove();
                this._subtitle = null;
            }
        }
    }

    get textElement() {
        return this._text;
    }

    get text() {
        if (this._text) return this._text.textContent;
        return "";
    }

    set text(value) {
        if (value) {
            if (! this._text) {
                this._text = document.createElement('p');
                this._text.classList.add('card-text');

                if (this._subtitle) {
                    this._subtitle.after(this._text);

                } else if (this._title) {
                    this._title.after(this._text);

                } else {
                    this.body.insertBefore(this._text, this.body.firstElementChild);
                }
            }

            this._text.textContent= value;
        } else {
            if (this._text) {
                this._text.remove();
                this._text = null;
            }
        }
    }

    get footerElement() {
        return this._footer;
    }

    get footer() {
        if (this._footer) return this._footer.textContent;
        return "";
    }

    set footer(value) {
        if (value || value === "") {
            if (! this._footer) {
                this._footer = document.createElement('div');
                this._footer.classList.add('card-footer');
                this.body.after(this._footer);
            }

            if (typeof(value) == 'string') this._footer.textContent = value;
        } else {
            if (this._footer) {
                this._footer.remove();
                this._footer = null;
            }
        }
    }

}


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


class TableHead extends HTMLTableSectionElement {
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

    newRow() {
        let row = new TableRow();
        this.appendChild(row);
        return row;
    }
}


class TableBody extends HTMLTableSectionElement {
    constructor() {
        super();
    }

    newRow() {
        let row = new TableRow();
        this.appendChild(row);
        return row;
    }
}


class TableFoot extends HTMLTableSectionElement {
    constructor() {
        super();
    }

    newRow() {
        let row = new TableRow();
        this.appendChild(row);
        return row;
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
}

class TableCell extends HTMLTableCellElement {
    constructor(text) {
        super();

        if (text) {
            this.textContent = text;
        }
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

window.customElements.define('bs-button', Btn, {extends: 'button'});
window.customElements.define('bs-card', Card, {extends: 'div'});

window.customElements.define('bs-table', Table, {extends: 'table'});
window.customElements.define('bs-table-head', TableHead, {extends: 'thead'});
window.customElements.define('bs-table-body', TableBody, {extends: 'tbody'});
window.customElements.define('bs-table-foot', TableFoot, {extends: 'tfoot'});
window.customElements.define('bs-table-row', TableRow, {extends: 'tr'});
window.customElements.define('bs-table-data-cell', TableDataCell, {extends: 'td'});
window.customElements.define('bs-table-header-cell', TableHeaderCell, {extends: 'th'});