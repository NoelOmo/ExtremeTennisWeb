import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const Header = styled.header`
  padding: 0rem;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  padding-top: 1rem;
`;

export const DarkLogoContainer = styled(Link)`
  display: inline-flex;
  margin-left: 40px;

  height: 50px;
  width: 50px;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
`;

export const NavLink = styled.div`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled.div`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled.div`
  cursor: pointer;
  width: ${(props) => (props.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled.div`
  @media only screen and (max-width: 768px) {
    display: block !important;
  }
  padding: 1.25rem 1.25rem;
  display: none;
`;

export const NotHidden = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.h5`
  font-size: 1.37rem;
  margin-top: -0.45rem;
  padding: 0 1.56rem 0 0;
  font-weight: 600;
  border-bottom: 5px solid #111b47;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.1rem;
  color: #000000;
  font-weight: bold;
  font-style: italic;

  transition: color 0.2s ease-in;
  margin: 0.25rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const CustomButtomLinkSmall = styled(NavLink)`
  font-size: 1.1rem;

  color: #000000;
  transition: color 0.2s ease-in;
  margin: 0 2rem 10px 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const WhiteHeaderText = styled(NavLink)`
  font-size: 1.5rem;
  color: #ffffff;
  transition: color 0.2s ease-in;
  margin: auto 2rem;
  text-align; letf;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const WhiteHeaderTextSmall = styled(NavLink)`
  font-size: 1rem;
  
  color: #ffffff;
  transition: color 0.2s ease-in;
  margin: auto 2rem;
  text-align; letf;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Button = styled(NavLink)`
  background: #2e186a;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 0px;
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
`;

export const CustomeHeaderBg = styled(NavLink)`
  font-size: 1rem;

  background-color: green;
  width: 100%;
  text-align: left !important;
  height: 60px;
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
  padding-right: ${(props) => (props.padding ? "10px" : "")};
`;

export const Span = styled.span`
  cursor: pointer;
`;
