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
 * Last modified  : 2018-04-02 12:52:19
 */
import loadingImg from '../img/loading.gif';
$('body').css('height', window.innerHeight);

/* LOAD HTML */
import metaHtml from '../html/meta.html';
import loginHtml from '../html/login.html';
$('head').prepend(metaHtml);
$('body').prepend(loginHtml);

/* Dev --> comment out for production */

//$('body').css('height', screen.height);
/*$('body').prepend(require('../html/workspace.html'));
//$('.workSpace').css('display', 'block');
$('.alertOverlay')
  .css('height', screen.availHeight)
  .css('width', screen.availWidth);
*/

//$('body').css('height', screen.height);
$('body').prepend(require('../html/workspace.html'));
$('.alertOverlay')
  .css('height', screen.availHeight)
  .css('width', screen.availWidth);
$('#loadingImg').attr('src', loadingImg); // assign loading image
