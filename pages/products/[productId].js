import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const Product = () => {

  const [products, setProducts] = useState([])
  const router = useRouter()
  const { productId } = router.query

  useEffect(() => {
    fetch('../fakeData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  
  if (products.length == 0) {
    return
  }

  const detailsForCart = {
    name: products[productId].name,
    price: products[productId].price,
    img: products[productId].img
    
  }
  
  const handleAddingToCart = (product) => {
    const prevCart = localStorage.getItem('cart') != null ? JSON.parse(localstorage.getItem('cart')) : []
    const newCart = prevCart.push(product)
    localstorage.setItem('cart', JSON.stringify(newCart))
    router.push('/cart')
  }

  return (
    <div className='mx-5 text-center'>
      <Image src={products[productId].img} width={400} height={400} alt='this is a img' ></Image>
      <p>{products[productId].name}</p>
      <p>{products[productId].price}</p>
      <p>{products[productId].details}</p>
      <button className='border border-black px-2 rounded-sm mr-2' onClick={() => handleAddingToCart(detailsForCart)}>Add to cart</button>
      <button className='border border-black px-2 rounded-sm'><Link href='/'><a href="">Continue Shopping</a></Link></button>
    </div>
  )
}

export default Product
