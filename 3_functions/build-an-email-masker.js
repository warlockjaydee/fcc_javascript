function maskEmail(email) {
  let length = email.length;
  let posOfAt = email.indexOf("@");
  let suffix = email.slice(posOfAt,length)

  return email.slice(0,1) + "*".repeat(posOfAt - 2) + email.slice(posOfAt - 1, posOfAt) + suffix; 
}

let email = "warlock@email.com"
console.log(maskEmail(email));


