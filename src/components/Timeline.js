import Milestone from "./Milestone"
import coins from '../coins.json'

export default function TimeLine(){
    return(
        <>
            {
                coins.map((coin, i) => (
                    <Milestone 
                        key={i}
                        coin={coin}    
                    />
                ))
            }
        </>
    )
}