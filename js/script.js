// Ini Javascript

console. log('linked success');

function formValidate() {
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-Height').value;
    console.log ('isi inputan berat badan: ${inputWeight}');
    console.log ('isi inputan tinggi badan: ${inputHeight}');
    if (inputWeight == '' || inputHeight == '') {
        alert('input Berat Badan Kosong!');
    } else {
        let convertCmToM = inputHeight * 100;
        let resultHeight = Math.pow (convertCmToM, 2);
        console.log(inputWeight / resultHeight);
    }
    let category = '';
    if (bmi <= 18.5){
        category = 'kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9){
        category = 'berat badan normal'
    } else if (bmi >= 25 && bmi <= 29.9){
        category ='kelebihan berat badan'
    }
    console.log('form submitted');
}

