import type { ModalElement, WindowWithModalFunctions } from "./types";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector<ModalElement>("[data-modal]");
  const modalId = modal?.dataset.modal;
  console.log(`Modal ID: ${modalId}`);

  if (modal && modalId) {
    // Move modal to body
    document.body.appendChild(modal);

    const modalContent = document.getElementById(`${modalId}-content`);
    const closeBtn = document.getElementById(`${modalId}-close-btn`);

    if (!modalContent) {
      console.error(
        `Modal content element with ID "${modalId}-content" not found`
      );
      return;
    }

    const showModal = (): void => {
      modal.classList.remove("-z-10");
      modal.classList.add("z-10");

      // Add transitions only for opening
      modal.classList.add("transition-opacity", "duration-200", "ease-in-out");
      modalContent.classList.add("transition-opacity", "duration-100");

      // Show modal backdrop
      modal.classList.remove("opacity-0", "pointer-events-none");
      modal.classList.add("opacity-100");

      // Fade in content with delay
      modalContent.classList.remove("opacity-0");
      modalContent.classList.add("opacity-100");

      document.body.style.overflow = "hidden";
    };

    const closeModal = (): void => {
      // Remove transitions for instant closing
      modal.classList.remove(
        "transition-opacity",
        "duration-200",
        "ease-in-out"
      );
      modalContent.classList.remove("transition-opacity", "duration-200");

      // Hide immediately without effects
      modalContent.classList.remove("opacity-100");
      modalContent.classList.add("opacity-0");

      modal.classList.remove("opacity-100");
      modal.classList.add("opacity-0", "pointer-events-none");

      resetModalScroll(modalId);
      document.body.style.overflow = "auto";

      modal.classList.remove("z-50");
      modal.classList.add("-z-10");
    };

    // Expose showModal function globally with proper typing
    const windowWithModalFunctions =
      window as unknown as WindowWithModalFunctions;
    windowWithModalFunctions[`show${modalId}`] = showModal;

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (event: MouseEvent) => {
        if (event.target === modal) {
          closeModal();
        }
      });
    }
  }
});

const resetModalScroll = (modalId: string): void => {
  const modalDialog = document.getElementById(`${modalId}-dialog`);
  if (modalDialog) {
    modalDialog.scrollTop = 0;
  }
};

// Close on Escape
document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    const modal = document.querySelector<ModalElement>("[data-modal]");
    const modalId = modal?.dataset.modal;

    if (modal && modalId && !modal.classList.contains("pointer-events-none")) {
      const modalContent = document.getElementById(`${modalId}-content`);

      if (modalContent) {
        // Remove transitions for instant closing
        modal.classList.remove(
          "transition-opacity",
          "duration-200",
          "ease-in-out"
        );
        modalContent.classList.remove("transition-opacity", "duration-200");

        // Hide immediately without effects
        modalContent.classList.remove("opacity-100");
        modalContent.classList.add("opacity-0");

        modal.classList.remove("opacity-100");
        modal.classList.add("opacity-0", "pointer-events-none");

        resetModalScroll(modalId);

        modal.classList.remove("z-50");
        modal.classList.add("-z-10");
        document.body.style.overflow = "auto";
      }
    }
  }
});
