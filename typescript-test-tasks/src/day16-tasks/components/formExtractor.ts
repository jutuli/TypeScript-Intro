import { BasketballCard } from "../data.ts";

// Formulardaten holen und in Objekt abspeichern (inkl. Logik falls Daten fehlen)
function getFormData(): BasketballCard | null {
  const firstName: string =
    document.querySelector<HTMLInputElement>("#first-name")?.value ??
    "Not Found";
  const lastName: string =
    document.querySelector<HTMLInputElement>("#last-name")?.value ??
    "Not Found";
  const age: number = parseInt(
    document.querySelector<HTMLInputElement>("#age")?.value ?? "Not Found",
  );
  const height: number = parseInt(
    document.querySelector<HTMLInputElement>("#height")?.value ?? "Not Found",
  );
  const currentTeam: string =
    document.querySelector<HTMLInputElement>("#current-team")?.value ??
    "Not Found";
  const jerseyNumber: number = parseInt(
    document.querySelector<HTMLInputElement>("#jersey-number")?.value ??
      "Not Found",
  );
  const position: string =
    document.querySelector<HTMLInputElement>("#position")?.value ?? "Not Found";
  const ppg: number = parseFloat(
    document.querySelector<HTMLInputElement>("#ppg")?.value ?? "Not Found",
  );
  const imageUrl: string =
    document.querySelector<HTMLInputElement>("#img-url")?.value ?? "Not Found";

  const stringEntries = [firstName, lastName, currentTeam, position, imageUrl];

  const numericEntries = [age, height, jerseyNumber, ppg];

  if (stringEntries.includes("Not Found") || numericEntries.includes(NaN)) {
    console.log("String entries:", stringEntries);
    console.log("Numeric entries:", numericEntries);
    alert("Please fill all fields.");
    return null;
  } else {
    return {
      firstName,
      lastName,
      age,
      height,
      currentTeam,
      jerseyNumber,
      position,
      ppg,
      imageUrl,
    };
  }
}

export default getFormData;
