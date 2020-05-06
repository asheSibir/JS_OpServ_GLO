'use strict';
document.addEventListener('DOMContentLoaded', (event)=>{
    const form = document.getElementById('myForm'),
        output = document.getElementById('output'),
        word = document.getElementById('word'),
        langFrom = document.getElementById('langFrom'),
        langTo = document.getElementById('langTo'),
        btn = document.getElementById('btn'),
        apiKey = 'trnsl.1.1.20200506T144532Z.a667666dc4dd5aa8.d736a6b129356872c1bee40ba996bc4f78758707';  
         
    btn.addEventListener('click', (event)=> {
        event.preventDefault();
        console.log(event);
        let url = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs',
            body = `key=${apiKey}&text=${word.value}&lang="ru-en"`;

        postData(url, body)
            .then((response) => {
                if (response.status !== 200){
                    throw response.statusText;
                }
                const data = response.json();
                console.log(data);
            })
            .catch((err) => console.warn(err));
    });
});
const postData = (url, body) => {
    return fetch(url, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
        credentials: 'include'
    });
}
            
    //     });


    // };
    // word.addEventListener('change', translate(urlTr));
    // urlTr = yatrans.api + '?';
    // urlTr += 'key=' + yatrans.key;
    // urlTr += 'lang=' + 'en-ru';
    // urlTr += 'format=' + 'plain';
    // urlTr += 'options=' + 1;
    // urlTr += 'callback=' + translate;
    





    //     const formData = new FormData(form);
    //     console.log(formData);
    //     const postData = (body) =>{
    //         console.log(url);
    //         return fetch(url, {
    //             method: 'POST',
    //             cache: 'default',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //                 'Access-Control-Allow-Credentials': true
    //             },
    //             redirect: 'follow',
    //                body: 'formData',
    //             credentials: 'include'
    //         });
    //     };
    //     postData(formData)
    //         .then((response) => {
    //             if (response.status !== 200){
    //                 throw new Error();
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             output.innerText = data;
    //         })
    //         .catch((err) => output.innerText = err.statusText);
    // });
    
//     https://translate.yandex.net/api/v1.5/tr.json/translate
//  ? [key=<API-ключ>]
//  & [text=<переводимый текст>]
//  & [lang=<направление перевода>]
//  & [format=<формат текста>]
//  & [options=<опции перевода>]
//  & [callback=<имя callback-функции>]

    



// const getLang = () =>{
//     form.addEventListener('mouseover', (event) => {
//         event.preventDefault();
//         const request = new XMLHttpRequest(); 
//         request.open('GET', url);
//         request.setRequestHeader('Content-type', 'application/json');
//         request.send();
//         request.addEventListener('readystatechange', (event) => {
//             if (request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 let languages = Object.entries(data.langs);
//                 languages.forEach((el, ind) => {
//                     ind = 0;
//                     langFrom.insertAdjacentHTML('afterbegin', `<option value="${el[1]}" name="${el[1]}">${el[1]}</option>`);
//                     langTo.insertAdjacentHTML('afterbegin', `<option value="${el[1]}" name="${el[1]}">${el[1]}</option>`);
//                     ind++;
//                 });
                
//             } else {
//                 output.innerHTML = request.statusText;
//             }
//         });
//     });
//     url = yatrans.api + '?'; 
//     url += 'key=' + yatrans.key;
//     url += '&ui=' + 'en-ru';
// };
// getLang();
