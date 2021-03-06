// https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js
// https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js

// OPCJA DLA DODAWANIA PLIKÓW PO KOLEI I POKAZANIE BLĘDU JEELI SIĘ NIE ZALADOWAŁ 
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`nie udalo sie zaladowac script ${src}`));
    document.head.append(script);
}

// loadScript(
//     'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js',
//     function (err, script) {
//         if (err) {
//             console.log(err);
//         } else {
//             alert(`script  ${script.src} zaladował się `)
//             loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js',
//                 function (err, script) {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         alert(`script ${script.src} zaladował się`)
//                         // loadScript(link, funkcja); 
//                     }
//                 }
//             )
//         }
//     }
// );

// =======================================================================


// Przepiszemy ten kod w odzielne funkcje
loadScript('https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js', script2);

function script2(err, script) {
    if (err) {
        console.log(err);
    } else {
        alert(`script  ${script.src} zaladował się`)
        loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js', script3);
    }
}

function script3(err, script) {
    if (err) {
        console.log(err);
    } else {
        alert(`script  ${script.src} zaladował się `)
        loadScript('https://jquery.com11121221', script4);
    }
}

function script4(err, script) {
    if (err) {
        console.log(err);
    } else {
        alert(`script  ${script.src} zaladował się`)
    }
}