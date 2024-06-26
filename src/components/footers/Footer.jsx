import { FooterCopyright } from "./FooterCopyright";

export const Footer = () => {
  return (
    <footer className="bg-white" style={{ background: "#f7f7f7" }}>
      <div className="px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 py-6 lg:py-8 ">
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900">
              Dukungan
            </h2>
            <ul className="text-gray-800 text-sm leading-4 font-light">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Pusat Bantuan
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  AirCover
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Anti-diskriminasi
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Dukungan disabilitas
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Opsi pembatalan
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Laporkan masalah lingkungan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900">
              Menjadi Tuan Rumah
            </h2>
            <ul className="text-gray-800 text-sm leading-4 font-light">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Jadikan tempat Anda Airbnb
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  AirCover untuk Tuan Rumah
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Sumber informasi menerima tamu
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Forum komunitas
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Menerima tamu dengan bijak
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Ikuti kelas Menerima Tamu secara gratis
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900">Airbnb</h2>
            <ul className="text-gray-800 text-sm leading-4 font-light">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Ruang Berita
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Fitur baru
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Karier
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Investor
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Penginapan darurat Airbnb.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
};
