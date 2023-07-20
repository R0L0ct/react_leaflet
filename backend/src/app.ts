import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import poligonoRoutes from "./routes/poligono.routes";
import coordenadaRoutes from "./routes/coordenada.routes";
// var corsOptions = {
//   origin: "https://react-leaflet-yz3w-git-main-r0l0ct.vercel.app",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
const app = express();
// app.use(cors(corsOptions));
// app.use(function (_req, res, next) {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://react-leaflet-yz3w-git-main-r0l0ct.vercel.app"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://react-leaflet-yz3w-ovd2tweav-r0l0ct.vercel.app",
    ],
    credentials: true,
  })
);
app.use(function (req: Request, res: Response, next: NextFunction) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = [
    "http://localhost:3000",
    "https://react-leaflet-yz3w-ovd2tweav-r0l0ct.vercel.app",
  ];
  const origin = req.headers.origin as string;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});
app.use(express.json());

app.use("/", poligonoRoutes);
app.use("/", coordenadaRoutes);

export default app;
