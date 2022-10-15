 const img = document.createElement('img');

     const g = document.querySelectorAll('path');

     const tagScript = document.querySelector('script');

    const appearEmoticon = (gambar = '') => {

        document.getElementById("content-img").innerHTML =  "<img src='Assets/img/"+gambar+".jpg'/>";
        document.getElementById("judul").innerHTML = gambar;

    };

    g.forEach((inp) => {
        inp.addEventListener('click', function (event) {
            switch (event.target.id) {
                case 'Situs Pangguyangan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Situs Pangguyangan merupakan situs peninggalan tradisi megalitik dengan komponen-komponen yang terdiri dari teras berundak, struktur berundak, dan punden berundak serta batu-batu tegak. Akan tetapi, batu tegak tersebut (yang berada di puncak punden berundak) banyak disalahartikan oleh masyarakat sebagai makam dari Ki Genter Bumi, seorang tokoh yang dipercaya sebagai keturunan Syarif Hidayatullah. Banyak kegiatan ritual menyangkut keberadaan terduga makam ini yang menyebabkan situs terkenal, akibatnya pembangunan fasilitas di sekitar situs sebagai sarana para peziarah. Pembangunan fasilitas yang menyalahi prosedur pelestarian cagar budaya seperti pembuatan cungkup di puncak punden berundak, pembangunan mushola yang hampir menempel dengan struktur punden berundak, loket penarikan karcis yang berada dalam teras utama, dan toilet umum yang juga masih berada dalam area teras utama. Hingga yang terjadi pada tahun lalu, pembangunan sebuah gapura (dengan tinggi kurang lebih 7 meter, desain gapura yang meyerupai sebuah candi) yang sempat membuat geger Situs Pangguyangan."; 
                    break;
                case 'Situs Cengkuk':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Terletak di Kampung Cengkuk, dengan ketinggian sekitar kurang lebih 468-500 meter diatas permukaan laut. Lokasi situs ini terdapat di lembah";
                    break;
                case 'Titik pandang Teluk Palabuhanratu dari Cikakak':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, totam itaque illo cumque neque nesciunt ipsa? Accusantium fugiat voluptates";
                    break;
                case 'Pantai Karang Naya':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Tempat Wisata Pantai Karang Naya berada di Taman Wisata Alam Sukawayana, lokasi ini berada di wilayah administratif Kecamatan Cikakak, Kabupaten Sukabumi, Tempat Wisata Jawa Barat. TWA atau taman wisata alam ini berada di hadapan Hotel Inna Samudera Beach dan berbatasan langsung dengan pantai karang naya. Tempat wisata Karang Naya ini juga tidak jauh dari pantai Tempat Wisata Pelabuhanratu Geopark yang terkenal selain dengan keindahan alamnya tapi juga dengan mitos yang berbau mistis yang sangat kental sekali di wilayah ini, Pelabuhan Ratu ini sangat identik dengan legenda atau mitos Nyi Roro Kidul sang penguasa lautan.s";
                    break;
                case 'Pantai Cimaja':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Ombaknya banyak diburu oleh peselancar lokal maupun mancanegara. Pengunjung, membawa papan selancar pribadinya untuk merasakan ganasnya ombak pantai ini";
                    break;
                case 'Inna Samudera Beach Hotel':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Inna Samudra Beach Hotel adalah pilihan tepat untuk wisatawan yang mengunjungi Pelabuhan Ratu, karena menawarkan suasana yang sesuai untuk keluarga ditambah dengan fasilitas akan menyempurnakan masa menginap. Kamar tamu menawarkan fasilitas seperti tv layar datar, penyejuk udara, dan meja, dan tamu dapat terhubung dengan internet menggunakan wi-fi gratis yang ditawarkan oleh hotel.";
                    break;
                case 'Pantai Citepus':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Sepanjang 5 km garis pantai, pantai ini memiliki permukaan yang cenderung landai, Pasirnya berwaena coklat dan ombaknya tidak terlalu besar sehingga suasanannya lebih nyaman";
                    break;
                case 'Gua Lalay':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Wisatawan bisa melihat jutaan kelalawar yang menghuni Goa Lalay ini (Lalay = Kelelawar). Biasanya rombongan Kelelawar ini mulai keluar menjelang senja sekitar jam 17.00.";
                    break;
                case 'Cagar Alam Tangkuban Parahu':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  " Cagar alam yang terletak di Kelurahan Palabuhanratu, Kec. Palabuhanratu, Kab. Sukabumi, Jawa Barat. Kawasan ini terletak di tepi jalan Sukabumi – Pelabuhan Ratu (± 2 km sebelum Palabuhanratu). Kawasan hutan Tangkuban Perahu Palabuhanratu ditetapkan sebagai cagar alam berdasarkan Gb tgl 11 Juli 1919 No. 83 Stbl. 392 seluas 22 Ha.";
                    break;
                case 'Rafting S. Citarik':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Rafting Citarik atau Arung Jeram Citarik dilakukan di sungai Citarik dimana sungai rafting citarik sendiri adalah sungai yang berada didaerah rafting sukabumi dengan pemandangan alam yang masih sangat asri dan grade jeram yang cukup menantang. Tingkat kesulitan arung jeram citarik mencapai Grade 3, sehingga rafting sungai citarik cukup menegangkan bagi anda yang ingin memacu adrenalin di wisata air.";
                    break;
                case 'Kasepuhan Sinar Resmi':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Kasepuhan Sinar Resmi yang dipimpin oleh Abah Asep Nugraha ini berada di Kecamatan Cisolok, dan merupakan keragaman salah satu kampung adat Kasepuhan Banten Kidul yang masih dipertahankan kelestariannya. Kasepuhan Sinar Resmi menjadi bagian dari aspek budaya yang tidak terpisahkan dari Geopark Ciletuh.";
                    break;
                case 'Kasepuhan Cipta Mulya':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Kasepuhan Ciptamulya merupakan bagian dari Kesatuan adat Banten Kidul, bersama sejumlah kasepuhan lainnya yang tersebar di wilayah Provinsi Jawa Barat dan Banten. Secara administratif, pusat Kasepuhan Ciptamulya terletak di Kampung Ciptamulya, Desa Sinar Resmi, Kecamatan Cisolok, Kabupaten Sukabumi, Provinsi Jawa Barat. Warga Kasepuhan Ciptamulya terikat oleh adat istiadat warisan leluhur yang khas dan terkristalkan dalam satu lembaga adat yang disebut kasepuhan.";
                    break;
                case 'Geyser Hotspring Cisolok':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Geyser dapat terjadi karena adanya kombinasi dari munculnya panas sebagai akibat aktivitas magma di oerut bumi dan sistem saluran di bawah tanah.";
                    break;
                case 'Puncak Habibie':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Puncak Habibie terletak di dataran tinggi Desa Pasirbaru, Kecamatan Cisolok, Kabupaten Sukabumi, Jawa Barat. Sebelum bernama Puncak Habibie, masyarakat sekitar mengenal tempat itu dengan nama Puncak Kembang.";
                    break;
                case 'Kasepuhan Cipta Gelar':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Berdiri sejak tahun 1368, kampung ini masih memegang kuat adat dan ajaran leluhur seperti ciri khas lokasi, bentuk rumah, serta tradisi yang masih dijalankan oleh penduduknya.";
                    break;
                case 'Curug Cikaso':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Curug Cikaso begitu mempesona, dan merupakan salah satu wisata andalan yang lokasinya berada di selatan Kabupaten Sukabumi. Awalnya curug atau air terjun ini bernama Curug Luhur, namun karena aliran airnya berasal dari anak Sungai Cikaso akhirnya dikenal dengan nama Curug Cikaso.";
                    break;
                case 'Komplek Batuan Ofiolit Gunung Beas':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Ofiolit merupakan penggalan kerak samudera dan lapisan mantel atas di bawahnya yang telah terangkat atau terpindahkan dan tersingkap di bagian tepi kerak benua. Kata ofiolit berasal dari Bahasa Yunani ophios (ular) dan lithos (batu).";
                    break;
                case 'Pantai Batununggul':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Destinasi wisata yang eksotis ini bak surga tersembunyi yang tak perlu diragukan lagi keindahan pantainya. Tidak hanya wisatawan lokal yang datang, namun tidak sedikit juga wisatawan yang berasal dari mancanegara untuk menikmati keindahan alam dan panorama yang mempesona. Salah satunya di Pantai Batu Nunggul yang berada di Kabupaten Pangandaran. Menurut cerita masyarakat sekitar, keberadaan batu karang besar di tengah pantai berbentuk seperti tunggul. Jika dalam bahasa sunda berarti tanda atau ciri berbentuk batu panjang yang sering digunakan serta menjadi tanda biasanya pada tanah ataupun petilasan.";
                    break;
                case 'Komplek Batuan Unik':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, totam itaque illo cumque neque nesciunt ipsa? Accusantium fugiat voluptates";
                    break;
                case 'Pulau Mandra':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Pulau kecil yang indah pemandangannya ini menjadi tempat yang bagus dan menyenangkan, menggembirakan untuk disinggahi, sambil bercengkerama dan makan-makan.";
                    break;
                case 'Pulau Karang Daeu':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Tak jauh dari pantai, terdapat tebing Karang Daeu yang cukuup curam. Bagi Anda yang menyukai tantangan, ketinggian tebing ini bisa menjadi tempat panjat tebing yang menguji adrenalin.";
                    break;
                case 'Titik Pandang Teluk Palabuhanratu &#38; Teluk Ciletuh dari Cikalapa':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, totam itaque illo cumque neque nesciunt ipsa? Accusantium fugiat voluptates";
                    break;
                case 'Titik Pandang Teluk Ciletuh dari Puncak Darma':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Dari sini, kita dapat melihat panorama Mega Amfiteater Ciletuh sebagai bukti struktur geologi berupa sesar normal yang meghasilkan sebuah longsoran besar berbentuk tapal kuda";
                    break;
                case 'Curug Awang':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Terbentuk akibat struktur geologi berupa sesar normal sehingga ada blok atau bagian yang turun. Batuan utama penyusunnya merupakan bagian dari Formasi Jampang, Cikarang.";
                    break;
                case 'Curug Tengah':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Obyek Wisata Curug Tengah di Cibenda Sukabumi Jawa Barat memiliki pesona keindahan yang sangat menarik untuk dikunjungi. Sangat di sayangkan jika anda berada di kota sukabumi tidak mengunjungi wisata curug yang mempunyai keindahan yang tiada duanya tersebut.";
                    break;
                case 'Curug Puncakmanik':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Curug Puncak Manik merupakan salah satu obyek wisata di Sukabumi yang menarik untuk dikunjungi wisatawan. Berada di kawasan Geopark Ciletuh Sukabumi, menjadikan curug ini begitu diminati wisatawan. Tidak hanya wisatawan dari Sukabumi saja, tetapi juga wisatawan dari luar daerah.";
                    break;
                case 'Perkebunan Buah Naga':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Keberadaan kebun buah naga di Desa Neglasari Kecamatan Nyalindung, Kabupaten Sukabumi, menjadi daya tarik bagi pengunjung atau wisatawan. Warga bisa memetik langsung buah naga dari pohon dan memakannya.";
                    break;
                case 'Titik pandang mega amfiteater dari Puncak Tugu':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Menawarkan pemandangan sejumlah curug hingga tebing dan hutan yang eksotik. Anda juga bisa bermalam di sini dan menyewa tenda untuk menikmati langit malam yang luar biasa.";
                    break;
                case 'Titik pandang mega amfiteater dari Panenjoan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, totam itaque illo cumque neque nesciunt ipsa? Accusantium fugiat voluptates";
                    break;
                case 'Titik pandang mega amfiteater dari Cekdam':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, totam itaque illo cumque neque nesciunt ipsa? Accusantium fugiat voluptates";
                    break;
                case 'Hutan Konservasi Cipeucang':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Hutan Cipeucang merupakan hutan konservasi.Hutan Konversi adalah hutan yang ditetapkan untuk berbagai tujuan dan kepentingan pembangunan di luar bidang kehutanan seperti; trasmigrasi, pertambangan, perkebunan, peternakan, pencetakan sawah baru, dan lain sebagainya.";
                    break;
                case 'Titik pandang mega amfiteater dari Mekarsakti':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, totam itaque illo cumque neque nesciunt ipsa? Accusantium fugiat voluptates";
                    break;
                case 'Makam Mbah Durak':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Ada 6 makam di kompleks bangunan seluas 10 kali 6 meter dengan tembok pembatas  tersebut. Disana juga terdapat beberapa makam lainnya, termasuk sebuah tajuk atau mushola  ukuran 4 X 3 meter. Makam ini banyak dikunjungi masyarakat untuk berziarah, baik dari wilayah Pajampangan, maupun luar daerah.";
                    break;
                case 'Curug Cikanteh':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Curug Cikanteh memiliki ciri khas yang terdiri dari tiga tingkatan. Nama Curug Cikanteh ternyata berasal dari sungai Cikanteh dan memiliki ketinggian sekitar 60 meter";
                    break;
                case 'Curug Sodong':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Terbentuk akibat struktur geologi berupa sesar normal sehingga ada blok atau bagian yang turun. Batuan utama penyusunnya merupakan bagian dari Formasi Jampang - Cikarang.";
                    break;
                case 'Curug Cimarinjung':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Curug ini batuan dasarnya berupa perlapisan batuan sendimen berjenis batu pasir tufan dan breksi terbentuk karena proses tektonik yang membentuk Mega Amfiteater Ciletuh.";
                    break;
                case 'Pantai Palangpang':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Bentuk pantai ini membetuk tapal kuda, karena juga merupakan bagian dasar dari lembah mega amfiteater Ciletuh yang terbentuk karena struktur geologi yang terjadi pada miosen Atas";
                    break;
                case 'Hutan Konservasi Mangrove dan Budidaya Ikan Sidat':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, totam itaque illo cumque neque nesciunt ipsa? Accusantium fugiat voluptates";
                    break;
                case 'Komplek Melange Gunung Badak':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Kompleks Gunung Badak, Kompleks Cikepuh-Citisuk, dan Kompleks Citirem berada di Teluk Ciletuh, merupakan lokasi dari kumpulan batuan Pra-Tersier. Daerah Teluk Ciletuh berada di Kabupaten Sukabumi, Provinsi Jawa Barat. Batuan Pra-Tersier di Ciletuh dikenal luas sebagai tektonik melange yang terbentuk dari penujaman lempeng Indo-Australia terhadap Eurasia selama kala Kapur- Paleosen.";
                    break;
                case 'Pulau Manuk':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Pantai Pulo Manuk dulu sebagai pulau yang memiliki banyak tipe burung yang seringkali berkunjung di pulau itu. Sampai saat ini orang juga menyebutkan tempat ini sebagai Pulo. Di pantai ini banyak spesies monyet yang berkeliaran. Panorama dan keunikan-nya jadi daya magnet tertentu untuk beberapa pengunjung banyak yang datang khususnya di akhir minggu.";
                    break;
                case 'Batu Naga dan Batu Batik':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Merupakan hamparan berbatuan berusia jutaan tahun yang menghadap langsung ke laut SUkabumi Selatan. Batu Punggung Naga merupakan kawasan zona inti Geopark Ciletuh PelabuhanRatu";
                    break;
                case 'Pantai Cikepuh':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Objek wisata Pantai yang berada di kawasa Geopark Ciletuh Kabupaten Sukabumi tak hanya menyajikan keindahan. Tempat itu juga menjadi lokasi mengasyikan bagi para pemancing.";
                    break;
                case 'Tanjung &#38; Gua Sodong Parat':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Gua laut Sodong Parat terletak di tanjung tidak jauh dari pantai Cikepuh. Gua ini menumbus sisi lain dari tebing dengan panjang gua mencapai 7 meter. Pada saat pasang, gua ini dapat dilalui dengan menaiki kanu, tetapi pada saat surut, gua dapat dilalui berjalan kaki. Batuannya berupa ofiolit yang terdiri atas gabro dan amfibolit bertekstur sangat kasar";
                    break;
                case 'Suaka Margasatwa Cikepuh':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "merupakan kawasan hutan konservasi di pesisir selatan Sukabumi yang memiliki fungsi pokok sebagai kawasan pengawetan keanekaragaman tumbuhan dan satwa serta ekosistemnya yang juga berfungsi sebagai wilayah sistem penyangga kehidupan.";
                    break;
                case 'Komplek Batuan Ofiolit Tegal Pemakanan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "kompleks batuan beku yang terdiri dari anggota basal, gabro, dan peridotit. Secara spesifik ofiolit adalah kelompok ultrabasa temporal dan spasial, yang terkait dengan batuan felsik, yang berhubungan dengan periode pencairan dan proses diferensiasi magmatik di lingkungan tektonik tertentu."
                    break;
                case 'Komplek Batuan Metamorfik Pasir Luhur':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "n kompleks batuan yang disusun oleh batuan: ultrabasa, metamorfik, sedimen laut dalam, sedimen benua. Semua kelompok batuan tersebut terdapat sebagai bongkah-bongkah beraneka ukuran yang terkurung dalam matriks serpih tergerus, dengan kontak antarblok";
                    break;
                case 'Pantai Ujunggenteng':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Destinasi wisata yang cocok bagi Anda yang ingin piknik menikmati keindahan alam, pasir putih, suasana asri dan jauh dari hiruk pikuk perkotaan.";
                    break;
                case 'Reruntuhan Dermaga Belanda':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Menurut Voderman, dibangunnya pelabuhan modern adalah saat VOC hancur, tepatnya pada 1799. VOC juga membangun gudang dan pelabuhan di Palabuhanratu untuk mengamankan aset mereka sebelum Daendels datang. Hal ini dikonfirmasi Daendels saat melakukan ekspedisi mengamankan aset tersebut beberapa bulan sesudah dia menginjakan kaki di Batavia. Ketika Raffles masuk, wilayah ini juga dipergunakan oleh Andries de Wilde untuk mengkapalkan kopi yang tidak dia jual kepada pemerintah. Hal ini menyebabkan dia dianggap melekukan peyelundupan kopi, padahal alasan utamanya karna harga kopi yang ditetapkan pemerintah terlalu murah sehingga petani merugi.";
                    break;
                case 'Pantai Muara Cikarang':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Fasilitas yang ada di Pantai Muara Gembong ini juga cukup lengkap. Diantaranya yaitu area parkir yang luas, toilet, musholla, dan ada juga berbagai penginapan dengan harganya yang terjangkau.  Bukan hanya itu saja, terdapat juga restoran dengan berbagai macam menu hasil laut yang istimewa seperti olahan udang, ikan, rumput laut dan masih banyak lagi lainnya";
                    break;
                case 'Kampung Batik Purwasedar':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML = "";
                    break;
                case 'Konservasi Penyu':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Di tempat konservasi ini pengunjung diperbolehkan untuk bercengkrama dengan biota laut ini, mulai mengelus, memberi makan bahkan berphoto bersama penyu-penyu lucu yang berada di penangkaran tersebut. Jika sedang beruntung pengunjung diperbolehkan ikut dalam pelepasan tukik (anak panyu) ke lautan bersama pengelola konservasi.";
                    break;
                case 'Curug Lugur Cigangsa':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Air terjun ini memiliki tiga tingkatan. Keelokannya dapat dinikmati dari atas dan bawah. Latar dinding batunya yang berwarna kehitaman juga menambah keunikan curug ini.";
                    break;
                case 'Pantai Karang Bolong':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Secara metafisika Pantai Karang Bolong ini disebut-sebut sebagai gerbang dimensi menuju kerajaan gaib yang masih dibawah kekuasaan kerajaan pantai selatan. Gerbang dimensi tersebut digambarkan yakni sebuah batuan karang yang memiliki lubang di bagian tengahnya, dengan hiasan pepohonan yang cukup lebat di bagian atasnya dan segaris lurus dengan Gunung Krakatau.";
                    break;
                case 'Gua Gunungsungging':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Goa Gunung Sungging. Sebuah Gua yang berada di Kecamatan Surade, Kabupaten Sukabumi, ini punya pemandangan yang eksotis.Gua Gunung Sungging terletak di Kampung Cigintung, Desa Gunungsungging, Kecamatan Surade. Lokasinya hanya sekitar 4 kilometer dari Kantor Kecamatan Surade. Untuk masuk ke gua ini, pengunjung harus menjaga keselamatan dan membawa perlengkapan penerangan. Ada baiknya pengunjung membawa lampu baterai atau head lamp.Untuk akses, pengunjung bisa memilih dua pintu masuk. Pertama dari bawah goa dan satu lagi dari atas goa.Di dalam gua akan ditemui banyak formasi stalaktit, stalakmit dan batuan yang berbentuk unik. Ditambah aliran sungai bawah tanah menambah eksotisnya tempat yang satu ini.";
                    break;
                case 'Kekar Kolom':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Bunker Jepang':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  " Di Komplek Satuan Radar (Satrad) 216 Cibalimbing Surade, Kabupaten Sukabumi terdapat salah satu bukti sejarah bekas peninggalan zaman penjajahan Jepang. Peninggalan sejarah tersebut berupa bunker yang berfungsi sebagai benteng pertahanan. Terdapat tiga bunker yang masing-masing berukuran cukup besar. Bunker pertama memiliki panjang 13,5 meter, lebar 4,1 meter, tinggi 160 sentimeter, dengan dua pintu di bagian depan dan belakang. Lebar pintunya sekitar 116 sentimeter, tinggi 100 sentimeter, kedalaman 490 sentimeter. Pintu tersebut memiliki empat lubang jendela berukuran panjang 56 sentimeter, tinggi 25 sentimeter.";
                    break;
                case 'Gua Cukcrukan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Luhur':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Kondisi Curug Luhur masih alami dan terjaga keasliannya. Berada di kaki Gunung Gede Pangrango membuat suasana sejuk nan menyegarkan langsung terasa begitu memasuki Curug Luhur.";
                    break;
                case 'Curug Puncakjeruk':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Curug Puncak Jeruk yang berada di Desa Mekarmukti, Kecamatan Waluran, Kabupaten Sukabumi memiliki keindahan alam yang sangat mumpuni.";
                    break;
                case 'Gua Maung &#38; Lava Bantal Cikarang':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Gua Monyet':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Nangsi':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Curug yang pertama kali diperkenalkan ke dunia maya oleh Kang Hidayat Asep ini berada di Kampung Lebak Nangsi, Desa Sukamukti Kecamatan Waluran Kabupaten Sukabumi. Alasan pemberian nama Curug nangsi 3 In 1 ini tak terlepas dari lokasi curug itu sendiri, karena dalam satu lokasi terdapat tiga curug sekaligus. Curug tersebut adalah Curug cipoho, curug Cibenda dan Curug Cinangsi.";
                    break;
                case 'Curug Puncakjeruk_3':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Gentong':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Obyek Wisata Curug Gentong di Cibalok Waluran Sukabumi Jawa Barat adalah salah satu tempat wisata yang berada di cibalok waluran, Waluran Mandiri, Waluran, Sukabumi, Jawa Barat 43175, Indonesia. Obyek Wisata Curug Gentong di Cibalok Waluran Sukabumi Jawa Barat adalah tempat wisata yang ramai dengan wisatawan pada hari biasa maupun hari liburan. Tempat ini sangat indah dan bisa memberikan sensasi yang berbeda dengan aktivitas kita sehari hari. Obyek Wisata Curug Gentong di Cibalok Waluran Sukabumi Jawa Barat memiliki pesona keindahan yang sangat menarik untuk dikunjungi. Sangat di sayangkan jika anda berada di kota sukabumi tidak mengunjungi wisata alam yang mempunyai keindahan yang tiada duanya tersebut.";
                    break;
                case 'Pos Pengamatan Bulan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Vihara Dewi Kwan Im':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Vihara Nam Hai Kwan Se Im Pu Sa di Daerah Loji tepatnya Desa Kertajaya, Kecamatan Simpenan, Sukabumi, Jawa Barat, merupakan tempat ibadah yang unik. Tidak hanya digunakan sebagai tempat ibadah, vihara ini menjadi distinasi yang menarik bagi wisatawan. Letaknya yang diatas bukit, menjadikan vihara ini memiliki pemandangan laut yang indah dan eksotis.";
                    break;
                case 'Pantai Loji':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Di tempat ini, ternyata tak hanya dapat menikmati keindahan laut. Namun,  khususnya, bagi pengunjung yang beragama Budha, bisa beribadah.";
                    break;
                case 'Jembatan Bagbagan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Jembatan tersebut memiliki cerita panjang tentang penderitaan rakyat indonesia dan membentang diatas sungai Cimandiri atau penghubung dari Desa Jayanti ke Desa Cidadap.";
                    break;
            }
        });
    });

