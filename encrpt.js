import bcrypt from "bcrypt";

//user create a password and signUP, we store its hash value in DB
let my_password = "@$$-5oo5s";
let hash_value;

bcrypt.hash(my_password, 9, function (err, hash) {
  // Store hash in your password DB.

  //creating hash value and store it in DB
  if (err) {
    console.log("Error occurred:", err.message);
  } else {
    console.log(hash);
    hash_value = hash;
  }

  bcrypt.compare(my_password, hash_value, function (err, result) {
    console.log("in 1st");
    // result == true
    // Compare his hash value and password entered at the time of logging
    if (err) {
      console.log(err.message);
    } else {
      console.log(result);
    }
  });

  my_password = "@$$-5o00o5s"; // If User enter wrong password

  bcrypt.compare(my_password, hash_value, function (err, result) {
    // result == false
    console.log("in 2nd");

    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});
