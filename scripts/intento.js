function numerosPrimos(n) {
    let primeNumbers = [];
    for (let i = 2; i <= n; i++) {
        let primos = true;
        for (let j = 2; j <i; j++) {
            primos = false;
            break;
        
        }
    }
    if (primos) {
        numerosPrimos.push(i);
    }
}
return nprimos;
}
console.log(numerosPrimos(10));

