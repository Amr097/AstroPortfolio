// Focus trapping utility functions
export const getFocusableElements = (
  container: Element
): NodeListOf<HTMLElement> => {
  const focusableSelectors = [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ].join(", ");

  return container.querySelectorAll<HTMLElement>(focusableSelectors);
};

export const trapFocus = (modal: Element): (() => void) => {
  const focusableElements = getFocusableElements(modal);
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent): void => {
    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable?.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable?.focus();
      }
    }
  };

  modal.addEventListener("keydown", handleTabKey as EventListener);

  // Return cleanup function
  return (): void => {
    modal.removeEventListener("keydown", handleTabKey as EventListener);
  };
};
