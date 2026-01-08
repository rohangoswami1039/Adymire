import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IdentityModel } from "./identity.model";

export class IdentityService {
  async signup(email: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);

    const identity = await IdentityModel.create({
      email,
      password: hashed,
    });

    return this.generateToken(identity.id, email);
  }

  async login(email: string, password: string) {
    const identity = await IdentityModel.findOne({ email });
    if (!identity) throw new Error("Invalid credentials");

    const valid = await bcrypt.compare(password, identity.password);
    if (!valid) throw new Error("Invalid credentials");

    return this.generateToken(identity.id, email);
  }

  private generateToken(id: string, email: string) {
    return jwt.sign(
      { sub: id, email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );
  }
}
