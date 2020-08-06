import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const BackgroundDefault = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex:1;
    padding: 50px 5%;
 `;


function PageDefault({ children }: any) {
    return (
        <>
            <Menu />
            <BackgroundDefault>
                {children}
            </BackgroundDefault>
            <Footer />
        </>
    );
}

export default PageDefault;