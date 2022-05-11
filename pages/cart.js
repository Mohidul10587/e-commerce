
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


export default function SomePage() {
  const router = useRouter();
  const productObj = JSON.parse(localStorage.getItem('cart'))

  // const cart_items = JSON.parse(localStorage.getItem('cart-items'))

  // const new_cart_item = productObj;

  // const new_cart = [...cart_items, new_cart_item]

  // JSON.stringify(localStorage.setItem('cart-items', new_cart))




  return (
    <div>


      <h1 className="text-center text-3xl">Cart</h1>
      <h1 className="text-center text-3xl">-------------</h1>

    {
      productObj.map(item => {
        return (
          <div className="flex justify-evenly items-center">
            <p><Image src={item.img} width='70' height='70' alt='This is a img'></Image></p>
            <p className="text-2xl font-bold">{item.name}</p>
            <p className="text-2xl font-bold">{item.price}</p>
          </div>
        )
      })
    }
      <div className="text-center mt-24">
        <button className='border border-black px-2 rounded-sm '>
          <Link href='/'>
            <a href="">Continue Shopping</a>
          </Link>
        </button>
      </div>

    </div>
  );
}

