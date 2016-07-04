/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./view.jsx", "../header/component", "../main/component", "../footer/component"], function(todoappView, headerComponent, mainComponent, footerComponent) {
      return (root.todoappComponent = factory(todoappView, headerComponent, mainComponent, footerComponent));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.todoappComponent = factory(require("./view.jsx"), require("../header/component"), require("../main/component"), require("../footer/component")));
  }
  else {
    root.todoappComponent = factory(root.todoappView, root.headerComponent, root.mainComponent, root.footerComponent);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(todoappView, headerComponent, mainComponent, footerComponent) {
    var viewModel = function(model) {
      var viewModel = model;
      var by = model.filter;
      var completed = by === "completed";

      var filterBy = (by && by !== "all") ? function(todo) {
        return (!!todo.completed) === completed;
      } :
      function() {
        return true;
      };
      viewModel.filteredTodos = model.todos.filter(filterBy);

      var notCompleted = function(todo) { return !todo.completed; };
      var itemsLeft = viewModel.filteredTodos.filter(notCompleted).length;
      viewModel.itemsLeftText = viewModel.filteredTodos.length > 0 ?
        (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
      viewModel.clearCompleted = (viewModel.filteredTodos.length - itemsLeft) > 0;

      viewModel.allSelected = model.filter === "all";
      viewModel.activeSelected = model.filter === "active";
      viewModel.completedSelected = model.filter === "completed";

      return viewModel;
    };

    return function(createComponent, todoStorage) {
      var header = headerComponent(createComponent, todoStorage);
      var main = mainComponent(createComponent, todoStorage);
      var footer = footerComponent(createComponent, todoStorage);

      var view = todoappView(header, main, footer);

      return createComponent({
        view: function(model) {
          return view(viewModel(model));
        }
      });
    };
  }
));
