import Navbar from "../component/navbar";

export default function DownloadApp() {
  return (
    <div className="bg-white min-w-screen min-h-screen">
      <div className="flex items-center justify-center p-4 mt-12"> 
        <div className="text-left mr-6"> 
          <h1 className="text-3xl font-bold mb-5">DOWNLOAD NOW!</h1> 
          <p className="text-xl">DOWNLOAD APP TO GET NEW MEMBER REWARDS.</p> 
        </div>
        <img
          src="/images/downloadApp.png"
          alt="Deskripsi Gambar"
          className="w-1/3 h-auto" 
        />
        
      </div>
    </div>
  );
}
