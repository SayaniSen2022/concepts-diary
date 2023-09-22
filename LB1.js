//toggle function arguments: An example for closure in JS

//args is a keyword refering to the arguments, we use spread operator to convert the arguments to an array
//args.length > 0 is a truthy value
//index++ :  post increment operator
//if we give only 1 argument, that will get logged continuously and if we give no argument there will be nothing to log

const toggle = (...args) => {
  let index = 0;

  return function () {
    if (args.length) {
      console.log(args[index++]);
    }
    if (index >= args.length) {
      index = 0;
    }
  };
};

const onToggle = toggle("1", "2", "3", "4");
onToggle();
onToggle();
onToggle();
onToggle();
onToggle();
onToggle();
