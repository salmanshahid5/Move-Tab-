const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const allContent = document.querySelectorAll('.content')
function tabClicked(tab){
    console.log(tab.textContent.trim());
    if(tab.textContent.trim().toLowerCase() == 'home'){
        allContent[0].style.display = 'block';
        allContent[1].style.display = 'none';
        allContent[2].style.display = 'none';
        allContent[3].style.display = 'none';
        allContent[4].style.display = 'none';
        allContent[0].classList.add('show');

    }
    else if(tab.textContent.trim().toLowerCase() == 'services'){
        allContent[1].style.display = 'block';
        allContent[0].style.display = 'none';
        allContent[2].style.display = 'none';
        allContent[3].style.display = 'none';
        allContent[4].style.display = 'none';
        allContent[1].classList.add('show');
    }
    else if(tab.textContent.trim().toLowerCase() == 'contact'){
        allContent[1].style.display = 'none';
        allContent[0].style.display = 'none';
        allContent[2].style.display = 'block';
        allContent[3].style.display = 'none';
        allContent[4].style.display = 'none';
        allContent[2].classList.add('show');
    }
    else if(tab.textContent.trim().toLowerCase() == 'location'){
        allContent[1].style.display = 'none';
        allContent[0].style.display = 'none';
        allContent[2].style.display = 'none';
        allContent[3].style.display = 'block';
        allContent[4].style.display = 'none';
        allContent[3].classList.add('show');
    }
    else if(tab.textContent.trim().toLowerCase() == 'about'){
        allContent[1].style.display = 'none';
        allContent[0].style.display = 'none';
        allContent[2].style.display = 'none';
        allContent[3].style.display = 'none';
        allContent[4].style.display = 'block';
        allContent[4].classList.add('show');
    }
}