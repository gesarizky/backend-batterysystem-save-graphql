import { Service } from "node-windows";

const svc = new Service({
  name: "Battery System Data Saving",
  description: "This is program node.js for saving data battery system.",
  script:
    "C:\\Users\\H P\\Desktop\\backend-batterysystem-save-graphql\\index.js", //path program nodejs change \ to \\
});

svc.on("install", () => {
  svc.start();
});

svc.install();
