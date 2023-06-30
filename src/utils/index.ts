import { arrNoRepeat, arrSort, isArray } from './array'
import { deepFreeze, objectCopy } from './object'
import { getItem, setItem, removeItem } from './localstorage'
import {startLoading,endLoading }from './page/nprogress'
import { pageScroll } from './page/pageScroll'
import { Percentage } from './page/percentage'
import { dateFormat } from './dateFormat'
import http from './http'
import getCopy from './copy'
import getType from './getType'
import getColor from './getColor'
export {
  Percentage,
  http,
  arrNoRepeat,
  startLoading,
  endLoading,
  arrSort,
  deepFreeze,
  getColor,
  getItem,
  getType,
  isArray,
  setItem,
  removeItem,
  pageScroll,
  getCopy,
  objectCopy,
  dateFormat
}
