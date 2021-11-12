import axios from "axios";
import {baseUrl} from './constants/constants';

const insatance = axios.create({
    baseURL:baseUrl
})
export default insatance