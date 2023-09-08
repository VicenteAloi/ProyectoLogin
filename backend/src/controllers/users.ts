import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken'

export const newUser = async (req: Request, res: Response) => {

  const { userName, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);


  //Validacion de si el usuario ya existe en la bd
  const user = await User.findOne({ where: { username: userName } })

  if (user) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el nombre ${userName}`
    })
  }

  try {
    await User.create({
      userName: userName,
      password: hashedPassword
    });

    res.json({
      msg: ` usuario ${userName} creado exitosamente`,
    })

  } catch (error) {
    res.status(400).json({
      msg: 'Ocurrio un Error',
      error
    });
  }


}

// export const loginUser = (req: Request, res: Response) => {
//   const { body } = req;

//   res.json({
//     msg: 'Login User',
//     body
//   })} 



export const loginUser = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  //Validamos si el usuario existe en la bd
  const user: any = await User.findOne({ where: { username: userName } })

  if (!user) {
    return res.status(400).json({
      msg: "No existe usuario"
    })
  }
  //Validamos password

  const passwordValid = await bcrypt.compare(password, user.password)
  if (!passwordValid) {
    return res.status(400).json({
      msg: "Password Incorrecto"
    })
  }

  // Generamos token 

  const token = jwt.sign({
    userName: userName
  }, process.env.SECRET_KEY || 'pepito123',/* expiresIn: 't en ms' Para que el token expire en un tiempo t */);

  res.json(token);

}

