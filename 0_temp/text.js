let email = "warlock@email.com"

  let length = email.length;
  let posOfAt = email.indexOf("@");
  let suffix = email.slice(posOfAt,length)

console.log(email.slice(0,1) + "*".repeat(posOfAt - 2) );

console.log(email.slice(0,1) + "*".repeat(posOfAt - 2) + email.slice(posOfAt - 1, posOfAt) + suffix); 
console.log(length);
console.log(posOfAt); // 7
console.log(suffix);
