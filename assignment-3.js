

// NO:1---
function KilometerToMeter(kilometer) {

  // condition below
   if (kilometer < 0) {
    
 
 
       return "Distance cannot negative"
   }
   else {
       let meter = kilometer * 1000;
 
 
       return meter;
   }
 }
 console.log(KilometerToMeter(69));
 // printing 


// -----------------------------------


//  NO:2---
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
  
  console.log(budgetCalculator(3,2,1));
  // printing

// --------------------------------------

// NO:3---
function hotelCost(day){

  let Total;
  let extraDay;

//condition   

  if(day<=0){

      return "Stay for low cost";
  }

  else if(day<=10){
         Total=day*100;
         return Total;

       }
      else if(day<=20){
       extraDay=day-10;

       Total=(10*100)+(extraDay*80);
       return Total;

              }
       else{
              extraDay=day-20;
              Total=(10*100)+(10*80)+(extraDay*50);
          return Total;
          }

}
console.log(hotelCost(5));
// printing

// ------------------------------------

// NO:4---
// Friends name
NameofFriend=["Raian","Sammmmi","Sharmin"];

        function megeFirend(NameOfFriend) {
            let longestIndex = NameOfFriend[0];
// conditions
            if (NameOfFriend.length ===0||Array.isArray(NameOfFriend)===false) {

                return "No Array available";
            }

            else {
                for (let i = 0; i < NameOfFriend.length; i++) {
                    if (NameOfFriend[i].length > longestIndex.length) {

                        longestIndex = NameOfFriend[i];
                    }
                }
                return longestIndex;
            }
        }
        
// printing
  console.log(megeFirend(NameofFriend));




