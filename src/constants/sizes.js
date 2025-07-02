// Định nghĩa kích thước font chữ, khoảng cách margin và padding cho toàn bộ ứng dụng
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SIZES = {
  // Kích thước font chữ
  largeTitle: 24,
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  body1: 16,
  body2: 14,
  body3: 12,
  small: 10,
  
  // Kích thước màn hình
  width,
  height,
  
  // Các giá trị margin, padding
  padding: 16,
  margin: 16,
  radius: 8,
  
  // Các giá trị tùy chỉnh khác
  cardRadius: 12,
  buttonHeight: 50,
};

export default SIZES;
