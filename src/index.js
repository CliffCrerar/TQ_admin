/**
 * Property of IA
 *
 * TQ Admin console
 *
 * @summary Application entry point
 * @author Cliff Crerar
 *
 * Created at     : 2018-03-22 21:02:57 
 * Last modified  : 2018-03-22 22:23:45
 */

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './css/login.css';
import './js/start';
import './css/general.css'; 
import metaHtml from './html/meta.html';
import loginHtml from './html/login.html';
$('head').prepend(metaHtml);
$('body').prepend(loginHtml);