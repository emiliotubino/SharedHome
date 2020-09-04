import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCog, faUser } from '@fortawesome/free-solid-svg-icons';

import Theme from '../../constants/Theme';
import BillsTotalCard from '../../components/bills/BillsTotalCard';
import MarketListCard from '../../components/market/MarketListCard';
import Header from '../../components/Header';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Header icon={faHome} title="Shared Home" />
      <View style={styles.body}>
        <TouchableOpacity onPress={() => props.navigation.navigate('BillsList')}>
          <BillsTotalCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('MarketList')}>
          <MarketListCard />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('')}>
          <FontAwesomeIcon style={styles.icon} icon={faUser} size={42} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('')}>
          <FontAwesomeIcon style={styles.icon} icon={faCog} size={42} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: '',
  };
};

const styles = StyleSheet.create({
  container: {
    ...Theme.container,
  },
  icon: {
    color: Theme.colors.text.primary,
  },
  footer: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default Home;
