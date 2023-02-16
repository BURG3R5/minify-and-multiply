import * as vscode from "vscode";
import scientific from "../utils/scino";
import loader from "../utils/loaders";

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
    "│  Revenue: $" +
    scientific(
      (globalThis.UNIT_COST * globalThis.TRUCK_VOLUME) / globalThis.size
    ).padEnd(18, " ") +
    "│  Cost: $" +
    globalThis.SALESMAN_COST.toString().padEnd(21, " ") +
    "|  $" +
    scientific(globalThis.money).padEnd(27, " ") +
    "│\n" +
    "│                              |                              |                              " +
    "│\n" +
    "│                              " +
    "│  " +
    loader(globalThis.sellTimer, globalThis.sellMaxTime) +
    "  " +
    "│                              " +
    "│\n";
  var trimLine =
    "│  2. Trim                     " +
    "│  5. Engineers [" +
    (globalThis.numberEngineers.toString() + "]").padEnd(14, " ") +
    "│  Size                        " +
    "│\n" +
    "│  Cost: $" +
    globalThis.TRIM_COST.toString().padEnd(21, " ") +
    "│  Cost: $" +
    globalThis.ENGINEER_COST.toString().padEnd(21, " ") +
    "│  " +
    scientific(globalThis.size).padEnd(28, " ") +
    "│\n" +
    "│                              |                              |                              " +
    "│\n" +
    "│                              " +
    "│  " +
    loader(globalThis.trimTimer, globalThis.trimMaxTime) +
    "  " +
    "│                              " +
    "│\n";
  var researchLine =
    "│  3. Research                 " +
    "│  6. Researchers [" +
    (globalThis.numberResearchers.toString() + "]").padEnd(12, " ") +
    "│  Minimum Size                " +
    "│\n" +
    "│  Cost: $" +
    globalThis.RESEARCH_COST.toString().padEnd(21, " ") +
    "│  Cost: $" +
    globalThis.RESEARCHER_COST.toString().padEnd(21, " ") +
    "│  " +
    scientific(globalThis.minimumSize).padEnd(28, " ") +
    "│\n" +
    "│                              |                              |                              " +
    "|\n" +
    "│                              " +
    "│  " +
    loader(globalThis.researchTimer, globalThis.researchMaxTime) +
    "  " +
    "│                              " +
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
