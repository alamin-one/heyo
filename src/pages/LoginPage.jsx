import { useState } from 'react';
import img from '../assets/images/Image';
import { useAuthContext } from '../components/context/auth/AuthContextProvider';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const { signUP, signIN } = useAuthContext();
  const [isLogin, setIsLogin] = useState(false);
  /* login */
  const [logIn, setLogIn] = useState({
    email: '',
    password: '',
  });
  /* register */
  const [register, setRegister] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    aggre: false,
  });
  /* handle login  */
  const handleChangeIN = (type, target) => {
    setLogIn(prev => ({
      ...prev,
      [type]: target.value,
    }));
  };

  /* handle register */
  const handleChangeUP = (type, target) => {
    setRegister(prev => ({
      ...prev,
      [type]: type === 'aggre' ? target.checked : target.value,
    }));
  };

  /* handle submit */
  const handleSubmitUP = e => {
    e.preventDefault();
    if (register.password === register.confirmPassword) {
      toast.success('Successfully Register');
      signUP(register.userName, register.email, register.password);
      setRegister({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        aggre: false,
      });
    } else {
      toast.error("Pawsord don't metch");
    }
  };

  /* handle submit */
  const handleSubmitIN = e => {
    e.preventDefault();
    signIN(logIn.email, logIn.password);
    setLogIn({
      email: '',
      password: '',
    });
  };

  /* style */
  const style = {
    input:
      'px-4 py-2 text-[14px] text-Steel border placeholder:text-md mb-3 border-gray-300  dark:border-gray-700 rounded-full outline-none focus:border-LightGreen focus:ring-1 ring-LightGreen',
    form: 'w-full flex flex-col',
  };

  return (
    <>
      <section className="h-screen flex items-center justify-center  bg-LightGreen   md:bg-white md:dark:bg-Dark ">
        <div className="border border-gray-300  dark:border-gray-700 md:rounded-2xl md:items-stretch h-screen md:h-fit flex flex-col md:flex-row items-center gap-5 bg-LightGreen md:overflow-hidden">
          <div className=" p-10  w-full md:w-1/2">
            <img src={img.signUp} alt="SignUP.png" />
          </div>
          <div className="px-5 py-10 md:p-10 w-full rounded-2xl md:rounded-t-none md:rounded-l-2xl md:w-1/2 flex flex-col justify-center bg-white dark:bg-Dark">
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
                <form onSubmit={e => handleSubmitUP(e)} className={style.form}>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Full Name"
                    required
                    className={style.input}
                    value={register.userName}
                    onChange={e => handleChangeUP('userName', e.target)}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className={style.input}
                    value={register.email}
                    onChange={e => handleChangeUP('email', e.target)}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className={style.input}
                    value={register.password}
                    onChange={e => handleChangeUP('password', e.target)}
                  />
                  <input
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    className={style.input}
                    value={register.confirmPassword}
                    onChange={e => handleChangeUP('confirmPassword', e.target)}
                  />
                  <div className="text-[13px] mb-4">
                    <input
                      type="checkbox"
                      name="aggre"
                      required
                      checked={register.aggre}
                      onChange={e => handleChangeUP('aggre', e.target)}
                    />
                    {'  '}
                    <label htmlFor="aggre">
                      I agree with Terms and Privacy
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs text-white border border-Dark rounded-md bg-Dark  dark:bg-LightGreen hover:bg-white hover:text-Dark cursor-pointer w-fit"
                  >
                    SIGN UP
                  </button>
                </form>
              ) : (
                <form onSubmit={e => handleSubmitIN(e)} className={style.form}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className={style.input}
                    value={logIn.email}
                    onChange={e => handleChangeIN('email', e.target)}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className={style.input}
                    value={logIn.password}
                    onChange={e => handleChangeIN('password', e.target)}
                  />

                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs text-white border border-Dark rounded-md bg-Dark  dark:bg-LightGreen hover:bg-white hover:text-Dark cursor-pointer w-fit"
                  >
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
