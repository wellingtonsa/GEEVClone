import styled from 'styled-components/native';


export const Header = styled.View`
    display: flex;
    width: 100%;
    height: 50px;
    background: #FFF;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Group = styled.View`
    display: flex;
    height: 40px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const PremiumButton = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-radius: 60px;
    background: #777;
    margin-left: 10px;
    margin-right: 10px;
`;

export const MyBananasButton = styled.TouchableOpacity`
    width: 40px;
    height: 25px;
    border-radius: 60px;
    border: 1px solid #DDD;
    justify-content: center;
    align-items: center;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-radius: 60px;
`;


export const MapButton = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-radius: 60px;
    margin-left: 10px;
    margin-right: 10px;
`;