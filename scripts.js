var tabs = document.querySelectorAll(".tabs_wrap ul li");
var homens = document.querySelectorAll(".homem");
var mulheres = document.querySelectorAll(".mulher");
var todos = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=> {
		tabs.forEach((tab) => {
			tab.classList.remove("active");
		})
		tab.classList.add("active");

		var tabval = tab.getAttribute("data-tabs");

		todos.forEach((item)=>{
			item.style.display = "none";
		})
		
		if(tabval == "homem"){
			homens.forEach((homem)=>{
				homem.style.display = "block";
			})
		}
		else if(tabval == "mulher"){
			mulheres.forEach((mulher)=>{
				mulher.style.display = "block";
			})
		}
		else {
			todos.forEach((item)=>{
				item.style.display = "block";
			})
		}
	})
})