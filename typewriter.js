const sentence = "hello there from lighthouse labs";

let index = 0;

for (const char of sentence) {

  setTimeout(function () {
    process.stdout.write(char);

  }, (index++) * 100);

}

setTimeout(console.log, (index++) * 100, '\n');


