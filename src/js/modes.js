module.exports = {
  // VIEW MODE
  viewMode() {
    console.log('SWITCH TO VIEW MODE');
    console.log($('#editModeBtns').css('display'));
    console.log($('#addModeBtns').css('display'));
    var prevMode = '';
    if ($('#editModeBtns').css('display') == 'block') {
      prevMode = 'edit';
      $('#editModeBtns').hide();
    } else if ($('#addModeBtns').css('display') == 'block') {
      prevMode = 'add';
      $('#addModeBtns').hide();
    }
    $('#viewModeBtns').show();
    console.log(prevMode);
    $('.dis').addClass('disabled').attr('readonly');
    $('#partNumber').removeClass('disabled').removeAttr('readonly');
    //$('#edit').removeClass('disabled');
    $('#modeDesc')
      .removeClass('eMode aMode')
      .addClass('vMode')
      .html('<b>VIEW MODE</b>');
  },
  // ADD MODE
  addMode() {
    console.log('SWITCH TO VIEW MODE');
    $('#modeDesc')
      .removeClass('eMode vMode')
      .addClass('aMode')
      .html('<b>ADD MODE</b>');
  },
  // EDIT MODE
  editMode() {
    console.log('SWITCH TO EDIT MODE');

    //console.log(btns);
    //console.log(editBtns);
    $('.dis').removeClass('disabled').removeAttr('readonly');
    $('#viewModeBtns').hide();
    $('#editModeBtns').show();
    $('#partNumber').addClass('disabled').attr('readonly');
    $('#modeDesc')
      .removeClass('vMode aMode')
      .addClass('eMode')
      .html('<b>EDIT MODE</b>');
  }
};
