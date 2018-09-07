'use strict';

var imported = document.createElement('script');
imported.src = '/javascripts/promise-7.0.4.min.js';
document.head.appendChild(imported);

var HOST = document.URL.match('//localhost') ?
  '//localhost:4000/api/v1' : '//amz-sol-api.herokuapp.com/api/v1';

var findById = function(id) {
  return document.getElementById(id);
};

function getInputValue(id) {
  return findById(id).value;
}

function hide(id) {
  findById(id).style.display = 'none';
}

function show(id) {
  findById(id).style.display = 'block';
}

var json = function(response) {
  return response.json();
};

var http = function(url, options, success, failure) {
  // var options = {
  //   method: 'post',
  //   headers: {
  //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  //   },
  //   body: 'foo=bar&lorem=ipsum',
  // };

  if (!options.headers) options.headers = {};
  if (!options.headers['Content-Type']){
    options.headers['Content-Type'] = 'application/json; charset=utf-8';
  }
  console.log('HTTP: ', url, options);

  fetch(url, options)
    .then(function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        Promise.resolve(response.json())
          .then(function(json) {
            failure(json);
          });

        return Promise.reject(new Error(response.statusText));
      }
    })
    .then(function(response) { return response.json(); })
    .then(function(data) {
      success(data);
    })
    .catch(function(err) {
      console.log('Request failed', err);
    });
};

function showSnackbar(message) {
  // Get the snackbar DIV
  var x = findById('snackbar');

  if (message) {
    findById('snackbar').innerText = message;
  }

  // Add the "show" class to DIV
  x.className = 'show';

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){
    x.className = x.className.replace('show', '');
  }, 3000);
}

function getErrorText(json) {
  var errorData = json.data;
  var text = 'Something went wrong ...';
  if (typeof errorData === 'object') {
    if (errorData.code === '23505') {
      // duplicate record
      text = 'Record already exists: ' + errorData.detail;
    }
  } else {
    text = (typeof errorData === 'string') ? errorData : json.message;
  }

  console.log('Errorr0', json, text);
  return text;
}
