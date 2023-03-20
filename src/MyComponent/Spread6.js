function Spread()
{
    function sum(name,...arr)
    {
        let sum1=0;
        for(let i in arr)
        {
            sum1=(arr[i])+(sum1)
            console.log("wj",arr)
        }
        console.log("hi",sum1)
        
        
    }
    function c(a,b)
        {
            console.log(a+b)
        }
    let obj1={1:"hello"}
        let obj2={1:"hii"}
    let arr=[11,22,33,44]
    return (
        <div>
            {sum("Yahoo",...arr)}
            {c(obj1,obj2)}
        </div>
    )
}
export default Spread