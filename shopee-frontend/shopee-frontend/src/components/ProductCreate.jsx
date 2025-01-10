import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, message } from 'antd';
import { createProduct } from '../apis/api_product';

const ProductCreate = () => {
    const [form] = Form.useForm(); // Access form instance for manual control
    const [loading, setLoading] = useState(false);

    const onValuesChange = (changedValues, allValues) => {
        console.log('Changed:', changedValues);
        console.log('All values:', allValues);
    };

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await createProduct(values);
            message.success('Product created successfully!');
        } catch (error) {
            message.error('Failed to create product. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto my-8 p-4 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">Create Product</h1>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onValuesChange={onValuesChange} // Hook for detecting changes
                autoComplete="off"
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
                        Create Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ProductCreate;
