import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default {
  touchableButton: {
    paddingTop: 25,
    paddingBottom: 25,
    width: '100%',
    height: 50,
    alignItems: 'center'
  },
  touchableView: {
    backgroundColor: '#00FF9D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 48,
    width: 243
  },
  touchableText: {
    fontFamily: 'Lato-Bold',
    color: '#323338',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 16
  },
  donateButton: {
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  supportMissionText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    paddingLeft: 10
  },
  campaignMissionText: {
    fontFamily: 'Lato',
    fontSize: 16,
    lineHeight: 19,
    paddingTop: 10,
    textAlign: 'center'
  },
  commentsView: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 14,
    fontFamily: 'Lato',
    marginTop: 20,
    padding: 19,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  campaignMission: {
    marginLeft: 15,
    marginRight: 15,
    width: deviceWidth / 2,
    fontFamily: 'Lato',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    marginTop: 20,
    paddingTop: 19
  },
  campaignImageContainer: {
    /* Must have a Width && Height or it won't display anything! */
    // resizeMode: 'contain',
    // height: deviceWidth <= 415 ? deviceWidth : 415
    flex: 1,
    height: deviceWidth,
    width: deviceWidth
  },
  campaignDescriptionContainer: {
    marginLeft: 15,
    padding: 15,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  campaignDescriptionName: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    lineHeight: 22,
    paddingBottom: 10
  },
  campaignDescription: {
    fontFamily: 'Lato',
    fontSize: 16,
    lineHeight: 19
  },
  listName: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold'
  },
  donateView: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  whiteSpace: {
    height: 40
  },
  icon: {
    fontSize: 28,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  bookmarks: {
    marginHorizontal: 15
  },
  bookmarkOutline: {
    fontSize: 28,
    color: 'black'
  },
  bookmarkFill: {
    fontSize: 30,
    color: '#00FF9D'
  },
  timeText: {
    color: '#929292',
    fontSize: 10,
    marginLeft: 0,
    marginRight: 15,
    marginTop: 15
  },
  feedContainer: {
    marginBottom: 30
  }
};
