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

function updateTagDisplay() {
  // clear tag display
  tagDisplay.innerHTML = '';
  // create tag display element for each color
  const redBlocks = document.querySelectorAll('.red');
  const orangeBlocks = document.querySelectorAll('.orange');
  const yellowBlocks = document.querySelectorAll('.yellow');
  const greenBlocks = document.querySelectorAll('.green');
  const blueBlocks = document.querySelectorAll('.blue');
  const indigoBlocks = document.querySelectorAll('.indigo');
  const violetBlocks = document.querySelectorAll('.violet');
  if (redBlocks.length > 0) {
      createTagDisplayElement('Red', redBlocks.length, 'red', redBlocks.length * 10);
  }
  if (orangeBlocks.length > 0) {
      createTagDisplayElement('Orange', orangeBlocks.length, 'orange', orangeBlocks.length * 10);
  }
  if (yellowBlocks.length > 0) {
      createTagDisplayElement('Yellow', yellowBlocks.length, 'yellow', yellowBlocks.length * 10);
  }
  if (greenBlocks.length > 0) {
      createTagDisplayElement('Green', greenBlocks.length, 'green', greenBlocks.length * 10);
  }
  if (blueBlocks.length > 0) {
      createTagDisplayElement('Blue', blueBlocks.length, 'blue', blueBlocks.length * 10);
  }
  if (indigoBlocks.length > 0) {
      createTagDisplayElement('Indigo', indigoBlocks.length, 'indigo', indigoBlocks.length * 10);
  }
  if (violetBlocks.length > 0) {
      createTagDisplayElement('Violet', violetBlocks.length, 'violet', violetBlocks.length * 10);
  }
};

function createTagDisplayElement(name, count, color, time) {
  const tagDisplayElement = document.createElement('div');
  tagDisplayElement.classList.add('tag');
  const tagColor = document.createElement('div');
  tagColor.classList.add('tag-color');
  tagColor.classList.add(color);
  const tagName = document.createElement('div');
  tagName.innerText = name;
  tagName.classList.add(color);
  const tagCount = document.createElement('div');
  tagCount.innerText = count;
  tagCount.classList.add(color);
  const tagTime = document.createElement('div');
  tagTime.innerText = `${time} minutes`;
  tagTime.classList.add(color);
  tagDisplayElement.appendChild(tagColor);
  tagDisplayElement.appendChild(tagName);
  tagDisplayElement.appendChild(tagCount);
  tagDisplayElement.appendChild(tagTime);
  tagDisplay.appendChild(tagDisplayElement);
};

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
