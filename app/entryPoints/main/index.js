// style
require('./styles/main');

// scripts
const api = require('Api/users');
const $ = require('jquery');
const users = api.getUsers();
const sectionThreeSolution = require("sectionThreeSolution");
const welcomeUser = require('welcomeUser');
require('reactApp');
require('typescript/appConfig');

sectionThreeSolution('USD', fxRates => console.log(fxRates));

console.log(process.env.NODE_ENV);
// console.log(env);

// hello

/*
loop with jquery
$.each(users, function(index, user) {
  $(document.body).append(`<p> ${index} - name ${user.name} age ${user.age} </p>` );
});
*/

welcomeUser('Joness');
