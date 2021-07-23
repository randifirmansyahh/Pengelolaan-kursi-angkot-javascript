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