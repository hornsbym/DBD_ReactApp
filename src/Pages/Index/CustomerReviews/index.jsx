import { BsStar, BsStarFill } from "react-icons/bs";
import SectionContainer from "../../../Components/SectionContainer";

export default function CustomerReviews() {
  return (
    <div className={`flex flex-row justify-center bg-cover bg-center`} style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(firehouse_chili.jpg)" }}>
      <SectionContainer>
        <section className={`flex flex-col gap-12 lg:gap-16 justify-normal text-white py-8`}>
          <div className={`flex flex-col`}>
            <div className={`flex flex-col p-2 md:p-4 text-5xl md:text-7xl gap-4`}>
              <h2 className={`text-5xl md:text-7xl `}>Satisfied Customers</h2>
              <p className={`text-xl md:text-2xl `}>
                Read what our customers have to say about our meals.
              </p>
            </div>
            <div className={`flex flex-col lg:flex-row w-full`}>
              <Review
                stars={5}
                review={
                  "Healthy high quality meals! It is so convenient to have meals ready to enjoy that are delicious. I have used Dinners with Derek for over a year. I really like the seasonal meal changes too."
                }
                reviewer={"Davina Braselton"}
                medium={"Google Reviews"}
              />
              <Review
                stars={5}
                review={
                  "I absolutely love Dinners by Derek! The food is amazing while also being extremely healthy and macro friendly. It is perfect for me when I’m trying to track my meals and also not spend a lot of time meal prepping! There’s isn’t a meal I’ve found I dislike! I definitely recommend it!"
                }
                reviewer={"Mia Anderson"}
                medium={"Google Reviews"}
              />
              <Review
                stars={5}
                review={
                  "I LOVE Dinners by Derek! The food tastes great while also being good for you which isn't easy to do. I'm really grateful they were recommended to me."
                }
                reviewer={"Kate Tilton"}
                medium={"Google Reviews"}
              />
            </div>
          </div>
        </section>
      </SectionContainer>
    </div>


  );
}

const Review = ({ stars, review, reviewer, medium }) => {
  const starWidgets = [
    <BsStar />,
    <BsStar />,
    <BsStar />,
    <BsStar />,
    <BsStar />,
  ];
  for (let i = 0; i < stars; i++) {
    starWidgets[i] = <BsStarFill key={`${i}-${reviewer}`} />;
  }

  return (
    <div className={`flex flex-col gap-4 text-xl p-4 md:p-8 w-full lg:w-1/3`}>
      <div
        className={`flex flex-row text-yellow-400 gap-1 text-2xl md:text-3xl`}
      >
        {starWidgets}
      </div>
      <q className="italic">{review}</q>
      <p>{`${reviewer}, ${medium}`}</p>
    </div>
  );
};
