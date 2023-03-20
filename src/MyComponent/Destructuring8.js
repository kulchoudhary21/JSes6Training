function Destructuring()
{

    function user([name,age,city,...args])
    {
        console.log(name,args)
    }

    function another_return()
    {
        return ['Kuldeep', 23 ,'indore',['kullu','india']]
    }
    let [name,age]=another_return()
    return (
        <div>
            {console.log(name,age)}
        </div>
    )
}
export default Destructuring