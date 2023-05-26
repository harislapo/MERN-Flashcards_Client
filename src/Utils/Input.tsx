import React, { FC } from 'react';
import './Input.css';

type InputProps = {
  value: string;
  type: string;
  placeholder: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
};

const Input: FC<InputProps> = ({ type, placeholder, value, setter }) => {
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setter(e.target.value);
  };

  return (
    <div>
      <input
        className="effect-1"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleSubmit}
      />
      <span className="focus-border"></span>
    </div>
  );
};

export default Input;
