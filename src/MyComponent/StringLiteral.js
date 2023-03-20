function StringLiteral()
{
    function click()
    {
        let x="Hello";
        ///noraml way to repesents....
        let greet=`Welcome 'and'  ${x} to my channel `
        console.log(greet)

        
    }
    let hello=function(f,l)
        {
            let fullname=`${f} ${l}`;
            
            return fullname
        }
    return (
        <div>
            {click()}
            {`Hellllo      ${hello('a','k')}`}
            {console.log(`Hellllo ${hello('a','k')}`)}
            
        </div>
    )
}
export default StringLiteral;