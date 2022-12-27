document.body.addEventListener('click',appendArticles); 

      function appendArticles(){
        let body = document.getElementsByTagName("body");
        for (let index = 1; index < 6; index++) {
          let articles = document.createElement("article");
          articles.innerText = "Lorem ispsum "+[index];
          articles.className = "message"; 
          body[0].append(articles);
        }
          //document.getElementsByName("body")[0].append(articles);
      }