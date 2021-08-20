// EDITORS CHOICE
let editorsChoiceJson = []

$.getJSON( "./data/editorsChoice.json", function( json ) {
    editorsChoiceJson = [...json]

    let card = document.getElementById('editors-choice-row')

    let editorsChoiceCards = ''

    for (let i = 0; i < editorsChoiceJson.length; i++) {
        let stars = ''
        
        // loop red rating stars
        for (let j = 0; j < Math.floor(editorsChoiceJson[i].rating); j++) {
            stars += 
            `
            <i style='color:#da284f; font-size: 11px' class="fas fa-star"></i>
            `
        }

        // add grey rating stars
        if (Math.floor(editorsChoiceJson[i].rating < 5)) {
            let greyStars = (5 - Math.floor(editorsChoiceJson[i].rating))
            stars += 
            `
            <i style='color:lightgray; font-size: 11px' class="fas fa-star"></i>
            `
        }

        // append the card
        editorsChoiceCards +=
        `
        <div class="col p-2">

            <div class='editor d-flex'>
                <img src="./assets/curator-${i+1}.jpg" class="editor-pic" alt="..." style=' margin-bottom: -11px;'>
                <div class='editor-detail'>
                    <p class='editor-name'>${editorsChoiceJson[i].editorName}</p>
                    <p class='editor-role'>${editorsChoiceJson[i].editorRole}</p>
                </div>
            </div>

            <div class="card" style='height:90%'>
                <img src="./assets/ec-${i+1}.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class='card-rating d-flex'>
                        <p class='rating'>${editorsChoiceJson[i].rating}</p>
                        <div class='stars d-flex'>
                        ${stars}
                        </div>
                        <p class='no-of-review'>(${editorsChoiceJson[i].rater})</p>
                    </div>

                    <h5 class="card-title">${editorsChoiceJson[i].title}</h5>
                    <p class="card-text">${editorsChoiceJson[i].description}</p>
                    <p class="sub-text">${editorsChoiceJson[i].variant}</p>
                </div>
            </div>

        </div>
        `
    }

    card.innerHTML = editorsChoiceCards
});

// MATCHES
let matchesJson = []

$.getJSON( "./data/matches.json", function( json ) {
    matchesJson = [...json]

    let card = document.getElementById('matches-row')

    let matchesCards = ''

    for (let i = 0; i < matchesJson.length; i++) {
        let stars = ''
        
        // loop red rating stars
        for (let j = 0; j < Math.floor(matchesJson[i].rating); j++) {
            stars += 
            `
            <i style='color:#da284f; font-size: 11px' class="fas fa-star"></i>
            `
        }

        // add grey rating stars
        if (Math.floor(matchesJson[i].rating < 5)) {
            let greyStars = (5 - Math.floor(matchesJson[i].rating))
            stars += 
            `
            <i style='color:lightgray; font-size: 11px' class="fas fa-star"></i>
            `
        }

        // append the card
        matchesCards +=
        `
        <div id='matches-col' class="col-sm-3 p-2" style='margin-right: 15px; width: 26%'>

            <div class="card h-100" style='border-radius: 15px;'>
                <img src="./assets/matches-${i+1}.jpg" class="card-img-top" alt="...">
                <div class="card-body" >
                    <p style='color:#da284f; font-weight:bold'>Match Skin Type</p>
                    <div class='card-rating d-flex' style='width: 80%'>
                        <p class='rating'>${matchesJson[i].rating}</p>
                        <div class='stars d-flex'>
                        ${stars}
                        </div>
                        <p class='no-of-review'>(${matchesJson[i].rater})</p>
                    </div>

                    <h5 class="card-title">${matchesJson[i].title}</h5>
                    <p class="card-text">${matchesJson[i].description}</p>
                    <p class="sub-text">${matchesJson[i].variant}</p>
                </div>
            </div>

        </div>`
    }
    card.innerHTML = matchesCards
})

// ARTICLES
let articlesJson = []

$.getJSON( "./data/articles.json", function( json ) {
    articlesJson = [...json]

    let card = document.getElementById('articles-row')

    let articlesCard = ''

    for (let i = 0; i < articlesJson.length; i++) {
        // append the card
        articlesCard +=
        `
        <div id='articles-col' class="col-sm-4 p-3" style='padding-bottom:unset!important'>
            <div class="card h-100" style='border-radius: 15px'>
                <img src="./assets/article-${i+1}.jpg" class="card-img-top card-img-article" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${articlesJson[i].title}</h5>
                    <p class="sub-text">Username | ${articlesJson[i].update}</p>
                </div>
            </div>
        </div>
        `
    }
    card.innerHTML = articlesCard
})

