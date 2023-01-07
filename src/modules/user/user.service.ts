import { Injectable, Inject, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
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
            relations: ['role'],
            where: {deletedAt: null}
        });
    } catch (error) {
        throw error;
    }
  }

  async getUserById( id: string ): Promise<Users> {
    try {
        return this.userRepository.findOne({
            relations: ['role'],
            where: { id: id, deletedAt: null }
        })
    } catch (error) {
        throw error;
    }
  }

  async getUserByRut( rut: string ): Promise<Users> {
    try {
        return this.userRepository.findOne({
            relations: ['role'],
            where: { rut: rut, deletedAt: null }
        })
    } catch (error) {
        throw error;
    }
  }

  async getUserByUsername( username: string ): Promise<Users> {
    try {
        return this.userRepository.findOne({
            relations: ['role'],
            where: { username: username, deletedAt: null }
        })
    } catch (error) {
        throw error;
    }
  }
    
  async createUser( userData: UserData ): Promise<User> {
    try {
        const { username, password, idRole, rut } = userData;

        if (!rut) {
          throw new HttpException(
              'Parametro rut es indefinido',
              HttpStatus.BAD_REQUEST,
          );
        }

        if (!username) {
          throw new HttpException(
              'Parametro username es indefinido',
              HttpStatus.BAD_REQUEST,
          );
        }

        if (!password) {
          throw new HttpException(
              'Parametro rut es indefinido',
              HttpStatus.BAD_REQUEST,
          );
        }

        if (!idRole) {
          throw new HttpException(
              'Parametro idRole es indefinido',
              HttpStatus.BAD_REQUEST,
          );
        }

        const userByRut = await this.getUserByRut(rut);

        if(userByRut){
          throw new HttpException(
            'Parametro rut ya existe',
            HttpStatus.BAD_REQUEST,
          )
        }
        
        const userByUsername = await this.getUserByUsername(username);

        if(userByUsername){
          throw new HttpException(
            'Parametro username ya existe',
            HttpStatus.BAD_REQUEST,
          )
        }

        const roleById = await this.roleRepository.findOne({
          where: { id: idRole, deleteAt: null }
        })
 
        if (!roleById) {
          throw new HttpException(
              `Role con id ${roleById} no existe`,
              HttpStatus.BAD_REQUEST, 
          );
        }

        const user = new Users();

        user.username = username;
        user.password = password;
        user.rut = rut;
        user.role = roleById;

        await this.userRepository.save(user);

        const userDone = await this.getUserByRut(rut);

        return userDone;

    } catch (error) {
        throw error;
        
    }
  }

  async editUser( id: string, userDataEdit: UserDataEdit ): Promise<Users> {
    try {

        const user = await this.getUserById(id);

        if (!user) {
            throw new HttpException(`User con id=${id} no existe`, HttpStatus.BAD_REQUEST);
        }

        const { username, password, rut, idRole } = userDataEdit;

        const roleById = await this.roleRepository.findOne({
          where: { id: idRole, deleteAt: null }
        })

        if (!roleById) {
          throw new HttpException(`Role con id=${idRole} no existe`, HttpStatus.BAD_REQUEST);
      }

        user.username = username;
        user.password = password;
        user.rut = rut;
        user.role = roleById;

        await this.userRepository.save(user);

        const userEdit = await this.getUserByRut(rut);

        return userEdit;

    } catch (error) {
        throw error;
    }
  }

  async deleteUser( id: string ): Promise<Users> {
    try {

        const user = await this.getUserById(id);

        if (!user) {
            throw new HttpException(`User con id=${id} no existe`, HttpStatus.BAD_REQUEST);
        }

        user.deletedAt = new Date();

        return this.userRepository.save(user);
        
    } catch (error) {
        throw error;
    }
  }
}