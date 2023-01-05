const blockContainer = document.getElementById("block-container");
const tagDisplay = document.getElementById("tag-display");

// generate 100 blocks
for (let i = 0; i < 100; i++) {
  const block = document.createElement("div");
  block.classList.add("block");
  blockContainer.appendChild(block);
}

const blocks = document.querySelectorAll(".block");

// add click event listener to each block
blocks.forEach((block) => {
  block.addEventListener("click", function () {
    // cycle through tag colors and assign to block
    if (!this.classList.contains("red")) {
      this.classList.add("red");
    } else if (!this.classList.contains("orange")) {
      this.classList.add("orange");
      this.classList.remove("red");
    } else if (!this.classList.contains("yellow")) {
      this.classList.add("yellow");
      this.classList.remove("orange");
    } else if (!this.classList.contains("green")) {
      this.classList.add("green");
      this.classList.remove("yellow");
    } else if (!this.classList.contains("blue")) {
      this.classList.add("blue");
      this.classList.remove("green");
    } else if (!this.classList.contains("indigo")) {
      this.classList.add("indigo");
      this.classList.remove("blue");
    } else if (!this.classList.contains("violet")) {
      this.classList.add("violet");
      this.classList.remove("indigo");
    } else {
      this.classList.remove("violet");
    }
    updateTagDisplay();
  });
});

function createTagDisplayElement(name, count, color) {
  const tagDisplayElement = document.createElement("div");
  tagDisplayElement.classList.add("tag");
  const tagColor = document.createElement("div");
  tagColor.classList.add("tag-color");
  tagColor.classList.add(color);
  const tagName = document.createElement("div");
  tagName.innerText = name;
  tagName.classList.add(color);
  const tagCount = document.createElement("div");
  tagCount.innerText = count;
  tagCount.classList.add(color);
  tagDisplayElement.appendChild(tagColor);
  tagDisplayElement.appendChild(tagName);
  tagDisplayElement.appendChild(tagCount);
  tagDisplay.appendChild(tagDisplayElement);
}

function updateTagDisplay() {
  // clear tag display
  tagDisplay.innerHTML = "";
  // create tag display element for each color
  const redBlocks = document.querySelectorAll(".red");
  const orangeBlocks = document.querySelectorAll(".orange");
  const yellowBlocks = document.querySelectorAll(".yellow");
  const greenBlocks = document.querySelectorAll(".green");
  const blueBlocks = document.querySelectorAll(".blue");
  const indigoBlocks = document.querySelectorAll(".indigo");
  const violetBlocks = document.querySelectorAll(".violet");
  createTagDisplayElement("Red", redBlocks.length, "red");
  createTagDisplayElement("Orange", orangeBlocks.length, "orange");
  createTagDisplayElement("Yellow", yellowBlocks.length, "yellow");
  createTagDisplayElement("Green", greenBlocks.length, "green");
  createTagDisplayElement("Blue", blueBlocks.length, "blue");
  createTagDisplayElement("Indigo", indigoBlocks.length, "indigo");
  createTagDisplayElement("Violet", violetBlocks.length, "violet");
  // update total time
  const totalTime =
    redBlocks.length * 10 +
    orangeBlocks.length * 10 +
    yellowBlocks.length * 10 +
    greenBlocks.length * 10 +
    blueBlocks.length * 10 +
    indigoBlocks.length * 10 +
    violetBlocks.length * 10;
  const totalTimeElement = document.createElement("div");
  totalTimeElement.id = "total-time";
  totalTimeElement.innerText = `Total Time: ${totalTime} minutes`;
  tagDisplay.appendChild(totalTimeElement);
}

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function () {
  // clear all blocks
  blocks.forEach((block) => {
    block.classList.remove(
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet"
    );
  });
  // update tag display
  updateTagDisplay();
});
