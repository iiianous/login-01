import React, { useState } from 'react';
import Button from '../layout/components/Button/Button';
import InputCheckbox from '../layout/components/InputCheckbox';
import InputText from '../layout/components/InputText';

import iconDev from '../assets/images/dev.svg';
import iconFeat from '../assets/images/feature.svg';
import iconUpdate from '../assets/images/updates.svg';

import StyledLogin from './StyledLogin';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  });
  console.log(form);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setForm((prevState) => {
      if (name === 'remember') {
        return {
          ...prevState,
          [name]: checked,
        };
      }
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="App">
      <StyledLogin>
        <section className="left">
          <div className="left__wrapper">
            <pre>{JSON.stringify(form, null, 2)}</pre>
            <InputText
              name="email"
              text="Email"
              placeholder="Enter your Email"
              handleChange={handleChange}
            />
            <InputText
              name="password"
              text="Password"
              placeholder="Password"
              handleChange={handleChange}
            />
            <div className="action">
              <InputCheckbox
                name="remember"
                text="Remember me"
                handleChange={handleChange}
              />
              <a
                target="_blank"
                href="https://www.ianmostar.me"
                rel="noreferrer"
              >
                Forgot Password?
              </a>
            </div>
            <Button variant="primary" text="Log in" type="button" />
          </div>
        </section>
        <section className="right">
          <div className="right__wrapper">
            <div className="box">
              <div className="box__icon">
                <img className="icon" src={iconDev} alt="Development" />
              </div>
              <div className="box__text">
                <h4>Development</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate, voluptatem.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box__icon">
                <img className="icon" src={iconFeat} alt="Development" />
              </div>
              <div className="box__text">
                <h4>Features</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate, voluptatem.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box__icon">
                <img className="icon" src={iconUpdate} alt="Development" />
              </div>
              <div className="box__text">
                <h4>Updates</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate, voluptatem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </StyledLogin>
    </div>
  );
}

export default Login;
