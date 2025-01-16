import { getFormData } from "./components/formExtractor.ts";
import { resetForm } from "./components/formExtractor.ts";
import { createCard } from "./components/CardCreator.ts";

// Interaktion des Formulars verwalten
// Formulareingabe sammeln
// Erstellung von Karte & Anzeigen in DOM
// Button Add/Save/Delete -> soll der Add-Button in Save umbenannt werden, nach dem Speichern der Änderung wird das Formular wieder geleert, wird der Save-Button in Add zurückbenannt

// Input aus dem Formular speichern
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
