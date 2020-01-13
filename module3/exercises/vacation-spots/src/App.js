import React from "react"
import VacationSpot from "./VacationSpot"
import vacationData from "./vacationData"

function App() {
    console.dir(vacationData)
    const vacationPlaces = vacationData.map(place => <VacationSpot key={place.id} pickles={place.place}/>)
    return(
        <div>
            {vacationPlaces}
        </div>
    )
}

export default App