let catBg = document.querySelector(".cat-bg")
let dogBg = document.querySelector(".dog-bg")

let dogBox = document.querySelector(".dog-box")
let catBox = document.querySelector(".cat-box")

let catCount = 0;
let dogCount = 0;
let totalCount = 0;

catBox.addEventListener('click', function() {
    catCount ++;
    totalCount++;
    console.log(`catCount = ${catCount}`);
    let catPercent = (catCount/totalCount * 100).toFixed(2);
    let dogPercent = (100- catPercent).toFixed(2)

    document.getElementById('totalVotes').innerHTML = `${totalCount} Total Votes`
    document.querySelector('#catPercent').innerHTML= `${catPercent}%`
    document.querySelector('#dogPercent').innerHTML= `${dogPercent}%`

    catBg.style=`width: ${catPercent}%`
    dogBg.style= `width: ${dogPercent}%`
});

dogBox.addEventListener('click', function() {
    dogCount ++;
    totalCount++;
    console.log(`dogCount = ${dogCount}`);
    let dogPercent = (dogCount/totalCount * 100).toFixed(2);
    let catPercent = (100- dogPercent).toFixed(2)

    document.getElementById('totalVotes').innerHTML = `${totalCount} Total Votes`
    document.querySelector('#catPercent').innerHTML= `${catPercent}%`
    document.querySelector('#dogPercent').innerHTML= `${dogPercent}%`

    catBg.style=`width: ${catPercent}%`
    dogBg.style= `width: ${dogPercent}%`
});