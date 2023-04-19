
import React from 'react';
import {useDispatch,useSelector}from 'react-redux';
import axios from 'axios';

export const setPhotos = (photos) => ({
  type: 'SET_PHOTOS',
  payload: photos,
});

export const fetchPhotos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      const photos = response.data;
      dispatch(setPhotos(photos));
    } catch (error) {
     
    }
  };
};
