const data = [
    { state: "UT", city: "Salt Lake City" },
    { state: "CA", city: "San Diego" },
    { state: "CA", city: "San Francisco" },
    { state: "CO", city: "Denver" }
  ]
  function makeStateObj(arr){
      const result ={}
    for(let i=0;i<arr.length;i++){
        const { state, city } = arr[i]
        if (!result[state]){
            result[state] = [city]
        }else {
            if(result[state].includes(city)){
            result[state].push(city)
        }
    }
    return result
    }
  }

  console.log(makeStateObj(data)) 
//   const answer =  { 
//     UT: ["Salt Lake City"],
//     CA: ["San Diego", "San Francisco"],
//     CO: ["Denver"]
//   }