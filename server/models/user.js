const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
// const bcrypt = require("bcrypt");

const User = sequelize.define(
  "user",
  {
    role: {
      type: DataTypes.STRING,
      defaultValue: "customer",
    },
    first_name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    last_name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    street: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    house_no: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    supplement: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    zip: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    city: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: "Germany",
    },
    email: {
      type: DataTypes.STRING(320),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email is required.",
        },
      },
    },
    /*     confirmPassword: {
      type: DataTypes.VIRTUAL,
      get() {
        return this._confirmPassword;
      },
      set(value) {
        this._confirmPassword = value;
      },
    }, */
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password is required.",
        },
      },
      /*       validate: {
        equals: {
          args: this.confirmPassword,
          msg: "Passwords do not match. Please make sure that your password and the password confirmation are the same.",
        },
      }, */
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    updatedAt: "updated_at",
    createdAt: "created_at",
    /*     instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
    }, */
  }
);

/* // VIRTUAL FIELD
// NOT SAVED IN THE DB

User.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

User.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords must match!");
  }
  next();
});

User.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 8);
    console.log("HASHED PASSWORD", hashedPassword);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log("ERROR", "hashing error");
    next(error);
  }
}); */

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true
module.exports = User;
