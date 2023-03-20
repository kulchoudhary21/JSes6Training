export function OopsConcept()
{
    class Demo
    {
        b=10;
        constructor(name,age)
        {
            let a;
            this.name=name;
            this.age=age;
            console.log("Constructor Function.")
        }
        message(a)
        {
            console.log("Hello",this.a);   
        }
        display(ne)
        {
            console.log("hii",this.ne);
            console.log(`Hello ${this.name} and your age is ${this.age}`);
        }
        static staticMethod(ne)
        {
             console.log("Static method...",this.ne)
        }
    }
    let d=new Demo()
    let d1=new Demo("Kuldeep",23)
    let d2=new Demo();
    d.message(d.a=15);
    d.display(d.b);  
    return(
        <div>
            {d.message()}
            {d1.display()}
            {Demo.staticMethod()}
            {console.log(d.b) }
        </div>
    )
}