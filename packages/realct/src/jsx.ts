import { REALCT_ELEMENT_TYPE } from "shared/RealctSymbols";
import {
  Type,
  Key,
  Ref,
  Props,
  RealctElementType,
  ElementType,
} from "shared/RealctTypes";

const RealctElement = function (
  type: Type,
  key: Key,
  ref: Ref,
  props: Props,
): RealctElementType {
  const element = {
    $$typeof: REALCT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    __mark: "Made by Macb",
  };
  return element;
};

export const _jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
  let key: Key = null;
  const props: Props = {};
  let ref: Ref = null;

  for (const prop in config) {
    const val = config[prop];
    if (prop === "key") {
      if (val !== undefined) {
        key = "" + val;
      }
      continue;
    }
    if (prop === "ref") {
      if (val !== undefined) {
        ref = val;
      }
      continue;
    }
    if ({}.hasOwnProperty.call(config, prop)) {
      props[prop] = val;
    }
  }

  const maybeChildrenLength = maybeChildren.length;

  if (maybeChildrenLength) {
    if (maybeChildrenLength === 1) {
      props.children = maybeChildren[0];
    } else {
      props.children = maybeChildren;
    }
  }
  return RealctElement(type, key, ref, props);
};

export const _jsxDEV = _jsx;
