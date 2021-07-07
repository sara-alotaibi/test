import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

function TransactionInfo(props) {
const {main,sub,header,content} = props;

/// Just some styles
const styles = StyleSheet.create({
  screen: {
  //  flex:1,
    marginHorizontal:15,
    marginVertical:15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
  color: 'black',
  },
   baseText: {
      color: main,
      fontSize: 17,
      fontWeight: props.bold1? 'bold':'normal',
    },
    innerText: {
      color: sub,
      fontSize: 17,
      fontWeight: props.bold2? 'bold':'normal',
    }
});
  return (
    <View style={styles.screen}>
          <Text style={styles.baseText}>
            {header}
          </Text>
          <Text style={styles.innerText}> {content}
          <Text style={{color:'grey', fontWeight:'normal'}}>
          { props.SAR? ' SAR' : ''}
          </Text>
          </Text>
    </View>
  );
}



export default TransactionInfo;