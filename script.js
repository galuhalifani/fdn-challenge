let editorsChoiceJson = []

$.getJSON( "./data/editorsChoice.json", function( json ) {
    editorsChoiceJson = [...json]

    let card = document.getElementById('editors-choice-row')

    let editorsChoiceCards = ''

    for (let i = 0; i < 5; i++) {
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

        </div>`
    }

    card.innerHTML = editorsChoiceCards
});
