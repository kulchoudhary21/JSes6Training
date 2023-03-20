function ArrowFunction()
{
    function normal()
    {
        console.log("Hello normal fution");
    }
    let express=function()
    {
        console.log("Expression type function....");
    }
    let arrow=(name,age)=> console.log(`Welcome and Hello ${name} -> ${age}`)

    return(
        <div>
            {normal()}
            {express()}
            {arrow("Kuldeep",21)}
        </div>
    )    
}
export default ArrowFunction;