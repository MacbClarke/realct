const supportSymbol = typeof Symbol === "function" && Symbol.for;

export const REALCT_ELEMENT_TYPE = supportSymbol
  ? Symbol.for("realct.element")
  : 0xeac7;
