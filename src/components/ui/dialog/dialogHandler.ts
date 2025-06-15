import type { ModalElement, WindowWithModalFunctions } from "./types";
import { trapFocus, getFocusableElements } from "./helpers/focusHelpers";
import { resetModalScroll, addAriaAttributes } from "./helpers/dialogHelpers";

// Modal state management
let cleanup: (() => void) | null = null;
let previousActiveElement: HTMLElement | null = null;

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector<ModalElement>("[data-modal]");
  const modalId = modal?.dataset.modal;
  console.log(`Modal ID: ${modalId}`);

  if (modal && modalId) {
    // Move modal to body
    document.body.appendChild(modal);

    // Add ARIA attributes for accessibility
    addAriaAttributes(modal, modalId);

    const modalContent = document.getElementById(`${modalId}-content`);
    const closeBtn = document.getElementById(`${modalId}-close-btn`);

    if (!modalContent) {
      console.error(
        `Modal content element with ID "${modalId}-content" not found`
      );
      return;
    }

    const showModal = (): void => {
      // Store the currently focused element
      previousActiveElement = document.activeElement as HTMLElement;

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

      // Set up focus trapping
      cleanup = trapFocus(modal);

      // Focus the first focusable element after a short delay
      setTimeout(() => {
        const focusableElements = getFocusableElements(modal);
        const firstFocusable = focusableElements[0];
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }, 50);
    };

    const closeModal = (): void => {
      // Clean up focus trap
      if (cleanup) {
        cleanup();
        cleanup = null;
      }

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

      // Restore focus to the previously focused element
      if (
        previousActiveElement &&
        typeof previousActiveElement.focus === "function"
      ) {
        previousActiveElement.focus();
        previousActiveElement = null;
      }
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

// Close on Escape
document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    const modal = document.querySelector<ModalElement>("[data-modal]");
    const modalId = modal?.dataset.modal;

    if (modal && modalId && !modal.classList.contains("pointer-events-none")) {
      const modalContent = document.getElementById(`${modalId}-content`);

      if (modalContent) {
        // Clean up focus trap
        if (cleanup) {
          cleanup();
          cleanup = null;
        }

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

        // Restore focus when closing with Escape
        if (
          previousActiveElement &&
          typeof previousActiveElement.focus === "function"
        ) {
          previousActiveElement.focus();
          previousActiveElement = null;
        }
      }
    }
  }
});
