import item1 from "../images/tst1.png";
import item2 from "../images/jns2.png";
import item3 from "../images/tst3.png";
import item4 from "../images/jns4.png";

const features = [
  {
    name: "But that is not all!",
    icon: "bi bi-star",
    description:
      "When you return your items, our team will repair and clean them to make them as good as new. So not only are you helping the environment by reducing waste, but you are also getting your clothes fixed and refreshed without any additional effort.",
  },
  {
    name: "Customer frontend",
    icon: "bi bi-laptop",
    description:
      "It is just like any other fashion shop, except we do not show prices. You can browse and select clothing items you love and add them to your cart. The only difference is that you do not have to pay for each item you choose.",
  },
  {
    name: "Subscription plan",
    icon: "bi bi-check-circle",
    description:
      "We encourage you to take advantage of our subscription plan, which is not only affordable but also environmentally friendly. With our Circular Fashion Library, you can constantly refresh your wardrobe without sacrificing your values.",
  },
  {
    name: "Join",
    icon: "bi bi-people",
    description:
      " our community of fashion-forward individuals who care about the planet and love fashion. Subscribe now and start your sustainable fashion journey!",
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How does it work?
          </h2>
          <p className="mt-4 text-gray-500">
            You purchase a subscription plan, and then you can exchange fashion
            items on a monthly basis. You can select up to three new clothing
            items from our vast collection, and you can return up to three items
            that you no longer need.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="flex items-center justify-center text-brand">
                <i className={`bi ${feature.icon} text-3xl mr-2`}></i>
                <span className="text-center font-medium">{feature.name}</span>
              </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            className="rounded-lg bg-gray-100 object-cover object-center h-60 sm:h-80 lg:h-96 w-full"
            src={item1}
            alt="cart1"
          />
          <img
            className="rounded-lg bg-gray-100 object-cover object-center h-60 sm:h-80 lg:h-96 w-full"
            src={item2}
            alt="cart2"
          />
          <img
            className="rounded-lg bg-gray-100 object-cover object-center h-60 sm:h-80 lg:h-96 w-full"
            src={item3}
            alt="cart3"
          />
          <img
            className="rounded-lg bg-gray-100 object-cover object-center h-60 sm:h-80 lg:h-96 w-full"
            src={item4}
            alt="cart4"
          />
        </div>
      </div>
    </div>
  );
}
