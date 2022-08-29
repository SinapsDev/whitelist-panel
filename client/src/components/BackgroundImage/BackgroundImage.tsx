import styled from 'styled-components';

type IProps = {
    backgroundImage: string;
}

export const BackgroundImage = styled.img<IProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${props => props.backgroundImage ? props.backgroundImage : 'none'});
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-filter: blur(3.5px);
    z-index: -1;
`