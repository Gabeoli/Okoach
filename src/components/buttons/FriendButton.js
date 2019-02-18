import React from 'react';
import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 130px
  background-color: ${Colors.white};
  flex-direction: row
`;

const RankContainer = styled.View `
    position: absolute;
    left: 10px;
`;

const Ranking = styled.Text `
    font-size: 12px;
    color: ${Colors.black};
    font-family: ${Fonts.Roboto};
    font-weight: 300;
`;

const UserImage = styled.View `
    flex: 2
    align-items: center;
    justify-content: center;
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
    justify-content: center
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
            <RankContainer>
                <Ranking>
                    1.
                </Ranking>
            </RankContainer>
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
