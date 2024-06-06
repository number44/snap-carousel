import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const carousel: HTMLElement | null = document.querySelector(".carousel");
  const items: NodeListOf<HTMLElement> | null = document.querySelectorAll(".carousel-item");
  const prevButton: HTMLButtonElement | null = document.querySelector(".prev");
  const nextButton: HTMLButtonElement | null = document.querySelector(".next");
  if (carousel === null || items === null || prevButton === null || nextButton === null) {
    return;
  }

  let index = 0;

  const updateButtons = () => {
    // prevButton.disabled = index === 0;
    // nextButton.disabled = index === items.length - 1;
  };

  prevButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = items.length - 1; // Jump to the last item
    }
    items[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    updateButtons();
  });

  nextButton.addEventListener("click", () => {
    if (index < items.length - 1) {
      index++;
    } else {
      index = 0; // Jump to the first item
    }
    items[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    updateButtons();
  });

  // Initialize button states
  updateButtons();
});
