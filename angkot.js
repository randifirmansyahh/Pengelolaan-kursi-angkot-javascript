var penumpang = ['ucok', undefined, 'udin'];

var tambahPenumpang = (nama, penumpang) => {
    if (penumpang.length == 0) return penumpang.push(nama);
    else {
        let c = true;
        penumpang.forEach((value, index, arr) => {
            if (value == undefined) {
                arr[index] = nama;
                c = false;
                return arr;
            }
            else if (arr[index] == nama) {
                console.log('Nama penumpang sudah ada !');
                c = false;
                return arr;
            }
            else if (c == true && arr.length - 1 == index) {
                return arr.push(nama);
            }
        });
    }
}

var hapusPenumpang = (nama, penumpang) => {
    if (penumpang.length == 0) {
        console.log('Angkot Kosong');
        return penumpang;
    }
    else {
        let c = true;
        penumpang.forEach((value, index, arr) => {
            if (arr[index] == nama) {
                c = false;
                console.log(`${value} turun dari angkot`);
                return arr[index] = undefined;
            }
            else if (c == true && arr.length - 1 == index) {
                console.log('Tidak ada nama yang sesuai');
                return arr;
            }
        });
    }
}

console.log(penumpang);
tambahPenumpang('Randi', penumpang);
console.log(penumpang);
tambahPenumpang('Randi', penumpang);
console.log(penumpang);
tambahPenumpang('usro', penumpang);
console.log(penumpang);
tambahPenumpang('usro', penumpang);
console.log(penumpang);
tambahPenumpang('sg', penumpang);
console.log(penumpang);

//hapus
hapusPenumpang('Randi', penumpang);
console.log(penumpang);
hapusPenumpang('Randi', penumpang);
console.log(penumpang);

//tambah lagi
tambahPenumpang('Randi', penumpang);
console.log(penumpang);
tambahPenumpang('kakak', penumpang);
console.log(penumpang);