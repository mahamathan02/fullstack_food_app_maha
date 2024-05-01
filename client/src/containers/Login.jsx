import React, { useEffect, useState } from "react";
import straw from "../assets/imgs/strawberry-2293337_1280.jpg";
import cherry from "../assets/imgs/cherries-2905964_1280.jpg";
import loginbg from "../assets/imgs/loginbg.png";
import logo from "../assets/imgs/logo (2).png";
import Logininput from "../components/Logininput";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { buttonclick } from "../animations";
import { useDispatch } from "react-redux";
import { saveuser } from "../context/reducer/userReducer";
import { useSelector } from "react-redux";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../config/firebase.config";
import { validateUserJWTtoken } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");

  const [issignUp, SetIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const LoginwithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          cred.getIdToken().then((token) => {
            validateUserJWTtoken(token).then((data) => {
              console.log(data);
              dispatch(saveuser(data));
            });
            navigate("/", { replace: true });
          });
        }
      });
    });
  };

  const signUpwithemailpassword = async () => {
    if (userEmail === "" || password === "" || confirm_password == "") {
      <p>please fill the field</p>;
      // alert messages
      alert("Please fill in all required fields.");
      <p>please fill the field</p>;
    } else {
      if (password === confirm_password) {
        alert("Passwords do not match. Please try again.");
        setUserEmail("");
        setPassword("");
        setconfirm_password("");
        await createUserWithEmailAndPassword(
          firebaseAuth,
          userEmail,
          password
        ).then((userCred) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                // console.log(token);
                validateUserJWTtoken(token).then((data) => {
                  console.log(data);
                  dispatch(saveuser(data));
                });
                // navigate("/", { replace: true });
              });
            }
          });
        });
        console.log("equal");
      } else {
        // alert.message("email is used");
        alert("Passwords do not match. Please try again.");
        alert("the user is aleradt exits");
      }
    }
  };

  const signInwithemailpassword = async () => {
    if (userEmail !== "" && password !== "") {
      setUserEmail("");
      setPassword("");
      setconfirm_password("");
      await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(
        (userCred) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                // console.log(token);
                validateUserJWTtoken(token).then((data) => {
                  console.log(data);
                });
                // navigate("/", { replace: true });
              });
            }
          });
        }
      );
    } else {
    }
  };
  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* back img */}

      <img
        className="w-full h-full object-cover absolute top-0 left-0"
        src={loginbg}
        alt=""
      />

      {/* content box */}

      <div
        className=" gap-6 flex flex-col items-center bg-cardOverlay w-[89%] md:w-508 h-full z-10 backdrop-blur-md p-4  px4'
      py-12 "
      >
        {/* logo section */}
        <div className=" flex items-center justify-start gap-4 w-full">
          <img src={logo} className=" w-8" alt="" />
          <p className="text-headingColor font-semibold text-2xl"> City</p>
        </div>
        {/* welcome text */}
        <p className="text-3xl font-semibold from-neutral-600"> WelCome Back</p>
        <p className="text-xl text  -mt-6">
          {issignUp ? "sign-up" : "sign In"} with folowing{" "}
        </p>
        <div className="w-full flex flex-col justify-center gap-6 px-4 md:px-12 py4 items-center">
          <Logininput
            placeHolder={"Email Here"}
            icons={<FaEnvelope className="text-xl text-textColor " />}
            inputstate={userEmail}
            inputstatefunc={setUserEmail}
            type="email"
            issignUp={issignUp}
          />

          <Logininput
            placeHolder={"Password"}
            icons={<FaLock className="text-xl text-textColor " />}
            inputstate={password}
            inputstatefunc={setPassword}
            type="password"
            issignUp={issignUp}
          />
          {issignUp && (
            <Logininput
              placeHolder={"confirm password Here"}
              icons={<FaLock className="text-xl text-textColor " />}
              inputstate={confirm_password}
              inputstatefunc={setconfirm_password}
              type="password"
              issignUp={issignUp}
            />
          )}
        </div>
        {!issignUp ? (
          <p className="font-semibold ">
            Doestn't Have an account :{" "}
            <motion.button
              {...buttonclick}
              className="font-semibold  text-red-800 cursor-pointer bg-transparent underline"
              onClick={() => SetIsSignUp(true)}
            >
              CreateOne
            </motion.button>
          </p>
        ) : (
          <p className="font-semibold">
            Already Have an account :{" "}
            <motion.button
              {...buttonclick}
              className="text-red-800 font-semibold cursor-pointer bg-transparent underline"
              onClick={() => SetIsSignUp(false)}
            >
              Sign-in Here
            </motion.button>
          </p>
        )}

        {/* button signin */}
        {issignUp ? (
          <motion.button
            {...buttonclick}
            className="w-96 px-4 py-2 bg-red-400 text-white text-xl hover:bg-red-500 transition-all duration-150 rounded-lg capitalize"
            onClick={signUpwithemailpassword}
          >
            Sign Up
          </motion.button>
        ) : (
          <motion.button
            {...buttonclick}
            onClick={signInwithemailpassword}
            className="w-96 p-4 px-4 py-2 bg-red-400 text-white text-xl hover:bg-red-500 transition-all duration-150 rounded-lg capitalize"
          >
            Sign in
          </motion.button>
        )}

        <div className="flex items-center justify-between gap-16">
          <div className="w-24 h-[2px] rounded-md bg-white"></div>
          <p className="text-white">or</p>
          <div className="w-24 h-[2px] rounded-md bg-white"></div>
        </div>

        <motion.div
          {...buttonclick}
          className="flex items-center px-24 py-2 bg-cardOverlay backdrop:blur-md cursor-pointer rounded-3xl gap-4"
          onClick={LoginwithGoogle}
        >
          <FcGoogle className="text-3xl" />
          <p className="capitalize text-base font-semibold">
            sign-in with google
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
