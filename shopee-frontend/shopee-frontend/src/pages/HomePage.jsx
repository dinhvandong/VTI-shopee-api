import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const gotoProductList =()=>{
        navigate('/product/findAll')
    }

    const gotoProducCreate =()=>{
        navigate('/product/create')
    }


    const gotoProductUpdate =()=>{
        navigate('/product/update')
    }

    return (
        <div className='w-full flex p-[100px] flex-col h-screen'>

            <div>
                <button onClick={gotoProductList} className='mt-5 px-5 py-2 bg-green-500' >
                    Product List
                </button>

                <button onClick={gotoProducCreate} className='mt-5 px-5 py-2 bg-yellow-500' >
                    Product Create
                </button>

                <button onClick={gotoProductUpdate} className='mt-5 px-5 py-2 bg-red-500'  >
                    Product Update
                </button>
            </div>

        </div>
    )
}

export default HomePage