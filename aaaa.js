//$(document).ready(() => {
    let impossible = false;
    let grid = 6;
    let magic = false;
    let rock = false;
    let keyPressed = {};
    let allTile = [];

    if (impossible) {
        grid = 4;
        magic = true;
        rock = true;
    }

    function randint (max) {
        return Math.floor(Math.random() * max)
    }

    for (let i =0; i < grid; i++) {
        for (let i1 =0; i1 < grid; i1++) {
            $("grids").append(`<c${i1}r${i} class="cell"></c${i1}r${i}`)
        }
    }
    $("grids").css("grid-template", `repeat(${grid}, 1fr) / repeat(${grid}, 1fr)`)

    while(true) {
        let random1 = [randint(4), randint(4), [2,4][randint(2)]]
        let random2 = [randint(4), randint(4), [2,4][randint(2)]]
        if (random1 !== random2) {
            allTile.unshift(random1, random2)
            break
        }
    }

    


    
//})
