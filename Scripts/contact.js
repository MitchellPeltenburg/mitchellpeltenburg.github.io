class Contact
{
    // public properties (getters and setters)
    get FullName()
    {
        return this.m_fullName;
    }

    set FullName(fullName)
    {
        this.m_fullName = fullName;
    }

    get ContactNumber()
    {
        return this.m_contactNumber;
    }

    set ContactNumber(contactNumber)
    {
        this.m_contactNumber = contactNumber;
    }

    get EmailAddress()
    {
        return this.m_emailAddress;
    }

    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }

    //public methods

    //Serializes the Contact object
    serialize()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
        {
            return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
        }
        else
        {
            console.error("One or more properties of the Contact are missing or empty");
            return null;
        }
    }

    //Deserializes the Contact object
    deserialize(data)
    {
        let propertyArray = data.split(","); //assume that data is a comma-separated list of properties (strings)
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }

    // constructor
    constructor(fullName, contactNumber, emailAddress)
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }

    // public overrides
    //Formats output that will later be printed to the console
    toString()
    {
        return `Full Name      : ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address : ${this.EmailAddress}`;
    }

}