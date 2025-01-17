import { weekdays, months } from "./days-months";
import showHTMLError from "./error-codes";
import { pizzas } from "./pizza";
import { createButtons } from "./color-choice";
import checkPermissions from "./permissions-app";

weekdays();
months();
pizzas();
showHTMLError();
createButtons();
checkPermissions(1);
checkPermissions(2);
checkPermissions(3);
checkPermissions(4);
checkPermissions(7);
checkPermissions(8);
