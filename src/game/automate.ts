import Actions from "./actions";
import calculate from "./calculate";

function autoSell() {
  globalThis.sellTimer -= globalThis.sellReduceTime * globalThis.numberSalesmen;
  if (globalThis.sellTimer <= 0) {
    globalThis.sellTimer = globalThis.sellMaxTime;
    calculate(Actions.sell);
  }
}

function autoTrim() {
  globalThis.trimTimer -=
    globalThis.trimReduceTime * globalThis.numberEngineers;
  if (globalThis.trimTimer <= 0) {
    globalThis.trimTimer = globalThis.trimMaxTime;
    calculate(Actions.trim);
  }
}

function autoResearch() {
  globalThis.researchTimer -=
    globalThis.researchReduceTime * globalThis.numberResearchers;
  if (globalThis.researchTimer <= 0) {
    globalThis.researchTimer = globalThis.researchMaxTime;
    calculate(Actions.research);
  }
}

export default function automate() {
  autoSell();
  autoTrim();
  autoResearch();
}
