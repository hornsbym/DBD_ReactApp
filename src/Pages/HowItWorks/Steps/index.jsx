import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const stepCardClassnames = "flex flex-grow xl:max-w-[48%]";

export default function Steps() {
  return (
    <section className={`flex flex-col gap-12 md:gap-16`}>
      <h1
        className={`text-white text-5xl lg:text-7xl px-8 lg:px-16 pt-16 lg:pt-32 pb-4 lg:pb-12 bg-cover bg-center`}
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.425), rgba(0, 0, 0, 0.425)), url(greek_chopped_salad.jpg)",
        }}
      >
        How It Works
      </h1>
      <div className={`flex flex-col lg:flex-row gap-8 flex-wrap justify-center`}>
        <StepCard
          stepNumber={1}
          title="Sign up"
          className={`${stepCardClassnames}`}
        >
          <div className="flex flex-col gap-4">
            <p className="flex flex-row flex-wrap gap-x-2">
              Go to{" "}
              <a
                href="https://dinnersbyderek.bottle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-baseline gap-2 underline"
              >
                https://dinnersbyderek.bottle.com <BsBoxArrowUpRight />
              </a>{" "}
              to sign up.
            </p>
            <p>
              After signing up, you will be able to view the menu and order for
              the upcoming week. No long term commitment necessary!
            </p>
          </div>
        </StepCard>
        <StepCard
          stepNumber={2}
          title="Make your selections"
          className={`${stepCardClassnames}`}
        >
          <div className="flex flex-col gap-4">
            <p>
              Every Monday we will release a unique menu of healthy, chef
              inspired creations to be delivered the following week.
            </p>
            <p className="flex flex-row flex-wrap gap-x-2">
              Check
              <a
                href="https://dinnersbyderek.bottle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-baseline gap-2 underline"
              >
                https://dinnersbyderek.bottle.com <BsBoxArrowUpRight />
              </a>
              to view the menu and place an order for the upcoming week.
            </p>
            <p>
              All orders must be received before 9 PM on Friday of the preceding
              week.
            </p>
            <p>
              Late week orders' may also be placed prior to Sunday at 9 PM for
              Thursday delivery.
            </p>
          </div>
        </StepCard>
        <StepCard
          stepNumber={3}
          title="Receive your food"
          className={`${stepCardClassnames}`}
        >
          <div className="flex flex-col gap-4">
            <p>
              We will personally deliver your meals twice weekly to maximize
              freshness. We are currently delivering meals Mondays and Thursdays.
            </p>
            <p>In addition to a number of gyms offering community pick up, we offer a home delivery service within a select area that is free of charge with a $50 minimum order per week. We are not offering pick up from our facility at this time.</p>
            <p>If you'd still care for delivery but don't meet the minimum, we will politely assess a $5.00 fee (excludes gym and school delivery).</p>
            <p>Please contact us concerning our delivery area.</p>
          </div>
        </StepCard>
        <StepCard
          stepNumber={4}
          title="Heat and enjoy!"
          className={`${stepCardClassnames}`}
        >
          <div>
            <p>
              We use containers that are best suited to warm your food quickly
              and easily. Simply follow the enclosed directions and ring the
              dinner bell!
            </p>
          </div>
        </StepCard>
      </div>
    </section>
  );
}

function StepCard({ stepNumber, title, children, className }) {
  return (
    <div
      className={`flex flex-row gap-6 ${className ? className : ""} p-8`}
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e1f3ff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <p className="flex flex-row text-4xl text-white rounded-full bg-darkBlue h-[60px] aspect-square justify-center items-center">
        {stepNumber}
      </p>
      <div className={`flex flex-col text-xl gap-4`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        {children}
      </div>
    </div>
  );
}
