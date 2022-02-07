/**
 * Mitchell Peltenburg and Deonte Bayliss
 * WEBD6201
 * February 6 2022
 * Tom Tsiliopoulos
 */

// IIFE -- Immediately Invoked Function Expression
//AKA -- Anonymous Self-Executing Function
(function()
{
    /**
     * Displays the home page and injects the text for the page, as well as providing a click event for the AboutUsButton
     */
    function DisplayHomePage()
    {
        console.log("Home Page");

        //Get all elements with an id of AboutUsButton and for each element add a "click" event
        $("#AboutUsButton").on("click", () =>
        {
            location.href = "about.html";
        });

        //Get the p tag element - of which there is only one - and inject text into the page
        $("p").append(`<p id="MainParagraph" class="mt-3" style="color:white">This website showcases some of the projects
        Mitchell and Deonte have worked on, as well as what skills we bring to the table.</p>`);

        ReplaceProductsLink();
        AddHRLink();
        AddBottomNavbar();
    }

    /**
     * Displays the products (projects) page and injects the text for the page
     */
    function DisplayProductsPage()
    {
        console.log("Products Page");
        $("h1").replaceWith(`
        <h1><i class="fas fa-drum"> Our Projects</h1>`);

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">This page features both Mitchell's and Deonte's past projects.

        </p>
        </article>`);

        $("body").append(`
        <article class="container">
        <h5> Mitchell's Projects</h5>
        <div class="d-flex flex-nowrap">
          <div class="order-3 p-2"><img src="./Images/webpage2.png" alt="webpage2" width="450" height="450" /></div>
          <div class="order-2 p-2"><img src="./Images/webpage1.png" alt="webpage1" width="450" height="450" /></div>
        </div>
        
        </article>`);

        
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">
        The first of Mitchell's projects involves a C# application involving the entity and identity framework. This web application
        is capable of running CRUD operations on a database with multiple tables, as well as registration and login functionality. This
        app also makes use of CSHTML to handle front-end design.

        </p>
        </article>`);

        $("body").append(`<article class="container">
        <img src="./Images/video.png" alt="Video-Screenshot" width="650" height="400" />
        </article>`);

        
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">
        The second of Mitchell's projects is a collaborative video involving 9 musicians creating a jazz rock cover of Welcome To The Jungle.
        This project involved syncing the audio of each instrument, changing the camera angles, transitions and coordinating with each musician
        (as well as playing the drums!).

        </p>
        </article>`);

        $("body").append(`
        <article class="container">
        <h5> Deonte's Projects</h5>
        <img src="./Images/Alucine2019poster.jpg" alt="aluCine Poster" width="450" height="500" />
        </article>`);

        
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">
        Deonte's first project is poster made for a film festival back in 2019, it was a project that had to work on with aluCine. 
        During this time I had to design a graphic that would be used for all advertisement media. I made this poster using adobe photoshop and adobe illustrator.
        From this art work I was able to make more such as a small animation were parts poster come alive and much more.

        </p>
        </article>`);

        $("body").append(`<article class="container">
        <img src="./Images/Lab1.jpg" alt="Lab Screenshot" width="650" height="400" />
        </article>`);

        
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">
        The second project that Deonte has is of C++, it is a lab project that demonstrates the use of my C++ skills.
        This is a program which takes the scores of three archers for a total of four rounds and out puts them, for every round. 
        At the end of the program, it tells you the overall average. 
        This program also has validation checks to make sure the user puts in a whole number and does not input anything else that would be wrong like letters.

        </p>
        </article>`);


        ActiveReplaceProductsLink();
        AddHRLink();
        AddBottomNavbar();
    }

        /**
     * Displays the services page and injects the text for the page
     */
    function DisplayServicesPage()
    {
        console.log("Services Page");

        $("body").append(`<article class="container">
        <h4> Mitchell's and Deonte's Skills We Offer You!
        </h4>
        </article>`);

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">This page features both Mitchell's and Deonte's skill sets.
        Each skill has helped us in many ways, whether it be for school or for a job our skills have made a good impact in our lives. Each skill has been gained and practiced.
        These are the skills we can offer and do for you.

        </p>
        </article>`);
        
        $("body").append(`<article class="container">
        <h5> Photography - Deonte
        </h5><img src="./Images/DSC00089.jpg" alt="Photo of butterfly" width="350" height="400" />
        </article>`);

        
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">My two skills that I think are the best that I would like to showcase are photography and
        graphic design.
        Deontes first skill is photography, I started doing photography when I was younger it quickly became one of my favorite pass times. 
        It got to the point were I was skilled enough to get a job doing it. One of my first jobs was taking pictures at a company for their events and products.
        Photography is one of my best skills as it has lead to me deveopling more skills like editing on adobe softwares and being able to create graphics like icons. 
        If you have a need for a photographer I am your guy, I can edit, I can color correct and much more.

        </p>
        </article>`);
        
        
       
        $("body").append(`<article class="container">
        <h5> Graphic Design - Deonte
        </h5><img src="./Images/Deonte Bayliss (1).png" alt="Photo of butterfly" width="350" height="400" />
        </article>`);

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">Deontes' second skill is graphic design, I am able to design lots of graphics and have working expreince doing so.
        This is a skill that can also be transfered into helping design images and icons for sites and even images. I can help code your website and build images that go along with it.
      
        </p>
        </article>`);

        $("body").append(`<article class="container">
        <h5> C# - Mitchell
        </h5><img src="./Images/C.png" alt="C# Icon" width="650" height="400" />
        </article>`);

        
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">
        The first of Mitchell's skills is C# coding. I've worked with various types of applications such as web applications and WPF forms.
        I'm also well-versed in using the entity framework to create an application that can perform basic CRUD operations on a database, as well
        as the identity framework to perform login and registration functionality. Additionally, I've gained experience using CSHTML for front-end design in the visual studio
        environment.

        </p>
        </article>`);

        $("body").append(`<article class="container">
        <h5> Video Editing - Mitchell
        </h5><img src="Images/video-editing.png" alt="Editing software" width="650" height="400" />
        </article>`);

        
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">
        The second of Mitchell's skills is video editing. After taking a brief course, I spent years creating videos for leisure and for school. In that time I've made tutorials,
        montages, compilations, and even music covers involving multiple instrumentalists from across the country combined into one video. On top of programming, video editing is
        something I have a huge passion for, and I'm always striving to learn new things about how I can improve my skills in order to reach a wider audience.

        </p>
        </article>`);

        
        ReplaceProductsLink();
        AddHRLink();
        AddBottomNavbar();
    }

    /**
     * Displays the about page and injects the text for the page
     */
    function DisplayAboutPage()
    {
        console.log("About Page");

        $("body").append(`<article class="container">
        <h4> Learn More About Mitchell and Deonte
        </h4>
        </article>`);

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3"> In this section you can learn more about us, things we enjoy and our key interests.
        </p>
        </article>`);


        $("body").append(`<article class="container">
        <h5> About - Deonte 
        </h5>
        </article>`);

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">Deonte is a Computer Programming student at Durham college. 
        I have been taking Computer programming for over a year and have learned many new things. 
        I have taking classes in C++, C#, HTML, Python, and much more. During this time, I developed my skills by doing labs and ices to get better and better at what I do.

        </p>
        </article>`);

        $("body").append(`<article class="container">
        <img src="./Images/Deonte.jfif" alt="Deonte" width="150" height="150" />
        </article>`);

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">I have also taken other course for graphic design, marketing and have really enjoyed it. 
        I have many hobbies as well such as doing MMA, photography and playing games for fun. 
        I also enjoy watching nature films, anime, super movies and tv shows.

        </p>
        </article>`);

        $("body").append(`<article class="container">
        <img src="./Images/bee.jpeg" alt="A bee" width="400" height="400" />
        </article>`);



        $("body").append(`<article class="container">
        <h5 class="mt-3"> About - Mitchell 
        </h5>
        </article>`);

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">I'm a Computer Programmer Analyst student at Durham College, currently halfway to
        getting my diploma. So far, I've learned about C++, C#, HTML, PostgreSQL, javascript, and more. 
        I love to use what I'm learning for personal projects while adding more tools to my skillset to further boost my <a href="https://docs.google.com/document/d/1Ux2Heh8VpmlfFYHRyeZGw6GDJ7R3RplMhAYo2IcL5iw/edit#">resume</a>.

        </p>
        </article>`);

        $("body").append(`<article class="container">
        <img src="./Images/Mitchell.jpg" alt="Mitchell" width="125" height="150" />
        </article>`);

        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class ="mt-3">On top of programming, I also love to spend my time editing videos, whether it be commissions for others, or
        just a side project that I'll use to learn something new. Music is a huge part of my life as well, and when combined with video editing, this allows me
        to share my drum covers with the world. Constantly learning is something I'll never grow tired of, whether it be for music, video editing, or programming, it's
        what I love to do.

        </p>
        </article>`);

        $("body").append(`<article class="container">
        <img src="./Images/music.jfif" alt="A bee" width="500" height="400" />
        </article>`);



        ReplaceProductsLink();
        AddHRLink();
        AddBottomNavbar();
    }

    /**
     * Displays the contact page and creates a new Contact object using the information inputted by the user
     * before outputting it to the console
     */
    function DisplayContactPage()
    {
        console.log("Contact Page");
        ReplaceProductsLink();
        AddHRLink();
        AddBottomNavbar();

        let sendButton = document.getElementById("sendButton");

        sendButton.addEventListener("click", function(event)
        {
          event.preventDefault();

          let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
          console.log(contact.serialize());
          if(contact.serialize())
          {
              let key = contact.FullName.substring(0, 1) + Date.now();

              localStorage.setItem(key, contact.serialize());
          }
            
        });
    }

    /**
     * Replaces the product page link's text with 'Projects'
     */
    function ReplaceProductsLink()
    {
        $("#products-link").replaceWith(`
              <li class="nav-item">
                <a id="products-link" class="nav-link" href="products.html"><i class="fas fa-project-diagram"></i> Projects</a>
              </li>`);
    }

    /**
     * Replaces the product page link's text with 'Projects' and makes it appear active
     */
         function ActiveReplaceProductsLink()
         {
             $("#products-link").replaceWith(`
                   <li class="nav-item">
                     <a id="products-link" class="nav-link active" href="products.html"><i class="fas fa-project-diagram"></i> Projects</a>
                   </li>`);
         }

    /**
     * Adds link to human resources between the About Us and Contact Us links in the nav bar
     */
    function AddHRLink()
    {
        $("li").eq(3).after(`
        <li class="nav-item">
          <a id="hr-link" class="nav-link" href="human-resources.html"><i class="fas fa-users"></i> Human Resources</a>
        </li>`);
    }

    /**
     * Appends a navbar at the bottom of the body tag which contains a copyright
     */
    function AddBottomNavbar()
    {
        $("body").append(`
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">&copy; CopyRight 2022</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>`)
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