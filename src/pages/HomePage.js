import styled from "styled-components";
import { Featured_Products_List } from "../components";

const HomePage = () =>{
    return <Wrapper>
        <h1>Home Page</h1>
        <Featured_Products_List/>
        </Wrapper>
}

const Wrapper = styled.div`
`

export default HomePage;