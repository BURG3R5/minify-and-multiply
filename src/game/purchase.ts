import Actions from "./actions";

export default function makePurchase(action: Actions) {
  switch (action) {
    case Actions.hireSalesman:
      if (globalThis.money < globalThis.SALESMAN_COST) break;
      globalThis.money -= globalThis.SALESMAN_COST;
      globalThis.numberSalesmen++;

      break;
    case Actions.hireEngineer:
      if (globalThis.money < globalThis.ENGINEER_COST) break;
      globalThis.money -= globalThis.ENGINEER_COST;
      globalThis.numberEngineers++;
      break;
    case Actions.hireResearcher:
      if (globalThis.money < globalThis.RESEARCHER_COST) break;
      globalThis.money -= globalThis.RESEARCHER_COST;
      globalThis.numberResearchers++;
      break;
    default:
      break;
  }
}
