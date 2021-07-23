//hasil refactoring

//function constructor
function Angkot(sopir, trayek, penumpang, kas) {

    //membuat variable di object
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    
    var lokasi;
    var cariNama = (value) => {
        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == value){
                lokasi = i;return true;
            }                        
        }
        return false;
    }

    //membuat methode penumpangNaik di object
    this.penumpangNaik = (nama) => {
        if (cariNama(nama)) return false;
        else if (cariNama(undefined)) return this.penumpang[lokasi]=nama;        
        else return this.penumpang.push(nama);        
    }
    
    //membuat methode penumpangTurun di object
    this.penumpangTurun = function (nama, bayar) {
        if(cariNama(nama)){
            this.penumpang[lokasi] = undefined;
            this.kas += bayar;
            return this.penumpang;
        }else return false;
    }
}

//buat angkot dan mengisi data awal, nama variable dari plat nomornya
const D4326FE = new Angkot('Randi',['Dakota','Cicaheum'],[],0);

//pemanggilan angkot
console.log('pemanggilan angkot');
console.log(D4326FE);

//aksi
console.log('aksi');
console.log(D4326FE.penumpangNaik('Randi'));
console.log(D4326FE.penumpang);
console.log(D4326FE.penumpangNaik('udin'));
console.log(D4326FE.penumpang);
console.log(D4326FE.penumpangNaik('udin'));
console.log(D4326FE.penumpang);
console.log(D4326FE.penumpangNaik('usro'));
console.log(D4326FE.penumpang);
console.log(D4326FE.penumpangTurun('udin', 1000));
console.log(D4326FE.penumpang);
console.log(D4326FE.penumpangNaik('ucok'));
console.log(D4326FE.penumpang);
console.log(D4326FE.penumpangNaik('uyu'));
console.log(D4326FE.penumpang);

//nampilkan seluruh data object
console.log('Hasil akhir');
console.log(D4326FE.penumpang);
console.log(D4326FE.kas);
console.log(D4326FE);





//sebelum refactoring

//function constructor
function Angkot(sopir, trayek, penumpang, kas) {

    //membuat variable di object
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    //membuat methode di object
    this.penumpangNaik = (nama) => {
        if (this.penumpang.length == 0) {
            console.log(`${nama} naik ke angkot`);
            return this.penumpang.push(nama);
        }
        else {
            let c = true;
            this.penumpang.forEach((value, index, arr) => {
                if (value == undefined) {
                    arr[index] = nama;
                    c = false;
                    console.log(`${nama} naik ke angkot di kursi kosong`);
                    return arr;
                }
                else if (arr[index] == nama) {
                    console.log(`${nama} sudah ada di angkot !`);
                    c = false;
                    return arr;
                }
                else if (c == true && arr.length - 1 == index) {
                    console.log(`${nama} naik ke angkot di kursi baru`);
                    return arr.push(nama);
                }
            });
        }
    }

    this.penumpangTurun = function (nama, bayar) {
        if (this.penumpang.length == 0) {
            console.log('Angkot Kosong');
            return this.penumpang;
        }
        else {
            let c = true;
            this.penumpang.forEach((value, index, arr) => {
                if (arr[index] == nama) {
                    c = false;
                    console.log(`${value} turun dari angkot`);
                    this.kas += bayar;
                    return arr[index] = undefined;
                }
                else if (c == true && arr.length - 1 == index) {
                    console.log(`${nama} tidak ada di angkot !`);
                    return arr;
                }
            });
        }    
    }
}

//buat angkot, nama variable dari plat nomornya
const D4326FE = new Angkot();

//pemanggilan angkot
console.log('pemanggilan angkot');
console.log(D4326FE);

//mengisi data ke angkot
console.log('mengisi data ke angkot');
console.log(D4326FE.sopir = 'Randi');
console.log(D4326FE.trayek = ['Dakota', 'Alun-Alun']);
console.log(D4326FE.penumpang = []);
console.log(D4326FE.kas = 0);

//aksi
console.log('aksi');
console.log(D4326FE.penumpangNaik('Randi'));
console.log(D4326FE.penumpangNaik('udin'));
console.log(D4326FE.penumpangNaik('udin'));
console.log(D4326FE.penumpangNaik('usro'));
console.log(D4326FE.penumpangTurun('udin', 1000));
console.log(D4326FE.penumpangNaik('ucok'));
console.log(D4326FE.penumpangNaik('uyu'));

//nampilkan seluruh data object
console.log('Hasil akhir');
console.log(D4326FE.penumpang);
console.log(D4326FE.kas);
console.log(D4326FE);