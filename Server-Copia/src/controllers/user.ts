import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken'

export const newUser = async (req: Request, res: Response) => {

  const { password, email, name, surname, dni, isAdmin } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);


  //Validacion de si el usuario ya existe en la bd
  const user = await User.findOne({ where: { email: email } })

  if (user) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el mail ${email}`
    })
  }

  try {
    await User.create({
      email: email,
      password: hashedPassword,
      name: name,
      surname: surname,
      dni: dni,
      isAdmin: isAdmin
    });

    res.json({
      msg: ` usuario creado exitosamente`,
    })

  } catch (error) {
    res.status(400).json({
      msg: 'Ocurrio un Error',
      error
    });
  }


}


export const loginUser = async (req: Request, res: Response) => {
  const { email, password, adminLogin } = req.body;

  //Validamos si el usuario existe en la bd
  const user: any = await User.findOne({ where: { email: email } })

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

  if (user.isAdmin != adminLogin) {
    if (user.isAdmin) {
      return res.status(400).json({
        msg: "No es Usuario"
      })
    } else {
      return res.status(400).json({
        msg: "No es Admin"
      })
    }

  }

  // Generamos token 

  const token = jwt.sign({
    email: email,
    isAdmin: adminLogin
  }, process.env.SECRET_KEY || 'pepito123',/* expiresIn: 't en ms' Para que el token expire en un tiempo t */);

  res.json(token);

}

// export const getUsers = async (req: Request, res: Response) => {
//   const listUsers = await User.findAll();
//   res.json(listUsers)
// };