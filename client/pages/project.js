
var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Handlebars from 'handlebars';
import lscache from 'lscache';

var ProjectModel;
var PageView;

var app = {};
module.exports = app;
