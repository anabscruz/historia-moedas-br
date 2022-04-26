import Milestone from "./milestone"
export default function TimeLine(){
    const coin = {
        nome: 'real',
        initials: 'R',
        note: 'Na linguagem popular, "réis"'
    }
    return(
        <>
            Aqui vai entrar a timeline
            <Milestone 
                year='...até 1833'  
                coin={coin}    
            />
        </>
    )
}