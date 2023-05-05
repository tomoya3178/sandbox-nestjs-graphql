import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Resolver((of) => Todo)
export class TodoResolver {
  constructor(private service: TodoService) {}
  @Query(() => [Todo], { nullable: 'items' })
  todos() {
    return this.service.findAll();
  }
}
