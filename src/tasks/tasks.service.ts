import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: createTaskDto,
      include: { user: true },
    });
  }

  findAll() {
    return this.prisma.task.findMany({
      include: { user: true },
    });
  }

  findCompleted(completed: boolean) {
    return this.prisma.task.findMany({
      where: { completed },
      include: { user: true },
    });
  }

  findOne(id: number) {
    return this.prisma.task.findUniqueOrThrow({
      where: { id },
      include: { user: true },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
      include: { user: true },
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
      include: { user: true },
    });
  }
}
