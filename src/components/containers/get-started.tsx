import { FC } from "react";
import { Button } from "../ui/button";

const GetStarted:FC = () => {
    return (
        <>
        <div className="bg-gray-100 min-h-96 ">
        <div className=" text-center mt-20 " >
            <h1 className="font-semibold mt-5 " > Ready to Get Started ? </h1>
            <p className="mt-5" >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga iure magni nemo distinctio quas, est voluptatibus earum odio? Voluptatem accusamus repellat sequi, nam amet cumque repudiandae cupiditate? Esse, porro!</p>
         <Button className="mt-5" > Start Free Trial </Button>
        </div>
        </div>
        </>
    )
}
export default GetStarted