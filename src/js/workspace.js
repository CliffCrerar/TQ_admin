/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary These scripts control what happens in the workspace
 * @author Cliff Crerar
 *
 * Created at     : 2018-03-26 23:27:09 
 * Last modified  : 2018-03-27 03:50:02
 */
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

/* DEV CODE */

$(document).ready(() => {
  //console.log('Test Button Click');
  const getNumbers = require('./getNumbers');
  getNumbers();
  /* AUTOCOMPLETE PART NUMBERS 8*/
  ///console.log(typeof localStorage.partNumbers.split(','));
  $('#partNumberInput').autocomplete({
    source: localStorage.partNumbers.split(',')
  });
  $('#partNumberInput').autocomplete('enable');
});

/* DEV CODE */

$('#showPart').on('click', () => {
  console.log('get part click');
});
