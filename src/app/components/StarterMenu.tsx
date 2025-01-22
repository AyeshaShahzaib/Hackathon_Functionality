export default function StarterMenu(){
return(
    <div>
<div className="flex flex-col lg:flex-row items-center justify-center">
  <div className="flex flex-col lg:flex-row justify-between items-start px-6 py-[120px] w-full lg:w-10/12">
    {/* Left Side: Image */}
    <div className="w-full lg:w-1/3 lg:pr-6 mb-6 lg:mb-0">
      <img
        src="DishImage.png"
        alt="Dish Image"
        className="shadow-lg w-full"
      />
    </div>

    {/* Right Side: Menu */}
    <div className="w-full lg:w-[60%]">
      <img src="/Coffee.png" alt="" className="h-6 w-6 mb-4" />
      {/* Header */}
      <h2 className="leading-[56px] text-[32px] lg:text-[48px] font-bold text-[#333333] pb-4">
        Starter Menu
      </h2>
      <div className="">
        {/* Menu Items */}
        <div className="space-y-3">
          {/* Item 1 */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b pb-2">
            <div className="flex flex-col gap-1">
              <h3 className="leading-[32px] text-[20px] lg:text-[24px] font-bold text-[#333333]">
                Alder Grilled Chinook Salmon
              </h3>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#4F4F4F]">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#828282]">560 CAL</p>
            </div>
            <span className="text-lg font-bold text-[#FF9F0D] mt-2 lg:mt-0">32$</span>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b pb-2">
            <div>
              <h3 className="leading-[32px] text-[20px] lg:text-[24px] font-bold text-[#FF9F0D]">
                Berries and Creme Tart
              </h3>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#4F4F4F]">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#828282]">700 CAL</p>
            </div>
            <span className="text-lg font-bold text-[#FF9F0D] mt-2 lg:mt-0">43$</span>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b pb-2">
            <div>
              <h3 className="leading-[32px] text-[20px] lg:text-[24px] font-bold text-[#333333]">
                Tormentoso Bush Pizza Pintoage
              </h3>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#4F4F4F]">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#828282]">1000 CAL</p>
            </div>
            <span className="text-lg font-bold text-[#FF9F0D] mt-2 lg:mt-0">14$</span>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h3 className="leading-[32px] text-[20px] lg:text-[24px] font-bold text-[#333333]">
                Spicy Vegan Potato Curry
              </h3>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#4F4F4F]">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#828282]">560 CAL</p>
            </div>
            <span className="text-lg font-bold text-[#FF9F0D] mt-2 lg:mt-0">35$</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col lg:flex-row items-center justify-center">
  <div className="flex flex-col lg:flex-row justify-between items-start px-6 py-[120px] w-full lg:w-10/12">
    {/* Right Side: Menu */}
    <div className="w-full lg:w-[60%] mb-6 lg:mb-0">
      <img src="/Coffee.png" alt="" className="h-6 w-6 mb-4" />
      {/* Header */}
      <h2 className="leading-[56px] text-[32px] lg:text-[48px] font-bold text-[#333333] pb-4">
        Main Course
      </h2>
      <div className="">
        {/* Menu Items */}
        <div className="space-y-3">
          {/* Item 1 */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b pb-2">
            <div className="flex flex-col gap-1">
              <h3 className="leading-[32px] text-[20px] lg:text-[24px] font-bold text-[#333333]">
                Optic Big Breakfast Combo Menu
              </h3>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#4F4F4F]">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#828282]">560 CAL</p>
            </div>
            <span className="text-lg font-bold text-[#FF9F0D] mt-2 lg:mt-0">32$</span>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b pb-2">
            <div>
              <h3 className="leading-[32px] text-[20px] lg:text-[24px] font-bold text-[#333333]">
                Cashew Chicken With Stir-Fry
              </h3>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#4F4F4F]">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#828282]">700 CAL</p>
            </div>
            <span className="text-lg font-bold text-[#FF9F0D] mt-2 lg:mt-0">43$</span>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b pb-2">
            <div>
              <h3 className="leading-[32px] text-[20px] lg:text-[24px] font-bold text-[#333333]">
                Vegetables & Green Salad
              </h3>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#4F4F4F]">
                Ground cumin, avocados, peeled and cubed
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#828282]">1000 CAL</p>
            </div>
            <span className="text-lg font-bold text-[#FF9F0D] mt-2 lg:mt-0">14$</span>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h3 className="leading-[32px] text-[20px] lg:text-[24px] font-bold text-[#333333]">
                Spicy Vegan Potato Curry
              </h3>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#4F4F4F]">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-[14px] lg:text-[16px] font-normal text-[#828282]">560 CAL</p>
            </div>
            <span className="text-lg font-bold text-[#FF9F0D] mt-2 lg:mt-0">35$</span>
          </div>
        </div>
      </div>
    </div>

    {/* Left Side: Image */}
    <div className="w-full lg:w-1/3 lg:pl-6">
      <img
        src="DishImage2.png"
        alt="Dish Image"
        className="shadow-lg w-full"
      />
    </div>
  </div>
</div>
<div className="lg:h-[468px] sm:h-screen bg-[url('/bg.png')] text-white">
  <div className="h-full flex justify-center items-center">
    <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-4 md:px-6 py-4 md:py-6">
      {/* Item 1 */}
      <div className="text-center space-y-4 w-full md:w-1/4">
        <div className="mb-4 text-orange-500 text-5xl">
          <img src="Chefs.png" alt="Chefs" className="mx-auto" />
        </div>
        <h3 className="text-3xl font-bold">420</h3>
        <p className="text-sm text-gray-300">Professional Chefs</p>
      </div>

      {/* Item 2 */}
      <div className="text-center space-y-4 w-full md:w-1/4">
        <div className="mb-4 text-orange-500 text-5xl">
          <img src="FoodItems.png" alt="Food Items" className="mx-auto" />
        </div>
        <h3 className="text-3xl font-bold">320</h3>
        <p className="text-sm text-gray-300">Items Of Food</p>
      </div>

      {/* Item 3 */}
      <div className="text-center space-y-4 w-full md:w-1/4">
        <div className="mb-4 text-orange-500 text-5xl">
          <img src="ForkandSpoon.png" alt="Fork and Spoon" className="mx-auto" />
        </div>
        <h3 className="text-3xl font-bold">30+</h3>
        <p className="text-sm text-gray-300">Years Of Experience</p>
      </div>

      {/* Item 4 */}
      <div className="text-center space-y-4 w-full md:w-1/4">
        <div className="mb-4 text-orange-500 text-5xl">
          <img src="Pizza.png" alt="Pizza" className="mx-auto sm:" />
        </div>
        <h3 className="text-3xl font-bold">220</h3>
        <p className="text-sm text-gray-300">Happy Customers</p>
      </div>
    </div>
  </div>
</div>


<div className="flex items-center justify-center">
  <div className="flex flex-col md:flex-row justify-between items-start px-6 py-[120px] w-full md:w-10/12">
    {/* Left Side: Image */}
    <div className="w-full md:w-1/3 mb-6 md:mb-0">
      <img
        src="Desert.png"
        alt="Desert"
        className="shadow-lg w-full"
      />
    </div>

    {/* Right Side: Menu */}
    <div className="w-full md:w-[60%]">
      <img src="/Coffee.png" alt="" className="h-6 w-6 mb-4" />
      {/* Header */}
      <h2 className="leading-[56px] text-[36px] md:text-[48px] font-bold text-[#333333] pb-4">
        Dessert
      </h2>

      {/* Menu Items */}
      <div className="space-y-3">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b pb-2">
          <div className="flex flex-col gap-1">
            <h3 className="leading-[32px] text-[20px] md:text-[24px] font-bold text-[#333333]">Fig and lemon cake</h3>
            <p className="text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-[14px] md:text-[16px] font-normal text-[#828282]">560 CAL</p>
          </div>
          <span className="text-md md:text-lg font-bold text-[#FF9F0D]">32$</span>
        </div>

        {/* Item 2 */}
          <div className="flex flex-col md:flex-row justify-between items-start border-b pb-2">
          <div className="flex flex-col gap-1">
            <h3 className="leading-[32px] text-[20px] md:text-[24px] font-bold text-[#333333]">Creamy mascarpone cake</h3>
            <p className="text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
            Gorgonzola, ricotta, mozzarella, taleggior
            </p>
            <p className="text-[14px] md:text-[16px] font-normal text-[#828282]">700 CAL</p>
          </div>
          <span className="text-md md:text-lg font-bold text-[#FF9F0D]">43$</span>
        </div>


        {/* Item 3 */}
                  <div className="flex flex-col md:flex-row justify-between items-start border-b pb-2">
          <div className="flex flex-col gap-1">
            <h3 className="leading-[32px] text-[20px] md:text-[24px] font-bold text-[#333333]">Pastry, blueberries, lemon juice</h3>
            <p className="text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
            Ground cumin, avocados, peeled and cubed
            </p>
            <p className="text-[14px] md:text-[16px] font-normal text-[#828282]">1000 CAL</p>
          </div>
          <span className="text-md md:text-lg font-bold text-[#FF9F0D]">14$</span>
        </div>

        {/* Item 4 */}
                  <div className="flex flex-col md:flex-row justify-between items-start border-b pb-2">
          <div className="flex flex-col gap-1">
            <h3 className="leading-[32px] text-[20px] md:text-[24px] font-bold text-[#333333]">Pain au chocolate</h3>
            <p className="text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
            Spreadable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[14px] md:text-[16px] font-normal text-[#828282]">560 CAL</p>
          </div>
          <span className="text-md md:text-lg font-bold text-[#FF9F0D]">35$</span>
        </div>

      </div>
    </div>
  </div>
</div>

<div className="flex items-center justify-center">
  <div className="flex flex-col md:flex-row justify-between items-start px-6 py-[120px] w-full md:w-10/12">
    {/* Left Side: Image */}

    {/* Right Side: Menu */}
    <div className="w-full md:w-[60%]">
      <img src="/Coffee.png" alt="Coffee Icon" className="h-6 w-6 mb-4" />

      {/* Header */}
      <h2 className="leading-[56px] text-[36px] md:text-[48px] font-bold text-[#333333] pb-4">
        Drinks
      </h2>

      {/* Menu Items */}
      <div className="space-y-3">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-2">
          <div className="flex flex-col gap-1">
            <h3 className="leading-[32px] text-[20px] md:text-[24px] font-bold text-[#333333]">Caffè macchiato</h3>
            <p className="text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-[14px] md:text-[16px] font-normal text-[#828282]">560 CAL</p>
          </div>
          <span className="text-md md:text-lg font-bold text-[#FF9F0D]">32$</span>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-2">
          <div>
            <h3 className="leading-[32px] text-[20px] md:text-[24px] font-bold text-[#333333]">Aperol Spritz Capacianno</h3>
            <p className="text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
              Gorgonzola, ricotta, mozzarella, taleggio
            </p>
            <p className="text-[14px] md:text-[16px] font-normal text-[#828282]">700 CAL</p>
          </div>
          <span className="text-md md:text-lg font-bold text-[#FF9F0D]">43$</span>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-2">
          <div>
            <h3 className="leading-[32px] text-[20px] md:text-[24px] font-bold text-[#333333]">Caffe Latte Campuri</h3>
            <p className="text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
              Ground cumin, avocados, peeled and cubed
            </p>
            <p className="text-[14px] md:text-[16px] font-normal text-[#828282]">1000 CAL</p>
          </div>
          <span className="text-md md:text-lg font-bold text-[#FF9F0D]">14$</span>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="leading-[32px] text-[20px] md:text-[24px] font-bold text-[#333333]">Tormentoso BushTea Pintoage</h3>
            <p className="text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
              Spreadable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[14px] md:text-[16px] font-normal text-[#828282]">560 CAL</p>
          </div>
          <span className="text-md md:text-lg font-bold text-[#FF9F0D]">35$</span>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 mb-6 md:mb-0">
      <img
        src="Drinks.png"
        alt="Dish Image"
        className="shadow-lg w-full"
      />
    </div>
  </div>
</div>
    </div>
    
)
}



