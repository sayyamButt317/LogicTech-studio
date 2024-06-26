const StepperWidget = () => {
    return (

<ol class="relative ml-10 mt-6 border-s border-gray-200 ">                  
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -start-4 ring-4 shadow-lg ring-white">
            01
        </span>
        <h3 class="font-bold text-xl leading-tight ml-6">Feature / Function</h3>
        <p class="text-sm ml-6 ">We meet Your Requirment</p>
    </li>
    <li class="mb-10 ms-6 ">
    <span class="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -start-4 ring-4 shadow-lg ring-white text-gray-300 ">
            02
        </span>
        <h3 class="font-bold text-xl  text-gray-300 leading-tight ml-6">Solution </h3>
        <p class="text-sm text-gray-300  ml-6">We solve your current problems</p>
    </li>

    <li class="ms-6">
    <span class="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -start-4 ring-4 shadow-lg ring-white text-gray-300 ">
            03
        </span>
        <h3 class="font-bold text-xl text-gray-300  leading-tight ml-6">Outcomes</h3>
        <p class="text-sm text-gray-300  ml-6">We enable your Future Results</p>
    </li>
</ol>

    )
}
export default StepperWidget;