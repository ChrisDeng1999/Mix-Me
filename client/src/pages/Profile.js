import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import DrinkList from '../components/DrinkList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';


export default Profile;