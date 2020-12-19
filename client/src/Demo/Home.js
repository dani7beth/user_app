import { useContext } from "react"
import { Header } from "semantic-ui-react"
import { UserContext } from "../providers/UserProvider"

export default () =>{
    const {firstName, lastName} = useContext(UserContext)
   return(
        <Header as='h1' textAlign="center">Welcome, {firstName} {lastName}!</Header>
   ) 
}
