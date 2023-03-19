/*
  ES2015 모듈 방식 : import/export 사용
    import React from "redux";
    import {Component} from "redux";
    import React, {Component} from "redux";
    import React as rd from "redux";
    import * as rd from "redux";
*/

// Module2.js

import b, { a, c } from './Module1.js';
debugger;
console.log(a);
console.log(b);
console.log(c);
