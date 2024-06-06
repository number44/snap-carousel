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
  const scrollToIndex = (index: number) => {
    items[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };
  prevButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = items.length - 1; // Jump to the last item
    }
    scrollToIndex(index);
    updateButtons();
  });

  nextButton.addEventListener("click", () => {
    if (index < items.length - 1) {
      index++;
    } else {
      index = 0; // Jump to the first item
    }
    scrollToIndex(index);
    updateButtons();
  });

  // Touch event handling
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  });

  carousel.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
  });

  const handleGesture = () => {
    if (touchEndX < touchStartX) {
      // Swiped left
      if (index < items.length - 1) {
        index++;
      } else {
        index = 0; // Loop to the first item
      }
    }

    if (touchEndX > touchStartX) {
      // Swiped right
      if (index > 0) {
        index--;
      } else {
        index = items.length - 1; // Loop to the last item
      }
    }

    scrollToIndex(index);
  };

  // Initialize button states
  updateButtons();
});
