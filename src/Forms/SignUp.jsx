import { useEffect, useState } from "react";
function SignUp({ isSignUpOpen, setIsSignUpOpen }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  useEffect(()=>{
    const savedData = localStorage.getItem("firstName")
    setFirstName(savedData)
  },[])
  useEffect(()=>{
    const savedData = localStorage.getItem("lastName")
    setLastName(savedData)
  },[])
  useEffect(()=>{
    const savedData = localStorage.getItem("email")
    setEmail(savedData)
  },[])
  
  useEffect(() => {
    localStorage.setItem("firstName", firstName);
  }, [firstName]);
  
  useEffect(() => {
    localStorage.setItem("lastName", lastName);
  }, [lastName]);
  
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);
  
  return (
    <div className="flex flex-col bg-blue-400 p-10 mx-[30%] rounded-xl justify-center items-center">
      
      <div className="text-6xl flex justify-center items-center mb-6">
        
        <h1>Sign Up</h1>
      </div>
      <form className="grid grid-cols-2 items-center">
        
        <label className="text-xl text-white">Firstname:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChangeFirstName}
          className="m-2 border border-black rounded-lg px-2"
        />
        <label className="text-xl text-white">Email:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChangeLastName}
          className="m-2 border border-black rounded-lg px-2"
        />
        <label className="text-xl text-white">Lastname:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          className="m-2 border border-black rounded-lg px-2"
        />
        <div className="col-span-2 flex justify-center mt-4"></div>
      </form>
    </div>
  );
}
export default SignUp