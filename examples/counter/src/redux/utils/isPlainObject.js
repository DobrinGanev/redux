import {isObjectLike} from './isObjectLike'
import {baseGetTag} from './baseGetTag'
/** Used to resolve the decompiled source of functions. */
const funcToString = Function.prototype.toString

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/** Used to infer the `Object` constructor. */
const objectCtorString = funcToString.call(Object)

export const isPlainObject = (value) => {
  if (!isObjectLike(value) || baseGetTag(value) != '[object Object]') {
    return false
  }
  const proto = Object.getPrototypeOf(value)
  if (proto === null) {
    return true
  }
  const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString
}