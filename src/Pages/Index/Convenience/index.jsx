import {
  BsClockHistory,
  BsBasket,
  BsBoxArrowUpRight,
  BsChevronRight,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "exceleration";
import SectionContainer from "../../../Components/SectionContainer";

export default function Convenience() {
  return (
    <SectionContainer className="self-center">
      <section
        className={`flex flex-col lg:flex-row gap-12 lg:gap-16 justify-normal lg:justify-evenly`}
      >
        <div className={`flex flex-col lg:w-1/2`}>
          <h2 className={`p-2 md:p-4 text-5xl md:text-7xl `}>
            Delicious, Health Meals Delivered Right to Your Door
          </h2>
          <div
            className={`flex flex-col text-xl gap-8 md:gap-12 p-2 md:p-4 md:text-2xl`}
          >
            <p>
              At Dinners by Derek, we make it easy for you to enjoy healthy and
              tasty meals without the hassle. With our convenient delivery
              service, you can save time and still enjoy a variety of delicious
              options.
            </p>
            <div
              className={`flex flex-col md:flex-row justify-center gap-4 text-xl`}
            >
              <div className={`flex flex-col gap-4 p-4 md:p-8`}>
                <BsClockHistory className="size-[36px] md:size-[48px] self-center" />
                <h2 className={`font-bold`}>Time Saving</h2>
                <p>
                  No more meal planning, grocery shopping, or cooking. Just heat
                  and enjoy
                </p>
              </div>
              <div className={`flex flex-col gap-4 p-4 md:p-8`}>
                <BsBasket className="size-[36px] md:size-[48px] self-center" />
                <h2 className={`font-bold`}>Healthy Choices</h2>
                <p>
                  Our meals are carefully crafted with fresh ingredients to
                  provide you with nutritious options.
                </p>
              </div>
            </div>
            <div className={`flex flex-row justify-center gap-4`}>
              <a href="https://dinnersbyderek.bottle.com/" target="__blank">
                <Button
                  className="bg-darkBlue text-white !rounded-none px-4"
                  href="/"
                  label={
                    <p className="flex flex-row items-center gap-2">
                      Order now <BsBoxArrowUpRight />
                    </p>
                  }
                />
              </a>
              <Link to="/how-it-works">
                <Button
                  className="border-0 text-darkBlue !rounded-none px-4"
                  label={
                    <p className="flex flex-row items-center gap-2">
                      Learn More <BsChevronRight />
                    </p>
                  }
                />
              </Link>
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
    </SectionContainer>


  );
}