// REVIEW
function reviewAppend() {
    let reviewSection = document.getElementById('latest-reviews-row')

    let stars = ''
            
        // loop stars
        for (let i = 0; i < 4; i++) {
            stars += 
            `
            <i style='color:#da284f; font-size: 14px' class="fas fa-star"></i>
            `
        }
        stars += `<i style='color:lightgray; font-size: 14px' class="fas fa-star"></i>`

    // append section
    let reviewDiv = ''

    for (let j = 0; j < 2; j++) {
        let text = 'suka sih pakai ini, wajah jadi lumayan cerah. gak bikin bo atau apa dikulitku fine2 aja. untuk tipe kulitku yang kombinasi dia enak banget buat dipakai m'
        let review = ''

        if (text.length > 152) {
            review += `${text.substring(0, 154)}....<span style='color:#da284f'> Read More</span>`
        } else {
            review += `${text.substring(0, 154)}`
        }

        reviewDiv += 
        `
        <div id='reviews-col' class="col-sm-6" style='padding-top:0.5rem!important;'>
            <div class="card" style='border-radius: 15px'>

                <div style='margin: 0 auto; width: 90%; margin-bottom: 10px'>
                    <div class='d-flex' style='align-items:center; margin-top: 15px'>
                    <img src="./assets/review-img.jpg" class="card-img-top card-img-reviews" alt="...">
                    <div>
                        <p style='font-size:16px'><b>VAL BY VALERIE THOMAS</b></p>
                        <p style='font-size:14px'>C E Ferulic</p>  
                    </div>
                    </div>
                    <hr style='margin-top:0.5rem; margin-bottom: 1rem'>
                    <div class="card-body" style='padding:unset; margin-bottom: 15px'>
                        <div class='d-flex justify-content-between' style='align-items: center;'>
                        <div class='d-flex' style='margin-bottom: 10px'>
                            ${stars}
                        </div>
                        <p style='color:lightgray'>2 hours ago</p>
                        </div>
                        <p id="review-text" class="sub-text">${review}</p>
                    </div>
                </div>
            </div>
                <div style='text-align: center; margin-top:-20px; z-index: 10; position:relative'>
                    <img src="./assets/reviewer.jpg" class="reviewer-pic" alt="...">
                    <p style='margin:unset'>Putri Deani</p>
                    <p style='margin:unset; font-size:12px; color:gray'>Combination Skin, 25-29</p>
                </div>
        </div>
    `
    }

    reviewSection.innerHTML = reviewDiv
}
reviewAppend()

// GROUPS
function groupAppend() {
    let groupSection = document.getElementById('groups-row')
    let groups = ''
    
    for (let i = 0; i < 4; i++) {
        groups += 
        `
        <div class="col-sm-3 h-100">
            <div class="card" style='height:90%; text-align:center'>
                <img src="./assets/group-${i+1}.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Embrace the Curl</h5>
                    <img src="./assets/group-icons.jpg" class="card-img-top" style='height:30px!important; width:unset'>
                    <p class="card-text" style='font-size:11px; margin-top:5px'>May our curls pop and never stop!</p>
                </div>
            </div>
        </div>
        `
    }

    groupSection.innerHTML = groups
}
groupAppend()

// TRENDING
let trendingJson = []

$.getJSON( "./data/trending.json", function( json ) {
    trendingJson = [...json]

    let card = document.getElementById('trending-row')

    let trendingCard = ''

    for (let i = 0; i < trendingJson.length; i++) {
        let stars = ''
        
        // loop red rating stars
        for (let j = 0; j < Math.floor(trendingJson[i].rating); j++) {
            stars += 
            `
            <i style='color:#da284f; font-size: 11px' class="fas fa-star"></i>
            `
        }

        // add grey rating stars
        if (Math.floor(trendingJson[i].rating < 5)) {
            let greyStars = (5 - Math.floor(trendingJson[i].rating))
            stars += 
            `
            <i style='color:lightgray; font-size: 11px' class="fas fa-star"></i>
            `
        }

        // append the card
        trendingCard +=
        `
        <div class="col-sm-2 p-1">

            <div class="card h-100" style='border:unset'>
                <img src="./assets/trending-${i+1}.jpg" class="card-img-top" alt="...">
                <div class="card-body" style='padding:0.75rem; align-items:center'>
                    <div class='card-rating-trending d-flex'>
                        <p class='rating'>${trendingJson[i].rating}</p>
                        <div class='stars d-flex'>
                        ${stars}
                        </div>
                        <p class='no-of-review'>(${trendingJson[i].rater})</p>
                    </div>

                    <h5 class="card-title">${trendingJson[i].title}</h5>
                    <p class="card-text">${trendingJson[i].description}</p>
                    <p class="sub-text">${trendingJson[i].variant}</p>
                </div>
            </div>

        </div>
        `
    }

    card.innerHTML = trendingCard
});

// BRAND
function brandAppend() {
    let brandRow = document.getElementById('brand-row')

    let brands = ''
    
    for (let i = 0; i < 6; i++) {
        brands += 
        `
        <img src="./assets/brand-${i+1}.jpg" style='height:55px'>
        `
    }

    brandRow.innerHTML = brands
}

brandAppend()







