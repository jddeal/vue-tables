 // Defaults are returned from a function to overcome caching issues which might cause data leakage between instances

 module.exports = function(source) {
  return {
   dateColumns:[],
   listColumns:{},
   datepickerOptions:{
    locale: {
      cancelLabel:'Clear'
    }
   },
   perPage:10,
   perPageValues:[10,25,50,100],
   params:{},
   sortable:true,
   trackBy:'$index',
   filterable:true,
   filtersInitialValues:{},
   customFilters:[],
   templates:{},
   compileTemplates:false,
   delay:500,
   dateFormat:"DD/MM/YYYY",
   toMomentFormat:false,
   skin:"striped",
   wrapperClasses:"",
   columnsDisplay: {},
   texts:{
    count:"{count} Records",
    filter:"Filter Results",
    filterPlaceholder:"",
    limit:"Records:",
    page:"Page:",
    noResults:"No matching records",
    filterBy:"Filter by {column}",
    loading:'Loading...',
    defaultOption:'Select {column}'
  },
  sortIcon:{
    base:'',
    up: 'arrow_upward',
    down: 'arrow_downward'
  },
  filterByColumn:false,
  highlightMatches:false,
  orderBy:false,
  footerHeadings:false,
  headings:{},
  pagination: {
    dropdown:false,
    chunk:10
  }
}
}


