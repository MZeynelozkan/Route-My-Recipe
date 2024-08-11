import Navbar from "../components/Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <div className="w-full px-5 mt-14 h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1300px] mx-auto gap-9">
          <div className="text-center md:text-left place-self-center space-y-14">
            <h1 className="font-extrabold text-4xl leading-relaxed max-w-fit text-green-600 mx-auto md:mx-0">
              <span className="text-blue-800">Our Vision:</span> Everyone's Best
              Discovering Delicious Recipes
            </h1>
            <div className="space-y-6">
              <p className="leading-relaxed font-extrabold">
                We are here for you to experience the joy and art of cooking at
                home. We are here for you, not only to satisfy your taste buds,
                but also We offer recipes that will also delight your eyes. Make
                every moment you spend in the kitchen special and enjoyable to
                ensure that you create flavors that will impress your guests we
                want to help.
              </p>
              <p className="leading-relaxed font-extrabold">
                Our dishes are expertly prepared with the freshest ingredients
                and enriched with our experience. Our recipes each step you find
                will give you more confidence in the kitchen will bring you joy.
                Creating your favorite dishes for you, it's time for a gourmet
                experience at home. Come on, step into the kitchen Throw it away
                and enjoy the real pleasure of cooking!
              </p>
            </div>
          </div>
          <img
            className="place-self-center w-1/2 md:w-3/4 mx-auto"
            src="Food.jpg"
            alt="food picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
