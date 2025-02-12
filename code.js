function fib(n, arr = [0,1]) {
  if (n <= arr.length) {
    return arr.slice(0, n + 1;
  }
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fib(n, arr);
}
