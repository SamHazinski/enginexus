import  { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'LOGOUT':
    case 'AUTH_ERROR':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
  };

  AuthState.propTypes = {
    children: PropTypes.string.isRequired
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    if (localStorage.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }

    try {
      const res = await axios.get('https://example.com/api/auth');
      dispatch({
        type: 'USER_LOADED',
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: 'AUTH_ERROR' });
    }
  };

 
  const register = async (formData) => {
    try {
      const res = await axios.post('https://example.com/api/auth/register', formData);
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({ type: 'AUTH_ERROR' });
    }
  };

  const login = async (formData) => {
    try {
      const res = await axios.post('https://example.com/api/auth/login', formData);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({ type: 'AUTH_ERROR' });
    }
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
