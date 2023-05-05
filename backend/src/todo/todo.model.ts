// src/todo/models/todo.models.ts
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  userId: string;
}
