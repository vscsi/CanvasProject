function openMenu() {
    document.getElementById("side-menu").style.marginLeft="0";
    document.getElementById("main").style.marginLeft="0px";
    // document.getElementById("color-pallet").style.marginLeft="300px";
}

function closeMenu() {
    document.getElementById("side-menu").style.marginLeft="-300px";
    document.getElementById("main").style.marginLeft="0";
    document.getElementById("color-pallet").style.marginLeft="0";
}