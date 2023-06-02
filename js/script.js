const factions = [{
    "blob": "tyranids",
    "color": "#3b004f",
    "name": "Tyranids",
    "iconPath": "Tyranid_Icon.webp",
    "units": [{
        "name": "Tyrannofex",
        "imgPath": "tyrannofex.png",
    }, {
        "name": "Hive Tyrant",
        "imgPath": "hive_tyrant.png"
    }, {
        "name": "The Swarmlord",
        "imgPath": "the_swarmlord.png"
    }, {
        "name": "Exocrine",
        "imgPath": "exocrine.png"
    }, {
        "name": "Tyranid Prime",
        "imgPath": "tyranid_prime.png"
    }, {
        "name": "Neurothrope",
        "imgPath": "neurothrope.png"
    }, {
        "name": "Zoanthrope",
        "imgPath": "zoanthrope.png"
    }, {
        "name": "Tyrant Guard",
        "imgPath": "tyrant_guard.png"
    }, {
        "name": "Termagant",
        "imgPath": "termagant.png"
    }, {
        "name": "Maleceptor",
        "imgPath": "maleceptor.png"
    }, {
        "name": "Ripper Swarm",
        "imgPath": "ripper_swarm.png"
    }
    ]
}, {
    "blob": "darkAngels",
    "color": "#003407",
    "name": "Dark Angels",
    "iconPath": "dark-angels.png",
    "units": [{
        "name": "Azrael",
        "imgPath": "dark-angels/azrael.png",
    },]
}
    ,];


function populateUnitSelect(faction) {
    const unitSelect = document.getElementById('unit');
    unitSelect.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Select Unit';
    unitSelect.appendChild(defaultOption);
    faction.units.forEach(unit => {
        const option = document.createElement('option');
        option.value = unit.name;
        option.text = unit.name;
        unitSelect.appendChild(option);
    });
}
function changeCSSFactionColor(faction) {
    // Change the CSS variable to the faction color
    let root = document.querySelector(':root');
    root.style.setProperty('--factioncolor', faction.color);
    console.log(faction.color);
}

function changeFactionIcon(faction) {
    let factionIcon = document.getElementById('factionIconImg');
    factionIcon.src = 'data/icons/' + faction.iconPath;
}
function changeUnitImage(unit) {
    let unitImage = document.getElementById('unitImg');
    unitImage.src = 'data/units/' + unit.imgPath;
    let name = document.getElementById('unitName');
    name.innerHTML = unit.name;
}
document.addEventListener('DOMContentLoaded', function () {
    const factionSelect = document.getElementById('selectFaction');
    const unitSelect = document.getElementById('unit');
    const hasInvul = document.getElementById('hasInvul');
    const addRangedWeapon = document.getElementById('addRangedWeapon');
    const addMeleeWeapon = document.getElementById('addMeleeWeapon');
    factionSelect.addEventListener('change', function () {
        const faction = factions.find(faction => faction.blob === factionSelect.value);
        populateUnitSelect(faction);
        changeCSSFactionColor(faction);
        changeFactionIcon(faction);
    }
    );
    unitSelect.addEventListener('change', function () {
        const faction = factions.find(faction => faction.blob === factionSelect.value);
        const unit = faction.units.find(unit => unit.name === unitSelect.value);
        changeUnitImage(unit);
    }
    );
    hasInvul.addEventListener('change', function () {
        if (hasInvul.checked) {
            document.getElementById('invulnerableSave').style.display = 'flex';
        } else {
            document.getElementById('invulnerableSave').style.display = 'none';
        }
    }
    );
    addRangedWeapon.addEventListener('click', function () {
        //Add new row to ranged weapons
        const html = `
        <td class="weaponFirstItem">
            <div>
                <span contenteditable="true">
                    WEAPON NAME
                </span>
                <span contenteditable="true">
                    [KEYWORDS]
                </span>
            </div>
        </td>
        <td>
            <span contenteditable="true">
                0"
            </span>
        </td>
        <td>
            <span contenteditable="true">
                0
            </span>
        </td>
        <td>
            <span contenteditable="true">
                0
            </span>
        </td>
        <td>
            <span contenteditable="true">
                0
            </span>
        </td>
        <td>
            <span contenteditable="true">
                0
            </span>
        </td>
        <td>
            <span contenteditable="true">
                0
            </span>
        </td>`
        const newRow = document.createElement('tr');
        newRow.innerHTML = html;
        newRow.classList.add('weapon');
        document.getElementById('rangedWeaponsBody').appendChild(newRow);


    });
    addMeleeWeapon.addEventListener('click', function () {
        //Add new row to melee weapons
        const html = `<td class="weaponFirstItem">
        <div>
            <span contenteditable="true">
                WEAPON NAME
            </span>
            <span contenteditable="true">
                [KEYWORDS]
            </span>
        </div>
    </td>
    <td>
        <span contenteditable="true">
            Melee
        </span>
    </td>
    <td>
        <span contenteditable="true">
            0
        </span>
    </td>
    <td>
        <span contenteditable="true">
            0
        </span>
    </td>
    <td>
        <span contenteditable="true">
            0
        </span>
    </td>
    <td>
        <span contenteditable="true">
            0
        </span>
    </td>
    <td>
        <span contenteditable="true">
            0
        </span>
    </td>
        `;
        const newRow = document.createElement('tr');
        newRow.innerHTML = html;
        newRow.classList.add('weapon');
        document.getElementById('meleeWeaponsBody').appendChild(newRow);
    });
}, false);