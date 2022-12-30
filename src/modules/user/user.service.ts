import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/user.entity';
import { User, UserData, UserDataEdit } from 'src/graphql';
import { Roles } from 'src/entities';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<Users>,
    @Inject('ROLE_REPOSITORY')
    private roleRepository: Repository<Roles>,
  ) {}

  async getUsers(): Promise<Users[]> {
    try {
        return this.userRepository.find({
            where: {deletedAt: null}
        });
    } catch (error) {
        throw error;
    }
  }

  async getUserById( id: string ): Promise<Users> {
    try {
        return this.userRepository.findOne({
            where: { id: id, deletedAt: null }
        })
    } catch (error) {
        throw error;
    }
  }

  async getUserByRut( rut: string ): Promise<Users> {
    try {
        return this.userRepository.findOne({
            where: { rut: rut, deletedAt: null }
        })
    } catch (error) {
        throw error;
    }
  }
    
  async createUser( userData: UserData ): Promise<User> {
    try {
        const { username, password, idRole, rut } = userData;

        const idr = await this.roleRepository.findOne({
            where: { id: idRole, deleteAt: null }
        })

        const user = new Users();

        user.username = username;
        user.password = password;
        user.rut = rut;
        user.role = idr;

        return this.userRepository.save(user);

    } catch (error) {
        throw error;
        
    }
  }

  // async editUser( id: string, userDataEdit: UserDataEdit ): Promise<Users> {
  //   try {

  //       const user = await this.getUserById(id);

  //       if (!user) {
  //           throw new HttpException(`User con id=${id} no existe`, HttpStatus.BAD_REQUEST);
  //       }

  //       const { username, password } = userDataEdit;

  //       user.username = username;
  //       user.password = password;

  //       return this.userRepository.save(user);

  //   } catch (error) {
  //       throw error;
  //   }
  // }

  // async deleteUser( id: string ): Promise<Users> {
  //   try {

  //       const user = await this.getUserById(id);

  //       if (!user) {
  //           throw new HttpException(`User con id=${id} no existe`, HttpStatus.BAD_REQUEST);
  //       }

  //       user.deletedAt = new Date();

  //       return this.userRepository.save(user);
        
  //   } catch (error) {
  //       throw error;
  //   }
  // }

}