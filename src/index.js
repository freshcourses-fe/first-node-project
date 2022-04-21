'use strict';
import './style.css';
// const componentObj = require('./Component');
// import { Component, data } from './Component';
// import * as componentObj from './Component';
import { Component, data as isOnline, myFunc } from './Component';

import MathMy, * as object from './MyMath';


console.log(isOnline);

myFunc();

console.log(MathMy.sum(2, 2));

console.log(object);
