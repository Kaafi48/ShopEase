
const Payments = () => {
  return (
    <div className="w-full lg:w-96">
      {/* LG-ga wuxuu ku qaadanayaa balac go'an (w-96), moobilkana wuxuu wada gelayaa shaashadda */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-6">
        
        <h2 className="text-xl font-extrabold text-gray-800 border-b border-gray-100 pb-4 mb-5">
          Choose your payment method
        </h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center text-gray-600">
            <label className="flex items-center justify-center gap-2 cursor-pointer">
              <input type="radio" name="payment" className="form-radio text-blue-600" />
              <span>Credit Card</span>
            </label>
         
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <label className="flex items-center justify-center gap-2 cursor-pointer">
              <input type="radio" name="payment" className="form-radio text-blue-600" />
              <span>Cash on Delivery</span>
            </label>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <label className="flex items-center justify-center gap-2 cursor-pointer">
              <input type="radio" name="payment" className="form-radio text-blue-600" />
              <span>Bank Transfer</span>
            </label>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-5 mb-6">
          <div className="flex items-center justify-between gap-20">
            <span className="text-gray-600">SubTotal</span>
            <p className="text-lg font-semibold text-gray-800">$229.98</p>
          </div>
          <div className="flex items-center justify-between gap-20">
            <span className="text-gray-600">Shipping</span>
            <p className="text-lg font-semibold text-gray-800">$15.99</p>
          </div>
          <div className="flex items-center justify-between gap-20">
            <span className="text-gray-600">Tax</span>
            <p className="text-lg font-semibold text-gray-800">$18.40</p>
          </div>

        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-2 px-2 rounded-xl transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2 cursor-pointer duration-300 ease-in">
          Checkout Now
        </button>

      </div>
    </div>
  );
};

export default Payments;