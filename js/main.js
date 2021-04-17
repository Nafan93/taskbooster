document.addEventListener('DOMContentLoaded', () => {
    //
    const btnOpenMenu = document.querySelector('#btnOpenMenu');
    const sidebar = document.querySelector('#sidebar');
    const sidebarWrap = document.querySelector('#sidebarWrap');
    //
    //
    btnOpenMenu.addEventListener('click', () => {

        switch (true) {
            case btnOpenMenu.classList.contains('nav-btn--active'):
                btnOpenMenu.classList.remove('nav-btn--active')
                sidebar.classList.remove('sidebar-active')
                sidebarWrap.classList.remove('sidebar-wrap-active')
                console.log("active has removed");
                break;

            default:
                btnOpenMenu.classList.add('nav-btn--active')
                sidebar.classList.add('sidebar-active')
                sidebarWrap.classList.add('sidebar-wrap-active')
                console.log("active has added");
                break;
        }
    });
    //


    //
});