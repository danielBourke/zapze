import { combineReducers } from 'redux';
import {reducer as FormReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import asyncReducer from '../../features/async/asyncReducer';
import projectReducer from '../../features/projects/projectReducer';


const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    toastr: toastrReducer,
    async: asyncReducer,
    projects: projectReducer
 
  });
  
  export default rootReducer;