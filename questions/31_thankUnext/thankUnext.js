// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):

Array.prototype.next = function () {
  if (!this.idx) {
    this.idx = 0;
  }
  console.log(this[this.idx]);
  if (this.idx === 0) {
    this.idx++
  }
  if (this.idx === this.length - 1) {
    this.idx--
  }
}

// no export statement required