import ftc1 from "../images/ftc1.png";
import ftc2 from "../images/ftc2.png";
import ftc3 from "../images/ftc3.png";
import ftc4 from "../images/ftc4.png";

export default function Incentives() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-5 pt-0 px-4 sm:px-6 lg:px-2">
        <div className="mt-10">
          <dl className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10 lg:gap-x-8 lg:gap-y-10">
            <div>
              <dt>
                <div className="flex items-center justify-center">
                  <img className="h-28 w-auto" src={ftc4} alt="shipping" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Free shipping
                </p>
              </dt>
              <dd className="mt-2 ml-14 text-base text-gray-500">
                Get free shipping on your first order.
              </dd>
            </div>

            {/* Second column */}
            <div>
              <dt>
                <div className="flex items-center justify-center">
                  <img className="h-28 w-auto" src={ftc1} alt="Support" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  24/7 Customer Support
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-sm text-gray-500">
                If you encounter a problem or have questions, do not hesitate to
                contact us. Fill out the contact form and we will respond as
                quickly as possible.{" "}
              </dd>
            </div>

            {/* Third column */}
            <div>
              <dt >
                <div className="flex items-center justify-center">
                  <img className="h-28 w-auto" src={ftc2} alt="Exchanges" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Exchanges
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-sm text-gray-500">
                Not what you expected? — Make an exchange! The quality of our
                items and the user's satisfaction are important to us.{" "}
              </dd>
            </div>

            {/* Fourth column */}
            <div>
              <dt>
                <div className="flex items-center justify-center">
                  <img className="h-28 w-auto" src={ftc3} alt="planet" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Save the planet
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Reuse things to save the planet from the harmful effects of CO2.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
