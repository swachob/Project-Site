var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import Backbone from 'backbone';
import Handlebars from 'handlebars';
import todoItemTemplate from 'templates/todoItem.html';

var TodoItemView = Backbone.View.extend({
  tagName: 'li', // el = <li></li>
  className: 'list-group-item row',
  events: {
    'click .close': 'removeItem',
    'change .completed-checkbox': 'completedClicked',
    'click .title': 'titleClicked',
    'keypress .title-edit-input': 'titleEditConfirm'
  },
  template: Handlebars.compile(todoItemTemplate),
  initialize: function(todo, controller){
    this.controller = controller;
    this.data = todo;
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.data));
    this.$title = this.$el.find('.title');
    this.$titleEdit = this.$el.find('.title-edit');
    this.$titleInput = this.$titleEdit.find('.title-edit-input'); // using titleEdit instead of el b/c t-e-i is within title-edit
    this.$el.toggleClass('disabled', this.data.completed);
  },
  removeItem: function(){
    this.controller.removeItem(this.data.id);
  },
  completedClicked: function(event){
    var isChecked = $(event.currentTarget).is(':checked');
    this.controller.itemCompleted(this.data.id, isChecked);
  },
  titleClicked: function(){
    this.$title.addClass('hidden');
    this.$titleEdit.removeClass('hidden');
    this.$titleInput.focus();
    // this.$title.add(this.$titleEdit).toggleClass('hidden')
  },
  titleEditConfirm: function(event){
    if (event.which === 13) {
      // they hit the enter key
      var newTitle = this.$titleInput.val();
      this.controller.titleEdit(newTitle, this.data.id);
    }
  }
});

module.exports = TodoItemView;
