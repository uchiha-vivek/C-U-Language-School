import { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

const Pricing: FC = () => {
    return (
        <>
            <div className="bg-[#F2F2F2] py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Pricing</h2>
                    <p className="mt-4 text-lg">
                        “If you don’t try this app, you won’t become the superhero you were meant to be”
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        <div className="max-w-sm">
                            <Card className="p-6">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">Title 1</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 mb-3 ">
                                        Description for the first plan.
                                    </CardDescription>
                                    <CardDescription className="mb-3" >
                                        Feature 1
                                    </CardDescription>
                                    <CardDescription className="mb-3" >
                                        Feature 2
                                    </CardDescription>
                                    <CardDescription className="mb-3" >
                                        Feature 3
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex justify-center mt-10  ">
                                    <Button>Start Now</Button>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="max-w-sm">
                            <Card className="p-6">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">Title 2</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 mb-3 ">
                                        Description for the second plan.
                                    </CardDescription>
                                    <CardDescription className="mb-3" >
                                        Feature 1
                                    </CardDescription>
                                    <CardDescription className="mb-3" >
                                        Feature 2
                                    </CardDescription>
                                    <CardDescription className="mb-3" >
                                        Feature 3
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex justify-center mt-10 ">
                                    <Button>Start Now</Button>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="max-w-sm">
                            <Card className="p-6">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">Title 3</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 mb-3 ">
                                        Description for the third plan.
                                    </CardDescription>
                                    <CardDescription className="mb-3" >
                                        Feature 1
                                    </CardDescription>
                                    <CardDescription className="mb-3" >
                                        Feature 2
                                    </CardDescription>
                                    <CardDescription className="mb-3" >
                                        Feature 3
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex justify-center mt-10 ">
                                    <Button>Start Now</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;
