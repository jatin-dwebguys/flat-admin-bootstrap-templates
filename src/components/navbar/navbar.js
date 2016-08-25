/* autocomplete search */
var countries = [
    { value: 'Andorra', data: 'AD' },
    { value: 'Zimbabwe', data: 'ZZ' }
];

$('#search').autocomplete({
  lookup: countries
});