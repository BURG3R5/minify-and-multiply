export default function initVariables() {
  globalThis.money = 1;
  globalThis.size = 1;
  globalThis.minimumSize = 0.95;

  globalThis.numberSalesmen = 0;
  globalThis.numberEngineers = 0;
  globalThis.numberResearchers = 0;

  globalThis.TRUCK_VOLUME = 10;
  globalThis.UNIT_COST = 0.1;
  globalThis.TRIM_PERCENT = 0.05;
  globalThis.RESEARCH_MULTIPLIER = 0.95;

  globalThis.SALESMAN_COST = 25;
  globalThis.ENGINEER_COST = 100;
  globalThis.RESEARCHER_COST = 1000;
  globalThis.TRIM_COST = 10;
  globalThis.RESEARCH_COST = 100;

  globalThis.sellMaxTime = globalThis.sellTimer = 25;
  globalThis.trimMaxTime = globalThis.trimTimer = 50;
  globalThis.researchMaxTime = globalThis.researchTimer = 100;

  globalThis.sellReduceTime = 1;
  globalThis.trimReduceTime = 1;
  globalThis.researchReduceTime = 1;

  globalThis.emptyLine =
    "│                              │                              │                              │\n";
  globalThis.aboveLine =
    "╭──────────────────────────────┬──────────────────────────────┬──────────────────────────────╮\n";
  globalThis.dashedLine =
    "├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤\n";
  globalThis.belowLine =
    "╰──────────────────────────────┴──────────────────────────────┴──────────────────────────────╯\n";

  //Title ASCII art from https://fsymbols.com/text-art/
  globalThis.title =
    "     ███╗   ███╗ ██╗ ███╗  ██╗ ██╗ ███████╗ ██╗ ██╗   ██╗     █████╗  ███╗  ██╗ ██████╗\n" +
    "     ████╗ ████║ ██║ ████╗ ██║ ██║ ██╔════╝ ██║ ╚██╗ ██╔╝    ██╔══██╗ ████╗ ██║ ██╔══██╗\n" +
    "     ██╔████╔██║ ██║ ██╔██╗██║ ██║ █████╗   ██║  ╚████╔╝     ███████║ ██╔██╗██║ ██║  ██║\n" +
    "     ██║╚██╔╝██║ ██║ ██║╚████║ ██║ ██╔══╝   ██║   ╚██╔╝      ██╔══██║ ██║╚████║ ██║  ██║\n" +
    "     ██║ ╚═╝ ██║ ██║ ██║ ╚███║ ██║ ██║      ██║    ██║       ██║  ██║ ██║ ╚███║ ██████╔╝\n" +
    "     ╚═╝     ╚═╝ ╚═╝ ╚═╝  ╚══╝ ╚═╝ ╚═╝      ╚═╝    ╚═╝       ╚═╝  ╚═╝ ╚═╝  ╚══╝ ╚═════╝\n" +
    "\n" +
    "             ███╗   ███╗ ██╗   ██╗ ██╗   ████████╗ ██╗ ██████╗  ██╗   ██╗   ██╗\n" +
    "             ████╗ ████║ ██║   ██║ ██║   ╚══██╔══╝ ██║ ██╔══██╗ ██║   ╚██╗ ██╔╝\n" +
    "             ██╔████╔██║ ██║   ██║ ██║      ██║    ██║ ██████╔╝ ██║    ╚████╔╝\n" +
    "             ██║╚██╔╝██║ ██║   ██║ ██║      ██║    ██║ ██╔═══╝  ██║     ╚██╔╝\n" +
    "             ██║ ╚═╝ ██║ ╚██████╔╝ ███████╗ ██║    ██║ ██║      ███████╗ ██║\n" +
    "             ╚═╝     ╚═╝  ╚═════╝  ╚══════╝ ╚═╝    ╚═╝ ╚═╝      ╚══════╝ ╚═╝\n";
  globalThis.instructionLine =
    "Press '1' to sell, '2' to trim, '3' to research\n";
}
