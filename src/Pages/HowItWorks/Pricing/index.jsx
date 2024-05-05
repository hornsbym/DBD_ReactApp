import React from "react";

export default function Pricing() {
  return (
    <section className="flex flex-col gap-8 md:flex-row">
      <div className={`flex flex-col md:w-1/2 gap-4`}>
        <h2 className={`text-4xl`}>Pricing</h2>
        <p className={`text-xl`}>
          Our meals are prepared with value in mind. Each portion will suit a
          standard adult appetite… no microportioning!
        </p>
        <p className={`text-xl`}>
          Orders over $120 may use coupon code BULK5 to receive 5% off!
        </p>
      </div>
      <div
        className={`flex flex-col md:w-1/2 p-4 bg-white text-xl gap-4 justify-center m-4`}
      >
        <div className={`flex flex-row justify-between`}>
          <p className={`font-bold`} p>
            Individual entrees
          </p>
          <p>$9.25 each</p>
        </div>
        <div className={`flex flex-row justify-between`}>
          <p className={`font-bold`}>Individual salads</p>
          <p>$4.50 each</p>
        </div>
        <div className={`flex flex-row justify-between`}>
          <p className={`font-bold`}>Kid's meals</p>
          <p>$5.00 each</p>
        </div>
      </div>
    </section>
  );
}
