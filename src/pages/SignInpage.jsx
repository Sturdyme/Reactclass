import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Utilities/Spinner";
import { useUser } from "../context/userContext";


const SignInpage = () => {
     const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);
       const [loading, setLoading] = useState  (false);

      const navigate = useNavigate();
      const {setUser} = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password
      });
   
      console.log(response.data);
   if(response.status === 200) {
    setUser(response.data)
    navigate("/")
   } 
   else {
    alert("Login failed")
   }
    } catch (error) {
      alert("Invalid credentials or API error!");
      console.error(error);
    }
  };
  
  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <section className="flex justify-center bg-gray-600 h-[100vh]">
         <form
                onSubmit={handleLogin}
                className="border w-[400px] bg-gray-300 h-[400px] mt-[10rem] rounded-md px-10 py-6"
              >
                <h2 className="text-2xl font-semibold text-center">Login</h2>
        
                {/* Username Input */}
                <label className="block mt-4">Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-[300px] rounded-md px-2 h-[40px] border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
        
                {/* Password Input */}
                <label className="block mt-4">Password:</label>
                <div className="relative w-[300px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full rounded-md px-2 h-[40px] border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
        
                {/* Forgot password */}
                <div className="mt-2 flex items-center gap-1">
                  <input type="checkbox" />
                  <a href="#" className="text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
        
                {/* Submit Button */}
              <button
            type="submit"
            
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
           { loading ? <Spinner/> : "Sign in"  }
          </button>
              </form>
      
    </section>
  )
}

export default SignInpage
