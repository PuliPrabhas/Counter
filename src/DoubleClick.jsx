function DoubleClick(){
    function handledOnDoubleClick(){
        return alert("You have double clicked me")
    }
    return (
        <button onDoubleClick={handledOnDoubleClick}>Click Me Twice</button>
    )
}
export default DoubleClick