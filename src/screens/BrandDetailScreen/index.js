import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getBrandById } from "../../services/api";
import { COLORS } from "../../constants/colors";
import { styles } from "./styles";
import { goBack } from "../../navigation/RootNavigation";
import { CountInt, isIOS } from "../../constants/utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Brand {
  id: number;
  name: string;
  logo: string;
  description: string;
  website?: string;
  founded?: string;
  headquarters?: string;
  employees?: string;
}

const BrandDetailScreen = ({ route }) => {
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const data: Brand = await getBrandById(route.params.brandId);
        setBrand(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrand();
  }, [route.params.brandId]);

  if (loading) {
    return (
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.loaderContainer}
      >
        <Text style={styles.loadingText}>Loading brand details...</Text>
      </LinearGradient>
    );
  }

  if (!brand) {
    return (
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.loaderContainer}
      >
        <Text style={styles.loadingText}>Brand not found</Text>
      </LinearGradient>
    );
  }

  const openLink = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      style={styles.container}
    >
      <SafeAreaView
        style={[
          styles.container,
          { paddingTop: isIOS ? CountInt.Count0 : insets.top },
        ]}
      >
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <Image source={{ uri: brand.logo }} style={styles.brandLogo} />
          <Text style={styles.brandName}>{brand.name}</Text>
          <Text style={styles.brandDescription}>{brand.description}</Text>

          <View style={styles.detailsContainer}>
            {brand.founded && (
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Founded: </Text>
                <Text style={styles.detailValue}>{brand.founded}</Text>
              </View>
            )}

            {brand.headquarters && (
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Headquarters: </Text>
                <Text style={styles.detailValue}>{brand.headquarters}</Text>
              </View>
            )}

            {brand.employees && (
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Employees: </Text>
                <Text style={styles.detailValue}>{brand.employees}</Text>
              </View>
            )}

            {brand.website && (
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Website: </Text>
                <Text
                  style={[styles.detailValue, styles.website]}
                  onPress={() => openLink(brand.website)}
                >
                  {brand.website}
                </Text>
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BrandDetailScreen;
