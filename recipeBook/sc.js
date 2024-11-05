const meals=document.getElementById('meals')
getRandomMeal();
fetchFavMeals();
async function getRandomMeal(){
    const resp= await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respData= await resp.json();
    const randomMeal=respData.meals[0];
    console.log(randomMeal);
    addMeal(randomMeal,true);
}
async function getMealById(id){
    const resp= await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i' + id);
    respData= await resp.json();
    const meal= respData[0];
    return meal;
}
async function getMealBySearch(term){
    const meals= await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i' + term);
}
function addMeal(mealData,random=false){
    const meal=document.createElement('div');
    meal.innerHTML=`<div class="meal-random-header">
    ${random ? `<span class="random-recipe">Random Recipe</span>`:''}
</div>
<div class="meal">
    <div class="meal-header">
        <img src=${mealData.strMealThumb} alt=${mealData.strMeal}>
    </div>
    <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-btn"><i class="fa-regular fa-heart"></i></button>
    </div>
</div>
</div>
`

};
function addMealToFav(mealData){
    const meal=document.createElement('li');
    meal.innerHTML=`<img src="https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg" 
    alt="None">
    <span>Matar Paneer</span>
    `
}
const btn =meal.querySelector(".meal-body .fav-btn");
btn.addEventListener('click',()=>{
    if(btn.classList.contains('active')){
        removeMeal(mealData.idMeal);
        btn.classList.remove('active');
    }
    else{
        addMealToLS(mealData.idMeal);
        btn.classList.add('active');

    }
    btn.classList.toggle("active");
});
meals.appendChild(meal);

function removeMeal(mealId){
    const mealIds=getMealFromLS();
    localStorage.setItem('mealIds',JSON.stringify(mealId.filter(id=> id !== mealId)));

}
function addMealToLS(mealId){
    const mealIds=getMealFromLS();
    localStorage.setItem('mealIds',JSON.stringify([...mealIds,mealId]));
}
function getMealFromLS(){
    const mealIds=JSON.parse(localStorage.getItem('mealIds'));
    return mealIds === null ? []:mealIds;
}
async function fetchFavMeals(){
    const mealIds=getMealFromLS();
    for(i=0;i<mealIds.length;i++){
        const mealId=mealIds[i];
        const meal= await getMealById(mealId);
        addMealToFav(meal);
        
    }
}