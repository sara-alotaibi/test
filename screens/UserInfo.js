import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const IMG_URI =
  'https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg';

function UserInfo(props) {
const {main,sub,header,content} = props;

/// Just some styles
const styles = StyleSheet.create({
  screen: {
  //  flex:1,
    marginHorizontal:15,
    marginVertical:15,
  },
  text: {
  color: 'black',
  },
   baseText: {
      color: main,
      fontSize: 17,
    },
    innerText: {
      color: sub,
      fontSize: 17,
    }
});
  return (
    <View style={styles.screen}>
          <Text style={styles.baseText}>
            {header}
          </Text>
          <View style={{     justifyContent: 'space-between',
                             flexDirection: 'row', }}>
          <Text style={styles.innerText}> {content} </Text>
          { props.editIcon?
           <FontAwesomeIcon style={{color:'grey'}} icon={ faEdit } /> : <Text> </Text>
           }
          </View>

          <View
            style={{
              borderBottomColor: '#e0e0e0',
              borderBottomWidth: 1,
              top:5,
            }}
          />
    </View>
  );
}



export default UserInfo;