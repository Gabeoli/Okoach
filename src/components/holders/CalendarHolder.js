import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, Modal, View} from 'react-native';
import styled from 'styled-components/native';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const Container = styled.View`
`;

const Label = styled.Text`
`;


export const CalendarHolder = (props) => {  
  return (
    <Container>
      <CalendarList
        horizontal={true}
      />
    </Container>
  );
};
      
