/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Get user input and authenticates agains the server
 * @author Cliff Crerar
 *
 * Created at     : 2018-03-23 17:48:17 
 * Last modified  : 2018-04-02 12:11:16
 */

var req = require('./loginReq.js');
$('[data-toggle="tooltip"]').tooltip();
$('#loginButton').on('click', ev => {
  //console.log('click');
  var login = {
    userName: $('#userName').val(),
    password: $('#password').val()
  };
  req(login);
  //console.log(req(login));
});
