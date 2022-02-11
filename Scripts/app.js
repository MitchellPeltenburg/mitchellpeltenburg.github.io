// IIFE -- Immediately Invoked Function Expression
//AKA -- Anonymous Self-Executing Function
(function()
{
    function DisplayHomePage()
    {
        console.log("Home Page");

                
        // fattest memory footprint
        //jQuery way - get all elements with an id of AboutUsButton and for each element add a "click" event
        $("#AboutUsButton").on("click", function(){
            location.href = "about.html";
        });


        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main Paragraph!</p>`);

        // Test our new core.Contact Class
        let darryl = new core.Contact("Darryl Olsen", "555-555-5555", "testmail@gmail.com")
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

        ContactFormValidation();

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {
            event.preventDefault();
            if(subscribeCheckbox.checked)
            {
                let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
                console.log(contact.serialize());
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayEditPage()
    {
        console.log("Edit Page");

        ContactFormValidation();

        let page = location.hash.substring(1);

        switch(page)
        {
            case "add":
                {
                    //Find all h1 tags inside the main tag and change text
                    $("main>h1").text("Add Contact");

                    $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);

                    $("#editButton").on("click", (event) =>
                    {
                        event.preventDefault();
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);
                        location.href = "contact-list.html";


                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href = "contact-list.html";
                    });
                }
                break;
            default:
                {
                    //Gets Contact from localStorage and displays it in the form
                    let contact = new core.Contact();
                    contact.deserialize(localStorage.getItem(page));

                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);

                    $("#editButton").on("click", (event) =>
                    {
                        event.preventDefault();
                        // get changes from the page
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.EmailAddress = $("#emailAddress").val();

                        // replace the item in local storage
                        localStorage.setItem(page, contact.serialize());
                        // go back to the contact list page (refresh)
                        location.href = "contact-list.html";


                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href = "contact-list.html";
                    });
                }
                break;
        }
    }

    /**
     * This function adds a Contact object to localStorage
     * 
     * @param {string} fullName 
     * @param {string} contactNumber 
     * @param {string} emailAddress 
     */
    function AddContact(fullName, contactNumber, emailAddress)
    {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        console.log(contact.serialize());
        if(contact.serialize())
        {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contact.serialize());
        }
    }

    /**
     * This method validates a field in the form and displays an error in the message area div element
     * 
     * @param {string} fieldID 
     * @param {RegEx} regular_expression 
     * @param {string} error_message 
     */
    function ValidateField(fieldID, regular_expression, error_message)
    {
        let messageArea = $("#messageArea").hide();
        

        $("#" + fieldID).on("blur", function()
        {
            let text_value = $(this).val();
            if(!regular_expression.test(text_value))
            {
                // doesn't pass Regex test
                $(this).trigger("focus").trigger("select"); //go back to the text box and select all the text
                
                messageArea.addClass("alert alert-danger").text(error_message).show(); //add the alert to the div element
            }
            else
            {
                // does pass Regex test
                messageArea.removeAttr("class").hide();
            }
        });
    }

    function ContactFormValidation()
    {
        ValidateField("fullName", /^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,})((\s|,|-)([A-Z][a-z]{1,}))*(\s|,|-)([A-Z][a-z]{1,})$/, "Please enter a valid Full Name. This must include at least a Capitalized First Name and a Capitalized Last Name");
        ValidateField("contactNumber", /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Please enter a valid Contact Number. Example: (416) 555-5555");
        ValidateField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, "Please enter a valid Email Address.");
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

                let contact = new core.Contact(); //create an empty Contact object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
                </tr>`;



                index++;
            }

            contactList.innerHTML = data;

            $("#addButton").on("click", () =>
            {
                location.href = "edit.html#add";
            })

            $("button.delete").on("click", function()
            {
                if(confirm("Are you sure?"))
                {
                    localStorage.removeItem($(this).val())
                }
                location.href = "contact-list.html";
            })

            $("button.edit").on("click", function()
            {
                location.href = "edit.html#" + $(this).val();
            })
        }
    }

    function DisplayLoginPage()
    {
        console.log("Login Page");
    }

    function DisplayRegisterPage()
    {
        console.log("Register Page");
    }

    //named function
    let Start = function()
    {
        console.log("App Started!");

        switch (document.title) {
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

          case "Edit":
            DisplayEditPage();
            break;

          case "Login":
            DisplayLoginPage();
            break;

          case "Register":
            DisplayRegisterPage();
            break;
        }
    }

    window.addEventListener("load", Start);
})();