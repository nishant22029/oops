document.getElementById('addBlog').addEventListener('click', function () {
  document.getElementById('popupContact').style.display = 'block';
});
document.getElementById('close').addEventListener('click', function () {
  document.getElementById('popupContact').style.display = 'none';
});



class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  
    
  }
  addContaint() {
    document.querySelector('.body-div2').innerHTML += `
    <div class="article-card" id="flashcard">
  
    <div class="card-text" id="card-text">
        <h1 id="blog-title">${
          this.title.length > 18
            ? this.title.toUpperCase().substr(0, 18) + '...'
            : this.title.toUpperCase()
        }</h1>
        <p id="blog-description">${
          this.detail.length > 150
            ? this.detail.substr(0, 150) + '...'
            : this.detail
        }</p>
        
    </div>
    <div class="card-buttons">
    <a><button id="delete" class="delete">DELETE</button></a>
    </div>
</div>
    `;
    document.getElementById('popupContact').style.display = 'none';
    deleteFunc();
  }
}

var post = document.getElementById('post');
post.addEventListener('click', function () {
  var title = document.getElementById('title').value;
  var detail = document.getElementById('detail').value;
 
  addBlog(title, detail);
});



function addBlog(title, detail) {
  var add_blog = new Blog(title, detail);
  
  add_blog.addContaint();
}
function deleteFunc() {
  const deleteBtn = document.querySelectorAll('.delete');
  deleteBtn.forEach(function (element) {
  element.addEventListener('click', function () {
      var delete_blog = element.parentElement.parentElement.parentElement;
      
          delete_blog.remove();})
  })
}