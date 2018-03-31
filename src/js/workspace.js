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
 * Last modified  : 2018-03-29 20:12:31
 */
import 'bootstrap';
import 'popper.js';
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
require('./alerts');
const modeSwitch = require('./modes');

$('[data-toggle="popover"]').popover();

const getPart = require('./getPart'); // server request that gets part data using part number
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
});*/

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

/* DATA VALIDATION */
const validate = () => {
  var completeInputs = true;
  var completeSelects = true;
  // validate inputs and textareas
  $('input,textarea').each((i, el) => {
    $(el).css('border', 'rgb(230, 227, 227)');
    if ($(el).val() == '') {
      completeInputs = false;
      $(el).css('border', 'red');
    }
  });
  // validate selects
  $('select').children().each((i, el) => {
    $(el).css('border', 'rgb(230, 227, 227)');
    if ($(el).val() == '') {
      completeSelects = false;
      $(el).css('border', 'red');
    }
  });
  // switch to edit mode or fail validation
  if (completeInputs && completeSelects) {
    modeSwitch.viewMode();
    consoleMode = 'view';
  } else {
    showAlert($('#newPartEntryIncomplete'));
  }
};

/* CONFIGURE TOOLTIPS */

// Show tool tip on how to use edit button
var tt1 =
  'You must call a part first by typing in the part number before you can use edit mode';
$('#edit_save')
  .attr('data-toggle', 'popover')
  .attr('data-placement', 'right')
  .attr('data-original-title', 'USING EDIT MODE')
  .attr('data-content', tt1);
$('#edit_save').popover('show');
$('.popover-body').append(
  '<br><button id="poBtnGotIt" class="po-btn btn btn-success btn-sm">Got it</button>'
);
setTimeout(() => {
  $('#edit_save').popover('dispose');
}, 10000);
$('#poBtnGotIt').on('click', () => {
  $('#edit_save').popover('dispose');
});

// Configure tooltip on multiselect
var tt3 = 'Hold CTRL in while click to select multiple models';
$('#models')
  .attr('data-toggle', 'popover')
  .attr('data-placement', 'left')
  .attr('data-original-title', 'MULTI SELECT')
  .attr('data-content', tt3);

/* POPULATE FORM ON CLICK */
$('#showPart').on('click', () => {
  console.log('get part click');
  var pNumber = $('#partNumber').val();
  console.log(pNumber);
  if (pNumber != '') {
    console.log('Part number selected');
    getPart(pNumber);
  } else {
    showAlert($('#noPartNumber'));
    //alert('You must select a valid part number');
  }
});
/* POPULATE FORM ON ENTER */
$('#partNumber').keypress(ev => {
  if (ev.key == 'Enter') {
    $('#showPart').click();
  }
});

/* SWITH TO EDIT MODE */
$('#edit_save').on('click', () => {
  if (consoleMode == 'view') {
    // check if save button is disabled and enable
    modeSwitch.editMode();
    consoleMode = 'edit';
    if ($('#edit_save').hasClass('disabled')) {
      $('#edit_save').removeClass('disabled');
    }
    $('#models').popover('show');
    $('.popover-body').append(
      '<br><button id="poBtnMTS" class="po-btn btn btn-success btn-sm">Got it</button>'
    );
    $('#poBtnMTS').on('click', () => {
      $('#models').popover('dispose');
    });
    validate();
  }
});

/* SWITCH TO ADD MODE */
$('#addNew').on('click', () => {
  modeSwitch.addMode();
  if (consoleMode == 'add') {
    modeSwitch.viewMode();
    consoleMode = 'view';
  } else {
    consoleMode = 'add';
  }

  // Start for completion promting
  // $('#workSpace').popover({ html: true });
  // COMPLETING PART NUMBER
  // turn off autocomplete while in add mode
  /*
  $('#partNumber').attr('data-original-title', 'PART NUMBER');
  $('#partNumber').attr(
    'data-content',
    'Make sure that the part number you are entering is correct'
  );
  $('#partNumber').popover('show');
  $('.popover-body').append(
    '<br><button id="poBtnCont" class="po-btn btn btn-success btn-sm">Ok</button>' +
      '<button id="poBtnCancel" class="po-btn btn btn-dark btn-sm float-right">Cancel</button>'
  );
  $('#poBtnCancel').on('click', () => {
    console.log('click po cancel');
    var inp = confirm(
      'Are you sure you want to stop capturing, all work will be lost'
    );
    if (inp) {
      console.log('confirm');
      $('input').val('');
      modeSwitch.viewMode();
      $('#partNumber').popover('dispose');
    } else {
      console.log('!confirmed');
    }
  });
  $('#poBtnCont').on('click', () => {
    console.log('click po ok');
    var entry = $('#partNumber').val();
    if (window.partNumbers.includes(entry)) {
      alert('This part number exists already and is not valid');
    } else if (entry == '') {
      alert('You have not entered anything, please enter a part number');
    } else {
      $('#partNumber').popover('dispose');
      $('.dis').removeClass('disabled');
      $('input, select, textarea').css('border-color', 'red');
      $('#imgLinkLocal')
        .addClass('disabled')
        .css('border-color', 'rgb(206, 212, 218)');
      $('.btnLocalize').addClass('disabled');
      var tt2 =
        'You can only use the save button once all red boxes are complete.';
      $('#edit_save')
        .attr('data-original-title', 'SAVING A NEW PART')
        .attr('data-content', tt2)
        .popover('show');
      setTimeout(() => {
        $('#edit_save').popover('dispose');
      }, 10000);
    }
  });*/
});

/* ADDING AND DELETING MODELS */
$('#addModel').on('click', () => {
  Promise.resolve($('#addModels').modal('show')).then(() => {
    $('#btnAddModel').on('click', () => {
      var newModel = $('#modelInput').val();
      $('#models').append('<options>' + newModel + '</options>');
      //$('#models').multiselect('rebuild');
      $('#modelInput').val('');
      $('#addModels').modal('hide');
    });
    $('#btnAddCancel').modal('hide');
  });
});
$('#remModel').on('click', () => {});

$('.popover-dismiss').popover({
  trigger: 'focus'
});
