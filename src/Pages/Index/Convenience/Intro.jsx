import { BsClockHistory, BsBasket } from "react-icons/bs";
import { Button } from "exceleration";

export default function Convenience() {
  return (
    <section className={`flex flex-col lg:flex-row gap-12 lg:gap-16 justify-normal lg:justify-evenly`}>
      <div className={`flex flex-col lg:w-1/2`}>
        <h1 className={`p-2 md:p-4 text-5xl md:text-7xl `}>
          Delicious, Health Meals Delivered Right to Your Door
        </h1>
        <div
          className={`flex flex-col text-xl gap-8 md:gap-12 p-2 md:p-4 md:text-2xl`}
        >
          <p>
            At Dinners by Derek, we make it easy for you to enjoy healthy and
            tasty meals without the hassle. With our convenient delivery
            service, you can save time and still enjoy a variety of delicious
            options.
          </p>
          <div className={`flex flex-col md:flex-row justify-center gap-4 text-xl`}>
            <div className={`flex flex-col gap-4 p-4 md:p-8`}>
              <BsClockHistory className="size-[36px] md:size-[48px] self-center"/>
              <h2 className={`font-bold`}>Time Saving</h2>
              <p>No more meal planning, grocery shopping, or cooking. Just heat and enjoy</p>
            </div>
            <div className={`flex flex-col gap-4 p-4 md:p-8`}>
              <BsBasket className="size-[36px] md:size-[48px] self-center"/>
              <h2 className={`font-bold`}>Healthy Choices</h2>
              <p>Our meals are carefully crafted with fresh ingredients to provide you with nutritious options.</p>
            </div>
          </div>
          <div className={`flex flex-row justify-center gap-4`}>
            <Button
              className="bg-darkBlue text-white !rounded-none px-4"
              href="/"
              label="Order Now"
            />
            <Button
              className="border-2 border-darkBlue text-darkBlue !rounded-none px-4"
              label="Learn More"
            />
          </div>
        </div>
      </div>
      <div className={`flex flex-row justify-center lg:w-1/2 sm:p-8 lg:p-16`}>
        <div
          className={`w-full bg-cover bg-center aspect-square self-center`}
          style={{ backgroundImage: "url(/chopped_italian_salad.jpg)" }}
        />        
      </div>
    </section>
  );
}
