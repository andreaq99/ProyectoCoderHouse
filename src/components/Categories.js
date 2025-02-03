import { StyleSheet, FlatList, View, Text } from 'react-native';
import CardItemCategory from './CardItemCategory';
import { useGetCategoriesQuery } from '../services/shop';
import LoadingSpinner from './LoadingSpinner';

const Categories = () => {
  const { data: categories, isError, error, isLoading } = useGetCategoriesQuery();

  if (isError) return <View><Text>{error.message}</Text></View>;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <FlatList
      data={categories}
      keyExtractor={item => item}
      renderItem={({ item }) => <CardItemCategory item={item} />}
      contentContainerStyle={styles.containerCard}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  containerCard: {
    paddingBottom: 60
  }
});
