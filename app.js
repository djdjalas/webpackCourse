var api = require('./api.js');
var $ = require('jquery');

var users = api.getUsers();

$.each(users, function(index, user) {
  $(document.body).append(index + "<p> name " + user.name + ' age ' + user.age + "</p>" );
});
