import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import styled from 'styled-components';

// Definindo os estilos usando styled-components
const FooterWrapper = styled.footer`
    background-color: #4CAF50;
    color: #fff;
    padding: 2em 1em;
    text-align: center;
`;

const SocialList = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0; 
    padding: 0
`;

const SocialListItem = styled.li`
    margin: 0 1em;
`;

const Icon = styled.span`
    font-size: 1.5em;
    cursor: pointer;
    &:hover {
        color: #ffbb33;
    }
`;

const CopyRight = styled.p`
    margin-top: 1em;
    span {
        font-weight: bold;
        color: #ffffff;
    }
`;

function Footer() {
    return (
        <FooterWrapper>
            <SocialList>
                <SocialListItem>
                    <Icon as={FaInstagram} />
                </SocialListItem>
                <SocialListItem>
                    <Icon as={FaLinkedin} />
                </SocialListItem>
                <SocialListItem>
                    <Icon as={FaGithub} />
                </SocialListItem>
                <SocialListItem>
                    <Icon as={FaFacebook} />
                </SocialListItem>
            </SocialList>
            <CopyRight>
                <span>HYDROWEB</span> &copy; 2024
            </CopyRight>
        </FooterWrapper>
    );
}

export default Footer;
