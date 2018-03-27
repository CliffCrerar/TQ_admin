import { request } from 'https';

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
 * Last modified  : 2018-03-27 02:47:13
 */

/* DEV CODE */

$('#testButton').on('click', () => {
  console.log('Test Button Click');
  const getNumbers = require('./getNumbers');
  getNumbers();
  /* AUTOCOMPLETE PART NUMBERS 8*/
  console.log(typeof localStorage.partNumbers.split(','));
});

/* DEV CODE */
