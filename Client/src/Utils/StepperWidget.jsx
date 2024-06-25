const StepperWidget = () => {
    return (

<ol class="relative ml-10 mt-6 border-s border-gray-200 ">                  
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -start-4 ring-4 shadow-lg ring-white">
            01
        </span>
        <h3 class="font-medium leading-tight">Feature / Function</h3>
        <p class="text-sm">We meet Your Requirment</p>
    </li>
    <li class="mb-10 ms-6">
    <span class="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -start-4 ring-4 shadow-lg ring-white">
            02
        </span>
        <h3 class="font-medium leading-tight">Solution </h3>
        <p class="text-sm">Step details here</p>
    </li>

    <li class="ms-6">
    <span class="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -start-4 ring-4 shadow-lg ring-white">
            03
        </span>
        <h3 class="font-medium leading-tight">Confirmation</h3>
        <p class="text-sm">Step details here</p>
    </li>
</ol>

    )
}
export default StepperWidget;