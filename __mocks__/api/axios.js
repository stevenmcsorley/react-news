import { readFileSync } from "fs";
import path from "path";


const trends = JSON.parse(
    readFileSync(path.join(__dirname, 'res.json')).toString()
)

export const _trends = trends.trends; 

const mock = {
    trends: jest.fn(()=>{

       
            return trends
        

    })
}


export default mock;
