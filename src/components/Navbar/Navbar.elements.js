import styled from 'styled-components'

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
    height: 80px;;
`