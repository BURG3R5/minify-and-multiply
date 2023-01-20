import * as vscode from "vscode";
import { keyInput } from "./input";
import calculate from "./calculate";
import automate from "./automate";
import Actions from "./actions";
import renderScreen from "./output";
import makePurchase from "./purchase";

export default function loop(editor: vscode.TextEditor) {
  editor
    .edit((ed) => {
      var action: Actions = keyInput(ed, editor.document);
      calculate(action);
      makePurchase(action);
      automate();
    })
    .then(() => {
      editor.edit((ed) => renderScreen(ed));
    })
    .then(() => setTimeout(() => loop(editor), 200));
}
