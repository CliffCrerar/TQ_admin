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
 * Last modified  : 2018-04-02 17:17:13
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
import localize from './localizeImg'; // get procedure to localize images
import addModel from '../html/smallModal.html'; // get html for small modal
import url from './reqUrl';

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
$('body').on('click', ev => {
  console.log(ev.target);
});

$('#tb').click(() => {
  //$('#partNumber').val('');
  $('.dis').val('');
  $('#models').empty();
});
$('#models').on('click', ev => {
  console.log(ev);
});
*/
/*
$('body').keydown(function(ev) {
  console.log(ev.originalEvent.key);
});

$('body').keyup(function(ev) {
  console.log(ev.originalEvent.key);
});
*/

/* /DEV CODE */

/* CONFIGURE TOOLTIPS */

// Edit button
$('#edit').popover({ trigger: 'hover' });
var dcEdit = 'Edit mode will become available after a part has been displayed.';
$('#edit').attr('data-content', dcEdit);

// Edit mode Cancel button
$('#edtCancel').popover({ html: true });
var edtCancel =
  'Are you sure you want to cancel? All updates will be lost.<br>' +
  ' <button id="edtCancelYes" class="btn btn-warning">YES</button>' +
  ' <button id="edtCancelNo" class="btn btn-primary float-right">NO</button>';
$('#edtCancel').attr('data-content', edtCancel);

/* BUTTON ACTIONS */

// Show Part button
$('#showPart').on('click', () => {
  clearForm(); // run the clear form procedure before populating;
  var number = $('#partNumber').val();
  var numbers = window.partNumbers;
  if (
    number != '' && // if partnumber is blank
    numbers.includes($('#partNumber').val()) // if part number entered does not exist
  ) {
    //console.log('TRUE');
    loading.startLoading();
    getPart($('#partNumber').val()); // take part numbers and populate form
    $('#edit').removeClass('disabled'); // enable edit button
    $('#edit').removeAttr('data-toggle').removeAttr('data-content'); // remove current popover
  } else {
    showAlert($('#noPartNumber')); // show alert of incorrect values
  }
  var currNum = numbers.indexOf(number) + 1;
  var count = numbers.length;
  $('.partCount').html(currNum + ' / ' + count);
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
        $('#edtCancel').popover('show');
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
  //console.log(partNumber);
  Promise.resolve(localize.download(partNumber)).then(val => {
    setTimeout(() => {
      //console.log('resolved');
      localize.check(partNumber);
    }, 2000);
  }); // send localisation instruction to web server
});

/* LINK TEST BUTTONS */
$('.imgBtnLinks').on('click', ev => {
  console.log('btn-links-click');
  if ($('#imgLinkLocalBtn').hasClass('btn-primary')) {
    //console.log('#imgLinkLocalBtn has btn primary');
    $('#imgLinkLocalBtn').removeClass('btn-primary').addClass('btn-secondary');
  } else if ($('#imgLinkBtn').hasClass('btn-primary')) {
    //console.log('#imgLinkBtn has btn primary');
    $('#imgLinkBtn').removeClass('btn-primary').addClass('btn-secondary');
  }
  $('#' + ev.target.id).removeClass('btn-secondary').addClass('btn-primary');
  //console.log(ev.target.id);
  if (ev.target.id == 'imgLinkLocalBtn') {
    $('#showImg').attr('src', url.fileServer() + $('#imgLinkLocal').val());
  } else if (ev.target.id == 'imgLinkBtn') {
    $('#showImg').attr('src', $('#imgLink').val());
  }
});

/* PREVIOUS NEXT ARROW BUTTONS */
$('.prevNextArrow').on('click', ev => {
  console.log('arrow click');
  var thisPart = $('#partNumber').val();
  var numbers = window.partNumbers;
  let currentNum;
  let currentIndex;
  console.log(thisPart);
  console.log(window.partNumbers);
  console.log(ev.currentTarget.parentNode.attributes[0].textContent);
  var arrow = ev.currentTarget.parentNode.attributes[0].textContent
    .replace('Arrow', '')
    .replace(' arrow', '');
  console.log(arrow);
  if (arrow == 'left' && thisPart == '') {
    var lastNum = numbers.length - 1;
    //console.log(lastNum);
    $('#partNumber').val(numbers[lastNum]);
    $('#showPart').click();
  } else if (arrow == 'right' && thisPart == '') {
    $('#partNumber').val(numbers[0]);
    $('#showPart').click();
  } else if (arrow == 'left' && thisPart != '') {
    currentNum = $('#partNumber').val();
    currentIndex = numbers.indexOf(currentNum);
    //console.log(currentIndex);
    if (currentIndex == 0) {
      $('#partNumber').val(numbers[numbers.length - 1]);
    } else {
      $('#partNumber').val(numbers[currentIndex - 1]);
    }
    $('#showPart').click();
  } else if (arrow == 'right' && thisPart != '') {
    currentNum = $('#partNumber').val();
    currentIndex = numbers.indexOf(currentNum);
    //console.log(currentIndex);
    if (currentIndex == numbers.length - 1) {
      $('#partNumber').val(numbers[0]);
    } else {
      $('#partNumber').val(numbers[currentIndex + 1]);
    }
    $('#showPart').click();
  }
});

