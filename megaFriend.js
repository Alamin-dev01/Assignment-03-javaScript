
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




  