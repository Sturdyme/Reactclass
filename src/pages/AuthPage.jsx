import axios from "axios";
import  { useState } from "react";
import Spinner from "../components/Utilities/Spinner";

export default function AuthPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState  (false);

    const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const payLoad = {
        username,
        password, }

     try {
        const response = await  axios.post("https://fakestoreapi.com/auth/login" , 
            payLoad);
            console.log("response", response)

     } catch (err) {
        console.log(err)
        setErrorMessage(err.response.data);
        setLoading(false);
     }
    }
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Sign in
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1">
          Welcome back — please enter your credentials.
        </p>

        <form 
        onSubmit={handleLogin}
         className="mt-6 space-y-4">
          <label className="block">
            <span className="text-xs font-medium text-gray-600">Username</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. johndoe"
              className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500"
            />
          </label>

          <label className="block">
            <span className="text-xs font-medium text-gray-600">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500"
            />
          </label>
          <div>
           { errorMessage && (
            <p className="text-red-700 text-sm"> {errorMessage}</p>
           )}
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="rounded border-gray-200 text-indigo-600 focus:ring-indigo-500"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
           { loading ? <Spinner/> : "Sign in"  }
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
         
    </div>
  );
}

