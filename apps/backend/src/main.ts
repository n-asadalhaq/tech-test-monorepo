import { envConfig } from "./config/env";
import app from "./core/app";

app.listen(envConfig.PORT, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
