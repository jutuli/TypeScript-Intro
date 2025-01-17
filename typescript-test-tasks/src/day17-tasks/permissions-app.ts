// gehört zu Task Level 3_2
import { Permissions } from "./permissions";

// Lege eine Datei ar-app.ts an
// Hat ein User eine höhere Berechtigung, schließt das die darunterliegenden mit ein: (Berechtigung Execute schließt das Read und Write mit ein…)
// Schreibe dort eine Funktion, die als Parameter einen Enum//Wert für Permissions übergeben bekommt und auf der Konsole ausgibt, welche Berechtigungen eingeschlossen sind

function checkPermissions(permission: Permissions) {
  // Fehler werfen, falls Zahl eingegeben wird, die es nicht gibt
  if (!Object.values(Permissions).includes(permission)) {
    console.log("The entered permission number does not exist.");
    return;
  }
  if (permission === Permissions.NONE) {
    console.log("You don't have any permission");
    return;
  }
  console.log("You have the following permissions:");
  if (permission >= Permissions.READ) console.log("Read");
  if (permission >= Permissions.WRITE) console.log("Write");
  if (permission >= Permissions.EXECUTE) console.log("Execute");

  // Erweitere das Enum um den Wert Delete = 8
  // Läuft dein Code direkt ohne weitere Anpassung? => Ja, allerdings musste die Logik in checkPermissions um Delete erweitert werden
  if (permission >= Permissions.DELETE) console.log("Delete");
}
export default checkPermissions;
