console.log("high order function example");
// Higher-order function that adds logging
function withLogging(fn: (a: number, b: number) => number): (a: number, b: number) => number {
    return function(a: number, b: number): number {
      console.log(`Calling with: ${a}, ${b}`);
      const result = fn(a, b);
      console.log(`Result: ${result}`);
      return result;
    };
  }
  
  // Basic sum function
  const sum = (a: number, b: number): number => a + b;
  
  // Wrap it with logging
  const loggedSum = withLogging(sum);
  
  // Call it
  loggedSum(10, 20); // Logs: Calling with: 10, 20 → Result: 30
  