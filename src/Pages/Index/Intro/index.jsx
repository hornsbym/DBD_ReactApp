import { Button } from "exceleration";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Intro() {
  return (
    <section className={`flex flex-col gap-12 md:gap-16`}>
      <div className={`flex flex-col md:flex-row`}>
        <h1 className={`p-2 md:p-4 text-5xl md:text-7xl `}>
          Delicious, Health Meals Delivered to Your Doorstep
        </h1>
        <div
          className={`flex flex-col text-xl gap-8 md:gap-12 p-2 md:p-4 md:text-2xl`}
        >
          <p>
            Experience the convenience and health benefits of our prepared
            meals. Order now and enjoy delicious, nutritious dishes without the
            hassle of cooking.
          </p>
          <div className={`flex flex-row justify-center gap-4`}>
            <a href="https://dinnersbyderek.bottle.com/" target="__blank">
              <Button
                className="bg-darkBlue text-white !rounded-none px-4"
                label={
                  <p className="flex flex-row items-center gap-2">
                    Order now <BsBoxArrowUpRight />
                  </p>
                }
              />
            </a>
            <a href="/how-it-works">
              <Button
                className="border-2 border-darkBlue text-darkBlue !rounded-none px-4"
                label="Learn More"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`w-full bg-cover bg-center aspect-video`}
        style={{ backgroundImage: "url(/hot_mess_sweet_potato_bowl.jpg)" }}
      />
    </section>
  );
}
