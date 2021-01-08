
checkPage = setInterval(() => {
    if (document.getElementById('breadcrumbBandeau').innerText != "Relevé de notes"){
        return false;
    }
    averageCalculate()
    console.log('good page')
    clearInterval(checkPage);
}, 1000);

function averageCalculate(){
   const table = document.querySelectorAll('.objetReleveTableDevoir')[0].rows;
   let averageAllCourse = 0;
   let nbCourse = 0;
    for (let item of table) {
        // check if row is course row and check if proffessor noted this row
        if(item.style.cssText.includes('35px') && /\d/.test(item.innerText)){

            let averageCourse = 0;
            let nbNotes = 0;
            for (let item2 of item.cells) {
                if (/\d/.test(item2.innerText) && /\d/.test(item2.innerText.split('Coeff.')[1])){
                    averageCourse += (parseFloat(item2.innerText.split('Coeff.')[0].replace(",",".")) * parseFloat(item2.innerText.split('Coeff.')[1].replace(",",".")));
                    nbNotes += (1 * parseFloat(item2.innerText.split('Coeff.')[1].replace(",",".")));
                }else if(/\d/.test(item2.innerText)){
                    averageCourse += parseFloat(item2.innerText.split('Coeff.')[0].replace(",","."));
                    nbNotes++;
                }

            }
            console.log('----------------')
            console.log(averageCourse)
            console.log(nbNotes)
            console.log(averageCourse / nbNotes)
            console.log('----------------')
            averageAllCourse += averageCourse;
            nbCourse++;
        }
    
    }
    return averageAllCourse / nbCourse;
}