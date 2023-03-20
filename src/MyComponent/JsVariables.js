function JsVariables()
{
    // var x="Hello";
    // x="Hii"
    // var x="kul"
    // let y="abz"
    let x="kul"
    const z="cool"
    function add()
    {
        var x="Kuldeep"
        let y="xyz"
        console.log(z)
    }
    console.log(z);    
    return (
        <div>
            <button onClick={add}>Click me</button>
        </div>
    )

}
export default JsVariables