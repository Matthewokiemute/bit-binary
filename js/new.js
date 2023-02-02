document.addEventListener('DOMContentLoaded', () => {
	let selectDrop = document.querySelector('#countries');
	fetch('https://restcountries.com/v3.1/all').then(res => {
		return res.json()
	}).then(data => {
        let output = "";
       
		data.forEach(country => {
            // console.log(country.name.common)
            output += `<option class="form-control-new">${country.name.common}<option>`;
        })
        selectDrop.innerHTML = output;
	}).catch(err => {
		console.log(err)
	})
})