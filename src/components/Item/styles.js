import styled from 'styled-components/native';


export const Container = styled.View`
    display: flex;
    background: #FFF;
    width: 45%;
    height: 200;
    elevation: 3;
    shadow-color: #000;
    shadow-opacity: 0.3;
    shadow-radius: 15;
    border-radius: 5px;
    border-width: 1;
    border-color: #DDD;
    margin: 2.5%;
`;

export const Status = styled.View`
    display: flex;
    position: absolute;
    align-items: center;
    top: -10px;
    width: 100%;
    height: 20px;   
    
`;

export const Donation = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DC143C;
    width: 18px;
    height: 18px;
    border-radius: 60px;
`;

export const Booked = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    background: #DC143C;
    justify-content: center;
    align-items: center;

`;


export const BookedText = styled.Text`
    color: #FFF;
    font-size: 12px;
`;


export const Details = styled.View`
    display: flex;
    background: #FFF;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;
    height: 28%;
`;

export const Title = styled.Text`
    color: #000;
    font-weight: bold;
    font-size: 11px;
`;

export const Info = styled.View`
    display: flex;  
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: row;
    
`;

export const Location = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 5px;
    margin-bottom: 2px;
`;

export const Distance = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 5px;
    margin-bottom: 2px;
`;

export const LocationText = styled.Text`
    color: #333;
    margin-left: 2px;
    font-size: 10px;
`;

export const DistanceText = styled.Text`
    color: #333;
    margin-left: 2px;
    font-size: 10px;
`;