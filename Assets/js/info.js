 const img = document.createElement('img');

     const g = document.querySelectorAll('path');

     const tagScript = document.querySelector('script');

    const appearEmoticon = (emot = '') => {
        // img.setAttribute('src', './Assets/img/' + emot + '.jpg');
        // console.log('./Assets/img/' + emot + '.jpg');
        // document.body.insertBefore(img, tagScript);

         document.getElementById("content-img").innerHTML =  "<img src='Assets/img/"+emot+".jpg'/>";
        console.log("<img src='Assets/img/"+emot+".jpg'/>");

    };

    g.forEach((inp) => {
        inp.addEventListener('click', function (event) {
            console.log("hi");
            console.log(event);
            switch (event.target.id) {
                case 'Cikakak':
                    appearEmoticon(event.target.id);
                    break;
            }
        });
    });

