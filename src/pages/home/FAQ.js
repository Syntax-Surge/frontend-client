import React, { useState } from "react";
import FAQImage from '../../assets/faq_image.jpg'

const FAQ = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <p className="font-normal dark:text-gray-400 text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12">
            Here are few of the most frequently asked questions by our valuable customers.
        </p>
        <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
            <div className="md:w-5/12 lg:w-4/12 w-full">
                <img
                    src={FAQImage}
                    alt="Glass bottle"
                    className="w-full md:block hidden"
                />
            </div>
            <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-2">
            {[
                { id: 1, title: "Shipping", content: "We provide worldwide shipping to ensure our products reach every corner of the globe. Orders are dispatched within 1-2 business days and are shipped from our headquarters in the United States. Delivery times vary depending on the destination but typically range between 5-14 business days. All shipments are carefully packaged to ensure they arrive in perfect condition." },
                { id: 2, title: "Returns", content: "Our return policy allows you to send back any product within 30 days of receiving it. Items must be unused and in their original packaging. Refunds will be processed within 7 business days of receiving the returned item. Please note that return shipping costs are the responsibility of the customer unless the item is defective or incorrect." },
                { id: 3, title: "Exchange", content: "Need a different size, color, or product? We make exchanges easy! You can exchange any item within 30 days of purchase as long as it is unused and in its original packaging. Simply reach out to our support team to initiate the exchange process, and we’ll guide you through it." },
                { id: 4, title: "Tracking", content: "We provide real-time tracking for all orders so you can monitor your shipment every step of the way. Once your order is dispatched, you will receive a tracking number via email, which can be used to check your package's status on our website or the carrier’s platform." },
                { id: 5, title: "Payment Options", content: "We offer a variety of secure payment options to ensure a seamless checkout experience. Customers can pay using major credit or debit card. All transactions are encrypted to protect your information, ensuring a safe shopping experience." },
            ].map(({ id, title, content }) => (
                <div key={id}>
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection(id)}
                >
                    <h3 className="font-semibold text-xl dark:text-white leading-5 text-blue-gray-900">
                    {title}
                    </h3>
                    <button
                    aria-label="toggle"
                    className="text-gray-800 dark:text-white focus:outline-none"
                    >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transform ${
                        activeSection === id ? "rotate-45" : "rotate-0"
                        } transition-transform duration-200`}
                    >
                        <path
                        d="M10 4.1665V15.8332"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        d="M4.16602 10H15.8327"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    </button>
                </div>
                {activeSection === id && (
                    <p className="font-normal dark:text-gray-400 text-base text-justify leading-6 text-gray-600 mt-4 w-11/12">
                    {content}
                    </p>
                )}
                <hr className="my-7 border-blue-gray-800" />
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default FAQ;
