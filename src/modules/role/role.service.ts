import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Role, RoleData, RoleDataEdit } from 'src/graphql';
import { Repository } from 'typeorm';
import { Roles } from '../../entities';

@Injectable()
export class RoleService {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private roleRepository: Repository<Roles>,
  ) {}

  async getRoles(): Promise<Roles[]> {
    try {
        return this.roleRepository.find({
            where: { deleteAt: null }
        });
    } catch (error) {
        throw error;        
    }
  }

  async getRoleById( id: string ): Promise<Roles> {
    try {
        return this.roleRepository.findOne({
            where: { id: id, deleteAt: null }
        })
    } catch (error) {
        throw error;
    }
  }
    
  async createRole( roleData: RoleData ): Promise<Role> {
    try {
        const { name } = roleData;
        const role = new Roles();

        role.name = name;

        return this.roleRepository.save(role);

    } catch (error) {
        throw error;
        
    }
  }

  async editRole( id: string, roleDataEdit: RoleDataEdit ): Promise<Roles> {
    try {

        const role = await this.getRoleById(id);

        if (!role) {
            throw new HttpException(`role con id=${id} no existe`, HttpStatus.BAD_REQUEST);
        }

        const { name } = roleDataEdit;

        role.name = name;

        return this.roleRepository.save(role);

    } catch (error) {
        throw error;
    }
  }

  async deleteRole( id: string ): Promise<Roles> {
    try {

        const role = await this.getRoleById(id);

        if (!role) {
            throw new HttpException(`role con id=${id} no existe`, HttpStatus.BAD_REQUEST);
        }

        role.deleteAt = new Date();

        return this.roleRepository.save(role);
        
    } catch (error) {
        throw error;
    }
  }
}



