const ProductSkeleton = () => {
    return (
        <div className="animate-pulse p-4 md:p-8">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="flex flex-col md:flex-row mt-6 md:mt-12 gap-8">
                <div className="md:w-1/2 w-full flex flex-col gap-4">
                    <div className="h-96 bg-gray-300 rounded-lg"></div>
                    <div className="flex gap-4 w-full overflow-x-auto py-2">
                        <div className="w-20 h-20 bg-gray-300 rounded-md flex-shrink-0"></div>
                        <div className="w-20 h-20 bg-gray-300 rounded-md flex-shrink-0"></div>
                        <div className="w-20 h-20 bg-gray-300 rounded-md flex-shrink-0"></div>
                        <div className="w-20 h-20 bg-gray-300 rounded-md flex-shrink-0"></div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/6"></div>
                    </div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="flex justify-between items-center gap-4 mt-6">
                        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-6 bg-gray-300 rounded w-1/6"></div>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <div className="h-10 bg-gray-300 rounded w-full"></div>
                        <div className="h-10 bg-gray-300 rounded w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSkeleton;
