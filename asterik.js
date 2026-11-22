for (let row = 1; row <= 8; row++) {
    let asterik = "";

    if (row % 2 === 0) {
    asterik = " ";
    }

    for (let column = 1; column <= 8; column++) {
        asterik += "*";

    }

    console.log(asterik);
}
