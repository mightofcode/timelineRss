module.exports = {
  apps: [
    {
      name: "timelineRssUpdate",
      script: "./updateRss.js",
      args: "",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "timelineRssServer",
      script: "./index.js",
      args: "",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        EGG_SERVER_ENV:"prod"
      },
    },
  ],
};
