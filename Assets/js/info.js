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
                    document.getElementById("content-desc").innerHTML =  ""; 
                    break;
                case 'Situs Cengkuk':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Titik pandang Teluk Palabuhanratu dari Cikakak':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pantai Karang Naya':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pantai Cimaja':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Inna Samudera Beach Hotel':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pantai Citepus':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Gua Lalay':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Wisatawan bisa melihat jutaan kelalawar yang menghuni Goa Lalay ini (Lalay = Kelelawar). Biasanya rombongan Kelelawar ini mulai keluar menjelang senja sekitar jam 17.00.";
                    break;
                case 'Cagar Alam Tangkuban Parahu':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Rafting S. Citarik':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Kasepuhan Sinar Resmi':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Kasepuhan Cipta Mulya':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Geyser Hotspring Cisolok':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Geyser dapat terjadi karena adanya kombinasi dari munculnya panas sebagai akibat aktivitas magma di oerut bumi dan sistem saluran di bawah tanah.";
                    break;
                case 'Puncak Habibie':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Kasepuhan Cipta Gelar':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Berdiri sejak tahun 1368, kampung ini masih memegang kuat adat dan ajaran leluhur seperti ciri khas lokasi, bentuk rumah, serta tradisi yang masih dijalankan oleh penduduknya.";
                    break;
                case 'Curug Cikaso':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Komplek Batuan Ofiolit Gunung Beas':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pantai Batununggul':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Komplek Batuan Unik':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pulau Mandra':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pulau Karang Daeu':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Tak jauh dari pantai, terdapat tebing Karang Daeu yang cukuup curam. Bagi Anda yang menyukai tantangan, ketinggian tebing ini bisa menjadi tempat panjat tebing yang menguji adrenalin.";
                    break;
                case 'Titik Pandang Teluk Palabuhanratu &#38; Teluk Ciletuh dari Cikalapa':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Titik Pandang Teluk Ciletuh dari Puncak Darma':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Awang':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Terbentuk akibat struktur geologi berupa sesar normal sehingga ada blok atau bagian yang turun. Batuan utama penyusunnya merupakan bagian dari Formasi Jampang, Cikarang.";
                    break;
                case 'Curug Tengah':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Puncakmanik':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Perkebunan Buah Naga':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Titik pandang mega amfiteater dari Puncak Tugu':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "Menawarkan pemandangan sejumlah curug hingga tebing dan hutan yang eksotik. Anda juga bisa bermalam di sini dan menyewa tenda untuk menikmati langit malam yang luar biasa.";
                    break;
                case 'Titik pandang mega amfiteater dari Panenjoan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Titik pandang mega amfiteater dari Cekdam':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Hutan Konservasi Cipeucang':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Titik pandang mega amfiteater dari Mekarsakti':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Makam Mbah Durak':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Cikanteh':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
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
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Hutan Konservasi Mangrove dan Budidaya Ikan Sidat':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Komplek Melange Gunung Badak':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pulau Manuk':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Batu Naga dan Batu Batik':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pantai Cikepuh':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Tanjung &#38; Gua Sodong Parat':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Suaka Margasatwa Cikepuh':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Komplek Batuan Ofiolit Tegal Pemakanan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Komplek Batuan Metamorfik Pasir Luhur':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pantai Ujunggenteng':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Reruntuhan Dermaga Belanda':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pantai Muara Cikarang':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Kampung Batik Purwasedar':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Konservasi Penyu':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Lugur Cigangsa':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pantai Karang Bolong':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Gua Gunungsungging':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Kekar Kolom':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Bunker Jepang':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Gua Cukcrukan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Luhur':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Puncakjeruk':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
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
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Puncakjeruk_3':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Curug Gentong':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pos Pengamatan Bulan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Vihara Dewi Kwan Im':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Pantai Loji':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
                case 'Jembatan Bagbagan':
                    appearEmoticon(event.target.id);
                    document.getElementById("content-desc").innerHTML =  "";
                    break;
            }
        });
    });

