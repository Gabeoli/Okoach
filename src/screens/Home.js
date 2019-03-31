import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {RedGradientButton} from '../components/buttons/RedGradientButton';
import {HamburgerButton} from '../components/buttons/HamburgerButton';
import {CalendarButton} from '../components/buttons/CalendarButton';
import {CalendarHolder} from '../components/holders/CalendarHolder';
import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import StartupLogo from '../components/text/StartupLogo';
import {HomeExerciseHolder} from '../components/holders/HomeExerciseHolder';
const date = new Date();

type Props = {};

class Home extends Component<Props> {

  state = {
    modalVisible: false,
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View 
            style={styles.hamburger}
          >
            <HamburgerButton
              onPress ={() => this.props.navigation.openDrawer()}
            />
          </View>
          <View style={styles.points}>
            <Text
              style={styles.ap1}
            >
              000
            </Text>
            <Text
              style={styles.ap2}
            >
              AP
            </Text>
          </View>
        </View>

        <Modal
          animationType="slide"
          presentationStyle="pageSheet"
          style={styles.modal}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View>
            <View style={{marginTop: 35}}>
              <CalendarHolder />               
            </View>
            <View style={styles.closeBtn}> 
            <RedGradientButton
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
              Close
            </RedGradientButton>
            </View>
          </View>
        </Modal>
        <View style={styles.calendarHolder}>
            <CalendarButton 
              onPress ={() => {
                this.setModalVisible(true)
              }}
            />
        </View>
        <View style={styles.body}>
          <HomeExerciseHolder
              Title={'Snatch'}
              Sets={'3'}
              Reps={'2'}
              Weight={'85%'}
            />
            <HomeExerciseHolder
              Title={'Squat'}
              Sets={'5'}
              Reps={'5'}
              Weight={'60%'}
            />
          <Text style={styles.bodyText}>
            Looks like you’re not following a programme, Have a browse.
          </Text>
          <RedGradientButton
            onPress={() => this.props.navigation.navigate('SavedProgrammes')}
          >
            Programmes
          </RedGradientButton>

        </View>        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  calendarHolder: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: Fonts.Roboto,
    color: Colors.black
  },
  hamburger: {
    padding: 10
  },
  points: {
    position: 'absolute',
    right: 10,
  }, 
  ap1: {
    fontFamily: Fonts.UniversalKnowledge,
    paddingTop: 10,
    fontSize: 20,
    color: '#6C6C6C'
  },
  ap2: {
    fontFamily: Fonts.UniversalKnowledge,
    paddingTop:5,
    fontSize: 20,
    color: '#EF7F70',
    textAlign: 'right'
  },
  modal: {
    backgroundColor: 'white',
    margin: 15, 
    alignItems: undefined,
    justifyContent: undefined,
  },
  closeBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default Home;