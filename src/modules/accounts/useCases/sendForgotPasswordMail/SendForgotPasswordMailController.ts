import { container } from "tsyringe";
import { Request, Response } from "express";
import { SendForgoPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";



class SendForgotPasswordMailController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { email } = request.body;

    const sendForgoPasswordMailUseCase = container.resolve(SendForgoPasswordMailUseCase);

    await sendForgoPasswordMailUseCase.execute(email);
    
    return response.send()
    
  }

}

export { SendForgotPasswordMailController };