document.addEventListener("DOMContentLoaded", function () {
  const faqBlocks = document.querySelectorAll(".faq-section-block_container");

  faqBlocks.forEach((block) => {
    const questionBtn = block.querySelector(".faq-section-block_question");
    const answer = block.querySelector(".faq-section-block_answer");
    const icon = block.querySelector(".faq-icon");

    // Start with closed answers
    answer.style.maxHeight = "0px";

    questionBtn.addEventListener("click", () => {
      const isOpen = block.classList.contains("open");

      // OPTIONAL: Close other FAQs (uncomment if you want accordion behavior)
      faqBlocks.forEach((otherBlock) => {
        if (otherBlock !== block) {
          otherBlock.classList.remove("open");
          otherBlock.classList.remove("open-answer");
          const otherAnswer = otherBlock.querySelector(".faq-section-block_answer");
          const otherIcon = otherBlock.querySelector(".faq-icon");
          otherAnswer.style.maxHeight = "0px";
          otherIcon.textContent = "+";
        }
      });

      // Toggle current block
      if (isOpen) {
        block.classList.remove("open");
        block.classList.remove("open-answer");
        answer.style.maxHeight = "0px";
        icon.textContent = "+";
      } else {
        block.classList.add("open");
        block.classList.add("open-answer");
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.textContent = "–"; // Change to minus
      }
    });
  });
});