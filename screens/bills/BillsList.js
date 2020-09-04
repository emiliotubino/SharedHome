import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileInvoiceDollar, faCog, faUser } from '@fortawesome/free-solid-svg-icons';

import Theme from '../../constants/Theme';
import Header from '../../components/Header';

const BillsList = (props) => {
  return (
    <View style={styles.container}>
      <Header icon={faFileInvoiceDollar} title="Contas" />
      <View style={styles.body} />
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

export default BillsList;
