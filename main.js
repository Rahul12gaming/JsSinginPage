function Validate()
{
    const fname=document.getElementById('fname').value;
    const lname=document.getElementById('lname').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const cpassword=document.getElementById('cpassword').value;
    const mobile=document.getElementById('mobile').value;
    // const data={
    //     fname,
    //     lname,
    //     email,
    //     password,
    //     cpassword,
    //     mobile
    // }
    if (!fname || !lname || !email || !password || !cpassword) {
      
      alert("Please Enter The Value");
      err()
      
  } 
    else if(password!=cpassword )
    {
        alert("Incorrect Password")
    }
    else if(password===cpassword)
    {
        if(password.length<8)
        {
            alert("Password Must of 8digit")
        }
        else if(mobile.length>10)
     {
       
        alert("Invalid Mobile Number");
     }
    }
     
    else
    {
        
        remove();
        alert("Thanks For Submission !")
    }
}
function err()
{
    const fname=document.getElementById('fname').classList.add('error');
    const lname=document.getElementById('lname').classList.add('error');
    const email=document.getElementById('email').classList.add('error');
    const password=document.getElementById('password').classList.add('error');
    const mobile=document.getElementById('mobile').classList.add('error');
    const cpassword=document.getElementById('cpassword').classList.add('error');
}
function remove()
{
    const fname=document.getElementById('fname').classList.remove('error');
    const lname=document.getElementById('lname').classList.remove('error');
    const email=document.getElementById('email').classList.remove('error');
    const password=document.getElementById('password').classList.remove('error');
    const mobile=document.getElementById('mobile').classList.remove('error');
    const cpassword=document.getElementById('cpassword').classList.remove('error');
}