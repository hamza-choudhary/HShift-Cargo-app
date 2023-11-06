// import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import { useAuth } from "src/context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SignIn = () => {
  const { user, login } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = (e) => {
    // setLoading(true);
    e.preventDefault();
    login(e.target.email.value, e.target.password.value);
  };

  useEffect(() => {
    if (user?.role === "ADMIN") navigate("/admin");
    else if (user?.role === "CLIENT") navigate("/portal");
  }, [user]);

  return (
    <div className="flex h-screen flex-1 overflow-y-hidden ">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="grid place-items-center">
            {/* <Logo className="w-44 ml-5" /> */}
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight heading-primary">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10">
            <div>
              <form onSubmit={signIn} method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-textColor"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-textColor"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end"></div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md btn-primary px-3 m-0 py-1.5 text-sm font-semibold leading-6 text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block"></div>
    </div>
  );
};

export default SignIn;
