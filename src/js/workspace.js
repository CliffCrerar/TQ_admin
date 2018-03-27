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
 * Last modified  : 2018-03-27 19:12:37
 */
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

const getPart = require('./getPart'); // server request that gets part data using part number

/* DEV CODE */

$(document).ready(() => {
    //console.log('Test Button Click');
    Promise.resolve(require('./getNumbers')).then(val => {
        /* AUTOCOMPLETE PART NUMBERS 8*/
        ///console.log(typeof localStorage.partNumbers.split(','));
        $('#partNumber').autocomplete({
            source: localStorage.partNumbers.split(','),
        });
        $('#partNumber').autocomplete('enable');
    });
});

/* DEV CODE */

$('#showPart').on('click', () => {
    console.log('get part click');
    var pNumber = $('#partNumber').val();
    console.log(pNumber);
    if (pNumber != '') {
        console.log('Part number selected');
        getPart(pNumber);
    } else {
        alert('You must select a valid part number');
    }
});