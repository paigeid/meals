let buttons = document.getElementsByClassName("browse");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
      event.preventDefault();
      let letter = buttons[i].textContent;

      const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter;
      fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json){
        document.getElementById("browseResults").innerHTML = "";
        document.getElementById("noResults").innerHTML = "";
        if (json.meals != null){
          for (let i = 0; i < json.meals.length; i++){
            let meal = "<div class='meal'><h1 class='mealName'>"+json.meals[i].strMeal
            + "</h1>";
            if (json.meals[i].strMealThumb != ""){
              meal += "<img class='mealImage' src='" + json.meals[i].strMealThumb
                + "'>";
            }
            meal += "<button type='button' class='dropdown'>Recipe</button>";
            let ingredients = "";
            if (json.meals[i].strIngredient1 != "" && json.meals[i].strIngredient1 != null){
              ingredients += "<br>" + json.meals[i].strMeasure1 + " " + json.meals[i].strIngredient1;
              if (json.meals[i].strIngredient2 != "" && json.meals[i].strIngredient2 != null){
                ingredients += "<br>" + json.meals[i].strMeasure2 + " " + json.meals[i].strIngredient2;
                if (json.meals[i].strIngredient3 != "" && json.meals[i].strIngredient3 != null){
                  ingredients += "<br>" + json.meals[i].strMeasure3 + " " + json.meals[i].strIngredient3;
                  if (json.meals[i].strIngredient4 != "" && json.meals[i].strIngredient4 != null){
                    ingredients += "<br>" + json.meals[i].strMeasure4 + " " + json.meals[i].strIngredient4;
                    if (json.meals[i].strIngredient5 != "" && json.meals[i].strIngredient5 != null){
                      ingredients += "<br>" + json.meals[i].strMeasure5 + " " + json.meals[i].strIngredient5;
                      if (json.meals[i].strIngredient6 != "" && json.meals[i].strIngredient6 != null){
                        ingredients += "<br>" + json.meals[i].strMeasure6 + " " + json.meals[i].strIngredient6;
                        if (json.meals[i].strIngredient7 != "" && json.meals[i].strIngredient7 != null){
                          ingredients += "<br>" + json.meals[i].strMeasure7 + " " + json.meals[i].strIngredient7;
                          if (json.meals[i].strIngredient8 != "" && json.meals[i].strIngredient8 != null){
                            ingredients += "<br>" + json.meals[i].strMeasure8 + " " + json.meals[i].strIngredient8;
                            if (json.meals[i].strIngredient9 != "" && json.meals[i].strIngredient9 != null){
                              ingredients += "<br>" + json.meals[i].strMeasure9 + " " + json.meals[i].strIngredient9;
                              if (json.meals[i].strIngredient10 != "" && json.meals[i].strIngredient10 != null){
                                ingredients += "<br>" + json.meals[i].strMeasure10 + " " + json.meals[i].strIngredient10;
                                if (json.meals[i].strIngredient11 != "" && json.meals[i].strIngredient11 != null){
                                  ingredients += "<br>" + json.meals[i].strMeasure11 + " " + json.meals[i].strIngredient11;
                                  if (json.meals[i].strIngredient12 != "" && json.meals[i].strIngredient12 != null){
                                    ingredients += "<br>" + json.meals[i].strMeasure12 + " " + json.meals[i].strIngredient12;
                                    if (json.meals[i].strIngredient13 != "" && json.meals[i].strIngredient13 != null){
                                      ingredients += "<br>" + json.meals[i].strMeasure13 + " " + json.meals[i].strIngredient13;
                                      if (json.meals[i].strIngredient14 != "" && json.meals[i].strIngredient14 != null){
                                        ingredients += "<br>" + json.meals[i].strMeasure14 + " " + json.meals[i].strIngredient14;
                                        if (json.meals[i].strIngredient15 != "" && json.meals[i].strIngredient15 != null){
                                          ingredients += "<br>" + json.meals[i].strMeasure15 + " " + json.meals[i].strIngredient15;
                                          if (json.meals[i].strIngredient16 != "" && json.meals[i].strIngredient16 != null){
                                            ingredients += "<br>" + json.meals[i].strMeasure16 + " " + json.meals[i].strIngredient16;
                                            if (json.meals[i].strIngredient17 != "" && json.meals[i].strIngredient17 != null){
                                              ingredients += "<br>" + json.meals[i].strMeasure17 + " " + json.meals[i].strIngredient17;
                                              if (json.meals[i].strIngredient18 != "" && json.meals[i].strIngredient18 != null){
                                                ingredients += "<br>" + json.meals[i].strMeasure18 + " " + json.meals[i].strIngredient18;
                                                if (json.meals[i].strIngredient19 != "" && json.meals[i].strIngredient19 != null){
                                                  ingredients += "<br>" + json.meals[i].strMeasure19 + " " + json.meals[i].strIngredient19;
                                                  if (json.meals[i].strIngredient20 != "" && json.meals[i].strIngredient20 != null){
                                                    ingredients += "<br>" + json.meals[i].strMeasure20 + " " + json.meals[i].strIngredient20;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ingredients += "<br><em>Instructions</em><br>" +  json.meals[i].strInstructions;



            meal += "<div class='content'><p class='recipeText'><em>Ingredients</em>"  + ingredients + "</p></div>";
            meal +="</div>";
            document.getElementById("browseResults").innerHTML += meal;
          }
        }
        else {
          document.getElementById("noResults").innerHTML = "<p class='soSad'>We're currently finding the best recipies that start with \"" +
            buttons[i].textContent + "\", but check back soon!</p>";
        }


      }).then(function(json){
        var coll = document.getElementsByClassName("dropdown");

        for (let i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }
      })
    });

}
