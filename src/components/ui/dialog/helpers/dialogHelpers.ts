export const resetModalScroll = (modalId: string): void => {
  const modalDialog = document.getElementById(`${modalId}-dialog`);
  if (modalDialog) {
    modalDialog.scrollTop = 0;
  }
};

interface ModalElement extends HTMLElement {
  setAttribute(attributeName: string, value: string): void;
}

export const addAriaAttributes = (
  modal: ModalElement,
  modalId: string
): void => {
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", `${modalId}-title`);
};
