// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  'use strict';

  var url = 'https://randomuser.me/api/?results=12';
  var container = document.getElementById('container');

  fetch(url).then(function(response){
    response.json().then(function(customers){
      console.log(customers);
      for (var i = 0; i < customers.results.length; i++) {
        displayCustomer(customers.results[i]);
      }
    });
  });

  function displayCustomer(obj) {
    var person = document.createElement('div');
    var name = document.createElement('span');
    var email = document.createElement('span');
    var street = document.createElement('span');
    var cityState = document.createElement('span');
    var phone = document.createElement('span');
    person.innerHTML = '<img src="' + obj.picture.large + '">';
    name.innerHTML = obj.name.first + ' ' + obj.name.last;
    email.innerHTML = obj.email;
    street.innerHTML = obj.location.street;
    cityState.innerHTML = obj.location.city + ' ' + obj.location.state + ' ' + obj.location.postcode;
    phone.innerHTML = obj.phone;
    container.appendChild(person);
    person.appendChild(name);
    person.appendChild(email);
    person.appendChild(street);
    person.appendChild(cityState);
    person.appendChild(phone);


  }

})();
// + obj.name.first + ' ' + obj.name.last + obj.email;
// person.innerHTML = '<img src="' + obj.picture.large + '">';
// person.innerHTML += obj.name.first + ' ' + obj.name.last;
// person.innerHTML += obj.email;
// person.innerHTML += obj.location.street;
// person.innerHTML += obj.location.city + ' ' + obj.location.state + ' ' + obj.location.postcode;
// person.innerHTML += obj.phone;
// container.appendChild(person);
