import { combineCycles } from "redux-cycles";
import * as cycles from './index'
import _ from 'lodash'

export default combineCycles(..._.map(cycles, cycle => cycle))
