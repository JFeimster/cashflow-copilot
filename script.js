document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
        mobileMenuButton.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // FAQ Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Close all other open accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherParent = otherHeader.parentElement;
                    const otherContent = otherHeader.nextElementSibling;
                    const otherIcon = otherHeader.querySelector('.accordion-icon');
                    otherParent.classList.remove('accordion-open');
                    otherContent.style.maxHeight = '0px';
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current accordion
            if (isExpanded) {
                parent.classList.remove('accordion-open');
                content.style.maxHeight = '0px';
                header.setAttribute('aria-expanded', 'false');
                icon.style.transform = 'rotate(0deg)';
            } else {
                parent.classList.add('accordion-open');
                content.style.maxHeight = content.scrollHeight + 'px'; // Set max-height for smooth transition
                header.setAttribute('aria-expanded', 'true');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});