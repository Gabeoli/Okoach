import React from 'react';
import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: ${Colors.white};
  flex-direction: row
  flex: 1
`;

const UserImage = styled.View `
    flex: 1
`;

const Ranking = styled.Text `
    font-size: 12px;
    color: ${Colors.black};
    font-family: ${Fonts.Roboto};
    font-weight: 300;
`;

const ImageHolder = styled.View `
    width: 100px;
    height: 100px;
    border-radius: 100;
    background: ${Colors.placeholdergrey};

`;

const UserType = styled.Text `
    font-size: 12px;
    font-family: ${Fonts.Roboto};
    color: ${Colors.black};
    text-align: center;
`;

const UserText = styled.View`
    flex: 2
`;

const Username = styled.Text`
    font-size: 18px;
    color: ${Colors.black};
    font-family: ${Fonts.UniversalKnowledge};
    padding-top: 10px;
    text-transform: uppercase;
`;

const Ap = styled.Text`
    font-size: 18px;
    color: ${Colors.red};
    font-family: ${Fonts.UniversalKnowledge};
    padding-top: 10px;
    text-transform: uppercase;
`;

const BackBtn = styled.View `
    flex: 1
`;

export const FriendButton = (props) => {
  return (
    <ButtonContainer>
        <UserImage>
            <Ranking>
                1.
            </Ranking>
            <ImageHolder>

            </ImageHolder>
            <UserType>
                Athlete
            </UserType>
        </UserImage>
        <UserText>
            <Username>User1234</Username>
            <Ap>100AP</Ap>
        </UserText>
        <BackBtn>

        </BackBtn>
    </ButtonContainer>
  );
};
