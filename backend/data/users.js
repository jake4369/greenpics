import bcrypt from "bcryptjs";

const users = [
  {
    name: "Jake Samuels",
    username: "jake123",
    email: "jake@email.com",
    password: bcrypt.hashSync("123456", 10),
    county: "West Midlands",
    profileImg: "/images/profile.jpeg",
    bio: "",
    favourites: [],
    isAdmin: true,
  },
  {
    name: "Simone Dessi",
    username: "simone123",
    email: "simone@email.com",
    password: bcrypt.hashSync("123456", 10),
    county: "West Midlands",
    profileImg: "/images/profile.jpeg",
    bio: "",
    favourites: [],
    isAdmin: false,
  },
];

export default users;
