import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Monthly exchange of fashion items",
  "Take 3 new clothing items and return 3",
  "Returned items are repaired and cleaned by our team",
  "Official member t-shirt",
];

export default function SubscrPlan() {
  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Revolutionary Circular Fashion Library
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our Circular Fashion Library subscription plan and never run
            out of style! With monthly exchange of fashion items,
            you can take 3 new clothing items and return 3 old ones that will be
            repaired and cleaned by our team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Subscription Benefits
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              With our subscription plan, you can access our fashion library
              without worrying about the price. You can select the clothing
              items you want and which ones you would like to return, just like
              a fashion shop.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-brand">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-brand"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Join the Circular Fashion Revolution!
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $29
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    EUR
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-brand px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe{" "}
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  By subscribing, you'll be supporting a sustainable and
                  eco-friendly fashion industry. Instead of contributing to the
                  fast fashion industry's negative impact, you'll be taking part
                  in a circular economy where clothing items are reused and
                  given a second life.{" "}
                </p>
                <p className="mt-6 text-xs leading-5 text-gray-600">Don't miss out on this opportunity to
                  refresh your wardrobe sustainably and guilt-free. Subscribe
                  now and start enjoying the benefits of the Circular Fashion
                  Library!</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
