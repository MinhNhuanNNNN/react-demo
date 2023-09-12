import {useState} from "react";

function Sum(){
    const [soA, setSoA] = useState(0)

    function handleAChange(e){
        console.log(e.target.value)
    }
    return(
        <div>
        <input type='number' onChange={handleAChange}/>
        <input type='number' />
        <button>Tinh Tong</button>
        </div>
        
    )
}
export default Sum