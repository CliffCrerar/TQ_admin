module.exports = {
  viewMode() {
    $('.dis').addClass('disabled');
    $('#partNumber').removeClass('disabled');
    $('#showPart').show();
    $('#addNew').show();
    $('#addNew').removeClass('btn-dark').removeClass('col-5');
    $('#addNew').addClass('btn-success').addClass('col-3').html('+NEW');
    $('#edit_save').removeClass('btn-danger').removeClass('col-10');
    $('#edit_save').addClass('btn-warning').addClass('col-4');
    $('#edit_save').html('<b>EDIT<b>');
    $('#partNumber').autocomplete('enable');
  },
  addMode() {
    $('.dis').removeClass('disabled');
    $('.dis').val('');
    $('.mSelect').children().remove();
    $('#showPart').hide();
    $('#addNew').removeClass('btn-success').removeClass('col-3');
    $('#addNew').addClass('btn-dark').addClass('col-5').html('CANCEL');
    $('#edit_save').removeClass('btn-warning').removeClass('col-4');
    $('#edit_save').addClass('btn-danger').addClass('col-5').html('SAVE');
    $('#partNumber').focus();
    $('#partNumber').autocomplete('disable');
  },
  editMode() {
    $('.dis').removeClass('disabled');
    $('#partNumber').addClass('disabled');
    $('#showPart').hide();
    $('#addNew').hide();
    $('#edit_save').removeClass('btn-warning').removeClass('col-4');
    $('#edit_save').addClass('btn-danger').addClass('col-10');
    $('#edit_save').html('<b>SAVE<b>');
  }
};
