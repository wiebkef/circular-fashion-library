import ftc1 from "../images/ftc1.png";
import ftc2 from "../images/ftc2.png";
import ftc3 from "../images/ftc3.png";
import ftc4 from "../images/ftc4.png";

export default function Incentives() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 gap-5 px-5 pb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="mx-auto">
          {/* First column */}
          <img
            className="h-28 w-auto block mx-auto"
            src={ftc4}
            alt="shipping"
          />
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Free shipping
          </h3>
          <p className="mt-2 text-sm text-gray-500 sm:max-w-sm">
            Shipping is included in your subscription fee.
          </p>
        </div>

        <div className="mx-auto">
          {/* Second column */}
          <img
            className="h-28 w-auto block mx-auto"
            src={ftc1}
            alt="shipping"
          />
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            24/7 Customer Support
          </h3>
          <p className="mt-2 text-sm text-gray-500 sm:max-w-sm">
            If you encounter a problem or have questions, don't hesitate to
            contact us. Fill out the contact form and we will get back to you as
            quickly as possible.
          </p>
        </div>
        <div className="mx-auto">
          {/* Third column */}
          <img
            className="h-28 w-auto block mx-auto"
            src={ftc2}
            alt="shipping"
          />
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Exchanges
          </h3>
          <p className="mt-2 text-sm text-gray-500 sm:max-w-sm">
            Not what you expected? — You can exchange some or all items at any
            time and choose new ones. The quality of our items and your
            satisfaction are important to us.
          </p>
        </div>

        {/* Fourth column */}
        <div className="mx-auto">
          <img
            className="h-28 w-auto block mx-auto"
            src={ftc3}
            alt="shipping"
          />
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Save the planet
          </h3>
          <p className="mt-2 text-sm text-gray-500 sm:max-w-sm">
            Share clothes to minimize the harmful impact of CO2 on our planet.
            Wear things you like and return them to our store. Your decluttered
            wardrobe will thank you as well.
          </p>
        </div>
      </div>
    </div>
  );
}
