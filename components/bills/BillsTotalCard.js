import React from 'react';
import { View, Text, StyleSheet, _Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileInvoiceDollar, faUser } from '@fortawesome/free-solid-svg-icons';
import Theme from '../../constants/Theme';

const BillsTotalCard = (props) => {
  return (
    <View style={styles.button} style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon style={styles.icon} icon={faFileInvoiceDollar} size={20} />
        <Text style={styles.title}>Contas</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.subTotal}>R$ 1.200,00</Text>
        <View style={styles.totalInfo}>
          <Text style={styles.total}>R$ 1.200,00 / 3</Text>
          <FontAwesomeIcon style={styles.totalIcon} icon={faUser} size={12} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Theme.itemCards.cardContainer,
    justifyContent: 'space-between',
    backgroundColor: Theme.colors.items.primary,
    borderRadius: 10,
  },
  content: {
    padding: 15,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 4,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    padding: 15,
    backgroundColor: Theme.colors.items.primary,
  },
  title: {
    paddingLeft: 10,
    ...Theme.headerCard.fontCardTitle,
  },
  icon: {
    color: Theme.colors.text.primary,
  },
  info: {
    ...Theme.infoCard.cardContainer,
    alignItems: 'flex-end',
    backgroundColor: Theme.colors.items.secondary,
  },
  subTotal: {
    color: Theme.colors.text.secondary,
    fontSize: 24,
    fontWeight: '500',
  },
  total: {
    color: Theme.colors.text.secondary,
    fontSize: 15,
    fontWeight: '500',
  },
  totalInfo: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalIcon: {
    marginLeft: 5,
    color: Theme.colors.text.secondary,
  },
});

export default BillsTotalCard;
