function StringWriter() {
  this.buffer = [];
  this.dirty = false;
  this.cache = '';
}

StringWriter.prototype.write = function write(string) {
  this.buffer.push(string);
  this.dirty = true;
};

StringWriter.prototype.toString = function toString() {
  if (this.dirty) {
    this.cache += this.buffer.join('');
    this.buffer.length = 0;
    this.dirty = false;
  }
  return this.cache;
};

module.exports = {
  StringWriter: StringWriter
};
