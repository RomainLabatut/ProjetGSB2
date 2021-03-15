const dataPraticien = [
    {
        "id": 1,
        "nom": "Lee",
        "prenom": "Bruce",
        "adresse": "Marseille",
        "specialite": "ophtalmologue",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 2,
        "nom": "Hugo",
        "prenom": "Victor",
        "adresse": "Aix-En-Provence",
        "specialite": "Dentiste",
        "photo": "PraticienF.jfif"
    },
    {
        "id": 3,
        "nom": "Mozart",
        "prenom": "Amadeus",
        "adresse": "Paris",
        "specialite": "Dentiste",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 4,
        "nom": "Beethoven",
        "prenom": "Ludwig Von",
        "adresse": "Nantes",
        "specialite": "ophtalmologue",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 5,
        "nom": "Proust",
        "prenom": "Marcel",
        "adresse": "Marseille",
        "specialite": "Dentiste",
        "photo": "PraticienF.jfif"
    },
    {
        "id": 6,
        "nom": "Arouet",
        "prenom": "François-Marie",
        "adresse": "Paris",
        "specialite": "ophtalmologue",
        "photo": "PraticienF.jfif"
    },
    {
        "id": 7,
        "nom": "Poquelin",
        "prenom": "Jean-baptiste",
        "adresse": "Lille",
        "specialite": "Dentiste",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 8,
        "nom": "Shakespear",
        "prenom": "William",
        "adresse": "Paris",
        "specialite": "Infirmier",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 9,
        "nom": "Geldog",
        "prenom": "Bob",
        "adresse": "Rouen",
        "specialite": "Infirmier",
        "photo": "PraticienH.jfif"
    },
    {
        "id": 10,
        "nom": "Shakespear",
        "prenom": "William",
        "adresse": "Lille",
        "specialite": "Dentiste",
        "photo": "PraticienH.jfif"
    }
];


 const formulaire = document.getElementById('formulaire');


 let nom = document.querySelector('#nom');
 let ville = document.querySelector('#secteur');
 let specialite = document.querySelector('#specialite');
 let valeur;
 
 const liste = document.getElementById('list');
 
 
 
 let url = "http://localhost:90/gsb/praticien";
 
 let rechercher = document.querySelector('#recherche');
 
 let cpt = 0;
 

 
formulaire.style.display = "none";
 
     fetch(url)
     .then(response => response.json())
     .then((datas) => {
         datas.forEach( (element)=> {
             liste.insertAdjacentHTML('beforeend', `
                <div class="card">
                    <img src="${element.photo}" class="cover" alt="...">
                    <div>
                        <h5 class="card-title">${element.nom} ${element.prenom}</h5>
                        <h5 class="card-title">${element.adresse}</h5>
                        <h5 class="card-title">${element.specialite}</h5>
                    </div>
                </div>
             `);
         });
     });
 
 let urlN2= url;
 
 rechercher.addEventListener('click', (event)=>{
     event.preventDefault();
     liste.innerHTML = "";

 
     if(nom.value !== ''){
         if(cpt === 0){
            urlN2 = urlN2 + "?nom=" + nom.value;
             cpt = 1;
         } else {
            urlN2 = urlN2 + "&nom=" + nom.value;
         }
     }
     if(ville.value !== ''){
         if(cpt === 0){
            urlN2 = urlN2 + "?ville=" + ville.value;
             cpt = 1;
         } else {
            urlN2 = urlN2 + "&ville=" + ville.value;
         }
     }
     if(specialite.value !== ''){
         if(cpt === 0){
            urlN2 = urlN2 + "?specialite=" + specialite.value;
             cpt = 1;
         } else {
            urlN2 = urlN2 + "&specialite=" + specialite.value;
         }
     }

     fetch(url2)
     .then(response => response.json())
     .then((datas) => {
         datas.forEach( (element)=> {
                 liste.insertAdjacentHTML('beforeend', `
                        <div class="card">
                            <img src="${element.photo}" class="cover" alt="...">
                            <div>
                                <h5 class="card-title">${element.nom} ${element.prenom}</h5>
                                <h5 class="card-title">${element.adresse}</h5>
                                <h5 class="card-title">${element.specialite}</h5>
                            </div>
                        </div>
           `);
         });
     });
     nom.value = "";
     ville.value = "";
     specialite.value = "";
 });
 


//let specialite = document.querySelector('#specialite');

// const bouton = document.querySelector('.bouton');

// bouton.addEventListener('click', ()=>{
//     let searching = specialite.Value;
//     dataPraticien.forEach((element) =>{
        

//  });
