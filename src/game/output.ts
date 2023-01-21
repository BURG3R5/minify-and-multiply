import * as vscode from "vscode";
var scino = require("scino");

function updateLoader(): string {
  var scalingFactor =
    globalThis.size === 1
      ? 94
      : Math.pow(94, -1 * Math.floor(Math.log(globalThis.size) / Math.log(94)));
  var l1 = Math.floor(globalThis.minimumSize * scalingFactor);
  var l2 = Math.floor(globalThis.size * scalingFactor);
  var object = "▓".repeat(l1) + "░".repeat(l2 - l1);
  return "\n" + object + "\n" + object + "\n\n";
}

function updateStrings(): {
  sellLine: string;
  trimLine: string;
  researchLine: string;
} {
  var sellLine =
    "│  1. Sell                     " +
    "│  4. Salesmen [" +
    (globalThis.numberSalesmen.toString() + "]").padEnd(15, " ") +
    "|  Bank                        " +
    "│\n" +
    "│  Revenue: " +
    scino(
      (globalThis.UNIT_COST * globalThis.TRUCK_VOLUME) /
        Math.pow(globalThis.size, 3),
      6
    ).padEnd(19, " ") +
    "│  Cost: $" +
    scino(globalThis.SALESMAN_COST, 6).padEnd(21, " ") +
    "|  $" +
    scino(globalThis.money, 6).padEnd(27, " ") +
    "│\n";
  var trimLine =
    "│  2. Trim                     " +
    "│  5. Engineers [" +
    (globalThis.numberEngineers.toString() + "]").padEnd(14, " ") +
    "│  Size                        " +
    "│\n" +
    "│  Cost: $" +
    scino(globalThis.TRIM_COST).padEnd(21, " ") +
    "│  Cost: $" +
    scino(globalThis.ENGINEER_COST, 6).padEnd(21, " ") +
    "│  " +
    scino(globalThis.size, 6).padEnd(28, " ") +
    "│\n";
  var researchLine =
    "│  3. Research                 " +
    "│  6. Researchers [" +
    (globalThis.numberResearchers.toString() + "]").padEnd(12, " ") +
    "│  Minimum Size                " +
    "│\n" +
    "│  Cost: $" +
    scino(globalThis.RESEARCH_COST).padEnd(21, " ") +
    "│  Cost: $" +
    scino(globalThis.RESEARCHER_COST, 6).padEnd(21, " ") +
    "│  " +
    scino(globalThis.minimumSize, 6).padEnd(28, " ") +
    "│\n";
  return { sellLine, trimLine, researchLine };
}

function updateGrid({
  sellLine,
  trimLine,
  researchLine,
}: {
  sellLine: string;
  trimLine: string;
  researchLine: string;
}) {
  var grid =
    globalThis.aboveLine +
    globalThis.emptyLine +
    sellLine +
    globalThis.emptyLine +
    globalThis.dashedLine +
    globalThis.emptyLine +
    trimLine +
    globalThis.emptyLine +
    globalThis.dashedLine +
    globalThis.emptyLine +
    researchLine +
    globalThis.emptyLine +
    globalThis.belowLine +
    globalThis.instructionLine;
  return grid;
}

function clearScreen(ed: vscode.TextEditorEdit) {
  var lastLine = 1000;
  ed.delete(
    new vscode.Range(
      new vscode.Position(0, 0),
      new vscode.Position(lastLine, 99999999)
    )
  );
}

export default function renderScreen(ed: vscode.TextEditorEdit) {
  clearScreen(ed);
  var lines = updateStrings();
  var grid = updateGrid(lines);
  var loader = updateLoader();
  ed.insert(new vscode.Position(0, 0), globalThis.title);
  ed.insert(new vscode.Position(0, 0), loader);
  ed.insert(new vscode.Position(0, 0), grid);
}
