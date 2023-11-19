import React, { InputHTMLAttributes } from 'react';
import { InputContainer } from './style';
import { RiErrorWarningFill } from 'react-icons/ri';

interface Props {
  placeholder?: string;
  setValue?: (value: string) => void;
  error?: string;
  setError?: (errors: string) => void;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, Props {}

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement>, Props {}

export const Input = ({ setValue, error, setError, ...props }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue?.(e.target.value);
    setError?.('');

    props.onChange?.(e);
  };

  return (
    <InputContainer className="input">
      <span className="placeholder">{props.placeholder}</span>
      <input
        {...props}
        placeholder=""
        onChange={handleChange}
        className={error ? 'error' : ''}
      />
      {error && (
        <span className="error">
          <RiErrorWarningFill /> {error}
        </span>
      )}
    </InputContainer>
  );
};

export const Select = ({
  setValue,
  error,
  setError,
  ...props
}: SelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue?.(e.target.value);
    setError?.('');

    props.onChange?.(e);
  };

  return (
    <InputContainer className="input">
      <span className="placeholder">{props.placeholder}</span>
      <select
        {...props}
        onChange={handleChange}
        className={`${error ? 'error' : ''}`}
      />
      {error && (
        <span className="error">
          <RiErrorWarningFill /> {error}
        </span>
      )}
    </InputContainer>
  );
};
