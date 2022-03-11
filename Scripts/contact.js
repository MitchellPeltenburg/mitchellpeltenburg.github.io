"use strict";
var core;
(function (core) {
    var Contact = (function () {
        function Contact(fullName, contactNumber, emailAddress) {
            if (fullName === void 0) { fullName = ""; }
            if (contactNumber === void 0) { contactNumber = ""; }
            if (emailAddress === void 0) { emailAddress = ""; }
            this.m_fullName = fullName;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;
        }
        Object.defineProperty(Contact.prototype, "FullName", {
            get: function () {
                return this.m_fullName;
            },
            set: function (fullName) {
                this.m_fullName = fullName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Contact.prototype, "ContactNumber", {
            get: function () {
                return this.m_contactNumber;
            },
            set: function (contactNumber) {
                this.m_contactNumber = contactNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Contact.prototype, "EmailAddress", {
            get: function () {
                return this.m_emailAddress;
            },
            set: function (emailAddress) {
                this.m_emailAddress = emailAddress;
            },
            enumerable: false,
            configurable: true
        });
        Contact.prototype.serialize = function () {
            if (this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "") {
                return "".concat(this.FullName, ",").concat(this.ContactNumber, ",").concat(this.EmailAddress);
            }
            else {
                console.error("One or more properties of the Contact are missing or empty");
                return null;
            }
        };
        Contact.prototype.deserialize = function (data) {
            var propertyArray = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        };
        Contact.prototype.toString = function () {
            return "Full Name     : ".concat(this.FullName, "\nContact Number: ").concat(this.ContactNumber, "\nEmail Address : ").concat(this.EmailAddress);
        };
        return Contact;
    }());
    core.Contact = Contact;
})(core || (core = {}));
//# sourceMappingURL=contact.js.map