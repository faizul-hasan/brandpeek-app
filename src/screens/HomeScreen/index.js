import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBrands } from '../../services/api';
import { COLORS } from '../../constants/colors';
import { styles } from './styles';

interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const HomeScreen = ({ navigation }) => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  const renderBrandItem = ({ item }: { item: Brand }) => (
    <TouchableOpacity
      style={styles.brandItem}
      onPress={() => navigation.navigate('BrandDetail', { brandId: item.id })}>
      <Image source={{ uri: item.logo }} style={styles.brandLogo} />
      <View style={styles.brandInfo}>
        <Text style={styles.brandName}>{item.name}</Text>
        <Text style={styles.brandDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]}
      style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Top Brands Today</Text>

        {loading ? (
          <Text style={styles.loadingText}>Loading brands...</Text>
        ) : (
          <FlatList
            data={brands}
            renderItem={renderBrandItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
