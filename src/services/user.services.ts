import { User } from "../entities";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces/user.interfaces";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema, userUpdateSchema } from "../schemas/user.schema";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);

  return userReturnSchema.parse(user);
};

const read = async (admin: boolean): Promise<UserRead> => {
  if (admin) {
    const users: Array<User> = await userRepository.find();
    return userReadSchema.parse(users);
  }
  return userReadSchema.parse(await userRepository.find());
};

const update = async (userId: number, payload: UserUpdate) => {
  const userFound = await userRepository.findOneBy({ id: Number(userId) });
  const userUpdate: User = await userRepository.save({ ...userFound, ...payload });

  return userReturnSchema.parse(userUpdate);
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, update, destroy };
