import React, { useState } from "react";

const SignUp = () => {
    const [role,setRole]= useState()
    console.log(role);
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        maxHeight: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:"poppins"
      }}
    >
      <div
        style={{
          width: "40%",
          minWidth:"600px",
          height: "max-content",
          background: "#fff",
          display: "flex",
          flexDirection:"column",
          alignItems:"center",
          borderRadius:"10px",
          gap:"20px",
          paddingBlock:"30px"
        }}
      >
        <h1>SignUp</h1>
        <div style={{width:"90%", height:"70px", display:"flex", gap:"20px"}}>
            <div style={{width:"50%", height:"100%", background:"#fff", display:"flex", flexDirection:"column"}}>
                <label style={{display:"flex", alignItems:"center", fontSize:"20px", fontWeight:"600"}}>First name <span style={{color:"blue"}}>*</span></label>
                <input type="text" style={{height:"40px", borderRadius:"5px", outline:"none"}} />
            </div>
            <div style={{width:"50%", height:"100%", background:"#fff", display:"flex", flexDirection:"column"}}>
                <label style={{display:"flex", alignItems:"center", fontSize:"20px", fontWeight:"600"}}>Last name <span style={{color:"blue"}}>*</span></label>
                <input type="text" style={{height:"40px", borderRadius:"5px", outline:"none"}} />
            </div>
        </div>
        <div style={{width:"90%", height:"70px", display:"flex", gap:"20px"}}>
            <div style={{width:"50%", height:"100%", background:"#fff", display:"flex", flexDirection:"column"}}>
                <label style={{display:"flex", alignItems:"center", fontSize:"20px", fontWeight:"600"}}>Email <span style={{color:"blue"}}>*</span></label>
                <input type="text" style={{height:"40px", borderRadius:"5px", outline:"none"}} />
            </div>
            <div style={{width:"50%", height:"100%", background:"#fff", display:"flex", flexDirection:"column"}}>
                <label style={{display:"flex", alignItems:"center", fontSize:"20px", fontWeight:"600"}}>Password <span style={{color:"blue"}}>*</span></label>
                <input type="text" style={{height:"40px", borderRadius:"5px", outline:"none"}} />
            </div>
        </div>
        <div style={{width:"90%", height:"70px", display:"flex", gap:"20px"}}>
            <div style={{width:"50%", height:"100%", background:"#fff", display:"flex", flexDirection:"column"}}>
                <label style={{display:"flex", alignItems:"center", fontSize:"20px", fontWeight:"600"}}>Phone number <span style={{color:"blue"}}>*</span></label>
                <input type="text" style={{height:"40px", borderRadius:"5px", outline:"none"}} />
            </div>
            <div style={{width:"50%", height:"100%", background:"#fff", display:"flex", flexDirection:"column"}}>
                <label style={{display:"flex", alignItems:"center", fontSize:"20px", fontWeight:"600"}}>Role <span style={{color:"blue"}}>*</span></label>
                {/* <input type="text" style={{height:"40px", borderRadius:"5px"}} /> */}
                <select name="" id=""style={{height:"40px", borderRadius:"5px", outline:"none"}} onChange={(e)=>setRole(e.target.value)}>
                    <option value="" defaultValue>--Choose Role--</option>
                    <option value="Member">Member</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Usher">Usher</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
        </div>
        <div style={{width:"90%", height:"45px", background:"blue", borderRadius:"5px", display:"flex", alignItems:"center", justifyContent:"center",}}>
            <p style={{fontSize:"20px", color:"#fff"}}>Create Account</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
