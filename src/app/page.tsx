

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen relative bg-[url('/images/Tomoro.png')] bg-cover bg-right bg-no-repeat"
      // style={{
      //   backgroundImage: "url('/images/Tomoro.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div
        className="absolute top-1/2 left-1/12 transform -translate-y-1/2 px-8 text-black z-10"
        style={{
          padding: "20px", 
        }}>
        <h1 className="text-4xl font-bold">HEY !</h1>
        <p className="text-2xl font-bold mb-10">ENJOY YOUR COFFEE TIME</p>
        <p className="text-xl mb-2">100% ARABICA COFFEE</p>
        <p className="text-lg mb-10">FRESHLY ROASTED & BREWED</p>
        <p className="text-2xl font-semibold">@TOMORO</p>
      </div>
    </div>
  );
}
