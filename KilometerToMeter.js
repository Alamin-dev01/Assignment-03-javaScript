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