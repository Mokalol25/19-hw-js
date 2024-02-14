const categoriesList = document.querySelectorAll('#categories .item');
categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('li').length;
    console.log(`Категорія: ${categoryName}`);
    console.log(`Кількість елементів: ${itemsCount}`);
});