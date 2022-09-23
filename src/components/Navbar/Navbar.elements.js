import styled from 'styled-components'
import { Container } from '../../GlobalStyle'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
    background: black;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container} 
`
export const NavLogo = styled(Link)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: bold;

    &:hover{
        color: #4b59f7;
        transition: all 0.8s ease;
    }
    
`

export const NavIcon = styled(FaMagento)`
    margin-right: 1.5rem;


    &:hover{
        color: #4b59f7;
        transition: all 0.8s ease;
    }
    
`

export const MobileIcon = styled.div`
    display: none;
    margin: 25px;
    font-size: 2.5rem;
    cursor: pointer;


    @media screen and (max-width: 900px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100, 40%);
        font-size: 2.5rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and  (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh; 
        position: absolute; 
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 6px solid #4b59f7;
        transition: all 0.8s ease;
 
    }

    @media screen and (max-width: 900px){
        width: 100%;

        &:hover {
            border: none;
            transition: all 0.8s ease;
            
        }
    }
`;


export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 2rem;
    height: 100%;
    transition: all 0.8s ease;

    &:hover {
            color: #4b59f7;
            transition: all 0.8s ease;
        }

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        

        &:hover {
            color: #4b59f7;
            transition: all 0.8s ease;
        }
    }

`;


