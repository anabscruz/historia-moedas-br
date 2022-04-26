import Coin from "./coin"
export default function Milestone({year, coin}){
    return (
        <>
            <p>Milestone</p>
            <Coin nome={coin.name} sigla={coin.initials} />
        </>
    )
}