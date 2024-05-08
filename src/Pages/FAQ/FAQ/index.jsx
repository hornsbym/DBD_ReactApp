import { useState } from "react";
import SectionContainer from "../../../Components/SectionContainer";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const FAQ_ITEMS = [
  {
    question: 'Do you deliver to me?',
    answer: ['Hopefully! When you enter your address in the delivery section, it will let you know if delivery is an option or the closest pickup location.']
  },
  {
    question: 'Can I buy a gift card?',
    answer: ['Yes. We offer gift cards in different amounts and they are available on the menu page.']
  },
  {
    question: 'When is the order cutoff?',
    answer: ['We are taking orders until Friday at 9pm for the following week!']
  },
  {
    question: 'When is the new menu posted?',
    answer: ['Menus are posted on Monday for delivery the next week. You have until Friday evening to order.']
  },
  {
    question: 'Can I pickup at Dinners by Derek kitchen?',
    answer: ['We aren’t offering pickup at our kitchen right now. We are typically out making deliveries!']
  },
  {
    question: 'Are the portions individual or family-style? ',
    answer: ['Each meal is designed for a single portion.']
  },
  {
    question: 'How do I know when my delivery arrived?',
    answer: ['If delivery is for home/business, we will send you a test message when our driver has been by.']
  },
  {
    question: 'Do I have to be at the gym when you deliver?',
    answer: ['Nope! We have a refrigerator on-site at each location. You are welcome to pick up anytime during their hours.']
  },
  {
    question: 'Do I need to be a member of the gym to pickup?',
    answer: ['Most locations allow for non-member pickup. It will say under the location description if it just for employee or member pickup! ']
  },
  {
    question: 'Is this a subscription?',
    answer: ['No subscription required! Order based on your needs with no commitment.']
  },
  {
    question: 'Is there a minimum order? ',
    answer: [`There is no minimum. You are able to order as many as you'd like but there is no minimum dollar amount per order.`,]
  },
  {
    question: 'How do I know if my order is coming on Monday, Thursday, or both?',
    answer: [`You'll see categories for ordering and can filter these to see items for separate days. For example, "Monday Delivery Entrees and Breakfast" or "Thursday Delivery Entrees and Breakfast".  In addition, there will be a (M) for Monday and a (T) for Thursday next to each item indicating when its being delivered. `]
  }
]

export default function FAQ() {
  return (
      <section className='flex flex-col justify-stretch gap-12 md:gap-16'>
        <h1
          className={`
          flex
          flex-col
          justify-end
          lg:justify-normal
          text-white
          text-5xl
          lg:text-7xl
          aspect-square
          lg:aspect-auto
          px-8
          lg:px-16
          pt-32
          lg:pt-64
          pb-8
          lg:pb-24
          bg-cover
          bg-bottom
          bg-scroll
          sm:bg-fixed
          `}
          style={{
            width: '100%',
            backgroundImage:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.425), rgba(0, 0, 0, 0.425)), url(greek_chopped_salad.jpg)",
          }}
        >
          {<div className='text-left'><span className="hidden sm:block">{'Frequently Asked Questions'}</span><span className="block sm:hidden">{`FAQ's`}</span></div>}
        </h1>
        <SectionContainer className={`self-center`}>
        <div className='flex flex-col gap-8 items-stretch'>
          {FAQ_ITEMS.map((item, i) => <FAQTile question={item.question} answer={item.answer} key={i.toString()} />)}
        </div>
      </SectionContainer>
      </section>

  );
}

function FAQTile({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className='flex flex-col'>
      <h2 className={`flex flex-row bg-darkBlue text-white hover:cursor-pointer text-xl sm:text-2xl p-4 gap-4 items-center`}
        onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? <BsChevronUp className="shrink-0" /> : <BsChevronDown className="shrink-0" />} {question} 
      </h2>
      {isExpanded && (
        <div className={`flex flex-col gap-2 p-4 text-lg sm:text-xl bg-lightBlue`}>
          {answer.map((ans, i) => <p key={`${i}-${question}-p`}>{ans}</p>)}
        </div>
      )}
    </div>)

}
