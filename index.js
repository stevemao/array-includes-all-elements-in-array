module.exports = (haystack, arr) => (
  arr.every(v => !!haystack.find(e => e.id === v.id))
);
