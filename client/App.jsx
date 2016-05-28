
import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo';
import project from 'pages/project';
import funnySquares from 'pages/funnySquares';
import canvasAscii from 'pages/canvasAscii';
import header from 'components/header';


$(function(){

  // what page are we on?
  var url = window.location.pathname;

  // our first javascript router
  switch (url) {
    case '/pages/todo.html':
      todos.init();
    break;
    case '/pages/project.html':
      // init the project javascript
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
  }

});

