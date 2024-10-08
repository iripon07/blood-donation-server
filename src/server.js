import mongoose from "mongoose";
import config from "./config/index.js";
import app from './app.js'

async function main() {
    try {
        await mongoose.connect(config.database_url);
        console.log(`Database connected successfully! ...`);
        app.listen(config.port, () => {
            console.log(`Application is running on `, config.port);
        })
    } catch (error) {
        console.error('Failed to connect', error)
    }
}

main()