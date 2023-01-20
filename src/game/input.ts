import * as vscode from "vscode";
import Actions from "./actions";

export function keyInput(
  ed: vscode.TextEditorEdit,
  doc: vscode.TextDocument
): Actions {
  var line: number = doc.lineCount - 1;
  var command: string = doc.lineAt(line).text;
  var i: number = command.length - 1;
  var choice = Number(command[i]);
  //remove input char
  ed.replace(
    new vscode.Range(
      new vscode.Position(line, 0),
      new vscode.Position(line, 99999)
    ),
    ""
  );
  //return choice
  switch (choice) {
    case 1:
      return Actions.sell;
    case 2:
      return Actions.trim;
    case 3:
      return Actions.research;
    case 4:
      return Actions.hireSalesman;
    case 5:
      return Actions.hireEngineer;
    case 6:
      return Actions.hireResearcher;
    default:
      return Actions.none;
  }
}
