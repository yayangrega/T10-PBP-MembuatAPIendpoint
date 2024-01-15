const mahasiswaNim = '20220040092';
const updateData = {
    nama: 'Yayang Rega Abdilah',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Jl.Raya Cidahu'
};

fetch (`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringfy(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));