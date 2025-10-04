function identity<T>(arg: T): T {
  return arg;
}

let ouput = identity<string>("Hello");

let numberoutput = identity<number>(23);
