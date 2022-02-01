document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-our-work__link-step').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.tab-content').forEach(function(tabContent){
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})