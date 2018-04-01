module.exports = {
  viewMode() {},
  addMode() {},
  editMode() {
    var editBtns = require('../html/editModeBtn.html');
    //console.log(btns);
    console.log(editBtns);
    $('.dis').removeClass('disabled').removeAttr('readonly');
    $('#viewModeBtns').remove();
    $('#partEntry').append(editBtns);
    $('#partNumber').addClass('disabled').attr('readonly');
  }
};
