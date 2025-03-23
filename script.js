function addDiv() {
  //create a new div element
  const newDiv = document.createElement("div");

  //give it content
  const newContent = document.createTextNode("New Div");

  //add the text node to the newly created div
  newDiv.appendChild(newContent);

  //add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("container");
  document.body.insertBefore(newDiv, currentDiv);
}

//loop it 14 times
for (let i = 1; i < 15; i++) {
  addDiv();
}
