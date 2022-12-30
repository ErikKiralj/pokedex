import styled from 'styled-components'

import { Colors } from '../theme'

import type { NavbarBurgerMenuProps } from './Navbar.types'
export const NavbarRoot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 10px 0 10px 0;
    background-color: ${Colors.lightBlack};
    color: ${Colors.white};
    gap: 30px;

    a {
        text-decoration: none;
        color: ${Colors.white};
        transition: all 0.1s linear;
    }

    a:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        a {
            display: none;
        }
        a#logo {
            display: flex;
        }
    }
`

export const MobileNavbarRoot = styled.nav`
    width: 100%;
    display: none;
    height: 200px;
    position: absolute;
    top: 0;
    z-index: 2;
    flex-direction: row;
    align-items: baseline;
    padding-left: 25px;

    @media (max-width: 768px) {
        display: flex;
    }
`

export const NavbarBurger = styled.button<NavbarBurgerMenuProps>`
    position: absolute;
    z-index: 999999;
    top: 20px;
    right: 20px;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    @media (max-width: 768px) {
        display: flex;
    }

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.15rem;
        background: #ffffff;
        border-radius: 10px;
        transition: all 0.2s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${(props) => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${(props) => (props.isOpen ? '0' : '1')};
            transform: ${(props) => (props.isOpen ? 'translateX(20px)' : 'translateX(0)')};
        }

        :nth-child(3) {
            transform: ${(props) => (props.isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`

export const NavbarBurgerMenu = styled.nav<NavbarBurgerMenuProps>`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${Colors.black};
    opacity: 0.95;
    transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    height: 100vh;
    text-align: center;
    top: 0;
    left: 0;
    gap: 20px;
    z-index: 999;
    width: 100%;
    transition: transform 0.5s ease-in-out;

    a {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 20px;
        line-height: 190%;
        text-align: center;
        color: #ffffff;
        text-decoration: none;
        transition: color 0.2s linear;

        &:hover {
            color: ${Colors.golden};
        }
    }
`
