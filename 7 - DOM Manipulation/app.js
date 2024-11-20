// DOM Manipulation
// D - Document
// 0 - Object
// M - Model
// Document - Object
/*
    Object has:
    Property - description
    Method - actions
*/
console.log(document);

// Accessing elements using getElementById
// . - dot notation
let elementWithId = document.getElementById("first-div");
console.log(elementWithId);
elementWithId.textContent = "Div 1";

// Accessing Elements using getElementByTagName
let listItems = document.getElementsByTagName("li");
console.log(listItems);
listItems[0].textContent = "Tag Name Changed";

// Accessing Elements using getElementsByClassName
let elementWithClass = document.getElementsByClassName("sample-div");
console.log(elementWithClass);
elementWithClass[1].textContent = "Div 2";
console.log(elementWithClass[2]);

// Accessing Elements using querySelector
let orderedListItems = document.querySelector(".ordered-list");
console.log(orderedListItems);
orderedListItems.style.backgroundColor = "grey";

// Accessing Elements using querySelectAll
let headings = document.querySelectorAll("h3");
console.log(headings);
headings[0].style.color = "crimson";

headings.forEach(function (heading) {
    heading.style.color = "tomato";
    heading.style.backgroundColor = "lightblue";
  });

// Update Element Attributes
let dayNightIcon = document.getElementById("day-night-icon");
console.log(dayNightIcon);
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Remove an element
let elementToBeRemoved = document.getElementById("element-to-be-removed");
console.log(elementToBeRemoved);
elementToBeRemoved.remove();

// Adding Event Listeners
// Manipulate Element Styles
// EventListener - pays attention to anything that may occur or happen
// 1 value - indicator for event to happen
let darkModeBtn = document.getElementById("dark-mode-btn");
console.log(darkModeBtn);
darkModeBtn.addEventListener("click", function() {
    
});

darkModeBtn.addEventListener("click", function () {
    let pageContainer = document.getElementById("page-container");
    let pageModeText = document.getElementById("page-mode-text");
  //   console.log(pageContainer);
  //   console.log(pageModeText);
  });

  darkModeBtn.addEventListener("click", function () {
    let pageContainer = document.getElementById("page-container");
    let pageModeText = document.getElementById("page-mode-text");
    //   console.log(pageContainer);
    //   console.log(pageModeText);
    pageContainer.style.backgroundColor = "black";
    pageModeText.style.color = "white";
  });

  darkModeBtn.addEventListener("click", function () {
    let pageContainer = document.getElementById("page-container");
    let pageModeText = document.getElementById("page-mode-text");
    //   console.log(pageContainer);
    //   console.log(pageModeText);
    //   pageContainer.style.backgroundColor = "black";
    //   pageModeText.style.color = "white";
    if (darkModeBtn.textContent === "Dark Mode") {
      pageContainer.style.backgroundColor = "black";
      pageModeText.style.color = "white";
      darkModeBtn.textContent = "Light Mode";
    } else {
      pageContainer.style.backgroundColor = "white";
      pageModeText.style.color = "black";
    }
  });

  if (darkModeBtn.textContent === "Dark Mode") {
    pageContainer.style.backgroundColor = "black";
    pageModeText.style.color = "white";
    darkModeBtn.textContent = "Light Mode";
    pageModeText.textContent = "Dark Mode";
  } else {
    pageContainer.style.backgroundColor = "white";
    pageModeText.style.color = "black";
    darkModeBtn.textContent = "Dark Mode";
    pageModeText.textContent = "Light Mode";
  }