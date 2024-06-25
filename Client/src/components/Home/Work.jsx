import StepperWidget from "../../Utils/StepperWidget";
const work = () =>{
    return(
        <>
            <div className="block flex-col ml-6">
              
                    <div className="flex flex-col">
                        <h1 className="font-normal text-sky-400 text-lg md:text-md ml-4 md:ml-8 mt-10 md:mt-20">
                            HOW WE WORK
                        </h1>
                        <div className="block text-3xl md:text-2xl font-bold md:ml-8">
                            <p className="text-black  ">
                            WORKED WITH START-UPS AND
                            </p>
                            <p className="text-black">
                            MORE ESTABLISHED COMPANIES
                            </p>
                            <p className="flex flex-row lg:font-normal text-sm font-thin mt-8">We are Software Agency ,deliberately staying small to keep the quality of our team high</p>
                            <p className="flex flex-row lg:font-normal text-sm font-thin ">.This allow us to be picky about the clents and products we take on   </p>
                        </div>
                     <StepperWidget/>   
                    </div>
         
            </div>
        </>
    )
    
}
export default work;