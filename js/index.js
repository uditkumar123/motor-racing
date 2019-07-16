function preloader() {
    const imagesList = [
           "./img/f1.jpg",
           "./img/indycar.jpg",
           "./img/nascar.jpg"
        ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

let buttonsNodeList = document.querySelectorAll("button");

let resource_object = {
    f1: {
        heading: "Formula 1",
        bodyText: "Formula One (also Formula 1 or F1) is the highest class of single-seater auto racing sanctioned by the Fédération Internationale de l'Automobile (FIA) and owned by the Formula One Group. The FIA Formula One World Championship has been one of the premier forms of racing around the world since its inaugural season in 1950. The word formula in the name refers to the set of rules to which all participants' cars must conform. A Formula One season consists of a series of races, known as Grands Prix (French for 'grand prizes' or 'great prizes'), which take place worldwide on purpose-built circuits and on public roads.",
        imgUrl: "./img/f1.jpg",
        imgAlt:"Formula 1"
    },
   Indycar: {
          heading: "Indycar",
        bodyText: "INDYCAR, LLC, is an American-based auto racing sanctioning body for Indy car racing and other disciplines of open wheel car racing. The organization sanctions four racing series: the premier IndyCar Series with its centerpiece the Indianapolis 500, and developmental series Indy Lights, the Pro Mazda Championship and the U.S. F2000 National Championship, which are all a part of The Road To Indy. IndyCar is recognized as a member organization of the FIA through ACCUS.",
        imgUrl: "./img/indycar.jpg",
        imgAlt:"Indycar"

    },
   NASCAR: {
        heading: "NASCAR",
        bodyText: "The National Association for Stock Car Auto Racing (NASCAR) is an American auto racing sanctioning and operating company that is best known for stock-car racing. Its three largest or National series are the Monster Energy NASCAR Cup Series, the Xfinity Series, and the Gander Outdoors Truck Series. Regional series include the NASCAR K&N Pro Series East and West, the Whelen Modified Tour, NASCAR Pinty's Series, NASCAR Whelen Euro Series, and NASCAR PEAK Mexico Series. NASCAR sanctions over 1,500 races at over 100 tracks in 48 US states as well as in Canada, Mexico, and Europe. NASCAR has presented races at the Suzuka and Motegi circuits in Japan, and the Calder Park Thunderdome in Australia. NASCAR also ventures into eSports via the PEAK Antifreeze NASCAR iRacing Series and a sanctioned ladder system on that title.",
        imgUrl: "./img/nascar.jpg",
        imgAlt: "NASCAR"
        
    }
};

let content = document.getElementById("content");

buttonsNodeList[0].setAttribute("id", "active-button");

content.innerHTML = `<h3>${resource_object.f1.heading}</h3>
     <img src="${resource_object.f1.imgUrl}" alt="${resource_object.f1.imgAlt}">
     <p>${resource_object.f1.bodyText}</p>`;

function handleSelection() {

    for (let i = 0; i < buttonsNodeList.length; i++) {
        if (buttonsNodeList[i].hasAttribute("id")) {
            buttonsNodeList[i].removeAttribute("id");
        }
    }

    this.setAttribute("id", "active-button");

    for (let i = 0; i < buttonsNodeList.length; i++) {
        if (buttonsNodeList[i].hasAttribute("id")) {
            if (i == 0) {
                content.innerHTML = `<h1>${resource_object.f1.heading}</h1><img src="${resource_object.f1.imgUrl}" alt="${resource_object.f1.imgAlt}"><p>${resource_object.f1.bodyText}</p>`;
            }
            if (i == 1) {
                content.innerHTML = `<h1>${resource_object.Indycar.headingContent}</h1><img src="${resource_object.Indycar.imgUrl}" alt="${resource_object.Indycar.imgAlt}"><p>${resource_object.Indycar.bodyText}</p>`;
            }
            if (i == 2) {
                content.innerHTML = `<h1>${resource_object.NASCAR.heading}</h1><img src="${resource_object.NASCAR.imgUrl}" alt="${resource_object.NASCAR.imgAlt}"><p>${resource_object.NASCAR.bodyText}</p>`;
            }
        } //if-hasAttribute
    } //for-loop
} //handleSelection()

for (let i = 0; i < buttonsNodeList.length; i++) {
    buttonsNodeList[i].addEventListener("click", handleSelection)
}






