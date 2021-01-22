function budgetCalculator(watch,phone,laptop){
// condition
  if(watch<0||phone<0||laptop<0){


      return "Things cannot negative"
  }

  else {
      let totalBudget = (50 * watch) + (100 * phone) + (500 * laptop);
      return totalBudget;
  }

}
// printing
console.log(budgetCalculator(3,2,1));