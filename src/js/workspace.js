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
 * Last modified  : 2018-04-01 23:28:14
 */
import 'bootstrap';
import 'popper.js';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import modeSwitch from './modes'; // switch modes commands
import getPart from './getPart'; // server request that gets part data using part number
import savePart from './savePart'; // function that writes to the web server
import formToObj from './formToPartObj'; // get function that turns form to object
import showAlert from './alerts'; // get show alert function
import loading from './loading'; // get loading controls
import localizeImg from './localizeImg'; // get procedure to localize images

let consoleMode = 'view';
let msgTimeout = 2000;

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

/* CONFIGURE TOOLTIPS */

// Edit button
var dcEdit = 'Edit mode will become available after a part has been displayed.';
$('#edit').attr('data-content', dcEdit);

// Edit mode Cancel button
var edtCancel =
  'Are you sure you want to cancel? All updates will be lost.<br>' +
  ' <button id="edtCancelYes" class="btn btn-warning">YES</button>' +
  ' <button id="edtCancelNo" class="btn btn-primary float-right">NO</button>';
$('#edtCancel').attr('data-content', edtCancel);

// TOGLE OPTIONS
const options = {
  html: true
};
$('[data-toggle="popover"]').popover(options); // activate popovers
/* BUTTON ACTIONS */

// Show Part button
$('#showPart').on('click', () => {
  if (
    $('#partNumber').val() != '' && // if partnumber is blank
    window.partNumbers.includes($('#partNumber').val()) // if part number entered does not exist
  ) {
    //console.log('TRUE');
    loading.startLoading();
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
      // Clicking cancel in edit mode
      $('#edtCancel').on('click', () => {
        //console.log('edt cancel click');
        $('.popover').css('z-index', '4500'); // change popover z-index to show over next/previous arrow
        // if cancel is clicked no changes are made
        $('#edtCancel').addClass('disabled'); // disable cancel button, inputs only from popover
        // Continue with cancelation action
        $('#edtCancelYes').on('click', () => {
          $('#edtCancel').popover('hide'); // hide popover
          $('#edtCancel').removeClass('disabled'); // enable cancel button
          modeSwitch.viewMode(); // switch to view mode
          $('#showPart').click(); // display part as shown before edit
        });
        // Stop cancelation actions and continue editing
        $('#edtCancelNo').on('click', () => {
          //console.log('popover No');
          $('#edtCancel').popover('hide'); // hide popover
          $('#edtCancel').removeClass('disabled'); // enable cancel button
        });
      });
      $('#edtSave').on('click', () => {
        //console.log(formToObj());
        savePart(formToObj(), 'savePart'); // envoke save part procedure
        loading.startLoading(); // display loading gif
      });
    })
    .catch(err1 => {
      console.error('ERROR while switching to editmode: ', err1);
    });
});

/* LOCALIZATION OF IMAGE */
$('#localizeImg').on('click', () => {
  console.log('Localise image click');
  var partNumber = $('#partNumber').val(); // get current part number
  console.log(partNumber);
  localizeImg(partNumber); // send localisation instruction to web server
});

/* DOCUMENT LOAD ACTIONS */
$(document).ready(() => {
  $('#edit').popover('show');
  setTimeout(() => {
    $('#edit').popover('hide');
  }, msgTimeout);
});

/* CONFIGURE KEY STROKES */
$('body').on('keydown', ev => {
  console.log(ev.originalEvent.key);
  var key = ev.originalEvent.key;
  switch (key) {
    case 'Enter':
      $('#showPart').click();
      break;
    case 'Escape':
      $('.close').click();
      break;
  }
});
