let hasID = confirm("Do you have an ID");

// if hasID is confirmed the visitor is prompted for his age
if (hasID) {
  let age = prompt("How old are you");
  if (age < 18) {
    alert("You're too young to be in here!");
  } else if (age > 18 && age < 21) {
    alert("Come on in! But no drinking!");
  } else if (age >= 21 && age <= 75) {
    alert("Come on in!");
  } else {
    alert("Are you sure you want to be here?");
  }
} else {
  alert("No ID no entry");
}
