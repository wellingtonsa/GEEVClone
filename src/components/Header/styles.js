import styled from 'styled-components/native';

export const Container = styled.View`
    display:flex;
    justify-content: center;
    background: #FFF;
    width: 100%;
    height: 50px;
    elevation: ${props => props.shadow?3:0};
    shadow-color: ${props => props.shadow?'#000':'#FFFFFF00'};
    shadow-opacity: ${props => props.shadow?0.1:0};
    shadow-radius: ${props => props.shadow?15:0};
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #000;
    margin-left: 10px;
`;