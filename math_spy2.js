class Math2 {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    async multiplyAsync(a, b, callback) {
      setTimeout(() => {
        callback(a * b);
      }, 100);
    }
  }
  
export default Math2;
  