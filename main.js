// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  'use strict';

  var url = 'https://randomuser.me/api/?results=12';
  var container = document.getElementById('container');

  fetch(url).then(function(response){
    response.json().then(function(customers){
      for (var i = 0; i < customers.results.length; i++) {
        displayCustomer(customers.results[i]);
      }
    });
  });

  function displayCustomer(obj) {
    var person = document.createElement('div');
    var name = document.createElement('h2');
    var email = document.createElement('h5');
    var street = document.createElement('span');
    var cityState = document.createElement('span');
    var phone = document.createElement('span');
    var soc = document.createElement('h4');
    person.innerHTML = '<img src="' + obj.picture.large + '">';
    name.innerHTML = obj.name.first + ' ' + obj.name.last;
    email.innerHTML = obj.email;
    street.innerHTML = obj.location.street;
    cityState.innerHTML = obj.location.city + ' ' + obj.location.state + ' ' + obj.location.postcode;
    phone.innerHTML = obj.phone;
    heading.textContent = 'INTERNAL COMPANY DIRECTORY';
    soc.textContent = '823-74-1534';
    container.appendChild(person);
    person.appendChild(name);
    person.appendChild(email);
    person.appendChild(street);
    person.appendChild(cityState);
    person.appendChild(phone);
    person.appendChild(soc);

  }
  var heading = document.createElement('h1');
  container.appendChild(heading);

})();
