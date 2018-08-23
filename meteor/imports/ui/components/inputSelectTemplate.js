import './inputSelectTemplate.html';

Template.inputSelect.helpers({
  runner: function () {
    let a = [],
      i;
    for (i = 18; i <= 100; i++) {
      a.push({
        age: i
      });
    }
    return a;
  }
});