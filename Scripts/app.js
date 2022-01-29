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

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {
            event.preventDefault();
            if(subscribeCheckbox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                console.log(contact.serialize());
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayContactListPage()
    {
        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");

            let data = "";

            let keys = Object.keys(localStorage); //returns a list o keys from localStorage

            let index = 1;

            //for every key in the keys string array
            for(const key of keys)
            {
                let contactData = localStorage.getItem(key); //get localStorage data value

                let contact = new Contact(); //create an empty Contact object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>`;

                index++;
            }

            contactList.innerHTML = data;
        }
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
            
            case "Contact-List":
                DisplayContactListPage();
                break;
        }
    }

    window.addEventListener("load", Start);
})();