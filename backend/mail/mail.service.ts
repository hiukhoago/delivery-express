import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Order } from 'entities/order.entity';
import { User } from 'entities/user.entity';
import { Payload } from 'security/payload';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User, token: string) {
    const url = `http://localhost:3030/api/auth/confirm?jwt=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Delivery App! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: user.name,
        url,
      },
    });
  }

  async sendConfirmOrder(user: Pick<User,'name'|'email'|'authorities'>, order?: Order,img?: string) {

    await this.mailerService.sendMail({
      to: user.email,
      from: 'YOUR FROM FOR DELIVERY SERVICE', // override default from
      subject: `Confirm your order #${order?.id}`,
      template: './invoice', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: user.name,
        info1: order?.information[0],
        info2: order?.information[1],
        product: order?.product,
        note: order?.note,
        status: order?.status,
      },
    });
  }
}
