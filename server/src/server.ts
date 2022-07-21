import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';

import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import apiRouter from './routes/api';
import logger from 'jet-logger';
import { CustomError } from '@shared/errors';
import mongoose, {ObjectId} from 'mongoose';
import Notes from '@models/notes-model';


// Constants
const app = express();


/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}


/***********************************************************************************
 *                         API routes and error handling
 **********************************************************************************/

// Add api router
app.use('/api', apiRouter);

// Error handling
app.use((err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
    logger.err(err, true);
    const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST);
    return res.status(status).json({
        error: err.message,
    });
});


/***********************************************************************************
 *                                  Front-end content
 **********************************************************************************/

// Set views dir
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);

// Set static dir
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Serve index.html file
app.get('/', async (_: Request, res: Response) => {
    const notes = await Notes.find();
    console.log(notes);
    res.send('Found all post');
});

app.post('/noteSearch', async (req: Request, res: Response) => {
    const note = await Notes.findById(req.body.id);
    console.log(note);
    res.send(note);
});

app.post('/noteUpdate', async (req: Request, res:Response) => {
    const foundPostObj = new Notes(await Notes.findOne({ _id: req.body.id }));
    foundPostObj.title = req.body.title;
    foundPostObj.description = req.body.description;
    foundPostObj.save()
    res.send('Record updated')
})

app.post('/noteDelete', async (req:Request, res:Response) => {
    await Notes.findByIdAndDelete({ _id: req.body.id })
    res.send('Record Deleted')
})


app.post('/noteInsert', async (req: Request, res: Response) => {
    const NoteObj = new Notes({
        title: req.body.title,
        description: req.body.title, 
    })
    await NoteObj.save();
    res.send('Post Request Made');
});


// Connect to DB
mongoose.connect('mongodb+srv://vishwaksenan:vish1998o@cluster0.sxlo4.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('connected'))
.catch(e=>console.log(e));

// Export here and start in a diff file (for testing).
export default app;