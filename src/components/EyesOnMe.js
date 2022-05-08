// Code EyesOnMe Component Here
function EyesOnMe() {
    function focuseventHandler() {
        console.log("Good")
    }
    function blurEventHandler() {
        console.log("Hey! Eyes on me")
    }
    return <button onFocus={focuseventHandler} onBlur={blurEventHandler}>Eyes on me</button>
} 
export default EyesOnMe