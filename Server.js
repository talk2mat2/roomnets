const express = require("express");
const App = express();
const connectDB = require("./db/connection");
const cors = require("cors");
const UserRoutes = require("./routes/userroutes");
const mongoose = require("mongoose");
const path = require("path");
const { SocketIo } = require("./socket.io");
const Userschema = require("./models/userMoodel");
const Subscribers=require("./models/subscribers");
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
      homepageModels: "Homepage Content"
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

  resources: [
    
    {
      resource:Userschema,
      options: {
        properties: {
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          imgUrl: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          Password: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
        },
      },
    },
    
    {
      resource: Rooms,
      options: {
        properties: {
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          media: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          location: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    }, 
    {
      resource:   Apartments,
      options: {
        properties: {
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          media: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          location: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          locationType: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          locationCoordinates: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          Building_type: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          isPaidAdd: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          rent: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    },
    Subscribers,
    {
      resource: homepageModels,
      options: {
        properties: {
          aboutUs: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          faq: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          privacy: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          Banners_NG: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_ZA: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_KE: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_IE: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_GH: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_GB: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_US: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          RecentApartments: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          RecentRooms: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          name: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          videoUrl: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          _id: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          InstagramLink: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          linkedinLink: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          FacebookLink: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          SiteOfficeAddress: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          YoutubeLink: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
        },
      },
    },

    {
      resource: Blogs,
      options: {
        properties: {
          body: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          imagUri: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          updated_a: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          created_at: {
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
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          comments_for_post: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    },
    {
      resource:  ContactMessage,
      options: {
        properties: {
    message: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
    _id: {
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
  ],  locale,
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

// this is the entry file
