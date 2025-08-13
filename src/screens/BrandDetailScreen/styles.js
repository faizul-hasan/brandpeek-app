import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  brandLogo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  brandDescription: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  detailValue: {
    flex: 1,
    fontSize: 16,
    color: COLORS.white,
  },
  website: {
    color: COLORS.lightGray,
    textDecorationLine: 'underline',
  },
  followButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  followButtonText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  backButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: 'flex-start'
  },
  backButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});