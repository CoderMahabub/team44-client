import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvide"

const useAuth = () => {
      return useContext(AuthContext)
}
export default useAuth