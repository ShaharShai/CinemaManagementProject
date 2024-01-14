import mongoose from "mongoose";

const moviesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    genres: [{
        type: String,
    }],
    image: {
        type: String,
    },
    premiered: {
        type: Date,
    }
}, { versionKey: false });

const Movie = mongoose.model('Movie', moviesSchema);

export default Movie;