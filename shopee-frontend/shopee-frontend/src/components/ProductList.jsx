import React, { useEffect, useState } from 'react';
import { Table, Spin, Button, Modal, message } from 'antd';
import { getAllProducts, deleteProduct } from '../apis/api_product';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    // Fetch products on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Navigate to edit page
    const handleEdit = (record) => {
        navigate(`/product/update/${record.id}`);
    };

    // Show delete confirmation modal
    const showDeleteModal = (record) => {
        setSelectedProduct(record);
        setIsModalVisible(true);
    };

    // Handle delete confirmation
    const handleConfirmDelete = async () => {
        try {
            await deleteProduct(selectedProduct.id); // Replace with your delete API
            message.success('Product deleted successfully!');
            setProducts(products.filter((product) => product.id !== selectedProduct.id));
        } catch (error) {
            console.error('Error deleting product:', error);
            message.error('Failed to delete product. Please try again.');
        } finally {
            setIsModalVisible(false);
            setSelectedProduct(null);
        }
    };

    // Cancel delete action
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedProduct(null);
    };

    // Define columns for the Ant Design Table
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price.toFixed(2)}`, // Format price
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <div className="flex gap-2">
                    <Button
                        type="primary"
                        onClick={() => handleEdit(record)}
                        className="bg-blue-500 hover:bg-blue-600"
                    >
                        Edit
                    </Button>
                    <Button
                        type="danger"
                        onClick={() => showDeleteModal(record)}
                        className="bg-red-500 hover:bg-red-600"
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="container mx-auto my-8 p-4 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">Product List</h1>
            {loading ? (
                <div className="flex justify-center items-center">
                    <Spin size="large" />
                </div>
            ) : (
                <Table
                    dataSource={products}
                    columns={columns}
                    rowKey={(record) => record.id} // Use id as the unique key
                    className="custom-ant-table"
                />
            )}
            <Modal
                title="Confirm Delete"
                visible={isModalVisible}
                onOk={handleConfirmDelete}
                onCancel={handleCancel}
                okText="Delete"
                okButtonProps={{ danger: true }}
                cancelText="Cancel"
            >
                <p>Are you sure you want to delete this product?</p>
                <p><strong>{selectedProduct?.name}</strong></p>
            </Modal>
        </div>
    );
};

export default ProductList;
