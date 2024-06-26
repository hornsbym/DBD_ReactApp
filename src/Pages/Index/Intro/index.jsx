import { Button } from "exceleration";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import SectionContainer from "../../../Components/SectionContainer";

export default function Intro() {
  return (
    <section
      className={`flex flex-col gap-12 md:gap-16 items-center`}
    >
      <SectionContainer>
        <div
          className={`flex flex-col md:flex-row bg-lightBlue`}
        >
          <h1 className={`p-2 md:p-4 text-5xl md:text-7xl `}>
            Delicious, Healthy Meals Delivered to Your Doorstep
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
              <Link to="/how-it-works">
                <Button
                  className="border-2 border-darkBlue text-darkBlue !rounded-none px-4"
                  label="Learn More"
                />
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      <div
        className={`w-full bg-cover aspect-square md:aspect-video bg-scroll sm:bg-fixed bg-top`}
        style={{ backgroundImage: "url(/hot_mess_sweet_potato_bowl.jpg)" }}
      />
    </section>
  );
}
