import Actions from "./actions";

function sell() {
  const numbersSold: number = globalThis.TRUCK_VOLUME / globalThis.size;
  globalThis.money += numbersSold * globalThis.UNIT_COST;
  console.log("Sold!");
}

function trim() {
  if (globalThis.money < globalThis.TRIM_COST) {
    return;
  }

  const multiplier =
    1 -
    (globalThis.TRIM_PERCENT / globalThis.size) *
      (globalThis.size - globalThis.minimumSize);

  globalThis.size *= multiplier;
  globalThis.money -= globalThis.TRIM_COST;
  console.log("Trimmed!");
}

function research() {
  if (globalThis.money < globalThis.RESEARCH_COST) return;
  globalThis.minimumSize *= globalThis.RESEARCH_MULTIPLIER;
  globalThis.money -= globalThis.RESEARCH_COST;
  console.log("Researched!");
}

export default function calculate(action: Actions) {
  switch (action) {
    case Actions.sell:
      sell();
      break;
    case Actions.trim:
      trim();
      break;
    case Actions.research:
      research();
      break;
  }
}
