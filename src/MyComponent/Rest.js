export function Rest()
{
    function sum(s,...args)
    {
        let sum=0;
        for(let item in args)
        {
            sum+=args[item]
           
        }
        console.log(sum)
        console.log(s)
    }   
    return (
        <div>
            {sum("Kuldeep",11,22,33,44)}    
        </div>
    )
}