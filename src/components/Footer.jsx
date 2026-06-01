import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <div className="border-t border-gray-300 mt-16 py-8">
      <p className="text-center text-gray-600 ">
        &copy; {currentYear} ShopEase. All rights reserved.
      </p>
    </div>
  )
}

export default Footer