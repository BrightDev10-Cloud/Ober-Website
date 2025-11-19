
    // Search Bar Functionality - Removed typing animation logic

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            // Check if this item is currently active
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                const faqAnswer = faqItem.querySelector('.faq-answer');
                faqAnswer.style.maxHeight = null;
                faqAnswer.style.display = 'none';
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                answer.style.display = 'block';
                // Use setTimeout to allow display change to take effect before setting maxHeight
                setTimeout(() => {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }, 10);
            }
        });
    });
