export function Destructuring9()
{
    
    function user()
    {
        let obj1={
            name:"Kuldeep",
            age:2
        }
        return obj1;
    }
    let {name:n,age:m}=user();
    return (
        <div>
            {console.log(n+m)}
        </div>
    )
}
