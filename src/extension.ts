import * as vscode from "vscode";
import renderScreen from "./game/output";
import loop from "./game/loop";
import initVariables from "./game/init";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vsc-game" is now active!');

  initVariables();

  let disposable = vscode.commands.registerCommand(
    "vsc-game.helloWorld",
    () => {
      vscode.workspace.openTextDocument().then((newDocument) => {
        vscode.window.showTextDocument(newDocument).then((newTextEditor) => {
          var editor = newTextEditor;
          editor.edit((ed) => renderScreen(ed)).then(() => loop(editor));
        });
      });
      vscode.window.showInformationMessage("Hello World from vsc-game!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
