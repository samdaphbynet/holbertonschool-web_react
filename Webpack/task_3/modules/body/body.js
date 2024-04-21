import $ from 'jquery';
import { debounce } from 'lodash';

import './body.css';

// Html
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

//js

let counter = 0;

const updateCounter = () => {
  counter++;
  $('#count').html(`${counter} clicks on the button`);
};

$('button').on('click', debounce(updateCounter));