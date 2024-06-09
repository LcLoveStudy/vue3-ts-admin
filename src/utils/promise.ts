/** 将任务放入一个微队列中 */
export const runMicroTasks = (fn: MutationCallback) => {
  if (process && typeof process.nextTick === 'function') {
    // node环境
    process.nextTick(fn)
  } else if (typeof MutationObserver === 'function') {
    const ob = new MutationObserver(fn)
    ob.observe(document.body, { attributes: true })
  } else {
    setTimeout(fn)
  }
}

/** 判断是否是满足Promsie A+ 规范 */
export const isPromiseLike = (value: unknown) => {
  return value instanceof Promise && typeof value.then === 'function'
}
