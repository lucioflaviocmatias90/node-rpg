import { EntityRepository, AbstractRepository, getRepository } from 'typeorm';
import { Room } from '../models/Room';
import { UserRoom } from '../models/UserRoom';
import { ModelNotFound } from '../exceptions/ModelNotFound';

@EntityRepository(Room)
export class RoomRepository extends AbstractRepository<Room> {
  fetchAll(): Promise<Room[]> {
    return this.repository.find({ relations: ['status'] });
  }

  async findById(id: string): Promise<Room | undefined> {
    const room = await this.repository.findOne({
      where: { id },
      relations: ['status', 'users']
    });

    if (!room) {
      throw new ModelNotFound('Sala não encontrada');
    }

    console.log('room', room);

    return room;
  }

  async createAndSave(name: string, userId: string): Promise<void> {
    const statusRoomId = 'f891cb29-2b75-4781-99e4-4550d20fda67';
    const room = new Room();

    room.name = name;
    room.statusRoomId = statusRoomId;

    const createdRoom = await this.manager.save(room);

    const userRoomRepository = getRepository(UserRoom);

    const userRoom = userRoomRepository.create({
      userId: userId,
      roomId: createdRoom.id
    });

    await userRoomRepository.save(userRoom);
  }

  findByName(name: string) {
    return this.repository.findOne({ name });
  }
}
