
//  Basics - Variables, Conditionals, and Output
function checkAge() {
  const age = document.getElementById("ageInput").value; // Variable declaration
  let result = "";

  if (age >= 18) { // Conditional
    result = " You are eligible to vote!";
  } else {
    result = " Sorry, you are not old enough yet.";
  }

  document.getElementById("ageResult").textContent = result;
}

//  Functions - Reusability
function calculateTotal(a, b) {
  const total = a + b;
  document.getElementById("totalResult").textContent = `The total is: ${total}`;
  return total;
}

// Another function: format a string
function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(formatName("jaVaScRiPt")); // Example usage

//  Loops
function showNumbers() {
  const list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear before adding

  // For loop
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Number ${i}`;
    list.appendChild(li);
  }

  // While loop example (console output)
  let count = 5;
  while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
  }
}

//  DOM Manipulation
const toggleBtn = document.getElementById("toggleBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  message.classList.toggle("hidden");
});

const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

addItemBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `Item ${dynamicList.children.length + 1}`;
  dynamicList.appendChild(li);
});
