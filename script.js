const gifContainer = document.querySelector('.gifContainer');
const img = document.getElementById('img');
const yesBtn = document.getElementById('Yes');
const noBtn = document.getElementById('No');

yesBtn.addEventListener('click', () => {
    getHappyGif();
});

noBtn.addEventListener('click', () => {
    getSadGif();
    alert('You meant to click yes...')
});

async function getHappyGif() {
    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=rky6i5txQr8hCoEdF1T1wsCQSemta4gS&s=celebrate`, {mode: 'cors'});
        const gifData = await response.json();
        img.src = gifData.data.images.original.url;
    } catch (error) {
        img.src = '../imgs/oops.jpeg';
    }
}

async function getSadGif() {
    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=rky6i5txQr8hCoEdF1T1wsCQSemta4gS&s=sad`, {mode: 'cors'});
        const gifData = await response.json();
        img.src = gifData.data.images.original.url;
    } catch (error) {
        img.src = '../imgs/oops.jpeg';
    }
}