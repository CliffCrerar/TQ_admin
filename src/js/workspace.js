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
 * Last modified  : 2018-04-01 16:01:13
 */
import 'bootstrap';
import 'popper.js';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import modeSwitch from './modes'; // switch modes commands
import getPart from './getPart'; // server request that gets part data using part number
import savePart from './savePart'; // function that writes to the web server

$('[data-toggle="popover"]').popover();

let consoleMode = 'view';

/* DEV CODE */

$(document).ready(() => {
  //console.log('Test Button Click');
  var getNumbers = require('./getNumbers');
  var getMakes = require('./getMakes.js');
  getNumbers();
  getMakes();
});
/*
$('#models').on('click', ev => {
  console.log(ev);
});
*/

/* /DEV CODE */

/* CONFIGURE ALERTS */

// Hide alert
$('.hideAlert').click(() => {
  $('.alert').slideUp();
  $('.alertOverlay').fadeOut();
  $('.alertOverlay').css('z-index', '-100');
});

// Show alert
const showAlert = userAlert => {
  $(userAlert).slideDown();
  $('.alertOverlay').css('z-index', '5900').fadeIn();
};

/* CONFIGURE TOOLTIPS */

// Edit button
var dcEdit = 'Edit mode will become available after a part has been displayed.';
$('#edit').attr('data-content', dcEdit);

/* BUTTON ACTIONS */

// Show Part button
$('#showPart').on('click', () => {
  if (
    $('#partNumber').val() != '' && // if partnumber is blank
    window.partNumbers.includes($('#partNumber').val()) // if part number entered does not exist
  ) {
    //console.log('TRUE');
    getPart($('#partNumber').val()); // take part numbers and populate form
    $('#edit').removeClass('disabled'); // enable edit button
    $('#edit').removeAttr('data-toggle').removeAttr('data-content'); // remove current popover
  } else {
    showAlert($('#noPartNumber')); // show alert of incorrect values
  }
});

// Add new button

// Edit button
$('#edit').on('click', () => {
  Promise.resolve(modeSwitch.editMode()) // switch to edit mode
    .then(() => {
      consoleMode = 'edit'; // set console variable mode to edit
      $('#cancel').on('click', () => {});
      $('#save').on('click', () => {});
    })
    .catch(err1 => {
      console.error('ERROR while switching to editmode: ', err1);
    });
});

/* DOCUMENT LOAD ACTIONS */
$(document).ready(() => {
  $('#edit').popover('show');
  setTimeout(() => {
    $('#edit').popover('hide');
  }, 5000);
});
