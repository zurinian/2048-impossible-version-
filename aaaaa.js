let impossible = false;
let grid = 4;
let magic = false;
let rock = false;
let map = [];
let keyPressed = {};

if (impossible) {
    grid = 6;
    magic = true;
    rock = true;
}


function randint (max) {
    return Math.floor(Math.random() * max)
}


function randColor (map, yesNo) {
    return 255 - (map * 25.5) * yesNo
}


for (let i =0; i < grid; i++) {
    map.push([])
    for (let i1 =0; i1 < grid; i1++) {
        $("grids").append(`<c class="tile" style="order: ${i * grid + i1}"></c>`)
        map[i].unshift(0);
    }
}

$("grids").css("grid-template", `repeat(${grid}, 1fr) / repeat(${grid}, 1fr)`)
let random1 = [randint(4), randint(4), randint(2)]
let random2 = [randint(4), randint(4), randint(2)]
map[random1[0]][random1[1]] = [2, 4][random1[2]]
map[random2[0]][random2[1]] = [2, 4][random2[2]]
let colorRand = [randint(2), randint(2), randint(2)]

$(`c[style="order: ${grid * random1[0] + random1[1]}"]`).addClass("notEmpty")
$(`c[style="order: ${grid * random2[0] + random2[1]}"]`).addClass("notEmpty")



$(document).on("keydown", (event) => {
    if (keyPressed[event.key] == false || keyPressed[event.key] === undefined) {
        keyPressed[event.key] = true;
        if (keyPressed["a"]){
            //for (let round = 0; round < grid - 1; round++) {
                for (let i = 0; i < grid; i++) {
                    for (let i1 = 0; i1 < grid; i1++) {
                        // if (map[i][i1] == 0 && i1 != 0) {
                        //     map[i][i1] = map[i][i1 + 1] 
                        //     map[i][i1 + 1] = 0
                        // }
                        if (map[i][i1] > 0 && i1 != 0 && map[i][i1]) {
                            let temp = $(`c[order="${grid * i + i1}"]`).css("order")
                            $(`c[order="${grid * i + i1}"]`).css("order", $(`c[order="${grid * i + i1 - 1}"]`).css("order"))
                            $(`c[order="${grid * i + i1 - 1}"]`).css("order", temp)
                        }
                    }
                }
            //}
        }
        while(true) {
            let random1 = randint(grid)
            let random2 = randint(grid)
            if (map[random1][random2] == 0) {
            map[random1][random2] = [2, 4][randint(2)]
            break
        }
        }
    }
})
$(document).on("keyup", (event) => {
    if (keyPressed[event.key] == true) {
        keyPressed[event.key] = false;
    }
})
