import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import ProfileHead from './ProfileHead.js'
import UserInfo from './UserInfo.js'
import TransactionInfo from './TransactionInfo.js'

function Profile(props) {

  return (
    <View>
           <ProfileHead />
           <UserInfo main="grey" sub="grey" header="IBAN" content="SA34 3456 4556 3464 4566" editIcon={true} />
           <UserInfo main="grey" sub="black" header="Relationship" content="Friend"/>
           <UserInfo main="grey" sub="black" header="Nickname" content="Sar"/>
           <TransactionInfo main="grey" sub="black" header="Purpose of Transaction" content="Bills"/>
           <TransactionInfo main="grey" sub="black" header="Note" content="Thank you!"/>
           <TransactionInfo main="grey" sub="black" bold2={true} SAR={true} header="Transfered Amount" content="250.00"/>
           <TransactionInfo main="grey" sub="black" bold2={true} SAR={true}  header="Fees" content="10.00"/>
           <TransactionInfo main="grey" sub="black" bold2={true} header="VAT" content="5%"/>
           <TransactionInfo main="black" sub="black" bold1={true} bold2={true} SAR={true}  header="Total amount " content="25.00"/>
    </View>
  );
}



export default Profile;