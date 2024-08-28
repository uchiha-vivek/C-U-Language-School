import Link from "next/link";
import {FC} from 'react'

const Footer : FC = () => {
    return (
        <>
        
        <div className="grid lg:grid-cols-2 relative" >
            <div className="flex items-center justify-center " >
                <div className="grid lg:grid-cols-3 " >
                    <div>Logo</div>
                    <div>

                        <h1 className="font-semibold mb-4 " >Latest Blog Post</h1>
                        <h1 className="text-lg  mb-4" > Ready to get Started ?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo ipsum animi quae labore earum temporibus, cupiditate quaerat ad iusto architecto alias natus neque non repellendus error! Quis, ipsum saepe.</p>
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300 transform -translate-x-1/2"></div>
            <div className="flex items-center justify-center " >
                <div className="lg:grid-cols-4 grid  " >
                              <div>
                                <h1 className="font-semibold mb-5 " > Product </h1>
                                <ul>
                                    <li>Product</li>
                                    <li>Product</li>
                                    <li>Product</li>
                                    <li>Product</li>
                                </ul>
                              </div>
                              <div>
                                
                              </div>
                              <div>
                                <h1 className="font-semibold mb-5 " >Company</h1>
                                <ul>
                                    <li>Company</li>
                                    <li>Company</li>
                                    <li>Company</li>
                                    <li>Company</li>
                                </ul>
                              </div>
                              <div></div>
                </div>
            </div>

        </div>
        
        </>
    )
}
export default Footer