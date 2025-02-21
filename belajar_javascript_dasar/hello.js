        // Variabel input
        let nama = "Nazwa";
        document.writeln("<br>Nama: "+nama);
        let usia = 20;
        document.writeln("<br>Usia: "+usia);
        let pernah_ikut_lomba = false;
        document.writeln("<br>Pernah ikut lomba: "+pernah_ikut_lomba);
        let waktu_lari = 15.5;
        document.writeln("<br>Waktu lari: "+waktu_lari);
        document.writeln("<hr>")

        // Menentukan apakah memenuhi syarat waktu (< 12 detik)
        let memenuhi_syarat_waktu = (waktu_lari < 12)
        document.writeln("<br>Memenuhi syarat waktu? "+memenuhi_syarat_waktu);

        // Menentukan apakah peserta diterima
        let apakah_diterima = memenuhi_syarat_waktu ||  pernah_ikut_lomba;
        document.writeln("<br>Apakah diterima? "+apakah_diterima);

        if(apakah_diterima){
            document.writeln("Selamat, Anda diterima sebagai peserta lomba");
        }else{
            document.writeln("Maaf anda tidak diterima sebagai peserta lomba");
            }
