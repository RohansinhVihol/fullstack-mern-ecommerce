import React, { useState } from 'react'
import { useShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'

const Collection = () => {

  const {products}  = useShopContext();
  const [shopFilter , setShopFilter] = useState(false)

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mt-2 border-t border-gray-300'>

      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShopFilter(!shopFilter)}className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${shopFilter ? 'rotate-90' :' '}`}src={assets.dropdown_icon} alt="" />
        </p>
         {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${shopFilter ? ' ': 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 '>
              <input  className='w-3'type="checkbox" value={'Men'} /> Men
            </p>
            <p className='flex gap-2'>
              <input  className='w-3'type="checkbox" value={'Women'} /> Women
            </p>
            <p className='flex gap-2'>
              <input  className='w-3'type="checkbox" value={'Kids'} /> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
           <div className={`border border-gray-300 pl-5 py-3 my-5 ${shopFilter ? ' ': 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 '>
              <input  className='w-3'type="checkbox" value={'Topewear'} /> Topewear
            </p>
            <p className='flex gap-2'>
              <input  className='w-3'type="checkbox" value={'Bottomwear'} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input  className='w-3'type="checkbox" value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-center text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'}/>

        </div>

      </div>
      
      

    </div>
  )
}

export default Collection