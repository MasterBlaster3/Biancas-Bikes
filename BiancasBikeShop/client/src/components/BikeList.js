import { useState, useEffect } from "react"
import { getBikes } from "../bikeManager"
import BikeCard from "./BikeCard"

export default function BikeList({ setDetailsBikeId }) {
    const [bikes, setBikes] = useState([])

    const getAllBikes = () => {
        //implement functionality here...
        getBikes().then(data => setBikes(data))
    }

    useEffect(() => {
        getAllBikes()
    }, [])
    return (
        <>
            <h2>Bikes</h2>
            {/* Use BikeCard component here to list bikes...*/}
            {bikes.map(b => {
                return (
                    <BikeCard bike={b} setDetailsBikeId={setDetailsBikeId} />
                )
            })}
        </>
    )
}