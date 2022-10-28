import { Injectable } from "@nestjs/common"
import { Builder } from "builder-pattern"
import { User } from "entities/user.entity"
import { UserDTO } from "services/dtobjects/user.dto"
import { Mapper } from "./supports/base.mapper"
import { hashSync } from "bcrypt"


@Injectable()
export class UserMapper extends Mapper<User, UserDTO> {

  toDTO(source: User): UserDTO {

    return Builder(UserDTO)
      .id(source.id)
      .name(source.name)
      .email(source.email)
      .address(source.address)
      .phone(source.phone)
      .avatar(source.avatar)
      .authorities(source.authorities)
      .wallet(source.wallet)
      .isActive(source.isActive)
      .avgRate(source.avgRate)
      .createdAt(source.createdAt)
      .updatedAt(source.updatedAt)
      .build()

  }

  toEntity(source: Partial<UserDTO>): User {

    return Builder(User)
      .name(source.name)
      .email(source.email)
      .address(source.address)
      .phone(source.phone)
      .avatar(source.avatar)
      .authorities(source.authorities)
      .wallet(source.wallet)
      .isActive(source.isActive)
      .avgRate(source.avgRate)
      .createdAt(source.createdAt)
      .updatedAt(source.updatedAt)
      .build()
  }
}
