import mongoose from 'mongoose';
import { mongo_uri} from '../constants/constants';


export async function connectToDb() {
    await mongoose.connect(mongo_uri);
}