import styled from 'styled-components';

import { fontFamily } from '../../GlobalStyles/Colors';

export const OverviewStyled = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: justify;
    flex-wrap: wrap;
    margin-bottom: 40px;
`

export const SubTitle = styled.h2`
    font-family: ${fontFamily};
    color: ${(props) => props.theme.primaryText};
    transition: 300ms;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 90%;
`