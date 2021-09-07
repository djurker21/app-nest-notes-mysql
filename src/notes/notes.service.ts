import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    return await this.notesRepository.save(createNoteDto);
  }

  async findAll() {
    return await this.notesRepository.find();
  }

  async findOne(id: number) {
    return await this.notesRepository.findOne(id);
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    return await this.notesRepository.update(id, updateNoteDto);
  }

  async remove(id: number) {
    return await this.notesRepository.delete(id);
  }
}
