import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../error";
import { RealEstateReturn } from "../interfaces/realEstate.interfaces";
import { categoryRepository, realEstateRepository } from "../repositories";
import addressRepository from "../repositories/address.repository";

const create = async (payload: RealEstateReturn): Promise<RealEstate> => {
  const address: Address = addressRepository.create(payload.address);
  await addressRepository.save(address);

  const category: Category | null = await categoryRepository.findOne({
    where: { id: payload.categoryId },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const newRealEstate = { ...payload, address: address, category: category! };

  const realEstate: RealEstate = realEstateRepository.create(newRealEstate);
  await realEstateRepository.save(realEstate);

  return realEstate;
};

const read = async (): Promise<Array<RealEstate>> => {
  const realEstates: Array<RealEstate> | null = await realEstateRepository
    .createQueryBuilder("realEstate")
    .leftJoinAndSelect("realEstate.address", "addresses")
    .getMany();

  return realEstates;
};

export default { create, read };
