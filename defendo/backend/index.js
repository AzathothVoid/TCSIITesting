import express from 'express';
import addressRoutes from './routes/adressRoutes.js'
import checkoutRoutes from './routes/checkoutRoutes.js'
import userRoutes from './routes/userRoutes.js'
import carasouelRoutes from './routes/carasouelRoutes.js'
import justDroppedRoutes from './routes/justDroppedRoutes.js'
import categoryRoutes from './routes/categoriesRoutes.js'
import instaDetailRoutes from './routes/instaDetailRoutes.js'
import warrantyDetailRoutes from './routes/warrantyDetailRoutes.js'
import customerReviewRoutes from './routes/customerReviewRoutes.js'
import FAQRoutes from './routes/FAQRoutes.js'
import ringRoutes from './routes/ringRoutes.js'
import braceletRoutes from './routes/braceletRoutes.js'
import chainRoutes from './routes/chainRoutes.js'
import pendantRoutes from './routes/pendantRoutes.js'
import shirtRoutes from './routes/shirtRoutes.js'
import TankTopsRoutes from './routes/TankTops.js'
import newReleaseRoutes from './routes/newReleaseRoutes.js'
import limitedDropRoutes from './routes/limitedDropRoutes.js'
import stripeRoutes from './routes/stripeRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import allProductRoutes from './routes/allProductRoutes.js'
import {error} from "./middleware/error.js"
import cors from 'cors'
import bodyParser from 'body-parser'
import {connectDB} from './config/db.js'
import path from 'path';
import cookieParser from 'cookie-parser';

const app = express();
const __dirname = path.resolve();
const publicPath = path.join(__dirname, 'public')

const corsOptions ={
    origin:'*', 
    credentials:true          
 }
  

connectDB();

app.use(cors());
app.use(cookieParser())
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use('/', addressRoutes);
app.use('/', checkoutRoutes);
app.use('/', userRoutes);
app.use('/', carasouelRoutes);
app.use('/', justDroppedRoutes);
app.use('/', categoryRoutes);
app.use('/', instaDetailRoutes);
app.use('/', warrantyDetailRoutes);
app.use('/', customerReviewRoutes);
app.use('/', FAQRoutes);
app.use('/', ringRoutes);
app.use('/', braceletRoutes);
app.use('/', chainRoutes);
app.use('/', pendantRoutes);
app.use('/', shirtRoutes);
app.use('/', TankTopsRoutes);
app.use('/', newReleaseRoutes);
app.use('/', limitedDropRoutes);
app.use('/', stripeRoutes);
app.use('/', orderRoutes);
app.use('/', allProductRoutes);


app.use(error);

const port = process.env.PORT ||  7000;

app.listen(port, ()=>{
    console.log(`The server is listening at port --------- ${port}`);
})
