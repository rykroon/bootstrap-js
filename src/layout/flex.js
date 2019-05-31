let flexMixin = {

    //Flex Property
    flex(value, bp) {return this._updateResponsiveProperty('flex', bp, value)},

    //Flex Breakpoints
    flexSm(value)   {return this.flex(value, 'sm')},
    flexMd(value)   {return this.flex(value, 'md')},
    flexLg(value)   {return this.flex(value, 'lg')},
    flexXl(value)   {return this.flex(value, 'xl')},

    //Flex Row
    flexRow()   {return this.flex('row')},
    flexSmRow() {return this.flexSm('row')},
    flexMdRow() {return this.flexMd('row')},
    flexLgRow() {return this.flexLg('row')},
    flexXlRow() {return this.flexXl('row')},

    //Flex Column
    flexColumn()    {return this.flex('column')},
    flexSmColumn()  {return this.flexSm('column')},
    flexMdColumn()  {return this.flexMd('column')},
    flexLgColumn()  {return this.flexLg('column')},
    flexXlColumn()  {return this.flexXl('column')},

    //Flex Row Reverse
    flexRowReverse()    {return this.flex('row-reverse')},
    flexSmRowReverse()  {return this.flexSm('row-reverse')},
    flexMdRowReverse()  {return this.flexMd('row-reverse')},
    flexLgRowReverse()  {return this.flexLg('row-reverse')},
    flexXlRowReverse()  {return this.flexXl('row-reverse')},

    //Flex Column Reverse
    flexColumnReverse()     {return this.flex('column-reverse')},
    flexSmColumnReverse()   {return this.flexSm('column-reverse')},
    flexMdColumnReverse()   {return this.flexMd('column-reverse')},
    flexLgColumnReverse()   {return this.flexLg('column-reverse')},
    flexXlColumnReverse()   {return this.flexXl('column-reverse')},

    //Flex Wrap
    flexWrap()      {return this.flex('wrap')},
    flexSmWrap()    {return this.flexSm('wrap')},
    flexMdWrap()    {return this.flexMd('wrap')},
    flexLgWrap()    {return this.flexLg('wrap')},
    flexXlWrap()    {return this.flexXl('wrap')},

    //Flex No Wrap
    flexNoWrap()    {return this.flex('no-wrap')},
    flexSmNoWrap()  {return this.flexSm('no-wrap')},
    flexMdNoWrap()  {return this.flexMd('no-wrap')},
    flexLgNoWrap()  {return this.flexLg('no-wrap')},
    flexXlNoWrap()  {return this.flexXl('no-wrap')},

    //Flex Wrap Reverse
    flexWrapReverse()   {return this.flex('wrap-reverse')},
    flexSmWrapReverse() {return this.flexSm('wrap-reverse')},
    flexMdWrapReverse() {return this.flexMd('wrap-reverse')},
    flexLgWrapReverse() {return this.flexLg('wrap-reverse')},
    flexXlWrapReverse() {return this.flexXl('wrap-reverse')},

    //Flex Fill
    flexFill()      {return this.flex('fill')},
    flexSmFill()    {return this.flexSm('fill')},
    flexMdFill()    {return this.flexMd('fill')},
    flexLgFill()    {return this.flexLg('fill')},
    flexXlFill()    {return this.flexXl('fill')},

    //Flex Grow 0
    flexGrowZero()      {return this.flex('grow-0')},
    flexSmGrowZero()    {return this.flexSm('grow-0')},
    flexMdGrowZero()    {return this.flexMd('grow-0')},
    flexLgGrowZero()    {return this.flexLg('grow-0')},
    flexXlGrowZero()    {return this.flexXl('grow-0')},

    //Flex Grow 1
    flexGrowOne()   {return this.flex('grow-1')},
    flexSmGrowOne() {return this.flexSm('grow-1')},
    flexMdGrowOne() {return this.flexMd('grow-1')},
    flexLgGrowOne() {return this.flexLg('grow-1')},
    flexXlGrowOne() {return this.flexXl('grow-1')},

    //Flex Shrink 0
    flexShrinkZero()    {return this.flex('shrink-0')},
    flexSmShrinkZero()  {return this.flexSm('shrink-0')},
    flexMdShrinkZero()  {return this.flexMd('shrink-0')},
    flexLgShrinkZero()  {return this.flexLg('shrink-0')},
    flexXlShrinkZero()  {return this.flexXl('shrink-0')},

    //Flex Shrink 1
    flexShrinkOne()     {return this.flex('shrink-1')},
    flexSmShrinkOne()   {return this.flexSm('shrink-1')},
    flexMdShrinkOne()   {return this.flexMd('shrink-1')},
    flexLgShrinkOne()   {return this.flexLg('shrink-1')},
    flexXlShrinkOne()   {return this.flexXl('shrink-1')},
    
    //Justify Content Property
    justifyContent(value, bp)   {return this._updateResponsiveProperty('justify-content', bp, value)},

    //Justify Content Breakpoints
    justifyContentSm(value) {return justifyContent(value, 'sm')},
    justifyContentMd(value) {return justifyContent(value, 'md')},
    justifyContentLg(value) {return justifyContent(value, 'lg')},
    justifyContentXl(value) {return justifyContent(value, 'xl')},

    //Justify Content Start
    justifyContentStart()   {return this.justifyContent('start')},
    justifyContentSmStart() {return this.justifyContentSm('start')},
    justifyContentMdStart() {return this.justifyContentMd('start')},
    justifyContentLgStart() {return this.justifyContentLg('start')},
    justifyContentXlStart() {return this.justifyContentXl('start')},

    //Justify Content End
    justifyContentEnd()     {return this.justifyContent('end')},
    justifyContentSmEnd()   {return this.justifyContentSm('end')},
    justifyContentMdEnd()   {return this.justifyContentMd('end')},
    justifyContentLgEnd()   {return this.justifyContentLg('end')},
    justifyContentXlEnd()   {return this.justifyContentXl('end')},

    //Justify Content Center
    justifyContentCenter()      {return this.justifyContent('center')},
    justifyContentSmCenter()    {return this.justifyContentSm('center')},
    justifyContentMdCenter()    {return this.justifyContentMd('center')},
    justifyContentLgCenter()    {return this.justifyContentLg('center')},
    justifyContentXlCenter()    {return this.justifyContentXl('center')},

    //Justify Content Between
    justifyContentBetween()     {return this.justifyContent('between')},
    justifyContentSmBetween()   {return this.justifyContentSm('between')},
    justifyContentMdBetween()   {return this.justifyContentMd('between')},
    justifyContentLgBetween()   {return this.justifyContentLg('between')},
    justifyContentXlBetween()   {return this.justifyContentXl('between')},

    //Justify Content Around
    justifyContentAround()      {return this.justifyContent('around')},
    justifyContentSmAround()    {return this.justifyContentSm('around')},
    justifyContentMdAround()    {return this.justifyContentMd('around')},
    justifyContentLgAround()    {return this.justifyContentLg('around')},
    justifyContentXlAround()    {return this.justifyContentXl('around')},

    //Align Items Property
    alignItems(value, bp)   {return this._updateResponsiveProperty('align-items', bp, value)},

    //Align Items Breakpoints
    alignItemsSm(value) {return this.alignItems(value, 'sm')},
    alignItemsMd(value) {return this.alignItems(value, 'md')},
    alignItemsLg(value) {return this.alignItems(value, 'lg')},
    alignItemsXl(value) {return this.alignItems(value, 'xl')},

    //Align Items Start
    alignItemsStart()   {return this.alignItems('start')},
    alignItemsSmStart() {return this.alignItemsSm('start')},
    alignItemsMdStart() {return this.alignItemsMd('start')},
    alignItemsLgStart() {return this.alignItemsLg('start')},
    alignItemsXlStart() {return this.alignItemstXl('start')},

    //Align Items End
    alignItemsEnd()     {return this.alignItems('end')},
    alignItemsSmEnd()   {return this.alignItemsSm('end')},
    alignItemsMdEnd()   {return this.alignItemsMd('end')},
    alignItemsLgEnd()   {return this.alignItemsLg('end')},
    alignItemsXlEnd()   {return this.alignItemsXl('end')},

    //Align Items Center
    alignItemsCenter()      {return this.alignItems('center')},
    alignItemsSmCenter()    {return this.alignItemsSm('center')},
    alignItemsMdCenter()    {return this.alignItemsMd('center')},
    alignItemsLgCenter()    {return this.alignItemsLg('center')},
    alignItemsXlCenter()    {return this.alignItemsXl('center')},

    alignItemsBaseline()    {return this.alignItems('baseline')},
    alignItemsSmBaseline()  {return this.alignItemsSm('baseline')},
    alignItemsMdBaseline()  {return this.alignItemsMd('baseline')},
    alignItemsLgBaseline()  {return this.alignItemsLg('baseline')},
    alignItemsXlBaseline()  {return this.alignItemsXl('baseline')},

    alignItemsStretch()     {return this.alignItems('stretch')},
    alignItemsSmStretch()   {return this.alignItemsSm('stretch')},
    alignItemsMdStretch()   {return this.alignItemsMd('stretch')},
    alignItemsLgStretch()   {return this.alignItemsLg('stretch')},
    alignItemsXlStretch()   {return this.alignItemsXl('stretch')},

    //Align Content Property
    alignContent(value, bp) {return this._updateResponsiveProperty('align-content', bp, value)},

    //Align Content Breakpoints
    alignContentSm(value)   {return this.alignContent(value, 'sm')},
    alignContentMd(value)   {return this.alignContent(value, 'md')},
    alignContentLg(value)   {return this.alignContent(value, 'lg')},
    alignContentXl(value)   {return this.alignContent(value, 'xl')},

    //Align Content Start
    alignContentStart()     {return this.alignContent('start')},
    alignContentSmStart()   {return this.alignContentSm('start')},
    alignContentMdStart()   {return this.alignContentMd('start')},
    alignContentLgStart()   {return this.alignContentLg('start')},
    alignContentXlStart()   {return this.alignContentXl('start')},

    //Align Content End
    alignContentEnd()   {return this.alignContent('end')},
    alignContentSmEnd() {return this.alignContentSm('end')},
    alignContentMdEnd() {return this.alignContentMd('end')},
    alignContentLgEnd() {return this.alignContentLg('end')},
    alignContentXlEnd() {return this.alignContentXl('end')},

    //Align Content Center
    alignContentCenter()    {return this.alignContent('center')},
    alignContentSmCenter()  {return this.alignContentSm('center')},
    alignContentMdCenter()  {return this.alignContentMd('center')},
    alignContentLgCenter()  {return this.alignContentLg('center')},
    alignContentXlCenter()  {return this.alignContentXl('center')},

    //Align Content Between
    alignContentBetween()   {return this.alignContent('between')},
    alignContentSmBetween() {return this.alignContentSm('between')},
    alignContentMdBetween() {return this.alignContentMd('between')},
    alignContentLgBetween() {return this.alignContentLg('between')},
    alignContentXlBetween() {return this.alignContentXl('between')},

    //Align Content Around
    alignContentAround()    {return this.alignContent('around')},
    alignContentSmAround()  {return this.alignContentSm('around')},
    alignContentMdAround()  {return this.alignContentMd('around')},
    alignContentLgAround()  {return this.alignContentLg('around')},
    alignContentXlAround()  {return this.alignContentXl('around')},

    //Align Content Stretch
    alignContentStretch()   {return this.alignContent('stretch')},
    alignContentSmStretch() {return this.alignContentSm('stretch')},
    alignContentMdStretch() {return this.alignContentMd('stretch')},
    alignContentLgStretch() {return this.alignContentLg('stretch')},
    alignContentXlStretch() {return this.alignContentXl('stretch')},

    //Align Self
    alignSelf(value, bp)    {return this._updateResponsiveProperty('align-self', bp, value)},

    //Align Self Breakpoints
    alignSelfSm(value)  {return this.alignSelf(value, 'sm')},
    alignSelfMd(value)  {return this.alignSelf(value, 'md')},
    alignSelfLg(value)  {return this.alignSelf(value, 'lg')},
    alignSelfXl(value)  {return this.alignSelf(value, 'xl')},

    //Align Self Auto
    alignSelfAuto()     {return this.alignSelf('auto')},
    alignSelfSmAuto()   {return this.alignSelfSm('auto')},
    alignSelfMdAuto()   {return this.alignSelfMd('auto')},
    alignSelfLgAuto()   {return this.alignSelfLg('auto')},
    alignSelfXlAuto()   {return this.alignSelfXl('auto')},

    //Align Self Start
    alignSelfStart()    {return this.alignSelf('start')},
    alignSelfSmStart()  {return this.alignSelfSm('start')},
    alignSelfMdStart()  {return this.alignSelfMd('start')},
    alignSelfLgStart()  {return this.alignSelfLg('start')},
    alignSelfXlStart()  {return this.alignSelfXl('start')},

    //Align Self End
    alignSelfEnd()      {return this.alignSelf('end')},
    alignSelfSmEnd()    {return this.alignSelfSm('end')},
    alignSelfMdEnd()    {return this.alignSelfMd('end')},
    alignSelfLgEnd()    {return this.alignSelfLg('end')},
    alignSelfXlEnd()    {return this.alignSelfXl('end')},

    //Align Self Center
    alignSelfCenter()   {return this.alignSelf('center')},
    alignSelfSmCenter() {return this.alignSelfSm('center')},
    alignSelfMdCenter() {return this.alignSelfMd('center')},
    alignSelfLgCenter() {return this.alignSelfLg('center')},
    alignSelfXlCenter() {return this.alignSelfXl('center')},

    //Align Self Baseline
    alignSelfBaseline()     {return this.alignSelf('baseline')},
    alignSelfSmBaseline()   {return this.alignSelfSm('baseline')},
    alignSelfMdBaseline()   {return this.alignSelfMd('baseline')},
    alignSelfLgBaseline()   {return this.alignSelfLg('baseline')},
    alignSelfXlBaseline()   {return this.alignSelfXl('baseline')},

    //Align Self Stretch
    alignSelfStretch()      {return this.alignSelf('stretch')},
    alignSelfSmStretch()    {return this.alignSelfSm('stretch')},
    alignSelfMdStretch()    {return this.alignSelfMd('stretch')},
    alignSelfLgStretch()    {return this.alignSelfLg('stretch')},
    alignSelfXlStretch()    {return this.alignSelfXl('stretch')},

    //Order Property
    order(value, bp)    {return this._updateResponsiveProperty('order', bp, value)},
    
    //Order breakpoints
    orderSm(value)  {return this.order(value, 'sm')},
    orderMd(value)  {return this.order(value, 'md')},
    orderLg(value)  {return this.order(value, 'lg')},
    orderXl(value)  {return this.order(value, 'xl')},

    //Order First
    orderFirst()    {return this.order('first')},
    orderSmFirst()  {return this.orderSm('first')},
    orderMdFirst()  {return this.orderMd('first')},
    orderLgFirst()  {return this.orderLg('first')},
    orderXlFirst()  {return this.orderXl('first')},

    //Order Last
    orderLast()     {return this.order('last')},
    orderSmLast()   {return this.orderSm('last')},
    orderMdLast()   {return this.orderMd('last')},
    orderLgLast()   {return this.orderLg('last')},
    orderXlLast()   {return this.orderXl('last')},
}

Object.assign(HTMLElement.prototype, flexMixin);
