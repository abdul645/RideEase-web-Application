
// if (pickupInput.value == null && destInput.value == null) {
//     // disable search button 
//     const disableButton = true; //change this value to false and the button will be clickable
//     const button = document.querySelector('.btn-search');
//     if (disableButton) button.disabled = "disabled";
// }
// else{
//     // enable search button 
// const disableButton = false; //change this value to false and the button will be clickable
// const button = document.querySelector('.btn-search');
// if (disableButton) button.enabled = "enabled";
// }



// to enable search button
const btn_search = document.querySelector('.btn-search')
const textPickup = document.querySelector('#text-pickup')
const textDropoff = document.querySelector('#text-dropoff')

textDropoff.addEventListener('keyup', (e) => {
    const value = e.currentTarget.value;
    btn_search.disabled = false;
    if (value === '') {
        btn_search.disabled = true;
    }
})

//onkeyup event to show close buttn
const text_pickup = document.querySelector('#text-pickup')
const cross_icon_pickup = document.querySelector('.cross-icon-pickup')
var showClosebtn = () => {
    cross_icon_pickup.classList.add('enable-cross-icon-pickup')
}
text_pickup.addEventListener('keyup', showClosebtn)


//onkeyup event to show close buttn
const text_dropoff = document.querySelector('#text-dropoff')
const cross_icon_drop = document.querySelector('.cross-icon-drop')
var showClosebtn = () => {
    cross_icon_drop.classList.add('enable-cross-icon-drop')
}
text_dropoff.addEventListener('keyup', showClosebtn)



// to clear input box of pickup location
const pickup_icon = document.querySelector('#pickup-icon')
const pickupInput = document.querySelector('.pickup-input')
const ClearPickupInput = () => {
    pickupInput.value = '';
    cross_icon_pickup.classList.remove('enable-cross-icon-pickup')
}
pickup_icon.addEventListener('click', ClearPickupInput)




// to clear input box of pickup location
const dropoff_icon = document.querySelector('#dropoff-icon')
const destInput = document.querySelector('.dest-input');
const CleardropInput = () => {
    destInput.value = '';
    cross_icon_drop.classList.remove('enable-cross-icon-drop')
}
dropoff_icon.addEventListener('click', CleardropInput)