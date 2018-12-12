function test() {
  console.log(arguments.length);
}

function test2(...args) {
  console.log(args);
}

test(1, 2, 3, 4);

test2(1, 2, 3, 4);
