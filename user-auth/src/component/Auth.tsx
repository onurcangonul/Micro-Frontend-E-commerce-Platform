import React, { useState } from "react";
import { toast } from "react-toastify";
import { API_BASE } from "../config/API_BASE";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); 
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE}auth/login`, {
        username,
        password,
      });
      const { message } = response.data;
       localStorage.setItem("user", JSON.stringify(response.data));
      toast.success(message || "Giriş başarılı!"); 
      navigate("/")
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Geçersiz kullanıcı adı veya şifre.";
      toast.error(errorMessage); 
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE}auth/register`, {
        username,
        password,
      });
      toast.success(
        response.data.message || "Kayıt başarılı! Artık giriş yapabilirsiniz."
      );
      setIsRegistering(false);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Kayıt sırasında bir hata oluştu.";
      toast.error(errorMessage); 
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative bg-white shadow-2xl rounded-lg p-10 max-w-md w-full mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          {isRegistering ? "Sign up" : "Sign in"}
        </h2>
        <p className="text-center text-gray-500 mb-8">
          {isRegistering
            ? "Create a new account"
            : "Sign in to access your account"}
        </p>

        <form
          className="space-y-6"
          onSubmit={isRegistering ? handleRegister : handleLogin}
        >
          <div>
            <label
              className="block text-gray-600 text-sm mb-1"
              htmlFor="username"
            >
              Enter Your Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-600 text-sm mb-1"
              htmlFor="password"
            >
              Enter Your Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isRegistering ? "Sign up" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-8">
          {isRegistering ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsRegistering(false)}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Sign in
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsRegistering(true)}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </>
          )}
        </p>

     
      </div>
    </div>
  );
};

export default Auth;
