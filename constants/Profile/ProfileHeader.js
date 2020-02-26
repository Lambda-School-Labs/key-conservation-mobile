import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
    paddingBottom: 30,
    flexWrap: 'wrap'
  },
  avatarContainer: {
    width: '30%',
    flex: 0,
    alignItems: 'center'
  },
  bioContainer: {
    marginTop: 25,
    marginBottom: 25,
    width: '80%'
  },
  socialContainer: {
    flexDirection: 'row',
    width: 175,
    marginTop: 10,
    marginLeft: 3,
    justifyContent: 'flex-start'
  },
  socialIcon: {
    paddingRight: 12,
    marginRight: 4
  },
  bio: {
    color: 'white',
    fontFamily: 'Lato'
  },
  org: {
    lineHeight: 22,
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: 'white'
  },
  outline: {
    fontSize: 18,
    fontFamily: 'Lato',
    color: 'white'
  },
  locationText: {
    flexDirection: 'row',
    lineHeight: 19,
    fontSize: 16,
    fontFamily: 'Lato',
    color: 'white'
  },
  userText: {
    lineHeight: 19,
    fontSize: 16,
    fontFamily: 'Lato',
    color: 'white'
  },
  websiteText: {
    lineHeight: 19,
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: 'white'
  },
  textContainer: {
    flex: 1,
    color: 'white'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#f5f5f5',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2
  },
  TouchableOpacity: {
    flex: 1
  },
  ButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#eee',
    marginTop: 12,
    marginBottom: 12,
    flex: 1
  },

  CampaignButton: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold'
  },
  DetailButton: {
    fontSize: 18,
    color: '#C4C4C4',
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold'
  }
});

export default styles;
