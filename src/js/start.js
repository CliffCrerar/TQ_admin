/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Start page formatting
 * @author Cliff Crerar
 *
 * Created at     : 2018-03-22 22:12:05 
 * Last modified  : 2018-03-27 23:37:25
 */

/* LOAD HTML
import metaHtml from '../html/meta.html';
import loginHtml from '../html/login.html';
$('head').prepend(metaHtml);
$('body').prepend(loginHtml);
$('body').height(window.innerHeight);
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});*/

/* Dev --> comment out for production */
$('body').css('height', screen.height);
$('body').prepend(require('../html/workspace.html'));
$('.workSpace').css('display', 'block');
