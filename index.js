let impossible = true;
let grid = 6;
let magic = false;
let rock = false;
let map = [];
let keyPressed = {"a":false, "w":false, "s":false, "d":false};
let point = 0;

if (impossible) {
    grid = 4;
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
if (magic) {
    map[randint(grid)][randint(grid)] = [-2, -4][randint(2)]
    map[randint(grid)][randint(grid)] = [-2, -4][randint(2)]
}
if (rock) {
    map[randint(grid)][randint(grid)] = 3
    map[randint(grid)][randint(grid)] = 5
    // map[randint(grid)][randint(grid)] = 5
    // map[randint(grid)][randint(grid)] = 6
}
let colorRand = [randint(2), randint(2), randint(2)]


let interval = setInterval(() => {
    let counter = 0
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
                counter += 1
                $(`c${i1}r${i}`).removeClass("notEmpty")
                .text(map[i][i1]).css("border", "0")
                    .css("color", "0").text(" ")
            } 
        }
    }if (counter === 0) {
        alert("scores: " + point)
        clearInterval(interval)
        location.reload()
    }
})

$(document).on("keydown", (event) => {
    if (keyPressed[event.key] == false) {
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
                            point += map[i][i1]
                        } else 
                        if (map[i][i1 + 1] == -map[i][i1]) {
                            map[i][i1] /= 2
                            map[i][i1 + 1] = 0
                            point -= map[i][i1]
                        }
                    }
                }
            }
        } 
        if (keyPressed["w"]){
            for (let round = 0; round < grid - 1; round++) {
                for (let i = 0; i < grid - 1; i++) {
                    for (let i1 = 0; i1 < grid; i1++) {
                        if (map[i][i1] == 0) {
                            map[i][i1] = map[i + 1][i1] 
                            map[i + 1][i1] = 0    
                        } else 
                        if (map[i + 1][i1] == map[i][i1]) {
                            map[i][i1] *= 2
                            map[i + 1][i1] = 0
                            point += map[i][i1]
                        } else 
                        if (map[i + 1][i1] == -map[i][i1]) {
                            map[i][i1] /= 2
                            map[i + 1][i1] = 0
                            point -= map[i][i1]
                        }
                    }
                }
            }
        }
        if (keyPressed["s"]){
            for (let round = 0; round < grid - 1; round++) {
                for (let i = grid - 1; i > 0; i--) {
                    for (let i1 = 0; i1 < grid; i1++) {
                        if (map[i][i1] == 0) {
                            map[i][i1] = map[i - 1][i1] 
                            map[i - 1][i1] = 0    
                        } else 
                        if (map[i - 1][i1] == map[i][i1]) {
                            map[i][i1] *= 2
                            map[i - 1][i1] = 0
                            point += map[i][i1]
                        } else 
                        if (map[i - 1][i1] == -map[i][i1]) {
                            map[i][i1] /= 2
                            map[i - 1][i1] = 0
                            point -= map[i][i1]
                        }
                    }
                }
            }
        }
        if (keyPressed["d"]){
            for (let round = 0; round < grid - 1; round++) {
                for (let i = 0; i < grid; i++) {
                    for (let i1 = grid - 1; i1 > 0; i1--) {
                        if (map[i][i1] == 0) {
                            map[i][i1] = map[i][i1 - 1] 
                            map[i][i1 - 1] = 0    
                        } else 
                        if (map[i][i1 - 1] == map[i][i1]) {
                            map[i][i1] *= 2
                            map[i][i1 - 1] = 0
                            point += map[i][i1]
                        } else 
                        if (map[i][i1 - 1] == -map[i][i1]) {
                            map[i][i1] /= 2
                            map[i][i1 - 1] = 0
                            point -= map[i][i1]
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
            if (magic) {
                map[random1][random2] = [-2, -4, 2, 4][randint(4)]
            }
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
