import { combineReducers } from "redux";

import {cartReducer} from './cartReducer';
import {userReducer} from './userReducer';
import {dataReducer} from './dataReducer';

const rootReducer = combineReducers({
    cartReducer,
    userReducer,
    dataReducer
});

export default rootReducer;