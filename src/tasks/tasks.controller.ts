import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
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
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get('completed')
  @ApiOkResponse({ type: [TaskEntity] })
  findCompleted() {
    return this.tasksService.findCompleted(true);
  }

  @Get('pending')
  @ApiOkResponse({ type: [TaskEntity] })
  findPending() {
    return this.tasksService.findCompleted(false);
  }

  @Get()
  @ApiOkResponse({ type: [TaskEntity] })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TaskEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TaskEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TaskEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.remove(id);
  }
}
