import './style.css'


function Gioquocte({tenThanhpho, muiGio}){ //{la 1 object}
    function convertTime(offset) {
        // create Date object for current location
        var localTime = new Date();
        
        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        const utcTime = localTime.getTime() + (localTime.getTimezoneOffset() * 60000);
        
        // create new Date object for different city
        // using supplied offset
        
        const cityTime = new Date(utcTime + (3600000*offset));
        
        // return time as a string
        return cityTime.toLocaleString()
        }



    
    return(
            <div className="background">
            <div className="city-name">{tenThanhpho}</div>
            <div className="city-clock">{convertTime(muiGio)}</div>
            </div>
            
        
    )
}
export default Gioquocte

//props(properties): thuoc tinh cua componnet duoc truyen tu ben ngoai vao, va ko dc thay doi.
//State :du lieu component, trang thai cua component do. 