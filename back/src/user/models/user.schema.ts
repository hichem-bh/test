import { Schema as MongooseSchema, now } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserModel {
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ default: now() })
  createdAt: Date;
}

export const UserModelSchema = SchemaFactory.createForClass(UserModel);

