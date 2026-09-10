const accountid = 1445588
let accountemail = "vaishnaviue63"
var accountpassword = "245537"
// prefer not to use var because of issues in block scope and functional scope
accountcity = "jaipur"
 
// accountid = 2   it is not allowed const variable ek baar declare ho jane ke baad uski value change nhi hoti

console.log(accountid);

accountemail="hegew"
accountpassword="hello"
accountcity="banarash"

console.table([accountemail, accountcity, accountpassword,accountid])
