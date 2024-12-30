import { Link } from "react-router-dom";
import { googleProvider, auth } from '../firebase'; // Import correctly from firebase.js
import { useState } from "react";
import { signInWithPopup } from "firebase/auth"; // Import signInWithPopup from Firebase auth

const SignIn = () => {
  const [error, setError] = useState(false);
  const [googleErrorMessage, setGoogleErrorMessage] = useState("");

  // Handle user sign up with Google
  const handleGoogleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Sign in with a pop-up window using the provider
      const result = await signInWithPopup(auth, googleProvider);

      // Pull signed-in user credential.
      const user = result.user;
      console.log("User signed in:", user);
      // Optionally redirect the user or handle additional logic
    } catch (err) {
      // Handle errors here.
      const errorMessage = err.message;
      const errorCode = err.code;

      setError(true);

      // Show specific error messages based on errorCode
      switch (errorCode) {
        case "auth/operation-not-allowed":
          setGoogleErrorMessage("Email/password accounts are not enabled.");
          break;
        case "auth/operation-not-supported-in-this-environment":
          setGoogleErrorMessage("HTTP protocol is not supported. Please use HTTPS.");
          break;
        case "auth/popup-blocked":
          setGoogleErrorMessage("Popup has been blocked by the browser. Please allow popups for this website.");
          break;
        case "auth/popup-closed-by-user":
          setGoogleErrorMessage("Popup has been closed by the user before finalizing the operation. Please try again.");
          break;
        default:
          setGoogleErrorMessage(errorMessage);
          break;
      }
    }
  };

  return (
    <div className="signupContainer mt-6 ">
      <div className="signupContainer__box__google ">

            <button className='bg-white p-4 rounded-lg w-full '  onClick={handleGoogleSignUp}>

                <span className="">
                    <img className="w-20 items-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google Logo" />
                </span>

            Sign Up with Google
            </button>
            {error && <p>{googleErrorMessage}</p>}
      </div>

      <div className="signupContainer__box__login text-white mt-4">
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
