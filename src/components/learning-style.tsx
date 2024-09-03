import { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import study from '../assets/study-1.jpeg'
const LearningStyle: FC = () => {
  return (
    <div className="bg-[#F2F2F2] py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Learning Style Tailored for You</h2>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="max-w-sm">
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <img
                  src={study.src} // Replace with the actual image path
                  alt="Card Image 1"
                  className="w-full h-32 object-cover rounded-t-md"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-thin"> Group Learning </CardTitle>
              </CardHeader>
               
              <CardFooter className="flex justify-center mt-10">
                <Button>Start Now</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <img
                  src={study.src} // Replace with the actual image path
                  alt="Card Image 2"
                  className="w-full h-32 object-cover rounded-t-md"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-thin"> Face to Face Language Classes  </CardTitle>
              </CardHeader>
              
              <CardFooter className="flex justify-center mt-10">
                <Button>Start Now</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <img
                  src={study.src} // Replace with the actual image path
                  alt="Card Image 3"
                  className="w-full h-32 object-cover rounded-t-md"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-thin"> Corporate Learning </CardTitle>
              </CardHeader>
               
              <CardFooter className="flex justify-center mt-10">
                <Button>Start Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningStyle;
