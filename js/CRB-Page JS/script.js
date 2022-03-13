const playersDetail = () => {
    window.scrollTo(0, 1150);
    const detailsBody = document.getElementById('details');
    detailsBody.textContent = "";
    detailsBody.innerHTML = `
                    <div class="col mx-auto">                    
                        <div class="card player-detailCard">
                                <div class="mx-auto mt-3">
                                    <img src="images/CRB-Page/CRB-logo (Custom).png" alt="">
                                </div>
                                <div class="card-body ps-5">
                                    <h2 class="card-title text-center">We Are working on it! <br> Please have patience.</h2>
                                </div>
                        </div>
                    </div>
`;
    detailsBody.appendChild(div);
}

// show all players button click handler 
const showMore = () => {
    /* window.scrollTo(0, 1650);
    const previousData = document.getElementById('previous-data');
    previousData.style.display = 'none';
    const newData = document.getElementById('new-data');
    newData.style.display = 'block';
    document.getElementById('show-more').style.display = 'none';
    document.getElementById('hide').style.display = 'block'
    document.getElementById('details').textContent = ""; */
    window.location.href = ('playersList.html');
}

// hide players button click handler 
const hidePlayers = () => {
    /* document.getElementById('new-data').style.display = 'none'
    document.getElementById('previous-data').style.display = 'block';
    document.getElementById('show-more').style.display = 'block';
    document.getElementById('hide').style.display = 'none'; */
    window.location.href = ("crbPage.html");
}
document.addEventListener('click', function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        console.log(src);
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    }
})

