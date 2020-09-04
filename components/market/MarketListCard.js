import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Theme from '../../constants/Theme';

const marketList = [
  {
    id: 1,
    name: 'Água',
    qnt: '2',
    qntType: 'l',
    addBy: 'João',
    status: false,
  },
  {
    id: 2,
    name: 'Suco',
    qnt: '1',
    qntType: 'l',
    addBy: 'Paula',
    status: false,
  },
  {
    id: 3,
    name: 'Arroz',
    qnt: '2',
    qntType: 'Kg',
    addBy: 'Maria',
    status: false,
  },
  {
    id: 4,
    name: 'Feijão',
    qnt: '1',
    qntType: 'Kg',
    addBy: 'Maria',
    status: true,
  },
];

const showMarketItemList = (items) => {
  if (!items || items.length === 0) {
    return <View />;
  }

  return items.map((item) => {
    const checkboxIcon = item.status ? faCheckSquare : faSquare;
    return (
      <View key={item.id} style={styles.item}>
        <FontAwesomeIcon style={styles.checkbox} icon={checkboxIcon} size={18} />
        <Text>{item.name}</Text>
      </View>
    );
  });
};

const MarketListCard = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => {}} style={styles.button} style={styles.container}>
        <View style={styles.header}>
          <FontAwesomeIcon style={styles.icon} icon={faShoppingCart} size={20} />
          <Text style={styles.title}>Lista Mercado</Text>
        </View>
        <View style={styles.info}>{showMarketItemList(marketList)}</View>
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    flexWrap: 'wrap',
  },
  item: {
    width: '50%',
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
  },
  checkbox: {
    color: Theme.colors.items.primary,
    marginRight: 5,
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

export default MarketListCard;
