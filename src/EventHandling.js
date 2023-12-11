function EventHandling(){

    function displayMessage(num){
        alert("Button Clicked"+num)
    }

    return(
        <button onClick={()=>{displayMessage(10)}}>Click</button>
    )
}

export default EventHandling