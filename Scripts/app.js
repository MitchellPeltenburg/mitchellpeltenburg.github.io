// IIFE -- Immediately Invoked Function Expression
//AKA -- Anonymous Self-Executing Function
(function()
{
    function DisplayHomePage()
    {
        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
            console.log("About Us Button Clicked!");
        });
        
        // Step 1 - get a reference to an entry point(s) (insertion / deletion)
        let MainContent = document.getElementsByTagName("main")[0];
        //let DocumentBody = document.body;

        // Step 2 - Create a HTML Element in memory
        let MainParagraph = document.createElement("p");

        // Step 3 - Configure new Element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        //let FirstString = "This is";
        //let SecondString = `${FirstString} the Main Paragraph`;
        MainParagraph.textContent = "This is the Main Paragraph!";

        // Step 4 - perform insertion / deletion
        MainContent.appendChild(MainParagraph);

        // Test our new Contact Class
        let darryl = new Contact("Darryl Olsen", "555-555-5555", "testmail@gmail.com")
        console.log(darryl.toString())
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }

    function DisplayAboutPage()
    {
        console.log("About Page");
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");
    }

    //named function
    let Start = function()
    {
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;

            case "Our Products":
                DisplayProductsPage();
                break;

            case "Our Services":
                DisplayServicesPage();
                break;

            case "About Us":
                DisplayAboutPage();
                break;

            case "Contact Us":
                DisplayContactPage();
                break;
        }
    }

    window.addEventListener("load", Start);
})();