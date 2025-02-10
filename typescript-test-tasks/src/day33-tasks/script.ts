// - ========================== UTILITY TYPES - LEVEL 1_1 ==========================
// Lege eine neue Datei book.ts an
// Erstelle dort ein Interface IBook mit folgenden Eigenschaften
// author: string
// name: string
// publishingYear: string
// shortDescription?: string
// numberOfPages: number
// Lege eine neue Datei an partial-book.ts an
// Erstelle dort einen neuen Type PartialBook basierend auf IBook
// Lege eine Variable partialBook vom Typ PartialBook an und vergebe nur die Eigenschaften author und name
// Lege dann ein neues Interface IPartialBook basierend auf IBook an
// Lege eine Variable partialBook2 vom Typ IPartialBook an und vergeben nur die Eigenschaft name

import { partialBook, partialBook2 } from "./partial-book";
console.log(partialBook);
console.log(partialBook2);

// - ========================== UTILITY TYPES - LEVEL 1_2 ==========================
// Lege eine neue Datei an basic-book.ts an
// Erstelle dort einen neuen Type BasicBook basierend auf IBook
// BasicBook soll folgende Eigenschaften nicht haben
// publishingYear: string
// shortDescription: string
// Lege eine Variable basicBook vom Typ BasicBook an und vergebe nur die nötigen Eigenschaften
// Lege dann ein neues Interface IBasicBook basierend auf IBook an, bei dem ebenfalls publishingYear und shortDescription fehlen
// Lege eine Variable basicBook2 vom Typ IBasicBook an und vergebe nur die nötigen Eigenschaften

import { basicBook } from "./basic-book";
console.log(basicBook);

// - ========================== UTILITY TYPES - LEVEL 1_3 ==========================

// Lege eine neue Datei book-description.ts an
// Erstelle dort einen neuen Type BookDescription basierend auf IBook
// BasicBook soll folgende Eigenschaften von IBook übernehmen
// name: string
// shortDescription: string
// Lege eine Variable bookDescription vom Typ BookDescription an und vergebe nur die nötigen Eigenschaften
// Lege dann ein neues Interface IBookDescription basierend auf IBook an - ebenfalls name und shortDescription von IBook übernehmen
// Lege eine Variable bookDescription2 vom Typ IBookDescription an und vergebe nur die nötigen Eigenschaften

import { bookDescription, bookDescription2 } from "./book-description";
console.log(bookDescription);
console.log(bookDescription2);

// - ========================== UTILITY TYPES - LEVEL 1_4 ==========================
// Lege eine neue Datei an required-book.ts an
// Erstelle dort einen neuen Type RequiredBook basierend auf IBook
// Alle Eigenschaften von IBook sind required ⇒ müssen angegeben werden
// Lege eine Variable requiredBook vom Typ BookDescription an und alle nötigen Eigenschaften
// Lege dann ein neues Interface IRequiredBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier Pflicht
// Lege eine Variable requiredBook2 vom Typ IRequiredBook an und vergebe alle nötigen Eigenschaften

import { requiredBook, requiredBook2 } from "./required-books";
console.log(requiredBook, requiredBook2);

// - ========================== UTILITY TYPES - LEVEL 1_5 ==========================
// Lege eine neue Datei an readonly-book.ts an
// Erstelle dort einen neuen Type ReadOnlyBook basierend auf IBook
// Alle Eigenschaften von IBook sind readonly ⇒ schreibgeschützt
// Lege eine Variable readonlyBook vom Typ ReadOnlyBook an und vergeben alle nötigen Eigenschaften und Werte
// Versuche nachträglich Werte zu setzen
// Lege dann ein neues Interface IReadOnlyBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier schreibgeschützt
// Lege eine Variable readonlyBook2 vom Typ IReadOnlyBook an und vergebe alle nötigen Eigenschaften und Werte
// Versuche nachträglich Werte zu setzen

// - ========================== UTILITY TYPES - LEVEL 1_6 ==========================
//  Lege eine neue Datei an colors.ts an
//  Erstelle dort einen neuen Type BasicColors mit den möglichen Werten:RED, BLUE, GREEN, YELLOW, BLACK, WHITE
//  Erstelle einen weiteren Type RealColors auf Basis von BasicColors mit Exclude
//  Werte RED, BLUE, GREEN, YELLOW
//  Lege eine Funktion showColors mit einem Parameter vom Typ RealColors an
//  Gib dort die Farbe auf der Konsole aus
//  Versuche ‘BLACK’ zu übergeben
//  Übergebe einen gültigen Wert

// - ========================== UTILITY TYPES - LEVEL 2_1 ==========================
// Lege eine neue Datei tea.ts an
// Erstelle dort ein Interface ITea mit folgenden Eigenschaften: name, type, temperature, brewingTime
// Erstelle dann einen Type PartialTea, das ebenfalls diese Eigenschaften enthält, die aber alle optional sind
// Schreibe eine Funktion prepareTea, die ein PartialTea-Objekt akzeptiert und auf der Konsole ausgibt “Preparing [tea.name] - will be ready in [tea.brewingTime]”
// Gib einen Fehler auf der Konsole aus, falls name und brewingTime nicht gesetzt sind und brich die Funktion ab
// Lege ein Objekt vom Typ ITea an und übergebe es der Methode prepareTea
// Lege ein Objekt vom Typ PartialTea an und übergebe es der Methode prepareTea

// - ========================== UTILITY TYPES - LEVEL 3_1 ==========================
// Lege eine neue Datei smoothie.ts an
// Erstelle dort ein Interface ISmoothie mit folgenden Eigenschaften: name, ingredients, size (Enum: small, medium…) und price
// Überlege dir sinnvolle Datentypen für die Eigenschaften
// Erstelle eine Funktion customizeSmoothie, die ein Smoothie-Objekt (basicSmoothie) und ein Partial<ISmoothie>-Objekt (customizedSmoothie) als Parameter hat
// Die Funktion soll die Eigenschaften aus den beiden Objekten kombinieren
// Wenn eine Eigenschaft im customizedSmoothie gesetzt ist, soll sie die Eigenschaft im basicSmoothie überschreiben
// Rückgabewert der Funktion ist ISmoothie
