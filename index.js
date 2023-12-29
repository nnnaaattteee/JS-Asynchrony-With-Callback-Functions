// Create the playable character

const character = newImage('assets/green-character/static.gif')
move(character).withArrowKeys(100,250)
let direction = null;
let x = 100;
let y = 250;


setInterval(function() {

if(direction === 'west'){
    x = x - 1
}
if(direction === 'north'){
    y = y + 1
}
if(direction === 'east'){
    x = x + 1
}
if(direction === 'south'){
    y = y - 1
}
character.style.left = x + 'px'
character.style.bottom = y + 'px'


}, 1)


document.addEventListener('keydown', function(e){   
    if(e.repeat) return;             
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})

document.addEventListener('keyup', function(e){
    direction = null
})




const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
npc.walkEast(500, () => {
    npc.walkNorth()
})

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)



// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


