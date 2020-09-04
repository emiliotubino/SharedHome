import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Theme from '../constants/Theme';

const Header = (props) => {
  const { icon, title } = props;
  return (
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <FontAwesomeIcon style={styles.icon} icon={icon} size={64} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: Theme.colors.text.primary,
    fontWeight: 'bold',
  },
  icon: {
    color: Theme.colors.text.primary,
  },
});

export default Header;
