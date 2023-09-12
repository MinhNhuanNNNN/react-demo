import './clock.css'


function Clock(){
    const data = new Date()
    
    return(
        <div>
            <div class="color">HELLO I am Clock</div>
            <div class="color2">Now is {data.toLocaleTimeString()}</div>
        </div>
    )
}
export default Clock