export class User {

  name!: string;
  id!: number;
  email!: string;
  password!: {
    pwd: string;
    confirmPwd: string;
  };
  gender!: string;
  terms!: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
