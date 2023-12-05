import firestore from '@react-native-firebase/firestore';

export const getUsersStore = firestore().collection('users');

export const getOrderStore = firestore().collection('orders');

export const getProductStore = firestore().collection('products');

export const getProductRecordStore = firestore().collection('productRecords');
