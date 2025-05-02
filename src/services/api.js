// frontend/src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const createReservation = async (reservationData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/reservations`, reservationData);
        return response.data;
    } catch (error) {
        console.error('Error creating reservation:', error);
        throw error;
    }
};

export const getReservations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/reservations`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reservations:', error);
        throw error;
    }
};

// frontend/src/services/api.js
export const addToCart = async (cartItem) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/cart`, cartItem);
        return response.data;
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
    }
};

export const getMenuItems = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/menu`);
        return response.data;
    } catch (error) {
        console.error('Error fetching menu:', error);
        throw error;
    }
};