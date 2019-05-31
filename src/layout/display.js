let displayMixin = {

    //Display Property
    d(value, bp)    {return this._updateResponsiveProperty('d', bp, value)},

    //Display Breakpoints
    dSm(value)  {return this.d(value, 'sm')},
    dMd(value)  {return this.d(value, 'md')},
    dLg(value)  {return this.d(value, 'lg')},
    dXl(value)  {return this.d(value, 'xl')},

    //Display None
    dNone()     {return this.d('none')},
    dSmNone()   {return this.dSm('none')},
    dMdNone()   {return this.dMd('none')},
    dLgNone()   {return this.dLg('none')},
    dXlNone()   {return this.dXl('none')},

    //Display Inline
    dInline()   {return this.d('inline')},
    dSmInline() {return this.dSm('inline')},
    dMdInline() {return this.dMd('inline')},
    dLgInline() {return this.dLg('inline')},
    dXlInline() {return this.dXl('inline')},

    //Display Inline Block
    dInlineBlock()      {return this.d('inline-block')},
    dSmInlineBlock()    {return this.dSm('inline-block')},
    dMdInlineBlock()    {return this.dMd('inline-block')},
    dLgInlineBlock()    {return this.dLg('inline-block')},
    dXlInlineBlock()    {return this.dXl('inline-block')},

    //Display Block
    dBlock()    {return this.d('block')},
    dSmBlock()  {return this.dSm('block')},
    dMdBlock()  {return this.dMd('block')},
    dLgBlock()  {return this.dLg('block')},
    dXlBlock()  {return this.dXl('block')},

    //Display Table
    dTable()    {return this.d('table')},
    dSmTable()  {return this.dSm('table')},
    dMdTable()  {return this.dMd('table')},
    dLgTable()  {return this.dLg('table')},
    dXlTable()  {return this.dXl('table')},

    //Display Table Row
    dTableRow()     {return this.d('table-row')},
    dSmTableRow()   {return this.dSm('table-row')},
    dMdTableRow()   {return this.dMd('table-row')},
    dLgTableRow()   {return this.dLg('table-row')},
    dXlTableRow()   {return this.dXl('table-row')},

    //Display Table Cell
    dTableCell()    {return this.d('table-cell')},
    dSmTableCell()  {return this.dSm('table-cell')},
    dMdTableCell()  {return this.dMd('table-cell')},
    dLgTableCell()  {return this.dLg('table-cell')},
    dXlTableCell()  {return this.dXl('table-cell')},

    //Display Flex
    dFlex()     {return this.d('flex')},
    dSmFlex()   {return this.dSm('flex')},
    dMdFlex()   {return this.dMd('flex')},
    dLgFlex()   {return this.dLg('flex')},
    dXlFlex()   {return this.dXl('flex')},

    //Display Inline Flex
    dInlineFlex()   {return this.d('inline-flex')},
    dSmInlineFlex() {return this.dSm('inline-flex')},
    dMdInlineFlex() {return this.dMd('inline-flex')},
    dLgInlineFlex() {return this.dLg('inline-flex')},
    dXlInlineFlex() {return this.dXl('inline-flex')},
}

Object.assign(HTMLElement.prototype, displayMixin);