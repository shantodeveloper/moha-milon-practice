import React, { useContext } from 'react';
import { AouthContext } from '../../Provider/AouthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { signuser, signInWithGoogle } = useContext(AouthContext);
  const navigate = useNavigate();
  const handlelogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signuser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const googlealisen = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <button onClick={googlealisen} className="btn btn-ghost">
              Login Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
