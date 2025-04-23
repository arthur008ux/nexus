const myObserver = new IntersectionObserver((efeitos) => {
    efeitos.forEach((efeito) => { 
        if(efeito.isIntersecting === true){
            
            efeito.target.classList.add('show')

        }

        else{
            efeito.target.classList.remove('show')
        }
    })
});

const sections = document.querySelectorAll('.hidden');

sections.forEach((section) =>
    myObserver.observe(section)
)
document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden, .team-photo");

    const observerfoto = new IntersectionObserver(
        (fotos) => {
            fotos.forEach((foto) => {
                if (foto.isIntersecting) {
                    foto.target.classList.add("show");
                }
                else{
                    foto.target.classList.remove("show");
                }
            });
        },
        {

        }
    );

    hiddenElements.forEach((el) => observerfoto.observe(el));
});

