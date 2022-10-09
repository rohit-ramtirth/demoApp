import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListData from '../../utils/fake-data';
import {ListItem} from './components/item';

export interface IListItem {
  id: string | number;
  name: string;
  description: string;
  price: string;
  salePrice: any;
  brand: string;
}

const ListScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={style.scrollViewContainer}>
        {ListData.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListScreen;

const style = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 16,
  },
});
