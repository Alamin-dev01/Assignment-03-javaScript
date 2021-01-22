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