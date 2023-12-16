import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectAllProducts } from '../../redux/menuSlice'
import { styled } from 'styled-components'
import {Tabs} from 'antd'
import ProductDetailCard from '../../components/ProductDetailCard'
import Tab from '../../components/Tabs'

function Menu() {
  const MenuStyled = styled.div`
    color:white;
    h2{
      color:white;
    }
  `
  const MenuWrapper = styled.div`
    background:white;
    .contentWrapper{
      display:flex;
    }
  `
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const [activeTabIndex,setActiveTabIndex]=useState(0);
  const [activeTab,setActiveTab]=useState("")
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  const addProduct = (product)=>{
    console.log(product);
  }
  const keys = (newActiveTab)=>{
    setActiveTab(newActiveTab);
    let newIndex=0
    let categories = products.products.map((product)=>product.name.name);
    let index = categories.findIndex(category=>newActiveTab===category);
    if(index>-1){
      setActiveTabIndex(index);
    }else{
      setActiveTabIndex(0);
    }
    ++newIndex;
  }
  return (
    <MenuStyled>
      <h2>Menu</h2>
      {
        products.status !== "fulfilled" ?
        <div>Loading....</div>:
        <div className='menuWrapper'>
          {
            products.products && 
            <Tab
              list={products.products.map((product)=>product.name.name)}
              activeTab={activeTab}
              onTabSwitch={keys}/>
          }
          <div className='contentWrapper'>
            {
              products.products && products.products[activeTab].product.map((product,index)=>{
                return(
                  <ProductDetailCard key={index} product={product} onAddProduct={addProduct}/>
                )
              })
            }
          </div>
        </div>
      }
    </MenuStyled>
  )
}

export default Menu
