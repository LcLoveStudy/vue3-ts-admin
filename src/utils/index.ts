import { getItem, setItem, removeItem } from './common/localstorage'
import { startLoading, endLoading } from './page/nprogress'
import { arrNoRepeat, arrSort, isArray, union, intersection, difference } from './array'
import { deepFreeze, objectCopy } from './object'
import { pageScroll } from './page/pageScroll'
import { Percentage } from './page/percentage'
import { dateFormat } from './dateFormat'
import useDownload from './file/useDownload'
import showTif from './file/showTif'
import useColor from './useColor'
import { hourFormat } from './hourFormat'
import getType from './getType'
import hasRole from './auth/hasRole'
import useCopy from './common/useCopy'
import http from './http'
export {
  Percentage,
  http,
  showTif,
  useDownload,
  hourFormat,
  arrNoRepeat,
  startLoading,
  endLoading,
  arrSort,
  hasRole,
  deepFreeze,
  useColor,
  union,
  intersection,
  difference,
  getItem,
  getType,
  isArray,
  setItem,
  removeItem,
  pageScroll,
  useCopy,
  objectCopy,
  dateFormat
}
