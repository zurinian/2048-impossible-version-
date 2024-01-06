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
        $("grids").append(`<c${i1}r${i} class="tile" order="${i * 4 + i1}"></c${i1}r${i}`)
        map[i].unshift(0);
    }
}

$("grids").css("grid-template", `repeat(${grid}, 1fr) / repeat(${grid}, 1fr)`)
map[randint(grid)][randint(grid)] = [2, 4][randint(2)]
map[randint(grid)][randint(grid)] = [2, 4][randint(2)]
let colorRand = [randint(2), randint(2), randint(2)]


let interval = setInterval(() => {
    for (let i in map) {
        for (let i1 in map[i]) {
            if (map[i][i1] !== 0) {
                $(`c${i1}r${i}`).addClass("notEmpty")
                .text(map[i][i1]).css("border", `5px solid rgb(
                    ${randColor(map[i][i1], colorRand[0])}, 
                    ${randColor(map[i][i1], colorRand[1])}, 
                    ${randColor(map[i][i1], colorRand[2])})`)
                    .css("color", `rgb(
                        ${randColor(map[i][i1], colorRand[0])}, 
                        ${randColor(map[i][i1], colorRand[1])}, 
                        ${randColor(map[i][i1], colorRand[2])})`)
            } else {
                $(`c${i1}r${i}`).removeClass("notEmpty")
                .text(map[i][i1]).css("border", "0")
                    .css("color", "0").text(" ")
            }
        }
    }
})

$(document).on("keydown", (event) => {
    if (keyPressed[event.key] == false || keyPressed[event.key] === undefined) {
        keyPressed[event.key] = true;
        if (keyPressed["a"]){
            for (let round = 0; round < grid - 1; round++) {
                for (let i = 0; i < grid; i++) {
                    for (let i1 = 0; i1 < grid - 1; i1++) {
                        if (map[i][i1] == 0) {
                            map[i][i1] = map[i][i1 + 1] 
                            map[i][i1 + 1] = 0    
                        } else 
                        if (map[i][i1 + 1] == map[i][i1]) {
                            map[i][i1] *= 2
                            map[i][i1 + 1] = 0
                        }
                    }
                }
            }
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
