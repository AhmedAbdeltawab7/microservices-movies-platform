import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = new this.movieModel(createMovieDto);
    return movie.save();
  }

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async findOne(id: string): Promise<Movie> {
    const movie = await this.movieModel.findById(id).exec();
    if (!movie) throw new NotFoundException('Movie not found');
    return movie;
  }

  async update(id: string, updateDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.movieModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
    if (!movie) throw new NotFoundException('Movie not found');
    return movie;
  }

  async remove(id: string): Promise<void> {
    const result = await this.movieModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Movie not found');
  }
}
