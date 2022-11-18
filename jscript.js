function cardCheck() {

    let varHolder = document.getElementById('cardholder');
    let varNumber = document.getElementById('cardnumber');
    let varYear = document.getElementById('cardyear');
    let varMonth = document.getElementById('cardmonth');
    let varCvc = document.getElementById('cardcvc');  

    let regex = new RegExp('^[0-9]*$');
    let isValidNumber = regex.test (varNumber.value); 
    let isValidMonth = regex.test (varMonth.value);  
    let isValidYear = regex.test (varYear.value);  
    let isValidCvc = regex.test (varCvc.value);   

    let regex1= new RegExp('^[a-zA-Z ]*$');
    let isValidName = regex1.test (varHolder.value); 

    if (varNumber.value.length === 16 === true 
        && isValidNumber === true
        && varHolder.value.length >= 3 === true 
        && isValidName === true
        && varYear.value.length === 2 === true 
        && varYear.value <= 26 === true
        && isValidYear === true
        && varMonth.value.length === 2 === true
        && varMonth.value <= 12 === true
        && isValidMonth === true
        && varCvc.value.length === 3 === true
        && isValidCvc === true) {

        let parent = document.getElementById('right');
        let child = document.getElementById('info');
        parent.removeChild(child);

        document.getElementById('mid').textContent = varNumber.value.match(/.{4}/g).join(' ');
        document.getElementById('identity').textContent = varHolder.value;
        document.getElementById('identity').style.letterSpacing= "0";
        document.getElementById('year').textContent = varMonth.value +"/"+ varYear.value;
        document.getElementById('cvc').textContent = varCvc.value;


            let heading = document.createElement('h1');
            heading.textContent = 'THANK YOU!';
            heading.id= 'heading';

            let para = document.createElement('p');
            para.textContent = 'We have added your card details';
            para.id= 'para';

            let button = document.createElement('button');
            button.id= 'button';
            button.textContent = 'Continue';

            let image = document.createElement('img');
            image.id= 'image';
            image.src='./images/icon-complete.svg';

            parent.appendChild(image);
            parent.appendChild(heading);
            parent.appendChild(para);
            parent.appendChild(button);
    }
}

