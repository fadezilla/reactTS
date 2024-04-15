import React, { useState } from 'react';

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return <input type="email" value={email} onChange={handleChange} />;
};


// Example: Typing a form submission event

interface FormData {
    username: string;
      password: string;
    }
    
    const LoginForm: React.FC = () => {
      const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
      });
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Submit form data
        console.log(formData);
      };
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="submit">Login</button>
        </form>
      );
    };

    //example: implementing form validation:

    
    interface LoginFormState {
        email: string;
        password: string;
      }
      
      const validateForm = (formData: LoginFormState): boolean => {
        // Example validation logic
        return /\S+@\S+\.\S+/.test(formData.email) && formData.password.length > 6;
      };
      
      const LoginForm: React.FC = () => {
        const [formData, setFormData] = useState<LoginFormState>({ email: '', password: '' });
      
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          if (validateForm(formData)) {
            console.log('Form is valid:', formData);
            // Proceed with form submission
          } else {
            console.error('Form is invalid');
            // Handle invalid form
          }
        };
      
        // Input change handlers...
      
        return (
          // Form JSX...
        );
      };