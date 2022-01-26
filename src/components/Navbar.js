import {navbar_list} from "../constant/util"
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Navbar = ()=>{
     
    return <Wrapper>

        <div className="navbar_list">
        {
            navbar_list.map((nav)=>{
                const {index,name,link} = nav;
                console.log(link)
                return <Link className="link" key={index} to={link}><h1>{name}</h1></Link>
            })
        }
        </div>
        
    </Wrapper>
}

const Wrapper = styled.nav`
    background-color: aquamarine;
    .navbar_list{
        display:flex;
        flex-direction:horizontal;
    }

    .link{
        text-decoration:none;
        margin:10px;
    }    
`

export default Navbar;