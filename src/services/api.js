import axios from 'axios';
import { API_CONFIG } from '../constants/api';

const api = axios.create({
  baseURL: API_CONFIG.baseUrl,
});

export const getBrands = async () => {
  try {
    const response = await api.get(API_CONFIG.endpoints.brands);
    return response.data;
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;
  }
};

export const getBrandById = async (id) => {
  try {
    const response = await api.get(`${API_CONFIG.endpoints.brands}?id=${id}`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching brand:', error);
    throw error;
  }
};
