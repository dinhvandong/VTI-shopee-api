import axios from 'axios';

// Base URL of the API
const API_BASE_URL = 'http://localhost:8080/api/products';

// Axios instance with default configurations
export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // If your backend requires cookies/authentication

});

export const getAllProducts =  async () => {
    try {
        const response = await apiClient.get('');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Fetch a single product by ID
export const getProductById = async (id) => {
    try {
        const response = await apiClient.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw error;
    }
};

// Create a new product
export const   createProduct = async (product) => {
    try {
        const response = await apiClient.post('', product);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

// Update an existing product by ID
export const updateProduct =  async (id, updatedProduct) => {
    try {
        const response = await apiClient.put(`/${id}`, updatedProduct);
        return response.data;
    } catch (error) {
        console.error(`Error updating product with ID ${id}:`, error);
        throw error;
    }
};

// Delete a product by ID
export const deleteProduct =  async (id) => {
    try {
        const response = await apiClient.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting product with ID ${id}:`, error);
        throw error;
    }
};
