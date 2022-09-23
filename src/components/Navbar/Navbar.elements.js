import styled from 'styled-components'
import { Container } from '../../GlobalStyle'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
    background: red;
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
`

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`
