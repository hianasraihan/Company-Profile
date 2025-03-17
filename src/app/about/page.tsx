import Navbar from "../component/navbar";

export default function AboutPage() {
  return (
    <div className="bg-white min-w-screen min-h-screen flex items-center justify-center">
      <div className="md:flex items-center justify-between max-w-screen-xl mx-4">
        <div className="md:w-1/2 w-full p-4">
          <h2 className="text-3xl font-semibold mb-4">OUR STORY</h2>
          <p className="text-lg">
            The founder of TOMORO has travelled across the world for years and
            has been to over 30 countries including Southeast Asia, South Asia,
            the Middle East, North Africa, and the Americas. This enabled him to
            deeply feel people’s passion for coffee culture from different
            countries, races, and occupations.
          </p>
          <p className="text-lg mt-4">
            The founder strives to pursue the ultimate passion for coffee and
            quality living by creating unique coffee humanities for TOMORO,
            ultimately introducing the ‘coffee culture’ to every corner of the
            world, and letting every customer enjoy a worthy cup of good coffee.
          </p>
          <p className="text-lg mt-4">
            TOMORO refers to “tomorrow” and it means “embrace the goodness and
            yearn for tomorrow”. This is the original aspiration of TOMORO,
            striving to make every good cup of coffee with heart and encourage
            everyone to follow their heart bravely, feel the life with heart
            while yearning for tomorrow.
          </p>
        </div>

        <div className="w-1/2 p-4">
          <img
            src="/images/tomoro-about.png"
            alt="Deskripsi Gambar"
            className="mx-auto my-4 max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
