 import { ISignUp } from "./types"
 import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

export const signupDefaultValues:ISignUp = {
    fullName: '',
    username: "",
    email: "",
    password: ""
}

 export const signupSchema = yup.object().shape({
    fullName: yup.string()
        .required("FullName is required"),
    username: yup.string()
        .min(6, "username must be atleast 6 characters")
        .required("Username is required"),
    email: yup.string()
        .email("invalid email format")
        .required("Email is required"),
    password: yup.string()
        .min(6, "password must be atleast 6 characters")
        .max(10, "password must not exceed 10 characters")
        .required("password is required")
 })
 export const signupResolver =  yupResolver(signupSchema);


 
export const loginSchema = yup.object().shape({
    username: yup.string().min(6, "username must be atleast 6 characters").required("Username is required"),
    password: yup.string()
        .min(6, "password must be atleast 6 characters")
        .max(10, "password must not exceed 10 characters")
        .required("password s required")
})



