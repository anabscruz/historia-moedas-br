import Coin from "./coin"
export default function Milestone({coin}){
    return (
        <div className="milestone">
            <Coin nome={coin.name} sigla={coin.initials} />
        </div>
    )
}