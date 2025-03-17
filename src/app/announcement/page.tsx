import Navbar from "../component/navbar";

export default function Announcement() {
  return (
    <div className="bg-white min-w-screen min-h-screen flex flex-col items-center pt-10">
      <img
        src="/images/tomoro_1.png"
        alt="Deskripsi Gambar"
        className="w-[225px] h-auto mt-8"
      />

      <div className="text-left mx-auto max-w-4xl px-8 mt-15">
        {" "}
        <h1 className="text-3xl font-bold mb-6">
          TOMORO COFFEE Umumkan Perubahan Kepemimpinan: Dorong Digitalisasi dan
          Peningkatan Merek
        </h1>
        <p className="text-lg mb-4">
          Jakarta, 21 Februari 2025 – Dalam rangka mendukung transformasi
          strategis perusahaan, TOMORO COFFEE kini memperluas fokus
          pengembangannya dari ekspansi gerai menuju peningkatan merek dan
          pembangunan pusat digitalisasi. Sebagai bagian dari perubahan ini,
          perusahaan dengan resmi mengumumkan restrukturisasi kepemimpinan.
        </p>
        <p className="text-lg mb-4">
          CEO Global saat ini, Star Yuan, telah menyelesaikan proses transisi
          tugas manajerial yang direncanakan. Dewan Direksi telah menunjuk Lulu
          Yang, CIO dari Sands Talk Capital dan perwakilan pemegang saham
          perusahaan TOMORO COFFEE, sebagai CEO Global sementara untuk memimpin
          manajemen perusahaan selama periode transisi.
        </p>
        <p className="text-lg mb-4">
          Keputusan ini telah dipertimbangkan dengan matang melalui diskusi
          bersama antara manajemen dan pemangku kepentingan, mencerminkan
          komitmen TOMORO COFFEE dalam mengoptimalkan strategi bisnis serta
          memperkuat posisinya sebagai jaringan kedai kopi terkemuka secara
          global. Meskipun tidak lagi menjabat sebagai CEO, Star Yuan tetap
          berperan sebagai pemegang saham dan akan terus memberikan perhatian
          terhadap perkembangan perusahaan, yang menunjukkan keyakinannya
          terhadap masa depan merek TOMORO COFFEE.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Fokus pada Digitalisasi untuk Mendorong Pertumbuhan
        </h2>
        <p className="text-lg mb-4">
          Kami percaya bahwa di bawah kepemimpinan dewan direksi, manajemen
          perusahaan akan semakin efektif, operasional bisnis akan lebih
          optimal, serta pertumbuhan perusahaan akan semakin pesat.
        </p>
        <p className="text-lg mb-4">
          Ke depan, TOMORO COFFEE akan berfokus pada reformasi di beberapa area
          utama:
        </p>
        <ul className="list-inside list-disc mb-4">
          <li>
            Penguatan Digitalisasi – Mengintegrasikan teknologi AI untuk
            meningkatkan efisiensi operasional di sektor B2B dan B2C, guna
            memberikan layanan yang lebih optimal bagi pelanggan dan mitra
            bisnis.
          </li>
          <li>
            Peningkatan Merek – Melalui inovasi layanan, keunggulan operasional,
            dan strategi branding yang unik, perusahaan bertujuan untuk
            meningkatkan kesadaran dan reputasi merek di tingkat global.
          </li>
        </ul>
        <p className="text-lg mb-4">
          Dengan adanya penyesuaian ini, TOMORO COFFEE akan terus memberikan
          layanan terbaik kepada pelanggan dan menunjukan eksistensinya sebagai
          jaringan kedai kopi terkemuka di dunia.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Komitmen Berkelanjutan dan Pandangan ke Depan
        </h2>
        <p className="text-lg mb-4">
          Kami ingin meyakinkan pelanggan, mitra bisnis, serta seluruh pemangku
          kepentingan bahwa perubahan kepemimpinan ini akan semakin memperkuat
          kapabilitas perusahaan dalam memberikan layanan terbaik. TOMORO COFFEE
          tetap berkomitmen untuk menghadirkan pengalaman kopi berkualitas serta
          terus mengusung semangat “Brewing Passion Today, Embracing a Better
          TOMORO.”
        </p>
        <p className="text-lg mb-4">
          Kami mengucapkan terima kasih atas dukungan dan kepercayaan yang terus
          diberikan oleh pelanggan TOMORO COFFEE. Ke depan, kami akan terus
          berinovasi demi memberikan pengalaman terbaik bagi para pecinta kopi.
        </p>
      </div>
    </div>
  );
}
