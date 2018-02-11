var some1 = {
  printFirstName: function () {
      console.log("This is some1");
      console.log(this === some1); //true
  }
};

some1.printFirstName();


// default calling context is global
function doNothing() {
    console.log("\ndoing nothing");
    console.log(this === global); //true
    console.log(this === some1); //false
}

doNothing()