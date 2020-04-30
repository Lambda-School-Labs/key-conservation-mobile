import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
} from 'react-native';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import SvgUri from 'react-native-svg-uri';
import { Badge } from 'react-native-elements';
import PlusSign from '../../assets/jsicons/Comments/PlusSign';

const SmileSelector = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [emoji, setEmoji] = useState([]);

  const setEmojis = (reaction) => {
    // check if the pressed emoji exists in the array of emojis for this post
    const existing = emoji.filter((e) => e.emoji === reaction);

    // if the emoji already exists, increment it's count property
    if (existing.length) {
      const updated = emoji.map((e) => {
        if (e.emoji === reaction) {
          return { ...e, count: e.count + 1 };
        } else return e;
      });
      setEmoji(updated);
    } else {
      // otherwise add it to the array and initialize it's count to 1
      setEmoji([...emoji, { emoji: reaction, count: 1 }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayedEmojiWrapper}>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => {
            setIsVisible(!isVisible);
          }}
        >
          {/* <SvgUri
            fill='#323339'
            width='30'
            height='30'
            source={require('../../assets/icons/plus-solid.svg')}
          /> */}
          <PlusSign />
        </TouchableOpacity>

        <View style={styles.display}>
          {emoji.map((e, i) => {
            if (i < 7) {
              return (
                <View key={i} style={styles.emojiContainer}>
                  <Text
                    style={{ fontSize: 20, backgroundColor: 'transparent' }}
                  >
                    {e.emoji}
                  </Text>

                  {e.count > 1 && (
                    <Badge
                      textStyle={{
                        color: 'black',
                        fontSize: 14,
                      }}
                      badgeStyle={{
                        backgroundColor: '#D7FF43',
                      }}
                      containerStyle={{
                        position: 'absolute',
                        top: -8,
                        right: -8,
                      }}
                      value={e.count}
                    />
                  )}
                </View>
              );
            }
          })}
        </View>
      </View>

      <View>
        {isVisible && (
          <EmojiSelector
            category={Categories.emotion}
            onEmojiSelected={(e) => setEmojis(e)}
            placeholder="Search..."
            showHistory={true}
            columns={8}
            theme="#00FF9D"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width - 30,
  },
  display: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  displayedEmojiWrapper: {
    flexDirection: 'row',
  },
  emojiContainer: {
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    margin: 1,
    marginTop: 5,
    padding: 1,
  },

  plusButton: {
    marginLeft: 7,
    marginTop: 3,
    backgroundColor: '#f5f5f5',
    paddingLeft: 5,
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 5,
    paddingRight: 5,
  },
});

export default SmileSelector;
