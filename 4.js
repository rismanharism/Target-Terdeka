let arr = [" ", " ", "o", " ", " ", "x", " ", "x"]

function targetTerdekat(arr) {
    let indexO = 0
    let indexX = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "0") {
            indexO = i
        } else if (arr[i] === "x") {
            indexX.push(i)
        }
    }
    if (indexX.length === 0) {
        return 0;
    } else {
        let closest = Math.abs(indexX[0] - indexO);
        for (let i = 0; i < indexX.length; i++) {
            if (closest > Math.abs(indexX[i] - indexO)) {
                closest = Math.abs(indexX[i] - indexO)
            }
        }
        return closest
    }
 
}


