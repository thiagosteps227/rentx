"use strict";

var _UsersRepositoryInMemory = require("@modules/accounts/repositories/in-memory/UsersRepositoryInMemory");

var _UsersTokensRepositoryInMemory = require("@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory");

var _DayjsDateProvider = require("@shared/container/providers/DateProvider/implementations/DayjsDateProvider");

var _MailProviderInMemory = require("@shared/container/providers/MailProvider/inMemory/MailProviderInMemory");

var _AppError = require("@shared/errors/AppError");

var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");

let sendForgotPasswordMailUseCase;
let usersRepositoryInMemory;
let dateProvider;
let usersTokensRepositoryInMemory;
let mailProvider;
describe("Send forgot mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new _UsersRepositoryInMemory.UsersRepositoryInMemory();
    dateProvider = new _DayjsDateProvider.DayjsDateProvider();
    usersTokensRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokensRepositoryInMemory();
    mailProvider = new _MailProviderInMemory.MailProviderInMemory();
    sendForgotPasswordMailUseCase = new _SendForgotPasswordMailUseCase.SendForgotPasswordMailUseCase(usersRepositoryInMemory, usersTokensRepositoryInMemory, dateProvider, mailProvider);
  });
  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");
    await usersRepositoryInMemory.create({
      driver_license: "12345",
      email: "thiago@email.com",
      name: "Thiago",
      password: "1234"
    });
    await sendForgotPasswordMailUseCase.execute("thiago@email.com");
    expect(sendMail).toHaveBeenCalled();
  });
  it("Should not be able to send an email if user does not exist", async () => {
    await expect(sendForgotPasswordMailUseCase.execute("ka@uj.gr")).rejects.toEqual(new _AppError.AppError("User does not exists!"));
  });
  it("Should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory, "create");
    usersRepositoryInMemory.create({
      driver_license: "12355",
      email: "bruno@email.com",
      name: "Bruno",
      password: "1234"
    });
    await sendForgotPasswordMailUseCase.execute("bruno@email.com");
    expect(generateTokenMail).toBeCalled();
  });
});