$('.prevNextArrow').hover(() => {
  if ($('.arrow').hasClass('disabledArrow')) {
    console.log('arrow is disabled');
    $('.prevNextArrow').popover({ trigger: 'hover' });
    $('.prevNextArrow').attr(
      'data-content',
      'Arrows are only allowed when in view mode.'
    );
    $('.leftArrow').popover('show');
    $('.rightArrow').popover('show');
  }
});

/* ADD SELECT ATTRIBUTE TO MULTI OPTIONS */
$('#models').on('click', ev => {
  if (!cntrKeyPressed) {
    $('#models').children().each((i, el) => {
      $(el).removeClass('picked');
    });
  }
  //console.log(ev.target);
  $(ev.target).addClass('picked');

  //items = $('#models');
});

/* ADD REMOVE MODELS */
$('#addModel').on('click', () => {
  var newVal = $('#models').children().length;
  $('body').append(addModel);
  Promise.resolve($('#addModels').modal('show')).then(() => {
    $('#btnAddCancel').click(() => {
      //console.log('btn cancel click');
      $('#addModels').modal('hide');
      setTimeout(() => {
        $('#addModels').remove();
      }, 200);
    });
    $('#btnAddModel').click(() => {
      //console.log($('#modelInput').val());
      if ($('#modelInput').val() == '') {
        showAlert($('#noModelEntered'));
      } else {
        $('#models').append(
          '<option val="' + newVal + '">' + $('#modelInput').val() + '</option>'
        );
      }
      $('#addModels').modal('hide');
      setTimeout(() => {
        $('#addModels').remove();
      }, 200);
    });
  });
});
$('#remModel').on('click', () => {
  console.log($('#models').hasClass('picked'));
  console.log($('#models'));
  var deleteModels = [];
  var pickedForDel = $('.picked').length;
  console.log(pickedForDel);
  $('#remModel').popover({ html: true, placement: 'left' });
  if (pickedForDel < 1) {
    showAlert($('#noModelPicked'));
  } else {
    $('.picked').each((i, el) => {
      console.log(el.innerHTML);
      deleteModels.push(el.innerHTML);
    });
    var remModelPoMsg =
      'Are you sure you want to delete these models: ' +
      deleteModels +
      '<br>' +
      '<button id="remPopoverConfirm" class="btn btn-danger">YES</button>' +
      '<button id="remPopoverCancel" class="btn btn-info float-right">DONT</button>';
    $('#remModel').attr('data-original-title', 'ARE YOU SURE?');
    $('#remModel').attr('data-content', remModelPoMsg);
    Promise.resolve($('#remModel').popover('show')).then(() => {
      $('#remPopoverCancel').on('click', () => {
        $('#remModel').popover('dispose');
      });
      $('#remPopoverConfirm').on('click', () => {
        $('.picked').remove();
        $('#remModel').popover('dispose');
      });
    });
  }
});

/* CONFIGURE KEY STROKES */

$('body').on('keypress', ev => {
  //console.log(ev.originalEvent.key);
  var key = ev.originalEvent.key;
  switch (key) {
    case 'Enter':
      if ($('body').find('button#loginButton').length > 0) {
        $('#loginButton').click();
      } else {
        $('#showPart').click();
      }
      break;
    case 'Escape':
      $('.close').click();
      break;
  }
});

// Detect if control is pressed;
let cntrKeyPressed = false;
$('body').keydown(function(ev) {
  //console.log(ev.originalEvent.key);
  var keyDown = ev.originalEvent.key;
  if (keyDown == 'Control' || keyDown == 'Meta') {
    cntrKeyPressed = true;
    //console.log(cntrKeyPressed);
  }
});

$('body').keyup(function(ev) {
  //console.log(ev.originalEvent.key);
  var keyUp = ev.originalEvent.key;
  if (keyUp == 'Control' || keyUp == 'Meta') {
    cntrKeyPressed = false;
    //console.log(cntrKeyPressed);
  }
});

/* CLEAR ALL VALUES FROM FORM */

var clearForm = () => {
  //$('#partNumber').val('');
  $('.dis').val('');
  $('#models').empty();
};
