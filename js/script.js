function draw(){
    let canvas = document.getElementById('datasheetCanvas');
    let ctx = canvas.getContext('2d');
    //Set background image as /data/datasheetTyranid.png
    let img = new Image();
    img.src = '/data/datasheetTyranid.png';
    //Set canvas size to image size

    canvas.width = 1000;
    canvas.height = 675;

    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        //Draw traits titles
    //     ctx.font = 'bold 12px Arial';
    //     ctx.fillStyle = 'white';
    //     ctx.fillText('M', 65, 85);
    //     ctx.fillText('T', 120, 85);
    //     ctx.fillText('W', 174, 85);
    //     ctx.fillText('Ld', 225, 85);
    //     ctx.fillText('Sv', 280, 85);

    //     //Draw character name
    //     ctx.font = 'bold 30px Arial';
    //     ctx.fillStyle = 'white';
    //     ctx.fillText(character.name, 60, 70);
    //     //Draw character movement
    //     ctx.font = 'bold 20px Arial';
    //     ctx.fillStyle = 'black';
    //     ctx.fillText(character.movement, 55, 120);
    //     //Draw character thoughness
    //     ctx.fillText(character.thoughness, 110, 120);
    //     //Draw character wounds
    //     ctx.fillText(character.wounds, 165, 120);
    //     //Draw character leadership
    //     ctx.fillText(character.leadership, 220, 120);
    //     //Draw character save
    //     ctx.fillText(character.save, 275, 120);

    //     //Draw ranged weapons
    //     ctx.font = 'bold 12px Arial';
    //     ctx.fillStyle = 'black';
    //     for (let i = 0; i < character.rangedWeapons.length; i++) {
    //         console.log(character.rangedWeapons[i]);
    //         let height = 250 + (i * 15);
    //         ctx.fillText(character.rangedWeapons[i].name, 80, height);
    //         ctx.fillText("["+character.rangedWeapons[i].type+"]", 20, height);
    //         ctx.fillText(character.rangedWeapons[i].range, 350, height);
    //         ctx.fillText(character.rangedWeapons[i].attacks, 420, height);
    //         ctx.fillText(character.rangedWeapons[i].skill, 460, height);
    //         ctx.fillText(character.rangedWeapons[i].strength, 500, height);
    //         ctx.fillText(character.rangedWeapons[i].armorPenetration, 540, height);
    //         ctx.fillText(character.rangedWeapons[i].damage, 580, height);
    //     }
    }
}
let character = {
    name: '',
    movement: 0,
    thoughness: 0,
    wounds: 0,
    leadership: 0,
    save: 0,
    invulnerableSave: 0,
    rangedWeapons: [],
    meleeWeapons: [],
    abilities: [],
    psychicPowers: [],
    keywords: [],
}

function setCharacter(){
    //Get character name
    character.name = document.getElementById('name').value;
    //Get character movement
    character.movement = document.getElementById('movement').value;
    //Get character thoughness
    character.thoughness = document.getElementById('thoughness').value;
    //Get character wounds
    character.wounds = document.getElementById('wounds').value;
    //Get character leadership
    character.leadership = document.getElementById('leadership').value;
    //Get character save
    character.save = document.getElementById('save').value;

    //Get character ranged weapons
    //Get all ranged weapons
    let rangedWeapons = document.getElementsByClassName('rangedWeapon');
    //Clear character ranged weapons 
    character.rangedWeapons = [];
    //Add ranged weapons to character
    for (let i = 0; i < rangedWeapons.length; i++) {
        //Create new ranged weapon
        let rangedWeapon = {
            name: '',
            range: 0,
            type: '',
            skill: 0,
            attacks: 0,
            strength: 0,
            armorPenetration: 0,
            damage: 0,
        };
        //Set ranged weapon name
        rangedWeapon.name = rangedWeapons[i].getElementsByClassName('rangedName')[0].value;
        //Set ranged weapon range
        rangedWeapon.range = rangedWeapons[i].getElementsByClassName('rangedRange')[0].value;
        //Set ranged weapon type
        rangedWeapon.type = rangedWeapons[i].getElementsByClassName('rangedType')[0].value;
        //Set ranged weapon strength
        rangedWeapon.strength = rangedWeapons[i].getElementsByClassName('rangedStrength')[0].value;
        //Set ranged weapon attacks
        rangedWeapon.attacks = rangedWeapons[i].getElementsByClassName('rangedAttacks')[0].value;
        //Set ranged weapon armor penetration
        rangedWeapon.armorPenetration = rangedWeapons[i].getElementsByClassName('rangedAP')[0].value;
        //Set ranged weapon damage
        rangedWeapon.damage = rangedWeapons[i].getElementsByClassName('rangedDamage')[0].value;
        //Set ranged weapon skill
        rangedWeapon.skill = rangedWeapons[i].getElementsByClassName('rangedSkill')[0].value;

        //Add ranged weapon to character
        character.rangedWeapons.push(rangedWeapon);
    }
}










document.addEventListener('DOMContentLoaded', function() {
    //Get all inputs
    let inputs = document.getElementsByTagName('input');
    //Add event listener to all inputs
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', function() {
            setCharacter();
            draw();
        });
    }
    
        draw();
}, false);