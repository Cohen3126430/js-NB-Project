// עידכון השם ב-התחברות
const userNameHome = sessionStorage.getItem('firstName');
const inputNameHome = document.getElementById('user');
if (userNameHome) {
    inputNameHome.innerHTML = `<a class="nav-link" href="#">${userNameHome} <i class="fa-solid fa-user"></i></a>`;
}

// debugger
const searchInput = document.getElementById('Search');
// container  ,enterשניות לאחר טעינת העמוד יוכנס ל-?
// המכיל את כל מה שיש בריבוע הכניסה
const enter = document.getElementById('enter');
const body = document.querySelector('body');
setTimeout(() => {
    if (!(sessionStorage.getItem('firstName'))) {
        const container = document.createElement('div');
        container.classList.add('containerLogin');

        // רקע אפור שקוף
        const opacity = document.createElement('div');
        opacity.classList.add('opacity');
        container.append(opacity);

        const login = document.createElement('div');
        login.classList.add('login');
        container.append(login);

        const title = document.createElement('h4');
        title.classList.add('loginTitle');
        title.innerHTML = '...איזה מזל שאת פה';
        login.append(title);

        const inputName = document.createElement('input');
        inputName.type = ('text');
        inputName.placeholder = ('שם');
        inputName.id = "nameEnter";
        login.append(inputName);

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        login.append(buttons);
        
        const buttonMom = document.createElement('button');
        buttonMom.classList.add('wc-proceed-to-checkout');
        buttonMom.classList.add('checkoutButton');
        buttonMom.innerHTML = '<< NB אמא לנסיך';
        buttons.append(buttonMom);

        const buttonPhotograper = document.createElement('button');
        buttonPhotograper.classList.add('wc-proceed-to-checkout');
        buttonPhotograper.classList.add('checkoutButton');
        buttonPhotograper.innerHTML = '<< צלמת מתעדכנת';
        buttons.append(buttonPhotograper);

        const imgLogo = document.createElement('img');
        imgLogo.src = "./assets/logo.png"; // עדכון לנתיב יחסי
        imgLogo.style.width = "50%";
        login.append(imgLogo);

        buttonMom.onclick = () => {
            const name = document.getElementById("nameEnter");
            if ((name.value)) {
                const userName = document.getElementById("user");
                userName.innerHTML = `<a class="nav-link" href="#">${name.value} <i class="fa-solid fa-user"></i></a>`;
                sessionStorage.setItem('firstName', name.value);
                window.location = "./pages/gallery/gallery.html"; // עדכון לנתיב יחסי
            } else {
                name.placeholder = "שדה חובה!!!!";
                name.style.width = "100%";
                name.style.backgroundColor = "#F09AA2";
            }
        }

        buttonPhotograper.onclick = () => {
            const name = document.getElementById("nameEnter");
            if ((name.value)) {
                const userName = document.getElementById("user");
                userName.innerHTML = `<a class="nav-link" href="#">${name.value} <i class="fa-solid fa-user"></i></a>`;
                sessionStorage.setItem('firstName', name.value);
                window.location = "./pages/accessories/accessories.html?productCategory=accessories"; // עדכון לנתיב יחסי
            } else {
                name.placeholder = "שדה חובה!!!!";
                name.style.width = "100%";
                name.style.backgroundColor = "#F09AA2";
            }
        }

        opacity.onclick = () => {
            container.remove();
        }
        enter.append(container);
    }
}, 1500);
