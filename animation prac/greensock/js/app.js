let exDiv = document.getElementById("txtCool");

TweenMax.to(exDiv, {duration: 2, x: 100});

for(let i = 0; i < navItems.length; i++){
    TweenLite.from(navItems[i], 
        {duration: .5, x: 300, alpha: 0, delay: 1})
};