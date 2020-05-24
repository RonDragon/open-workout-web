import * as express from "express";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
  }
  // Serve only the static files form the dist directory

  public config(): void {
    const app = this.app;
    app.use(express.static("./dist/<open-workout-web>"));
    app.listen("port",process.env.PORT || 8080);
    app.get("/*", function (req, res) {
      res.sendFile("index.html", { root: "dist/<open-workout-web>/" });
    });
  }

}
