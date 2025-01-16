import { getFormData } from "./components/formExtractor.ts";
import { resetForm } from "./components/formExtractor.ts";
import { createCard } from "./components/CardCreator.ts";

// UI initialisieren und auf Button-Klick Funktionen zur Sammlung des Formularinputs und Karte erstellen aufrufen sowie Formular resetten
export const initializeUI = () => {
  document.querySelector("#add-card-btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = getFormData();
    if (formData !== null) {
      createCard(formData);
      resetForm();
    }
  });
};
