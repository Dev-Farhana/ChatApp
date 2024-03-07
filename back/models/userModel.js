// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     profile: {
//       type: String,
//       required: true,
//       default:
//         "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// userSchema.methods.matchPassword = async function(enteredPassword){
//   return await bcrypt.compare(enteredPassword, this.password)
// }

// userSchema.pre('save', async function(next){
//   if(!this.isModified('password')){
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// })

// const User = mongoose.model("User" , userSchema);
// module.exports = User;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

// Use a regular function instead of an arrow function
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Use a regular function for the pre middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
