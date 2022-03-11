"use strict";
var core;
(function (core) {
    var User = (function () {
        function User(displayName, emailAddress, username, password) {
            if (displayName === void 0) { displayName = ""; }
            if (emailAddress === void 0) { emailAddress = ""; }
            if (username === void 0) { username = ""; }
            if (password === void 0) { password = ""; }
            this.m_displayName = displayName;
            this.m_emailAddress = emailAddress;
            this.m_username = username;
            this.m_password = password;
        }
        Object.defineProperty(User.prototype, "DisplayName", {
            get: function () {
                return this.m_displayName;
            },
            set: function (name) {
                this.m_displayName = name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "EmailAddress", {
            get: function () {
                return this.m_emailAddress;
            },
            set: function (email_address) {
                this.m_emailAddress = email_address;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "Username", {
            get: function () {
                return this.m_username;
            },
            set: function (username) {
                this.m_username = username;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "Password", {
            get: function () {
                return this.m_password;
            },
            set: function (password) {
                this.m_password = password;
            },
            enumerable: false,
            configurable: true
        });
        User.prototype.toString = function () {
            return "Display Name    : ".concat(this.DisplayName, " \nEmail Address : ").concat(this.EmailAddress, " \nUsername : ").concat(this.Username);
        };
        User.prototype.toJSON = function () {
            return {
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username
            };
        };
        User.prototype.fromJSON = function (data) {
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        };
        User.prototype.serialize = function () {
            if (this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "") {
                return "".concat(this.DisplayName, ",").concat(this.EmailAddress, ",").concat(this.Username);
            }
            else {
                console.error("One or more properties of the User is empty");
                return null;
            }
        };
        User.prototype.deserialize = function (data) {
            var propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
        };
        return User;
    }());
    core.User = User;
})(core || (core = {}));
//# sourceMappingURL=user.js.map