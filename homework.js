let people = [
    { name: 'John', pic: "https://randomuser.me/api/portraits/men/18.jpg" },
    { name: 'Kyle', pic: "https://randomuser.me/api/portraits/men/90.jpg" },
    { name: 'James', pic: "https://randomuser.me/api/portraits/men/22.jpg" },
];


function init() {

    function makePerson(person) {



        let el = document.createElement('li');

        //el.classList.add(person.name.toLowerCase());
        //el.classList.add('people');

        let pic = document.createElement('img');
        pic.src = person.pic;

        let label = document.createElement('p');
        label.textContent = person.name;


        let btn = document.createElement('button');
        btn.textContent = 'like';


        let btn2 = document.createElement('button');
        btn2.textContent = 'nope';


        btn.addEventListener('click', function () {
            console.log(person.name + ' has been liked');
                
        });

        btn2.addEventListener('click', function () {
            console.log(person.name + ' has been noped');
               
            
        });




        el.appendChild(label);
        el.appendChild(btn);
        el.appendChild(btn2);
        el.appendChild(pic);

        parent.appendChild(el);
    }

    let parent = document.querySelector('main ul');
       

    for (let i = 0; i < people.length; i++) {
      makePerson(people[i]) 
   }
}



window.addEventListener('load', init); 