const form = document.querySelector('#searchForm');
const results = document.querySelector('#results');
const darkmode = document.getElementById('darkmode');
const body = document.getElementById('myBody');
const title = document.getElementById('title');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const showSearched = form.elements.query.value;    //To get the input we typed in the input BOX
    const config = {params : {q: showSearched}};       //appended to the end of the URL
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    allShows(res.data);                                                            
    form.elements.query.value = '';   //Emptying the search bar after one search.
})
const allShows = (shows) => {   //Function to create multiple images and append.
    results.innerHTML = " ";    // Page gets cleared after every search...Image cannot be appended
    for(series of shows){    
        if(series.show.image)
        {
            const img = document.createElement("IMG");
            img.src = series.show.image.medium;  // Get input from the data
            results.append(img);
            img.classList.add('p-3');
            img.classList.add('rounded');
        }
    }
}



//DarkMode toggler...not the most efficient way but it works.
darkmode.addEventListener('click', darkfunction)

function darkfunction(){
    if(body.classList.contains('bg-light') && title.classList.contains('text-bg-light')){
        body.classList.remove('bg-light');
        body.classList.add('bg-dark');
        title.classList.remove('text-bg-light');
        title.classList.add('text-bg-dark');
        darkmode.classList.remove('btn-outline-dark');
        darkmode.classList.add('btn-outline-light')

    }else if(body.classList.contains('bg-dark') && title.classList.contains('text-bg-dark')){
        body.classList.remove('bg-dark');
        body.classList.add('bg-light');
        title.classList.remove('text-bg-dark');
        title.classList.add('text-bg-light');
        darkmode.classList.remove('btn-outline-light');
        darkmode.classList.add('btn-outline-dark');
    }
    else{
        body.classList.add('bg-light');
    }

}