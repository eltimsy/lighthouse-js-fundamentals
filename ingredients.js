var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var repeat = 0;
while(repeat<8){
  console.log(ingredients[repeat]);
  repeat++;
}
// Write a for loop that prints out the contents of ingredients:
for(var i = 0; i < 8; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
var decrease = 7
while(decrease > -1){
  console.log(ingredients[decrease]);
  decrease -= 1;
}