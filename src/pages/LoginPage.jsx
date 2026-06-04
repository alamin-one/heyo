import { useState } from 'react';
import img from '../assets/images/Image';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const style = {
    input:
      'px-4 py-1.5 text-[14px] text-Steel border placeholder:text-md mb-3 border-gray-300  dark:border-gray-700 rounded-full outline-none focus:border-LightGreen focus:ring-1 ring-LightGreen',
    form: 'w-full flex flex-col',
  };
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="border border-gray-300  dark:border-gray-700 rounded-2xl md:items-stretch  flex flex-col md:flex-row items-center gap-5 bg-LightGreen overflow-hidden">
          <div className=" p-10  w-full md:w-1/2">
            <img src={img.signUp} alt="SignUP.png" />
          </div>
          <div className="px-5 py-10 md:p-10 w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl md:w-1/2 flex flex-col justify-center bg-white dark:bg-Dark">
            {/* logo */}
            <div className="text-4xl text-Dark dark:text-white font-semibold mb-10 flex gap-1 items-center ">
              <img src={img.logoL} alt={img.logoL} className="w-10" />
              <span>Heyo</span>
            </div>
            <div className="w-full">
              <h2 className="text-2xl capitalize mb-3">
                {!isLogin ? 'Create Account' : 'Welcome back!'}
              </h2>
              {/*login and Create Account*/}
              {!isLogin ? (
                <form action="" className={style.form}>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Full Name"
                    className={style.input}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className={style.input}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={style.input}
                  />
                  <input
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={style.input}
                  />
                  <div className="text-[13px] mb-4">
                    <input type="checkbox" name="aggre" />
                    {'  '}
                    <label htmlFor="aggre">
                      I agree with Terms and Privacy
                    </label>
                  </div>

                  <button className="px-6 py-2.5 text-xs text-white border border-Dark rounded-md bg-Dark  dark:bg-LightGreen hover:bg-white hover:text-Dark cursor-pointer w-fit">
                    SIGN UP
                  </button>
                </form>
              ) : (
                <form action="" className={style.form}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className={style.input}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={style.input}
                  />

                  <button className="px-6 py-2.5 text-xs text-white border border-Dark rounded-md bg-Dark  dark:bg-LightGreen hover:bg-white hover:text-Dark cursor-pointer w-fit">
                    SIGN IN
                  </button>
                </form>
              )}
              <p className="pt-5">
                <button onClick={() => setIsLogin(prev => !prev)}>
                  {!isLogin ? (
                    <>
                      Already have an account{' '}
                      <span className="text-LightGreen cursor-pointer">
                        Log In
                      </span>
                    </>
                  ) : (
                    <>
                      Dont have an account{' '}
                      <span className="text-LightGreen cursor-pointer">
                        Register
                      </span>
                    </>
                  )}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
