const express = require("express");
const App = express();
const connectDB = require("./db/connection");
const cors = require("cors");
const UserRoutes = require("./routes/userroutes");
const mongoose = require("mongoose");
const path = require("path");
const { SocketIo } = require("./socket.io");
const Userschema = require("./models/userMoodel");
const GoogleAdsense = require("./models/GoogleAdsense");
const Rooms = require("./models/rooms");
const Apartments = require("./models/apartments");
const ContactMessage = require("./models/contactMessages");
const Blogs = require("./models/blog");
const Blogscomments = require("./models/BlogComments");
const AdRates = require("./models/AdRates");
const homepageModels = require("./models/homepageModel");
const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const AdminBroExpress = require("@admin-bro/express");
AdminBro.registerAdapter(AdminBroMongoose);
process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;
const connection = connectDB();
//  const connection = mongoose.connect('mongodb://localhost:27017/test', {
//   useNewUrlParser: true,
// })

// const adminBro = new AdminBro ({
//   databases: [connection],
//   rootPath: "/admin",
// })

const locale = {
  translations: {
    labels: {
      // change Heading for Login
      loginWelcome: "Admin",
    },
    messages: {
      loginWelcome: "Welcome to admin section",
    },
  },
};

const adminBro = new AdminBro({
  Databases: [connection],
  rootPath: "/admin",
  loginPath: "/admin/login",
  locale,
  resources: [
    Userschema,
    Rooms,
    Apartments,
    ContactMessage,
    homepageModels,
   
    {
      resource: Blogs,
      options: {
        properties: {
          body: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
        },
      },
    },
    {
      resource: Blogscomments,
      options: {
        properties: {
          body: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    },
    {
      resource: AdRates,
      options: {
        properties: {
          created_at: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          updated_at: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    },
    GoogleAdsense,
  ],
  branding: {
    companyName: "RoomNets",
    softwareBrothers: false,
    logo: "/api/v1/media/logo2.png",
    text: "welcome to roomnets admin",
  },
  dashboard: {
    handler: async () => {
      return { some: "output" };
    },
    component: AdminBro.bundle("./adminbro/home"),
  },
  // pages: {
  //   customPage: {
  //     label: "Custom page",

  //     handler: async (request, response, context) => {
  //       return {
  //         text: 'I am fetched from the backend',
  //       }
  //     },
  //     component: AdminBro.bundle('./components/page2'),
  //   },

  // }
});
// const router = AdminBroExpress.buildRouter (adminBro)
// let router = express.Router()
// router.use((req, res, next) => {
//   if (req.session && req.session.admin) {
//     req.session.adminUser = req.session.admin
//     next()
//   } else {
//     res.redirect(adminBro.options.loginPath)
//   }
// })
// router = AdminBroExpress.buildRouter(adminBro, router)
const ADMIN = {
  email: "admin@roomnets.com",
  password: "admin@roomnets.com",
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN;
    }
    return null;
  },
  cookieName: "adminbro",
  cookiePassword: "somePassword",
});

const Port = process.env.PORT || 8080;
App.use(adminBro.options.rootPath, router);
App.use(adminBro.options.loginPath, router);
App.use(cors());

App.use(express.json({ extended: false }));
App.use(express.static(path.join(__dirname, "./frontend")));
App.use(express.static(path.join(__dirname, "./admin2")));
App.set("views", path.join(__dirname, "views"));
// App.set("view engine", "ejs");
// App.use('/uploads', express.static('adminbro'));
App.use("/api/v1", UserRoutes);
// App.get("/admin", (req, res) => {
//   res.send({"admin":"admin route"});
// });
App.get("/admin2", (req, res) => {
  res.sendFile(path.join(__dirname, "./admin2", "index.html"));
});
App.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend", "index.html"));
});

App.listen(Port, (err, successs) => {
  if (err) throw err;
  else {
    console.log(`server running on port ${Port}`);
  }
});
