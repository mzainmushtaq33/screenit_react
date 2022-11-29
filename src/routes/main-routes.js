import { lazy } from "react";
import Layouts from "../component/layouts/layouts.jsx";
import Loadable from "../component/ui-components/loading/loadable.jsx";
import Users from "../pages/account/users.jsx";
import Help from "../pages/help/help.js";
import Schedules from "../pages/schedule/schedule.js";
import Templates from "../pages/templates/template.js";
import Widgets from "../pages/widgets/widgets.js";

// project imports=
import * as slug from "./slug";

// dashboard routing
const Dashboard = Loadable(
  lazy(() => import("../pages/dashboard/dashboard.jsx"))
);

const Screen = Loadable(lazy(() => import("../pages/screen/screen.js")));
const AddScreen = Loadable(lazy(() => import("../pages/screen/add-screen.jsx")));
const Media = Loadable(lazy(() => import("../pages/media/media.js")));

const AddTemplate = Loadable(lazy(() => import("../pages/templates/add-template.jsx")));
const SelTemplate = Loadable(lazy(() => import("../pages/templates/select-templates.jsx")));
const SelWidgets = Loadable(lazy(() => import("../pages/widgets/select-widgets.jsx")));

const Playlist = Loadable(lazy(() => import("../pages/playlist/playlist.js")));

const AddSchedules = Loadable(lazy(() => import("../pages/schedule/add-schedule.jsx")));

const Devices = Loadable(lazy(() => import("../pages/devices/devices.jsx")));
const Location = Loadable(lazy(() => import("../pages/location/location.jsx")));

const Test = Loadable(lazy(() => import("../pages/test/test.jsx")));
const TestAbu = Loadable(lazy(() => import("../pages/test/testAbu.jsx")));

const Account = Loadable(lazy(() => import("../pages/account/account.jsx")));
const Profile = Loadable(lazy(() => import("../pages/account/profile.jsx")));

const MainRoutes = {
  path: "/",
  element: <Layouts />,
  children: [
    {
      path: slug.TEST,
      element: <Test />,
    },
    {
      path: "/testAbu",
      element: <TestAbu />,
    },
    {
      path: slug.DASHBOARD,
      element: <Dashboard />,
    },
    {
      path: slug.SCREENS,
      element: <Screen />,
    },
    {
      path: slug.ADD_SCREEN,
      element: <AddScreen />,
    },
    {
      path: slug.MEDIA,
      element: <Media />,
    },
    {
      path: slug.TEMPLATES,
      element: <Templates />,
    },
    {
      path: slug.ADD_TEMPLATE,
      element: <AddTemplate />,
    },
    {
      path: slug.SEL_TEMPLATE,
      element: <SelTemplate />,
    },
    {
      path: slug.PLAYLISTS,
      element: <Playlist />,
    },
    {
      path: slug.SCHEDULES,
      element: <Schedules />,
    },
    {
      path: slug.ADD_SCHEDULES,
      element: <AddSchedules />,
    },
    {
      path: slug.WIDGETS,
      element: <Widgets />,
    },
    {
      path: slug.SEL_WIDGETS,
      element: <SelWidgets />,
    },
    {
      path: slug.DEVICES,
      element: <Devices />,
    },
    {
      path: slug.LOCATION,
      element: <Location />,
    },
    {
      path: slug.HELP,
      element: <Help />,
    },
    {
      path: slug.ACCOUNT_PROFILE,
      element: <Account />,
    },
    {
      path: slug.ACCOUNT_SETTINGS,
      element: <Profile />,
    },
    {
      path: slug.USERS,
      element: <Users />,
    },
  ],
};

export default MainRoutes;
