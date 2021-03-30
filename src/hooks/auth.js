import { useContext } from 'react';

import authContext from '../contexts/authContex.js';

const useAuth = () => useContext(authContext);

export default useAuth;
