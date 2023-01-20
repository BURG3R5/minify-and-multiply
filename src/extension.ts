import * as vscode from "vscode";
import renderScreen from "./game/output";
import loop from "./game/loop";
import initVariables from "./game/init";

export function activate(context: vscode.ExtensionContext) {
  initVariables();

  let disposable = vscode.commands.registerCommand(
    "minify-and-multiply.play",
    () => {
      vscode.workspace.openTextDocument().then((newDocument) => {
        vscode.window.showTextDocument(newDocument).then((newTextEditor) => {
          var editor = newTextEditor;
          editor.edit((ed) => renderScreen(ed)).then(() => loop(editor));
        });
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
