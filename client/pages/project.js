
var $ = require('jquery');

window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Handlebars from 'handlebars';
import lscache from 'lscache';

$('.carousel').carousel({
	interval: 2000,
	pause: "hover"
});


module.exports = app;
