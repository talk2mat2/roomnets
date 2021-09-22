const express = require("express");
const App = express();
const connectDB = require("./db/connection");
const cors = require("cors");
const UserRoutes = require("./routes/userroutes");
const mongoose = require("mongoose");
const path = require("path");
const { SocketIo } = require("./socket.io");
const Userschema= require("./models/userMoodel");
const Rooms= require("./models/rooms");
const Apartments= require("./models/apartments");
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroExpress = require('@admin-bro/express')
AdminBro.registerAdapter(AdminBroMongoose)
process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;
const connection= connectDB();
//  const connection = mongoose.connect('mongodb://localhost:27017/test', {
//   useNewUrlParser: true,
// })

// const adminBro = new AdminBro ({
//   databases: [connection],
//   rootPath: "/admin",
// })



const adminBro = new AdminBro ({
  Databases: [connection],
  rootPath: '/admin',
  resources: [Userschema, Rooms, Apartments],
  branding: {
    companyName: "RoomNets",
    softwareBrothers: false,
    logo:  "/api/v1/media/logo2.png",
  },
  dashboard: {
    handler: async () => {
      return { some: 'output' }
    },
    component: AdminBro.bundle('./adminbro/home')
  },
})
const router = AdminBroExpress.buildRouter (adminBro)
const Port = process.env.PORT || 8080;
App.use(adminBro.options.rootPath, router)
App.use(cors());

App.use(express.json({ extended: false }));
App.use(express.static(path.join(__dirname, "./frontend")));
// App.use(express.static(path.join(__dirname, "./admin2")));
App.set("views", path.join(__dirname, "views"));
// App.set("view engine", "ejs");
// App.use('/uploads', express.static('adminbro'));
App.use("/api/v1", UserRoutes);
// App.get("/admin", (req, res) => {
//   res.send({"admin":"admin route"});
// });
// App.get("/admin2", (req, res) => {
//   res.sendFile(path.join(__dirname, "./admin2", "index.html"));
// });
App.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend", "index.html"));
});


App.listen(Port, (err, successs) => {
  if (err) throw err;
  else {
    console.log(`server running on port ${Port}`);
  }
});
