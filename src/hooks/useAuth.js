import { useContext } from "react";
import { ContexApi } from "../ContextApiProvider/ContextApiProvider";

const useAuth=()=> useContext(ContexApi)

export default useAuth;