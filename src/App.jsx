import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";
import { LinkInput } from "./components/LinkInput";
import Link from "./components/Link";
import Card from "./components/Card";
import Loader from "./components/Loader";
import AlertComponent from "./components/Alert";
import { useCommentContext } from "./LinkContext";

function App() {
  const { loading, data, Alert } = useCommentContext();
  return (
    <>
      <div>
        <div className="max-w-5xl w-full m-auto px-6">
          <NavBar />
          <FirstSection />
        </div>
      </div>
      <section className=" bg-[#d8e0e7] mt-24">
        {loading && (
          <div className="fixed z-50 bg-[#56565654] inset-0 flex items-center justify-center">
            <Loader />
          </div>
        )}
        {Alert && (
          <div className="fixed z-50 bg-[#56565654] inset-0 flex items-center justify-center">
            <AlertComponent />
          </div>
        )}
        <div className="max-w-5xl w-full m-auto px-6 -translate-y-12">
          <LinkInput />
          <div className="my-6 flex flex-col gap-4">
            {data.map((item, index) => {
              return (
                <Link
                  originalLink={item.originalLink}
                  shortLink={item.shortLink}
                  id={item.id}
                  key={index}
                />
              );
            })}
          </div>
          <div className="flex items-center w-96 max-sm:w-full max-sm:text-center  flex-col gap-4  mt-28 mx-auto">
            <h4 className="font-bold text-slate-800 text-3xl max-sm:text-xl">
              Advanced Statistics
            </h4>
            <p className="leading-7 font-medium text-gray-400 max-sm:text-sm">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="flex items-center max-sm:mt-16 max-sm:flex-col">
            <Card
              image="/images/icon-brand-recognition.svg"
              title="Brand Recognition"
              text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your conten"
            />
            <span className="h-2 w-24 mt-3 max-sm:mt-0 max-sm:w-2 max-sm:h-24 bg-cyan-500"></span>

            <Card
              image="/images/icon-detailed-records.svg"
              title="Detailed Records"
              text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions"
              className="marginOne"
            />

            <span className="h-2 w-24 mt-3 max-sm:mt-0 max-sm:w-2 max-sm:h-24 bg-cyan-500"></span>
            <Card
              image="/images/icon-fully-customizable.svg"
              title="Fully Customizable"
              text=" Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
              className="marginTwo"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-fit max-sm:h-32 relative">
        <img
          src="/images/bg-boost-desktop.svg"
          alt="background"
          className="bg-[#3b3054] max-sm:h-full max-sm:object-cover"
        />
        <div className="absolute flex flex-col w-full inset-0  justify-center items-center gap-4">
          <h3 className="text-white font-semibold text-2xl max-sm:text-lg">
            Boost your links today
          </h3>
          <button className="bg-cyan-400 bg-opacity-90 hover:opacity-70 tracking-wide px-6 max-sm:px-3 max-sm:py-1 max-sm:text-sm py-2 text-lg rounded-full font-semibold text-white">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
