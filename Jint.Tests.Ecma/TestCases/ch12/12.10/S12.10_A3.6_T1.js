// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * No matter how control leaves the embedded 'Statement',
 * the scope chain is always restored to its former state
 *
 * @path ch12/12.10/S12.10_A3.6_T1.js
 * @description Using "with" statement within another "with" statement, leading to normal completion
 * @noStrict
 */

this.p1 = 1;

var result = "result";

var myObj = {
    p1: 'a', 
    value: 'myObj_value',
    valueOf : function(){return 'obj_valueOf';}
}

var theirObj = {
    p1: true, 
    value: 'theirObj_value',
    valueOf : function(){return 'thr_valueOf';}
}

with(myObj){
    with(theirObj){
        p1 = 'x1';
  }
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(p1 !== 1){
  $ERROR('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== "a"){
  $ERROR('#2: myObj.p1 === "a". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(theirObj.p1 !== "x1"){
  $ERROR('#3: theirObj.p1 === "x1". Actual:  theirObj.p1 ==='+ theirObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////



