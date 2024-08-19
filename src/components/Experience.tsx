import React from "react";

type Props = {};

function Experience({}: Props) {
  return (
    <div>
      <h1
        className={
          "text-xl mb-4 font-bold  bg-gradient-to-br from-orange-600 to-amber-300 text-transparent bg-clip-text"
        }
      >
        Pengalaman
      </h1>
      <div>
        <div className="flex items-center justify-between lg:w-1/3">
          <h2 className="text-lg font-bold bg-gradient-to-br from-orange-600 to-amber-300 text-transparent bg-clip-text">
            Web developer
          </h2>
          <p>Paruh waktu</p>
        </div>
        <p>PT LOKO Sistem Terintegrasi</p>

        <p className="text-sm font-light mt-1">Oktober 2023 - Januari 2024</p>
        <p className="text-sm font-light mt-1">Palembang, Indonesia · On-site</p>
        <ul className="list-disc ml-5 mt-2 text-sm font-light [&>li]:mb-1.5">
          <li>
            Berkolaborasi dalam perancangan, pengembangan, dan implementasi sistem informasi kampus
            di Palembang . Bertanggung jawab atas pembuatan fitur-fitur baru, pemeliharaan sistem,
            dan peningkatan fungsionalitas guna memenuhi kebutuhan kampus.
          </li>
          <li>
            Aktif terlibat dalam pengembangan sistem informasi Rumah sakit. Menanggung tanggung
            jawab dalam desain aplikasi, pengujian, implementasi sistem, serta memastikan
            ketersediaan fitur yang mendukung operasional rumah sakit secara efektif.
          </li>
          <li>
            Menjamin integrasi yang tepat antara sistem informasi yang dikembangkan dan
            infrastruktur yang ada di kedua institusi. Melaksanakan pemeliharaan rutin guna menjamin
            keandalan dan kinerja sistem yang optimal.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
