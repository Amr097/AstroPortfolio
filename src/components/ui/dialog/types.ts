export type DialogVariant = "info" | "accent" | "secondary" | string;
export type DialogSize = "sm" | "md" | "lg" | string;
export type IconSize = DialogSize;

export interface ModalElement extends HTMLElement {
  dataset: {
    modal: string;
  };
}

export interface WindowWithModalFunctions extends Window {
  [key: `show${string}`]: () => void;
}

export interface ModalElements {
  modal: ModalElement;
  modalContent: HTMLElement;
  closeBtn: HTMLElement;
  modalDialog: HTMLElement;
}
