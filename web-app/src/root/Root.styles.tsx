import styled from 'styled-components';

export const Header = styled.header`
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, black 0%, transparent 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, black 0%, transparent 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 );
    /* IE6-9 */
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 40px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    z-index: 5;
`;