import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadAllUser from '../component/user/ReadAllUser'
import CreateUser from '../component/user/CreateUser'
import UserDetails from '../component/user/UserDetails'
import UpdateUser from '../component/user/UpdateUser'
import ReadAllProduct from '../component/product/ReadAllProduct'
import CreateProduct from '../component/product/CreateProduct'
import ProductDetails from '../component/product/ProductDetails'
import UpdateProduct from '../component/product/UpdateProduct'
import ReadAllReview from '../component/review/ReadAllReview'
import CreateReview from '../component/review/CreateReview'
import ReviewDetails from '../component/review/ReviewDetails'
import UpdateReview from '../component/review/UpdateReview'
import ProductForm from '../component/product/ProductForm'

const DwRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='user'>
                <Route index element={<ReadAllUser/>}></Route>
                <Route path='create' element={<CreateUser/>}></Route>
                <Route path=':id' element={<UserDetails/>}></Route>
                <Route path='update/:id' element={<UpdateUser/>}></Route>
                
            </Route>
            <Route path='product'>
                <Route index element={<ReadAllProduct/>}></Route>
                <Route path='create' element={<ProductForm type="create"/>}></Route>
                <Route path=':id' element={<ProductDetails/>}></Route>
                <Route path='update/:id' element={<ProductForm type="update"/>}></Route>
            </Route>
            <Route path='review'>
                <Route index element={<ReadAllReview/>}></Route>
                <Route path='create' element={<CreateReview/>}></Route>
                <Route path=':id' element={<ReviewDetails/>}></Route>
                <Route path='update/:id' element={<UpdateReview/>}></Route>
            </Route>
        </Routes>
    </div>
  )
}

export default DwRoutes