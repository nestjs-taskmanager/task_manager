import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TaskEntity } from './entities/task.entity';

@Controller('tasks')
@ApiTags('Tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The task has been successfully created.',
    type: TaskEntity,
  })
  async create(@Body() createTaskDto: CreateTaskDto) {
    return new TaskEntity(await this.tasksService.create(createTaskDto));
  }

  @Get('completed')
  @ApiOkResponse({ type: [TaskEntity] })
  async findCompleted() {
    const tasks = await this.tasksService.findCompleted(true);
    return tasks.map((task) => new TaskEntity(task));
  }

  @Get('pending')
  @ApiOkResponse({ type: [TaskEntity] })
  async findPending() {
    const tasks = await this.tasksService.findCompleted(false);
    return tasks.map((task) => new TaskEntity(task));
  }

  @Get()
  @ApiOkResponse({ type: [TaskEntity] })
  async findAll() {
    const tasks = await this.tasksService.findAll();
    return tasks.map((task) => new TaskEntity(task));
  }

  @Get(':id')
  @ApiOkResponse({ type: TaskEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new TaskEntity(await this.tasksService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: TaskEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return new TaskEntity(await this.tasksService.update(id, updateTaskDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: TaskEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new TaskEntity(await this.tasksService.remove(id));
  }
}
