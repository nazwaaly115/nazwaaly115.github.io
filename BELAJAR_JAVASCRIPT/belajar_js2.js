console.log("ini untuk menampilkan pesan log yang bentuknya informatif")
console.warn("ini untuk menampilkan pesan log yang bentuknya warning")

const nama = ["Dwi","Rizki","Manggala","Putra"];

console.log("Isi array:");
console.log(nama);
console.log("Total isi array:")
console.log(nama.length);

console.log("----")

nama.push("Nasution");
console.log("Isi array setelah ditambahkan data:");
console.log(nama);
console.log("Total isi array:")
console.log(nama.length);

console.log("----")
console.log("Isi array dengan index nomor 2:")
console.log(nama[2]);

console.log("----")
console.log("Mencoba merubah isi array index ke 3:");
nama[3] = "Putri";
console.log(nama);

console.log("----")
console.log("Mencoba delete index ke 3:");
delete nama[3]
console.log(nama);