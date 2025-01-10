import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, message } from 'antd';
import { getProductById, updateProduct } from '../apis/api_product'; // Replace with your API methods

const ProductUpdate = ({ productId, onUpdateSuccess }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    // Fetch product data when the component mounts or productId changes
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const product = await getProductById(productId); // Replace with actual API call
                form.setFieldsValue(product); // Pre-fill form with product data
            } catch (error) {
                console.error('Error fetching product:', error);
                message.error('Failed to fetch product data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId, form]);

    // Handle form submission
    const onFinish = async (values) => {
        setLoading(true);
        try {
            await updateProduct(productId, values); // Replace with actual API call
            message.success('Product updated successfully!');
            if (onUpdateSuccess) onUpdateSuccess(); // Callback after successful update
        } catch (error) {
            console.error('Error updating product:', error);
            message.error('Failed to update product. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Handle form submission failure
    const onFinishFailed = (errorInfo) => {
        console.error('Failed:', errorInfo);
        message.error('Please check the form and try again.');
    };

    return (
        <div className="container mx-auto my-8 p-4 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">Update Product</h1>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{}} // Ensure the form has an empty default state
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input the product name!' }]}
                >
                    <Input placeholder="Enter product name" />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input the product description!' }]}
                >
                    <Input.TextArea placeholder="Enter product description" rows={4} />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input the product price!' }]}
                >
                    <InputNumber
                        placeholder="Enter product price"
                        min={0}
                        formatter={(value) => `$ ${value}`}
                        className="w-full"
                    />
                </Form.Item>

                <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[{ required: true, message: 'Please input the product quantity!' }]}
                >
                    <InputNumber
                        placeholder="Enter product quantity"
                        min={0}
                        className="w-full"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        className="bg-blue-500 hover:bg-blue-600"
                    >
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ProductUpdate;
