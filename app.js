// content , about, tab-btn these are the class we will be targeting
const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

// // so we are listening for clicks with in the article with class of about. any clicks that has an id of the dataset values, we will 1st remove the active class from all the btns and add the active class to the target where we click at based on the dataset
about.addEventListener('click',(e) => {
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if(id){
    //remove active class from other btns and place it on the tab that was clicked on
    btns.forEach((btn) => {
      btn.classList.remove('active')
      e.target.classList.add('active')
    })
    // hide all articles and show only the article related to the tab that was clicked on
    articles.forEach((article) => {
      article.classList.remove('active')
    })
    const selectedArticle = document.getElementById(id)
    selectedArticle.classList.add('active')
  }
  
})