const CQueue = function() {
  this.inStack = []
  this.outStack = []
}

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.inStack.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (!this.outStack.length) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop())
    }
  }
  const popItem = this.outStack.pop() || -1
  return popItem
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */