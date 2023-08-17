
for (let i=1; i <500; i++){
    let cont=0;
    for (let j=1; j <= i;j++){
        if (i%j=== 0 && i%1===0){
            cont=cont+1
        }
    }

    if (cont===2) {
        console.log(i + "es numero primo")
    }
}
