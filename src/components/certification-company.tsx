import { FC } from "react";



const Certification: FC = () => {

    return (
        <>
            {/* 
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md">

                    <div className="flex justify-center mb-4">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Sample Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-2">Title</h2>
                    <p className="text-gray-600 text-center">
                        This is a sample section with a rounded image above.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">

<div className="flex justify-center mb-4">
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
        <img
            src="https://via.placeholder.com/150"
            alt="Sample Image"
            className="w-full h-full object-cover"
        />
    </div>
</div>

<h2 className="text-2xl font-bold text-center mb-2">Title</h2>
<p className="text-gray-600 text-center">
    This is a sample section with a rounded image above.
</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">

<div className="flex justify-center mb-4">
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300">
        <img
            src="https://via.placeholder.com/150"
            alt="Sample Image"
            className="w-full h-full object-cover"
        />
    </div>
</div>

<h2 className="text-2xl font-bold text-center mb-2">Title</h2>
<p className="text-gray-600 text-center">
    This is a sample section with a rounded image above.
</p>
</div>
            </div> */}



            <div className="flex flex-col justify-center items-center min-h-96 bg-gray-400">
                <h1 className="text-white text-2xl mb-6">Certifications of Partner Companies</h1>

                {/* Container for the circles */}
                <div className="flex justify-center space-x-6">
                    {/* Rounded Image Section */}
                    <div className="w-25 h-24 rounded-full overflow-hidden border-4 border-gray-300">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="sample image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Additional Rounded Image Sections */}
                    <div className="w-25 h-24 rounded-full overflow-hidden border-4 border-gray-300">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="sample image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-25 h-24 rounded-full overflow-hidden border-4 border-gray-300">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="sample image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-25 h-24 rounded-full overflow-hidden border-4 border-gray-300">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="sample image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-25 h-24 rounded-full overflow-hidden border-4 border-gray-300">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="sample image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-25 h-24 rounded-full overflow-hidden border-4 border-gray-300">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="sample image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>


        </>
    )
}
export default Certification