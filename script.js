// JAVASCRIPT BASICS

// 1. Get last n characters of a string

function myFunction(str) {
  return str.slice(-3);
}

// 2. Get the Nth Character in a String

function myFunction(a, n) {
  return a.charAt(n - 1);
}

function myFunction(a, n) {
  return a[n - 1];
}

// 3. Get first 3 character of string

function myFunction(a) {
  return a.slice(3);
}

// 4. Get first half of the string

function myFunction(a) {
   return a.slice(0, a.length/2)
}


// 5. Get b percent of a and return

function myFunction(a, b) {
   let per = b/100 * a;
   return per;
}
