function ObjectLiteral()
{
    let name="Kuldeep";
    let obj={
        name,
        course:"B.tech"
    };


    let n="gullu"
    let obj1={
        [n]:"bhiya",
        course : "Btech",
        detail : function(){
                return `welcome ${this.gullu} to enroll in ${this.course}` 
            }
            
    }

    let n3="name"
    let obj3={
        [n3]:"Kuldeep",
        course : "B.tech",
        details()
        {
            return `Hello ${this.name} to enroll to this ${this.course}`
        }
    }


    let fname="Kuldeep";
    let lname="choudhary";
    let course="Btech";
    function hello(fname,lname,course)
    {
        let full=fname+" "+lname;
        return {full,course}
    }
    let o=hello(fname,lname,course)
    // {console.log(obj1)}
    // {console.log(obj1.detail())}
    return (
        <div>
            {/* {console.log(obj1)}
            {console.log(obj1.detail())} */}
            {/* {console.log(obj3['details']())} */}
            
            {console.log(o.full)}
            {console.log(o.course)}
        </div>
    )
}
export default ObjectLiteral
