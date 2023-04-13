import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as dotenv from 'dotenv'

dotenv.config()
const expectedKey = process.env.API_KEY;

@Injectable()
export class ApiKeyService {
  isKeyValid(key: string): boolean {
    if (key === expectedKey) {
      return true;
    }
    throw new UnauthorizedException()
  }
}