import { socialLinks } from "../constants/constants";

const SocialNavigation = () => {
  return (
    <div className="fixed hidden md:block left-8 -bottom-1  space-y-4">
      <div className="flex  space-y-10 flex-col  ">
        {socialLinks.map(({ icon: Icon, url }) => (
          <p
            onClick={() => window.open(url, "_blank")}
            key={url}
            className="text-xl cursor-pointer text-gray-200 hover:text-teal-300 duration-100"
          >
            <Icon />
          </p>
        ))}
      </div>
      <div className="border-l ml-2 h-20"></div>
    </div>
  );
};

export default SocialNavigation;
