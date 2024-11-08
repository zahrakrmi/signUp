const line = document.querySelector('.box .line')
const Password = document.querySelector('#Password')



function myVal(e) {

    let temp1 = document.forms['form']['name'].value
    let temp2 = document.forms['form']['Email'].value
    let temp3 = document.forms['form']['Mobile'].value
    let temp4 = document.forms['form']['Password'].value


    const nameError = document.querySelector('.box .nameError')
    const emailError = document.querySelector('.box .emailError')
    const mobileError = document.querySelector('.box .mobileError')
    const PasswordError = document.querySelector('.box .PasswordError')


    ///////name//////////

    if (
        temp1 == '' ||
        temp1 == null ||
        temp1.search(/<script/) >= 0 
    ) {
        nameError.style.opacity = 1
    } else {
        if(
            temp1.search(/[ا-ی]/) >= 0
        ){
             nameError.innerHTML = 'Please Enter a valid Full Name...'
        }else{
             nameError.innerHTML = ''
        }
    }








    ///////email//////////
    if (
        temp2 == '' ||
        temp2 == null ||
        temp2.search(/<script/) >= 0
    ) {
        emailError.style.opacity = 1
    } else {
        if (
            temp2.length < 10 ||
            temp2.search(/@/) <= 2 ||
            temp2.search(/[ا-ی]/) >= 0 ||
                (temp2.search(/.com/) + 4 <= temp2.search(/[.]/))
        ) {
            emailError.innerHTML = 'Please Enter a valid Email Address...'
        } else {
            emailError.innerHTML = ''
        }

    }







    //////mobile//////////

    if (
        temp3 == '' ||
        temp3 == null ||
        temp3.search(/<script/) >= 0
    ) {
        mobileError.style.opacity = 1
    } else {
        if (
            temp3.length < 10 ||
            temp3.search(/[ا-ی]/) >= 0
        ) {
            mobileError.innerHTML = 'Please Enter a valid Mobile...'
        } else {
            mobileError.innerHTML = ''
        }
    }

















    //////////password//////////
    if (temp4 == '' ||
        temp4 == null ||
        temp4.search(/<script/) >= 0 ||
        temp4.search(/[0-9]/) == -1 ||
        temp4.search(/[a-z]/) == -1 ||
        temp4.search(/[A-Z]/) == -1 ||
        temp4.search(/[@#$%^&&**()]/) == -1 ||
        temp4.length < 8
    ) {
        PasswordError.style.opacity = 1
        PasswordError.innerHTML = 'Please Enter a valid Password...'
        e.preventDefault()

    } else {
        PasswordError.innerHTML = ''
    }
}
Password.addEventListener('input', (e) => {

    let flag = 0
    let temp4 = ''
    temp4 = Password.value

    if (e.target.value.search(/[ا-ی]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }

    temp4.search(/[0-9]/) >= 0 && flag++
    temp4.search(/[a-z]/) >= 0 && flag++
    temp4.search(/[A-Z]/) >= 0 && flag++
    temp4.search(/[@#$%^&&**()]/) >= 0 && flag++
    temp4.length >= 8 && flag++

    switch (flag) {
        case 0: line.style.width = ''; line.style.background = 'black'; break;
        case 1: line.style.width = '50px'; line.style.background = 'red'; break;
        case 2: line.style.width = '100px'; line.style.background = 'orange'; break;
        case 3: line.style.width = '150px'; line.style.background = 'yellow'; break;
        case 4: line.style.width = '200px'; line.style.background = 'green'; break;
        case 5: line.style.width = '250px'; line.style.background = 'blue'; break;

    }
})
