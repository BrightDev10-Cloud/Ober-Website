document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.nav');

    if (mobileNavToggle && nav) {
        mobileNavToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileNavToggle.classList.toggle('active');
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            // Set initial state for all but the first item
            if (!item.isEqualNode(faqItems[0])) {
                answer.style.maxHeight = null;
                answer.style.display = 'none';
                item.classList.remove('active');
            } else {
                // Ensure the first item is active by default
                item.classList.add('active');
                answer.style.display = 'block';
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all items
                faqItems.forEach(i => {
                    i.classList.remove('active');
                    const ans = i.querySelector('.faq-answer');
                    ans.style.maxHeight = null;
                    ans.style.display = 'none';
                });

                // If the clicked item was not already active, open it
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.display = 'block';
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Search Bar Select Styling
    const searchSelects = document.querySelectorAll('.search-item select.value');

    searchSelects.forEach(select => {
        select.addEventListener('change', () => {
            if (select.value === "") {
                select.style.color = "var(--text-light)";
            } else {
                select.style.color = "var(--text-dark)";
            }
        });
    });

    // Sticky Header
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Date Picker
    flatpickr("#date-picker", {
        dateFormat: "F j, Y",
        "disable": [
            function(date) {
                // return true to disable
                return (date.getDay() === 0 || date.getDay() === 6);

            }
        ],
        "locale": {
            "firstDayOfWeek": 1 // start week on Monday
        }
    });
});