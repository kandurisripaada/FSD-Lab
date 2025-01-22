function delayedMessage(message, delay, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, delay);
}

function message1() {
  console.log("The message has been printed.");
}

delayedMessage("Hello, this is a delayed message!", 2000, message1);
