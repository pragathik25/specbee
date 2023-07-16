
// const accordionItems = document.querySelectorAll('.accordion__item');
// accordionItems .forEach((item) => {
//         const accordionTitles = item.querySelector('.accordion__title');
//         const accordionContents = item.querySelector('.accordion__content');

//         accordionTitles.addEventListener('click', function() {
//             accordionContents.classList.toggle('show');
//         });
//     });

    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach((item) => {
      const title = item.querySelector('.accordion__title');
      const content = item.querySelector('.accordion__content');

      title.addEventListener('click', function() {
        const expandedItem = document.querySelector('.accordion__item.active');
        const expandedContent = expandedItem?.querySelector('.accordion__content');

        if (expandedItem && expandedContent !== content) {
          expandedItem.classList.remove('active');
          expandedContent.classList.remove('show');
        }

        item.classList.toggle('active');
        content.classList.toggle('show');
      });
    });