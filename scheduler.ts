import Bree from 'bree';
import {typescript_worker} from "./lib/typescript_worker";

(async () => {
    try {

        const bree = new Bree({
            jobs: [
                {
                    name: 'HelloWorld',
                    path: typescript_worker,
                    interval: 'every 10 seconds',
                    worker: {workerData: { filename: './jobs/hello_world.ts'}}
                }
            ],
            workerMessageHandler: (message) => {
                console.log(message);
            }
        });

        bree.start()
    } catch (error) {
        console.error(error);
    }
})();
