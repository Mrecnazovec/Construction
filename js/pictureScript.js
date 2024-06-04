const gallery = document.querySelector('.galery_box');
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modalImg');

        gallery.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                modalImg.src = e.target.src;
                modal.classList.add('show');
            }
        });

        modal.addEventListener('click', () => {
            modal.classList.remove('show');
        });