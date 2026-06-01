import React from 'react';

function CartSkeleton() {
  return (
    /* Weelka Guud (Container) */
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 space-y-4 lg:space-y-0 lg:space-x-4 animate-pulse">
      
      {/* 1. QAYBTA BIDIX: Skeleton-ka Liiska Alaabta (Cart Items) */}
      <div className="flex-1">
        
        {/* Ciwaanka "Your Cart Items" placeholder */}
        <div className="h-8 bg-gray-300 rounded w-64 mb-6"></div>

        {/* 3 xabo oo ah Kaararka Alaabta oo aan Loop ku samaynay */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-start space-x-4 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            
            {/* Sawirka (Image placeholder) */}
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
            
            {/* Faahfaahinta Alaabta */}
            <div className="flex-1 flex flex-col gap-2 w-full">
              {/* Title */}
              <div className="h-6 bg-gray-200 rounded w-2/3"></div>
              {/* Description */}
              <div className="h-4 bg-gray-200 rounded w-full max-w-sm mt-1"></div>

              {/* Qaybta hoose (Price, Quantity, Trash) */}
              <div className="flex items-center space-x-2 justify-between mt-2">
                <div className="flex gap-4 mb-2 items-center">
                  {/* Price */}
                  <div className="h-6 bg-gray-300 rounded w-16"></div>
                  {/* Quantity input */}
                  <div className="h-8 bg-gray-200 rounded-lg w-24"></div>
                </div>
                {/* Trash button */}
                <div className="h-8 w-8 bg-gray-200 rounded-md"></div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* 2. QAYBTA MIDIG: Skeleton-ka Lacag-bixinta (Payments) */}
      <div className="w-full lg:w-96 flex-shrink-0 lg:ml-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Ciwaanka "Order Summary" */}
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-8 border-b pb-4"></div>
          
          {/* Lacagaha (Subtotal, Shipping, Tax) */}
          <div className="space-y-6 mb-8">
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div>
            </div>
          </div>
          
          {/* Xariiqda Total-ka */}
          <div className="border-t border-gray-100 pt-6 mb-8 flex justify-between items-center">
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="h-8 bg-gray-300 rounded w-24"></div>
          </div>

          {/* Badhanka Checkout-ka */}
          <div className="h-14 bg-gray-300 rounded-xl w-full"></div>

        </div>
      </div>

    </div>
  );
}

export default CartSkeleton;